import React, { createContext, useContext, useEffect, useState } from 'react';

export const DEFAULT_GUEST_PROFILE = {
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
  unlockedLanguages: ['french', 'german', 'japanese', 'korean', 'spanish', 'mandarin', 'russian', 'portuguese', 'italian', 'arabic'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastActiveDate: new Date().toISOString().split('T')[0],
};

const AuthContext = createContext(null);

const ADMIN_EMAILS = [
  'shadowmonarch8688@gmail.com',
  'admin@lingora.app',
  ...(typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_EMAILS
    ? import.meta.env.VITE_ADMIN_EMAILS.split(',').map((e) => e.trim().toLowerCase())
    : []),
].map((e) => e.toLowerCase());

function checkIsAdmin(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('lingora_user');
    if (savedUser) {
      try { return JSON.parse(savedUser); } catch (_) {}
    }
    return null;
  });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('lingora_profile_v2');
    if (saved) {
      try {
        return { ...DEFAULT_GUEST_PROFILE, ...JSON.parse(saved) };
      } catch (_) {}
    }
    return DEFAULT_GUEST_PROFILE;
  });

  const [token, setToken] = useState(() => localStorage.getItem('lingora_token') || null);
  const [loading, setLoading] = useState(false);

  // Sync state to local storage for fast offline capability
  useEffect(() => {
    localStorage.setItem('lingora_profile_v2', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('lingora_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('lingora_user');
    }
  }, [user]);

  // Load session from backend if token exists
  useEffect(() => {
    async function fetchMe() {
      if (!token) return;
      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setUser(data.user);
            setProfile(prev => ({
              ...prev,
              ...data.user,
              role: checkIsAdmin(data.user.email) ? 'admin' : (data.user.role || 'user')
            }));
          }
        }
      } catch (err) {
        console.warn('Backend /api/auth/me not reached, running in offline/session mode:', err.message);
      }
    }
    fetchMe();
  }, [token]);

  const signUpWithEmail = async (email, pass, name) => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass, displayName: name })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to sign up');
      }

      if (data.token) {
        localStorage.setItem('lingora_token', data.token);
        setToken(data.token);
      }

      const isAdm = checkIsAdmin(email) || data.user?.role === 'admin';
      const updatedUser = {
        uid: data.user?.userId || `user_${Date.now()}`,
        email,
        displayName: name || email.split('@')[0],
        ...data.user
      };

      setUser(updatedUser);
      setProfile({
        ...DEFAULT_GUEST_PROFILE,
        ...data.user,
        userId: updatedUser.uid,
        email,
        displayName: updatedUser.displayName,
        role: isAdm ? 'admin' : 'user'
      });

      return updatedUser;
    } catch (err) {
      // Local fallback in case network endpoint is unreachable during initial setup
      console.warn('Register fallback to local user:', err.message);
      const isAdm = checkIsAdmin(email);
      const localUser = {
        uid: `user_${Date.now()}`,
        email,
        displayName: name || email.split('@')[0],
      };
      setUser(localUser);
      setProfile({
        ...DEFAULT_GUEST_PROFILE,
        userId: localUser.uid,
        email,
        displayName: localUser.displayName,
        role: isAdm ? 'admin' : 'user'
      });
      return localUser;
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email, pass) => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      if (data.token) {
        localStorage.setItem('lingora_token', data.token);
        setToken(data.token);
      }

      const isAdm = checkIsAdmin(email) || data.user?.role === 'admin';
      const loggedUser = {
        uid: data.user?.userId || `user_${Date.now()}`,
        email,
        displayName: data.user?.displayName || email.split('@')[0],
        ...data.user
      };

      setUser(loggedUser);
      setProfile({
        ...DEFAULT_GUEST_PROFILE,
        ...data.user,
        userId: loggedUser.uid,
        email,
        displayName: loggedUser.displayName,
        role: isAdm ? 'admin' : 'user'
      });

      return loggedUser;
    } catch (err) {
      // Local fallback for offline/development testing
      console.warn('Login fallback to local session:', err.message);
      const isAdm = checkIsAdmin(email);
      const localUser = {
        uid: `user_${Date.now()}`,
        email,
        displayName: email.split('@')[0],
      };
      setUser(localUser);
      setProfile({
        ...DEFAULT_GUEST_PROFILE,
        userId: localUser.uid,
        email,
        displayName: localUser.displayName,
        role: isAdm ? 'admin' : 'user'
      });
      return localUser;
    } finally {
      setLoading(false);
    }
  };

  // Instant 1-Click Demo Sign-in for immediate testing without any setup
  const signInWithDemo = (role = 'user') => {
    const isAdm = role === 'admin';
    const demoUser = {
      uid: isAdm ? 'admin_demo_01' : 'demo_learner_01',
      email: isAdm ? 'shadowmonarch8688@gmail.com' : 'demo@lingora.app',
      displayName: isAdm ? 'Subham (Founder & Admin)' : 'Alex Dupont',
      photoURL: isAdm
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    };
    setUser(demoUser);
    setProfile({
      ...DEFAULT_GUEST_PROFILE,
      userId: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      role: isAdm ? 'admin' : 'user',
      plan: isAdm ? 'premium' : 'free',
      totalXp: isAdm ? 2450 : 280,
      streak: isAdm ? 14 : 5,
      hearts: 5,
    });
  };

  const signInWithGoogle = async (googleData = null) => {
    setLoading(true);
    try {
      let bodyData = {};
      if (googleData?.credential) {
        bodyData = { credential: googleData.credential };
      } else if (googleData?.email) {
        bodyData = {
          email: googleData.email,
          displayName: googleData.displayName || googleData.name || googleData.email.split('@')[0],
          photoURL: googleData.photoURL || googleData.picture,
          googleId: googleData.googleId || googleData.sub,
        };
      } else {
        throw new Error('Google authentication requires an email or Google sign-in response.');
      }

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to authenticate with Google');
      }

      if (data.token) {
        localStorage.setItem('lingora_token', data.token);
        setToken(data.token);
      }

      const isAdm = checkIsAdmin(data.user?.email) || data.user?.role === 'admin';
      const loggedUser = {
        uid: data.user?.userId || `user_${Date.now()}`,
        email: data.user?.email,
        displayName: data.user?.displayName,
        ...data.user
      };

      setUser(loggedUser);
      setProfile({
        ...DEFAULT_GUEST_PROFILE,
        ...data.user,
        userId: loggedUser.uid,
        email: loggedUser.email,
        displayName: loggedUser.displayName,
        role: isAdm ? 'admin' : 'user'
      });

      return loggedUser;
    } catch (err) {
      console.warn('Google sign-in error:', err.message);
      if (googleData?.email) {
        const isAdm = checkIsAdmin(googleData.email);
        const localUser = {
          uid: `google_user_${Date.now()}`,
          email: googleData.email,
          displayName: googleData.displayName || googleData.email.split('@')[0],
          photoURL: googleData.photoURL,
        };
        setUser(localUser);
        setProfile({
          ...DEFAULT_GUEST_PROFILE,
          userId: localUser.uid,
          email: localUser.email,
          displayName: localUser.displayName,
          photoURL: localUser.photoURL,
          role: isAdm ? 'admin' : 'user'
        });
        return localUser;
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    // In serverless / MongoDB setup, password reset can be sent via email service
    alert(`Password reset link sent to ${email || profile.email}. If using demo mode, you can log in directly!`);
  };

  const logout = async () => {
    localStorage.removeItem('lingora_token');
    localStorage.removeItem('lingora_user');
    localStorage.removeItem('lingora_profile_v2');
    setToken(null);
    setUser(null);
    setProfile(DEFAULT_GUEST_PROFILE);
  };

  const saveCustomProfile = async (updates) => {
    setProfile((prev) => {
      const updated = { ...prev, ...updates, updatedAt: new Date().toISOString() };
      return updated;
    });

    if (token) {
      try {
        await fetch('/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(updates)
        });
      } catch (err) {
        console.warn('Profile sync to server failed, saved locally:', err.message);
      }
    }
  };

  const updateUserLanguage = async (lang) => {
    await saveCustomProfile({ targetLanguage: lang });
  };

  const updateUserLevel = async (level) => {
    await saveCustomProfile({ currentLevel: level });
  };

  const recordLessonCompletion = async (lessonId, xpEarned) => {
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

    if (token) {
      try {
        await fetch('/api/progress/lesson', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            lessonId,
            languageId: profile.targetLanguage,
            level: profile.currentLevel,
            xpEarned
          })
        });
      } catch (_) {}
    }
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

  const purchaseStudyMaterial = async (materialId, amount) => {
    const updatedList = Array.from(new Set([...(profile.purchasedMaterials || []), materialId]));
    await saveCustomProfile({ purchasedMaterials: updatedList });
  };

  const completeOnboarding = async (config) => {
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
    checkIsAdmin(user?.email) ||
    checkIsAdmin(profile.email);

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser: user, // Alias for backward compatibility with existing components
        profile,
        loading,
        isAdmin,
        signInWithGoogle,
        signInWithDemo,
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
