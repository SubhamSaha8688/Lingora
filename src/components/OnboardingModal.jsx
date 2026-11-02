import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { SUPPORTED_LANGUAGES } from '../data/curriculum.js';
import { LingoraMascot } from './LingoraMascot.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  Briefcase,
  HeartHandshake,
  Brain,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const OnboardingModal = ({ isOpen, onClose }) => {
  const { completeOnboarding, profile } = useAuth();

  const [step, setStep] = useState(1);
  const [interfaceLang, setInterfaceLang] = useState('english');
  const [selectedLang, setSelectedLang] = useState(profile.targetLanguage || 'french');
  const [studyGoal, setStudyGoal] = useState('travel');
  const [dailyMinutes, setDailyMinutes] = useState(15);
  const [pathwayChoice, setPathwayChoice] = useState('beginner');

  if (!isOpen) return null;

  const currentLangMeta =
    SUPPORTED_LANGUAGES.find((l) => l.id === selectedLang) || SUPPORTED_LANGUAGES[0];

  const handleFinish = async () => {
    const initialLevel = currentLangMeta.availableLevels[0];
    await completeOnboarding({
      targetLanguage: selectedLang,
      level: pathwayChoice === 'placement' ? currentLangMeta.availableLevels[1] || initialLevel : initialLevel,
      interfaceLanguage: interfaceLang,
      studyGoal,
      dailyMinutes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        {/* Step Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-black uppercase tracking-wider text-[#1E3A8A]">
            Step {step} of 5
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-7 h-2 rounded-full transition-all ${
                  s <= step ? 'bg-[#3B82F6]' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: WELCOME & INTERFACE LANGUAGE */}
        {step === 1 && (
          <div className="text-center space-y-5 animate-in fade-in">
            <LingoraMascot
              expression="welcome"
              size="lg"
              bubbleText="Welcome to Lingora! I'm Lingo, your guide."
            />

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#20243A]">
                Welcome to Lingora
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Affordable, engaging, and AI-powered language learning designed for learners worldwide.
              </p>
            </div>

            <div className="pt-2 text-left max-w-md mx-auto">
              <label className="text-xs font-extrabold uppercase text-slate-400 block mb-2">
                Choose Your Preferred Interface Language:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setInterfaceLang('english')}
                  className={`p-4 rounded-2xl border-2 text-left font-bold transition flex items-center justify-between cursor-pointer ${
                    interfaceLang === 'english'
                      ? 'border-[#3B82F6] bg-blue-50/50 text-[#1E3A8A]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-sm font-black flex items-center gap-1.5">
                      <span>English</span>
                      <FlagIcon code="gb" size="xs" />
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">Standard Interface</div>
                  </div>
                  {interfaceLang === 'english' && <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />}
                </button>

                <button
                  onClick={() => setInterfaceLang('hindi')}
                  className={`p-4 rounded-2xl border-2 text-left font-bold transition flex items-center justify-between cursor-pointer ${
                    interfaceLang === 'hindi'
                      ? 'border-[#3B82F6] bg-blue-50/50 text-[#1E3A8A]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-sm font-black flex items-center gap-1.5">
                      <span>हिन्दी</span>
                      <FlagIcon code="in" size="xs" />
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">Hindi Explanations</div>
                  </div>
                  {interfaceLang === 'hindi' && <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />}
                </button>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-6 w-full py-3.5 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: SELECT LANGUAGE TO LEARN */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center gap-4">
              <LingoraMascot expression="teaching" size="sm" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#20243A]">
                  What language do you want to learn?
                </h2>
                <p className="text-xs text-slate-400">
                  Select from our 10 official world language courses
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[370px]:grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = selectedLang === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLang(lang.id)}
                    className={`p-3 rounded-2xl border-2 text-left transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#3B82F6] bg-blue-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FlagIcon code={lang.id} size="md" />
                      <div>
                        <div className="text-xs font-black text-[#20243A] leading-tight">{lang.name}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{lang.pathwayType} Standard</div>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-2xl bg-[#1E3A8A] text-white font-extrabold text-xs shadow-md hover:bg-[#1e40af] flex items-center gap-2 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: LEARNING GOAL */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in">
            <div className="flex items-center gap-4">
              <LingoraMascot expression="thinking" size="sm" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#20243A]">
                  Why are you learning {currentLangMeta.name}?
                </h2>
                <p className="text-xs text-slate-400">
                  This helps Lingo customize your dialogues and AI tutor practice
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'travel', title: 'Travel & Exploration', icon: Plane, desc: 'Navigate airports, cafes, directions & shopping' },
                { id: 'career', title: 'Career & Professional Growth', icon: Briefcase, desc: 'International business, job interviews & networking' },
                { id: 'culture', title: 'Culture, Media & Entertainment', icon: HeartHandshake, desc: 'Cinema, literature, anime, music & heritage' },
                { id: 'studies', title: 'School, University & Exams', icon: BookOpen, desc: 'Prepare for CEFR, JLPT, TOPIK or HSK certifications' },
                { id: 'brain', title: 'Mental Fitness & Curiosity', icon: Brain, desc: 'Boost memory, expand cognitive horizons & stay sharp' },
              ].map((g) => {
                const Icon = g.icon;
                const isSelected = studyGoal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setStudyGoal(g.id)}
                    className={`w-full p-3.5 rounded-2xl border-2 text-left transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#3B82F6] bg-blue-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#3B82F6] text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#20243A]">{g.title}</div>
                        <div className="text-[11px] text-slate-400 font-medium">{g.desc}</div>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-2xl bg-[#1E3A8A] text-white font-extrabold text-xs shadow-md hover:bg-[#1e40af] flex items-center gap-2 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: DAILY COMMITMENT */}
        {step === 4 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center gap-4">
              <LingoraMascot expression="encouragement" size="sm" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#20243A]">
                  Set your daily study commitment
                </h2>
                <p className="text-xs text-slate-400">
                  Consistency builds long-term fluency without burnout
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { mins: 5, label: 'Casual', desc: '5 mins / day (20 XP)' },
                { mins: 10, label: 'Regular', desc: '10 mins / day (35 XP)' },
                { mins: 15, label: 'Serious', desc: '15 mins / day (50 XP)', rec: true },
                { mins: 25, label: 'Intense', desc: '25 mins / day (80 XP)' },
              ].map((c) => {
                const isSelected = dailyMinutes === c.mins;
                return (
                  <button
                    key={c.mins}
                    onClick={() => setDailyMinutes(c.mins)}
                    className={`p-4 rounded-2xl border-2 text-left transition relative cursor-pointer ${
                      isSelected
                        ? 'border-[#3B82F6] bg-blue-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {c.rec && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#10B981] text-white text-[9px] font-black uppercase">
                        POPULAR
                      </span>
                    )}
                    <div className="text-sm font-black text-[#20243A]">{c.label}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{c.desc}</div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(5)}
                className="px-6 py-3 rounded-2xl bg-[#1E3A8A] text-white font-extrabold text-xs shadow-md hover:bg-[#1e40af] flex items-center gap-2 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: LEARNING PATHWAY & PLACEMENT */}
        {step === 5 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="flex items-center gap-4">
              <LingoraMascot expression="streak" size="sm" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#20243A]">
                  Choose your starting point
                </h2>
                <p className="text-xs text-slate-400">
                  You can change your course level at any time from the dashboard
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setPathwayChoice('beginner')}
                className={`w-full p-4 rounded-2xl border-2 text-left transition flex items-center justify-between cursor-pointer ${
                  pathwayChoice === 'beginner'
                    ? 'border-[#10B981] bg-emerald-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
                    🌱
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#20243A]">
                      Start from the Basics ({currentLangMeta.availableLevels[0]})
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      Recommended for true beginners. Master alphabet, greetings & foundations.
                    </div>
                  </div>
                </div>
                {pathwayChoice === 'beginner' && <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />}
              </button>

              <button
                onClick={() => setPathwayChoice('placement')}
                className={`w-full p-4 rounded-2xl border-2 text-left transition flex items-center justify-between cursor-pointer ${
                  pathwayChoice === 'placement'
                    ? 'border-[#3B82F6] bg-blue-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center font-black text-sm">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#20243A]">
                      Already know some {currentLangMeta.name}?
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      Skip introductory greetings and jump to {currentLangMeta.availableLevels[1] || 'Elementary'}.
                    </div>
                  </div>
                </div>
                {pathwayChoice === 'placement' && <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0" />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setStep(4)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handleFinish}
                className="px-8 py-3.5 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <span>Enter Personalized Dashboard</span>
                <Sparkles className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default OnboardingModal;
