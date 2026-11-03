import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { SUPPORTED_LANGUAGES } from '../data/curriculum.js';
import {
  speakText,
  startSpeechRecognition,
  AudioRecorder,
  isBraveBrowser,
} from '../utils/speech.js';
import { LingoraMascot } from './LingoraMascot.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import {
  Send,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  User,
  Coffee,
  Train,
  Building,
  GraduationCap,
  Gauge,
  AlertCircle,
  Check,
  X,
  RotateCcw,
  Headphones,
} from 'lucide-react';

const ROLEPLAY_SCENARIOS = [
  { id: 'cafe', title: 'At the Café / Bakery', icon: Coffee, desc: 'Order drinks, snacks & pastries' },
  { id: 'train', title: 'Train Station & Tickets', icon: Train, desc: 'Buy tickets & ask for directions' },
  { id: 'hotel', title: 'Hotel Reception', icon: Building, desc: 'Check in, ask for WiFi & room keys' },
  { id: 'interview', title: 'Friendly Meet & Greet', icon: GraduationCap, desc: 'Introduce yourself & your passions' },
];

export const AiTutor = () => {
  const { profile } = useAuth();

  const [mode, setMode] = useState('chat');
  const [selectedScenario, setSelectedScenario] = useState('cafe');
  const [explainLanguage, setExplainLanguage] = useState(
    profile.interfaceLanguage === 'hindi' ? 'hindi' : 'english'
  );
  const [isSlowSpeech, setIsSlowSpeech] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'tutor',
      text: `Hello ${profile.displayName}! I am Lingora AI, your personal language tutor for **${
        profile.targetLanguage.toUpperCase()
      }** (${profile.currentLevel}). What would you like to practice today? You can converse freely, practice real-world roleplay, ask me to explain grammar, or test your speaking!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Voice & Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [recordingVolume, setRecordingVolume] = useState(0);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [voiceLangMode, setVoiceLangMode] = useState('target'); // 'target' | 'explain'
  const [micNotice, setMicNotice] = useState(null);

  const messagesEndRef = useRef(null);
  const audioRecorderRef = useRef(new AudioRecorder());
  const recognitionRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const liveTranscriptRef = useRef('');

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isRecording]);

  useEffect(() => {
    // Check if running on Brave to display helpful guidance if needed
    isBraveBrowser().then((brave) => {
      if (brave) {
        console.info('Lingora Voice: Brave Browser detected. Direct audio fallback is active.');
      }
    });

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (recognitionRef.current) recognitionRef.current.stop();
      audioRecorderRef.current.cleanup();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = async (text) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    setIsSpeaking(true);
    await speakText(text, currentLang.speechCode, isSlowSpeech ? 0.7 : 0.9);
    setIsSpeaking(false);
  };

  const handleStopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const handleSendMessage = async (payload) => {
    // payload can be string or object { text, audio }
    let text = typeof payload === 'string' ? payload : payload?.text || inputText;
    const audioData = typeof payload === 'object' ? payload?.audio : null;

    if (!text?.trim() && !audioData && !payload) return;
    if (isTyping) return;

    const userDisplayText = text?.trim() || (audioData ? '🎙️ [Spoken Audio Practice]' : '');

    const userMsg = {
      id: String(Date.now()),
      sender: 'user',
      text: userDisplayText,
      isAudio: Boolean(audioData),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    liveTranscriptRef.current = '';
    setIsTyping(true);
    setMicNotice(null);

    try {
      const history = messages.slice(-8).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text,
      }));

      const bodyPayload = {
        language: profile.targetLanguage,
        level: profile.currentLevel,
        mode,
        scenario: mode === 'roleplay' ? selectedScenario : undefined,
        explanationLanguage: explainLanguage,
        history,
        message: text?.trim() || '',
      };

      if (audioData?.base64) {
        bodyPayload.audio = {
          base64: audioData.base64,
          mimeType: audioData.mimeType,
        };
      }

      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });

      const data = await response.json();
      const tutorText = data.text || 'I am ready to help you practice! What would you like to explore next?';

      const tutorMsg = {
        id: String(Date.now() + 1),
        sender: 'tutor',
        text: tutorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, tutorMsg]);

      // Auto-play voice if enabled or if user spoke
      if (autoPlayAudio || audioData) {
        handleSpeak(tutorText);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'tutor',
          text: `Connection glitch (${err.message}). Lingora AI is ready, please ask again!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleStartVoice = async () => {
    setMicNotice(null);
    liveTranscriptRef.current = '';
    setRecordingSeconds(0);
    setRecordingVolume(10);

    try {
      // 1. Start Direct Audio Recorder (Works in Brave, Chrome, Safari, Firefox)
      await audioRecorderRef.current.start((vol) => {
        setRecordingVolume(vol);
      });

      setIsRecording(true);

      // Start elapsed timer
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

      // 2. Also start Web Speech API for real-time live preview (if supported & allowed)
      const sttLang =
        voiceLangMode === 'target'
          ? currentLang.speechCode
          : explainLanguage === 'hindi'
          ? 'hi-IN'
          : 'en-US';

      recognitionRef.current = startSpeechRecognition(
        sttLang,
        (transcript) => {
          liveTranscriptRef.current = transcript;
          setInputText(transcript);
        },
        (errorObj) => {
          // If browser speech recognition failed or blocked (e.g. Brave shields)
          if (errorObj?.error === 'not-allowed') {
            setMicNotice({
              type: 'warn',
              text: 'Microphone permission denied. Allow microphone access in your browser address bar to practice speaking!',
            });
          } else if (errorObj?.error === 'network' || errorObj?.error === 'service-not-allowed') {
            setMicNotice({
              type: 'info',
              text: 'Browser cloud speech recognition blocked. Direct High-Fidelity Audio mode is active! Speak naturally, and Lingora AI will listen directly.',
            });
          }
        },
        () => {
          // Keep recording going through AudioRecorder
        }
      );
    } catch (err) {
      console.error('Failed to access microphone:', err);
      setIsRecording(false);
      setMicNotice({
        type: 'error',
        text: `Microphone access error: ${err.message}. Please check browser microphone permissions.`,
      });
    }
  };

  const handleStopAndSendVoice = async () => {
    if (!isRecording) return;

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    setIsRecording(false);
    setRecordingVolume(0);

    // Stop audio recorder and get base64 audio
    const audioResult = await audioRecorderRef.current.stop();
    const finalTranscript = (inputText || liveTranscriptRef.current).trim();

    if (audioResult || finalTranscript) {
      handleSendMessage({
        text: finalTranscript,
        audio: audioResult
          ? {
              base64: audioResult.base64,
              mimeType: audioResult.mimeType,
            }
          : null,
      });
    } else {
      setMicNotice({
        type: 'info',
        text: 'No audio was captured. Please speak closer to your microphone and try again.',
      });
    }
  };

  const handleCancelVoice = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    audioRecorderRef.current.stop();
    setIsRecording(false);
    setRecordingVolume(0);
    setRecordingSeconds(0);
  };

  const getQuickStarters = () => {
    if (profile.targetLanguage === 'french') {
      return [
        'Comment dit-on "Where is the train station" en français ?',
        'Corrige ma phrase: "Je suis allé au le supermarché."',
        'Let’s practice ordering a cappuccino and croissant.',
      ];
    } else if (profile.targetLanguage === 'german') {
      return [
        'Wie sagt man "I would like to order a pretzel" auf Deutsch?',
        'Erkläre den Unterschied zwischen "der", "die" und "das".',
        'Practice ordering at a bakery in Berlin.',
      ];
    } else if (profile.targetLanguage === 'japanese') {
      return [
        '「これをください」の使い方は？ (How to use "Kore o kudasai"?)',
        'Teach me 5 useful phrases for a 7-Eleven in Tokyo.',
        'Explain the difference between は (wa) and が (ga).',
      ];
    } else if (profile.targetLanguage === 'korean') {
      return [
        'How do I say "Where is the subway?" in Korean?',
        'Explain the difference between -요 and -습니다.',
        'Practice ordering Bibimbap at a Seoul restaurant.',
      ];
    } else if (profile.targetLanguage === 'spanish') {
      return [
        'Explain the difference between Ser and Estar.',
        'How do I order tapas in Madrid?',
        'Correct this sentence: "Yo soy calor hoy."',
      ];
    } else if (profile.targetLanguage === 'mandarin') {
      return [
        'Explain the 4 tones of Mandarin with examples.',
        'How do I ask for the bill in Chinese?',
        'Correct this: "Wǒ shì hěn hǎo."',
      ];
    } else {
      return [
        `Teach me the 5 most important greetings in ${currentLang.name}.`,
        'Practice ordering food at a local restaurant.',
        'Explain basic sentence word order.',
      ];
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Top Banner & Mode Switcher */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LingoraMascot expression="teaching" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-[#20243A]">Lingora AI Voice Tutor</h1>
                <span className="px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669] font-black text-[10px]">
                  GEMINI 3.8 FLASH • LIVE VOICE
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Target: <FlagIcon code={currentLang.id} size="xs" className="inline-block mx-1" />
                <span className="font-bold text-[#1E3A8A]">{currentLang.name}</span> ({profile.currentLevel} • {currentLang.pathwayType})
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Auto-Voice Speak Toggle */}
            <button
              onClick={() => {
                if (isSpeaking) handleStopSpeaking();
                setAutoPlayAudio(!autoPlayAudio);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition border cursor-pointer ${
                autoPlayAudio
                  ? 'bg-blue-50 border-blue-200 text-[#1E3A8A]'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
              title="Automatically read aloud tutor responses"
            >
              {autoPlayAudio ? <Volume2 className="w-3.5 h-3.5 text-[#3B82F6]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>Voice Reply: {autoPlayAudio ? 'ON' : 'OFF'}</span>
            </button>

            {/* Speaking Status / Stop Audio */}
            {isSpeaking && (
              <button
                onClick={handleStopSpeaking}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl text-xs font-black bg-rose-50 border border-rose-200 text-rose-600 animate-pulse cursor-pointer"
                title="Stop audio narration"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>Stop Voice</span>
              </button>
            )}

            {/* Speed Toggle */}
            <button
              onClick={() => setIsSlowSpeech(!isSlowSpeech)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition border cursor-pointer ${
                isSlowSpeech
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Speak slower for beginner comprehension"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>{isSlowSpeech ? 'Slow (0.7x)' : 'Normal Speed'}</span>
            </button>

            {/* Explanation Language Toggle: English vs Hindi */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
              <span className="text-[11px] font-bold text-slate-500 pl-1.5">Explain:</span>
              <button
                onClick={() => setExplainLanguage('english')}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition cursor-pointer ${
                  explainLanguage === 'english'
                    ? 'bg-white text-[#1E3A8A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English 🇬🇧
              </button>
              <button
                onClick={() => setExplainLanguage('hindi')}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition cursor-pointer ${
                  explainLanguage === 'hindi'
                    ? 'bg-white text-[#1E3A8A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिन्दी 🇮🇳
              </button>
            </div>
          </div>
        </div>

        {/* Learning Modes Bar */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1">
          {[
            { id: 'chat', label: '💬 Conversation', desc: 'Chat freely' },
            { id: 'roleplay', label: '🎭 Roleplay', desc: 'Real scenarios' },
            { id: 'grammar', label: '🩺 Grammar Doctor', desc: 'Conjugations & rules' },
            { id: 'pronounce', label: '🗣️ Pronunciation', desc: 'Accent & phonetics' },
            { id: 'quiz_generator', label: '⚡ Practice Test', desc: 'Custom quiz' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setMode(m.id);
                if (m.id === 'quiz_generator') {
                  handleSendMessage(`Create a quick 3-question practice exercise for ${profile.targetLanguage} at ${profile.currentLevel} level.`);
                }
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                mode === m.id
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Roleplay Scenario Selector */}
        {mode === 'roleplay' && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-extrabold uppercase text-slate-400 block mb-2">
              Select Roleplay Scenario:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ROLEPLAY_SCENARIOS.map((sc) => {
                const Icon = sc.icon;
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedScenario(sc.id);
                      handleSendMessage(`Let's start the roleplay: "${sc.title}". You act as the native host in ${currentLang.name}, and I will be the customer.`);
                    }}
                    className={`p-2.5 rounded-2xl border text-left transition cursor-pointer ${
                      selectedScenario === sc.id
                        ? 'border-[#3B82F6] bg-blue-50/60 text-[#1E3A8A]'
                        : 'border-slate-100 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <div className="text-xs font-bold leading-tight">{sc.title}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">{sc.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mic Notice or Permission Alert */}
      {micNotice && (
        <div
          className={`p-3.5 rounded-2xl text-xs flex items-center justify-between gap-3 ${
            micNotice.type === 'error'
              ? 'bg-rose-50 border border-rose-200 text-rose-800'
              : micNotice.type === 'warn'
              ? 'bg-amber-50 border border-amber-200 text-amber-900'
              : 'bg-blue-50 border border-blue-200 text-[#1E3A8A]'
          }`}
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{micNotice.text}</span>
          </div>
          <button
            onClick={() => setMicNotice(null)}
            className="p-1 hover:bg-black/5 rounded-lg cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Chat Messages Log */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm min-h-[420px] max-h-[560px] flex flex-col justify-between">
        <div className="overflow-y-auto space-y-4 pr-1">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                    isUser
                      ? 'bg-[#10B981] text-white'
                      : 'bg-[#1E3A8A] text-white shadow-xs'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] rounded-3xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-[#1E3A8A] text-white rounded-tr-none'
                      : 'bg-slate-50 border border-slate-100 text-[#20243A] rounded-tl-none shadow-xs'
                  }`}
                >
                  {msg.isAudio && (
                    <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-blue-200">
                      <Mic className="w-3.5 h-3.5" />
                      <span>Audio Input</span>
                    </div>
                  )}

                  <div className="whitespace-pre-wrap font-medium">{msg.text}</div>

                  <div className="mt-2.5 flex items-center justify-between gap-3 text-[10px] opacity-70 border-t border-black/5 pt-1.5">
                    <span>{msg.timestamp}</span>

                    {!isUser && (
                      <button
                        onClick={() => handleSpeak(msg.text)}
                        className="flex items-center gap-1 hover:opacity-100 text-[#1E3A8A] font-bold p-1 rounded-lg hover:bg-blue-100 transition cursor-pointer"
                        title="Listen native pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen {isSlowSpeech ? '(Slow)' : ''}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 pl-10">
              <Sparkles className="w-4 h-4 text-[#3B82F6] animate-spin" />
              <span>Lingora AI is listening, checking pronunciation & crafting personalized feedback...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Starters */}
        {messages.length <= 2 && (
          <div className="my-3 pt-3 border-t border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Suggested Starters:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {getQuickStarters().map((st, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(st)}
                  className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] text-xs font-medium transition text-left cursor-pointer"
                >
                  "{st}"
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Live Audio Visualizer / Voice Recording Action Bar */}
        {isRecording && (
          <div className="mt-3 p-4 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Pulsing Mic Dot */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-4 h-4 rounded-full bg-rose-500 animate-ping opacity-75" />
                  <span className="relative w-3.5 h-3.5 rounded-full bg-rose-500" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-wide">
                      LISTENING TO YOUR VOICE... ({recordingSeconds}s)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold">
                      {voiceLangMode === 'target' ? `Speaking ${currentLang.name}` : 'Speaking English'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Speak your sentence now. Lingora AI will check your pronunciation and grammar!
                  </p>
                </div>
              </div>

              {/* Real-time Dynamic Soundwave Bars */}
              <div className="flex items-center gap-1 h-6 px-3 bg-white/10 rounded-2xl">
                {[1, 2, 3, 4, 5, 6, 7].map((bar) => {
                  const scale = Math.max(0.2, (recordingVolume / 100) * (0.5 + (bar % 3) * 0.3));
                  return (
                    <span
                      key={bar}
                      className="w-1 bg-[#10B981] rounded-full transition-all duration-75"
                      style={{
                        height: `${Math.round(scale * 24)}px`,
                      }}
                    />
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCancelVoice}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cancel</span>
                </button>

                <button
                  type="button"
                  onClick={handleStopAndSendVoice}
                  className="px-4 py-1.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Done & Teach Me</span>
                </button>
              </div>
            </div>

            {/* Language Switcher for Voice */}
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-slate-300">Speaking in:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setVoiceLangMode('target')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition cursor-pointer ${
                    voiceLangMode === 'target'
                      ? 'bg-white text-[#1E3A8A]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {currentLang.name}
                </button>
                <button
                  type="button"
                  onClick={() => setVoiceLangMode('explain')}
                  className={`px-2 py-0.5 rounded-lg font-bold transition cursor-pointer ${
                    voiceLangMode === 'explain'
                      ? 'bg-white text-[#1E3A8A]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English / Question
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Mic Toggle Button */}
            <button
              type="button"
              onClick={() => {
                if (isRecording) {
                  handleStopAndSendVoice();
                } else {
                  handleStartVoice();
                }
              }}
              title={isRecording ? 'Stop and send voice recording' : 'Speak with your microphone'}
              className={`p-3 rounded-2xl transition cursor-pointer relative ${
                isRecording
                  ? 'bg-rose-500 text-white ring-4 ring-rose-200'
                  : 'bg-blue-50 hover:bg-blue-100 text-[#1E3A8A]'
              }`}
            >
              {isRecording ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                isRecording
                  ? 'Listening... (Speak your sentence)'
                  : `Type or click mic to speak in ${currentLang.name} or English...`
              }
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3B82F6] text-sm font-medium text-[#20243A]"
            />

            <button
              type="submit"
              disabled={(!inputText.trim() && !isRecording) || isTyping}
              className="p-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] disabled:bg-slate-200 text-white transition shadow-xs cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiTutor;
