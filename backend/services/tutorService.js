import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

let aiInstance = null;

function getAiClient() {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey,
    });
  }
  return aiInstance;
}

export async function getDiagnosticInfo() {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  const maskedKey = apiKey
    ? `${apiKey.slice(0, 6)}...${apiKey.slice(-4)} (length: ${apiKey.length})`
    : 'MISSING';

  const diagnostics = {
    hasKey: Boolean(apiKey),
    maskedKey,
    configuredModel: process.env.GEMINI_MODEL || 'None',
    availableModels: [],
    testResult: null,
    error: null,
  };

  if (!apiKey) {
    diagnostics.error = 'GEMINI_API_KEY environment variable is missing';
    return diagnostics;
  }

  const ai = getAiClient();

  try {
    const listRes = await ai.models.list({ config: { pageSize: 15 } });
    for await (const m of listRes) {
      diagnostics.availableModels.push(m.name);
    }
  } catch (err) {
    diagnostics.listError = err?.message || String(err);
  }

  const testCandidates = [
    'gemini-3-flash-preview',
    'gemini-3.8-flash',
    'gemini-3.5-flash-lite',
    'gemini-flash-latest',
    process.env.GEMINI_MODEL?.trim(),
  ].filter(Boolean);

  for (const m of testCandidates) {
    try {
      const resp = await ai.models.generateContent({
        model: m,
        contents: 'Say hello in one word.',
      });
      diagnostics.testResult = {
        workingModel: m,
        reply: resp.text,
      };
      break;
    } catch (testErr) {
      if (!diagnostics.testAttempts) diagnostics.testAttempts = [];
      diagnostics.testAttempts.push({
        model: m,
        error: testErr?.message || String(testErr),
      });
    }
  }

  return diagnostics;
}

