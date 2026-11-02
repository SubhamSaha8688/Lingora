import React from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { CURRICULUM, SUPPORTED_LANGUAGES, Lesson } from '../data/curriculum.ts';
import { FlagIcon } from './FlagIcon.tsx';
import { LingoraMascot } from './LingoraMascot.tsx';
import {
  Flame,
  Zap,
  Play,
  CheckCircle2,
  Trophy,
  Bot,
  Sparkles,
  ArrowRight,
  Target,
  Clock,
  BookOpen,
  FileText,
} from 'lucide-react';

interface HomeDashboardProps {
  onStartLesson: (lesson: Lesson) => void;
  onNavigateTab: (tab: string) => void;
  onOpenSubscription: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onStartLesson,
  onNavigateTab,
}) => {
  const { profile } = useAuth();

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  const availableLessons = CURRICULUM[profile.targetLanguage] || [];

  const nextLesson =
    availableLessons.find((l) => !profile.completedLessons?.includes(l.id)) ||
    availableLessons[0];

  const completedCount = availableLessons.filter((l) =>
    profile.completedLessons?.includes(l.id)
  ).length;

  const progressPercent = Math.min(
    100,
    Math.round(((profile.totalXp % profile.dailyGoalXp) / profile.dailyGoalXp) * 100)
  );

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <div className="space-y-6 pb-20">
      {/* Hero Welcome Banner with Original Purple Owl Mascot */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] p-6 sm:p-8 text-white shadow-xl shadow-[#1E3A8A]/15">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FDBA74]" />
              <span>Language Learning for Everyone</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              {profile.interfaceLanguage === 'hindi' ? 'नमस्ते' : 'Hello'}, {profile.displayName} !
            </h1>
            <p className="mt-2 text-white/90 text-xs sm:text-sm leading-relaxed">
              Mastering <FlagIcon code={currentLang.id} size="xs" className="inline-block mx-1" /> <span className="font-extrabold text-[#FDBA74] underline decoration-2">{currentLang.name}</span> ({profile.currentLevel} • {currentLang.pathwayType}). Stay consistent today!
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {nextLesson && (
                <button
                  onClick={() => onStartLesson(nextLesson)}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#10B981]/25 transition transform active:scale-95"
                >
                  <Play className="w-5 h-5 fill-white" />
                  <span>Continue: {nextLesson.title}</span>
                </button>
              )}

              <button
                onClick={() => onNavigateTab('practice')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition"
              >
                <Bot className="w-4 h-4 text-[#FDBA74]" />
                <span>AI Voice Tutor</span>
              </button>

              <button
                onClick={() => onNavigateTab('materials')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition"
              >
                <FileText className="w-4 h-4 text-emerald-300" />
                <span>Study Materials (₹49)</span>
              </button>
            </div>
          </div>

          {/* Original Purple Owl Mascot Illustration */}
          <div className="shrink-0 flex justify-center md:justify-end">
            <LingoraMascot
              expression="welcome"
              size="lg"
              bubbleText="Ready for today's quest?"
            />
          </div>
        </div>

        {/* Soft background accents */}
        <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      </div>

      {/* Grid: Daily Goal & Streak Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Daily Goal Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 text-[#1E3A8A]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#20243A]">Daily XP Goal</h3>
                <p className="text-xs text-slate-400">{profile.dailyStudyMinutes} min commitment</p>
              </div>
            </div>
            <span className="text-sm font-black text-[#1E3A8A]">
              {profile.totalXp % profile.dailyGoalXp} / {profile.dailyGoalXp} XP
            </span>
          </div>

          <div className="mt-4">
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#10B981] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-right text-[11px] font-semibold text-slate-400">
              {progressPercent}% completed today
            </p>
          </div>
        </div>

        {/* Streak Calendar Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#20243A]">
                  {profile.streak} Day Streak
                </h3>
                <p className="text-xs text-slate-400">Flame is burning strong!</p>
              </div>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              Active
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-1">
            {daysOfWeek.map((day, idx) => {
              const isDone = idx <= todayIndex;
              const isToday = idx === todayIndex;
              return (
                <div key={idx} className="flex flex-col items-center gap-1.5 flex-1">
                  <span className={`text-[11px] font-bold ${isToday ? 'text-[#1E3A8A]' : 'text-slate-400'}`}>
                    {day}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                      isDone
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-400'
                    } ${isToday ? 'ring-2 ring-amber-400 ring-offset-1' : ''}`}
                  >
                    {isDone ? <Flame className="w-3.5 h-3.5 fill-white" /> : '•'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly League Standings Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 text-amber-500">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#20243A]">Ruby League</h3>
                <p className="text-xs text-slate-400">Top 5 advance to Diamond</p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('leaderboard')}
              className="text-xs font-bold text-[#1E3A8A] hover:underline"
            >
              View
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-5 text-center font-black text-amber-600 text-xs">#4</span>
              <span className="text-xs font-bold text-slate-700">You</span>
            </div>
            <span className="text-xs font-extrabold text-[#1E3A8A]">{profile.totalXp} XP</span>
          </div>

          <div className="mt-2 text-center">
            <span className="text-[11px] text-[#10B981] font-bold flex items-center justify-center gap-1">
              <Zap className="w-3 h-3 fill-[#10B981]" /> In promotion zone!
            </span>
          </div>
        </div>
      </div>

      {/* Recommended Curriculum Lessons */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-extrabold text-lg text-[#20243A]">
              Course Curriculum • {currentLang.name} ({profile.currentLevel})
            </h2>
            <p className="text-xs text-slate-400">
              {completedCount} of {availableLessons.length} core lessons completed
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('learn')}
            className="flex items-center gap-1 text-sm font-bold text-[#1E3A8A] hover:text-[#3B82F6]"
          >
            <span>Full Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableLessons.map((lesson, idx) => {
            const isCompleted = profile.completedLessons?.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                className={`p-5 rounded-3xl border transition-all ${
                  isCompleted
                    ? 'bg-emerald-50/50 border-emerald-200/80'
                    : idx === 0 || profile.completedLessons?.includes(availableLessons[idx - 1]?.id)
                    ? 'bg-white border-slate-200 shadow-sm hover:border-[#1E3A8A]/50 hover:shadow-md'
                    : 'bg-slate-50/60 border-slate-200/50 opacity-80'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${
                        isCompleted
                          ? 'bg-[#10B981] text-white shadow-md shadow-[#10B981]/20'
                          : 'bg-blue-50 text-[#1E3A8A]'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : idx + 1}
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        {lesson.category}
                      </span>
                      <h3 className="font-bold text-base text-[#20243A] leading-snug">
                        {lesson.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {lesson.estimatedMinutes}m
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-amber-600 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-amber-500" /> +{lesson.xpReward} XP
                  </span>

                  <button
                    onClick={() => onStartLesson(lesson)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                      isCompleted
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        : 'bg-[#1E3A8A] hover:bg-[#1e40af] text-white shadow-sm'
                    }`}
                  >
                    <span>{isCompleted ? 'Review Lesson' : 'Start Lesson'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
