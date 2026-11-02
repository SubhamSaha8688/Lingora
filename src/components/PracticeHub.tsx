import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { CURRICULUM, SUPPORTED_LANGUAGES, VocabularyItem } from '../data/curriculum.ts';
import { speakText, startSpeechRecognition, calculateAccuracy } from '../utils/speech.ts';
import { AiTutor } from './AiTutor.tsx';
import {
  Bot,
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  BookOpen,
  Headphones,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Flame,
} from 'lucide-react';

export const PracticeHub: React.FC = () => {
  const { profile } = useAuth();
  const [activeSubTab, setActiveSubTab] = useState<'tutor' | 'pronunciation' | 'flashcards' | 'listening'>('tutor');

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  // Extract all vocab items for current language
  const allVocab: VocabularyItem[] = (CURRICULUM[profile.targetLanguage] || []).flatMap(
    (l) => l.vocabulary
  );

  // Pronunciation Lab State
  const [selectedVocabIndex, setSelectedVocabIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [matchScore, setMatchScore] = useState<number | null>(null);

  // Flashcards State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Listening Gym State
  const [listeningIndex, setListeningIndex] = useState(0);
  const [selectedListeningOption, setSelectedListeningOption] = useState<string | null>(null);
  const [listeningFeedback, setListeningFeedback] = useState<string | null>(null);

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
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
                isActive
                  ? 'bg-[#6546D7] text-white shadow-md shadow-[#6546D7]/20'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[9px] font-black px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white text-[#6546D7]' : 'bg-[#43C98B] text-white'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#6546D7] text-xs font-bold">
            <Mic className="w-3.5 h-3.5" />
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
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition"
            >
              <Volume2 className="w-4 h-4 text-[#6546D7]" />
              <span>Listen Native Speaker</span>
            </button>
          </div>

          {/* Microphone Speaking Action */}
          <div className="pt-2 flex flex-col items-center">
            <button
              onClick={handleToggleSpeakingPractice}
              className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-all shadow-xl ${
                isRecording
                  ? 'bg-rose-500 animate-pulse ring-8 ring-rose-200'
                  : 'bg-[#6546D7] hover:bg-[#5233c7] hover:scale-105 ring-4 ring-[#6546D7]/20'
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
                        ? 'text-[#43C98B]'
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
              className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 hover:bg-slate-200"
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
              className="px-4 py-2 rounded-xl bg-[#6546D7] text-xs font-bold text-white hover:bg-[#5233c7]"
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
                    className="mt-4 p-2.5 rounded-full bg-purple-50 text-[#6546D7] hover:bg-purple-100 transition inline-flex"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-black text-[#43C98B]">
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
              className="flex-1 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setFlashcardIndex((prev) => (prev + 1) % allVocab.length);
                setIsFlipped(false);
              }}
              className="flex-1 py-3 rounded-2xl bg-[#6546D7] text-white text-xs font-bold hover:bg-[#5233c7] shadow-sm"
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
              className="w-20 h-20 rounded-3xl bg-[#45B8E8] hover:bg-[#3ca3ce] text-white flex items-center justify-center shadow-lg shadow-[#45B8E8]/30 transition transform active:scale-95"
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
                  className={`p-3.5 rounded-2xl border text-xs font-bold transition ${
                    selectedListeningOption === opt
                      ? opt === activeListening.translation
                        ? 'bg-emerald-50 border-[#43C98B] text-[#43C98B]'
                        : 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
          </div>

          {listeningFeedback && (
            <p className="text-xs font-extrabold text-[#6546D7]">{listeningFeedback}</p>
          )}

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => {
                setListeningIndex((prev) => (prev + 1) % allVocab.length);
                setSelectedListeningOption(null);
                setListeningFeedback(null);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#6546D7] text-white text-xs font-bold"
            >
              Next Listening Audio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
