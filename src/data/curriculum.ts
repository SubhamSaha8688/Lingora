export type SupportedLanguage =
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

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | string;
export type CourseLevel = string;
export type PathwayType = 'CEFR' | 'JLPT' | 'TOPIK' | 'HSK';

export interface LanguageMeta {
  id: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  countryCode: string;
  speechCode: string;
  description: string;
  accentColor: string;
  pathwayType: PathwayType;
  availableLevels: string[];
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {
    id: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    countryCode: 'fr',
    speechCode: 'fr-FR',
    description: 'The global language of romance, culture, diplomacy, and cuisine.',
    accentColor: '#1E3A8A',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'german',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    countryCode: 'de',
    speechCode: 'de-DE',
    description: 'The powerhouse European language of engineering, philosophy, and innovation.',
    accentColor: '#3B82F6',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'japanese',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    countryCode: 'jp',
    speechCode: 'ja-JP',
    description: 'Master Japanese characters, etiquette, anime, and high-tech culture.',
    accentColor: '#10B981',
    pathwayType: 'JLPT',
    availableLevels: ['JLPT N5', 'JLPT N4', 'JLPT N3', 'JLPT N2', 'JLPT N1'],
  },
  {
    id: 'korean',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    countryCode: 'kr',
    speechCode: 'ko-KR',
    description: 'Learn Hangul, K-Culture, entertainment, and modern Seoul lifestyle.',
    accentColor: '#8B5CF6',
    pathwayType: 'TOPIK',
    availableLevels: ['TOPIK I (L1)', 'TOPIK I (L2)', 'TOPIK II (L3)', 'TOPIK II (L4)', 'TOPIK II (L5-6)'],
  },
  {
    id: 'spanish',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    countryCode: 'es',
    speechCode: 'es-ES',
    description: 'Spoken across 20+ countries from Madrid to Latin America.',
    accentColor: '#F59E0B',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    nativeName: '中文 (普通话)',
    flag: '🇨🇳',
    countryCode: 'cn',
    speechCode: 'zh-CN',
    description: 'Standard Chinese tones, Pinyin, characters, and global business.',
    accentColor: '#EF4444',
    pathwayType: 'HSK',
    availableLevels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'],
  },
  {
    id: 'russian',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    countryCode: 'ru',
    speechCode: 'ru-RU',
    description: 'Learn the Cyrillic alphabet, rich classical literature, and Eurasia.',
    accentColor: '#0284C7',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'portuguese',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    countryCode: 'br',
    speechCode: 'pt-BR',
    description: 'Warm, musical language spoken across Brazil, Portugal, and Africa.',
    accentColor: '#10B981',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'italian',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    countryCode: 'it',
    speechCode: 'it-IT',
    description: 'The expressive language of art, music, architecture, and gastronomy.',
    accentColor: '#059669',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
  {
    id: 'arabic',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    countryCode: 'sa',
    speechCode: 'ar-SA',
    description: 'Modern Standard Arabic script, calligraphy, and Middle Eastern culture.',
    accentColor: '#D97706',
    pathwayType: 'CEFR',
    availableLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  },
];

export interface VocabularyItem {
  word: string;
  romajiOrPronunciation: string;
  translation: string;
  partOfSpeech: string;
  exampleSentence: string;
  exampleTranslation: string;
}

export type QuizQuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'match_pairs'
  | 'translate'
  | 'arrange_order'
  | 'listen_identify'
  | 'true_false'
  | 'speaking'
  | 'typing';

export interface MatchPair {
  left: string;
  right: string;
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  prompt: string;
  audioText?: string;
  options?: string[];
  correctAnswer: string | string[] | MatchPair[];
  explanation: string;
  translationHint?: string;
  wordBank?: string[];
  speechTarget?: string;
}

export interface Lesson {
  id: string;
  languageId: SupportedLanguage;
  level: string;
  title: string;
  description: string;
  category: string;
  estimatedMinutes: number;
  xpReward: number;
  objective: string;
  vocabulary: VocabularyItem[];
  grammarNotes: {
    title: string;
    explanation: string;
    examples: string[];
  }[];
  exercises: QuizQuestion[];
}

export interface StudyMaterialItem {
  id: string;
  title: string;
  languageId: SupportedLanguage;
  level: string;
  description: string;
  priceInInr: number;
  pagesCount: number;
  previewUrl: string;
  chapters: string[];
  featured?: boolean;
}

export const STUDY_MATERIALS: StudyMaterialItem[] = [
  {
    id: 'mat-fr-a1',
    title: 'French A1 Comprehensive Grammar & Dialogue Handbook',
    languageId: 'french',
    level: 'A1',
    description: '50-page printable PDF guide with color conjugation tables, Paris café dialogues, and audio companion scripts.',
    priceInInr: 49,
    pagesCount: 52,
    previewUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: The French Alphabet & Nasal Vowel Sounds',
      'Chapter 2: Essential Greetings & Tu vs. Vous Etiquette',
      'Chapter 3: Definite & Indefinite Articles (Le, La, Les, Un, Une)',
      'Chapter 4: At the Boulangerie & Ordering Food',
      'Chapter 5: Present Tense Conjugation for Regular -ER Verbs',
    ],
    featured: true,
  },
  {
    id: 'mat-de-a1',
    title: 'German A1 Fast-Track Cheat Sheet & Vocabulary Vault',
    languageId: 'german',
    level: 'A1',
    description: 'Master German noun genders (Der, Die, Das), Akkusativ case, numbers, and Berlin travel survival phrases.',
    priceInInr: 49,
    pagesCount: 46,
    previewUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: German Pronunciation & The Umlauts (ä, ö, ü, ß)',
      'Chapter 2: Gender of Nouns & Colors Cheat Sheet',
      'Chapter 3: Numbers 1 to 100 & Telling Time',
      'Chapter 4: Ordering at Cafés & Train Travel in Germany',
    ],
    featured: true,
  },
  {
    id: 'mat-ja-n5',
    title: 'Japanese JLPT N5 Complete Kanji & Kana Workbook',
    languageId: 'japanese',
    level: 'JLPT N5',
    description: 'All 103 JLPT N5 Kanji stroke orders, Hiragana/Katakana charts, key particles (は, が, を, に), and practice sheets.',
    priceInInr: 49,
    pagesCount: 68,
    previewUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: Hiragana & Katakana Stroke Order Master Charts',
      'Chapter 2: 103 Essential JLPT N5 Kanji with Onyomi & Kunyomi',
      'Chapter 3: Japanese Particles Explained Simply (wa, ga, o, ni, de)',
      'Chapter 4: Konbini & Restaurant Phrases in Tokyo',
    ],
    featured: true,
  },
  {
    id: 'mat-ko-t1',
    title: 'Korean Hangul & TOPIK I Essential Sentence Builder',
    languageId: 'korean',
    level: 'TOPIK I (L1)',
    description: 'Learn to read Hangul in 60 minutes, basic honorifics, sentence structure (SOV), and K-Drama everyday vocabulary.',
    priceInInr: 49,
    pagesCount: 44,
    previewUrl: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: Reading Hangul Consonants, Vowels & Batchim',
      'Chapter 2: Subject, Object & Verb (SOV) Sentence Construction',
      'Chapter 3: Polite Endings (-요 and -습니다)',
      'Chapter 4: Ordering Korean Street Food & Coffee',
    ],
  },
  {
    id: 'mat-es-a1',
    title: 'Spanish A1 Practical Conversational Guidebook',
    languageId: 'spanish',
    level: 'A1',
    description: 'Clear verb charts for Ser vs. Estar, basic everyday conversations, hotel reservations, and Spanish phonetics.',
    priceInInr: 49,
    pagesCount: 48,
    previewUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: Spanish Alphabet & Rolling Your Rs',
      'Chapter 2: Ser vs. Estar: When to Use Which',
      'Chapter 3: Essential Travel Phrases in Madrid & Mexico',
      'Chapter 4: Basic Food & Shopping Expressions',
    ],
  },
  {
    id: 'mat-zh-hsk1',
    title: 'Mandarin HSK 1 Pinyin & Characters Survival Booklet',
    languageId: 'mandarin',
    level: 'HSK 1',
    description: 'Pinyin four-tone system training, 150 official HSK 1 vocabulary words with Hanzi stroke breakdown and sample dialogues.',
    priceInInr: 49,
    pagesCount: 56,
    previewUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&auto=format&fit=crop&q=80',
    chapters: [
      'Chapter 1: The 4 Tones of Mandarin & Pinyin Mastery',
      'Chapter 2: 150 Core HSK 1 Vocabulary Words',
      'Chapter 3: Basic Measure Words (个 gè and more)',
      'Chapter 4: Introducing Yourself in China',
    ],
  },
];

