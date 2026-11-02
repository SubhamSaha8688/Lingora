import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase.ts';
import { SupportedLanguage } from '../data/curriculum.ts';

export interface UserProfile {
  userId: string;
  email: string;
  displayName: string;
  photoURL?: string;
  targetLanguage: SupportedLanguage;
  currentLevel: string;
  totalXp: number;
  streak: number;
  hearts: number;
  gems: number;
  dailyGoalXp: number;
  role: 'user' | 'admin';
  plan: 'free' | 'premium';
  interfaceLanguage: 'english' | 'hindi';
  hasCompletedOnboarding: boolean;
  studyGoal: string;
  dailyStudyMinutes: number;
  completedLessons: string[];
  purchasedMaterials: string[];
  unlockedLanguages: SupportedLanguage[];
  createdAt: string;
  updatedAt: string;
  lastActiveDate: string;
}

interface AuthContextType {
  firebaseUser: FirebaseUser | null;
  profile: UserProfile;
  loading: boolean;
  isAdmin: boolean;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserLanguage: (lang: SupportedLanguage) => Promise<void>;
  updateUserLevel: (level: string) => Promise<void>;
  recordLessonCompletion: (lessonId: string, xpEarned: number) => Promise<void>;
  deductHeart: () => Promise<void>;
  refillHearts: () => Promise<void>;
  upgradeToPremium: () => Promise<void>;
  saveCustomProfile: (updates: Partial<UserProfile>) => Promise<void>;
  purchaseStudyMaterial: (materialId: string, amount: number) => Promise<void>;
  completeOnboarding: (config: {
    targetLanguage: SupportedLanguage;
    level: string;
    interfaceLanguage: 'english' | 'hindi';
    studyGoal: string;
    dailyMinutes: number;
  }) => Promise<void>;
}

