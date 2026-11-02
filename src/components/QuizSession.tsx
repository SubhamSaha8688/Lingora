import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Lesson, QuizQuestion, MatchPair, SUPPORTED_LANGUAGES } from '../data/curriculum.ts';
import { useAuth } from '../context/AuthContext.tsx';
import { speakText, startSpeechRecognition, calculateAccuracy } from '../utils/speech.ts';
import {
  X,
  Heart,
  Volume2,
  Mic,
  MicOff,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  RotateCcw,
  AlertTriangle,
} from 'lucide-react';
import { LingoraMascot } from './LingoraMascot.tsx';
import { FlagIcon } from './FlagIcon.tsx';

interface QuizSessionProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: () => void;
}

function formatAnswerText(ans: string | string[] | MatchPair[] | undefined): string {
  if (!ans) return '';
  if (Array.isArray(ans)) {
    if (ans.length > 0 && typeof ans[0] === 'object' && ans[0] !== null && 'left' in ans[0]) {
      return (ans as MatchPair[]).map((p) => `${p.left} = ${p.right}`).join(', ');
    }
    return ans.join(' ');
  }
  return String(ans);
}

export const QuizSession: React.FC<QuizSessionProps> = ({
  lesson,
  onClose,
  onComplete,
}) => {
  const { profile, deductHeart, refillHearts, recordLessonCompletion } = useAuth();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  // Match pairs state
  const [matchedPairs, setMatchedPairs] = useState<{ [left: string]: string }>({});
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);

  // Speaking state
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [speakingAccuracy, setSpeakingAccuracy] = useState<number | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);

  // Quiz evaluation state
  const [status, setStatus] = useState<'idle' | 'answered' | 'completed' | 'out_of_hearts'>('idle');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [quitConfirmOpen, setQuitConfirmOpen] = useState(false);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === lesson.languageId) || SUPPORTED_LANGUAGES[0];

  const currentQuestion: QuizQuestion | undefined = lesson.exercises[currentIndex];

  // Initialize per question
  useEffect(() => {
    if (!currentQuestion) return;

    setSelectedOption(null);
    setTypedAnswer('');
    setMatchedPairs({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setIsRecording(false);
    setSpokenTranscript('');
    setSpeakingAccuracy(null);
    setSpeechError(null);
    setStatus('idle');

    if (currentQuestion.type === 'arrange_order' && currentQuestion.wordBank) {
      // Shuffle word bank
      setAvailableWords([...currentQuestion.wordBank].sort(() => Math.random() - 0.5));
      setArrangedWords([]);
    }

    // Auto play audio for listen_identify questions
    if (currentQuestion.type === 'listen_identify' && currentQuestion.audioText) {
      speakText(currentQuestion.audioText, currentLang.speechCode);
    }
  }, [currentIndex, currentQuestion]);

  // Handle Answer Verification
  const handleVerifyAnswer = () => {
    if (!currentQuestion) return;

    let correct = false;

    switch (currentQuestion.type) {
      case 'multiple_choice':
      case 'fill_blank':
      case 'translate':
      case 'true_false':
      case 'listen_identify':
        correct = selectedOption === currentQuestion.correctAnswer;
        break;

      case 'typing':
        const cleanTyped = typedAnswer.trim().toLowerCase();
        const expected = String(currentQuestion.correctAnswer).trim().toLowerCase();
        correct = cleanTyped === expected;
        break;

      case 'arrange_order':
        const arrangedSentence = arrangedWords.join(' ');
        const expectedArranged = Array.isArray(currentQuestion.correctAnswer)
          ? currentQuestion.correctAnswer.join(' ')
          : String(currentQuestion.correctAnswer);
        correct = arrangedSentence === expectedArranged;
        break;

      case 'match_pairs':
        const expectedPairs = currentQuestion.correctAnswer as MatchPair[];
        const matchKeys = Object.keys(matchedPairs);
        if (matchKeys.length === expectedPairs.length) {
          correct = expectedPairs.every((p) => matchedPairs[p.left] === p.right);
        } else {
          correct = false;
        }
        break;

      case 'speaking':
        correct = (speakingAccuracy || 0) >= 60;
        break;
    }

    setIsCorrect(correct);
    setStatus('answered');

    if (correct) {
      setTotalXpEarned((prev) => prev + Math.round(lesson.xpReward / lesson.exercises.length));
    } else {
      setMistakesCount((prev) => prev + 1);
      deductHeart();
      if (profile.plan === 'free' && profile.hearts <= 1) {
        setStatus('out_of_hearts');
      }
    }
  };

  // Next Question or Finish
  const handleNextQuestion = async () => {
    if (currentIndex + 1 < lesson.exercises.length) {
      setCurrentIndex((prev) => prev + 1);
      setStatus('idle');
    } else {
      // Completed lesson!
      setStatus('completed');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      await recordLessonCompletion(lesson.id, lesson.xpReward);
    }
  };

  // Speech Recognition trigger
  const handleToggleSpeech = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    setSpeechError(null);
    setSpokenTranscript('');
    setIsRecording(true);

    const rec = startSpeechRecognition(
      currentLang.speechCode,
      (transcript) => {
        setSpokenTranscript(transcript);
        const acc = calculateAccuracy(transcript, currentQuestion?.speechTarget || '');
        setSpeakingAccuracy(acc);
      },
      (error) => {
        setSpeechError(error);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  // Match pairs selection helper
  const handleMatchSelect = (type: 'left' | 'right', value: string) => {
    if (type === 'left') {
      setSelectedLeft(value);
      if (selectedRight) {
        setMatchedPairs((prev) => ({ ...prev, [value]: selectedRight }));
        setSelectedLeft(null);
        setSelectedRight(null);
      }
    } else {
      setSelectedRight(value);
      if (selectedLeft) {
        setMatchedPairs((prev) => ({ ...prev, [selectedLeft]: value }));
        setSelectedLeft(null);
        setSelectedRight(null);
      }
    }
  };

  if (!currentQuestion) return null;

  const progressPercent = ((currentIndex + 1) / lesson.exercises.length) * 100;

  // OUT OF HEARTS SCREEN
  if (status === 'out_of_hearts') {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center shadow-2xl animate-in zoom-in-95">
          <div className="mb-4">
            <LingoraMascot expression="encouragement" size="md" bubbleText="Take a breather! Let's refill and try again." />
          </div>
          <h2 className="text-2xl font-black text-[#20243A]">Out of Hearts!</h2>
          <p className="text-xs text-slate-500 mt-2">
            You've run out of hearts for this lesson. You can refill hearts for free or review earlier lessons.
          </p>

          <div className="mt-6 space-y-2">
            <button
              onClick={() => {
                refillHearts();
                setStatus('idle');
              }}
              className="w-full py-3.5 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-extrabold text-sm shadow-md transition"
            >
              Refill Full Hearts (Free)
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LESSON COMPLETION SCREEN
  if (status === 'completed') {
    const accuracy = Math.round(
      ((lesson.exercises.length - mistakesCount) / lesson.exercises.length) * 100
    );

    return (
      <div className="fixed inset-0 z-50 bg-[#F8F9FC] flex flex-col items-center justify-center p-4 animate-in fade-in">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl text-center">
          <div className="mb-4">
            <LingoraMascot expression="course_completion" size="lg" bubbleText="Incredible! You completed the lesson!" />
          </div>

          <span className="text-xs font-black uppercase tracking-wider text-[#10B981]">
            Lesson Finished!
          </span>
          <h2 className="text-3xl font-black text-[#20243A] mt-1">Excellent Job!</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            You mastered <span className="font-bold">{lesson.title}</span> in <FlagIcon code={currentLang.id} size="xs" className="inline-block mx-1" /> {currentLang.name}.
          </p>

          {/* Stats Badges */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100">
              <Zap className="w-5 h-5 text-[#6546D7] mx-auto fill-[#6546D7]" />
              <div className="text-xl font-black text-[#6546D7] mt-1">+{lesson.xpReward}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Total XP</div>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
              <CheckCircle2 className="w-5 h-5 text-[#43C98B] mx-auto" />
              <div className="text-xl font-black text-[#43C98B] mt-1">{accuracy}%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Accuracy</div>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100">
              <Flame className="w-5 h-5 text-amber-500 mx-auto fill-amber-500" />
              <div className="text-xl font-black text-amber-600 mt-1">{profile.streak} Days</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Streak</div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => {
                onComplete();
                onClose();
              }}
              className="w-full py-4 rounded-2xl bg-[#6546D7] hover:bg-[#5233c7] text-white font-extrabold text-base shadow-lg shadow-[#6546D7]/25 transition transform active:scale-95"
            >
              Continue to Next Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F8F9FC] flex flex-col justify-between">
      {/* Top Header Bar */}
      <div className="max-w-3xl w-full mx-auto px-4 pt-4 sm:pt-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setQuitConfirmOpen(true)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Progress Bar */}
          <div className="flex-1 h-3 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#6546D7] to-[#43C98B] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Hearts Display */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 font-extrabold text-sm border border-rose-200/70">
            <Heart className="w-4 h-4 fill-rose-500" />
            <span>{profile.plan === 'premium' ? '∞' : profile.hearts}</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Question Area */}
      <div className="max-w-2xl w-full mx-auto px-4 py-6 flex-1 flex flex-col justify-center overflow-y-auto">
        <div className="space-y-6">
          {/* Question Prompt */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#6546D7] bg-[#6546D7]/10 px-2.5 py-1 rounded-full">
              {currentQuestion.type.replace('_', ' ')}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#20243A] mt-2 leading-snug">
              {currentQuestion.prompt}
            </h2>
            {currentQuestion.translationHint && (
              <p className="text-xs text-slate-400 mt-1 italic">
                Hint: {currentQuestion.translationHint}
              </p>
            )}
          </div>

          {/* Audio Listen Button if present */}
          {currentQuestion.audioText && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => speakText(currentQuestion.audioText!, currentLang.speechCode)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 hover:border-[#6546D7] shadow-sm text-sm font-bold text-[#6546D7] transition"
              >
                <Volume2 className="w-5 h-5 text-[#6546D7]" />
                <span>Play Sound ({currentLang.name})</span>
              </button>
            </div>
          )}

          {/* Question Formats */}
          {/* 1. Multiple Choice / Fill Blank / Translate / True False */}
          {(currentQuestion.type === 'multiple_choice' ||
            currentQuestion.type === 'fill_blank' ||
            currentQuestion.type === 'translate' ||
            currentQuestion.type === 'true_false' ||
            currentQuestion.type === 'listen_identify') &&
            currentQuestion.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt, oIdx) => {
                  const isSelected = selectedOption === opt;
                  return (
                    <button
                      key={oIdx}
                      disabled={status === 'answered'}
                      onClick={() => setSelectedOption(opt)}
                      className={`p-4 rounded-2xl border-2 text-left text-sm sm:text-base font-bold transition-all ${
                        isSelected
                          ? 'border-[#6546D7] bg-[#6546D7]/10 text-[#6546D7] shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-400">
                          {oIdx + 1}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

          {/* 2. Arrange Word Order */}
          {currentQuestion.type === 'arrange_order' && (
            <div className="space-y-6">
              {/* Target arranged slots */}
              <div className="min-h-[64px] p-4 rounded-2xl border-2 border-dashed border-[#6546D7]/40 bg-white flex flex-wrap gap-2 items-center">
                {arrangedWords.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">
                    Tap the words below in the correct order...
                  </span>
                ) : (
                  arrangedWords.map((word, wIdx) => (
                    <button
                      key={wIdx}
                      disabled={status === 'answered'}
                      onClick={() => {
                        setArrangedWords(arrangedWords.filter((_, i) => i !== wIdx));
                        setAvailableWords([...availableWords, word]);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-[#6546D7] text-white text-sm font-bold shadow-sm transition hover:bg-[#5233c7]"
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>

              {/* Source word bank */}
              <div className="flex flex-wrap gap-2.5">
                {availableWords.map((word, aIdx) => (
                  <button
                    key={aIdx}
                    disabled={status === 'answered'}
                    onClick={() => {
                      setArrangedWords([...arrangedWords, word]);
                      setAvailableWords(availableWords.filter((_, i) => i !== aIdx));
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#6546D7] text-sm font-bold text-slate-700 shadow-sm transition active:scale-95"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. Match Pairs */}
          {currentQuestion.type === 'match_pairs' && (
            <div className="grid grid-cols-2 gap-4">
              {/* Left column */}
              <div className="space-y-2">
                {(currentQuestion.correctAnswer as MatchPair[]).map((pair) => {
                  const isMatched = !!matchedPairs[pair.left];
                  const isSelected = selectedLeft === pair.left;
                  return (
                    <button
                      key={pair.left}
                      disabled={isMatched || status === 'answered'}
                      onClick={() => handleMatchSelect('left', pair.left)}
                      className={`w-full p-3.5 rounded-2xl border text-sm font-bold transition text-left ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60'
                          : isSelected
                          ? 'border-[#6546D7] bg-[#6546D7]/10 text-[#6546D7]'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {pair.left}
                    </button>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-2">
                {(currentQuestion.correctAnswer as MatchPair[]).map((pair) => {
                  const isMatched = Object.values(matchedPairs).includes(pair.right);
                  const isSelected = selectedRight === pair.right;
                  return (
                    <button
                      key={pair.right}
                      disabled={isMatched || status === 'answered'}
                      onClick={() => handleMatchSelect('right', pair.right)}
                      className={`w-full p-3.5 rounded-2xl border text-sm font-bold transition text-left ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60'
                          : isSelected
                          ? 'border-[#45B8E8] bg-[#45B8E8]/10 text-[#45B8E8]'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {pair.right}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Typing Exercise */}
          {currentQuestion.type === 'typing' && (
            <div className="space-y-3">
              <input
                type="text"
                disabled={status === 'answered'}
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:border-[#6546D7] focus:outline-none text-base font-bold text-[#20243A]"
              />
            </div>
          )}

          {/* 5. Speaking Exercise with Real-time Speech Recognition */}
          {currentQuestion.type === 'speaking' && (
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm text-center space-y-4">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Target Expression
              </p>
              <div className="text-2xl font-black text-[#6546D7]">
                "{currentQuestion.speechTarget || formatAnswerText(currentQuestion.correctAnswer)}"
              </div>

              {/* Pronunciation audio example */}
              <button
                onClick={() =>
                  speakText(
                    currentQuestion.speechTarget || String(currentQuestion.correctAnswer),
                    currentLang.speechCode
                  )
                }
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Native Pronunciation</span>
              </button>

              <div className="pt-4 flex flex-col items-center">
                <button
                  disabled={status === 'answered'}
                  onClick={handleToggleSpeech}
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all shadow-lg ${
                    isRecording
                      ? 'bg-rose-500 animate-pulse ring-8 ring-rose-200'
                      : 'bg-[#6546D7] hover:bg-[#5233c7]'
                  }`}
                >
                  {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </button>
                <span className="text-xs font-bold text-slate-500 mt-2">
                  {isRecording ? 'Listening... speak clearly!' : 'Tap to Speak'}
                </span>
              </div>

              {/* Speech recognition transcription output */}
              {spokenTranscript && (
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 block">We heard:</span>
                  <span className="font-extrabold text-sm text-[#20243A]">"{spokenTranscript}"</span>
                  {speakingAccuracy !== null && (
                    <div className="mt-1 text-xs font-bold text-[#43C98B]">
                      Pronunciation Match: {speakingAccuracy}%
                    </div>
                  )}
                </div>
              )}

              {speechError && (
                <p className="text-xs text-amber-600 font-medium">{speechError}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Evaluation Banner & Action Button */}
      <div
        className={`border-t p-4 sm:p-6 transition-all ${
          status === 'answered'
            ? isCorrect
              ? 'bg-emerald-50 border-emerald-200'
              : 'bg-amber-50/80 border-amber-200'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {status === 'answered' ? (
            <div className="flex items-start gap-3 w-full sm:w-auto">
              {isCorrect ? (
                <LingoraMascot expression="correct" size="sm" />
              ) : (
                <LingoraMascot expression="encouragement" size="sm" />
              )}
              <div>
                <h3
                  className={`text-base sm:text-lg font-black ${
                    isCorrect ? 'text-[#10B981]' : 'text-amber-800'
                  }`}
                >
                  {isCorrect ? 'Superb! Spot on!' : 'Keep going! Every mistake is progress'}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                {!isCorrect && (
                  <p className="text-xs font-bold text-slate-800 mt-1">
                    Correct answer: <span className="text-[#1E3A8A]">{formatAnswerText(currentQuestion.correctAnswer)}</span>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden sm:block text-xs font-medium text-slate-400">
              Answer the exercise above and tap Check to test your understanding.
            </div>
          )}

          <div className="w-full sm:w-auto shrink-0">
            {status === 'idle' ? (
              <button
                onClick={handleVerifyAnswer}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-extrabold text-sm shadow-md transition transform active:scale-95"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-md transition transform active:scale-95 ${
                  isCorrect
                    ? 'bg-[#10B981] hover:bg-[#059669]'
                    : 'bg-[#1E3A8A] hover:bg-[#1e40af]'
                }`}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Quit Dialog */}
      {quitConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-xl">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-black text-[#20243A]">Quit this session?</h3>
            <p className="text-xs text-slate-500 mt-1">
              You will lose your progress for this lesson if you exit now.
            </p>
            <div className="mt-5 space-y-2">
              <button
                onClick={() => setQuitConfirmOpen(false)}
                className="w-full py-3 rounded-xl bg-[#6546D7] text-white font-extrabold text-xs"
              >
                Keep Learning
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Exit Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
