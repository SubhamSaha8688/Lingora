import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useCurriculum } from '../context/CurriculumContext.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import { speakText, startSpeechRecognition, calculateAccuracy } from '../utils/speech.js';
import { AiTutor } from './AiTutor.jsx';
import {
  Bot,
  Mic,
  MicOff,
  Volume2,
  BookOpen,
  Headphones,
} from 'lucide-react';

export const PracticeHub = () => {
  const { profile } = useAuth();
  const { curriculum, languages } = useCurriculum();
  const [activeSubTab, setActiveSubTab] = useState('tutor');

  const currentLang =
    languages.find((l) => l.id === profile.targetLanguage) || languages[0];

  // Extract all vocab items for current language
  const allVocab = (curriculum[profile.targetLanguage] || []).flatMap(
    (l) => l.vocabulary || []
  );

  // Pronunciation Lab State
  const [selectedVocabIndex, setSelectedVocabIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [matchScore, setMatchScore] = useState(null);

  // Flashcards State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Listening Gym State
  const [listeningIndex, setListeningIndex] = useState(0);
  const [selectedListeningOption, setSelectedListeningOption] = useState(null);
  const [listeningFeedback, setListeningFeedback] = useState(null);

  const activeVocab = allVocab[selectedVocabIndex] || allVocab[0];
  const activeFlashcard = allVocab[flashcardIndex] || allVocab[0];
  const activeListening = allVocab[listeningIndex] || allVocab[0];

  const handleToggleSpeakingPractice = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    setSpokenTranscript('');
    setMatchScore(null);
    setIsRecording(true);

    startSpeechRecognition(
      currentLang.speechCode,
      (transcript) => {
        setSpokenTranscript(transcript);
        const score = calculateAccuracy(transcript, activeVocab?.word || '');
        setMatchScore(score);
      },
      (err) => {
        console.warn('Speech err:', err);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Sub-tab Navigation */}
      <div className="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm flex items-center justify-between gap-2 overflow-x-auto">
        {[
          { id: 'tutor', label: 'AI Language Tutor', icon: Bot, badge: 'Gemini' },
          { id: 'pronunciation', label: 'Voice & Pronunciation Lab', icon: Mic },
          { id: 'flashcards', label: 'Vocabulary Vault', icon: BookOpen },
          { id: 'listening', label: 'Listening Gym', icon: Headphones },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white text-[#1E3A8A]' : 'bg-[#10B981] text-white'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 1. AI LANGUAGE TUTOR */}
      {activeSubTab === 'tutor' && <AiTutor />}

      {/* 2. VOICE & PRONUNCIATION LAB */}
      {activeSubTab === 'pronunciation' && activeVocab && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm text-center max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E3A8A] text-xs font-bold">
            <Mic className="w-3.5 h-3.5" />
            <FlagIcon code={currentLang.id} size="xs" />
            <span>Voice Coach • {currentLang.name}</span>
          </div>

          <div>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
              Say this phrase clearly:
            </span>
            <h2 className="text-3xl font-black text-[#20243A] mt-1">{activeVocab.word}</h2>
            <p className="text-sm text-slate-500 font-mono mt-0.5">
              [{activeVocab.romajiOrPronunciation}]
            </p>
            <p className="text-xs text-slate-600 mt-2 font-medium">"{activeVocab.translation}"</p>
          </div>

          {/* Native Audio Listen */}
          <div className="flex justify-center">
            <button
              onClick={() => speakText(activeVocab.word, currentLang.speechCode)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-[#1E3A8A]" />
              <span>Listen Native Speaker</span>
            </button>
          </div>

          {/* Microphone Speaking Action */}
          <div className="pt-2 flex flex-col items-center">
            <button
              onClick={handleToggleSpeakingPractice}
              className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-all shadow-xl cursor-pointer ${
                isRecording
                  ? 'bg-rose-500 animate-pulse ring-8 ring-rose-200'
                  : 'bg-[#1E3A8A] hover:bg-[#1e40af] hover:scale-105 ring-4 ring-blue-500/20'
              }`}
            >
              {isRecording ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
            </button>
            <span className="text-xs font-bold text-slate-400 mt-3">
              {isRecording ? 'Listening... Speak now!' : 'Tap the microphone & speak'}
            </span>
          </div>

          {/* Results Feedback */}
          {spokenTranscript && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left space-y-1">
              <span className="text-[11px] font-bold text-slate-400">Speech Recognized:</span>
              <p className="font-extrabold text-base text-[#20243A]">"{spokenTranscript}"</p>
              {matchScore !== null && (
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Phonetics Match:</span>
                  <span
                    className={`text-sm font-black ${
                      matchScore >= 80
                        ? 'text-[#10B981]'
                        : matchScore >= 50
                        ? 'text-amber-500'
                        : 'text-rose-500'
                    }`}
                  >
                    {matchScore}% {matchScore >= 80 ? '🌟 Native Level!' : '👍 Good effort!'}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Next Word Navigation */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedVocabIndex((prev) => (prev > 0 ? prev - 1 : allVocab.length - 1));
                setSpokenTranscript('');
                setMatchScore(null);
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
            >
              Previous
            </button>

            <span className="text-xs font-bold text-slate-400">
              {selectedVocabIndex + 1} of {allVocab.length}
            </span>

            <button
              onClick={() => {
                setSelectedVocabIndex((prev) => (prev + 1) % allVocab.length);
                setSpokenTranscript('');
                setMatchScore(null);
              }}
              className="px-4 py-2 rounded-xl bg-[#1E3A8A] text-xs font-bold text-white hover:bg-[#1e40af] cursor-pointer"
            >
              Next Phrase
            </button>
          </div>
        </div>
      )}

      {/* 3. VOCABULARY FLASHCARDS */}
      {activeSubTab === 'flashcards' && activeFlashcard && (
        <div className="max-w-md mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[320px] rounded-3xl bg-white p-8 border-2 border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-center select-none"
          >
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>{isFlipped ? 'Translation Side' : 'Target Language'}</span>
              <span>Tap to flip 🔄</span>
            </div>

            <div className="my-auto">
              {!isFlipped ? (
                <div>
                  <h3 className="text-3xl font-black text-[#20243A]">{activeFlashcard.word}</h3>
                  <p className="text-sm text-slate-400 font-mono mt-2">
                    [{activeFlashcard.romajiOrPronunciation}]
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(activeFlashcard.word, currentLang.speechCode);
                    }}
                    className="mt-4 p-2.5 rounded-full bg-blue-50 text-[#1E3A8A] hover:bg-blue-100 transition inline-flex cursor-pointer"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-black text-[#10B981]">
                    {activeFlashcard.translation}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    "{activeFlashcard.exampleSentence}"
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ({activeFlashcard.exampleTranslation})
                  </p>
                </div>
              )}
            </div>

            <div className="text-[11px] font-bold text-slate-400">
              Card {flashcardIndex + 1} of {allVocab.length}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : allVocab.length - 1));
                setIsFlipped(false);
              }}
              className="flex-1 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setFlashcardIndex((prev) => (prev + 1) % allVocab.length);
                setIsFlipped(false);
              }}
              className="flex-1 py-3 rounded-2xl bg-[#1E3A8A] text-white text-xs font-bold hover:bg-[#1e40af] shadow-xs cursor-pointer"
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* 4. LISTENING COMPREHENSION GYM */}
      {activeSubTab === 'listening' && activeListening && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm text-center max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
            <Headphones className="w-3.5 h-3.5" />
            <span>Listening Gym • {currentLang.name}</span>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#20243A]">
              Listen carefully and choose the correct meaning:
            </h2>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => speakText(activeListening.word, currentLang.speechCode, 0.85)}
              className="w-20 h-20 rounded-3xl bg-[#3B82F6] hover:bg-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition transform active:scale-95 cursor-pointer"
            >
              <Volume2 className="w-10 h-10" />
            </button>
          </div>

          {/* Multiple choice options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              activeListening.translation,
              'A hot cup of green tea',
              'The entrance to the subway',
              'Thank you very much',
            ]
              .sort()
              .map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedListeningOption(opt);
                    if (opt === activeListening.translation) {
                      setListeningFeedback('Correct! You recognized the phrase.');
                    } else {
                      setListeningFeedback(`Incorrect. It means: "${activeListening.translation}".`);
                    }
                  }}
                  className={`p-3.5 rounded-2xl border text-xs font-bold transition cursor-pointer ${
                    selectedListeningOption === opt
                      ? opt === activeListening.translation
                        ? 'bg-emerald-50 border-[#10B981] text-[#10B981]'
                        : 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
          </div>

          {listeningFeedback && (
            <p className="text-xs font-extrabold text-[#1E3A8A]">{listeningFeedback}</p>
          )}

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => {
                setListeningIndex((prev) => (prev + 1) % allVocab.length);
                setSelectedListeningOption(null);
                setListeningFeedback(null);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold cursor-pointer"
            >
              Next Listening Audio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PracticeHub;
