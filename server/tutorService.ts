import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

let aiInstance: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY || '';
    aiInstance = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiInstance;
}

export interface TutorMessage {
  role: 'user' | 'model';
  content: string;
}

export type SupportedTutorLanguage =
  | 'french'
  | 'german'
  | 'japanese'
  | 'korean'
  | 'spanish'
  | 'mandarin'
  | 'russian'
  | 'portuguese'
  | 'italian'
  | 'arabic';

export interface TutorRequest {
  language: SupportedTutorLanguage;
  level: string;
  mode: 'chat' | 'grammar' | 'roleplay' | 'pronounce' | 'quiz_generator';
  scenario?: string;
  explanationLanguage?: 'english' | 'hindi';
  history: TutorMessage[];
  message: string;
}

export async function handleTutorInteraction(request: TutorRequest) {
  const ai = getAiClient();

  const langNames: Record<string, string> = {
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

  let systemPrompt = `You are "Lingora AI", an elite, warm, pedagogical language tutor specializing in ${targetLang}.
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
    const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    const recentHistory = request.history.slice(-10);
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return {
      success: true,
      text: response.text || 'I am ready to help you practice! What would you like to explore next?',
    };
  } catch (error: any) {
    console.error('Gemini Tutor Error:', error);
    return {
      success: false,
      error: error?.message || 'Failed to generate tutor response',
      text: `Lingora AI is momentarily catching its breath. (${error?.message || 'Network delay'}). You can try asking again in a moment!`,
    };
  }
}
