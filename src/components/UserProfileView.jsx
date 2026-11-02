import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { ACHIEVEMENTS, SUPPORTED_LANGUAGES, CURRICULUM } from '../data/curriculum.js';
import { LingoraMascot } from './LingoraMascot.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import {
  Mail,
  Flame,
  Zap,
  Award,
  Crown,
  Globe,
  Sliders,
  CheckCircle2,
  LogOut,
  Edit2,
  Save,
  BookOpen,
} from 'lucide-react';

export const UserProfileView = ({
  onOpenSubscription,
  onOpenAuth,
  onNavigateToTab,
}) => {
  const { profile, firebaseUser, logout, saveCustomProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [dailyGoalXp, setDailyGoalXp] = useState(profile.dailyGoalXp);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveProfile = async () => {
    await saveCustomProfile({
      displayName: displayName.trim() || profile.displayName,
      dailyGoalXp,
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  const completedCount = profile.completedLessons?.length || 0;
  const purchasedMaterialsCount = profile.purchasedMaterials?.length || 0;

  return (
    <div className="space-y-6 pb-20">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative">
              <img
                src={profile.photoURL || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80'}
                alt={profile.displayName}
                className="w-24 h-24 rounded-3xl object-cover ring-4 ring-[#1E3A8A]/20 shadow-md"
              />
              <span className="absolute -bottom-2 -right-2 shadow-xs rounded-full bg-white p-1 flex items-center justify-center">
                <FlagIcon code={currentLang.id} size="sm" rounded="full" />
              </span>
            </div>

            <div>
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-slate-300 font-bold text-lg text-[#20243A] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveProfile}
                      className="px-3 py-1 rounded-lg bg-[#1E3A8A] text-white text-xs font-bold flex items-center gap-1 shadow-xs cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" /> Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h1 className="text-2xl font-black text-[#20243A]">{profile.displayName}</h1>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                    title="Edit Name"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                <Mail className="w-3.5 h-3.5" /> {profile.email}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1E3A8A] text-xs font-extrabold border border-blue-200/60">
                  {currentLang.name} • {currentLang.pathwayType} {profile.currentLevel}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#10B981] text-xs font-extrabold border border-emerald-200/60">
                  {profile.plan === 'premium' ? '✨ Lingora Plus Member' : '🌱 Free Learner'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto">
            {profile.plan === 'free' ? (
              <button
                onClick={onOpenSubscription}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-sm shadow-md transition transform active:scale-95 cursor-pointer"
              >
                <Crown className="w-4 h-4 fill-white" />
                <span>Upgrade to Plus</span>
              </button>
            ) : (
              <div className="px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black text-center">
                ✨ Lingora Plus Active
              </div>
            )}

            {firebaseUser ? (
              <button
                onClick={logout}
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-bold transition cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold shadow-xs hover:bg-[#1e40af] cursor-pointer"
              >
                <span>Save Progress (Sign In)</span>
              </button>
            )}
          </div>
        </div>

        {saveSuccess && (
          <div className="mt-4 p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-bold text-center">
            Profile settings saved successfully!
          </div>
        )}
      </div>

      {/* Lingo Mascot Motivation Banner */}
      <div className="bg-gradient-to-r from-[#1E3A8A]/5 via-blue-50 to-indigo-50/50 rounded-3xl p-5 border border-blue-100 flex items-center gap-4">
        <LingoraMascot expression="encouragement" size="md" />
        <div className="flex-1">
          <h3 className="font-extrabold text-sm text-[#1E3A8A]">Lingo's Study Insight</h3>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            "Consistency beats intensity! Just 10-15 minutes of {currentLang.name} daily primes your neuroplasticity for rapid vocabulary retention."
          </p>
        </div>
      </div>

      {/* Learning Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-xs text-center">
          <Flame className="w-6 h-6 text-amber-500 fill-amber-500 mx-auto" />
          <div className="text-2xl font-black text-[#20243A] mt-2">{profile.streak}</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase">Day Streak</div>
        </div>

        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-xs text-center">
          <Zap className="w-6 h-6 text-[#3B82F6] fill-[#3B82F6] mx-auto" />
          <div className="text-2xl font-black text-[#20243A] mt-2">{profile.totalXp}</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase">Total XP</div>
        </div>

        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-xs text-center">
          <CheckCircle2 className="w-6 h-6 text-[#10B981] mx-auto" />
          <div className="text-2xl font-black text-[#20243A] mt-2">{completedCount}</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase">Lessons Mastered</div>
        </div>

        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-xs text-center">
          <Globe className="w-6 h-6 text-[#1E3A8A] mx-auto" />
          <div className="text-2xl font-black text-[#20243A] mt-2">
            {profile.unlockedLanguages?.length || 10}
          </div>
          <div className="text-[11px] font-bold text-slate-400 uppercase">Languages Ready</div>
        </div>

        <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-xs text-center col-span-2 sm:col-span-1">
          <BookOpen className="w-6 h-6 text-indigo-600 mx-auto" />
          <div className="text-2xl font-black text-[#20243A] mt-2">{purchasedMaterialsCount}</div>
          <div className="text-[11px] font-bold text-slate-400 uppercase">Study Guides</div>
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h2 className="font-extrabold text-base text-[#20243A]">Achievements & Badges</h2>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {(ACHIEVEMENTS || []).filter((a) => a.condition(profile)).length} of {ACHIEVEMENTS.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {(ACHIEVEMENTS || []).map((badge) => {
            const isUnlocked = badge.condition(profile);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                  isUnlocked
                    ? 'bg-amber-50/50 border-amber-200 shadow-xs'
                    : 'bg-slate-50 border-slate-200/60 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                    isUnlocked ? 'bg-amber-100 shadow-inner' : 'bg-slate-200 grayscale'
                  }`}
                >
                  {badge.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-xs text-[#20243A]">{badge.title}</h3>
                    {isUnlocked && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-200 text-amber-900">
                        UNLOCKED
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Preferences & Account Settings */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-[#1E3A8A]" />
          <h2 className="font-extrabold text-base text-[#20243A]">Learning Preferences</h2>
        </div>

        <div className="space-y-4 divide-y divide-slate-100">
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-bold text-sm text-[#20243A]">Daily Learning Commitment</p>
              <p className="text-xs text-slate-400">Set how much XP you want to earn every day</p>
            </div>

            <div className="flex items-center gap-2">
              {[30, 50, 100].map((goal) => (
                <button
                  key={goal}
                  onClick={() => {
                    setDailyGoalXp(goal);
                    saveCustomProfile({ dailyGoalXp: goal });
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                    profile.dailyGoalXp === goal
                      ? 'bg-[#1E3A8A] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {goal} XP / day
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="font-bold text-sm text-[#20243A]">Audio Playback Speed</p>
              <p className="text-xs text-slate-400">Pace of native pronunciation speech synthesis</p>
            </div>
            <div className="flex items-center gap-2">
              {['0.8x (Slower)', '1.0x (Normal)', '1.2x (Fast)'].map((rate, rIdx) => (
                <span
                  key={rIdx}
                  className={`px-3 py-1 rounded-xl text-xs font-bold ${
                    rIdx === 1 ? 'bg-[#10B981]/15 text-[#10B981]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {rate}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfileView;