export const CURRICULUM: Record<SupportedLanguage, Lesson[]> = {
  french: [
    {
      id: 'fr-a1-01',
      languageId: 'french',
      level: 'A1',
      title: 'Greetings & Salutations',
      description: 'Master first encounters, welcoming someone, and asking how they are doing in Paris.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Learn how to greet someone politely at different times of day and say goodbye.',
      vocabulary: [
        {
          word: 'Bonjour',
          romajiOrPronunciation: 'bohn-zhoor',
          translation: 'Hello / Good day',
          partOfSpeech: 'Interjection',
          exampleSentence: 'Bonjour, comment allez-vous ?',
          exampleTranslation: 'Hello, how are you?',
        },
        {
          word: 'Bonsoir',
          romajiOrPronunciation: 'bohn-swahr',
          translation: 'Good evening',
          partOfSpeech: 'Interjection',
          exampleSentence: 'Bonsoir Madame, bienvenue !',
          exampleTranslation: 'Good evening Madame, welcome!',
        },
        {
          word: 'Merci beaucoup',
          romajiOrPronunciation: 'mair-see boh-koo',
          translation: 'Thank you very much',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Merci beaucoup pour votre aide.',
          exampleTranslation: 'Thank you very much for your help.',
        },
        {
          word: 'Au revoir',
          romajiOrPronunciation: 'oh ruh-vwahr',
          translation: 'Goodbye',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Au revoir et à bientôt !',
          exampleTranslation: 'Goodbye and see you soon!',
        },
        {
          word: "S'il vous plaît",
          romajiOrPronunciation: 'seel voo pleh',
          translation: 'Please (formal)',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Un café, s’il vous plaît.',
          exampleTranslation: 'A coffee, please.',
        },
      ],
      grammarNotes: [
        {
          title: 'Tu vs. Vous in French',
          explanation: 'French distinguishes between informal "tu" (friends, family) and polite/formal "vous" (strangers, superiors).',
          examples: ['Comment vas-tu ? (Informal)', 'Comment allez-vous ? (Formal)'],
        },
      ],
      exercises: [
        {
          id: 'fr-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Hello" or "Good day" in French?',
          options: ['Au revoir', 'Bonjour', 'Bonsoir', 'Merci'],
          correctAnswer: 'Bonjour',
          explanation: '"Bonjour" literally means "good day" and is used as the standard greeting.',
        },
        {
          id: 'fr-q2',
          type: 'arrange_order',
          prompt: 'Arrange the words to say: "A coffee, please."',
          wordBank: ['s’il', 'vous', 'Un', 'café,', 'plaît.'],
          correctAnswer: ['Un', 'café,', 's’il', 'vous', 'plaît.'],
          explanation: 'The standard courteous way to order in French is "[Item], s\'il vous plaît".',
          translationHint: 'Un café, s’il vous plaît.',
        },
        {
          id: 'fr-q3',
          type: 'match_pairs',
          prompt: 'Match each French word with its English translation:',
          correctAnswer: [
            { left: 'Bonjour', right: 'Hello' },
            { left: 'Merci', right: 'Thank you' },
            { left: 'Au revoir', right: 'Goodbye' },
            { left: 'Bonsoir', right: 'Good evening' },
          ],
          explanation: 'Great job matching core French greetings and courtesy terms!',
        },
        {
          id: 'fr-q4',
          type: 'listen_identify',
          prompt: 'Listen to the audio and select what you hear:',
          audioText: 'Merci beaucoup',
          options: ['Bonjour beaucoup', 'Merci beaucoup', 'Au revoir', 'Bonne nuit'],
          correctAnswer: 'Merci beaucoup',
          explanation: '"Merci beaucoup" means "Thank you very much" in French.',
        },
        {
          id: 'fr-q5',
          type: 'speaking',
          prompt: 'Pronounce the following polite phrase aloud:',
          speechTarget: 'Bonjour comment allez vous',
          audioText: 'Bonjour, comment allez-vous ?',
          correctAnswer: 'Bonjour, comment allez-vous ?',
          explanation: 'Keep the nasal "on" in Bonjour and smoothly link "allez-vous".',
        },
      ],
    },
    {
      id: 'fr-a1-02',
      languageId: 'french',
      level: 'A1',
      title: 'At the French Boulangerie',
      description: 'Order fresh croissants, baguettes, and drinks with confidence.',
      category: 'Everyday Conversations',
      estimatedMinutes: 6,
      xpReward: 30,
      objective: 'Learn essential numbers, food items, and ordering etiquette in France.',
      vocabulary: [
        {
          word: 'Une baguette',
          romajiOrPronunciation: 'oon bah-get',
          translation: 'A baguette (bread)',
          partOfSpeech: 'Noun (f)',
          exampleSentence: 'Une baguette tradition, s’il vous plaît.',
          exampleTranslation: 'A traditional baguette, please.',
        },
        {
          word: 'Un croissant',
          romajiOrPronunciation: 'uhn krwah-sahn',
          translation: 'A croissant',
          partOfSpeech: 'Noun (m)',
          exampleSentence: 'Je voudrais deux croissants.',
          exampleTranslation: 'I would like two croissants.',
        },
      ],
      grammarNotes: [
        {
          title: 'Gender of Nouns (Un vs. Une)',
          explanation: 'All French nouns have grammatical gender: masculine take "un", feminine take "une".',
          examples: ['Un croissant (m)', 'Une baguette (f)'],
        },
      ],
      exercises: [
        {
          id: 'fr2-q1',
          type: 'fill_blank',
          prompt: 'Fill in the blank: "Je voudrais ___ baguette tradition."',
          options: ['un', 'une', 'des', 'le'],
          correctAnswer: 'une',
          explanation: '"Baguette" is feminine in French, taking "une".',
        },
      ],
    },
  ],
  german: [
    {
      id: 'de-a1-01',
      languageId: 'german',
      level: 'A1',
      title: 'Greetings & Introduction',
      description: 'Master everyday German greetings, introducing your name and origin.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Learn how to say hello, introduce yourself, and ask someone where they are from.',
      vocabulary: [
        {
          word: 'Hallo',
          romajiOrPronunciation: 'HAH-loh',
          translation: 'Hello',
          partOfSpeech: 'Interjection',
          exampleSentence: 'Hallo, wie geht es dir?',
          exampleTranslation: 'Hello, how are you?',
        },
        {
          word: 'Guten Morgen',
          romajiOrPronunciation: 'GOO-ten MOR-gen',
          translation: 'Good morning',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Guten Morgen allerseits!',
          exampleTranslation: 'Good morning everyone!',
        },
        {
          word: 'Ich heiße...',
          romajiOrPronunciation: 'ikh HY-suh',
          translation: 'My name is...',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Ich heiße Lukas und komme aus Berlin.',
          exampleTranslation: 'My name is Lukas and I come from Berlin.',
        },
      ],
      grammarNotes: [
        {
          title: 'Capitalization of Nouns in German',
          explanation: 'In German, ALL nouns are always capitalized (der Morgen, das Brot, die Frau).',
          examples: ['Guten Morgen', 'Das Wasser'],
        },
      ],
      exercises: [
        {
          id: 'de-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Good morning" in German?',
          options: ['Guten Abend', 'Guten Morgen', 'Gute Nacht', 'Tschüss'],
          correctAnswer: 'Guten Morgen',
          explanation: '"Guten Morgen" is used in the morning until about midday.',
        },
      ],
    },
  ],
  japanese: [
    {
      id: 'ja-n5-01',
      languageId: 'japanese',
      level: 'JLPT N5',
      title: 'First Greetings & Aisatsu',
      description: 'Learn foundational Japanese greetings, polite bows, and pleasantries.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Understand and speak everyday greetings with proper pitch and courtesy.',
      vocabulary: [
        {
          word: 'こんにちは',
          romajiOrPronunciation: 'Konnichiwa',
          translation: 'Hello / Good afternoon',
          partOfSpeech: 'Greeting',
          exampleSentence: 'こんにちは、お元気ですか？',
          exampleTranslation: 'Hello, how are you?',
        },
        {
          word: 'ありがとうございます',
          romajiOrPronunciation: 'Arigatou gozaimasu',
          translation: 'Thank you very much (polite)',
          partOfSpeech: 'Phrase',
          exampleSentence: '親切にありがとうございます。',
          exampleTranslation: 'Thank you very much for your kindness.',
        },
        {
          word: 'はじめまして',
          romajiOrPronunciation: 'Hajimemashite',
          translation: 'Nice to meet you (first time)',
          partOfSpeech: 'Phrase',
          exampleSentence: 'はじめまして、ケンです。',
          exampleTranslation: 'Nice to meet you, I am Ken.',
        },
      ],
      grammarNotes: [
        {
          title: 'Particle は (wa)',
          explanation: 'In "Konnichiwa", it is written with hiragana は (ha), but pronounced "wa".',
          examples: ['こんにちは (pronounced Konnichiwa)'],
        },
      ],
      exercises: [
        {
          id: 'ja-q1',
          type: 'multiple_choice',
          prompt: 'Which Japanese greeting means "Hello" during daytime?',
          options: ['さようなら (Sayounara)', 'こんにちは (Konnichiwa)', 'こんばんは (Konbanwa)', 'おはよう (Ohayou)'],
          correctAnswer: 'こんにちは (Konnichiwa)',
          explanation: 'こんにちは (Konnichiwa) is the standard daytime greeting.',
        },
      ],
    },
  ],
  korean: [
    {
      id: 'ko-t1-01',
      languageId: 'korean',
      level: 'TOPIK I (L1)',
      title: 'Essential Greetings & Hangul',
      description: 'Learn the polite greeting Annyeonghaseyo and basic Korean pleasantries.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Greet people politely in Korean and introduce yourself with confidence.',
      vocabulary: [
        {
          word: '안녕하세요',
          romajiOrPronunciation: 'An-nyeong-ha-se-yo',
          translation: 'Hello / How are you (polite)',
          partOfSpeech: 'Greeting',
          exampleSentence: '안녕하세요! 만나서 반가워요.',
          exampleTranslation: 'Hello! Nice to meet you.',
        },
        {
          word: '감사합니다',
          romajiOrPronunciation: 'Gam-sa-ham-ni-da',
          translation: 'Thank you (polite)',
          partOfSpeech: 'Phrase',
          exampleSentence: '도와주셔서 감사합니다.',
          exampleTranslation: 'Thank you for helping me.',
        },
        {
          word: '네',
          romajiOrPronunciation: 'Ne',
          translation: 'Yes (polite)',
          partOfSpeech: 'Interjection',
          exampleSentence: '네, 알겠습니다.',
          exampleTranslation: 'Yes, I understand.',
        },
      ],
      grammarNotes: [
        {
          title: 'Polite Speech Ending -요 (-yo)',
          explanation: 'Sentences ending in -요 are standard polite form, suitable for strangers and daily interactions.',
          examples: ['안녕하세요 (Hello)', '반가워요 (Nice to meet you)'],
        },
      ],
      exercises: [
        {
          id: 'ko-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Hello" politely in Korean?',
          options: ['감사합니다', '안녕하세요', '안녕', '죄송합니다'],
          correctAnswer: '안녕하세요',
          explanation: '안녕하세요 (Annyeonghaseyo) is the standard polite greeting in Korea.',
        },
        {
          id: 'ko-q2',
          type: 'match_pairs',
          prompt: 'Match Korean phrases with their English meanings:',
          correctAnswer: [
            { left: '안녕하세요', right: 'Hello' },
            { left: '감사합니다', right: 'Thank you' },
            { left: '네', right: 'Yes' },
          ],
          explanation: 'Great job matching core Korean expressions!',
        },
      ],
    },
  ],
  spanish: [
    {
      id: 'es-a1-01',
      languageId: 'spanish',
      level: 'A1',
      title: 'Saludos y Cortesía',
      description: 'Learn ¡Hola!, Buenos días, and how to introduce yourself in Spanish.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Introduce yourself politely and exchange pleasantries in Spanish.',
      vocabulary: [
        {
          word: '¡Hola!',
          romajiOrPronunciation: 'OH-lah',
          translation: 'Hello!',
          partOfSpeech: 'Greeting',
          exampleSentence: '¡Hola! ¿Cómo estás?',
          exampleTranslation: 'Hello! How are you?',
        },
        {
          word: 'Buenos días',
          romajiOrPronunciation: 'BWEH-nohs DEE-ahs',
          translation: 'Good morning',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Buenos días, señor.',
          exampleTranslation: 'Good morning, sir.',
        },
        {
          word: 'Muchas gracias',
          romajiOrPronunciation: 'MOO-chahs GRAH-syahs',
          translation: 'Thank you very much',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Muchas gracias por todo.',
          exampleTranslation: 'Thank you very much for everything.',
        },
      ],
      grammarNotes: [
        {
          title: 'Inverted Punctuation (¡ and ¿)',
          explanation: 'In Spanish, questions and exclamations begin with inverted marks (¿ / ¡) and end with standard (? / !).',
          examples: ['¡Hola!', '¿Cómo estás?'],
        },
      ],
      exercises: [
        {
          id: 'es-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Good morning" in Spanish?',
          options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Adiós'],
          correctAnswer: 'Buenos días',
          explanation: 'Buenos días is used throughout the morning.',
        },
      ],
    },
  ],
  mandarin: [
    {
      id: 'zh-hsk1-01',
      languageId: 'mandarin',
      level: 'HSK 1',
      title: 'First Words & Tones',
      description: 'Master Nǐ hǎo, Xièxie, and the four tones of Mandarin Chinese.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Pronounce Nǐ hǎo with correct 3rd tone inflection and understand basic pleasantries.',
      vocabulary: [
        {
          word: '你好',
          romajiOrPronunciation: 'Nǐ hǎo',
          translation: 'Hello',
          partOfSpeech: 'Greeting',
          exampleSentence: '你好！很高兴认识你。',
          exampleTranslation: 'Hello! Nice to meet you.',
        },
        {
          word: '谢谢',
          romajiOrPronunciation: 'Xièxie',
          translation: 'Thank you',
          partOfSpeech: 'Phrase',
          exampleSentence: '非常谢谢你！',
          exampleTranslation: 'Thank you very much!',
        },
        {
          word: '再见',
          romajiOrPronunciation: 'Zàijiàn',
          translation: 'Goodbye',
          partOfSpeech: 'Phrase',
          exampleSentence: '老师，再见！',
          exampleTranslation: 'Teacher, goodbye!',
        },
      ],
      grammarNotes: [
        {
          title: 'Third Tone Sandhi',
          explanation: 'When two 3rd tones meet (like Nǐ and Hǎo), the first tone changes to a 2nd rising tone in speech.',
          examples: ['你好 (Nǐ hǎo is pronounced Ní hǎo)'],
        },
      ],
      exercises: [
        {
          id: 'zh-q1',
          type: 'multiple_choice',
          prompt: 'What does "你好" (Nǐ hǎo) mean?',
          options: ['Thank you', 'Hello', 'Goodbye', 'Please'],
          correctAnswer: 'Hello',
          explanation: '你好 (Nǐ hǎo) is the universal greeting in Mandarin Chinese.',
        },
      ],
    },
  ],
  russian: [
    {
      id: 'ru-a1-01',
      languageId: 'russian',
      level: 'A1',
      title: 'Greetings & Cyrillic Basics',
      description: 'Learn Privet, Zdravstvuyte, and friendly Russian introductions.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Say hello informally and formally in Russian.',
      vocabulary: [
        {
          word: 'Привет',
          romajiOrPronunciation: 'Pree-vyet',
          translation: 'Hi / Hello (informal)',
          partOfSpeech: 'Greeting',
          exampleSentence: 'Привет, как дела?',
          exampleTranslation: 'Hi, how are things?',
        },
        {
          word: 'Здравствуйте',
          romajiOrPronunciation: 'Zdrast-vooy-tye',
          translation: 'Hello (formal / polite)',
          partOfSpeech: 'Greeting',
          exampleSentence: 'Здравствуйте, приятно познакомиться.',
          exampleTranslation: 'Hello, pleasure to meet you.',
        },
        {
          word: 'Спасибо',
          romajiOrPronunciation: 'Spas-ee-ba',
          translation: 'Thank you',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Большое спасибо!',
          exampleTranslation: 'Thank you very much!',
        },
      ],
      grammarNotes: [
        {
          title: 'Formal vs Informal Greetings in Russian',
          explanation: 'Use "Привет" with friends and family; use "Здравствуйте" with strangers, teachers, and business associates.',
          examples: ['Привет (Friends)', 'Здравствуйте (Formal)'],
        },
      ],
      exercises: [
        {
          id: 'ru-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Thank you" in Russian?',
          options: ['Пожалуйста', 'Спасибо', 'Привет', 'Пока'],
          correctAnswer: 'Спасибо',
          explanation: 'Спасибо (Spasibo) means "Thank you".',
        },
      ],
    },
  ],
  portuguese: [
    {
      id: 'pt-a1-01',
      languageId: 'portuguese',
      level: 'A1',
      title: 'Greetings & Salutations',
      description: 'Learn Olá, Bom dia, and friendly Brazilian and European Portuguese greetings.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Greet people with warm Portuguese courtesy.',
      vocabulary: [
        {
          word: 'Olá',
          romajiOrPronunciation: 'oh-LAH',
          translation: 'Hello / Hi',
          partOfSpeech: 'Greeting',
          exampleSentence: 'Olá, tudo bem?',
          exampleTranslation: 'Hello, is everything good?',
        },
        {
          word: 'Obrigado',
          romajiOrPronunciation: 'oh-bree-GAH-doo',
          translation: 'Thank you (said by males)',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Muito obrigado pela ajuda.',
          exampleTranslation: 'Thank you very much for the help.',
        },
        {
          word: 'Tudo bem',
          romajiOrPronunciation: 'TOO-doo beng',
          translation: 'All good / How are you',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Oi, tudo bem com você?',
          exampleTranslation: 'Hi, is everything well with you?',
        },
      ],
      grammarNotes: [
        {
          title: 'Obrigado vs. Obrigada',
          explanation: 'In Portuguese, the person speaking matches their own gender: males say "Obrigado", females say "Obrigada".',
          examples: ['Obrigado (males)', 'Obrigada (females)'],
        },
      ],
      exercises: [
        {
          id: 'pt-q1',
          type: 'multiple_choice',
          prompt: 'Which phrase means "All good / Everything well" in Brazilian Portuguese?',
          options: ['Tchau', 'Tudo bem', 'Por favor', 'De nada'],
          correctAnswer: 'Tudo bem',
          explanation: 'Tudo bem is the most ubiquitous conversational greeting in Portuguese.',
        },
      ],
    },
  ],
  italian: [
    {
      id: 'it-a1-01',
      languageId: 'italian',
      level: 'A1',
      title: 'Ciao! Saluti & Piacere',
      description: 'Master Ciao, Buongiorno, Grazie mille, and introducing yourself in Italy.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Greet friends and shopkeepers warmly across Italy.',
      vocabulary: [
        {
          word: 'Ciao',
          romajiOrPronunciation: 'CHOW',
          translation: 'Hello / Goodbye (informal)',
          partOfSpeech: 'Greeting',
          exampleSentence: 'Ciao! Come stai?',
          exampleTranslation: 'Hi! How are you?',
        },
        {
          word: 'Buongiorno',
          romajiOrPronunciation: 'bwohn-JOHR-noh',
          translation: 'Good morning / Good day',
          partOfSpeech: 'Greeting',
          exampleSentence: 'Buongiorno a tutti!',
          exampleTranslation: 'Good day to everyone!',
        },
        {
          word: 'Grazie mille',
          romajiOrPronunciation: 'GRAHT-syeh MEEL-leh',
          translation: 'A thousand thanks / Thank you so much',
          partOfSpeech: 'Phrase',
          exampleSentence: 'Grazie mille per il caffè.',
          exampleTranslation: 'A thousand thanks for the coffee.',
        },
      ],
      grammarNotes: [
        {
          title: 'The Versatility of Ciao',
          explanation: '"Ciao" is used both when arriving (Hello) and when departing (Bye) with friends and peers.',
          examples: ['Ciao Marco! (Arrival)', 'Ciao a presto! (Departure)'],
        },
      ],
      exercises: [
        {
          id: 'it-q1',
          type: 'multiple_choice',
          prompt: 'What does "Grazie mille" translate to literally?',
          options: ['A hundred thanks', 'A thousand thanks', 'Good evening', 'See you soon'],
          correctAnswer: 'A thousand thanks',
          explanation: 'Mille means thousand, making "grazie mille" an enthusiastic thank you.',
        },
      ],
    },
  ],
  arabic: [
    {
      id: 'ar-a1-01',
      languageId: 'arabic',
      level: 'A1',
      title: 'Greetings & Marhaban',
      description: 'Learn As-salamu alaykum, Marhaban, and warm Arabic welcomes.',
      category: 'Basics & Greetings',
      estimatedMinutes: 5,
      xpReward: 25,
      objective: 'Greet speakers across the Arab world with respect and proper pronunciation.',
      vocabulary: [
        {
          word: 'مرحباً',
          romajiOrPronunciation: 'Marhaban',
          translation: 'Hello / Welcome',
          partOfSpeech: 'Greeting',
          exampleSentence: 'مرحباً، كيف حالك؟',
          exampleTranslation: 'Hello, how are you?',
        },
        {
          word: 'السلام عليكم',
          romajiOrPronunciation: 'As-salamu alaykum',
          translation: 'Peace be upon you',
          partOfSpeech: 'Greeting',
          exampleSentence: 'السلام عليكم ورحمة الله',
          exampleTranslation: 'Peace be upon you and the mercy of God',
        },
        {
          word: 'شكراً',
          romajiOrPronunciation: 'Shukran',
          translation: 'Thank you',
          partOfSpeech: 'Phrase',
          exampleSentence: 'شكراً جزيلاً',
          exampleTranslation: 'Thank you very much',
        },
      ],
      grammarNotes: [
        {
          title: 'Right-to-Left Arabic Script',
          explanation: 'Arabic is written and read from right to left, with cursive connected letters.',
          examples: ['مرحباً (Marhaban)', 'شكراً (Shukran)'],
        },
      ],
      exercises: [
        {
          id: 'ar-q1',
          type: 'multiple_choice',
          prompt: 'How do you say "Thank you" in Arabic?',
          options: ['مرحباً (Marhaban)', 'شكراً (Shukran)', 'نعم (Na\'am)', 'لا (La)'],
          correctAnswer: 'شكراً (Shukran)',
          explanation: 'شكراً (Shukran) is the standard word for thank you across the Arab world.',
        },
      ],
    },
  ],
};

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'streak' | 'xp' | 'lessons' | 'speaking' | 'polyglot';
  condition: (user: any) => boolean;
}

