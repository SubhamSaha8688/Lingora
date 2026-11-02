import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { CURRICULUM, SUPPORTED_LANGUAGES, Lesson, CEFRLevel } from '../data/curriculum.ts';
import { FlagIcon } from './FlagIcon.tsx';
import { speakText } from '../utils/speech.ts';
import {
  Check,
  Star,
  Lock,
  Volume2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Play,
  X,
  GraduationCap,
} from 'lucide-react';

interface LearnPathProps {
  onStartLesson: (lesson: Lesson) => void;
}

export const LearnPath: React.FC<LearnPathProps> = ({ onStartLesson }) => {
  const { profile, updateUserLevel } = useAuth();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  const lessons = CURRICULUM[profile.targetLanguage] || [];
  const levels = currentLang.availableLevels;

  return (
    <div className="space-y-6 pb-20">
      {/* Course Level Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FlagIcon code={currentLang.id} size="lg" />
            <div>
              <h1 className="text-xl font-extrabold text-[#20243A]">
                {currentLang.name} Course Path
              </h1>
              <p className="text-xs text-slate-400">
                Current Level: <span className="font-bold text-[#1E3A8A]">{profile.currentLevel}</span> • {currentLang.pathwayType} Standard Pathway
              </p>
            </div>
          </div>
        </div>

        {/* Level Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => updateUserLevel(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                profile.currentLevel === lvl
                  ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Path Roadmap Nodes */}
      <div className="relative max-w-xl mx-auto py-6">
        {/* Curving path track line */}
        <div className="absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-[#6546D7] via-[#45B8E8] to-[#43C98B] rounded-full opacity-40 -z-0" />

        <div className="space-y-12 relative z-10">
          {lessons.map((lesson, idx) => {
            const isCompleted = profile.completedLessons?.includes(lesson.id);
            const isUnlocked =
              idx === 0 || profile.completedLessons?.includes(lessons[idx - 1]?.id);

            // Alternate nodes left and right for gamified Duolingo-style tree
            const offsets = ['translate-x-0', 'translate-x-8 sm:translate-x-12', '-translate-x-8 sm:-translate-x-12'];
            const offsetClass = offsets[idx % offsets.length];

            return (
              <div key={lesson.id} className={`flex flex-col items-center ${offsetClass}`}>
                {/* Node Button */}
                <button
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center font-extrabold transition-all transform active:scale-95 shadow-lg group relative ${
                    isCompleted
                      ? 'bg-[#10B981] text-white shadow-[#10B981]/30 hover:scale-105 ring-4 ring-[#10B981]/20'
                      : isUnlocked
                      ? 'bg-[#1E3A8A] text-white shadow-[#1E3A8A]/30 hover:scale-105 ring-4 ring-[#1E3A8A]/20 animate-bounce-short'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-8 h-8 stroke-[3]" />
                  ) : isUnlocked ? (
                    <Star className="w-8 h-8 fill-white text-white" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-400" />
                  )}

                  {/* Pulsing crown badge on active next lesson */}
                  {isUnlocked && !isCompleted && (
                    <span className="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-amber-400 text-[#20243A] text-[10px] font-black uppercase tracking-wider shadow-sm animate-pulse">
                      NEXT
                    </span>
                  )}
                </button>

                {/* Node Label Card */}
                <div
                  onClick={() => setSelectedLesson(lesson)}
                  className="mt-3 cursor-pointer text-center max-w-[200px] bg-white/95 px-3 py-1.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow transition"
                >
                  <p className="text-xs font-bold text-[#20243A] truncate">{lesson.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{lesson.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lesson Details Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#6546D7]/10 text-[#6546D7]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#6546D7]">
                    {selectedLesson.level} • {selectedLesson.category}
                  </span>
                  <h2 className="text-xl font-extrabold text-[#20243A]">
                    {selectedLesson.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Objective */}
            <div className="mt-4 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs sm:text-sm text-purple-900 leading-relaxed">
              <span className="font-extrabold block text-[#6546D7] mb-1">🎯 Learning Objective:</span>
              {selectedLesson.objective}
            </div>

            {/* Vocabulary Preview */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-sm text-[#20243A] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#45B8E8]" />
                  <span>Vocabulary & Pronunciation Guide ({selectedLesson.vocabulary.length} words)</span>
                </h3>
              </div>

              <div className="space-y-2">
                {selectedLesson.vocabulary.map((vocab, vIdx) => (
                  <div
                    key={vIdx}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-[#20243A]">{vocab.word}</span>
                        <span className="text-xs text-slate-400 font-mono">
                          [{vocab.romajiOrPronunciation}]
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{vocab.translation}</p>
                      <p className="text-[11px] text-slate-400 italic mt-0.5">
                        "{vocab.exampleSentence}" ({vocab.exampleTranslation})
                      </p>
                    </div>

                    <button
                      onClick={() => speakText(vocab.word, currentLang.speechCode)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-[#6546D7]/10 text-[#6546D7] transition shadow-sm shrink-0"
                      title="Listen native pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Grammar Note */}
            {selectedLesson.grammarNotes?.length > 0 && (
              <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                  💡 Grammar Tip: {selectedLesson.grammarNotes[0].title}
                </span>
                <p className="text-xs text-amber-950 mt-1 leading-relaxed">
                  {selectedLesson.grammarNotes[0].explanation}
                </p>
              </div>
            )}

            {/* Start Button */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400">
                {selectedLesson.exercises.length} Exercises • ~{selectedLesson.estimatedMinutes} mins
              </span>

              <button
                onClick={() => {
                  const lesson = selectedLesson;
                  setSelectedLesson(null);
                  onStartLesson(lesson);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#6546D7] hover:bg-[#5233c7] text-white font-extrabold text-sm shadow-md shadow-[#6546D7]/20 transition transform active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Interactive Lesson</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
