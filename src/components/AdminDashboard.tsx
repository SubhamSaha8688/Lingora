import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { CURRICULUM, SUPPORTED_LANGUAGES, Lesson, SupportedLanguage, CEFRLevel } from '../data/curriculum.ts';
import {
  Shield,
  Plus,
  BookOpen,
  Users,
  BarChart3,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Globe,
  Trash2,
  Sparkles,
  Layers,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { profile, isAdmin, firebaseUser } = useAuth();
  const [activeAdminTab, setActiveAdminTab] = useState<'curriculum' | 'stats' | 'users' | 'plans'>('curriculum');

  // New Lesson form state
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>('french');
  const [selectedLevel, setSelectedLevel] = useState<string>('A1');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newWord, setNewWord] = useState('');
  const [newTranslation, setNewTranslation] = useState('');
  const [newPronunciation, setNewPronunciation] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Mock users list for management
  const [userList, setUserList] = useState([
    { id: '1', name: 'Vishwanath Patil', email: 'vishwanathpatil1922@gmail.com', role: 'admin', plan: 'premium', xp: 450 },
    { id: '2', name: 'Claire Moreau', email: 'claire@lingora.test', role: 'user', plan: 'free', xp: 320 },
    { id: '3', name: 'Florian Becker', email: 'florian@lingora.test', role: 'user', plan: 'premium', xp: 280 },
    { id: '4', name: 'Kenji Sato', email: 'kenji@lingora.test', role: 'user', plan: 'free', xp: 190 },
  ]);

  if (!isAdmin) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 shadow-md">
        <div className="w-16 h-16 rounded-3xl bg-rose-50 text-rose-500 mx-auto flex items-center justify-center text-3xl mb-4">
          <Shield className="w-8 h-8 text-rose-500" />
        </div>
        <h2 className="text-xl font-black text-[#20243A]">Restricted Access</h2>
        <p className="text-xs text-slate-500 mt-2">
          This management panel is reserved for authorized Lingora system administrators. Current signed in account: {firebaseUser?.email || profile.email}.
        </p>
      </div>
    );
  }

  const handleCreateLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newObjective.trim()) return;

    const newLessonObj: Lesson = {
      id: `${selectedLang.slice(0, 2)}-${selectedLevel.toLowerCase()}-${Date.now().toString().slice(-4)}`,
      languageId: selectedLang,
      level: selectedLevel,
      title: newTitle.trim(),
      description: newObjective.trim() || 'Curriculum lesson authored in Admin Console',
      category: newCategory.trim() || 'General Vocabulary',
      estimatedMinutes: 5,
      xpReward: 30,
      objective: newObjective.trim(),
      vocabulary: newWord
        ? [
            {
              word: newWord,
              romajiOrPronunciation: newPronunciation || newWord,
              translation: newTranslation || 'Sample translation',
              partOfSpeech: 'Noun',
              exampleSentence: `${newWord} est très important.`,
              exampleTranslation: 'This word is very important.',
            },
          ]
        : [],
      grammarNotes: [],
      exercises: [
        {
          id: `q-${Date.now()}`,
          type: 'multiple_choice',
          prompt: `Select the correct translation for "${newWord || newTitle}":`,
          options: [newTranslation || 'Correct Answer', 'Option B', 'Option C', 'Option D'],
          correctAnswer: newTranslation || 'Correct Answer',
          explanation: 'This exercise was authored in the Lingora Admin Panel.',
        },
      ],
    };

    CURRICULUM[selectedLang].push(newLessonObj);

    setFormSuccess(`Lesson "${newTitle}" created and added to ${selectedLang.toUpperCase()} curriculum!`);
    setNewTitle('');
    setNewCategory('');
    setNewObjective('');
    setNewWord('');
    setNewTranslation('');
    setNewPronunciation('');

    setTimeout(() => setFormSuccess(''), 4000);
  };

  const toggleUserPlan = (userId: string) => {
    setUserList((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, plan: u.plan === 'premium' ? 'free' : 'premium' } : u
      )
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Admin Header */}
      <div className="bg-[#20243A] text-white rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#6546D7] text-white">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold">Lingora Administrator Console</h1>
              <span className="px-2 py-0.5 rounded-full bg-[#43C98B] text-[#20243A] font-black text-[10px]">
                AUTHORIZED
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Admin: <span className="text-white font-mono">{profile.email}</span>
            </p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-2xl overflow-x-auto">
          {[
            { id: 'curriculum', label: 'Curriculum & Lessons', icon: BookOpen },
            { id: 'stats', label: 'Platform Metrics', icon: BarChart3 },
            { id: 'users', label: 'User Management', icon: Users },
            { id: 'plans', label: 'Subscription Tiers', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAdminTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  activeAdminTab === tab.id
                    ? 'bg-[#6546D7] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: CURRICULUM & LESSON AUTHORING */}
      {activeAdminTab === 'curriculum' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Lesson Form */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-[#6546D7]" />
              <h2 className="font-extrabold text-base text-[#20243A]">Add New Curriculum Lesson</h2>
            </div>

            {formSuccess && (
              <div className="mb-4 p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{formSuccess}</span>
              </div>
            )}

            <form onSubmit={handleCreateLesson} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Language</label>
                  <select
                    value={selectedLang}
                    onChange={(e) => {
                      const newL = e.target.value as SupportedLanguage;
                      setSelectedLang(newL);
                      const meta = SUPPORTED_LANGUAGES.find((l) => l.id === newL);
                      if (meta) setSelectedLevel(meta.availableLevels[0]);
                    }}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                  >
                    {SUPPORTED_LANGUAGES.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.flag} {l.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Level ({SUPPORTED_LANGUAGES.find((l) => l.id === selectedLang)?.pathwayType})</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#20243A]"
                  >
                    {(SUPPORTED_LANGUAGES.find((l) => l.id === selectedLang)?.availableLevels || ['A1']).map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Lesson Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asking for Directions at the Louvre"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Category</label>
                <input
                  type="text"
                  placeholder="e.g. Travel & Navigation"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 text-xs font-bold"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase">Learning Objective</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Describe what the student will be able to do..."
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-extrabold text-[#6546D7] uppercase block mb-2">
                  Sample Vocabulary & Exercise Pair
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Word (Target)"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    className="p-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Translation"
                    value={newTranslation}
                    onChange={(e) => setNewTranslation(e.target.value)}
                    className="p-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Phonetics / Romaji"
                    value={newPronunciation}
                    onChange={(e) => setNewPronunciation(e.target.value)}
                    className="p-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#6546D7] hover:bg-[#5233c7] text-white font-extrabold text-xs shadow-md transition"
              >
                Publish Lesson to Cloud Curriculum
              </button>
            </form>
          </div>

          {/* Existing Lessons Explorer */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-base text-[#20243A]">Live Curriculum Database</h2>
              <span className="text-xs font-bold text-slate-400">
                {SUPPORTED_LANGUAGES.map((l) => `${l.name}: ${CURRICULUM[l.id].length}`).join(' • ')}
              </span>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <div key={lang.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-sm text-[#20243A] flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      <span>{lang.name} Curriculum</span>
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-slate-600">
                      {CURRICULUM[lang.id].length} lessons
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {CURRICULUM[lang.id].map((les, idx) => (
                      <div
                        key={les.id}
                        className="p-2 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-[#20243A]">
                            {idx + 1}. {les.title}
                          </span>
                          <span className="ml-2 text-[10px] text-slate-400 font-mono">
                            [{les.level}]
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-600">+{les.xpReward} XP</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: METRICS & STATS */}
      {activeAdminTab === 'stats' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Registered Learners</span>
              <div className="text-3xl font-black text-[#6546D7] mt-1">2,480</div>
              <span className="text-[10px] font-bold text-emerald-600">↑ 14% this week</span>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Lessons Completed</span>
              <div className="text-3xl font-black text-[#43C98B] mt-1">18,920</div>
              <span className="text-[10px] font-bold text-emerald-600">92% completion rate</span>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">AI Tutor Sessions</span>
              <div className="text-3xl font-black text-sky-500 mt-1">7,340</div>
              <span className="text-[10px] font-bold text-slate-400">Gemini 3.8 Flash</span>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm text-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Active Subscriptions</span>
              <div className="text-3xl font-black text-amber-500 mt-1">418</div>
              <span className="text-[10px] font-bold text-amber-600">Lingora Plus Members</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-extrabold text-sm text-[#20243A] mb-3">Popularity by Language</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>French 🇫🇷</span>
                  <span>45% of learners</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#6546D7] rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Japanese 🇯🇵</span>
                  <span>35% of learners</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#43C98B] rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>German 🇩🇪</span>
                  <span>20% of learners</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#45B8E8] rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: USER MANAGEMENT */}
      {activeAdminTab === 'users' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold text-base text-[#20243A]">User Directory & Roles</h2>
            <span className="text-xs font-bold text-slate-400">{userList.length} Accounts</span>
          </div>

          <div className="divide-y divide-slate-100">
            {userList.map((u) => (
              <div key={u.id} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#20243A]">{u.name}</span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        u.role === 'admin'
                          ? 'bg-purple-100 text-[#6546D7]'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {u.role.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">{u.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-[#6546D7]">{u.xp} XP</span>
                  <button
                    onClick={() => toggleUserPlan(u.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      u.plan === 'premium'
                        ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {u.plan === 'premium' ? 'Plan: PLUS' : 'Plan: FREE'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SUBSCRIPTION TIERS */}
      {activeAdminTab === 'plans' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
            <h3 className="font-black text-lg text-[#20243A]">Free Tier Configuration</h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>5 Hearts daily with replenishment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Access to core A1 Beginner curriculum</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Basic Gemini AI Tutor practice</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-tr from-[#6546D7]/10 to-amber-50 rounded-3xl p-6 border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-[#20243A]">Lingora Plus / Max</h3>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-[#20243A] font-black text-xs">
                $9.99 / mo
              </span>
            </div>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Unlimited hearts & mistake reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Unrestricted Gemini 3.8 Flash AI conversation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Advanced roleplay & pronunciation lab</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Offline mode & personalized analytics</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