export const ACHIEVEMENTS: AchievementBadge[] = [
  {
    id: 'first_step',
    title: 'First Step',
    description: 'Completed your very first lesson on Lingora',
    icon: '🌱',
    category: 'lessons',
    condition: (u) => (u.completedLessons?.length || 0) >= 1,
  },
  {
    id: 'fire_starter',
    title: 'Flame Keeper',
    description: 'Maintained a 3-day learning streak',
    icon: '🔥',
    category: 'streak',
    condition: (u) => (u.streak || 0) >= 3,
  },
  {
    id: 'xp_champion',
    title: 'Century Club',
    description: 'Earned 100+ Total XP',
    icon: '⚡',
    category: 'xp',
    condition: (u) => (u.totalXp || 0) >= 100,
  },
  {
    id: 'sharp_ear',
    title: 'Audio Master',
    description: 'Completed 5 listening or speaking exercises',
    icon: '🎧',
    category: 'speaking',
    condition: (u) => (u.totalXp || 0) >= 60,
  },
  {
    id: 'polyglot',
    title: 'Global Explorer',
    description: 'Explored courses across the 10 supported world languages',
    icon: '🌍',
    category: 'polyglot',
    condition: (u) => (u.unlockedLanguages?.length || 1) >= 2,
  },
];