const DEFAULT_GUEST_PROFILE: UserProfile = {
  userId: 'guest_user',
  email: 'learner@lingora.app',
  displayName: 'Lingora Learner',
  photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  targetLanguage: 'french',
  currentLevel: 'A1',
  totalXp: 120,
  streak: 3,
  hearts: 5,
  gems: 150,
  dailyGoalXp: 50,
  role: 'user',
  plan: 'free',
  interfaceLanguage: 'english',
  hasCompletedOnboarding: false,
  studyGoal: 'travel',
  dailyStudyMinutes: 15,
  completedLessons: [],
  purchasedMaterials: [],
  unlockedLanguages: ['french', 'german', 'japanese', 'korean', 'spanish'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastActiveDate: new Date().toISOString().split('T')[0],
};

const AuthContext = createContext<AuthContextType | null>(null);

const ADMIN_EMAILS: string[] = [
  'shadowmonarch8688@gmail.com',
  'admin@lingora.app',
  ...(typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ADMIN_EMAILS
    ? ((import.meta as any).env.VITE_ADMIN_EMAILS as string).split(',').map((e: string) => e.trim().toLowerCase())
    : []),
].map((e) => e.toLowerCase());

function checkIsAdmin(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('lingora_profile_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (_) {}
    }
    return DEFAULT_GUEST_PROFILE;
  });
  const [loading, setLoading] = useState<boolean>(true);

  // Sync state to local storage for instant offline capability
  useEffect(() => {
    localStorage.setItem('lingora_profile_v2', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        await loadOrCreateUserProfile(user);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadOrCreateUserProfile = async (user: FirebaseUser) => {
    const userRef = doc(db, 'users', user.uid);
    try {
      const snap = await getDoc(userRef);
      const isAutoAdmin = checkIsAdmin(user.email);

      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        const finalRole = isAutoAdmin ? 'admin' : (data.role || 'user');
        setProfile({
          ...DEFAULT_GUEST_PROFILE,
          ...data,
          role: finalRole,
          displayName: user.displayName || data.displayName || 'Learner',
          photoURL: user.photoURL || data.photoURL || DEFAULT_GUEST_PROFILE.photoURL,
        });
      } else {
        const newProfile: UserProfile = {
          ...DEFAULT_GUEST_PROFILE,
          userId: user.uid,
          email: user.email || 'learner@lingora.app',
          displayName: user.displayName || user.email?.split('@')[0] || 'Lingora Learner',
          photoURL: user.photoURL || DEFAULT_GUEST_PROFILE.photoURL,
          role: isAutoAdmin ? 'admin' : 'user',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastActiveDate: new Date().toISOString().split('T')[0],
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.warn('Error loading user profile from Firestore:', err);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      await loadOrCreateUserProfile(result.user);
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    if (result.user) {
      await updateProfile(result.user, { displayName: name });
      await loadOrCreateUserProfile(result.user);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    if (result.user) {
      await loadOrCreateUserProfile(result.user);
    }
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    await signOut(auth);
    setFirebaseUser(null);
    setProfile(DEFAULT_GUEST_PROFILE);
  };

  const saveCustomProfile = async (updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      const updated = { ...prev, ...updates, updatedAt: new Date().toISOString() };
      if (firebaseUser) {
        const userRef = doc(db, 'users', firebaseUser.uid);
        updateDoc(userRef, updates).catch((err) => {
          handleFirestoreError(err, OperationType.UPDATE, `users/${firebaseUser.uid}`);
        });
      }
      return updated;
    });
  };

  const updateUserLanguage = async (lang: SupportedLanguage) => {
    await saveCustomProfile({ targetLanguage: lang });
  };

  const updateUserLevel = async (level: string) => {
    await saveCustomProfile({ currentLevel: level });
  };

  const recordLessonCompletion = async (lessonId: string, xpEarned: number) => {
    const today = new Date().toISOString().split('T')[0];
    const prevDate = profile.lastActiveDate;
    let newStreak = profile.streak;

    if (prevDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (prevDate === yesterday) {
        newStreak += 1;
      } else if (!prevDate) {
        newStreak = 1;
      }
    }

    const completed = Array.from(new Set([...(profile.completedLessons || []), lessonId]));
    const newXp = (profile.totalXp || 0) + xpEarned;
    const newGems = (profile.gems || 0) + 15;

    await saveCustomProfile({
      completedLessons: completed,
      totalXp: newXp,
      streak: newStreak,
      gems: newGems,
      lastActiveDate: today,
    });
  };

  const deductHeart = async () => {
    if (profile.plan === 'premium') return;
    const updatedHearts = Math.max(0, (profile.hearts || 5) - 1);
    await saveCustomProfile({ hearts: updatedHearts });
  };

  const refillHearts = async () => {
    await saveCustomProfile({ hearts: 5 });
  };

  const upgradeToPremium = async () => {
    await saveCustomProfile({ plan: 'premium', hearts: 5 });
  };

  const purchaseStudyMaterial = async (materialId: string, amount: number) => {
    const updatedList = Array.from(new Set([...(profile.purchasedMaterials || []), materialId]));
    await saveCustomProfile({ purchasedMaterials: updatedList });

    // Store in Firestore subcollection if authenticated
    if (firebaseUser) {
      const purchaseRef = doc(db, `users/${firebaseUser.uid}/purchases`, `purch_${Date.now()}`);
      setDoc(purchaseRef, {
        purchaseId: `purch_${Date.now()}`,
        userId: firebaseUser.uid,
        materialId,
        amount,
        currency: 'INR',
        status: 'completed',
        purchasedAt: new Date().toISOString(),
      }).catch((err) => {
        handleFirestoreError(err, OperationType.CREATE, `users/${firebaseUser.uid}/purchases`);
      });
    }
  };

  const completeOnboarding = async (config: {
    targetLanguage: SupportedLanguage;
    level: string;
    interfaceLanguage: 'english' | 'hindi';
    studyGoal: string;
    dailyMinutes: number;
  }) => {
    await saveCustomProfile({
      targetLanguage: config.targetLanguage,
      currentLevel: config.level,
      interfaceLanguage: config.interfaceLanguage,
      studyGoal: config.studyGoal,
      dailyStudyMinutes: config.dailyMinutes,
      hasCompletedOnboarding: true,
    });
  };

  const isAdmin =
    profile.role === 'admin' ||
    checkIsAdmin(firebaseUser?.email) ||
    checkIsAdmin(profile.email);

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        profile,
        loading,
        isAdmin,
        signInWithGoogle,
        signUpWithEmail,
        loginWithEmail,
        resetPassword,
        logout,
        updateUserLanguage,
        updateUserLevel,
        recordLessonCompletion,
        deductHeart,
        refillHearts,
        upgradeToPremium,
        saveCustomProfile,
        purchaseStudyMaterial,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
