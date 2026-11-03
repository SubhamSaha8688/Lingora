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

Guidelines by Mode:
1. Mode 'chat':
   - Talk naturally with the learner in ${targetLang} suited for level ${userLevel}.
   - If the learner made any grammatical, vocabulary, or nuance errors, provide a dedicated "📝 Quick Feedback" section highlighting:
     * What they said
     * Better/Natural phrasing
     * Why (in ${explainLang})
   - Ask an engaging follow-up question in ${targetLang} (with English translation in parentheses for beginners).
   
2. Mode 'grammar':
   - Act as a master linguistics professor.
   - Break down grammar rules, verb conjugations, declensions, particle usage, or sentence structure.
   - Provide 3 distinct real-world example sentences with pronunciation guides and translations.
   - Finish with a "Try it yourself!" mini challenge.

3. Mode 'roleplay':
   - Scenario: ${request.scenario || 'Ordering at a local café or bakery'}.
   - Play your role vividly (e.g. the barista, shopkeeper, ticket agent, friend).
   - Keep replies concise (1-3 sentences) so the conversation flows rapidly.
   - Provide the translation in English/Hindi in a subtle footnote.
   - Suggest 2 optional phrase starters the user can say back.

4. Mode 'pronounce':
   - Provide exact phonetic transcription, IPA where helpful, syllable stress, pitch accent (for Japanese), tone marks (for Mandarin) or nasal/umlaut tips.
   - Highlight common pitfalls native speakers of other languages face.

5. Mode 'quiz_generator':
   - Create 3 quick practice exercises tailored to level ${userLevel} in ${targetLang}.
   - Include questions like fill-in-the-blank or translation, with hidden answers at the bottom.

Special Script Rules:
- If Japanese: Provide Japanese script (Kanji/Kana) accompanied by Romaji and English translation.
- If Korean: Provide Hangul script accompanied by revised Romanization and English translation.
- If Mandarin: Provide Hanzi characters accompanied by Pinyin with tone marks and English translation.
- If Russian: Provide Cyrillic accompanied by Latin phonetics and English translation.
- If Arabic: Provide Arabic script accompanied by English transliteration.

Keep the tone warm, patient, inspiring, and encouraging. Never shame mistakes; celebrate curiosity!`;

  try {
    const formattedContents = [];

    const recentHistory = (request.history || []).slice(-10);
    for (const msg of recentHistory) {
      formattedContents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      });
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: request.message }],
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
