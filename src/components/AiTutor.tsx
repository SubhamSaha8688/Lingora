import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../data/curriculum.ts';
import { speakText, startSpeechRecognition } from '../utils/speech.ts';
import { LingoraMascot } from './LingoraMascot.tsx';
import {
  Send,
  Volume2,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  User,
  Coffee,
  Train,
  Building,
  GraduationCap,
  Languages,
  RotateCcw,
  BookOpen,
  Volume1,
  Gauge,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
}

const ROLEPLAY_SCENARIOS = [
  { id: 'cafe', title: 'At the Café / Bakery', icon: Coffee, desc: 'Order drinks, snacks & pastries' },
  { id: 'train', title: 'Train Station & Tickets', icon: Train, desc: 'Buy tickets & ask for directions' },
  { id: 'hotel', title: 'Hotel Reception', icon: Building, desc: 'Check in, ask for WiFi & room keys' },
  { id: 'interview', title: 'Friendly Meet & Greet', icon: GraduationCap, desc: 'Introduce yourself & your passions' },
];

export const AiTutor: React.FC = () => {
  const { profile } = useAuth();

  const [mode, setMode] = useState<'chat' | 'grammar' | 'roleplay' | 'pronounce' | 'quiz_generator'>('chat');
  const [selectedScenario, setSelectedScenario] = useState('cafe');
  const [explainLanguage, setExplainLanguage] = useState<'english' | 'hindi'>(
    profile.interfaceLanguage === 'hindi' ? 'hindi' : 'english'
  );
  const [isSlowSpeech, setIsSlowSpeech] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
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
  const [isRecording, setIsRecording] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const history = messages.slice(-8).map((m) => ({
        role: (m.sender === 'user' ? 'user' : 'model') as 'user' | 'model',
        content: m.text,
      }));

      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: profile.targetLanguage,
          level: profile.currentLevel,
          mode,
          scenario: mode === 'roleplay' ? selectedScenario : undefined,
          explanationLanguage: explainLanguage,
          history,
          message: text.trim(),
        }),
      });

      const data = await response.json();
      const tutorText = data.text || 'I am ready to help you practice! What would you like to explore next?';

      const tutorMsg: Message = {
        id: String(Date.now() + 1),
        sender: 'tutor',
        text: tutorText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err: any) {
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

  const handleToggleVoice = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    setIsRecording(true);
    startSpeechRecognition(
      currentLang.speechCode,
      (transcript) => {
        setInputText(transcript);
      },
      (error) => {
        console.warn('Speech err:', error);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );
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
                  GEMINI 3.8 FLASH
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Target: <span className="font-bold text-[#1E3A8A]">{currentLang.name}</span> ({profile.currentLevel} • {currentLang.pathwayType})
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Speed Toggle (Slow vs Normal for audio playback) */}
            <button
              onClick={() => setIsSlowSpeech(!isSlowSpeech)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition border ${
                isSlowSpeech
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Speak slower for beginner comprehension"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>{isSlowSpeech ? 'Slow Speech (0.7x)' : 'Normal Speed'}</span>
            </button>

            {/* Explanation Language Toggle: English vs Hindi */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
              <span className="text-[11px] font-bold text-slate-500 pl-1.5">Explain:</span>
              <button
                onClick={() => setExplainLanguage('english')}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition ${
                  explainLanguage === 'english'
                    ? 'bg-white text-[#1E3A8A] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English 🇬🇧
              </button>
              <button
                onClick={() => setExplainLanguage('hindi')}
                className={`px-2.5 py-1 rounded-xl text-xs font-black transition ${
                  explainLanguage === 'hindi'
                    ? 'bg-white text-[#1E3A8A] shadow-sm'
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
                setMode(m.id as any);
                if (m.id === 'quiz_generator') {
                  handleSendMessage(`Create a quick 3-question practice exercise for ${profile.targetLanguage} at ${profile.currentLevel} level.`);
                }
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                mode === m.id
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Roleplay Scenario Selector if mode is roleplay */}
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
                    className={`p-2.5 rounded-2xl border text-left transition ${
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

      {/* Chat Messages Log */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm min-h-[420px] max-h-[540px] flex flex-col justify-between">
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
                      : 'bg-[#1E3A8A] text-white shadow-sm'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] rounded-3xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-[#1E3A8A] text-white rounded-tr-none'
                      : 'bg-slate-50 border border-slate-100 text-[#20243A] rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-medium">{msg.text}</div>

                  <div className="mt-2 flex items-center justify-between gap-3 text-[10px] opacity-70">
                    <span>{msg.timestamp}</span>

                    {!isUser && (
                      <button
                        onClick={() =>
                          speakText(msg.text, currentLang.speechCode, isSlowSpeech ? 0.7 : 0.9)
                        }
                        className="flex items-center gap-1 hover:opacity-100 text-[#1E3A8A] font-bold p-1 rounded-lg hover:bg-blue-100 transition"
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
              <span>Lingo is crafting personalized feedback...</span>
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
                  className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] text-xs font-medium transition text-left"
                >
                  "{st}"
                </button>
              ))}
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
            <button
              type="button"
              onClick={handleToggleVoice}
              title="Dictate with voice"
              className={`p-3 rounded-2xl transition ${
                isRecording
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Type or speak in ${currentLang.name} or English...`}
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3B82F6] text-sm font-medium text-[#20243A]"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] disabled:bg-slate-200 text-white transition shadow-sm"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