export async function handleTutorInteraction(request) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.length < 5) {
    return {
      success: false,
      error: 'GEMINI_API_KEY is not configured',
      text: 'Lingora AI Tutor requires a Gemini API key. Add your free GEMINI_API_KEY to your .env file (or Vercel Environment Variables) to enable conversational AI voice practice!',
    };
  }

  const ai = getAiClient();

  const langNames = {
    french: 'French (Français)',
    german: 'German (Deutsch)',
    japanese: 'Japanese (日本語 with Kanji, Hiragana/Katakana and Romaji for beginners)',
    korean: 'Korean (한국어 with Hangul, Romanization and polite honorifics)',
    spanish: 'Spanish (Español)',
    mandarin: 'Mandarin Chinese (中文 with Simplified Characters, Pinyin and 4 tone marks)',
    russian: 'Russian (Русский with Cyrillic script and pronunciation notes)',
    portuguese: 'Portuguese (Português)',
    italian: 'Italian (Italiano)',
    arabic: 'Arabic (العربية with Modern Standard Arabic script and English transliteration)',
  };

  const targetLang = langNames[request.language] || request.language;
  const userLevel = request.level || 'Beginner';
  const explainLang = request.explanationLanguage === 'hindi' ? 'Hindi and simple English' : 'clear, encouraging English';

  const systemPrompt = `You are "Lingora AI", an elite, warm, pedagogical language tutor specializing in ${targetLang}.
The learner's current proficiency pathway level is ${userLevel}.
All grammatical explanations, corrections, and meta-instructions must be in ${explainLang}.
Always format your responses with clean Markdown, bullet points, and helpful formatting.

Core Conversational & Pronunciation Rules:
1. Active Correction & Feedback:
   - When the learner speaks (audio) or writes (text), actively evaluate their pronunciation, grammar, and word choice.
   - If there is ANY error, mispronunciation, particle mistake, or awkward phrasing:
     * Provide a clear "🎯 Feedback & Correction" section:
       - 🗣️ **What you said / Transcribed:** [The learner's words with Romaji/phonetics]
       - ✅ **Natural Phrasing:** [How a native speaker would say it]
       - 💡 **Pronunciation & Grammar Tip:** [Explanation in ${explainLang}, pointing out sounds, pitch, or particles]
   - If what they said is already accurate and natural, give warm praise! ("Parfait !", "素晴らしい！", "Sehr gut!") and briefly highlight what they did right.

2. Natural Conversational Flow:
   - Always respond in ${targetLang} suited for level ${userLevel}.
   - In 'roleplay' mode: stay in character (e.g. barista, hotel clerk, train ticket agent, friendly local), keeping dialogue vivid and concise (1-3 sentences).
   - In 'chat' mode: converse like a supportive local friend.
   - For beginners, always provide English/Hindi translations in parentheses for target language lines.
   - Conclude with an engaging follow-up question or response prompt so the conversation continues naturally.

Guidelines by Mode:
1. Mode 'chat':
   - Converse naturally on everyday topics suited for ${userLevel}.
2. Mode 'roleplay':
   - Scenario: ${request.scenario || 'Ordering at a local café or bakery'}.
   - Act out the scenario vividly. Give the learner 2 suggested phrase starters they can reply with.
3. Mode 'grammar':
   - Break down grammar rules, verb conjugations, particles, or sentence structures with 3 examples.
4. Mode 'pronounce':
   - Deep-dive into pronunciation, syllable stress, pitch accents, tone marks, and common pitfalls.
5. Mode 'quiz_generator':
   - Create 3 interactive practice exercises with answers.

Special Script Rules:
- If Japanese: Always provide Japanese script (Kanji/Kana) + Romaji + English translation.
- If Korean: Always provide Hangul + Revised Romanization + English translation.
- If Mandarin: Always provide Hanzi + Pinyin with tone marks + English translation.
- If Russian: Provide Cyrillic + Latin phonetics + English translation.
- If Arabic: Provide Arabic script + English transliteration + English translation.

Keep the tone warm, patient, inspiring, and encouraging!`;

  try {
    const formattedContents = [];

    const recentHistory = (request.history || []).slice(-10);
    for (const msg of recentHistory) {
      formattedContents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      });
    }

    const userParts = [];
    if (request.audio?.base64) {
      userParts.push({
        inlineData: {
          data: request.audio.base64,
          mimeType: request.audio.mimeType || 'audio/webm',
        },
      });
    }

    if (request.message?.trim()) {
      userParts.push({ text: request.message.trim() });
    } else if (request.audio?.base64) {
      userParts.push({
        text: `[Audio input from learner]. Please listen to my spoken voice:
1. Transcribe what I said in ${targetLang} (with Romanization/phonetics).
2. Evaluate my pronunciation, pitch/accent, and grammar.
3. Give me corrections and better native phrasing in ${explainLang}.
4. Reply to me in ${targetLang} to keep our conversation going.`,
      });
    } else {
      userParts.push({ text: 'Hello! I am ready to practice.' });
    }

    formattedContents.push({
      role: 'user',
      parts: userParts,
    });

    const candidateModels = [
      'gemini-3-flash-preview',
      'gemini-3.8-flash',
      'gemini-3.5-flash-lite',
      'gemini-flash-latest',
      process.env.GEMINI_MODEL?.trim(),
    ].filter(Boolean);

    let lastError = null;
    for (const modelToTry of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelToTry,
          contents: formattedContents,
          config: {
            systemInstruction: systemPrompt,
          },
        });

        return {
          success: true,
          text: response.text || 'I am ready to help you practice! What would you like to explore next?',
        };
      } catch (err) {
        lastError = err;
        if (err?.message?.includes('404') || err?.message?.includes('not found') || err?.status === 404) {
          console.warn(`Model ${modelToTry} unavailable, trying next candidate...`);
          continue;
        }
        throw err;
      }
    }

    throw lastError || new Error('No compatible Gemini model responded');
  } catch (error) {
    console.error('Gemini Tutor Error:', error);

    let friendlyMessage = `Lingora AI is momentarily catching its breath. You can try asking again in a moment!`;
    const errMsg = error?.message || '';

    if (errMsg.includes('404') || errMsg.includes('not found')) {
      friendlyMessage = `Lingora AI: Google Gemini returned a 404 (Model not found). If you created the API key in Google Cloud Console, make sure 'Generative Language API' is enabled at https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com, or create a free API key at https://aistudio.google.com/app/apikey.`;
    } else if (errMsg.includes('API_KEY_INVALID') || errMsg.includes('API key not valid')) {
      friendlyMessage = `Lingora AI: Invalid GEMINI_API_KEY. Please verify the Gemini API key in your Vercel Environment Variables.`;
    }

    return {
      success: false,
      error: errMsg || 'Failed to generate tutor response',
      text: friendlyMessage,
    };
  }
}
