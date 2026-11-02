import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useCurriculum } from '../context/CurriculumContext.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import { speakText } from '../utils/speech.js';
import { VideoPlayer } from './VideoPlayer.jsx';
import { CertificateModal } from './CertificateModal.jsx';
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
  Bot,
  Layers,
  ListTree,
  MessageSquare,
  Award,
  ChevronRight,
  ShieldCheck,
  Video,
} from 'lucide-react';

export const LearnPath = ({ onStartLesson, onNavigateTab }) => {
  const { profile, updateUserLevel } = useAuth();
  const { curriculum, languages } = useCurriculum();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [viewMode, setViewMode] = useState('path'); // 'path' | 'syllabus'
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('ALL');
  const [certificateOpen, setCertificateOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.id === profile.targetLanguage) || languages[0];

  const allLanguageLessons = curriculum[profile.targetLanguage] || [];

  // Filter by level if specified, otherwise show all
  const filteredLessons =
    selectedLevelFilter === 'ALL'
      ? allLanguageLessons
      : allLanguageLessons.filter((l) => l.level === selectedLevelFilter);

  // Group lessons by Unit
  const unitsMap = new Map();
  allLanguageLessons.forEach((lesson) => {
    const unitName = lesson.unitTitle || `Unit ${lesson.unitNumber || 1}: Core Curriculum`;
    if (!unitsMap.has(unitName)) {
      unitsMap.set(unitName, {
        title: unitName,
        number: lesson.unitNumber || 1,
        description:
          lesson.unitDescription ||
          'Comprehensive module lessons, grammar fundamentals, and conversational practice.',
        lessons: [],
      });
    }
    unitsMap.get(unitName).lessons.push(lesson);
  });
  const units = Array.from(unitsMap.values());

  const totalLessonsCount = allLanguageLessons.length;
  const completedCount = allLanguageLessons.filter((l) =>
    profile.completedLessons?.includes(l.id)
  ).length;

  return (
    <div className="space-y-6 pb-20">
      {/* Startup Mission Banner - Institute Quality Live Class Alternative */}
      <div className="rounded-3xl bg-gradient-to-r from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] p-6 text-white shadow-lg shadow-blue-900/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[11px] font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Affordable Academy Syllabus • Live Class Alternative</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">
              Master {currentLang.name} Without High Tuition Fees
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-blue-100 leading-relaxed">
              Why pay thousands for expensive live classes? Lingora gives you an institute-grade{' '}
              <span className="font-bold text-amber-300">{currentLang.pathwayType}</span>{' '}
              curriculum, structured step-by-step from zero to conversational fluency with AI private tutoring.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
              <div className="text-2xl font-black">{completedCount}/{totalLessonsCount}</div>
              <div className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">Lessons Mastered</div>
            </div>

            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('practice')}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-black shadow-md transition active:scale-95 cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>1-on-1 AI Tutor</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Control Bar: View Switcher (Tree vs. Syllabus) + Level Selector */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* View Mode Toggle */}
        <div className="flex items-center p-1 bg-slate-100 rounded-2xl shrink-0">
          <button
            onClick={() => setViewMode('path')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
              viewMode === 'path'
                ? 'bg-white text-[#1E3A8A] shadow-xs'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <ListTree className="w-3.5 h-3.5" />
            <span>Interactive Roadmap</span>
          </button>
          <button
            onClick={() => setViewMode('syllabus')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
              viewMode === 'syllabus'
                ? 'bg-white text-[#1E3A8A] shadow-xs'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Full Academic Syllabus</span>
          </button>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
            Level:
          </span>
          <button
            onClick={() => setSelectedLevelFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap cursor-pointer ${
              selectedLevelFilter === 'ALL'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Units
          </button>
          {currentLang.availableLevels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevelFilter(lvl);
                updateUserLevel(lvl);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap cursor-pointer ${
                selectedLevelFilter === lvl
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: Interactive Learning Roadmap */}
      {viewMode === 'path' && (
        <div className="space-y-12">
          {units.map((unit, unitIdx) => {
            const unitLessons = unit.lessons;
            const completedInUnit = unitLessons.filter((l) =>
              profile.completedLessons?.includes(l.id)
            ).length;
            const isUnitComplete = completedInUnit === unitLessons.length && unitLessons.length > 0;

            return (
              <div key={unit.title} className="relative">
                {/* Unit Header Card */}
                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center font-black text-sm shrink-0">
                      U{unit.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#1E3A8A] bg-blue-50 px-2 py-0.5 rounded-md">
                          Module {unit.number}
                        </span>
                        {isUnitComplete && (
                          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" /> Mastered
                          </span>
                        )}
                      </div>
                      <h2 className="text-base sm:text-lg font-black text-[#20243A] mt-0.5">
                        {unit.title}
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">{unit.description}</p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <div className="text-right">
                      <div className="text-xs font-black text-slate-700">
                        {completedInUnit} of {unitLessons.length}
                      </div>
                      <div className="text-[10px] text-slate-400">Lessons Finished</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center font-bold text-xs text-[#1E3A8A]">
                      {Math.round((completedInUnit / (unitLessons.length || 1)) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Vertical Curving Road Map Nodes */}
                <div className="relative max-w-md mx-auto py-4">
                  {/* Vertical Guide Line */}
                  <div className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#10B981] rounded-full opacity-30 -z-0" />

                  <div className="space-y-10 relative z-10">
                    {unitLessons.map((lesson, idx) => {
                      const globalIdx = allLanguageLessons.findIndex((l) => l.id === lesson.id);
                      const isCompleted = profile.completedLessons?.includes(lesson.id);
                      const isUnlocked =
                        globalIdx === 0 ||
                        profile.completedLessons?.includes(allLanguageLessons[globalIdx - 1]?.id);

                      // Alternating node layout for Duolingo-style tree
                      const offsets = [
                        'translate-x-0',
                        'translate-x-8 sm:translate-x-12',
                        '-translate-x-8 sm:-translate-x-12',
                      ];
                      const offsetClass = offsets[idx % offsets.length];

                      return (
                        <div key={lesson.id} className={`flex flex-col items-center ${offsetClass}`}>
                          {/* Node Button */}
                          <button
                            onClick={() => setSelectedLesson(lesson)}
                            className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center font-extrabold transition-all transform active:scale-95 shadow-lg group relative cursor-pointer ${
                              isCompleted
                                ? 'bg-[#10B981] text-white shadow-[#10B981]/30 hover:scale-105 ring-4 ring-[#10B981]/20'
                                : isUnlocked
                                ? 'bg-[#1E3A8A] text-white shadow-[#1E3A8A]/30 hover:scale-105 ring-4 ring-[#1E3A8A]/20'
                                : 'bg-slate-200 text-slate-400 hover:bg-slate-300'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-8 h-8 stroke-[3]" />
                            ) : isUnlocked ? (
                              <Star className="w-8 h-8 fill-white text-white" />
                            ) : (
                              <Lock className="w-6 h-6 text-slate-400" />
                            )}

                            {isUnlocked && !isCompleted && (
                              <span className="absolute -top-3 -right-2 px-2 py-0.5 rounded-full bg-amber-400 text-[#20243A] text-[10px] font-black uppercase tracking-wider shadow-sm animate-pulse">
                                NEXT
                              </span>
                            )}
                          </button>

                          {/* Node Label Card */}
                          <div
                            onClick={() => setSelectedLesson(lesson)}
                            className="mt-3 cursor-pointer text-center max-w-[210px] bg-white px-3.5 py-2 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition"
                          >
                            <span className="text-[9px] font-black text-[#1E3A8A] uppercase tracking-wider block">
                              {lesson.level} • {lesson.category}
                            </span>
                            <p className="text-xs font-bold text-[#20243A] truncate mt-0.5">
                              {lesson.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: Comprehensive Academic Syllabus */}
      {viewMode === 'syllabus' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Structured University Syllabus:</strong> Every module is modeled after certified{' '}
              {currentLang.pathwayType} standards to prepare you for official tests without paying for live coaching institutes.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {units.map((unit) => (
              <div
                key={unit.title}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4 hover:border-slate-200 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-1.5">
                      Module {unit.number}
                    </span>
                    <h3 className="text-lg font-black text-[#20243A]">{unit.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{unit.description}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Curriculum Lessons ({unit.lessons.length}):
                  </span>
                  <div className="space-y-2">
                    {unit.lessons.map((lesson) => {
                      const isCompleted = profile.completedLessons?.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson)}
                          className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 cursor-pointer transition flex items-center justify-between gap-3 group"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                                {lesson.level}
                              </span>
                              <h4 className="text-xs font-bold text-[#20243A] truncate group-hover:text-[#1E3A8A]">
                                {lesson.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">
                              {lesson.objective}
                            </p>
                          </div>

                          <div className="shrink-0 flex items-center gap-2">
                            {isCompleted ? (
                              <span className="p-1 rounded-full bg-emerald-100 text-emerald-600">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <button className="p-1.5 rounded-xl bg-white text-[#1E3A8A] shadow-xs group-hover:bg-[#1E3A8A] group-hover:text-white transition">
                                <Play className="w-3.5 h-3.5 fill-current" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Course Milestone Certificate Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-100/40 to-amber-500/10 border-2 border-dashed border-amber-300 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 mx-auto flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base text-[#20243A]">
                  Official {currentLang.name} {profile.currentLevel} Certification
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-0.5">
                  Complete this pathway to claim a verifiable Lingora Academy Certificate of Completion with your name and unique verification code.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCertificateOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black shadow-md transition cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>View & Print Certificate</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Details Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#1E3A8A]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1E3A8A]">
                    {selectedLesson.level} • {selectedLesson.unitTitle || 'Curriculum'}
                  </span>
                  <h2 className="text-xl font-extrabold text-[#20243A]">
                    {selectedLesson.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Objective */}
            <div className="mt-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-900 leading-relaxed">
              <span className="font-extrabold block text-[#1E3A8A] mb-1">🎯 Live Class Learning Milestone:</span>
              {selectedLesson.objective}
            </div>

            {/* Micro-Masterclass Video Player */}
            {(selectedLesson.videoUrl || selectedLesson.category?.includes('Masterclass') || true) && (
              <div className="mt-4">
                <VideoPlayer
                  videoUrl={
                    selectedLesson.videoUrl ||
                    (currentLang.id === 'french'
                      ? 'https://www.youtube.com/watch?v=ujDtm0hZyII'
                      : currentLang.id === 'spanish'
                      ? 'https://www.youtube.com/watch?v=k8v2qQ4z6G0'
                      : currentLang.id === 'german'
                      ? 'https://www.youtube.com/watch?v=5VjB4fQW8Z0'
                      : currentLang.id === 'japanese'
                      ? 'https://www.youtube.com/watch?v=rGrBHiuPlT0'
                      : 'https://www.youtube.com/watch?v=0ZhOeA0My9s')
                  }
                  title={selectedLesson.videoTitle || `${selectedLesson.title} • Video Masterclass`}
                  instructor={`Native ${currentLang.name} Specialist`}
                  duration={selectedLesson.videoDuration || '3:45'}
                  bookmarks={selectedLesson.videoBookmarks || [
                    { timestamp: '00:15', seconds: 15, label: 'Overview' },
                    { timestamp: '01:10', seconds: 70, label: 'Grammar Formula' },
                    { timestamp: '02:30', seconds: 150, label: 'Dialogue Practice' },
                  ]}
                />
              </div>
            )}

            {/* Roleplay Dialogue Section (Live Class Alternative) */}
            {selectedLesson.conversationDialogue && selectedLesson.conversationDialogue.length > 0 && (
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#20243A] flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Classroom Dialogue & Real Roleplay</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Pair Practice
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  {selectedLesson.conversationDialogue.map((turn, tIdx) => (
                    <div key={tIdx} className="flex items-start justify-between gap-3 text-xs">
                      <div>
                        <span className="font-black text-[#1E3A8A] mr-2">{turn.speaker}:</span>
                        <span className="font-bold text-[#20243A]">{turn.text}</span>
                        {turn.romajiOrPronunciation && (
                          <span className="block text-[11px] text-slate-400 font-mono mt-0.5">
                            [{turn.romajiOrPronunciation}]
                          </span>
                        )}
                        <span className="block text-[11px] text-slate-500 italic mt-0.5">
                          "{turn.translation}"
                        </span>
                      </div>
                      <button
                        onClick={() => speakText(turn.text, currentLang.speechCode)}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#1E3A8A] shrink-0"
                        title="Listen line"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grammar Note */}
            {selectedLesson.grammarNotes?.length > 0 && (
              <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                  💡 Teacher's Grammar Board: {selectedLesson.grammarNotes[0].title}
                </span>
                <p className="text-xs text-amber-950 mt-1 leading-relaxed">
                  {selectedLesson.grammarNotes[0].explanation}
                </p>
                {selectedLesson.grammarNotes[0].examples && (
                  <div className="mt-2 pt-2 border-t border-amber-200/60 space-y-1">
                    {selectedLesson.grammarNotes[0].examples.map((ex, eIdx) => (
                      <div key={eIdx} className="text-[11px] font-mono text-amber-900 font-bold">
                        • {ex}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Vocabulary Preview */}
            <div className="mt-5 space-y-3">
              <h3 className="font-extrabold text-sm text-[#20243A] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                <span>Vocabulary & Pronunciation Vault ({selectedLesson.vocabulary?.length || 0} words)</span>
              </h3>

              <div className="space-y-2">
                {selectedLesson.vocabulary?.map((vocab, vIdx) => (
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
                      {vocab.exampleSentence && (
                        <p className="text-[11px] text-slate-400 italic mt-0.5">
                          "{vocab.exampleSentence}" ({vocab.exampleTranslation})
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => speakText(vocab.word, currentLang.speechCode)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-blue-50 text-[#1E3A8A] transition shadow-xs shrink-0 cursor-pointer"
                      title="Listen native pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button & AI Tutor Shortcut */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {onNavigateTab && (
                <button
                  onClick={() => {
                    setSelectedLesson(null);
                    onNavigateTab('practice');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-purple-50 hover:bg-purple-100 text-[#6546D7] text-xs font-bold transition cursor-pointer"
                >
                  <Bot className="w-4 h-4" />
                  <span>Practice with AI Tutor</span>
                </button>
              )}

              <button
                onClick={() => {
                  const lesson = selectedLesson;
                  setSelectedLesson(null);
                  onStartLesson(lesson);
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-extrabold text-sm shadow-md shadow-blue-900/15 transition transform active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Interactive Lesson</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Official Certificate Modal */}
      <CertificateModal
        isOpen={certificateOpen}
        onClose={() => setCertificateOpen(false)}
        userName={profile.displayName}
        language={currentLang}
        level={profile.currentLevel}
        pathwayType={currentLang.pathwayType}
      />
    </div>
  );
};
export default LearnPath;
