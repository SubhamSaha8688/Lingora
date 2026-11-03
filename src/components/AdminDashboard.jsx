import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useCurriculum } from '../context/CurriculumContext.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import {
  Shield,
  Plus,
  BookOpen,
  Users,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  FileText,
  Video,
  Download,
  Upload,
  RefreshCw,
  Key,
  Trash2,
  Sparkles,
  Layers,
  Settings,
  DollarSign,
  Globe,
  Award,
  ArrowLeft,
  Lock,
  UserCheck,
  UserX,
  Mail,
} from 'lucide-react';

export const AdminDashboard = ({ onNavigateHome, onOpenAuthModal }) => {
  const {
    profile,
    isAdmin,
    firebaseUser,
    adminEmails,
    addAdminEmail,
    removeAdminEmail,
    unlockAdminWithPin,
    signInWithDemo,
    adminLoginWithEmailPassword,
    createAdminAccount,
    logout,
  } = useAuth();

  const {
    languages,
    curriculum,
    studyMaterials,
    paymentConfig,
    addLanguage,
    addLesson,
    deleteLesson,
    addStudyMaterial,
    updatePaymentConfig,
    exportCurriculumData,
    importCurriculumData,
    resetToDefaultCurriculum,
  } = useCurriculum();

  const [activeAdminTab, setActiveAdminTab] = useState('courses'); // 'courses' | 'lessons' | 'materials' | 'payments' | 'users' | 'whitelist' | 'backup'
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [showPinUnlock, setShowPinUnlock] = useState(false);
  const [notification, setNotification] = useState('');

  // Admin Gate Direct Email & Password State
  const [gateAuthMode, setGateAuthMode] = useState('login'); // 'login' | 'register'
  const [gateEmail, setGateEmail] = useState('');
  const [gatePassword, setGatePassword] = useState('');
  const [gateName, setGateName] = useState('');
  const [gateError, setGateError] = useState('');
  const [gateLoading, setGateLoading] = useState(false);

  // Admin Whitelist Form State
  const [newAdminEmailInput, setNewAdminEmailInput] = useState('');
  const [adminManageError, setAdminManageError] = useState('');

  // Partner Admin Account Creation State (Tab 6)
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerPassword, setPartnerPassword] = useState('');
  const [partnerLoading, setPartnerLoading] = useState(false);

  // 1. New Course / Language Form State
  const [newLangId, setNewLangId] = useState('');
  const [newLangName, setNewLangName] = useState('');
  const [newLangNative, setNewLangNative] = useState('');
  const [newLangFlag, setNewLangFlag] = useState('🌐');
  const [newLangPathway, setNewLangPathway] = useState('CEFR');
  const [newLangLevels, setNewLangLevels] = useState('A1, A2, B1, B2');
  const [newLangDesc, setNewLangDesc] = useState('');

  // 2. New Lesson Form State
  const [lessonLang, setLessonLang] = useState('french');
  const [lessonLevel, setLessonLevel] = useState('A1');
  const [lessonUnitNum, setLessonUnitNum] = useState(1);
  const [lessonUnitTitle, setLessonUnitTitle] = useState('Unit 1: Foundations');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonObjective, setLessonObjective] = useState('');
  const [lessonVideoUrl, setLessonVideoUrl] = useState('');
  const [lessonVideoDuration, setLessonVideoDuration] = useState('3:30');
  const [lessonGrammarTitle, setLessonGrammarTitle] = useState('');
  const [lessonGrammarExplanation, setLessonGrammarExplanation] = useState('');
  const [dialogueSpeakerA, setDialogueSpeakerA] = useState('Teacher');
  const [dialogueLineA, setDialogueLineA] = useState('');
  const [dialogueTransA, setDialogueTransA] = useState('');
  const [dialogueSpeakerB, setDialogueSpeakerB] = useState('Student');
  const [dialogueLineB, setDialogueLineB] = useState('');
  const [dialogueTransB, setDialogueTransB] = useState('');
  const [vocabWord, setVocabWord] = useState('');
  const [vocabPronun, setVocabPronun] = useState('');
  const [vocabTrans, setVocabTrans] = useState('');
  const [quizPrompt, setQuizPrompt] = useState('');
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizDistractor1, setQuizDistractor1] = useState('');
  const [quizDistractor2, setQuizDistractor2] = useState('');

  // 3. New Material Form State
  const [matTitle, setMatTitle] = useState('');
  const [matLang, setMatLang] = useState('french');
  const [matLevel, setMatLevel] = useState('A1');
  const [matPriceInr, setMatPriceInr] = useState(49);
  const [matPriceUsd, setMatPriceUsd] = useState(1.99);
  const [matPages, setMatPages] = useState('32 Pages');
  const [matDesc, setMatDesc] = useState('');

  // 4. Payment Gateway Settings Form State
  const [payGateway, setPayGateway] = useState(paymentConfig?.gatewayMode || 'razorpay');
  const [payRzpKey, setPayRzpKey] = useState(paymentConfig?.razorpayKeyId || '');
  const [payStripeKey, setPayStripeKey] = useState(paymentConfig?.stripePublishableKey || '');
  const [payInrMonthly, setPayInrMonthly] = useState(paymentConfig?.inrMonthlyPrice || 199);
  const [payInrYearly, setPayInrYearly] = useState(paymentConfig?.inrYearlyPrice || 1499);
  const [payUsdMonthly, setPayUsdMonthly] = useState(paymentConfig?.usdMonthlyPrice || 4.99);
  const [payUsdYearly, setPayUsdYearly] = useState(paymentConfig?.usdYearlyPrice || 39.99);

  // 5. Learners List (Dynamically populated from backend & local storage)
  const [userList, setUserList] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userSearch, setUserSearch] = useState('');

  const loadAllUsers = async () => {
    setLoadingUsers(true);
    try {
      let serverUsers = [];
      try {
        const res = await fetch('/api/users');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.users)) serverUsers = data.users;
        }
      } catch (_) {}

      const localRaw = localStorage.getItem('lingora_all_registered_users');
      const localUsers = localRaw ? JSON.parse(localRaw) : [];

      const map = new Map();

      // Seed with founders always
      map.set('saha88979@gmail.com', {
        id: 'founder_1',
        name: 'Subham Saha (Founder)',
        email: 'saha88979@gmail.com',
        role: 'admin',
        plan: 'premium',
        xp: 850,
        streak: 12,
      });
      map.set('shadowmonarch8688@gmail.com', {
        id: 'founder_2',
        name: 'Shadow Monarch (Founder)',
        email: 'shadowmonarch8688@gmail.com',
        role: 'admin',
        plan: 'premium',
        xp: 790,
        streak: 10,
      });

      // Add server users
      serverUsers.forEach((u) => {
        if (u.email) {
          const clean = u.email.toLowerCase();
          map.set(clean, {
            id: u.userId || u._id || u.id || `u_${Date.now()}`,
            name: u.displayName || u.name || clean.split('@')[0],
            email: clean,
            role: u.role || (adminEmails.includes(clean) ? 'admin' : 'user'),
            plan: u.plan || 'free',
            xp: u.totalXp || 100,
            streak: u.streak || 1,
            createdAt: u.createdAt,
          });
        }
      });

      // Add local registered users (including newly signed-in partner!)
      if (Array.isArray(localUsers)) {
        localUsers.forEach((u) => {
          if (u.email) {
            const clean = u.email.toLowerCase();
            if (!map.has(clean)) {
              map.set(clean, {
                ...u,
                role: u.role || (adminEmails.includes(clean) ? 'admin' : 'user'),
              });
            }
          }
        });
      }

      setUserList(Array.from(map.values()));
    } catch (err) {
      console.warn('Error loading users:', err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    loadAllUsers();
  }, [adminEmails]);

  const showNotify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  // Handler: Add new admin email to whitelist
  const handleAddAdminEmail = (e) => {
    e.preventDefault();
    setAdminManageError('');
    if (!newAdminEmailInput.trim()) return;

    const res = addAdminEmail(newAdminEmailInput.trim());
    if (res.success) {
      showNotify(`Granted Administrator privileges to ${newAdminEmailInput.trim().toLowerCase()}`);
      setNewAdminEmailInput('');
      loadAllUsers();
    } else {
      setAdminManageError(res.error || 'Failed to add admin');
    }
  };

  // Handler: Create partner admin account with email & password
  const handleCreatePartnerAdmin = async (e) => {
    e.preventDefault();
    setAdminManageError('');
    setPartnerLoading(true);
    try {
      const res = await createAdminAccount({
        name: partnerName.trim(),
        email: partnerEmail.trim(),
        password: partnerPassword,
      });
      if (!res.success) {
        throw new Error(res.error || 'Failed to create partner admin');
      }
      showNotify(`Admin account created for ${partnerEmail.trim()}! Initial password set.`);
      setPartnerName('');
      setPartnerEmail('');
      setPartnerPassword('');
      loadAllUsers();
    } catch (err) {
      setAdminManageError(err.message || 'Failed to provision admin account');
    } finally {
      setPartnerLoading(false);
    }
  };

  // Handler: Remove admin email
  const handleRemoveAdminEmail = (emailToRemove) => {
    if (confirm(`Are you sure you want to revoke admin access for ${emailToRemove}?`)) {
      const res = removeAdminEmail(emailToRemove);
      if (res.success) {
        showNotify(`Revoked admin access for ${emailToRemove}`);
      } else {
        alert(res.error || 'Cannot remove admin');
      }
    }
  };

  // Handler: Emergency Master PIN Unlock
  const handleUnlockPin = async (e) => {
    e.preventDefault();
    setPinError('');
    const res = await unlockAdminWithPin(pinInput);
    if (!res.success) {
      setPinError(res.error || 'Invalid Master PIN. Default PIN is: lingora2026');
    }
  };

  // ==========================================
  // CASE A: NOT LOGGED IN OR NOT ADMIN
  // ==========================================
  if (!isAdmin) {
    const isGuest = !firebaseUser || profile.userId === 'guest_user';

    const handleAdminGateSubmit = async (e) => {
      e.preventDefault();
      setGateError('');
      setGateLoading(true);

      try {
        if (gateAuthMode === 'login') {
          await adminLoginWithEmailPassword(gateEmail.trim(), gatePassword);
          showNotify(`Welcome to Admin Console, ${gateEmail}!`);
        } else {
          if (!gateName.trim()) throw new Error('Please enter your full name.');
          if (gatePassword.length < 6) throw new Error('Password must be at least 6 characters.');
          const res = await createAdminAccount({
            name: gateName.trim(),
            email: gateEmail.trim(),
            password: gatePassword,
          });
          if (!res.success) throw new Error(res.error || 'Failed to register admin account.');
          await adminLoginWithEmailPassword(gateEmail.trim(), gatePassword);
          showNotify(`Admin account registered for ${gateEmail}!`);
        }
      } catch (err) {
        setGateError(err.message || 'Authentication error. Please check your credentials.');
      } finally {
        setGateLoading(false);
      }
    };

    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full border border-slate-100 shadow-2xl space-y-6 animate-in zoom-in-95">
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-white mx-auto flex items-center justify-center shadow-lg shadow-blue-900/20 mb-3">
              <Shield className="w-7 h-7 text-amber-300" />
            </div>

            <span className="text-[10px] font-black uppercase tracking-widest text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-1">
              Restricted Area • /admin
            </span>
            <h2 className="text-2xl font-black text-[#20243A]">
              Founder & Admin Console
            </h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Sign in directly with your authorized admin email and password. No Google or Gmail sign-in required.
            </p>
          </div>

          {!isGuest && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-2">
              <div className="truncate">
                <span className="font-bold block text-[11px]">Currently signed in:</span>
                <span className="text-slate-600 truncate">{profile.email}</span>
              </div>
              <button
                type="button"
                onClick={logout}
                className="px-2.5 py-1 rounded-xl bg-white border border-amber-300 text-amber-900 text-[10px] font-black hover:bg-amber-100 cursor-pointer shrink-0"
              >
                Sign Out
              </button>
            </div>
          )}

          {/* Mode Switcher: Sign In vs Register Admin Account */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => { setGateAuthMode('login'); setGateError(''); }}
              className={`py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                gateAuthMode === 'login'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Email & Password Sign In
            </button>
            <button
              type="button"
              onClick={() => { setGateAuthMode('register'); setGateError(''); }}
              className={`py-2 rounded-xl text-xs font-black transition cursor-pointer ${
                gateAuthMode === 'register'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Register Admin Account
            </button>
          </div>

          {gateError && (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{gateError}</span>
            </div>
          )}

          {/* Email & Password Admin Form */}
          <form onSubmit={handleAdminGateSubmit} className="space-y-3.5">
            {gateAuthMode === 'register' && (
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Your Full Name</label>
                <div className="relative mt-1">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={gateName}
                    onChange={(e) => setGateName(e.target.value)}
                    placeholder="e.g. Subham Saha or Partner Name"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Admin Email Address</label>
              <div className="relative mt-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  placeholder="e.g. saha88979@gmail.com or your email"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Admin Password</label>
              <div className="relative mt-1">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  value={gatePassword}
                  onChange={(e) => setGatePassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={gateLoading}
              className="w-full mt-2 py-3 px-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-md shadow-blue-900/15 transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4 text-amber-300" />
              <span>
                {gateLoading
                  ? 'Authenticating...'
                  : gateAuthMode === 'login'
                  ? 'Sign In to Admin Console'
                  : 'Register & Access Console'}
              </span>
            </button>
          </form>

          {/* Quick Fast Passes & Fail-safes */}
          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <button
              type="button"
              onClick={() => signInWithDemo('admin')}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer border border-amber-200"
            >
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Instant Founder Fast Pass (Subham)</span>
            </button>

            {!showPinUnlock ? (
              <button
                type="button"
                onClick={() => setShowPinUnlock(true)}
                className="w-full text-center text-[11px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer block"
              >
                Use Emergency Founder Master PIN (lingora2026)
              </button>
            ) : (
              <form onSubmit={handleUnlockPin} className="space-y-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter Master PIN (lingora2026)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-center tracking-widest text-[#20243A] focus:outline-none focus:border-[#1E3A8A] bg-white"
                />
                {pinError && (
                  <p className="text-[11px] font-bold text-rose-600 text-center">{pinError}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                >
                  Verify Master PIN
                </button>
              </form>
            )}

            {onNavigateHome && (
              <button
                type="button"
                onClick={onNavigateHome}
                className="w-full py-2.5 px-4 rounded-xl text-slate-500 hover:text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Student Portal</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // CASE B: AUTHORIZED ADMIN CONSOLE
  // ==========================================

  // 1. Create Course / Language Handler
  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!newLangId.trim() || !newLangName.trim()) return;

    const formattedId = newLangId.trim().toLowerCase().replace(/\s+/g, '_');
    const levelsArr = newLangLevels
      .split(',')
      .map((l) => l.trim())
      .filter(Boolean);

    addLanguage({
      id: formattedId,
      name: newLangName.trim(),
      nativeName: newLangNative.trim() || newLangName.trim(),
      flag: newLangFlag.trim() || '🌐',
      countryCode: formattedId.slice(0, 2),
      speechCode: `${formattedId.slice(0, 2)}-${formattedId.slice(0, 2).toUpperCase()}`,
      description: newLangDesc.trim() || `${newLangName.trim()} language course on Lingora.`,
      accentColor: '#1E3A8A',
      pathwayType: newLangPathway,
      availableLevels: levelsArr.length > 0 ? levelsArr : ['A1', 'A2', 'B1'],
    });

    showNotify(`Language course "${newLangName}" published live to Lingora!`);
    setNewLangId('');
    setNewLangName('');
    setNewLangNative('');
    setNewLangDesc('');
  };

  // 2. Create Lesson Handler
  const handleCreateLesson = (e) => {
    e.preventDefault();
    if (!lessonTitle.trim() || !lessonObjective.trim()) return;

    const newLessonObj = {
      id: `${lessonLang.slice(0, 2)}-${lessonLevel.toLowerCase()}-${Date.now().toString().slice(-5)}`,
      languageId: lessonLang,
      level: lessonLevel,
      unitNumber: Number(lessonUnitNum) || 1,
      unitTitle: lessonUnitTitle.trim() || `Unit ${lessonUnitNum}`,
      title: lessonTitle.trim(),
      description: lessonObjective.trim(),
      category: 'Masterclass Module',
      estimatedMinutes: 5,
      xpReward: 35,
      objective: lessonObjective.trim(),
      videoUrl: lessonVideoUrl.trim() || undefined,
      videoTitle: `${lessonTitle.trim()} • Video Masterclass`,
      videoDuration: lessonVideoDuration || '3:30',
      videoBookmarks: [
        { timestamp: '00:15', seconds: 15, label: 'Introduction' },
        { timestamp: '01:10', seconds: 70, label: 'Grammar Board' },
        { timestamp: '02:20', seconds: 140, label: 'Dialogue Breakdown' },
      ],
      grammarNotes: lessonGrammarTitle
        ? [
            {
              title: lessonGrammarTitle.trim(),
              explanation: lessonGrammarExplanation.trim() || 'Master this essential language formula.',
              examples: [`Example in ${lessonLang}: ${lessonTitle}`],
            },
          ]
        : [],
      conversationDialogue: dialogueLineA && dialogueLineB
        ? [
            {
              speaker: dialogueSpeakerA,
              text: dialogueLineA,
              translation: dialogueTransA || 'Dialogue line translation',
            },
            {
              speaker: dialogueSpeakerB,
              text: dialogueLineB,
              translation: dialogueTransB || 'Response translation',
            },
          ]
        : [],
      vocabulary: vocabWord
        ? [
            {
              word: vocabWord.trim(),
              romajiOrPronunciation: vocabPronun.trim() || vocabWord.trim(),
              translation: vocabTrans.trim() || 'Key vocabulary word',
              partOfSpeech: 'Word',
            },
          ]
        : [],
      exercises: quizPrompt
        ? [
            {
              id: `q-${Date.now()}`,
              type: 'multiple_choice',
              prompt: quizPrompt.trim(),
              options: [quizAnswer.trim(), quizDistractor1.trim() || 'Option B', quizDistractor2.trim() || 'Option C'].filter(Boolean),
              correctAnswer: quizAnswer.trim(),
              explanation: 'Exercise authored in Admin Console.',
            },
          ]
        : [
            {
              id: `q-${Date.now()}`,
              type: 'multiple_choice',
              prompt: `What is the key focus of "${lessonTitle}"?`,
              options: [lessonObjective.trim(), 'Random Guess', 'None of the above'],
              correctAnswer: lessonObjective.trim(),
              explanation: 'Direct curriculum objective verification.',
            },
          ],
    };

    addLesson(lessonLang, newLessonObj);
    showNotify(`Lesson "${lessonTitle}" successfully published live to ${lessonLang.toUpperCase()}!`);
    setLessonTitle('');
    setLessonObjective('');
    setLessonVideoUrl('');
    setVocabWord('');
    setVocabTrans('');
    setQuizPrompt('');
    setQuizAnswer('');
  };

  // 3. Create Study Material Handler
  const handleCreateMaterial = (e) => {
    e.preventDefault();
    if (!matTitle.trim()) return;

    addStudyMaterial({
      id: `guide-${matLang}-${Date.now().toString().slice(-4)}`,
      languageId: matLang,
      level: matLevel,
      title: matTitle.trim(),
      description: matDesc.trim() || 'Comprehensive grammar and vocabulary reference handbook.',
      pageCount: matPages || '40 Pages',
      priceInInr: Number(matPriceInr) || 49,
      priceInUsd: Number(matPriceUsd) || 1.99,
      coverGradient: 'from-blue-600 to-indigo-800',
      sampleChapters: ['1. Core Foundations', '2. Essential Grammar Formulas', '3. Real Roleplay Scenarios'],
      downloadUrl: '#',
    });

    showNotify(`Study Guide "${matTitle}" added to the Store!`);
    setMatTitle('');
    setMatDesc('');
  };

  // 4. Save Payment Gateway Config
  const handleSavePaymentConfig = (e) => {
    e.preventDefault();
    updatePaymentConfig({
      gatewayMode: payGateway,
      razorpayKeyId: payRzpKey.trim(),
      stripePublishableKey: payStripeKey.trim(),
      inrMonthlyPrice: Number(payInrMonthly),
      inrYearlyPrice: Number(payInrYearly),
      usdMonthlyPrice: Number(payUsdMonthly),
      usdYearlyPrice: Number(payUsdYearly),
    });
    showNotify('Payment Gateway & Pricing settings saved!');
  };

  // 5. User Plan Toggle
  const toggleUserPlan = async (userId, userEmail, currentPlan) => {
    const newPlan = currentPlan === 'premium' ? 'free' : 'premium';
    setUserList((prev) =>
      prev.map((u) =>
        u.id === userId || u.email?.toLowerCase() === userEmail?.toLowerCase()
          ? { ...u, plan: newPlan }
          : u
      )
    );

    try {
      await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, plan: newPlan }),
      });
    } catch (_) {}

    showNotify(`Updated membership for ${userEmail} to ${newPlan.toUpperCase()}!`);
  };

  const toggleUserRole = async (userId, userEmail, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    if (newRole === 'admin') {
      addAdminEmail(userEmail);
    } else {
      removeAdminEmail(userEmail);
    }

    setUserList((prev) =>
      prev.map((u) =>
        u.id === userId || u.email?.toLowerCase() === userEmail?.toLowerCase()
          ? { ...u, role: newRole }
          : u
      )
    );

    try {
      await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, role: newRole }),
      });
    } catch (_) {}

    showNotify(`Updated ${userEmail} role to ${newRole.toUpperCase()}!`);
  };

  // Export JSON Backup
  const handleExportBackup = () => {
    const dataStr = exportCurriculumData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lingora-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showNotify('Curriculum backup downloaded as JSON!');
  };

  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target.result;
      const res = importCurriculumData(content);
      if (res.success) {
        showNotify('Curriculum and settings restored successfully!');
      } else {
        alert('Failed to restore backup: ' + res.error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="bg-[#20243A] text-white rounded-3xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#1E3A8A] text-white">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black">Founder & Admin Console</h1>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-white">
                LIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Signed in as: <span className="text-amber-400 font-bold">{firebaseUser?.email || profile.email}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Learner Portal</span>
            </button>
          )}

          <button
            onClick={handleExportBackup}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Backup</span>
          </button>
        </div>
      </div>

      {notification && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Admin Tab Switcher */}
      <div className="bg-white rounded-3xl p-2 border border-slate-100 shadow-sm flex items-center gap-1.5 overflow-x-auto">
        {[
          { id: 'courses', label: '1. Launch Course', icon: Globe },
          { id: 'lessons', label: '2. Add Lesson & Video', icon: Video },
          { id: 'materials', label: '3. PDF Store', icon: FileText },
          { id: 'payments', label: '4. Payments & Gateways', icon: CreditCard },
          { id: 'users', label: '5. Learners & Members', icon: Users },
          { id: 'whitelist', label: '6. Admin Whitelist', icon: Key },
          { id: 'backup', label: '7. Backup & Sync', icon: RefreshCw },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeAdminTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveAdminTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#1E3A8A] text-white shadow-md shadow-blue-900/15'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: LAUNCH NEW COURSE / LANGUAGE */}
      {activeAdminTab === 'courses' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-5">
            <div>
              <h2 className="text-lg font-black text-[#20243A]">Launch a Brand New Subject / Language</h2>
              <p className="text-xs text-slate-500 mt-1">
                Once published, this course instantly appears in the header dropdown, learn path, and AI tutor across the whole platform without writing any code.
              </p>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Course Slug / ID</label>
                  <input
                    type="text"
                    required
                    value={newLangId}
                    onChange={(e) => setNewLangId(e.target.value)}
                    placeholder="e.g. dutch, hindi, business_english"
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Course Name</label>
                  <input
                    type="text"
                    required
                    value={newLangName}
                    onChange={(e) => setNewLangName(e.target.value)}
                    placeholder="e.g. Dutch or Business English"
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Native Script / Name</label>
                  <input
                    type="text"
                    value={newLangNative}
                    onChange={(e) => setNewLangNative(e.target.value)}
                    placeholder="e.g. Nederlands or हिन्दी"
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Flag / Emoji Icon</label>
                  <input
                    type="text"
                    value={newLangFlag}
                    onChange={(e) => setNewLangFlag(e.target.value)}
                    placeholder="e.g. 🇳🇱 or 🇮🇳 or 💼"
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Pathway Standard</label>
                  <select
                    value={newLangPathway}
                    onChange={(e) => setNewLangPathway(e.target.value)}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white focus:outline-none focus:border-[#1E3A8A]"
                  >
                    <option value="CEFR">CEFR (European Framework: A1, A2, B1, B2)</option>
                    <option value="JLPT">JLPT (Japanese: N5, N4, N3, N2, N1)</option>
                    <option value="TOPIK">TOPIK (Korean: 1, 2, 3, 4, 5, 6)</option>
                    <option value="HSK">HSK (Mandarin: 1, 2, 3, 4, 5, 6)</option>
                    <option value="Standard">Standard Modules (Foundations, Intermediate, Fluent)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Available Levels (comma-separated)</label>
                  <input
                    type="text"
                    value={newLangLevels}
                    onChange={(e) => setNewLangLevels(e.target.value)}
                    placeholder="A1, A2, B1, B2"
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Course Description</label>
                <textarea
                  rows="2"
                  value={newLangDesc}
                  onChange={(e) => setNewLangDesc(e.target.value)}
                  placeholder="Master Dutch from scratch with interactive AI dialogues and video masterclasses."
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-md transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Launch New Course Instantly</span>
              </button>
            </form>
          </div>

          {/* Active Courses Summary */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-extrabold text-sm text-[#20243A]">Currently Active Subjects ({languages.length})</h3>
            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {languages.map((l) => {
                const count = (curriculum[l.id] || []).length;
                return (
                  <div
                    key={l.id}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <FlagIcon code={l.id} size="sm" />
                      <div>
                        <span className="font-bold text-[#20243A]">{l.name}</span>
                        <span className="text-[10px] text-slate-400 block font-mono">{l.id}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#1E3A8A]">
                      {count} Lessons
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LESSON & VIDEO MASTERCLASS BUILDER */}
      {activeAdminTab === 'lessons' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-[#20243A]">Publish a New Masterclass Lesson</h2>
            <p className="text-xs text-slate-500 mt-1">
              Author full live-class alternatives: video masterclasses, teacher grammar boards, 2-speaker dialogues, and interactive quiz checks.
            </p>
          </div>

          <form onSubmit={handleCreateLesson} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Target Language</label>
                <select
                  value={lessonLang}
                  onChange={(e) => setLessonLang(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white focus:outline-none focus:border-[#1E3A8A]"
                >
                  {languages.map((l) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Level</label>
                <select
                  value={lessonLevel}
                  onChange={(e) => setLessonLevel(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white focus:outline-none focus:border-[#1E3A8A]"
                >
                  {(languages.find((l) => l.id === lessonLang)?.availableLevels || ['A1', 'A2']).map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Unit Number</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={lessonUnitNum}
                  onChange={(e) => setLessonUnitNum(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Unit Title</label>
                <input
                  type="text"
                  value={lessonUnitTitle}
                  onChange={(e) => setLessonUnitTitle(e.target.value)}
                  placeholder="e.g. Unit 2: Daily Routines"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Lesson Title</label>
                <input
                  type="text"
                  required
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  placeholder="e.g. Ordering at a French Bistro"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Learning Objective</label>
                <input
                  type="text"
                  required
                  value={lessonObjective}
                  onChange={(e) => setLessonObjective(e.target.value)}
                  placeholder="Learn polite phrasing (Je voudrais...) and drink vocabulary"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>
            </div>

            {/* Video Masterclass Section */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A] flex items-center gap-1.5">
                <Video className="w-4 h-4 text-rose-500" />
                <span>Micro-Masterclass Video Integration (YouTube / Vimeo / Cloudflare)</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Video URL</label>
                  <input
                    type="url"
                    value={lessonVideoUrl}
                    onChange={(e) => setLessonVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or direct MP4"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Duration</label>
                  <input
                    type="text"
                    value={lessonVideoDuration}
                    onChange={(e) => setLessonVideoDuration(e.target.value)}
                    placeholder="e.g. 3:45"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>
            </div>

            {/* Teacher Grammar Board */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Teacher Grammar Board</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Rule Title</label>
                  <input
                    type="text"
                    value={lessonGrammarTitle}
                    onChange={(e) => setLessonGrammarTitle(e.target.value)}
                    placeholder="e.g. Politeness with 'Je voudrais'"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Explanation</label>
                  <input
                    type="text"
                    value={lessonGrammarExplanation}
                    onChange={(e) => setLessonGrammarExplanation(e.target.value)}
                    placeholder="Explain the grammatical structure and common beginner pitfalls"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>
            </div>

            {/* Classroom Dialogue */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#1E3A8A]" />
                <span>2-Person Classroom Roleplay Script</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Speaker A Name</label>
                  <input
                    type="text"
                    value={dialogueSpeakerA}
                    onChange={(e) => setDialogueSpeakerA(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Native Line A</label>
                  <input
                    type="text"
                    value={dialogueLineA}
                    onChange={(e) => setDialogueLineA(e.target.value)}
                    placeholder="e.g. Bonjour Madame, que désirez-vous?"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Translation A</label>
                  <input
                    type="text"
                    value={dialogueTransA}
                    onChange={(e) => setDialogueTransA(e.target.value)}
                    placeholder="e.g. Hello ma'am, what would you like?"
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Speaker B Name</label>
                  <input
                    type="text"
                    value={dialogueSpeakerB}
                    onChange={(e) => setDialogueSpeakerB(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Native Line B</label>
                  <input
                    type="text"
                    value={dialogueLineB}
                    onChange={(e) => setDialogueLineB(e.target.value)}
                    placeholder="e.g. Je voudrais un café au lait, s'il vous plaît."
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Translation B</label>
                  <input
                    type="text"
                    value={dialogueTransB}
                    onChange={(e) => setDialogueTransB(e.target.value)}
                    placeholder="e.g. I would like a coffee with milk, please."
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-md transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Masterclass Lesson Live</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: DIGITAL PDF STORE */}
      {activeAdminTab === 'materials' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-[#20243A]">Digital PDF Store Manager</h2>
            <p className="text-xs text-slate-500 mt-1">
              Add printable grammar handbooks, Kanji/Hangul workbooks, and JLPT/DELF test guides for ₹49, ₹99, or ₹199 micro-transactions.
            </p>
          </div>

          <form onSubmit={handleCreateMaterial} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Subject / Language</label>
                <select
                  value={matLang}
                  onChange={(e) => setMatLang(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                >
                  {languages.map((l) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Target Level</label>
                <input
                  type="text"
                  value={matLevel}
                  onChange={(e) => setMatLevel(e.target.value)}
                  placeholder="e.g. A1 or JLPT N5"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Page Count</label>
                <input
                  type="text"
                  value={matPages}
                  onChange={(e) => setMatPages(e.target.value)}
                  placeholder="e.g. 50 Pages"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Handbook Title</label>
                <input
                  type="text"
                  required
                  value={matTitle}
                  onChange={(e) => setMatTitle(e.target.value)}
                  placeholder="e.g. German Akkusativ & Dativ Ultimate Mastery Guide"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Price (INR)</label>
                  <input
                    type="number"
                    value={matPriceInr}
                    onChange={(e) => setMatPriceInr(e.target.value)}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Price (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={matPriceUsd}
                    onChange={(e) => setMatPriceUsd(e.target.value)}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-md transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add PDF Guide to Store</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 4: PAYMENTS & GATEWAY SETTINGS */}
      {activeAdminTab === 'payments' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-[#20243A]">Payment Gateway & Pricing Controls</h2>
            <p className="text-xs text-slate-500 mt-1">
              Connect your Razorpay Key ID (for UPI, Google Pay, PhonePe, and Indian Cards) and Stripe (for International Cards).
            </p>
          </div>

          <form onSubmit={handleSavePaymentConfig} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Primary Gateway</label>
                <select
                  value={payGateway}
                  onChange={(e) => setPayGateway(e.target.value)}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] bg-white"
                >
                  <option value="razorpay">Razorpay (India UPI, GPay, PhonePe, Cards)</option>
                  <option value="stripe">Stripe (International Credit/Debit Cards)</option>
                  <option value="test">Test / Simulation Mode (Instant Upgrade)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Razorpay Key ID</label>
                <input
                  type="text"
                  value={payRzpKey}
                  onChange={(e) => setPayRzpKey(e.target.value)}
                  placeholder="rzp_live_... or rzp_test_..."
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Stripe Publishable Key</label>
                <input
                  type="text"
                  value={payStripeKey}
                  onChange={(e) => setPayStripeKey(e.target.value)}
                  placeholder="pk_live_... or pk_test_..."
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>

            {/* Pricing Config */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-black uppercase text-[#1E3A8A]">
                Lingora Plus Subscription Pricing
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Monthly (₹ INR)</label>
                  <input
                    type="number"
                    value={payInrMonthly}
                    onChange={(e) => setPayInrMonthly(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Yearly (₹ INR)</label>
                  <input
                    type="number"
                    value={payInrYearly}
                    onChange={(e) => setPayInrYearly(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Monthly ($ USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={payUsdMonthly}
                    onChange={(e) => setPayUsdMonthly(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Yearly ($ USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={payUsdYearly}
                    onChange={(e) => setPayUsdYearly(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-md transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Payment Gateway Configuration</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 5: LEARNERS & MEMBERSHIP */}
      {activeAdminTab === 'users' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-[#20243A]">Learner & Partner Management</h2>
                <button
                  type="button"
                  onClick={loadAllUsers}
                  className="p-1 rounded-lg text-slate-400 hover:text-[#1E3A8A] hover:bg-slate-100 transition"
                  title="Refresh users from database"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingUsers ? 'animate-spin text-[#1E3A8A]' : ''}`} />
                </button>
              </div>
              <p className="text-xs text-slate-500">
                View all registered accounts ({userList.length}), manage roles, and grant Lingora Plus memberships.
              </p>
            </div>

            <input
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A] w-full sm:w-64"
            />
          </div>

          <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {userList
              .filter(
                (u) =>
                  (u.name || '').toLowerCase().includes(userSearch.toLowerCase()) ||
                  (u.email || '').toLowerCase().includes(userSearch.toLowerCase())
              )
              .map((u) => (
                <div
                  key={u.id || u.email}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-[#20243A]">{u.name}</span>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          u.role === 'admin'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {u.role.toUpperCase()}
                      </span>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          u.plan === 'premium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {u.plan === 'premium' ? 'PLUS MEMBER' : 'FREE'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {u.email} • {u.xp || 0} XP • {u.streak || 1} Day Streak
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleUserPlan(u.id, u.email, u.plan)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 transition cursor-pointer"
                    >
                      {u.plan === 'premium' ? 'Downgrade to Free' : 'Grant Lingora Plus'}
                    </button>
                    <button
                      onClick={() => toggleUserRole(u.id, u.email, u.role)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 transition cursor-pointer"
                    >
                      {u.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB 6: ADMIN WHITELIST & TEAM PERMISSIONS */}
      {activeAdminTab === 'whitelist' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-[#20243A]">Admin Whitelist & Permissions</h2>
            <p className="text-xs text-slate-500 mt-1">
              Add or remove authorized administrator accounts. Anyone logging in with these emails will gain access to this <code className="text-[#1E3A8A] font-bold">/admin</code> dashboard.
            </p>
          </div>

          {adminManageError && (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold">
              {adminManageError}
            </div>
          )}

          {/* Create Partner Admin Account Form with Email & Password */}
          <form onSubmit={handleCreatePartnerAdmin} className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Create Partner Admin Account (Direct Email & Password)</span>
            </span>
            <p className="text-xs text-amber-800">
              Create an administrative account for your co-founder or partner. They can log in at <code className="font-bold">/admin</code> directly with this email and password without needing Google or Gmail sign-in.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Partner Full Name</label>
                <input
                  type="text"
                  required
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="e.g. Partner Name"
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#20243A]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Partner Email</label>
                <input
                  type="email"
                  required
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  placeholder="partner@example.com"
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#20243A]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Initial Password</label>
                <input
                  type="password"
                  required
                  value={partnerPassword}
                  onChange={(e) => setPartnerPassword(e.target.value)}
                  placeholder="•••••••• (Min 6 chars)"
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={partnerLoading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Key className="w-3.5 h-3.5 text-amber-300" />
              <span>{partnerLoading ? 'Provisioning...' : '+ Create Partner Admin Account'}</span>
            </button>
          </form>

          {/* Quick Authorize Existing Email Form */}
          <form onSubmit={handleAddAdminEmail} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A] flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Authorize Existing Account Email</span>
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={newAdminEmailInput}
                  onChange={(e) => setNewAdminEmailInput(e.target.value)}
                  placeholder="e.g. cofounder@example.com"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-[#20243A] focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-black shadow-xs transition cursor-pointer shrink-0"
              >
                + Authorize Admin Email
              </button>
            </div>
          </form>

          {/* Whitelisted Emails List */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Currently Authorized Administrators ({adminEmails.length})
            </span>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
              {adminEmails.map((email) => {
                const isPrimary = email === 'saha88979@gmail.com' || email === 'shadowmonarch8688@gmail.com';
                const isCurrent = (firebaseUser?.email || profile.email)?.toLowerCase() === email;

                return (
                  <div
                    key={email}
                    className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center font-bold text-sm">
                        {email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#20243A]">{email}</span>
                          {isCurrent && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              YOU
                            </span>
                          )}
                          {isPrimary && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                              FOUNDER
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400">Full administrative & curriculum control</span>
                      </div>
                    </div>

                    {!isPrimary ? (
                      <button
                        onClick={() => handleRemoveAdminEmail(email)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                        title="Revoke Admin Access"
                      >
                        <UserX className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Protected</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: BACKUP & SYNC */}
      {activeAdminTab === 'backup' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-black text-[#20243A]">Curriculum Backup, Export & Factory Reset</h2>
            <p className="text-xs text-slate-500 mt-1">
              Download your full curriculum as a single JSON file. You can restore it anytime or migrate to a new server without loss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <Download className="w-6 h-6 text-[#1E3A8A]" />
              <h3 className="font-bold text-sm text-[#1E3A8A]">Download JSON Backup</h3>
              <p className="text-xs text-slate-600">Export all courses, lessons, video URLs, and payment settings.</p>
              <button
                onClick={handleExportBackup}
                className="w-full py-2.5 rounded-xl bg-[#1E3A8A] text-white text-xs font-black shadow-xs hover:bg-[#1e40af] cursor-pointer"
              >
                Export JSON
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <Upload className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-sm text-emerald-800">Restore from JSON</h3>
              <p className="text-xs text-slate-600">Upload a previously exported backup file to restore your entire database.</p>
              <label className="w-full block py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-black text-center shadow-xs hover:bg-emerald-700 cursor-pointer">
                <span>Select JSON File</span>
                <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
              </label>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <RefreshCw className="w-6 h-6 text-rose-600" />
              <h3 className="font-bold text-sm text-rose-800">Factory Reset</h3>
              <p className="text-xs text-slate-600">Revert all lessons and languages back to the official default academy curriculum.</p>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all dynamic courses back to factory defaults?')) {
                    resetToDefaultCurriculum();
                    showNotify('Curriculum restored to factory defaults!');
                  }
                }}
                className="w-full py-2.5 rounded-xl bg-rose-600 text-white text-xs font-black shadow-xs hover:bg-rose-700 cursor-pointer"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
