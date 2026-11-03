// Lingora Global Structured Curriculum Dataset
// Professional CEFR, JLPT, TOPIK & HSK academy-grade syllabus architecture
// Designed as an accessible, high-quality alternative to expensive live language classes.

export const SUPPORTED_LANGUAGES = [
  {
    "id": "french",
    "name": "French",
    "nativeName": "Français",
    "flag": "🇫🇷",
    "countryCode": "fr",
    "speechCode": "fr-FR",
    "description": "The global language of romance, culture, diplomacy, and cuisine.",
    "accentColor": "#1E3A8A",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "german",
    "name": "German",
    "nativeName": "Deutsch",
    "flag": "🇩🇪",
    "countryCode": "de",
    "speechCode": "de-DE",
    "description": "The powerhouse European language of engineering, philosophy, and innovation.",
    "accentColor": "#3B82F6",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "japanese",
    "name": "Japanese",
    "nativeName": "日本語",
    "flag": "🇯🇵",
    "countryCode": "jp",
    "speechCode": "ja-JP",
    "description": "Master Japanese characters, etiquette, anime, and high-tech culture.",
    "accentColor": "#10B981",
    "pathwayType": "JLPT",
    "availableLevels": [
      "JLPT N5",
      "JLPT N4",
      "JLPT N3",
      "JLPT N2",
      "JLPT N1"
    ]
  },
  {
    "id": "korean",
    "name": "Korean",
    "nativeName": "한국어",
    "flag": "🇰🇷",
    "countryCode": "kr",
    "speechCode": "ko-KR",
    "description": "Learn Hangul, K-Culture, entertainment, and modern Seoul lifestyle.",
    "accentColor": "#8B5CF6",
    "pathwayType": "TOPIK",
    "availableLevels": [
      "TOPIK I (L1)",
      "TOPIK I (L2)",
      "TOPIK II (L3)",
      "TOPIK II (L4)",
      "TOPIK II (L5-6)"
    ]
  },
  {
    "id": "spanish",
    "name": "Spanish",
    "nativeName": "Español",
    "flag": "🇪🇸",
    "countryCode": "es",
    "speechCode": "es-ES",
    "description": "Spoken across 20+ countries from Madrid to Latin America.",
    "accentColor": "#F59E0B",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "mandarin",
    "name": "Mandarin Chinese",
    "nativeName": "中文 (普通话)",
    "flag": "🇨🇳",
    "countryCode": "cn",
    "speechCode": "zh-CN",
    "description": "Standard Chinese tones, Pinyin, characters, and global business.",
    "accentColor": "#EF4444",
    "pathwayType": "HSK",
    "availableLevels": [
      "HSK 1",
      "HSK 2",
      "HSK 3",
      "HSK 4",
      "HSK 5",
      "HSK 6"
    ]
  },
  {
    "id": "russian",
    "name": "Russian",
    "nativeName": "Русский",
    "flag": "🇷🇺",
    "countryCode": "ru",
    "speechCode": "ru-RU",
    "description": "Learn the Cyrillic alphabet, rich classical literature, and Eurasia.",
    "accentColor": "#0284C7",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "portuguese",
    "name": "Portuguese",
    "nativeName": "Português",
    "flag": "🇧🇷",
    "countryCode": "br",
    "speechCode": "pt-BR",
    "description": "Warm, musical language spoken across Brazil, Portugal, and Africa.",
    "accentColor": "#10B981",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "italian",
    "name": "Italian",
    "nativeName": "Italiano",
    "flag": "🇮🇹",
    "countryCode": "it",
    "speechCode": "it-IT",
    "description": "The expressive language of art, music, architecture, and gastronomy.",
    "accentColor": "#059669",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  },
  {
    "id": "arabic",
    "name": "Arabic",
    "nativeName": "العربية",
    "flag": "🇸🇦",
    "countryCode": "sa",
    "speechCode": "ar-SA",
    "description": "Modern Standard Arabic script, calligraphy, and Middle Eastern culture.",
    "accentColor": "#D97706",
    "pathwayType": "CEFR",
    "availableLevels": [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2"
    ]
  }
];

export const STUDY_MATERIALS = [
  {
    "id": "mat-fr-a1",
    "title": "French A1 Comprehensive Grammar & Dialogue Handbook",
    "languageId": "french",
    "level": "A1",
    "description": "50-page printable PDF guide with color conjugation tables, Paris café dialogues, and audio companion scripts.",
    "priceInInr": 49,
    "pagesCount": 52,
    "previewUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: The French Alphabet & Nasal Vowel Sounds",
      "Chapter 2: Essential Greetings & Tu vs. Vous Etiquette",
      "Chapter 3: Definite & Indefinite Articles (Le, La, Les, Un, Une)",
      "Chapter 4: At the Boulangerie & Ordering Food",
      "Chapter 5: Present Tense Conjugation for Regular -ER Verbs"
    ],
    "featured": true
  },
  {
    "id": "mat-de-a1",
    "title": "German A1 Fast-Track Cheat Sheet & Vocabulary Vault",
    "languageId": "german",
    "level": "A1",
    "description": "Master German noun genders (Der, Die, Das), Akkusativ case, numbers, and Berlin travel survival phrases.",
    "priceInInr": 49,
    "pagesCount": 46,
    "previewUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: German Pronunciation & The Umlauts (ä, ö, ü, ß)",
      "Chapter 2: Gender of Nouns & Colors Cheat Sheet",
      "Chapter 3: Numbers 1 to 100 & Telling Time",
      "Chapter 4: Ordering at Cafés & Train Travel in Germany"
    ],
    "featured": true
  },
  {
    "id": "mat-ja-n5",
    "title": "Japanese JLPT N5 Complete Kanji & Kana Workbook",
    "languageId": "japanese",
    "level": "JLPT N5",
    "description": "All 103 JLPT N5 Kanji stroke orders, Hiragana/Katakana charts, key particles (は, が, を, に), and practice sheets.",
    "priceInInr": 49,
    "pagesCount": 68,
    "previewUrl": "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: Hiragana & Katakana Stroke Order Master Charts",
      "Chapter 2: 103 Essential JLPT N5 Kanji with Onyomi & Kunyomi",
      "Chapter 3: Japanese Particles Explained Simply (wa, ga, o, ni, de)",
      "Chapter 4: Konbini & Restaurant Phrases in Tokyo"
    ],
    "featured": true
  },
  {
    "id": "mat-ko-t1",
    "title": "Korean Hangul & TOPIK I Essential Sentence Builder",
    "languageId": "korean",
    "level": "TOPIK I (L1)",
    "description": "Learn to read Hangul in 60 minutes, basic honorifics, sentence structure (SOV), and K-Drama everyday vocabulary.",
    "priceInInr": 49,
    "pagesCount": 44,
    "previewUrl": "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: Reading Hangul Consonants, Vowels & Batchim",
      "Chapter 2: Subject, Object & Verb (SOV) Sentence Construction",
      "Chapter 3: Polite Endings (-요 and -습니다)",
      "Chapter 4: Ordering Korean Street Food & Coffee"
    ],
    "featured": true
  },
  {
    "id": "mat-es-a1",
    "title": "Spanish A1 Practical Conversational Guidebook",
    "languageId": "spanish",
    "level": "A1",
    "description": "Clear verb charts for Ser vs. Estar, basic everyday conversations, hotel reservations, and Spanish phonetics.",
    "priceInInr": 49,
    "pagesCount": 48,
    "previewUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: Spanish Alphabet & Rolling Your Rs",
      "Chapter 2: Ser vs. Estar: When to Use Which",
      "Chapter 3: Essential Travel Phrases in Madrid & Mexico",
      "Chapter 4: Basic Food & Shopping Expressions"
    ],
    "featured": true
  },
  {
    "id": "mat-zh-hsk1",
    "title": "Mandarin HSK 1 Pinyin & Characters Survival Booklet",
    "languageId": "mandarin",
    "level": "HSK 1",
    "description": "Pinyin four-tone system training, 150 official HSK 1 vocabulary words with Hanzi stroke breakdown and sample dialogues.",
    "priceInInr": 49,
    "pagesCount": 56,
    "previewUrl": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: The 4 Tones of Mandarin & Pinyin Mastery",
      "Chapter 2: 150 Core HSK 1 Vocabulary Words",
      "Chapter 3: Basic Measure Words (个 gè and more)",
      "Chapter 4: Introducing Yourself in China"
    ],
    "featured": true
  },
  {
    "id": "mat-ru-a1",
    "title": "Russian A1 Cyrillic & Everyday Conversations Guide",
    "languageId": "russian",
    "level": "A1",
    "description": "Master the 33 Cyrillic letters, stress marks, essential greetings, and navigating Russian cities without intimidation.",
    "priceInInr": 49,
    "pagesCount": 50,
    "previewUrl": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: The Cyrillic Alphabet in 3 Easy Steps",
      "Chapter 2: Russian Greetings & Polite Forms",
      "Chapter 3: Numbers, Shopping & Moscow Metro Navigation",
      "Chapter 4: Noun Genders & Basic Question Words"
    ]
  },
  {
    "id": "mat-pt-a1",
    "title": "Portuguese A1 Real-World Conversation & Grammar Handbook",
    "languageId": "portuguese",
    "level": "A1",
    "description": "Brazilian & European Portuguese essentials, pronunciation of nasal vowels, café dialogues, and travel vocabulary.",
    "priceInInr": 49,
    "pagesCount": 46,
    "previewUrl": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: Portuguese Pronunciation & Nasal Sounds (ã, õ)",
      "Chapter 2: Everyday Greetings in Lisbon & Rio",
      "Chapter 3: Ordering Coffee, Pastéis de Nata & Brazilian Dishes",
      "Chapter 4: Regular -AR Verbs in the Present Tense"
    ]
  },
  {
    "id": "mat-it-a1",
    "title": "Italian A1 Espresso & Gastronomy Language Companion",
    "languageId": "italian",
    "level": "A1",
    "description": "The definitive guide to Italian pronunciation, double consonants, ordering at authentic trattorias, and travel Italian.",
    "priceInInr": 49,
    "pagesCount": 48,
    "previewUrl": "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: The Musical Rhythm & Vowels of Italian",
      "Chapter 2: Essential Greetings & Piacere di conoscerti",
      "Chapter 3: Italian Café Culture: Espresso, Cornetto & Trattoria",
      "Chapter 4: Essential Regular Verbs: Parlare, Mangiare, Vivere"
    ]
  },
  {
    "id": "mat-ar-a1",
    "title": "Arabic A1 Script, Calligraphy & Everyday Dialogue Guide",
    "languageId": "arabic",
    "level": "A1",
    "description": "Learn the 28 Arabic letters in initial, medial, and final positions, vowel marks (Harakat), and Middle Eastern courtesies.",
    "priceInInr": 49,
    "pagesCount": 54,
    "previewUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80",
    "chapters": [
      "Chapter 1: The Arabic Alphabet & Connecting Rules",
      "Chapter 2: Essential Greetings: Marhaban & As-salamu alaykum",
      "Chapter 3: Numbers, Shopping at the Souq & Coffee Culture",
      "Chapter 4: Respectful Titles & Courtesies in the Arab World"
    ]
  }
];

export const CURRICULUM = {
  "french": [
    {
      "id": "fr-u1-01",
      "languageId": "french",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Master French nasal vowel sounds, basic greetings, and polite etiquette.",
      "title": "Greetings & French Etiquette",
      "description": "Learn to say hello, introduce yourself, and distinguish formal vs informal speech in Paris.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Politely greet people at different times of day and introduce yourself with 'Je m'appelle'.",
      "vocabulary": [
        {
          "word": "Bonjour",
          "romajiOrPronunciation": "bohn-zhoor",
          "translation": "Hello / Good day",
          "partOfSpeech": "Interjection",
          "exampleSentence": "Bonjour, comment allez-vous ?",
          "exampleTranslation": "Hello, how are you?"
        },
        {
          "word": "Bonsoir",
          "romajiOrPronunciation": "bohn-swahr",
          "translation": "Good evening",
          "partOfSpeech": "Interjection",
          "exampleSentence": "Bonsoir Madame, bienvenue !",
          "exampleTranslation": "Good evening Madame, welcome!"
        },
        {
          "word": "Merci beaucoup",
          "romajiOrPronunciation": "mair-see boh-koo",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Merci beaucoup pour votre aide.",
          "exampleTranslation": "Thank you very much for your help."
        },
        {
          "word": "Au revoir",
          "romajiOrPronunciation": "oh ruh-vwahr",
          "translation": "Goodbye",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Au revoir et à bientôt !",
          "exampleTranslation": "Goodbye and see you soon!"
        },
        {
          "word": "S'il vous plaît",
          "romajiOrPronunciation": "seel voo pleh",
          "translation": "Please (formal)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Un café, s'il vous plaît.",
          "exampleTranslation": "A coffee, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Tu vs. Vous in French",
          "explanation": "French uses 'tu' for close friends/family, and 'vous' for strangers, professionals, and polite distance.",
          "examples": [
            "Comment vas-tu ? (Informal)",
            "Comment allez-vous ? (Polite/Formal)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Pierre",
          "text": "Bonjour Madame, comment allez-vous ?",
          "translation": "Hello Madame, how are you?",
          "romajiOrPronunciation": "Bohn-zhoor mah-dahm, koh-mahn tah-lay voo ?"
        },
        {
          "speaker": "Claire",
          "text": "Très bien, merci ! Et vous ?",
          "translation": "Very well, thank you! And you?",
          "romajiOrPronunciation": "Treh byan, mair-see ! Ay voo ?"
        },
        {
          "speaker": "Pierre",
          "text": "Je vais très bien, bonne journée !",
          "translation": "I'm doing very well, have a good day!",
          "romajiOrPronunciation": "Zhuh vay treh byan, buhn zhoor-nay !"
        }
      ],
      "exercises": [
        {
          "id": "fr1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Hello' or 'Good day' in French?",
          "options": [
            "Au revoir",
            "Bonjour",
            "Bonsoir",
            "Merci"
          ],
          "correctAnswer": "Bonjour",
          "explanation": "'Bonjour' literally means 'good day' and is the standard greeting."
        },
        {
          "id": "fr1-q2",
          "type": "arrange_order",
          "prompt": "Arrange the words to say: 'A coffee, please.'",
          "wordBank": [
            "s'il",
            "vous",
            "Un",
            "café,",
            "plaît."
          ],
          "correctAnswer": [
            "Un",
            "café,",
            "s'il",
            "vous",
            "plaît."
          ],
          "explanation": "In French, polite orders end with 's'il vous plaît'."
        },
        {
          "id": "fr1-q3",
          "type": "match_pairs",
          "prompt": "Match each French greeting with its meaning:",
          "correctAnswer": [
            {
              "left": "Bonjour",
              "right": "Hello"
            },
            {
              "left": "Merci",
              "right": "Thank you"
            },
            {
              "left": "Au revoir",
              "right": "Goodbye"
            },
            {
              "left": "Bonsoir",
              "right": "Good evening"
            }
          ],
          "explanation": "Great job matching core French greetings!"
        },
        {
          "id": "fr1-q4",
          "type": "listen_identify",
          "prompt": "Listen to the audio and select what you hear:",
          "audioText": "Merci beaucoup",
          "options": [
            "Bonjour beaucoup",
            "Merci beaucoup",
            "Au revoir",
            "Bonne nuit"
          ],
          "correctAnswer": "Merci beaucoup",
          "explanation": "'Merci beaucoup' means 'Thank you very much'."
        },
        {
          "id": "fr1-q5",
          "type": "speaking",
          "prompt": "Pronounce the polite greeting aloud:",
          "speechTarget": "Bonjour comment allez vous",
          "audioText": "Bonjour, comment allez-vous ?",
          "correctAnswer": "Bonjour, comment allez-vous ?",
          "explanation": "Link the final 't' in 'comment' to 'allez-vous' smoothly."
        }
      ]
    },
    {
      "id": "fr-u1-02",
      "languageId": "french",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Master French nasal vowel sounds, basic greetings, and polite etiquette.",
      "title": "Alphabet, Accents & Numbers (1–20)",
      "description": "Understand acute (é), grave (è), circumflex (ê), and count effortlessly.",
      "category": "Phonetics & Numbers",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Pronounce French accented vowels and count from 1 to 20.",
      "vocabulary": [
        {
          "word": "Un, Deux, Trois",
          "romajiOrPronunciation": "uhn, duh, trwah",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Un café et deux croissants.",
          "exampleTranslation": "One coffee and two croissants."
        },
        {
          "word": "Quatre, Cinq",
          "romajiOrPronunciation": "kahtr, sank",
          "translation": "Four, Five",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Il y a cinq personnes.",
          "exampleTranslation": "There are five people."
        },
        {
          "word": "Dix, Vingt",
          "romajiOrPronunciation": "dees, van",
          "translation": "Ten, Twenty",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Ça coûte dix euros.",
          "exampleTranslation": "That costs ten euros."
        }
      ],
      "grammarNotes": [
        {
          "title": "French Accents Matter",
          "explanation": "Accents change vowel sounds: é (closed sound, as in 'café'), è/ê (open sound, as in 'fête').",
          "examples": [
            "café (coffee)",
            "frère (brother)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Client",
          "text": "Combien coûte cette carte postale ?",
          "translation": "How much does this postcard cost?",
          "romajiOrPronunciation": "Kohm-byan koot set kart pohs-tahl ?"
        },
        {
          "speaker": "Vendeur",
          "text": "Elle coûte trois euros, monsieur.",
          "translation": "It costs three euros, sir.",
          "romajiOrPronunciation": "El koot trwah z-uh-roh, muh-syuh."
        }
      ],
      "exercises": [
        {
          "id": "fr2-q1",
          "type": "multiple_choice",
          "prompt": "What number is 'Trois' in French?",
          "options": [
            "One",
            "Two",
            "Three",
            "Four"
          ],
          "correctAnswer": "Three",
          "explanation": "'Trois' equals 3."
        },
        {
          "id": "fr2-q2",
          "type": "fill_blank",
          "prompt": "Fill in the blank: 'Un café et ___ croissants (2).'",
          "options": [
            "un",
            "deux",
            "trois",
            "dix"
          ],
          "correctAnswer": "deux",
          "explanation": "'Deux' means two."
        },
        {
          "id": "fr2-q3",
          "type": "match_pairs",
          "prompt": "Match French numbers to digits:",
          "correctAnswer": [
            {
              "left": "Un",
              "right": "1"
            },
            {
              "left": "Deux",
              "right": "2"
            },
            {
              "left": "Cinq",
              "right": "5"
            },
            {
              "left": "Dix",
              "right": "10"
            }
          ],
          "explanation": "Perfect number recognition!"
        }
      ]
    },
    {
      "id": "fr-u2-03",
      "languageId": "french",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Navigation",
      "unitDescription": "Order in Parisian boulangeries, bistros, and navigate public transit.",
      "title": "At the French Boulangerie & Café",
      "description": "Order croissants, baguettes, and espresso with authentic local phrasing.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Confidently order baked goods and drinks using 'Je voudrais...'.",
      "vocabulary": [
        {
          "word": "Une baguette",
          "romajiOrPronunciation": "oon bah-get",
          "translation": "A baguette",
          "partOfSpeech": "Noun (f)",
          "exampleSentence": "Une baguette tradition, s'il vous plaît.",
          "exampleTranslation": "A traditional baguette, please."
        },
        {
          "word": "Un croissant",
          "romajiOrPronunciation": "uhn krwah-sahn",
          "translation": "A croissant",
          "partOfSpeech": "Noun (m)",
          "exampleSentence": "Je voudrais un croissant au beurre.",
          "exampleTranslation": "I would like a butter croissant."
        },
        {
          "word": "L'addition",
          "romajiOrPronunciation": "lah-dee-syohn",
          "translation": "The bill / check",
          "partOfSpeech": "Noun (f)",
          "exampleSentence": "L'addition, s'il vous plaît.",
          "exampleTranslation": "The check, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Je voudrais (I would like)",
          "explanation": "Use 'Je voudrais' rather than 'Je veux' (I want) when ordering to be polite and natural.",
          "examples": [
            "Je voudrais un thé. (I would like a tea.)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Boulangère",
          "text": "Bonjour ! Et avec ceci ?",
          "translation": "Hello! And with that?",
          "romajiOrPronunciation": "Bohn-zhoor ! Ay ah-vek suh-see ?"
        },
        {
          "speaker": "Client",
          "text": "Je voudrais deux baguettes et un croissant, s'il vous plaît.",
          "translation": "I would like two baguettes and a croissant, please.",
          "romajiOrPronunciation": "Zhuh voo-dreh duh bah-get ay uhn krwah-sahn..."
        },
        {
          "speaker": "Boulangère",
          "text": "Très bien, ça fera quatre euros.",
          "translation": "Very good, that will be four euros.",
          "romajiOrPronunciation": "Treh byan, sah fuh-rah kahtr uh-roh."
        }
      ],
      "exercises": [
        {
          "id": "fr3-q1",
          "type": "multiple_choice",
          "prompt": "What is the polite way to ask for an item in a French café?",
          "options": [
            "Je veux",
            "Je voudrais",
            "Donne-moi",
            "Prends"
          ],
          "correctAnswer": "Je voudrais",
          "explanation": "'Je voudrais' (conditional of vouloir) means 'I would like'."
        },
        {
          "id": "fr3-q2",
          "type": "fill_blank",
          "prompt": "Fill in the blank: 'L'___, s'il vous plaît (The bill).'",
          "options": [
            "addition",
            "baguette",
            "café",
            "croissant"
          ],
          "correctAnswer": "addition",
          "explanation": "'L'addition' is the bill in a restaurant or café."
        }
      ]
    },
    {
      "id": "fr-u2-04",
      "languageId": "french",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Navigation",
      "unitDescription": "Order in Parisian boulangeries, bistros, and navigate public transit.",
      "title": "Paris Metro & Asking Directions",
      "description": "Find your way to the Eiffel Tower or Louvre using key directional terms.",
      "category": "Travel & Transit",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Ask where a station or landmark is and understand left, right, and straight ahead.",
      "vocabulary": [
        {
          "word": "Où est... ?",
          "romajiOrPronunciation": "oo eh",
          "translation": "Where is...?",
          "partOfSpeech": "Question",
          "exampleSentence": "Où est la station de métro ?",
          "exampleTranslation": "Where is the metro station?"
        },
        {
          "word": "À gauche",
          "romajiOrPronunciation": "ah gohsh",
          "translation": "To the left",
          "partOfSpeech": "Adverb",
          "exampleSentence": "Tournez à gauche après la banque.",
          "exampleTranslation": "Turn left after the bank."
        },
        {
          "word": "À droite",
          "romajiOrPronunciation": "ah drwaht",
          "translation": "To the right",
          "partOfSpeech": "Adverb",
          "exampleSentence": "Le musée est à droite.",
          "exampleTranslation": "The museum is on the right."
        },
        {
          "word": "Tout droit",
          "romajiOrPronunciation": "too drwah",
          "translation": "Straight ahead",
          "partOfSpeech": "Adverb",
          "exampleSentence": "Continuez tout droit.",
          "exampleTranslation": "Continue straight ahead."
        }
      ],
      "grammarNotes": [
        {
          "title": "Où est vs. Où sont",
          "explanation": "Use 'Où est' for singular objects ('Où est la gare ?') and 'Où sont' for plurals ('Où sont les toilettes ?').",
          "examples": [
            "Où est le métro ?",
            "Où sont les bus ?"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Touriste",
          "text": "Pardon monsieur, où est la Tour Eiffel ?",
          "translation": "Excuse me sir, where is the Eiffel Tower?",
          "romajiOrPronunciation": "Par-dohn muh-syuh, oo eh lah toor ay-fel ?"
        },
        {
          "speaker": "Parisien",
          "text": "Allez tout droit, puis tournez à gauche au feu.",
          "translation": "Go straight ahead, then turn left at the traffic light.",
          "romajiOrPronunciation": "Ah-lay too drwah, pwee toor-nay ah gohsh oh fuh."
        }
      ],
      "exercises": [
        {
          "id": "fr4-q1",
          "type": "multiple_choice",
          "prompt": "What does 'Tout droit' mean?",
          "options": [
            "To the left",
            "To the right",
            "Straight ahead",
            "Behind"
          ],
          "correctAnswer": "Straight ahead",
          "explanation": "'Tout droit' means straight ahead."
        },
        {
          "id": "fr4-q2",
          "type": "arrange_order",
          "prompt": "Arrange: 'Where is the metro station?'",
          "wordBank": [
            "Où",
            "la",
            "est",
            "station",
            "de",
            "métro ?"
          ],
          "correctAnswer": [
            "Où",
            "est",
            "la",
            "station",
            "de",
            "métro ?"
          ],
          "explanation": "Word order: Question word + Verb + Subject."
        }
      ]
    },
    {
      "id": "fr-u3-05",
      "languageId": "french",
      "level": "A2",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Social & Cultural Fluency",
      "unitDescription": "Discuss personal backgrounds, family, leisure activities, and daily habits.",
      "title": "Family, Friends & Introductions",
      "description": "Describe your family members, professions, and where they live.",
      "category": "Social & Relationships",
      "estimatedMinutes": 7,
      "xpReward": 35,
      "objective": "Introduce your family and use possessive adjectives (mon, ma, mes).",
      "vocabulary": [
        {
          "word": "La famille",
          "romajiOrPronunciation": "lah fah-mee",
          "translation": "Family",
          "partOfSpeech": "Noun (f)",
          "exampleSentence": "J'aime ma famille.",
          "exampleTranslation": "I love my family."
        },
        {
          "word": "Mon père / Ma mère",
          "romajiOrPronunciation": "mohn pair / mah mair",
          "translation": "My father / My mother",
          "partOfSpeech": "Noun",
          "exampleSentence": "Mon père est ingénieur.",
          "exampleTranslation": "My father is an engineer."
        },
        {
          "word": "Mon frère / Ma sœur",
          "romajiOrPronunciation": "mohn frair / mah suhr",
          "translation": "My brother / My sister",
          "partOfSpeech": "Noun",
          "exampleSentence": "Ma sœur habite à Lyon.",
          "exampleTranslation": "My sister lives in Lyon."
        }
      ],
      "grammarNotes": [
        {
          "title": "Possessive Adjectives: Mon, Ma, Mes",
          "explanation": "Possessives agree with the gender and number of the noun that follows: Mon frère (m), Ma sœur (f), Mes parents (pl).",
          "examples": [
            "Mon ami (m)",
            "Ma voiture (f)",
            "Mes livres (pl)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Sophie",
          "text": "Tu as des frères et sœurs ?",
          "translation": "Do you have brothers and sisters?",
          "romajiOrPronunciation": "Too ah day frair ay suhr ?"
        },
        {
          "speaker": "Lucas",
          "text": "Oui, j'ai un frère et une sœur cadette.",
          "translation": "Yes, I have a brother and a younger sister.",
          "romajiOrPronunciation": "Wee, zhay uhn frair ay oon suhr kah-det."
        }
      ],
      "exercises": [
        {
          "id": "fr5-q1",
          "type": "multiple_choice",
          "prompt": "Which possessive is used with a feminine singular noun like 'mère'?",
          "options": [
            "Mon",
            "Ma",
            "Mes",
            "Son"
          ],
          "correctAnswer": "Ma",
          "explanation": "'Ma' is used for feminine singular nouns starting with a consonant."
        }
      ]
    },
    {
      "id": "fr-u4-06",
      "languageId": "french",
      "level": "B1",
      "unitNumber": 4,
      "unitTitle": "Unit 4: Travel & Intermediate Communication",
      "unitDescription": "Hotel reservations, handling travel mishaps, and storytelling in past tense.",
      "title": "Passé Composé & Storytelling",
      "description": "Express what you did yesterday, last weekend, or during your summer holidays.",
      "category": "Past Tense & Narrative",
      "estimatedMinutes": 8,
      "xpReward": 40,
      "objective": "Form the Passé Composé using 'avoir' and 'être' with regular past participles.",
      "vocabulary": [
        {
          "word": "Hier",
          "romajiOrPronunciation": "yehr",
          "translation": "Yesterday",
          "partOfSpeech": "Adverb",
          "exampleSentence": "Hier, j'ai visité le musée d'Orsay.",
          "exampleTranslation": "Yesterday, I visited the Musée d'Orsay."
        },
        {
          "word": "J'ai mangé",
          "romajiOrPronunciation": "zhay mahn-zhay",
          "translation": "I ate / I have eaten",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "J'ai mangé dans un bon bistrot.",
          "exampleTranslation": "I ate in a good bistro."
        },
        {
          "word": "Je suis allé(e)",
          "romajiOrPronunciation": "zhuh swee zah-lay",
          "translation": "I went",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "Je suis allé à Paris en train.",
          "exampleTranslation": "I went to Paris by train."
        }
      ],
      "grammarNotes": [
        {
          "title": "Auxiliary Verbs: Avoir vs. Être",
          "explanation": "Most verbs form the passé composé with 'avoir' (J'ai parlé). Movement and reflexive verbs take 'être' (Je suis allé, je me suis réveillé).",
          "examples": [
            "J'ai voyagé (Avoir)",
            "Je suis arrivé (Être)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Marc",
          "text": "Qu'est-ce que tu as fait ce week-end ?",
          "translation": "What did you do this weekend?",
          "romajiOrPronunciation": "Kes-kuh too ah fay suh week-end ?"
        },
        {
          "speaker": "Émilie",
          "text": "J'ai visité Versailles et j'ai adoré les jardins !",
          "translation": "I visited Versailles and I loved the gardens!",
          "romajiOrPronunciation": "Zhay vee-zee-tay Vair-sah-yuh ay zhay ah-doh-ray lay zhar-dan !"
        }
      ],
      "exercises": [
        {
          "id": "fr6-q1",
          "type": "multiple_choice",
          "prompt": "Complete: 'Hier soir, j'___ mangé au restaurant.'",
          "options": [
            "ai",
            "suis",
            "es",
            "a"
          ],
          "correctAnswer": "ai",
          "explanation": "Manger takes 'avoir': j'ai mangé."
        }
      ]
    }
  ],
  "german": [
    {
      "id": "de-u1-01",
      "languageId": "german",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Pronunciation of umlauts, guttural sounds, and essential Berlin greetings.",
      "title": "Begrüßung & Kennenlernen",
      "description": "Say hello, introduce yourself, and state where you come from in Germany.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Introduce yourself using 'Ich heiße...' and ask 'Wie geht es Ihnen?'.",
      "vocabulary": [
        {
          "word": "Guten Tag",
          "romajiOrPronunciation": "goo-ten tahk",
          "translation": "Hello / Good day",
          "partOfSpeech": "Interjection",
          "exampleSentence": "Guten Tag, wie heißen Sie?",
          "exampleTranslation": "Good day, what is your name?"
        },
        {
          "word": "Danke schön",
          "romajiOrPronunciation": "dahn-kuh shurn",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Vielen Dank für Ihre Hilfe.",
          "exampleTranslation": "Many thanks for your help."
        },
        {
          "word": "Auf Wiedersehen",
          "romajiOrPronunciation": "owf vee-der-zay-en",
          "translation": "Goodbye (formal)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Auf Wiedersehen und schönen Tag!",
          "exampleTranslation": "Goodbye and have a nice day!"
        },
        {
          "word": "Bitte",
          "romajiOrPronunciation": "bit-tuh",
          "translation": "Please / You are welcome",
          "partOfSpeech": "Interjection",
          "exampleSentence": "Ein Wasser, bitte.",
          "exampleTranslation": "A water, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Sie vs. du in German",
          "explanation": "Capitalized 'Sie' is the formal 'you' for adults and strangers. 'du' is for friends and kids.",
          "examples": [
            "Wie heißen Sie? (Formal)",
            "Wie heißt du? (Informal)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Herr Müller",
          "text": "Guten Tag! Ich heiße Thomas Müller.",
          "translation": "Good day! My name is Thomas Müller.",
          "romajiOrPronunciation": "Goo-ten tahk! Ikh hy-suh Toh-mas Mool-ler."
        },
        {
          "speaker": "Anna",
          "text": "Freut mich! Ich bin Anna aus Berlin.",
          "translation": "Nice to meet you! I am Anna from Berlin.",
          "romajiOrPronunciation": "Froit mikh! Ikh bin Ah-nah ows Bair-leen."
        }
      ],
      "exercises": [
        {
          "id": "de1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Goodbye' formally in German?",
          "options": [
            "Guten Tag",
            "Auf Wiedersehen",
            "Tschüss",
            "Danke"
          ],
          "correctAnswer": "Auf Wiedersehen",
          "explanation": "'Auf Wiedersehen' is the standard polite goodbye."
        },
        {
          "id": "de1-q2",
          "type": "arrange_order",
          "prompt": "Arrange: 'A water, please.'",
          "wordBank": [
            "bitte.",
            "Ein",
            "Wasser,"
          ],
          "correctAnswer": [
            "Ein",
            "Wasser,",
            "bitte."
          ],
          "explanation": "In German, 'bitte' politely follows the order."
        }
      ]
    },
    {
      "id": "de-u1-02",
      "languageId": "german",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Pronunciation of umlauts, guttural sounds, and essential Berlin greetings.",
      "title": "Alphabet, Umlauts (ä, ö, ü) & Numbers",
      "description": "Master German sounds, the Eszett (ß), and numbers 1 to 100.",
      "category": "Phonetics & Numbers",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Pronounce German umlauts and count from 1 to 100.",
      "vocabulary": [
        {
          "word": "Eins, Zwei, Drei",
          "romajiOrPronunciation": "eyns, tsvy, dry",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Zwei Kaffee, bitte.",
          "exampleTranslation": "Two coffees, please."
        },
        {
          "word": "Zehn, Zwanzig",
          "romajiOrPronunciation": "tsehn, tsvahn-tsikh",
          "translation": "Ten, Twenty",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Das Zimmer kostet zwanzig Euro.",
          "exampleTranslation": "The room costs twenty euros."
        }
      ],
      "grammarNotes": [
        {
          "title": "The German Umlauts (ä, ö, ü)",
          "explanation": "ä sounds like 'e' in bed, ö is formed by rounding lips while saying 'e', ü by rounding lips while saying 'ee'.",
          "examples": [
            "Käse (cheese)",
            "schön (beautiful)",
            "müde (tired)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Kellner",
          "text": "Wie viele Personen sind Sie?",
          "translation": "How many people are you?",
          "romajiOrPronunciation": "Vee fee-luh pair-zoh-nen zint zee?"
        },
        {
          "speaker": "Gast",
          "text": "Wir sind vier Personen.",
          "translation": "We are four people.",
          "romajiOrPronunciation": "Veer zint feer pair-zoh-nen."
        }
      ],
      "exercises": [
        {
          "id": "de2-q1",
          "type": "multiple_choice",
          "prompt": "What digit is 'Zwei' in German?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswer": "2",
          "explanation": "'Zwei' means 2."
        }
      ]
    },
    {
      "id": "de-u2-03",
      "languageId": "german",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Navigation",
      "unitDescription": "Order food in restaurants and navigate German U-Bahn and cities.",
      "title": "Im Café & Bestellen (Ordering Food)",
      "description": "Order coffee, Bretzel, beer, and ask for the bill politely in German.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order items using 'Ich möchte...' and ask 'Die Rechnung, bitte'.",
      "vocabulary": [
        {
          "word": "Ich möchte...",
          "romajiOrPronunciation": "ikh murkh-tuh",
          "translation": "I would like...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Ich möchte einen Apfelsaft.",
          "exampleTranslation": "I would like an apple juice."
        },
        {
          "word": "Die Rechnung, bitte",
          "romajiOrPronunciation": "dee rekh-noong, bit-tuh",
          "translation": "The bill, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Wir möchten zahlen. Die Rechnung, bitte.",
          "exampleTranslation": "We would like to pay. The bill, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Noun Genders: Der, Die, Das",
          "explanation": "Every German noun has a gender: masculine (der Kaffee), feminine (die Rechnung), neuter (das Wasser).",
          "examples": [
            "der Apfel",
            "die Suppe",
            "das Brot"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Kellner",
          "text": "Guten Tag, was möchten Sie trinken?",
          "translation": "Good day, what would you like to drink?",
          "romajiOrPronunciation": "Goo-ten tahk, vahs murkh-ten zee tring-ken?"
        },
        {
          "speaker": "Gast",
          "text": "Ich möchte ein Mineralwasser und einen Kaffee, bitte.",
          "translation": "I would like a mineral water and a coffee, please.",
          "romajiOrPronunciation": "Ikh murkh-tuh eyn mee-nuh-rahl-vah-ser oont ey-nen kah-fay..."
        }
      ],
      "exercises": [
        {
          "id": "de3-q1",
          "type": "multiple_choice",
          "prompt": "How do you politely say 'I would like' when ordering?",
          "options": [
            "Ich will",
            "Ich möchte",
            "Ich nehme",
            "Geben Sie"
          ],
          "correctAnswer": "Ich möchte",
          "explanation": "'Ich möchte' is the polite subjunctive form."
        }
      ]
    },
    {
      "id": "de-u3-04",
      "languageId": "german",
      "level": "A2",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Social & Work Life",
      "unitDescription": "Master German case system (Akkusativ & Dativ), jobs, and routines.",
      "title": "Akkusativ Case & Daily Objects",
      "description": "Understand why 'der' becomes 'den' when receiving direct actions in German.",
      "category": "Grammar Mastery",
      "estimatedMinutes": 7,
      "xpReward": 35,
      "objective": "Use masculine direct objects correctly in the Akkusativ case.",
      "vocabulary": [
        {
          "word": "Einen Kaffee",
          "romajiOrPronunciation": "ey-nen kah-fay",
          "translation": "A coffee (acc)",
          "partOfSpeech": "Noun phrase",
          "exampleSentence": "Ich trinke einen Kaffee.",
          "exampleTranslation": "I drink a coffee."
        },
        {
          "word": "Den Bus",
          "romajiOrPronunciation": "dayn boos",
          "translation": "The bus (acc)",
          "partOfSpeech": "Noun phrase",
          "exampleSentence": "Ich nehme den Bus.",
          "exampleTranslation": "I take the bus."
        }
      ],
      "grammarNotes": [
        {
          "title": "The Akkusativ Shift: der -> den",
          "explanation": "Only masculine nouns change in the accusative case: der -> den, ein -> einen. Feminine and neuter stay unchanged.",
          "examples": [
            "Ich sehe den Mann (der Mann)",
            "Ich sehe die Frau (die Frau)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Klaus",
          "text": "Suchst du deinen Schlüssel?",
          "translation": "Are you looking for your key?",
          "romajiOrPronunciation": "Zookhst doo dey-nen shloos-sel?"
        },
        {
          "speaker": "Marie",
          "text": "Ja, ich kann den Schlüssel nicht finden!",
          "translation": "Yes, I cannot find the key!",
          "romajiOrPronunciation": "Yah, ikh kahn dayn shloos-sel nikht fin-den!"
        }
      ],
      "exercises": [
        {
          "id": "de4-q1",
          "type": "multiple_choice",
          "prompt": "In the accusative, 'der' changes to:",
          "options": [
            "dem",
            "des",
            "den",
            "das"
          ],
          "correctAnswer": "den",
          "explanation": "Masculine 'der' becomes 'den' in the accusative case."
        }
      ]
    }
  ],
  "japanese": [
    {
            "id": "ja-n5-u1-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations & Tokyo Greetings (挨拶)",
            "unitDescription": "Hiragana syllabary, bow culture, and standard everyday Tokyo greetings.",
            "title": "Essential Greetings & Aisatsu (挨拶)",
            "description": "Learn Konnichiwa, Arigatou gozaimasu, and bowing etiquette.",
            "category": "Basics & Etiquette",
            "estimatedMinutes": 5,
            "xpReward": 30,
            "objective": "Properly greet in morning, afternoon, and evening with polite honorifics.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "4:15",
            "vocabulary": [
                {
                    "word": "おはようございます",
                    "romajiOrPronunciation": "Ohayou gozaimasu",
                    "translation": "Good morning (polite)",
                    "partOfSpeech": "Greeting",
                    "exampleSentence": "先生、おはようございます！",
                    "exampleTranslation": "Teacher, good morning!"
                },
                {
                    "word": "こんにちは",
                    "romajiOrPronunciation": "Konnichiwa",
                    "translation": "Hello / Good afternoon",
                    "partOfSpeech": "Greeting",
                    "exampleSentence": "皆さん、こんにちは。",
                    "exampleTranslation": "Hello, everyone."
                },
                {
                    "word": "ありがとうございます",
                    "romajiOrPronunciation": "Arigatou gozaimasu",
                    "translation": "Thank you very much (polite)",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "親切にありがとうございます。",
                    "exampleTranslation": "Thank you very much for your kindness."
                },
                {
                    "word": "すみません",
                    "romajiOrPronunciation": "Sumimasen",
                    "translation": "Excuse me / I'm sorry",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "すみません、お水をください。",
                    "exampleTranslation": "Excuse me, water please."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Bowing (お辞儀 - Ojigi) & Polite Endings",
                    "explanation": "Japanese greetings vary by time of day. Adding 'ございます (gozaimasu)' elevates an informal greeting to polite society standard.",
                    "examples": [
                        "おはよう (Informal to friends) vs おはようございます (Polite to seniors/teachers)",
                        "ありがとう (Casual) vs ありがとうございます (Polite)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Kenji",
                    "text": "田中さん、おはようございます！",
                    "romajiOrPronunciation": "Tanaka-san, ohayou gozaimasu!",
                    "translation": "Good morning, Mr. Tanaka!"
                },
                {
                    "speaker": "Tanaka",
                    "text": "ケンジさん、おはようございます。今日もいい天気ですね。",
                    "romajiOrPronunciation": "Kenji-san, ohayou gozaimasu. Kyou mo ii tenki desu ne.",
                    "translation": "Good morning, Kenji. It's nice weather today too, isn't it?"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q1",
                    "type": "multiple_choice",
                    "prompt": "Which greeting is used to greet someone in the morning politely?",
                    "options": [
                        "おはようございます",
                        "こんにちは",
                        "こんばんは",
                        "おやすみなさい"
                    ],
                    "correctAnswer": "おはようございます",
                    "explanation": "'Ohayou gozaimasu' is the standard polite morning greeting."
                }
            ]
        },
        {
            "id": "ja-n5-u1-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations & Tokyo Greetings (挨拶)",
            "unitDescription": "Hiragana syllabary, bow culture, and standard everyday Tokyo greetings.",
            "title": "Self Introductions & Jikoshoukai (自己紹介)",
            "description": "State your name, nationality, and profession using 'watashi wa... desu'.",
            "category": "Introductions",
            "estimatedMinutes": 6,
            "xpReward": 30,
            "objective": "Introduce yourself with name, nationality, and polite closing phrase.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:10",
            "vocabulary": [
                {
                    "word": "わたし",
                    "romajiOrPronunciation": "Watashi",
                    "translation": "I / me",
                    "partOfSpeech": "Pronoun",
                    "exampleSentence": "私は学生です。",
                    "exampleTranslation": "I am a student."
                },
                {
                    "word": "はじめまして",
                    "romajiOrPronunciation": "Hajimemashite",
                    "translation": "Nice to meet you (for the first time)",
                    "partOfSpeech": "Greeting",
                    "exampleSentence": "はじめまして、アレックスです。",
                    "exampleTranslation": "Nice to meet you, I am Alex."
                },
                {
                    "word": "よろしくおねがいします",
                    "romajiOrPronunciation": "Yoroshiku onegaishimasu",
                    "translation": "Please treat me favorably / Nice meeting you",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "どうぞよろしくお願いします。",
                    "exampleTranslation": "Please treat me favorably."
                },
                {
                    "word": "がくせい",
                    "romajiOrPronunciation": "Gakusei",
                    "translation": "Student",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "東京大学の学生です。",
                    "exampleTranslation": "I am a Tokyo University student."
                }
            ],
            "grammarNotes": [
                {
                    "title": "A は B です (A is B)",
                    "explanation": "The topic particle 'は' (pronounced 'wa' when used as a particle) marks the topic of the sentence. 'です (desu)' acts as the polite copula (is/am/are).",
                    "examples": [
                        "私はエンジニアです。(I am an engineer.)",
                        "田中さんは日本人です。(Mr. Tanaka is Japanese.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Alex",
                    "text": "はじめまして。私はアレックスです。アメリカから来ました。",
                    "romajiOrPronunciation": "Hajimemashite. Watashi wa Arekkusu desu. Amerika kara kimashita.",
                    "translation": "Nice to meet you. I am Alex. I came from America."
                },
                {
                    "speaker": "Yuki",
                    "text": "はじめまして、ユキです。よろしくお願いします！",
                    "romajiOrPronunciation": "Hajimemashite, Yuki desu. Yoroshiku onegaishimasu!",
                    "translation": "Nice to meet you, I'm Yuki. Pleased to meet you!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q2",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I am a student' in Japanese?",
                    "options": [
                        "私は学生です",
                        "私は先生です",
                        "私は日本人です",
                        "私は医者です"
                    ],
                    "correctAnswer": "私は学生です",
                    "explanation": "'Watashi wa gakusei desu' translates to 'I am a student'."
                }
            ]
        },
        {
            "id": "ja-n5-u1-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations & Tokyo Greetings (挨拶)",
            "unitDescription": "Hiragana syllabary, bow culture, and standard everyday Tokyo greetings.",
            "title": "Numbers, Counting & Japanese Yen (数字・お金)",
            "description": "Count 1 to 10,000 and ask 'Ikura desu ka?' (How much is it?).",
            "category": "Numbers & Shopping",
            "estimatedMinutes": 6,
            "xpReward": 30,
            "objective": "Understand Japanese numerals (一, 二, 三, 十, 百, 千, 万) and ask prices in Yen.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "4:40",
            "vocabulary": [
                {
                    "word": "いくら",
                    "romajiOrPronunciation": "Ikura",
                    "translation": "How much (price)",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "これはいくらですか？",
                    "exampleTranslation": "How much is this?"
                },
                {
                    "word": "えん",
                    "romajiOrPronunciation": "En",
                    "translation": "Yen (currency)",
                    "partOfSpeech": "Counter",
                    "exampleSentence": "これは五百円です。",
                    "exampleTranslation": "This is 500 yen."
                },
                {
                    "word": "ひゃく",
                    "romajiOrPronunciation": "Hyaku",
                    "translation": "100 (Hundred)",
                    "partOfSpeech": "Number",
                    "exampleSentence": "百円ショップに行きます。",
                    "exampleTranslation": "I go to a 100-yen shop."
                },
                {
                    "word": "せん",
                    "romajiOrPronunciation": "Sen",
                    "translation": "1,000 (Thousand)",
                    "partOfSpeech": "Number",
                    "exampleSentence": "千円札があります。",
                    "exampleTranslation": "I have a 1,000-yen bill."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Asking Prices: [Item] は いくらですか？",
                    "explanation": "Use 'kore' (this near speaker), 'sore' (that near listener), and 'are' (that over there) to point to items when asking prices.",
                    "examples": [
                        "これはいくらですか？ (How much is this?)",
                        "それは千円です。(That is 1,000 yen.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Customer",
                    "text": "すみません、この抹茶ラテはいくらですか？",
                    "romajiOrPronunciation": "Sumimasen, kono matcha rate wa ikura desu ka?",
                    "translation": "Excuse me, how much is this matcha latte?"
                },
                {
                    "speaker": "Clerk",
                    "text": "それは五百円（500円）です。",
                    "romajiOrPronunciation": "Sore wa gohyaku-en desu.",
                    "translation": "That is 500 yen."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q3",
                    "type": "multiple_choice",
                    "prompt": "How do you ask 'How much is this?' in Japanese?",
                    "options": [
                        "これはいくらですか？",
                        "これはなんですか？",
                        "ここはどこですか？",
                        "だれですか？"
                    ],
                    "correctAnswer": "これはいくらですか？",
                    "explanation": "'Kore wa ikura desu ka?' specifically asks for the price."
                }
            ]
        },
        {
            "id": "ja-n5-u2-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Essential Particles & Daily Actions (助詞・動詞)",
            "unitDescription": "Master the direct object particle を, destination に, and action place で.",
            "title": "Everyday Verbs & Particle を (Tabemasu / Nomimasu)",
            "description": "Learn to say 'I eat ramen' and 'I drink green tea' using verb polite forms.",
            "category": "Verbs & Food",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Form transitive verb sentences using '[Noun] を [Verb-ます]'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "たべます",
                    "romajiOrPronunciation": "Tabemasu",
                    "translation": "To eat (polite present)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "ラーメンを食べます。",
                    "exampleTranslation": "I eat ramen."
                },
                {
                    "word": "のみます",
                    "romajiOrPronunciation": "Nomimasu",
                    "translation": "To drink (polite present)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "お茶を飲みます。",
                    "exampleTranslation": "I drink green tea."
                },
                {
                    "word": "みず",
                    "romajiOrPronunciation": "Mizu",
                    "translation": "Water",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "冷たい水を飲みます。",
                    "exampleTranslation": "I drink cold water."
                },
                {
                    "word": "ごはん",
                    "romajiOrPronunciation": "Gohan",
                    "translation": "Meal / Cooked rice",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "朝ごはんを食べます。",
                    "exampleTranslation": "I eat breakfast."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Direct Object Particle: を (O)",
                    "explanation": "Particle を indicates the direct object that receives the action of the verb.",
                    "examples": [
                        "本を読みます。(I read a book.)",
                        "映画を見ます。(I watch a movie.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Hana",
                    "text": "昼ごはんに何を食べますか？",
                    "romajiOrPronunciation": "Hirugohan ni nani o tabemasu ka?",
                    "translation": "What will you eat for lunch?"
                },
                {
                    "speaker": "Kenji",
                    "text": "美味しい寿司を食べます。お茶も飲みます。",
                    "romajiOrPronunciation": "Oishii sushi o tabemasu. Ocha mo nomimasu.",
                    "translation": "I will eat delicious sushi. I will also drink green tea."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q4",
                    "type": "multiple_choice",
                    "prompt": "Which particle marks the direct object in 'Mizu __ nomimasu' (I drink water)?",
                    "options": [
                        "を",
                        "に",
                        "で",
                        "は"
                    ],
                    "correctAnswer": "を",
                    "explanation": "The particle 'を' (pronounced 'o') marks the object receiving the action."
                }
            ]
        },
        {
            "id": "ja-n5-u2-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Essential Particles & Daily Actions (助詞・動詞)",
            "unitDescription": "Master the direct object particle を, destination に, and action place で.",
            "title": "Places & Transport with に & で (Ikimasu / Shinkansen)",
            "description": "Express going to places (Tokyo ni ikimasu) and methods (shinkansen de).",
            "category": "Travel & Places",
            "estimatedMinutes": 7,
            "xpReward": 35,
            "objective": "Use に for destination and で for means/tools and location of action.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "いきます",
                    "romajiOrPronunciation": "Ikimasu",
                    "translation": "To go (polite)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "明日、京都に行きます。",
                    "exampleTranslation": "Tomorrow, I go to Kyoto."
                },
                {
                    "word": "きます",
                    "romajiOrPronunciation": "Kimasu",
                    "translation": "To come (polite)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "友達が日本に来ます。",
                    "exampleTranslation": "My friend comes to Japan."
                },
                {
                    "word": "しんかんせん",
                    "romajiOrPronunciation": "Shinkansen",
                    "translation": "Bullet train",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新幹線で大阪へ行きます。",
                    "exampleTranslation": "I go to Osaka by bullet train."
                },
                {
                    "word": "えき",
                    "romajiOrPronunciation": "Eki",
                    "translation": "Station",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新宿駅で会いましょう。",
                    "exampleTranslation": "Let's meet at Shinjuku station."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Particle に (Destination) vs. Particle で (Location of Action / Means)",
                    "explanation": "Use に (or へ) with motion verbs: [Place] に 行きます. Use で for the place where an activity occurs, or means of transport: [Transport] で 行きます.",
                    "examples": [
                        "東京に行きます。(I go to Tokyo.)",
                        "電車で行きます。(I go by train.)",
                        "カフェで勉強します。(I study at a cafe.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Tourist",
                    "text": "すみません、新宿駅へはどうやって行きますか？",
                    "romajiOrPronunciation": "Sumimasen, Shinjuku-eki e wa dou yatte ikimasu ka?",
                    "translation": "Excuse me, how do I get to Shinjuku Station?"
                },
                {
                    "speaker": "Local",
                    "text": "山手線で行くことができますよ。",
                    "romajiOrPronunciation": "Yamanote-sen de iku koto ga dekimasu yo.",
                    "translation": "You can go by the Yamanote Line!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q5",
                    "type": "multiple_choice",
                    "prompt": "Fill in the blank: 'Toukyou __ ikimasu' (I go to Tokyo).",
                    "options": [
                        "に",
                        "を",
                        "が",
                        "から"
                    ],
                    "correctAnswer": "に",
                    "explanation": "Particle 'に' marks the target destination of movement."
                }
            ]
        },
        {
            "id": "ja-n5-u2-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Essential Particles & Daily Actions (助詞・動詞)",
            "unitDescription": "Master the direct object particle を, destination に, and action place で.",
            "title": "Existence: います (Living) vs あります (Inanimate)",
            "description": "Say where things and people are: 'Neko ga imasu' vs 'Hon ga arimasu'.",
            "category": "Existence & Location",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Distinguish between います (animate beings) and あります (inanimate objects).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:15",
            "vocabulary": [
                {
                    "word": "います",
                    "romajiOrPronunciation": "Imasu",
                    "translation": "There is / exists (living things)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "公園に猫がいます。",
                    "exampleTranslation": "There is a cat in the park."
                },
                {
                    "word": "あります",
                    "romajiOrPronunciation": "Arimasu",
                    "translation": "There is / exists (inanimate things)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "机の上に本があります。",
                    "exampleTranslation": "There is a book on the desk."
                },
                {
                    "word": "ねこ",
                    "romajiOrPronunciation": "Neko",
                    "translation": "Cat",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "白い猫がいます。",
                    "exampleTranslation": "There is a white cat."
                },
                {
                    "word": "つくえ",
                    "romajiOrPronunciation": "Tsukue",
                    "translation": "Desk",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "机の前に座ります。",
                    "exampleTranslation": "I sit in front of the desk."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Existential Verbs: います vs あります",
                    "explanation": "います is strictly for people, animals, and insects (living things). あります is for books, buildings, furniture, plants, and abstract concepts.",
                    "examples": [
                        "先生がいます。(The teacher is here.)",
                        "スマホがあります。(There is a smartphone.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Riko",
                    "text": "部屋に誰かいますか？",
                    "romajiOrPronunciation": "Heya ni dareka imasu ka?",
                    "translation": "Is anyone in the room?"
                },
                {
                    "speaker": "Sora",
                    "text": "いいえ、猫だけがいますよ。",
                    "romajiOrPronunciation": "Iie, neko dake ga imasu yo.",
                    "translation": "No, only the cat is here."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q6",
                    "type": "multiple_choice",
                    "prompt": "Which verb completes 'Kouen ni inu ga ___' (There is a dog in the park)?",
                    "options": [
                        "います",
                        "あります",
                        "たべます",
                        "いきます"
                    ],
                    "correctAnswer": "います",
                    "explanation": "Dogs are living beings, so 'います' (imasu) must be used."
                }
            ]
        },
        {
            "id": "ja-n5-u3-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Konbini Shopping & Dining Out (コンビニ・外食)",
            "unitDescription": "Ordering food, asking for recommendations, and Tokyo konbini shopping.",
            "title": "Ordering at Restaurants: [Item] をください (Kudasai)",
            "description": "Order onigiri, ramen, and iced coffee politely in shops.",
            "category": "Food & Dining",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Order items and specify quantity using をください and counters.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "ください",
                    "romajiOrPronunciation": "Kudasai",
                    "translation": "Please give me",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "メニューをください。",
                    "exampleTranslation": "The menu, please."
                },
                {
                    "word": "おにぎり",
                    "romajiOrPronunciation": "Onigiri",
                    "translation": "Rice ball",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "鮭のおにぎりを二つください。",
                    "exampleTranslation": "Two salmon rice balls, please."
                },
                {
                    "word": "おかいけい",
                    "romajiOrPronunciation": "Okaikei",
                    "translation": "The bill / check",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "お会計をお願いします。",
                    "exampleTranslation": "The check, please."
                },
                {
                    "word": "おすすめ",
                    "romajiOrPronunciation": "Osusume",
                    "translation": "Recommendation",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "今日のおすすめは何ですか？",
                    "exampleTranslation": "What is today's recommendation?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "General Counters: ひとつ、ふたつ、みっつ",
                    "explanation": "Use native Japanese counters for ordering items: ひとつ (1), ふたつ (2), みっつ (3). Place the counter after the particle を or directly before the verb.",
                    "examples": [
                        "これを二つ（ふたつ）ください。(Two of these, please.)",
                        "お水を一つください。(One water, please.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Customer",
                    "text": "すみません、醤油ラーメンを一つと、餃子を一つください。",
                    "romajiOrPronunciation": "Sumimasen, shouyu raamen o hitotsu to, gyouza o hitotsu kudasai.",
                    "translation": "Excuse me, one shoyu ramen and one gyoza, please."
                },
                {
                    "speaker": "Server",
                    "text": "かしこまりました！少々お待ちください。",
                    "romajiOrPronunciation": "Kashikomarimashita! Shou-shou omachi kudasai.",
                    "translation": "Understood! Please wait a moment."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q7",
                    "type": "multiple_choice",
                    "prompt": "How do you ask for the restaurant bill in Japanese?",
                    "options": [
                        "お会計をお願いします",
                        "ごちそうさまでした",
                        "いただきます",
                        "いらっしゃいませ"
                    ],
                    "correctAnswer": "お会計をお願いします",
                    "explanation": "'Okaikei o onegaishimasu' asks for the bill politely."
                }
            ]
        },
        {
            "id": "ja-n5-u3-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Konbini Shopping & Dining Out (コンビニ・外食)",
            "unitDescription": "Ordering food, asking for recommendations, and Tokyo konbini shopping.",
            "title": "Asking Directions: [Place] はどこですか (Doko desu ka)",
            "description": "Find bathrooms, train gates, and ATMs in Japanese cities.",
            "category": "Directions",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Ask where facilities are and understand 'koko' (here), 'soko' (there), and 'asoko' (over there).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:20",
            "vocabulary": [
                {
                    "word": "どこ",
                    "romajiOrPronunciation": "Doko",
                    "translation": "Where",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "お手洗いはどこですか？",
                    "exampleTranslation": "Where is the restroom?"
                },
                {
                    "word": "おてあらい",
                    "romajiOrPronunciation": "Otearai / Toire",
                    "translation": "Restroom / Bathroom",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "お手洗いはあそこです。",
                    "exampleTranslation": "The restroom is over there."
                },
                {
                    "word": "みぎ",
                    "romajiOrPronunciation": "Migi",
                    "translation": "Right",
                    "partOfSpeech": "Direction",
                    "exampleSentence": "右に曲がってください。",
                    "exampleTranslation": "Please turn right."
                },
                {
                    "word": "ひだり",
                    "romajiOrPronunciation": "Hidari",
                    "translation": "Left",
                    "partOfSpeech": "Direction",
                    "exampleSentence": "左側にあります。",
                    "exampleTranslation": "It is on the left side."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Location Pronouns: ここ (Here), そこ (There), あそこ (Over there)",
                    "explanation": "Use '〜はどこですか' to ask where anything is located.",
                    "examples": [
                        "コンビニはどこですか？ (Where is the convenience store?)",
                        "あそこにあります。(It is over there.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Traveler",
                    "text": "すみません、交番（こうばん）はどこですか？",
                    "romajiOrPronunciation": "Sumimasen, kouban wa doko desu ka?",
                    "translation": "Excuse me, where is the police box?"
                },
                {
                    "speaker": "Local",
                    "text": "あの信号を右に曲がると、左側にありますよ。",
                    "romajiOrPronunciation": "Ano shingou o migi ni magaru to, hidari-gawa ni arimasu yo.",
                    "translation": "Turn right at that traffic light, and it will be on your left."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q8",
                    "type": "multiple_choice",
                    "prompt": "How do you ask 'Where is the restroom?' in Japanese?",
                    "options": [
                        "お手洗いはどこですか？",
                        "お手洗いはいくらですか？",
                        "お手洗いは何ですか？",
                        "お手洗いは誰ですか？"
                    ],
                    "correctAnswer": "お手洗いはどこですか？",
                    "explanation": "'...wa doko desu ka?' translates to 'Where is...?'"
                }
            ]
        },
        {
            "id": "ja-n5-u3-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Konbini Shopping & Dining Out (コンビニ・外食)",
            "unitDescription": "Ordering food, asking for recommendations, and Tokyo konbini shopping.",
            "title": "Time, Days & Daily Schedule (時間・曜日)",
            "description": "Tell time, specify hours and minutes, and talk about your daily schedule.",
            "category": "Time & Schedule",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Tell time in Japanese using 〜時 (ji) and 〜分 (fun/pun) and express daily routines.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "なんじ",
                    "romajiOrPronunciation": "Nan-ji",
                    "translation": "What time",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "今、何時ですか？",
                    "exampleTranslation": "What time is it now?"
                },
                {
                    "word": "おきます",
                    "romajiOrPronunciation": "Okimasu",
                    "translation": "To wake up / get up",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "毎朝七時に起きます。",
                    "exampleTranslation": "I wake up at 7 o'clock every morning."
                },
                {
                    "word": "ねます",
                    "romajiOrPronunciation": "Nemasu",
                    "translation": "To go to bed / sleep",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "夜十一時に寝ます。",
                    "exampleTranslation": "I go to bed at 11 PM."
                },
                {
                    "word": "きょう",
                    "romajiOrPronunciation": "Kyou",
                    "translation": "Today",
                    "partOfSpeech": "Time noun",
                    "exampleSentence": "今日は金曜日です。",
                    "exampleTranslation": "Today is Friday."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Time Particle: に (At [Time]) and から・まで (From - Until)",
                    "explanation": "Specific clock times take the particle に. Use から (from) and まで (until) to indicate time spans.",
                    "examples": [
                        "午前９時から午後５時まで働きます。(I work from 9 AM to 5 PM.)",
                        "何時に起きますか？ (What time do you wake up?)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Daiki",
                    "text": "毎朝、何時に起きますか？",
                    "romajiOrPronunciation": "Maiasa, nan-ji ni okimasu ka?",
                    "translation": "What time do you wake up every morning?"
                },
                {
                    "speaker": "Sara",
                    "text": "だいたい朝の七時に起きます。それからコーヒーを飲みます。",
                    "romajiOrPronunciation": "Daitai asa no shichi-ji ni okimasu. Sorekara koohii o nomimasu.",
                    "translation": "Usually I wake up at 7:00 AM. After that, I drink coffee."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-q9",
                    "type": "multiple_choice",
                    "prompt": "How do you ask 'What time is it now?' in Japanese?",
                    "options": [
                        "今、何時ですか？",
                        "今、何曜日ですか？",
                        "今、何日ですか？",
                        "今、いくらですか？"
                    ],
                    "correctAnswer": "今、何時ですか？",
                    "explanation": "'Ima, nan-ji desu ka?' means 'What time is it right now?'"
                }
            ]
        },
        {
            "id": "ja-n4-u4-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 4,
            "unitTitle": "Unit 4: The Crucial Te-Form & Requests (て形・依頼)",
            "unitDescription": "Conjugate verbs into the te-form and make polite requests (〜てください).",
            "title": "Te-form Conjugation & Polite Requests (〜てください)",
            "description": "Learn to make courteous requests like 'Chotto matte kudasai'.",
            "category": "Te-form Grammar",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Form the te-form of verbs and ask others to do something politely.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:30",
            "vocabulary": [
                {
                    "word": "まってください",
                    "romajiOrPronunciation": "Matte kudasai",
                    "translation": "Please wait",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "少々お待ちください。",
                    "exampleTranslation": "Please wait a moment."
                },
                {
                    "word": "みてください",
                    "romajiOrPronunciation": "Mite kudasai",
                    "translation": "Please look",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "この写真を見てください。",
                    "exampleTranslation": "Please look at this picture."
                },
                {
                    "word": "きいてください",
                    "romajiOrPronunciation": "Kiite kudasai",
                    "translation": "Please listen",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "よく聞いてください。",
                    "exampleTranslation": "Please listen carefully."
                },
                {
                    "word": "かいてください",
                    "romajiOrPronunciation": "Kaite kudasai",
                    "translation": "Please write",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "お名前を書いてください。",
                    "exampleTranslation": "Please write your name."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Te-form (〜て) + ください (Please do...)",
                    "explanation": "The Te-form (〜て) is the crucial connective form of Japanese verbs. Adding ください turns it into a polite request.",
                    "examples": [
                        "待つ (matsu) ➔ 待ってください (Please wait)",
                        "見る (miru) ➔ 見てください (Please look)",
                        "食べる (taberu) ➔ 食べてください (Please eat)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Staff",
                    "text": "こちらの用紙にお名前とお電話番号を書いてください。",
                    "romajiOrPronunciation": "Kochira no youshi ni onamae to odenwa bangou o kaite kudasai.",
                    "translation": "Please write your name and phone number on this form."
                },
                {
                    "speaker": "Customer",
                    "text": "はい、わかりました。ペンを貸してください。",
                    "romajiOrPronunciation": "Hai, wakarimashita. Pen o kashite kudasai.",
                    "translation": "Yes, understood. Please lend me a pen."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'Please wait a moment' in Japanese?",
                    "options": [
                        "ちょっと待ってください",
                        "ちょっと見てください",
                        "ちょっと食べてください",
                        "ちょっと来てください"
                    ],
                    "correctAnswer": "ちょっと待ってください",
                    "explanation": "'Chotto matte kudasai' means please wait a moment."
                }
            ]
        },
        {
            "id": "ja-n4-u4-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 4,
            "unitTitle": "Unit 4: The Crucial Te-Form & Requests (て形・依頼)",
            "unitDescription": "Conjugate verbs into the te-form and make polite requests (〜てください).",
            "title": "Present Continuous & States: 〜ています (Te-imasu)",
            "description": "Express what you are currently doing and continuous states (living, working).",
            "category": "Continuous State",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Express ongoing actions and resulting states using '〜ています'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:15",
            "vocabulary": [
                {
                    "word": "べんきょうしています",
                    "romajiOrPronunciation": "Benkyou shite imasu",
                    "translation": "Am studying",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "今、日本語を勉強しています。",
                    "exampleTranslation": "I am studying Japanese right now."
                },
                {
                    "word": "すんでいます",
                    "romajiOrPronunciation": "Sunde imasu",
                    "translation": "Am living / reside",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "東京の渋谷に住んでいます。",
                    "exampleTranslation": "I am living in Shibuya, Tokyo."
                },
                {
                    "word": "はたらいています",
                    "romajiOrPronunciation": "Hataraite imasu",
                    "translation": "Am working",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "IT企業で働いています。",
                    "exampleTranslation": "I am working at an IT company."
                },
                {
                    "word": "しっています",
                    "romajiOrPronunciation": "Shitte imasu",
                    "translation": "I know",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "その人を知っています。",
                    "exampleTranslation": "I know that person."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Te-form + います: Action in Progress vs. Resulting State",
                    "explanation": "With action verbs (like taberu, benkyou suru), 〜ています means an action in progress. With change-of-state verbs (sumu, kekkon suru), it indicates a current continuing state.",
                    "examples": [
                        "本を読んでいます。(I am reading a book.)",
                        "京都に住んでいます。(I live in Kyoto.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Rina",
                    "text": "今、何をしていますか？暇ですか？",
                    "romajiOrPronunciation": "Ima, nani o shite imasu ka? Hima desu ka?",
                    "translation": "What are you doing right now? Are you free?"
                },
                {
                    "speaker": "Kaito",
                    "text": "JLPTの文法を勉強しています。一時間後に終わりますよ。",
                    "romajiOrPronunciation": "JLPT no bunpou o benkyou shite imasu. Ichijikan-go ni owarimasu yo.",
                    "translation": "I am studying JLPT grammar. I will finish in an hour."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q2",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I am currently studying' in Japanese?",
                    "options": [
                        "勉強しています",
                        "勉強しました",
                        "勉強しません",
                        "勉強しましょう"
                    ],
                    "correctAnswer": "勉強しています",
                    "explanation": "'Benkyou shite imasu' expresses an action currently in progress."
                }
            ]
        },
        {
            "id": "ja-n4-u4-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 4,
            "unitTitle": "Unit 4: The Crucial Te-Form & Requests (て形・依頼)",
            "unitDescription": "Conjugate verbs into the te-form and make polite requests (〜てください).",
            "title": "Asking Permission: 〜てもいいですか (May I...?)",
            "description": "Politely ask permission to take photos, sit down, or enter rooms.",
            "category": "Etiquette & Rules",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Use 〜てもいいですか for permission and 〜てはいけません for prohibition.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:50",
            "vocabulary": [
                {
                    "word": "しゃしん",
                    "romajiOrPronunciation": "Shashin",
                    "translation": "Photograph",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "ここで写真を撮ってもいいですか？",
                    "exampleTranslation": "May I take a photo here?"
                },
                {
                    "word": "すわります",
                    "romajiOrPronunciation": "Suwarimasu",
                    "translation": "To sit down",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "ここに座ってもいいですか？",
                    "exampleTranslation": "May I sit here?"
                },
                {
                    "word": "はいってもいい",
                    "romajiOrPronunciation": "Haitte mo ii",
                    "translation": "Good to enter",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "部屋に入ってもいいですか？",
                    "exampleTranslation": "May I enter the room?"
                },
                {
                    "word": "だめ",
                    "romajiOrPronunciation": "Dame",
                    "translation": "Not allowed / No good",
                    "partOfSpeech": "Na-adj",
                    "exampleSentence": "ここでは撮影はダメです。",
                    "exampleTranslation": "Photography is not allowed here."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Te-form + もいいですか (Permission) vs. てはいけません (Prohibition)",
                    "explanation": "Turn verb to Te-form + もいいですか to ask 'Is it okay if I do...?' Use てはいけません to say 'You must not do...'",
                    "examples": [
                        "食べてもいいですか？ (May I eat?)",
                        "タバコを吸ってはいけません。(You must not smoke.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Museum Visitor",
                    "text": "すみません、この絵の写真を撮ってもいいですか？",
                    "romajiOrPronunciation": "Sumimasen, kono e no shashin o totte mo ii desu ka?",
                    "translation": "Excuse me, may I take a photograph of this painting?"
                },
                {
                    "speaker": "Security",
                    "text": "申し訳ございません。館内での撮影はご遠慮ください。",
                    "romajiOrPronunciation": "Moushiwake gozaimasen. Kannai de no satsuei wa go-enryo kudasai.",
                    "translation": "I apologize, please refrain from photography inside the museum."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q3",
                    "type": "multiple_choice",
                    "prompt": "How do you ask 'May I take a photo?' in Japanese?",
                    "options": [
                        "写真を撮ってもいいですか？",
                        "写真を撮ってください",
                        "写真を撮りません",
                        "写真を撮りました"
                    ],
                    "correctAnswer": "写真を撮ってもいいですか？",
                    "explanation": "'〜te mo ii desu ka' is the standard way to politely ask permission."
                }
            ]
        },
        {
            "id": "ja-n4-u5-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Ability, Experience & Giving/Receiving (可能・経験・授受)",
            "unitDescription": "Express capability (〜ことができる) and past experiences (〜たことがある).",
            "title": "Expressing Ability: 〜ことができる (Koto ga dekiru)",
            "description": "Talk about skills and capabilities: 'Kanji o yomu koto ga dekimasu'.",
            "category": "Potential & Ability",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Express abilities using Dictionary Form + ことができる and potential verb forms.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:10",
            "vocabulary": [
                {
                    "word": "できます",
                    "romajiOrPronunciation": "Dekimasu",
                    "translation": "Can do / Be able to",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "日本語を話すことができます。",
                    "exampleTranslation": "I can speak Japanese."
                },
                {
                    "word": "かんじ",
                    "romajiOrPronunciation": "Kanji",
                    "translation": "Kanji characters",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "百の漢字を読むことができます。",
                    "exampleTranslation": "I can read 100 kanji characters."
                },
                {
                    "word": "およぎます",
                    "romajiOrPronunciation": "Oyogimasu",
                    "translation": "To swim",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "海で泳ぐことができます。",
                    "exampleTranslation": "I can swim in the ocean."
                },
                {
                    "word": "うんてん",
                    "romajiOrPronunciation": "Unten",
                    "translation": "Driving",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "車を運転することができます。",
                    "exampleTranslation": "I can drive a car."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Verb Dictionary Form + ことができる",
                    "explanation": "Adding こと (koto) nominalizes the dictionary form verb, turning it into a noun phrase. Adding ができます indicates ability.",
                    "examples": [
                        "ピアノを弾くことができます。(I can play the piano.)",
                        "箸を使うことができます。(I can use chopsticks.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Interviewer",
                    "text": "日本語で日常会話ができますか？",
                    "romajiOrPronunciation": "Nihongo de nichijou kaiwa ga dekimasu ka?",
                    "translation": "Can you carry out everyday conversation in Japanese?"
                },
                {
                    "speaker": "Applicant",
                    "text": "はい！簡単な日常会話を話すことができます。",
                    "romajiOrPronunciation": "Hai! Kantan na nichijou kaiwa o hanasu koto ga dekimasu.",
                    "translation": "Yes! I can speak simple everyday conversations."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q4",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I can speak Japanese' using 'koto ga dekimasu'?",
                    "options": [
                        "日本語を話すことができます",
                        "日本語を話します",
                        "日本語を話したいです",
                        "日本語を話してください"
                    ],
                    "correctAnswer": "日本語を話すことができます",
                    "explanation": "Dictionary form '話す' + 'ことができます' expresses ability."
                }
            ]
        },
        {
            "id": "ja-n4-u5-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Ability, Experience & Giving/Receiving (可能・経験・授受)",
            "unitDescription": "Express capability (〜ことができる) and past experiences (〜たことがある).",
            "title": "Past Life Experiences: 〜たことがある (Ta koto ga aru)",
            "description": "Talk about travel memories: 'Fujisan ni nobotta koto ga arimasu'.",
            "category": "Life Experiences",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Form sentences describing past lifetime experiences using Verb Ta-form + ことがある.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:20",
            "vocabulary": [
                {
                    "word": "のぼりました",
                    "romajiOrPronunciation": "Noborimashita",
                    "translation": "Climbed",
                    "partOfSpeech": "Verb (past)",
                    "exampleSentence": "富士山に登ったことがあります。",
                    "exampleTranslation": "I have climbed Mount Fuji before."
                },
                {
                    "word": "おんせん",
                    "romajiOrPronunciation": "Onsen",
                    "translation": "Hot spring",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "日本の温泉に入ったことがありますか？",
                    "exampleTranslation": "Have you ever entered a Japanese hot spring?"
                },
                {
                    "word": "いちども",
                    "romajiOrPronunciation": "Ichido mo",
                    "translation": "Not even once (with negative)",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "一度も行ったことがありません。",
                    "exampleTranslation": "I have not been there even once."
                },
                {
                    "word": "なんかいも",
                    "romajiOrPronunciation": "Nankai mo",
                    "translation": "Many times",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "何回も日本に行ったことがあります。",
                    "exampleTranslation": "I have been to Japan many times."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Verb Plain Past (〜た) + ことがある (Have the experience of...)",
                    "explanation": "Use Verb Ta-form + ことがある to speak of past experiences in one's life history.",
                    "examples": [
                        "刺身を食べたことがあります。(I have eaten sashimi before.)",
                        "歌舞伎を見たことがありますか？ (Have you ever watched Kabuki?)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Ken",
                    "text": "日本へ旅行に行ったことがありますか？",
                    "romajiOrPronunciation": "Nihon e ryokou ni itta koto ga arimasu ka?",
                    "translation": "Have you ever been on a trip to Japan?"
                },
                {
                    "speaker": "Emi",
                    "text": "はい！去年の春に京都へ桜を見に行ったことがあります。",
                    "romajiOrPronunciation": "Hai! Kyonen no haru ni Kyouto e sakura o mi ni itta koto ga arimasu.",
                    "translation": "Yes! Last spring I went to Kyoto to see the cherry blossoms."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q5",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I have climbed Mt. Fuji before'?",
                    "options": [
                        "富士山に登ったことがあります",
                        "富士山に登ります",
                        "富士山に登りたいです",
                        "富士山に登ってください"
                    ],
                    "correctAnswer": "富士山に登ったことがあります",
                    "explanation": "Ta-form '登った' + 'ことがあります' expresses past experience."
                }
            ]
        },
        {
            "id": "ja-n4-u5-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Ability, Experience & Giving/Receiving (可能・経験・授受)",
            "unitDescription": "Express capability (〜ことができる) and past experiences (〜たことがある).",
            "title": "Giving & Receiving: あげる・もらう・くれる (Ageru / Morau / Kureru)",
            "description": "Master the Japanese perspective on transactions, gifts, and favors.",
            "category": "Gift Giving & Favors",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Correctly use あげる (give to other), くれる (give to me), and もらう (receive).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:40",
            "vocabulary": [
                {
                    "word": "あげます",
                    "romajiOrPronunciation": "Agemasu",
                    "translation": "To give (to someone else)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "友達にプレゼントをあげました。",
                    "exampleTranslation": "I gave a present to my friend."
                },
                {
                    "word": "もらいます",
                    "romajiOrPronunciation": "Moraimasu",
                    "translation": "To receive (from someone)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "母にお小遣いをもらいました。",
                    "exampleTranslation": "I received pocket money from my mother."
                },
                {
                    "word": "くれます",
                    "romajiOrPronunciation": "Kuremasu",
                    "translation": "To give (to me or my in-group)",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "田中さんが本をくれました。",
                    "exampleTranslation": "Mr. Tanaka gave me a book."
                },
                {
                    "word": "おみやげ",
                    "romajiOrPronunciation": "Omiyage",
                    "translation": "Souvenir gift",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "東京のお土産をもらいました。",
                    "exampleTranslation": "I received a Tokyo souvenir."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Direction of Giving: あげる vs くれる",
                    "explanation": "あげる is used when speaker gives to someone, or A gives to B. くれる is strictly used when someone gives TO the speaker (or speaker's in-group). もらう means to receive from someone.",
                    "examples": [
                        "私は妹に時計をあげました。(I gave a watch to my sister.)",
                        "友達が私にお土産をくれました。(My friend gave me a souvenir.)",
                        "私は先生に教えてもらいました。(I received instruction from my teacher.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Yuto",
                    "text": "その素敵なネクタイはどうしたの？",
                    "romajiOrPronunciation": "Sono suteki na nekutai wa dou shita no?",
                    "translation": "Where did you get that lovely necktie?"
                },
                {
                    "speaker": "Shin",
                    "text": "誕生日に彼女がくれたんだよ。",
                    "romajiOrPronunciation": "Tanjoubi ni kanojo ga kureta n da yo.",
                    "translation": "My girlfriend gave it to me on my birthday."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q6",
                    "type": "multiple_choice",
                    "prompt": "Fill in the blank: 'Tomodachi ga watashi ni hon o ___' (My friend gave me a book).",
                    "options": [
                        "くれました",
                        "あげました",
                        "もらいました",
                        "とりました"
                    ],
                    "correctAnswer": "くれました",
                    "explanation": "When someone gives something TO the speaker, 'くれました' (kuremashita) is required."
                }
            ]
        },
        {
            "id": "ja-n4-u6-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 6,
            "unitTitle": "Unit 6: Desires, Reasons & Conditionals (希望・理由・条件)",
            "unitDescription": "Express desires (〜たい), causes (〜ので・〜から), and if-then conditionals (〜たら).",
            "title": "Expressing Wishes: 〜たい & 〜ほしい (Tai / Hoshii)",
            "description": "Say what you want to do: 'Nihon e ikitai desu' (I want to go to Japan).",
            "category": "Wishes & Desires",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Form statements expressing personal wishes using Verb Stem + たい and Noun がほしい.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "いきたい",
                    "romajiOrPronunciation": "Ikitai",
                    "translation": "Want to go",
                    "partOfSpeech": "I-adjective form",
                    "exampleSentence": "北海道へ行きたいです。",
                    "exampleTranslation": "I want to go to Hokkaido."
                },
                {
                    "word": "たべたい",
                    "romajiOrPronunciation": "Tabetai",
                    "translation": "Want to eat",
                    "partOfSpeech": "I-adjective form",
                    "exampleSentence": "本場の和牛を食べたいです。",
                    "exampleTranslation": "I want to eat authentic Wagyu."
                },
                {
                    "word": "ほしい",
                    "romajiOrPronunciation": "Hoshii",
                    "translation": "Want (a noun/object)",
                    "partOfSpeech": "I-adjective",
                    "exampleSentence": "新しいパソコンがほしいです。",
                    "exampleTranslation": "I want a new computer."
                },
                {
                    "word": "やすみたい",
                    "romajiOrPronunciation": "Yasumitai",
                    "translation": "Want to rest",
                    "partOfSpeech": "I-adjective form",
                    "exampleSentence": "少し休みたいです。",
                    "exampleTranslation": "I want to rest a little."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Verb Stem + たい (Want to do) vs. Noun が ほしい (Want an item)",
                    "explanation": "Replace ます with たい to express wanting to do an action. For desiring a physical object, use [Object] が ほしいです.",
                    "examples": [
                        "日本に住みたいです。(I want to live in Japan.)",
                        "温かいお茶がほしいです。(I want warm tea.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Friend",
                    "text": "日本に行ったら、何が一番したいですか？",
                    "romajiOrPronunciation": "Nihon ni ittara, nani ga ichiban shitai desu ka?",
                    "translation": "When you go to Japan, what do you want to do most?"
                },
                {
                    "speaker": "Traveler",
                    "text": "秋葉原でアニメグッズを買いたいです！",
                    "romajiOrPronunciation": "Akihabara de anime guzzu o kaitai desu!",
                    "translation": "I want to buy anime goods in Akihabara!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q7",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I want to drink green tea'?",
                    "options": [
                        "お茶が飲みたいです",
                        "お茶を飲みます",
                        "お茶を飲んでください",
                        "お茶を飲みました"
                    ],
                    "correctAnswer": "お茶が飲みたいです",
                    "explanation": "Verb stem '飲み' + 'たいです' expresses the desire to drink."
                }
            ]
        },
        {
            "id": "ja-n4-u6-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 6,
            "unitTitle": "Unit 6: Desires, Reasons & Conditionals (希望・理由・条件)",
            "unitDescription": "Express desires (〜たい), causes (〜ので・〜から), and if-then conditionals (〜たら).",
            "title": "The Tara Conditional: 〜たら (If / When)",
            "description": "Form if-then statements: 'Ame ga futtara...' (If it rains...).",
            "category": "Conditionals",
            "estimatedMinutes": 8,
            "xpReward": 40,
            "objective": "Form general conditional statements using Verb/Adjective Ta-form + ら.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:15",
            "vocabulary": [
                {
                    "word": "ふったら",
                    "romajiOrPronunciation": "Futtara",
                    "translation": "If it rains / falls",
                    "partOfSpeech": "Conditional",
                    "exampleSentence": "雨が降ったら、家で映画を見ます。",
                    "exampleTranslation": "If it rains, I will watch a movie at home."
                },
                {
                    "word": "やすかったら",
                    "romajiOrPronunciation": "Yasukattara",
                    "translation": "If it is cheap",
                    "partOfSpeech": "Conditional",
                    "exampleSentence": "安かったら買います。",
                    "exampleTranslation": "If it is cheap, I will buy it."
                },
                {
                    "word": "じかんがあったら",
                    "romajiOrPronunciation": "Jikan ga attara",
                    "translation": "If there is time",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "時間があったら、カフェに行きましょう。",
                    "exampleTranslation": "If you have time, let's go to a cafe."
                },
                {
                    "word": "ついたら",
                    "romajiOrPronunciation": "Tsuitara",
                    "translation": "When I arrive",
                    "partOfSpeech": "Conditional",
                    "exampleSentence": "駅に着いたら連絡してください。",
                    "exampleTranslation": "When you arrive at the station, please contact me."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Plain Past (〜た) + ら (If / When)",
                    "explanation": "The 〜たら conditional is the most versatile conditional form in Japanese. It covers both hypothetical 'if' and sequential 'when/after'.",
                    "examples": [
                        "東京に着いたら、電話します。(When I arrive in Tokyo, I will call.)",
                        "高かったら、買いません。(If it is expensive, I won't buy it.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Guide",
                    "text": "明日、天気が良かったら富士山が見えますよ。",
                    "romajiOrPronunciation": "Ashita, tenki ga yokattara Fujisan ga miemasu yo.",
                    "translation": "Tomorrow, if the weather is good, you will be able to see Mt. Fuji."
                },
                {
                    "speaker": "Tourist",
                    "text": "晴れたら嬉しいですね！楽しみにしています。",
                    "romajiOrPronunciation": "Haretara ureshii desu ne! Tanoshimi ni shite imasu.",
                    "translation": "I'll be so glad if it's sunny! I'm looking forward to it."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q8",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'If it rains, I won't go'?",
                    "options": [
                        "雨が降ったら、行きません",
                        "雨が降りますから、行きません",
                        "雨が降れば、行きます",
                        "雨が降っても、行きます"
                    ],
                    "correctAnswer": "雨が降ったら、行きません",
                    "explanation": "'Futtara' (if it rains) + 'ikimasen' (I won't go)."
                }
            ]
        },
        {
            "id": "ja-n4-u6-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 6,
            "unitTitle": "Unit 6: Desires, Reasons & Conditionals (希望・理由・条件)",
            "unitDescription": "Express desires (〜たい), causes (〜ので・〜から), and if-then conditionals (〜たら).",
            "title": "Conjectures & Uncertainty: 〜でしょう & 〜かもしれません",
            "description": "Express probabilities like 'Ashita wa ame ga furu deshou' (It will probably rain tomorrow).",
            "category": "Conjectures & Probability",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Express probability with でしょう (probably) and かもしれません (might/maybe).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "でしょう",
                    "romajiOrPronunciation": "Deshou",
                    "translation": "Probably / Right?",
                    "partOfSpeech": "Auxiliary",
                    "exampleSentence": "明日は晴れるでしょう。",
                    "exampleTranslation": "It will probably be sunny tomorrow."
                },
                {
                    "word": "かもしれません",
                    "romajiOrPronunciation": "Kamoshiremasen",
                    "translation": "May / Might / Perhaps",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "電車が遅れるかもしれません。",
                    "exampleTranslation": "The train might be late."
                },
                {
                    "word": "たぶん",
                    "romajiOrPronunciation": "Tabun",
                    "translation": "Probably / Perhaps",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "多分、大丈夫です。",
                    "exampleTranslation": "It is probably fine."
                },
                {
                    "word": "てんきよほう",
                    "romajiOrPronunciation": "Tenki yohou",
                    "translation": "Weather forecast",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "天気予報を見ました。",
                    "exampleTranslation": "I watched the weather forecast."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Plain Form + でしょう (70-80% certainty) vs. かもしれません (50% possibility)",
                    "explanation": "Attach plain forms directly to でしょう or かもしれません to indicate degrees of likelihood.",
                    "examples": [
                        "雨が降るでしょう。(It will probably rain.)",
                        "雪が降るかもしれません。(It might snow.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "News Reporter",
                    "text": "東京の明日の天気は午後から雨が降るでしょう。",
                    "romajiOrPronunciation": "Toukyou no ashita no tenki wa gogo kara ame ga furu deshou.",
                    "translation": "Tomorrow's weather in Tokyo will probably bring rain from the afternoon."
                },
                {
                    "speaker": "Commuter",
                    "text": "傘を持って行ったほうがいいですね。",
                    "romajiOrPronunciation": "Kasa o motte itta hou ga ii desu ne.",
                    "translation": "It would be better to take an umbrella then."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-q9",
                    "type": "multiple_choice",
                    "prompt": "Which ending expresses 'might / perhaps'?",
                    "options": [
                        "かもしれません",
                        "でしょう",
                        "てください",
                        "たいです"
                    ],
                    "correctAnswer": "かもしれません",
                    "explanation": "'〜kamoshiremasen' indicates a 50% possibility that something might happen."
                }
            ]
        },
        {
            "id": "ja-n3-u7-01",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Opinions, Intentions & Trying Out (思考・意図・試行)",
            "unitDescription": "Express nuanced personal opinions (〜と思う), future plans (〜つもり), and attempts (〜てみる).",
            "title": "Expressing Thoughts & Quotations: 〜とおもう (To omou)",
            "description": "Express opinions politely: 'Nihon no seikatsu wa benri da to omoimasu'.",
            "category": "Opinions & Discourse",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Express opinions using Plain Form + と思う and quote others using と言っていました.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:15",
            "vocabulary": [
                {
                    "word": "おもいます",
                    "romajiOrPronunciation": "Omoimasu",
                    "translation": "To think",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "この映画は面白いと思います。",
                    "exampleTranslation": "I think this movie is interesting."
                },
                {
                    "word": "いけん",
                    "romajiOrPronunciation": "Iken",
                    "translation": "Opinion",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "あなたの意見を聞かせてください。",
                    "exampleTranslation": "Please let me hear your opinion."
                },
                {
                    "word": "さんせい",
                    "romajiOrPronunciation": "Sansei",
                    "translation": "Agreement / Approval",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "その計画に賛成です。",
                    "exampleTranslation": "I agree with that plan."
                },
                {
                    "word": "たいせつ",
                    "romajiOrPronunciation": "Taisetsu",
                    "translation": "Important / Precious",
                    "partOfSpeech": "Na-adj",
                    "exampleSentence": "健康が一番大切だと思います。",
                    "exampleTranslation": "I think health is the most important."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Plain Form + と思います (I think that...)",
                    "explanation": "Japanese thoughts, quotes, and opinions require the plain form before the quotation particle と.",
                    "examples": [
                        "明日、雨が降ると思います。(I think it will rain tomorrow.)",
                        "田中さんは来ないと思います。(I think Mr. Tanaka won't come.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Ken",
                    "text": "日本の生活はどうですか？",
                    "romajiOrPronunciation": "Nihon no seikatsu wa dou desu ka?",
                    "translation": "How is life in Japan?"
                },
                {
                    "speaker": "Elena",
                    "text": "とても安全で便利だと思います。電車も時間通りに来ますね。",
                    "romajiOrPronunciation": "Totemo anzen de benri da to omoimasu. Densha mo jikandouri ni kimasu ne.",
                    "translation": "I think it is very safe and convenient. The trains arrive on time, too."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I think Japanese is interesting'?",
                    "options": [
                        "日本語は面白いと思います",
                        "日本語は面白いです",
                        "日本語を面白くします",
                        "日本語が面白いでしょう"
                    ],
                    "correctAnswer": "日本語は面白いと思います",
                    "explanation": "Plain form '面白い' + 'と思います' expresses personal opinion."
                }
            ]
        },
        {
            "id": "ja-n3-u7-02",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Opinions, Intentions & Trying Out (思考・意図・試行)",
            "unitDescription": "Express nuanced personal opinions (〜と思う), future plans (〜つもり), and attempts (〜てみる).",
            "title": "Plans & Intentions: 〜つもり & 〜よてい (Tsumori / Yotei)",
            "description": "Speak about study abroad, career goals, and upcoming scheduled events.",
            "category": "Future Intentions",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Express determined intentions using つもり and scheduled events using 予定.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "つもり",
                    "romajiOrPronunciation": "Tsumori",
                    "translation": "Intention / Plan",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "来年、日本へ留学するつもりです。",
                    "exampleTranslation": "I intend to study abroad in Japan next year."
                },
                {
                    "word": "よてい",
                    "romajiOrPronunciation": "Yotei",
                    "translation": "Schedule / Plan",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "来週、東京に出張する予定です。",
                    "exampleTranslation": "I am scheduled to go on a business trip to Tokyo next week."
                },
                {
                    "word": "りゅうがく",
                    "romajiOrPronunciation": "Ryuugaku",
                    "translation": "Study abroad",
                    "partOfSpeech": "Noun / Suru-verb",
                    "exampleSentence": "日本語学校に留学します。",
                    "exampleTranslation": "I will study abroad at a Japanese language school."
                },
                {
                    "word": "しょうらい",
                    "romajiOrPronunciation": "Shourai",
                    "translation": "Future",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "将来、日本で働きたいです。",
                    "exampleTranslation": "In the future, I want to work in Japan."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Verb Dictionary / Nai Form + つもりです (Intention)",
                    "explanation": "つもり reflects a personal decision or firm resolve. 予定 (yotei) refers to an official arrangement or scheduled appointment.",
                    "examples": [
                        "タバコをやめるつもりです。(I intend to quit smoking.)",
                        "会議は３時から始まる予定です。(The meeting is scheduled to start at 3:00.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Mentor",
                    "text": "卒業後はどうするつもりですか？",
                    "romajiOrPronunciation": "Sotsugyou-go wa dou suru tsumori desu ka?",
                    "translation": "What do you intend to do after graduation?"
                },
                {
                    "speaker": "Student",
                    "text": "日本のIT企業に就職するつもりです。面接の準備をしています。",
                    "romajiOrPronunciation": "Nihon no IT kigyou ni shuushoku suru tsumori desu. Mensetsu no junbi o shite imasu.",
                    "translation": "I intend to find employment at a Japanese IT company. I am preparing for interviews."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q2",
                    "type": "multiple_choice",
                    "prompt": "Which phrase expresses 'I intend to study abroad in Japan'?",
                    "options": [
                        "日本へ留学するつもりです",
                        "日本へ留学してください",
                        "日本へ留学したことがあります",
                        "日本へ留学してもいいです"
                    ],
                    "correctAnswer": "日本へ留学するつもりです",
                    "explanation": "Dictionary form '留学する' + 'つもりです' expresses clear personal intention."
                }
            ]
        },
        {
            "id": "ja-n3-u7-03",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Opinions, Intentions & Trying Out (思考・意図・試行)",
            "unitDescription": "Express nuanced personal opinions (〜と思う), future plans (〜つもり), and attempts (〜てみる).",
            "title": "Trying Something Out: 〜てみる (Te-miru)",
            "description": "Express trying an experience: 'Natto o tabete mimasu' (I'll try eating natto).",
            "category": "Trial & Experience",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Use Verb Te-form + みる to describe trying or attempting an activity.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:50",
            "vocabulary": [
                {
                    "word": "たべてみる",
                    "romajiOrPronunciation": "Tabete miru",
                    "translation": "To try eating",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "納豆を初めて食べてみます。",
                    "exampleTranslation": "I will try eating natto for the first time."
                },
                {
                    "word": "きてみる",
                    "romajiOrPronunciation": "Kite miru",
                    "translation": "To try wearing / try on",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "着物を着てみたいです。",
                    "exampleTranslation": "I want to try wearing a kimono."
                },
                {
                    "word": "ちょうせん",
                    "romajiOrPronunciation": "Chousen",
                    "translation": "Challenge / Attempt",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新しいことに挑戦してみます。",
                    "exampleTranslation": "I will try challenging myself to new things."
                },
                {
                    "word": "いってみる",
                    "romajiOrPronunciation": "Itte miru",
                    "translation": "To try going to",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "その有名なカフェに行ってみましょう。",
                    "exampleTranslation": "Let's try going to that famous cafe."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Verb Te-form + みる (To do and see what happens)",
                    "explanation": "みる here does not mean 'to look' with eyes; it means to test, sample, or attempt an action to see its result.",
                    "examples": [
                        "日本語で話してみます。(I will try speaking in Japanese.)",
                        "靴を履いてみてもいいですか？ (May I try on these shoes?)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Shop Staff",
                    "text": "こちらのジャケットはいかがですか？",
                    "romajiOrPronunciation": "Kochira no jaketto wa ikaga desu ka?",
                    "translation": "How about this jacket?"
                },
                {
                    "speaker": "Customer",
                    "text": "素敵ですね！試着して着てみてもいいですか？",
                    "romajiOrPronunciation": "Suteki desu ne! Shichaku shite kite mite mo ii desu ka?",
                    "translation": "It's lovely! May I try it on in the fitting room?"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q3",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I want to try wearing a kimono'?",
                    "options": [
                        "着物を着てみたいです",
                        "着物を着てください",
                        "着物を着ました",
                        "着物を着るでしょう"
                    ],
                    "correctAnswer": "着物を着てみたいです",
                    "explanation": "Te-form '着て' + 'みたいです' expresses wanting to try wearing something."
                }
            ]
        },
        {
            "id": "ja-n3-u8-01",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Complex Interactions & Everyday Keigo (受身・使役・敬語)",
            "unitDescription": "Passive voice (〜られる), causative voice (〜させる), and essential business Keigo.",
            "title": "Passive Voice: 〜られる (Rareru / Suffering & Praise)",
            "description": "Express being praised, spoken to, or affected by someone's action.",
            "category": "Passive Voice",
            "estimatedMinutes": 9,
            "xpReward": 45,
            "objective": "Form and understand regular and suffering passive voice constructions.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:50",
            "vocabulary": [
                {
                    "word": "ほめられました",
                    "romajiOrPronunciation": "Homeraremashita",
                    "translation": "Was praised",
                    "partOfSpeech": "Passive verb",
                    "exampleSentence": "先生に褒められました。",
                    "exampleTranslation": "I was praised by my teacher."
                },
                {
                    "word": "たのまれました",
                    "romajiOrPronunciation": "Tanomaremashita",
                    "translation": "Was asked / requested",
                    "partOfSpeech": "Passive verb",
                    "exampleSentence": "部長に仕事を頼まれました。",
                    "exampleTranslation": "I was asked by the department manager to do a job."
                },
                {
                    "word": "しかられました",
                    "romajiOrPronunciation": "Shikararemashita",
                    "translation": "Was scolded",
                    "partOfSpeech": "Passive verb",
                    "exampleSentence": "遅刻して怒られました。",
                    "exampleTranslation": "I was scolded for being late."
                },
                {
                    "word": "ぬすまれました",
                    "romajiOrPronunciation": "Nusumaremashita",
                    "translation": "Was stolen",
                    "partOfSpeech": "Passive verb",
                    "exampleSentence": "財布を盗まれてしまいました。",
                    "exampleTranslation": "My wallet was stolen (suffering passive)."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Passive Voice: [Victim/Receiver] は [Agent] に [Verb-られる]",
                    "explanation": "Ichidan verbs drop る and add られる. Godan verbs change the final -u sound to -a and add れる. In Japanese, 'suffering passive' expresses inconvenience caused by someone.",
                    "examples": [
                        "雨に降られました。(I got rained on.)",
                        "友達に笑われました。(I was laughed at by my friends.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Colleague",
                    "text": "プレゼン、大成功でしたね！",
                    "romajiOrPronunciation": "Purezen, daiseikou deshita ne!",
                    "translation": "The presentation was a huge success, wasn't it!"
                },
                {
                    "speaker": "Presenter",
                    "text": "ありがとうございます！社長にも熱意を褒められました。",
                    "romajiOrPronunciation": "Arigatou gozaimasu! Shachou ni mo netsui o homeraremashita.",
                    "translation": "Thank you! Even the company president praised my enthusiasm."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q4",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I was praised by the teacher' in Japanese?",
                    "options": [
                        "先生に褒められました",
                        "先生を褒めました",
                        "先生が褒めました",
                        "先生と褒め合いました"
                    ],
                    "correctAnswer": "先生に褒められました",
                    "explanation": "'Sensei ni' (by teacher) + 'homeraremashita' (was praised)."
                }
            ]
        },
        {
            "id": "ja-n3-u8-02",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Complex Interactions & Everyday Keigo (受身・使役・敬語)",
            "unitDescription": "Passive voice (〜られる), causative voice (〜させる), and essential business Keigo.",
            "title": "Causative Form: 〜させる (Saseru / Make or Let Do)",
            "description": "Express making someone do something or permitting them to do something.",
            "category": "Causative Voice",
            "estimatedMinutes": 9,
            "xpReward": 45,
            "objective": "Form causative verbs and distinguish between forcing and granting permission.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:30",
            "vocabulary": [
                {
                    "word": "たべさせます",
                    "romajiOrPronunciation": "Tabesasemasu",
                    "translation": "To make/let someone eat",
                    "partOfSpeech": "Causative verb",
                    "exampleSentence": "子供に野菜を食べさせます。",
                    "exampleTranslation": "I make my child eat vegetables."
                },
                {
                    "word": "いかせます",
                    "romajiOrPronunciation": "Ikasemasu",
                    "translation": "To let/make someone go",
                    "partOfSpeech": "Causative verb",
                    "exampleSentence": "息子を塾に行かせます。",
                    "exampleTranslation": "I send my son to cram school."
                },
                {
                    "word": "てつだわせます",
                    "romajiOrPronunciation": "Tetsudawasemasu",
                    "translation": "To make someone help",
                    "partOfSpeech": "Causative verb",
                    "exampleSentence": "弟に掃除を手伝わせました。",
                    "exampleTranslation": "I made my younger brother help with cleaning."
                },
                {
                    "word": "およがせます",
                    "romajiOrPronunciation": "Oyogasemasu",
                    "translation": "To let/make someone swim",
                    "partOfSpeech": "Causative verb",
                    "exampleSentence": "プールで子供たちを泳がせます。",
                    "exampleTranslation": "I let the children swim in the pool."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Causative Voice: [Director] は [Target] に/を [Verb-させる]",
                    "explanation": "Ichidan verbs drop る and add させる. Godan verbs change final -u to -a and add せる. Combined with てください (〜させてください), it means 'Please let me do...'",
                    "examples": [
                        "私に自己紹介をさせてください。(Please let me introduce myself.)",
                        "質問させていただけますか？ (Could you please allow me to ask a question?)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Employee",
                    "text": "課長、このプロジェクトのリーダーを私にやらせてください！",
                    "romajiOrPronunciation": "Kachou, kono purojekuto no riidaa o watashi ni yarawete kudasai!",
                    "translation": "Section Chief, please let me serve as the leader for this project!"
                },
                {
                    "speaker": "Section Chief",
                    "text": "いい意気込みだね。ぜひやってみなさい。",
                    "romajiOrPronunciation": "Ii ikigomi da ne. Zehi yatte minasai.",
                    "translation": "That's great spirit. By all means, give it your best shot."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q5",
                    "type": "multiple_choice",
                    "prompt": "How do you politely ask 'Please let me introduce myself'?",
                    "options": [
                        "自己紹介をさせてください",
                        "自己紹介をしてください",
                        "自己紹介をします",
                        "自己紹介をみてください"
                    ],
                    "correctAnswer": "自己紹介をさせてください",
                    "explanation": "Causative 'させて' + 'ください' politely asks permission to perform an action."
                }
            ]
        },
        {
            "id": "ja-n3-u8-03",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Complex Interactions & Everyday Keigo (受身・使役・敬語)",
            "unitDescription": "Passive voice (〜られる), causative voice (〜させる), and essential business Keigo.",
            "title": "Essential Business Keigo: 敬語 (Sonkeigo & Kenjougo)",
            "description": "Master honorific respectful speech (Irassharu) and humble speech (Mousu).",
            "category": "Business Japanese & Etiquette",
            "estimatedMinutes": 10,
            "xpReward": 50,
            "objective": "Distinguish between Sonkeigo (elevating customer) and Kenjougo (lowering oneself).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "7:15",
            "vocabulary": [
                {
                    "word": "いらっしゃいます",
                    "romajiOrPronunciation": "Irasshaimasu",
                    "translation": "To be / go / come (Honorific Sonkeigo)",
                    "partOfSpeech": "Keigo verb",
                    "exampleSentence": "社長はオフィスにいらっしゃいますか？",
                    "exampleTranslation": "Is the company president in the office?"
                },
                {
                    "word": "もうします",
                    "romajiOrPronunciation": "Moushimasu",
                    "translation": "To say / be called (Humble Kenjougo)",
                    "partOfSpeech": "Keigo verb",
                    "exampleSentence": "私はスミスと申します。",
                    "exampleTranslation": "I am called Smith (humble)."
                },
                {
                    "word": "めしあがります",
                    "romajiOrPronunciation": "Meshiagarimasu",
                    "translation": "To eat / drink (Honorific Sonkeigo)",
                    "partOfSpeech": "Keigo verb",
                    "exampleSentence": "温かいお茶を召し上がってください。",
                    "exampleTranslation": "Please enjoy the warm tea (polite to customer)."
                },
                {
                    "word": "しょうしょうおまちください",
                    "romajiOrPronunciation": "Shoushou omachi kudasai",
                    "translation": "Please wait a moment (business)",
                    "partOfSpeech": "Business phrase",
                    "exampleSentence": "確認いたしますので、少々お待ちください。",
                    "exampleTranslation": "I will check, so please wait a moment."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Respectful (尊敬語 - Sonkeigo) vs. Humble (謙譲語 - Kenjougo)",
                    "explanation": "Sonkeigo elevates the actions of customers, superiors, and business partners. Kenjougo lowers your own actions to show humility.",
                    "examples": [
                        "行く (iku) ➔ いらっしゃる (Honorific for superior) vs 参る (Humble for self)",
                        "言う (iu) ➔ おっしゃる (Superior speaks) vs 申す (Self speaks)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Receptionist",
                    "text": "いらっしゃいませ。恐れ入りますが、お名前をお伺いしてもよろしいでしょうか？",
                    "romajiOrPronunciation": "Irasshaimase. Osoreirimasu ga, onamae o oukagai shite mo yoroshii deshou ka?",
                    "translation": "Welcome. Pardon me, but may I inquire your name?"
                },
                {
                    "speaker": "Client",
                    "text": "ABC商事の田中と申します。鈴木部長とお約束しております。",
                    "romajiOrPronunciation": "ABC Shouji no Tanaka to moushimasu. Suzuki-buchou to oyakusoku shite orimasu.",
                    "translation": "I am called Tanaka from ABC Trading. I have an appointment with Director Suzuki."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-q6",
                    "type": "multiple_choice",
                    "prompt": "How do you humbly state your name in a Japanese business setting?",
                    "options": [
                        "田中と申します",
                        "田中とおっしゃいます",
                        "田中といらっしゃいます",
                        "田中と召し上がります"
                    ],
                    "correctAnswer": "田中と申します",
                    "explanation": "'Moushimasu' is the humble form (Kenjougo) used for one's own name."
                }
            ]
        },
        {
            "id": "ja-n2-u9-01",
            "languageId": "japanese",
            "level": "JLPT N2",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Formal Discourse & Professional Nuance (論理・複合格助詞)",
            "unitDescription": "Formal newspaper and professional grammar structures: 〜に基づいて and 〜に伴って.",
            "title": "Actions Based Upon & Progression: 〜にもとづいて & 〜にともなって",
            "description": "Express basing decisions on principles and actions progressing with time.",
            "category": "Formal Compounds",
            "estimatedMinutes": 10,
            "xpReward": 50,
            "objective": "Understand and deploy 〜に基づいて (based upon) and 〜に伴って (in accordance with).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "7:30",
            "vocabulary": [
                {
                    "word": "もとづいて",
                    "romajiOrPronunciation": "Motozuite",
                    "translation": "Based upon",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "調査の結果に基づいて方針を決定します。",
                    "exampleTranslation": "We will determine the policy based on the survey results."
                },
                {
                    "word": "ともなって",
                    "romajiOrPronunciation": "Tomonatte",
                    "translation": "Along with / as a result of",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "技術の発展に伴って生活が豊かになりました。",
                    "exampleTranslation": "Along with technological development, our lives have become richer."
                },
                {
                    "word": "ほうしん",
                    "romajiOrPronunciation": "Houshin",
                    "translation": "Policy / Objective",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "会社の新方針を発表しました。",
                    "exampleTranslation": "We announced the company's new policy."
                },
                {
                    "word": "けっか",
                    "romajiOrPronunciation": "Kekka",
                    "translation": "Result / Outcome",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "実験の結果は良好でした。",
                    "exampleTranslation": "The outcome of the experiment was favorable."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Noun + に基づいて (Based on / In accordance with facts)",
                    "explanation": "Indicates the foundational data, legal premise, or experimental fact upon which an action or judgment is executed.",
                    "examples": [
                        "法律に基づいて公正に裁判を行います。(We conduct the trial fairly based on the law.)",
                        "アンケート結果に基づいて製品を改良しました。(We improved the product based on questionnaire results.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Executive",
                    "text": "今回の新規事業の予算案はどのように算出したのですか？",
                    "romajiOrPronunciation": "Konkai no shinki jigyou no yosan-an wa dono you ni sanshutsu shita no desu ka?",
                    "translation": "How did you calculate the budget proposal for this new business venture?"
                },
                {
                    "speaker": "Planner",
                    "text": "過去５年間の市場分析データに基づいて綿密に計算いたしました。",
                    "romajiOrPronunciation": "Kako gonenkan no shijou bunseki deeta ni motozuite menmitsu ni keisan itashimashita.",
                    "translation": "We calculated it meticulously based on market analysis data from the past five years."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n2-q1",
                    "type": "multiple_choice",
                    "prompt": "Fill in the blank: 'Jitsurei __ motozuite setsumei shimasu' (I will explain based on actual examples).",
                    "options": [
                        "に",
                        "で",
                        "を",
                        "から"
                    ],
                    "correctAnswer": "に",
                    "explanation": "The grammar pattern is fixed as '〜に基づいて' (ni motozuite)."
                }
            ]
        },
        {
            "id": "ja-n2-u9-02",
            "languageId": "japanese",
            "level": "JLPT N2",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Formal Discourse & Professional Nuance (論理・複合格助詞)",
            "unitDescription": "Formal newspaper and professional grammar structures: 〜に基づいて and 〜に伴って.",
            "title": "Strong Contrasts: 〜にもかかわらず (Despite / In Spite Of)",
            "description": "Express counter-expectations: 'Oogame ni mo kakawarazu...' (Despite heavy rain...).",
            "category": "Contrasting Logic",
            "estimatedMinutes": 10,
            "xpReward": 50,
            "objective": "Use 〜にもかかわらず to indicate surprise that an unexpected outcome occurred despite a condition.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "7:00",
            "vocabulary": [
                {
                    "word": "にもかかわらず",
                    "romajiOrPronunciation": "Ni mo kakawarazu",
                    "translation": "Despite / In spite of",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "悪天候にもかかわらず、多くの観客が集まりました。",
                    "exampleTranslation": "In spite of bad weather, a large audience gathered."
                },
                {
                    "word": "どりょく",
                    "romajiOrPronunciation": "Doryoku",
                    "translation": "Effort / Endeavor",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "懸命な努力にもかかわらず、試合に敗れました。",
                    "exampleTranslation": "Despite strenuous effort, we lost the match."
                },
                {
                    "word": "かんきゃく",
                    "romajiOrPronunciation": "Kankyaku",
                    "translation": "Spectators / Audience",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "スタジアムは満員の観客で熱気に包まれています。",
                    "exampleTranslation": "The stadium is enveloped in excitement with a packed crowd."
                },
                {
                    "word": "たいちょう",
                    "romajiOrPronunciation": "Taichou",
                    "translation": "Physical condition",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "体調が優れないにもかかわらず出勤しました。",
                    "exampleTranslation": "Despite not feeling well, he reported to work."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Plain Form / Noun + にもかかわらず (Despite / Regardless of)",
                    "explanation": "Marks a strong logical contradiction between condition A and the unexpected outcome B.",
                    "examples": [
                        "熱があるにもかかわらず、彼は休もうとしない。(Despite having a fever, he won't try to rest.)",
                        "初心者であるにもかかわらず、見事な演奏を披露した。(Despite being a beginner, they gave a magnificent performance.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Host",
                    "text": "本日は大雪にもかかわらず、お越しいただき誠にありがとうございます。",
                    "romajiOrPronunciation": "Honjitsu wa ooyuki ni mo kakawarazu, okoshi itadaki makoto ni arigatou gozaimasu.",
                    "translation": "Despite heavy snow today, thank you very much for coming."
                },
                {
                    "speaker": "Guest",
                    "text": "楽しみにしていた記念式典ですから、駆けつけましたよ。",
                    "romajiOrPronunciation": "Tanoshimi ni shite ita kinen shikiten desu kara, kaketsukemashita yo.",
                    "translation": "Because it was an anniversary ceremony I was looking forward to, I rushed right over."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n2-q2",
                    "type": "multiple_choice",
                    "prompt": "Which grammar pattern conveys 'Despite / In spite of'?",
                    "options": [
                        "にもかかわらず",
                        "につれて",
                        "にとって",
                        "について"
                    ],
                    "correctAnswer": "にもかかわらず",
                    "explanation": "'〜ni mo kakawarazu' indicates that an event happened despite expectations."
                }
            ]
        },
        {
            "id": "ja-n2-u9-03",
            "languageId": "japanese",
            "level": "JLPT N2",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Formal Discourse & Professional Nuance (論理・複合格助詞)",
            "unitDescription": "Formal newspaper and professional grammar structures: 〜に基づいて and 〜に伴って.",
            "title": "Reporting News & Sources: 〜によると & 〜とのことだ",
            "description": "Report verified information: 'Tenki yohou ni yoru to, ashita wa taifuu ga kimasu'.",
            "category": "Journalism & Reports",
            "estimatedMinutes": 9,
            "xpReward": 50,
            "objective": "Cite information sources formally and conclude sentences with reported speech markers.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:45",
            "vocabulary": [
                {
                    "word": "によると",
                    "romajiOrPronunciation": "Ni yoru to",
                    "translation": "According to",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "ニュースによると、来月から物価が下がるそうです。",
                    "exampleTranslation": "According to the news, prices will drop starting next month."
                },
                {
                    "word": "とのことだ",
                    "romajiOrPronunciation": "To no koto da",
                    "translation": "Reportedly / It is said that",
                    "partOfSpeech": "Sentence ending",
                    "exampleSentence": "全員無事救助されたとのことです。",
                    "exampleTranslation": "Reportedly, everyone was rescued safely."
                },
                {
                    "word": "ほうどう",
                    "romajiOrPronunciation": "Houdou",
                    "translation": "News report / Journalism",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "現地の報道機関が伝えています。",
                    "exampleTranslation": "Local journalism agencies are reporting it."
                },
                {
                    "word": "しょうげん",
                    "romajiOrPronunciation": "Shougen",
                    "translation": "Eyewitness testimony",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "目撃者の証言によると、犯人は黒い車に乗っていた。",
                    "exampleTranslation": "According to eyewitness testimony, the suspect was in a black car."
                }
            ],
            "grammarNotes": [
                {
                    "title": "[Source] によると (According to...) + そうだ / とのことだ",
                    "explanation": "Always pair the source marked by によると with a hearsay ending (そうだ, ということだ, とのことだ) at the end of the sentence.",
                    "examples": [
                        "専門家の話によると、予防が最も効果的だそうだ。(According to experts, prevention is most effective.)",
                        "関係者によると、プロジェクトは順調とのことだ。(According to those involved, the project is progressing smoothly.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Anchor",
                    "text": "気象庁の発表によると、台風15号は明朝未明に関東地方に最接近する見込みとのことです。",
                    "romajiOrPronunciation": "Kishouchou no happyou ni yoru to, taifuu juugogou wa myouchou mimei ni Kantou-chihou ni saisekkin suru mikomi to no koto desu.",
                    "translation": "According to the Meteorological Agency, Typhoon 15 is expected to make its closest approach to Kanto early tomorrow morning."
                },
                {
                    "speaker": "Citizen",
                    "text": "交通機関が乱れる可能性が高いので、早めに帰宅しましょう。",
                    "romajiOrPronunciation": "Koutsuu kikan ga midareru kanousei ga takai node, hayame ni kitaku shimashou.",
                    "translation": "Since public transit is likely to be disrupted, let's head home early."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n2-q3",
                    "type": "multiple_choice",
                    "prompt": "How do you cite a source formally: 'Shinbun ___ yoru to' (According to the newspaper)?",
                    "options": [
                        "に",
                        "で",
                        "を",
                        "へ"
                    ],
                    "correctAnswer": "に",
                    "explanation": "The source is always marked with 'によると' (ni yoru to)."
                }
            ]
        },
        {
            "id": "ja-n1-u10-01",
            "languageId": "japanese",
            "level": "JLPT N1",
            "unitNumber": 10,
            "unitTitle": "Unit 10: Literary & Advanced Mastery (高度な文法・洗練された表現)",
            "unitDescription": "Master native subtleties: 〜を皮切りに (starting with) and 〜ならでは (unique to).",
            "title": "Groundbreaking Beginnings: 〜を皮切りに (O kawakiri ni)",
            "description": "Express monumental kickoff events: 'Tokyo kouen o kawakiri ni zenkoku tsuaa ga hajimatta'.",
            "category": "High Formalism",
            "estimatedMinutes": 10,
            "xpReward": 60,
            "objective": "Master the literary construction 〜を皮切りに to express an event that sets off a series of developments.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "8:00",
            "vocabulary": [
                {
                    "word": "をかわきりに",
                    "romajiOrPronunciation": "O kawakiri ni",
                    "translation": "Starting with / kicking off with",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "東京公演を皮切りに、全国１０都市でのツアーがスタートします。",
                    "exampleTranslation": "Starting with the Tokyo performance, a nationwide 10-city tour will kick off."
                },
                {
                    "word": "ぜんこく",
                    "romajiOrPronunciation": "Zenkoku",
                    "translation": "Nationwide",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "全国で大規模なキャンペーンを展開する。",
                    "exampleTranslation": "We will roll out a large-scale campaign nationwide."
                },
                {
                    "word": "はってん",
                    "romajiOrPronunciation": "Hatten",
                    "translation": "Expansion / Development",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "事業の飛躍的な発展を遂げた。",
                    "exampleTranslation": "We achieved dramatic development of the business."
                },
                {
                    "word": "かいさい",
                    "romajiOrPronunciation": "Kaisai",
                    "translation": "Hosting / Holding an event",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "国際会議を開催いたします。",
                    "exampleTranslation": "We will host the international conference."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Noun + を皮切りに (して) (Starting with A, similar things expand rapidly)",
                    "explanation": "Expresses an initial milestone event that triggers a sequence of positive, energetic developments on a grand scale.",
                    "examples": [
                        "このヒット曲を皮切りに、彼女は世界的なスターへと駆け上がった。(Beginning with this hit single, she ascended to global stardom.)",
                        "東京での展示会を皮切りに、アジア各国で巡回展が行われます。(Starting with the Tokyo exhibition, traveling exhibitions will be held across Asia.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Producer",
                    "text": "来春の新作映画の公開スケジュールは確定しましたか？",
                    "romajiOrPronunciation": "Raishun no shinsaku eiga no koukai sukejuuru wa kakutei shimashita ka?",
                    "translation": "Has the release schedule for next spring's new movie been finalized?"
                },
                {
                    "speaker": "Director",
                    "text": "はい。カンヌ映画祭での上映を皮切りに、世界３０カ国で順次公開いたします。",
                    "romajiOrPronunciation": "Hai. Kannu eigasai de no jouei o kawakiri ni, sekai sanjuukakoku de junji koukai itashimasu.",
                    "translation": "Yes. Starting with its screening at the Cannes Film Festival, it will be released sequentially across 30 countries."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n1-q1",
                    "type": "multiple_choice",
                    "prompt": "Which expression describes an initial event that kicks off a nationwide or global sequence?",
                    "options": [
                        "〜を皮切りに",
                        "〜をきっかけに",
                        "〜をはじめとして",
                        "〜にしては"
                    ],
                    "correctAnswer": "〜を皮切りに",
                    "explanation": "'〜o kawakiri ni' is the formal N1 grammar explicitly describing a grand opening kickoff event."
                }
            ]
        },
        {
            "id": "ja-n1-u10-02",
            "languageId": "japanese",
            "level": "JLPT N1",
            "unitNumber": 10,
            "unitTitle": "Unit 10: Literary & Advanced Mastery (高度な文法・洗練された表現)",
            "unitDescription": "Master native subtleties: 〜を皮切りに (starting with) and 〜ならでは (unique to).",
            "title": "Uniqueness & Exclusivity: 〜ならでは (Naredewa)",
            "description": "Express distinctive qualities only possible with that entity: 'Kyoto naredewa no dentou'.",
            "category": "Exclusivity & Praise",
            "estimatedMinutes": 10,
            "xpReward": 60,
            "objective": "Express exclusive characteristics using Noun + ならでは(の) (uniquely possible because of).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "7:45",
            "vocabulary": [
                {
                    "word": "ならでは",
                    "romajiOrPronunciation": "Naredewa",
                    "translation": "Unique to / only possible with",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "これぞ老舗旅館ならではの心のこもったおもてなしです。",
                    "exampleTranslation": "This is truly the heartfelt hospitality unique to a venerable traditional ryokan."
                },
                {
                    "word": "おもてなし",
                    "romajiOrPronunciation": "Omotenashi",
                    "translation": "Selfless hospitality",
                    "partOfSpeech": "Cultural noun",
                    "exampleSentence": "日本のおもてなし文化に深く感銘を受けました。",
                    "exampleTranslation": "I was deeply impressed by Japan's hospitality culture."
                },
                {
                    "word": "しにせ",
                    "romajiOrPronunciation": "Shinise",
                    "translation": "Long-established / venerable store",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "創業三百年を誇る老舗の和菓子店です。",
                    "exampleTranslation": "A venerable traditional sweet shop boasting 300 years since founding."
                },
                {
                    "word": "みりょく",
                    "romajiOrPronunciation": "Miryoku",
                    "translation": "Charm / Fascination",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "四季折々の自然の美しさが日本の魅力です。",
                    "exampleTranslation": "The beauty of nature in each distinct season is Japan's charm."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Noun + ならでは (Unique to / Special characteristic of)",
                    "explanation": "Highlights a high-quality virtue or unique charm that can ONLY be experienced through the specific person, organization, or place mentioned.",
                    "examples": [
                        "プロならではの熟練した技に圧倒された。(I was overwhelmed by the skilled technique unique to a true professional.)",
                        "手作りならではの温かみがある。(There is a distinctive warmth unique to handmade items.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Traveler",
                    "text": "京都の町家でいただく京料理は、本当に風情がありますね。",
                    "romajiOrPronunciation": "Kyouto no machiya de itadaku Kyou-ryouri wa, hontou ni fuzei ga arimasu ne.",
                    "translation": "Dining on Kyoto cuisine inside a traditional machiya townhouse truly possesses great ambiance."
                },
                {
                    "speaker": "Connoisseur",
                    "text": "ええ、古都京都ならではの至福のひとときですね。",
                    "romajiOrPronunciation": "Ee, koto Kyouto naredewa no shifuku no hitotoki desu ne.",
                    "translation": "Indeed, it is a moment of pure bliss that is uniquely possible in the ancient capital of Kyoto."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n1-q2",
                    "type": "multiple_choice",
                    "prompt": "How do you praise 'Hospitality unique only to Japan'?",
                    "options": [
                        "日本ならではのおもてなし",
                        "日本にすぎないおもてなし",
                        "日本をめぐるおもてなし",
                        "日本に伴うおもてなし"
                    ],
                    "correctAnswer": "日本ならではのおもてなし",
                    "explanation": "'〜naredewa no' expresses special excellence unique to that subject."
                }
            ]
        },
        {
            "id": "ja-n1-u10-03",
            "languageId": "japanese",
            "level": "JLPT N1",
            "unitNumber": 10,
            "unitTitle": "Unit 10: Literary & Advanced Mastery (高度な文法・洗練された表現)",
            "unitDescription": "Master native subtleties: 〜を皮切りに (starting with) and 〜ならでは (unique to).",
            "title": "Inevitable Circumstances: 〜をよぎなくされる (O yoginaku sareru)",
            "description": "Express situations compelled by circumstance: 'Keikaku no henkou o yoginaku sareta'.",
            "category": "High Nuance",
            "estimatedMinutes": 10,
            "xpReward": 60,
            "objective": "Use 〜を余儀なくされる to express when someone is compelled by external forces to take an action against their will.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "8:10",
            "vocabulary": [
                {
                    "word": "よぎなくされる",
                    "romajiOrPronunciation": "Yoginaku sareru",
                    "translation": "To be forced / compelled into",
                    "partOfSpeech": "Grammar compound",
                    "exampleSentence": "予期せぬトラブルにより、計画の変更を余儀なくされました。",
                    "exampleTranslation": "Due to unexpected trouble, we were compelled to change the plan."
                },
                {
                    "word": "てったい",
                    "romajiOrPronunciation": "Tettai",
                    "translation": "Withdrawal / Pullout",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "採算悪化により市場からの撤退を余儀なくされた。",
                    "exampleTranslation": "Due to deteriorating profitability, they were forced into withdrawing from the market."
                },
                {
                    "word": "えんき",
                    "romajiOrPronunciation": "Enki",
                    "translation": "Postponement",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "悪天候によりロケットの打ち上げは延期を余儀なくされた。",
                    "exampleTranslation": "Due to adverse weather, the rocket launch was forced into postponement."
                },
                {
                    "word": "けつだん",
                    "romajiOrPronunciation": "Ketsudan",
                    "translation": "Decisive decision",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "苦渋の決断を下しました。",
                    "exampleTranslation": "We made an agonizing decision."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Noun + を余儀なくされる (To be forced to... / To leave no choice)",
                    "explanation": "Literary Japanese expression meaning external circumstances give the subject zero choice but to undertake an unfortunate action.",
                    "examples": [
                        "怪我のため、選手生命の引退を余儀なくされた。(Due to injury, he was compelled into retirement from athletics.)",
                        "資金不足から、プロジェクトの中止を余儀なくされた。(Due to lack of funds, they were forced to abort the project.)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Spokesperson",
                    "text": "大型台風の直撃が予想されるため、明日の便は欠航を余儀なくされました。",
                    "romajiOrPronunciation": "Oogata taifuu no chokugeki ga yosou sareru tame, ashita no bin wa kekkou o yoginaku saremashita.",
                    "translation": "Because a direct hit from a major typhoon is anticipated, tomorrow's flights were unfortunately forced into cancellation."
                },
                {
                    "speaker": "Passenger",
                    "text": "自然災害ですから仕方ありませんね。安全第一で振替便をお願いします。",
                    "romajiOrPronunciation": "Shizen saigai desu kara shikata arimasen ne. Anzen daiichi de furikaebin o onegaishimasu.",
                    "translation": "Because it's a natural disaster, it can't be helped. Safety first, please arrange a rescheduled flight."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n1-q3",
                    "type": "multiple_choice",
                    "prompt": "Which grammar pattern conveys being compelled by external forces into an unfortunate outcome?",
                    "options": [
                        "〜を余儀なくされた",
                        "〜を皮切りにした",
                        "〜を禁じ得ない",
                        "〜にほかならない"
                    ],
                    "correctAnswer": "〜を余儀なくされた",
                    "explanation": "'〜o yoginaku sareta' expresses being forced into a situation against one's desires."
                }
            ]
        }
  ],
  "korean": [
    {
      "id": "ko-u1-01",
      "languageId": "korean",
      "level": "TOPIK I (L1)",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Hangul",
      "unitDescription": "Scientific Hangul alphabet, respectful speech, and Seoul greetings.",
      "title": "Essential Greetings & Hangul Sounds (한글)",
      "description": "Master Annyeonghaseyo, Gamsahamnida, and basic bowing in Korea.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Greet anyone politely and thank them using standard Korean honorifics.",
      "vocabulary": [
        {
          "word": "안녕하세요",
          "romajiOrPronunciation": "Annyeonghaseyo",
          "translation": "Hello / Good day",
          "partOfSpeech": "Greeting",
          "exampleSentence": "안녕하세요, 만나서 반갑습니다.",
          "exampleTranslation": "Hello, nice to meet you."
        },
        {
          "word": "감사합니다",
          "romajiOrPronunciation": "Gamsahamnida",
          "translation": "Thank you (formal)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "도와주셔서 감사합니다.",
          "exampleTranslation": "Thank you for helping me."
        },
        {
          "word": "죄송합니다",
          "romajiOrPronunciation": "Joesonghamnida",
          "translation": "I am sorry (polite)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "늦어서 죄송합니다.",
          "exampleTranslation": "I'm sorry for being late."
        },
        {
          "word": "안녕히 가세요",
          "romajiOrPronunciation": "Annyeonghi gaseyo",
          "translation": "Goodbye (to one leaving)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "조심히 들어가세요, 안녕히 가세요!",
          "exampleTranslation": "Take care, goodbye!"
        }
      ],
      "grammarNotes": [
        {
          "title": "Goodbye in Korean: Gaseyo vs. Gyeseyo",
          "explanation": "Say '안녕히 가세요' (Go in peace) to someone who is leaving. Say '안녕히 계세요' (Stay in peace) when you are leaving while they stay.",
          "examples": [
            "안녕히 가세요 (They leave)",
            "안녕히 계세요 (You leave)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Minjun",
          "text": "안녕하세요! 제 이름은 민준입니다.",
          "translation": "Hello! My name is Minjun.",
          "romajiOrPronunciation": "Annyeonghaseyo! Je ireumeun Minjun-imnida."
        },
        {
          "speaker": "Jiyeon",
          "text": "안녕하세요 민준 씨! 반갑습니다.",
          "translation": "Hello Minjun! Nice to meet you.",
          "romajiOrPronunciation": "Annyeonghaseyo Minjun ssi! Bangapseumnida."
        }
      ],
      "exercises": [
        {
          "id": "ko1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Thank you' formally in Korean?",
          "options": [
            "안녕하세요",
            "감사합니다",
            "죄송합니다",
            "안녕히 가세요"
          ],
          "correctAnswer": "감사합니다",
          "explanation": "'Gamsahamnida' is formal thank you in Korean."
        },
        {
          "id": "ko1-q2",
          "type": "match_pairs",
          "prompt": "Match Korean phrases to their English translations:",
          "correctAnswer": [
            {
              "left": "안녕하세요",
              "right": "Hello"
            },
            {
              "left": "감사합니다",
              "right": "Thank you"
            },
            {
              "left": "죄송합니다",
              "right": "Sorry"
            },
            {
              "left": "반갑습니다",
              "right": "Nice to meet you"
            }
          ],
          "explanation": "Perfect Korean greeting matches!"
        }
      ]
    },
    {
      "id": "ko-u2-02",
      "languageId": "korean",
      "level": "TOPIK I (L1)",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Street Food & Daily Encounters",
      "unitDescription": "Ordering Korean street food, tteokbokki, kimbap, and Hongdae nightlife.",
      "title": "Ordering Food & Street Snacks (식당 주문)",
      "description": "Order delicious tteokbokki, iced americano, and water using 'juseyo'.",
      "category": "Food & Dining",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order food and drinks at Korean pojangmacha and cafés with '주세요'.",
      "vocabulary": [
        {
          "word": "이거 주세요",
          "romajiOrPronunciation": "Igeo juseyo",
          "translation": "Please give me this",
          "partOfSpeech": "Phrase",
          "exampleSentence": "이거 하나 주세요.",
          "exampleTranslation": "Please give me one of this."
        },
        {
          "word": "물",
          "romajiOrPronunciation": "Mul",
          "translation": "Water",
          "partOfSpeech": "Noun",
          "exampleSentence": "물 좀 주세요.",
          "exampleTranslation": "Please give me some water."
        },
        {
          "word": "얼마예요?",
          "romajiOrPronunciation": "Eolmayeyo?",
          "translation": "How much is it?",
          "partOfSpeech": "Question",
          "exampleSentence": "이 떡볶이 얼마예요?",
          "exampleTranslation": "How much is this tteokbokki?"
        }
      ],
      "grammarNotes": [
        {
          "title": "The Magic Word: 주세요 (Juseyo)",
          "explanation": "Attach '주세요' (please give me) directly to any noun to place an order: [Noun] + 주세요.",
          "examples": [
            "커피 주세요 (Coffee please)",
            "김밥 주세요 (Kimbap please)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Imo",
          "text": "어서 오세요! 뭐 드릴까요?",
          "translation": "Welcome! What can I get for you?",
          "romajiOrPronunciation": "Eoseo oseyo! Mwo deurilkkayo?"
        },
        {
          "speaker": "Son-nim",
          "text": "떡볶이 1인분이랑 김밥 주세요.",
          "translation": "One portion of tteokbokki and kimbap please.",
          "romajiOrPronunciation": "Tteokbokki il-inbun-irang gimbap juseyo."
        }
      ],
      "exercises": [
        {
          "id": "ko2-q1",
          "type": "multiple_choice",
          "prompt": "What does '주세요 (Juseyo)' mean?",
          "options": [
            "Where is it?",
            "Please give me",
            "I don't like it",
            "Thank you"
          ],
          "correctAnswer": "Please give me",
          "explanation": "'주세요' means 'please give me'."
        }
      ]
    },
    {
      "id": "ko-u2-03",
      "languageId": "korean",
      "level": "TOPIK I (L2)",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Street Food & Daily Encounters",
      "unitDescription": "Riding the Seoul Subway, asking directions, and buying T-Money cards.",
      "title": "Seoul Subway & Transport (지하철과 교통)",
      "description": "Find subway lines, transfer stations, and ask 'Eodiyeyo?'.",
      "category": "Travel & Transit",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Ask where a station or exit is and use transport vocabulary in Seoul.",
      "vocabulary": [
        {
          "word": "지하철역",
          "romajiOrPronunciation": "Jihacheol-yeok",
          "translation": "Subway station",
          "partOfSpeech": "Noun",
          "exampleSentence": "강남역이 어디예요?",
          "exampleTranslation": "Where is Gangnam Station?"
        },
        {
          "word": "어디예요?",
          "romajiOrPronunciation": "Eodiyeyo?",
          "translation": "Where is it?",
          "partOfSpeech": "Question",
          "exampleSentence": "화장실이 어디예요?",
          "exampleTranslation": "Where is the restroom?"
        },
        {
          "word": "오른쪽 / 왼쪽",
          "romajiOrPronunciation": "Oreunjjok / Oenjjok",
          "translation": "Right / Left",
          "partOfSpeech": "Direction",
          "exampleSentence": "오른쪽으로 가세요.",
          "exampleTranslation": "Please go to the right."
        }
      ],
      "grammarNotes": [
        {
          "title": "[Place] + 어디예요? (Where is...?)",
          "explanation": "Attach '어디예요?' to ask where any location or building is in Korea.",
          "examples": [
            "편의점이 어디예요? (Where is the convenience store?)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Tourist",
          "text": "실례합니다, 명동역 4번 출구가 어디예요?",
          "translation": "Excuse me, where is Myeongdong Station Exit 4?",
          "romajiOrPronunciation": "Sillyehamnida, Myeongdong-yeok sabeon chulgu-ga eodiyeyo?"
        },
        {
          "speaker": "Local",
          "text": "저쪽으로 곧장 가시면 있어요.",
          "translation": "If you go straight that way, it's right there.",
          "romajiOrPronunciation": "Jeojjok-euro gotjang gasimyeon isseoyo."
        }
      ],
      "exercises": [
        {
          "id": "ko3-q1",
          "type": "multiple_choice",
          "prompt": "What does '어디예요? (Eodiyeyo?)' mean?",
          "options": [
            "Who is it?",
            "When is it?",
            "Where is it?",
            "Why is it?"
          ],
          "correctAnswer": "Where is it?",
          "explanation": "'어디예요?' means 'Where is it?'."
        }
      ]
    },
    {
      "id": "ko-u3-04",
      "languageId": "korean",
      "level": "TOPIK I (L2)",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Social & Everyday Expressions",
      "unitDescription": "Everyday polite verbs, daily routines, and popular K-Drama conversational phrases.",
      "title": "Daily Routine & Polite Verbs (-아요/어요)",
      "description": "Conjugate common verbs (eat, go, meet) into standard everyday polite speech.",
      "category": "Verbs & Daily Life",
      "estimatedMinutes": 7,
      "xpReward": 35,
      "objective": "Conjugate verbs ending in -다 into the polite present tense (-아요/어요).",
      "vocabulary": [
        {
          "word": "가요 (가다)",
          "romajiOrPronunciation": "Gayo (Gada)",
          "translation": "Go / I am going",
          "partOfSpeech": "Verb",
          "exampleSentence": "지금 학교에 가요.",
          "exampleTranslation": "I am going to school now."
        },
        {
          "word": "먹어요 (먹다)",
          "romajiOrPronunciation": "Meogeoyo (Meokda)",
          "translation": "Eat / I am eating",
          "partOfSpeech": "Verb",
          "exampleSentence": "친구랑 점심을 먹어요.",
          "exampleTranslation": "I eat lunch with a friend."
        },
        {
          "word": "만나요 (만나다)",
          "romajiOrPronunciation": "Mannayo (Mannada)",
          "translation": "Meet / I am meeting",
          "partOfSpeech": "Verb",
          "exampleSentence": "주말에 홍대에서 만나요.",
          "exampleTranslation": "Let's meet in Hongdae on the weekend."
        }
      ],
      "grammarNotes": [
        {
          "title": "The -아요/어요 Present Tense Rule",
          "explanation": "If the verb root ends in bright vowels ㅏ or ㅗ, add -아요 (가다 -> 가요). For all other vowels, add -어요 (먹다 -> 먹어요).",
          "examples": [
            "보다 -> 봐요 (See)",
            "공부하다 -> 공부해요 (Study)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Hana",
          "text": "오늘 뭐 해요?",
          "translation": "What are you doing today?",
          "romajiOrPronunciation": "Oneul mwo haeyo?"
        },
        {
          "speaker": "Junho",
          "text": "한국어를 공부해요. 그리고 영화를 봐요.",
          "translation": "I study Korean. And I watch a movie.",
          "romajiOrPronunciation": "Hangugeo-reul gongbuhaeyo. Geurigo yeonghwa-reul bwayo."
        }
      ],
      "exercises": [
        {
          "id": "ko4-q1",
          "type": "multiple_choice",
          "prompt": "What is the polite present form of '먹다 (to eat)'?",
          "options": [
            "먹어요",
            "먹아요",
            "먹해요",
            "먹세요"
          ],
          "correctAnswer": "먹어요",
          "explanation": "먹다 has a dark vowel ㅓ, so it takes -어요 -> 먹어요."
        }
      ]
    }
  ],
  "spanish": [
    {
      "id": "es-u1-01",
      "languageId": "spanish",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Spanish alphabet, rolling your Rs, and warm Latin greetings.",
      "title": "Saludos y Cortesía (Greetings & Courtesy)",
      "description": "Say hello, ask how people are doing, and say goodbye across Latin America and Spain.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Greet people naturally using '¡Hola! ¿Cómo estás?' and express gratitude.",
      "vocabulary": [
        {
          "word": "¡Hola!",
          "romajiOrPronunciation": "OH-lah",
          "translation": "Hello!",
          "partOfSpeech": "Interjection",
          "exampleSentence": "¡Hola! ¿Cómo estás?",
          "exampleTranslation": "Hello! How are you?"
        },
        {
          "word": "Muchas gracias",
          "romajiOrPronunciation": "MOO-chahs GRAH-syahs",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Muchas gracias por tu ayuda.",
          "exampleTranslation": "Thank you very much for your help."
        },
        {
          "word": "Por favor",
          "romajiOrPronunciation": "por fah-VOR",
          "translation": "Please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Un agua, por favor.",
          "exampleTranslation": "A water, please."
        },
        {
          "word": "Hasta luego",
          "romajiOrPronunciation": "AHS-tah LWAY-goh",
          "translation": "See you later",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Nos vemos mañana, ¡hasta luego!",
          "exampleTranslation": "See you tomorrow, see you later!"
        }
      ],
      "grammarNotes": [
        {
          "title": "¿Cómo estás? vs. ¿Cómo está?",
          "explanation": "Add the 's' for informal friends: '¿Cómo estás?' (tú). Drop the 's' for formal courtesy: '¿Cómo está?' (usted).",
          "examples": [
            "¿Cómo estás, María? (Tú)",
            "¿Cómo está, señor García? (Usted)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Carlos",
          "text": "¡Hola Sofia! ¿Qué tal?",
          "translation": "Hello Sofia! What's up?",
          "romajiOrPronunciation": "OH-lah Soh-fee-ah! Kay tahl?"
        },
        {
          "speaker": "Sofia",
          "text": "¡Muy bien Carlos! ¿Y tú?",
          "translation": "Very well Carlos! And you?",
          "romajiOrPronunciation": "Mwee byan Kar-lohs! Ee too?"
        }
      ],
      "exercises": [
        {
          "id": "es1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Thank you very much' in Spanish?",
          "options": [
            "De nada",
            "Muchas gracias",
            "Por favor",
            "Hasta luego"
          ],
          "correctAnswer": "Muchas gracias",
          "explanation": "'Muchas gracias' is thank you very much."
        },
        {
          "id": "es1-q2",
          "type": "arrange_order",
          "prompt": "Arrange: 'A coffee, please.'",
          "wordBank": [
            "favor.",
            "por",
            "Un",
            "café,"
          ],
          "correctAnswer": [
            "Un",
            "café,",
            "por",
            "favor."
          ],
          "explanation": "In Spanish: [Item] + por favor."
        }
      ]
    },
    {
      "id": "es-u2-02",
      "languageId": "spanish",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Dining & City Navigation",
      "unitDescription": "Tapas bars, ordering paella, asking directions in Madrid or Barcelona.",
      "title": "En el Restaurante & Tapas Bar",
      "description": "Order tapas, churros, and drinks with confidence.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order food using 'Quisiera...' or 'Para mí...' and ask for the check.",
      "vocabulary": [
        {
          "word": "La cuenta, por favor",
          "romajiOrPronunciation": "lah KWEN-tah, por fah-VOR",
          "translation": "The check, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "¿Nos trae la cuenta, por favor?",
          "exampleTranslation": "Could you bring us the check, please?"
        },
        {
          "word": "Para mí...",
          "romajiOrPronunciation": "PAH-rah mee",
          "translation": "For me...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Para mí, una paella de mariscos.",
          "exampleTranslation": "For me, a seafood paella."
        }
      ],
      "grammarNotes": [
        {
          "title": "Ser vs. Estar (Permanent vs Temporary)",
          "explanation": "'Ser' is for identity/origin ('Soy de España'). 'Estar' is for locations and states ('La comida está deliciosa').",
          "examples": [
            "Soy estudiante (Ser)",
            "Estoy en Madrid (Estar)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Camarero",
          "text": "¿Qué van a tomar?",
          "translation": "What are you going to have?",
          "romajiOrPronunciation": "Kay vahn ah toh-mar?"
        },
        {
          "speaker": "Cliente",
          "text": "Para mí, unas tapas de jamón y una copa de vino, por favor.",
          "translation": "For me, some ham tapas and a glass of wine, please.",
          "romajiOrPronunciation": "Pah-rah mee, oo-nahs tah-pahs..."
        }
      ],
      "exercises": [
        {
          "id": "es2-q1",
          "type": "multiple_choice",
          "prompt": "What do you ask to request the bill in Spain?",
          "options": [
            "La carta",
            "La cuenta",
            "La mesa",
            "El plato"
          ],
          "correctAnswer": "La cuenta",
          "explanation": "'La cuenta, por favor' is the bill."
        }
      ]
    },
    {
      "id": "es-u2-03",
      "languageId": "spanish",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Dining & City Navigation",
      "unitDescription": "Asking directions, taking Madrid metro, and exploring city streets.",
      "title": "Direcciones y la Ciudad (City Directions)",
      "description": "Find museums, hotels, and stations using '¿Dónde está...?'.",
      "category": "Travel & Transit",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Ask for directions and understand 'A la derecha', 'A la izquierda', and 'Todo recto'.",
      "vocabulary": [
        {
          "word": "¿Dónde está...?",
          "romajiOrPronunciation": "DOHN-day ehs-TAH",
          "translation": "Where is...?",
          "partOfSpeech": "Question",
          "exampleSentence": "¿Dónde está la estación de tren?",
          "exampleTranslation": "Where is the train station?"
        },
        {
          "word": "A la derecha",
          "romajiOrPronunciation": "ah lah day-RAY-chah",
          "translation": "To the right",
          "partOfSpeech": "Direction",
          "exampleSentence": "Gira a la derecha en la esquina.",
          "exampleTranslation": "Turn right at the corner."
        },
        {
          "word": "A la izquierda",
          "romajiOrPronunciation": "ah lah ees-KYAIR-dah",
          "translation": "To the left",
          "partOfSpeech": "Direction",
          "exampleSentence": "El hotel está a la izquierda.",
          "exampleTranslation": "The hotel is on the left."
        },
        {
          "word": "Todo recto",
          "romajiOrPronunciation": "TOH-doh REK-toh",
          "translation": "Straight ahead",
          "partOfSpeech": "Direction",
          "exampleSentence": "Sigue todo recto por dos calles.",
          "exampleTranslation": "Continue straight ahead for two blocks."
        }
      ],
      "grammarNotes": [
        {
          "title": "Estar for Locations",
          "explanation": "Always use 'Estar' (not 'Ser') when describing where places, people, or buildings are located.",
          "examples": [
            "¿Dónde está el baño?",
            "El museo está cerca."
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Turista",
          "text": "Disculpe, ¿dónde está el Museo del Prado?",
          "translation": "Excuse me, where is the Prado Museum?",
          "romajiOrPronunciation": "Dees-KOOL-pay, DOHN-day ehs-TAH..."
        },
        {
          "speaker": "Madrileño",
          "text": "Siga todo recto y gire a la izquierda en la plaza.",
          "translation": "Go straight ahead and turn left at the square.",
          "romajiOrPronunciation": "SEE-gah TOH-doh REK-toh ee HEE-ray..."
        }
      ],
      "exercises": [
        {
          "id": "es3-q1",
          "type": "multiple_choice",
          "prompt": "What does 'Todo recto' mean in Spanish?",
          "options": [
            "Turn around",
            "Straight ahead",
            "To the right",
            "Behind"
          ],
          "correctAnswer": "Straight ahead",
          "explanation": "'Todo recto' means straight ahead."
        }
      ]
    },
    {
      "id": "es-u3-04",
      "languageId": "spanish",
      "level": "A2",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Social & Family Life",
      "unitDescription": "Family relationships, daily habits, and expressing preferences with Gustar.",
      "title": "Familia y Pasatiempos (Me Gusta)",
      "description": "Talk about what you love doing and describe your relatives.",
      "category": "Interests & Family",
      "estimatedMinutes": 7,
      "xpReward": 35,
      "objective": "Use 'Me gusta' and 'Me encanta' with infinitive verbs and nouns.",
      "vocabulary": [
        {
          "word": "Me gusta...",
          "romajiOrPronunciation": "may GOOS-tah",
          "translation": "I like...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Me gusta viajar y aprender idiomas.",
          "exampleTranslation": "I like traveling and learning languages."
        },
        {
          "word": "Me encanta...",
          "romajiOrPronunciation": "may en-KAHN-tah",
          "translation": "I love / adore...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Me encanta la comida española.",
          "exampleTranslation": "I love Spanish food."
        },
        {
          "word": "Mi familia",
          "romajiOrPronunciation": "mee fah-MEE-lyah",
          "translation": "My family",
          "partOfSpeech": "Noun",
          "exampleSentence": "Mi familia es muy unida.",
          "exampleTranslation": "My family is very close."
        }
      ],
      "grammarNotes": [
        {
          "title": "The Special Verb 'Gustar'",
          "explanation": "'Gustar' literally means 'to be pleasing to'. So 'Me gusta la música' = Music is pleasing to me.",
          "examples": [
            "Me gusta el fútbol (Singular noun)",
            "Me gustan los libros (Plural noun)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Ana",
          "text": "¿Qué te gusta hacer los fines de semana?",
          "translation": "What do you like to do on weekends?",
          "romajiOrPronunciation": "Kay tay GOOS-tah ah-SAIR..."
        },
        {
          "speaker": "Diego",
          "text": "Me gusta leer, cocinar y salir con mis amigos.",
          "translation": "I like reading, cooking, and going out with my friends.",
          "romajiOrPronunciation": "May GOOS-tah lay-AIR, coh-see-NAHR..."
        }
      ],
      "exercises": [
        {
          "id": "es4-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'I like traveling'?",
          "options": [
            "Me gusta viajar",
            "Yo gusto viajar",
            "Me gusto viajar",
            "Gusto viajo"
          ],
          "correctAnswer": "Me gusta viajar",
          "explanation": "'Me gusta' + infinitive verb."
        }
      ]
    }
  ],
  "mandarin": [
    {
      "id": "zh-u1-01",
      "languageId": "mandarin",
      "level": "HSK 1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Pinyin Tones",
      "unitDescription": "The 4 tones of Mandarin, Pinyin Romanization, and Beijing courtesies.",
      "title": "First Words, Greetings & The 4 Tones (问候与声调)",
      "description": "Learn Nǐ hǎo, Xièxiè, and pronounce high, rising, dipping, and falling tones.",
      "category": "Basics & Tones",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Pronounce the four tones clearly and greet native speakers with 'Nǐ hǎo'.",
      "vocabulary": [
        {
          "word": "你好",
          "romajiOrPronunciation": "Nǐ hǎo",
          "translation": "Hello",
          "partOfSpeech": "Greeting",
          "exampleSentence": "你好！很高兴认识你。",
          "exampleTranslation": "Hello! Very happy to meet you."
        },
        {
          "word": "谢谢",
          "romajiOrPronunciation": "Xièxie",
          "translation": "Thank you",
          "partOfSpeech": "Phrase",
          "exampleSentence": "非常感谢你！",
          "exampleTranslation": "Thank you very much!"
        },
        {
          "word": "再见",
          "romajiOrPronunciation": "Zàijiàn",
          "translation": "Goodbye",
          "partOfSpeech": "Phrase",
          "exampleSentence": "明天见，再见！",
          "exampleTranslation": "See you tomorrow, goodbye!"
        },
        {
          "word": "对不起",
          "romajiOrPronunciation": "Duìbuqǐ",
          "translation": "Sorry / Excuse me",
          "partOfSpeech": "Phrase",
          "exampleSentence": "对不起，我迟到了。",
          "exampleTranslation": "Sorry, I am late."
        }
      ],
      "grammarNotes": [
        {
          "title": "The Four Mandarin Tones",
          "explanation": "1st tone (mā): high level. 2nd tone (má): rising. 3rd tone (mǎ): dip and rise. 4th tone (mà): sharp falling.",
          "examples": [
            "妈 mā (mother)",
            "麻 má (hemp)",
            "马 mǎ (horse)",
            "骂 mà (scold)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Li Wei",
          "text": "你好！你叫什么名字？",
          "translation": "Hello! What is your name?",
          "romajiOrPronunciation": "Nǐ hǎo! Nǐ jiào shénme míngzì?"
        },
        {
          "speaker": "David",
          "text": "你好！我叫大卫。很高兴认识你！",
          "translation": "Hello! My name is David. Nice to meet you!",
          "romajiOrPronunciation": "Nǐ hǎo! Wǒ jiào Dàwèi. Hěn gāoxìng rènshí nǐ!"
        }
      ],
      "exercises": [
        {
          "id": "zh1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Hello' in Mandarin Chinese?",
          "options": [
            "再见 (Zàijiàn)",
            "你好 (Nǐ hǎo)",
            "谢谢 (Xièxie)",
            "对不起 (Duìbuqǐ)"
          ],
          "correctAnswer": "你好 (Nǐ hǎo)",
          "explanation": "'Nǐ hǎo' (literally 'You good') is standard hello."
        },
        {
          "id": "zh1-q2",
          "type": "match_pairs",
          "prompt": "Match Chinese characters to English:",
          "correctAnswer": [
            {
              "left": "你好",
              "right": "Hello"
            },
            {
              "left": "谢谢",
              "right": "Thank you"
            },
            {
              "left": "再见",
              "right": "Goodbye"
            },
            {
              "left": "对不起",
              "right": "Sorry"
            }
          ],
          "explanation": "Great Chinese character recognition!"
        }
      ]
    },
    {
      "id": "zh-u2-02",
      "languageId": "mandarin",
      "level": "HSK 1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Food & Bargaining",
      "unitDescription": "Ordering Dim Sum, jasmine tea, asking prices in Renminbi (kuài).",
      "title": "Ordering Food & Dim Sum (点餐与茶)",
      "description": "Order tea, dumplings, and ask 'Duōshǎo qián?' in local Chinese restaurants.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order items using 'Wǒ yào...' and ask the bill with 'Mǎidān'.",
      "vocabulary": [
        {
          "word": "我要...",
          "romajiOrPronunciation": "Wǒ yào...",
          "translation": "I want / I would like...",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "我要一杯茶。",
          "exampleTranslation": "I would like a cup of tea."
        },
        {
          "word": "多少钱？",
          "romajiOrPronunciation": "Duōshǎo qián?",
          "translation": "How much money?",
          "partOfSpeech": "Question",
          "exampleSentence": "这个多少钱？",
          "exampleTranslation": "How much is this?"
        },
        {
          "word": "买单",
          "romajiOrPronunciation": "Mǎidān",
          "translation": "Pay the bill / Check",
          "partOfSpeech": "Verb",
          "exampleSentence": "服务员，买单！",
          "exampleTranslation": "Waiter, the bill please!"
        }
      ],
      "grammarNotes": [
        {
          "title": "Measure Word: 个 (gè)",
          "explanation": "In Chinese, numbers must have measure words before nouns: 一个茶 (yí gè chá = one tea), 两个苹果 (liǎng gè píngguǒ = two apples).",
          "examples": [
            "一个人 (one person)",
            "这个 (this one)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Fúwùyuán",
          "text": "您好，您要吃什么？",
          "translation": "Hello, what would you like to eat?",
          "romajiOrPronunciation": "Nín hǎo, nín yào chī shénme?"
        },
        {
          "speaker": "Gùkè",
          "text": "我要一笼小笼包和一壶绿茶，谢谢！",
          "translation": "I want a basket of soup dumplings and a pot of green tea, thanks!",
          "romajiOrPronunciation": "Wǒ yào yì lóng xiǎolóngbāo hé yì hú lǜchá, xièxie!"
        }
      ],
      "exercises": [
        {
          "id": "zh2-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'How much is it?' in Mandarin?",
          "options": [
            "什么名字？",
            "在哪里？",
            "多少钱？",
            "你是谁？"
          ],
          "correctAnswer": "多少钱？",
          "explanation": "'Duōshǎo qián?' asks how much money."
        }
      ]
    },
    {
      "id": "zh-u2-03",
      "languageId": "mandarin",
      "level": "HSK 2",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Food & Bargaining",
      "unitDescription": "Numbers 1-100, asking prices, and bargaining in local markets.",
      "title": "Numbers 1-100 & Bargaining (数字与还价)",
      "description": "Master Chinese numbers, money terms (kuài / yuán), and 'Tài guì le!'.",
      "category": "Shopping & Money",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Understand prices in Renminbi and bargain politely with 'Piányi diǎnr'.",
      "vocabulary": [
        {
          "word": "太贵了！",
          "romajiOrPronunciation": "Tài guì le!",
          "translation": "Too expensive!",
          "partOfSpeech": "Phrase",
          "exampleSentence": "太贵了，便宜一点儿吧！",
          "exampleTranslation": "Too expensive, a bit cheaper please!"
        },
        {
          "word": "便宜",
          "romajiOrPronunciation": "Piányi",
          "translation": "Cheap / Inexpensive",
          "partOfSpeech": "Adjective",
          "exampleSentence": "这家店的东西很便宜。",
          "exampleTranslation": "Things in this shop are very cheap."
        },
        {
          "word": "十、百、千",
          "romajiOrPronunciation": "Shí, Bǎi, Qiān",
          "translation": "Ten, Hundred, Thousand",
          "partOfSpeech": "Numbers",
          "exampleSentence": "一共一百块钱。",
          "exampleTranslation": "Altogether 100 kuai."
        }
      ],
      "grammarNotes": [
        {
          "title": "太...了 (Tài... le: Too / Extremely)",
          "explanation": "Put any adjective between '太' and '了' to express 'too much': 太贵了 (too expensive), 太好了 (too good/great!).",
          "examples": [
            "太热了 (Too hot)",
            "太漂亮了 (Extremely beautiful)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Mǎijiā",
          "text": "老板，这件衣服多少钱？",
          "translation": "Boss, how much is this shirt?",
          "romajiOrPronunciation": "Lǎobǎn, zhè jiàn yīfu duōshǎo qián?"
        },
        {
          "speaker": "Lǎobǎn",
          "text": "一百五十块。",
          "translation": "150 kuai.",
          "romajiOrPronunciation": "Yì bǎi wǔshí kuài."
        },
        {
          "speaker": "Mǎijiā",
          "text": "太贵了！一百块可以吗？",
          "translation": "Too expensive! 100 kuai okay?",
          "romajiOrPronunciation": "Tài guì le! Yì bǎi kuài kěyǐ ma?"
        }
      ],
      "exercises": [
        {
          "id": "zh3-q1",
          "type": "multiple_choice",
          "prompt": "What does '太贵了！ (Tài guì le!)' mean?",
          "options": [
            "Too cheap!",
            "Too delicious!",
            "Too expensive!",
            "Too late!"
          ],
          "correctAnswer": "Too expensive!",
          "explanation": "'Tài guì le!' means too expensive."
        }
      ]
    },
    {
      "id": "zh-u3-04",
      "languageId": "mandarin",
      "level": "HSK 2",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Daily Routine & Places",
      "unitDescription": "Telling time, calendar days, and asking directions to the high-speed train.",
      "title": "Time, Dates & Daily Routine (时间与日程)",
      "description": "Say what time it is (diǎn), days of the week (xīngqī), and arrange meetings.",
      "category": "Time & Calendar",
      "estimatedMinutes": 7,
      "xpReward": 35,
      "objective": "Ask and state the time and make plans for tomorrow or next week.",
      "vocabulary": [
        {
          "word": "现在几点？",
          "romajiOrPronunciation": "Xiànzài jǐ diǎn?",
          "translation": "What time is it now?",
          "partOfSpeech": "Question",
          "exampleSentence": "现在几点了？现在三点半。",
          "exampleTranslation": "What time is it now? It is 3:30."
        },
        {
          "word": "今天 / 明天",
          "romajiOrPronunciation": "Jīntiān / Míngtiān",
          "translation": "Today / Tomorrow",
          "partOfSpeech": "Time word",
          "exampleSentence": "明天我们去北京。",
          "exampleTranslation": "Tomorrow we go to Beijing."
        },
        {
          "word": "星期一",
          "romajiOrPronunciation": "Xīngqī yī",
          "translation": "Monday",
          "partOfSpeech": "Time word",
          "exampleSentence": "星期一我有汉语课。",
          "exampleTranslation": "I have Chinese class on Monday."
        }
      ],
      "grammarNotes": [
        {
          "title": "Chinese Time Word Placement",
          "explanation": "Time words in Mandarin always come before the main verb or at the very beginning of the sentence: [Subject] + [Time] + [Verb].",
          "examples": [
            "我明天去中国 (I go to China tomorrow)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Wang",
          "text": "明天你什么时候有空？",
          "translation": "When are you free tomorrow?",
          "romajiOrPronunciation": "Míngtiān nǐ shénme shíhou yǒu kòng?"
        },
        {
          "speaker": "Zhang",
          "text": "下午两点以后都可以。",
          "translation": "Any time after 2:00 PM is fine.",
          "romajiOrPronunciation": "Xiàwǔ liǎng diǎn yǐhòu dōu kěyǐ."
        }
      ],
      "exercises": [
        {
          "id": "zh4-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'What time is it now?' in Chinese?",
          "options": [
            "你在哪里？",
            "现在几点？",
            "多少钱？",
            "你是谁？"
          ],
          "correctAnswer": "现在几点？",
          "explanation": "'Xiànzài jǐ diǎn?' is what time is it now."
        }
      ]
    }
  ],
  "russian": [
    {
      "id": "ru-u1-01",
      "languageId": "russian",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Cyrillic",
      "unitDescription": "Master the 33 letters of Cyrillic, hard/soft sounds, and Russian courtesies.",
      "title": "Greetings & Cyrillic Basics (Приветствия)",
      "description": "Learn Privet, Zdravstvuyte, and pronounce Cyrillic letters with confidence.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Greet people informally and formally and say thank you in Russian.",
      "vocabulary": [
        {
          "word": "Здравствуйте",
          "romajiOrPronunciation": "ZDRAH-stvooy-tye",
          "translation": "Hello (formal)",
          "partOfSpeech": "Greeting",
          "exampleSentence": "Здравствуйте, как ваши дела?",
          "exampleTranslation": "Hello, how are you doing?"
        },
        {
          "word": "Привет",
          "romajiOrPronunciation": "pree-VYET",
          "translation": "Hi / Hello (informal)",
          "partOfSpeech": "Greeting",
          "exampleSentence": "Привет, друг!",
          "exampleTranslation": "Hi, friend!"
        },
        {
          "word": "Спасибо",
          "romajiOrPronunciation": "spah-SEE-bah",
          "translation": "Thank you",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Большое спасибо за помощь.",
          "exampleTranslation": "Thank you very much for the help."
        },
        {
          "word": "Пожалуйста",
          "romajiOrPronunciation": "pah-ZHAH-loo-stah",
          "translation": "Please / You're welcome",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Кофе, пожалуйста.",
          "exampleTranslation": "A coffee, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Formal vs. Informal Hello",
          "explanation": "Use 'Привет' with close peers and friends. Always use 'Здравствуйте' with teachers, doctors, and strangers.",
          "examples": [
            "Привет, Анна! (Friends)",
            "Здравствуйте, профессор! (Formal)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Ivan",
          "text": "Здравствуйте! Меня зовут Иван.",
          "translation": "Hello! My name is Ivan.",
          "romajiOrPronunciation": "ZDRAH-stvooy-tye! Mee-NYAH zah-VOOT Ee-VAHN."
        },
        {
          "speaker": "Elena",
          "text": "Очень приятно! Я Елена.",
          "translation": "Pleased to meet you! I am Elena.",
          "romajiOrPronunciation": "OH-cheen pree-YAHT-nah! Yah Yeh-LEH-nah."
        }
      ],
      "exercises": [
        {
          "id": "ru1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Thank you' in Russian?",
          "options": [
            "Привет",
            "Спасибо",
            "Пожалуйста",
            "Да"
          ],
          "correctAnswer": "Спасибо",
          "explanation": "'Спасибо' (Spasibo) is thank you."
        },
        {
          "id": "ru1-q2",
          "type": "match_pairs",
          "prompt": "Match Cyrillic words to English:",
          "correctAnswer": [
            {
              "left": "Привет",
              "right": "Hi"
            },
            {
              "left": "Спасибо",
              "right": "Thank you"
            },
            {
              "left": "Пожалуйста",
              "right": "Please"
            },
            {
              "left": "До свидания",
              "right": "Goodbye"
            }
          ],
          "explanation": "Great Cyrillic reading skills!"
        }
      ]
    },
    {
      "id": "ru-u1-02",
      "languageId": "russian",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Cyrillic",
      "unitDescription": "Pronunciation of Cyrillic letters, stress marks, and counting in rubles.",
      "title": "Cyrillic Alphabet & Numbers 1–100 (Алфавит и числа)",
      "description": "Read Russian signs, menus, and count effortlessly from 1 to 100.",
      "category": "Phonetics & Numbers",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Pronounce all 33 Cyrillic letters and count 1 to 100.",
      "vocabulary": [
        {
          "word": "Один, Два, Три",
          "romajiOrPronunciation": "ah-DEEN, DVAH, TREE",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Один кофе, пожалуйста.",
          "exampleTranslation": "One coffee, please."
        },
        {
          "word": "Сколько это стоит?",
          "romajiOrPronunciation": "SKOHL-kah EH-tah STOH-eet?",
          "translation": "How much does it cost?",
          "partOfSpeech": "Question",
          "exampleSentence": "Скажите, сколько это стоит?",
          "exampleTranslation": "Tell me, how much does this cost?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Russian Vowel Reduction (O -> A)",
          "explanation": "When the letter 'О' is not stressed in a Russian word, it is pronounced like a soft 'A' (e.g., Спасибо = spah-SEE-bah).",
          "examples": [
            "Хорошо -> khah-rah-SHOH"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Pokupatel",
          "text": "Сколько стоит этот чай?",
          "translation": "How much does this tea cost?",
          "romajiOrPronunciation": "SKOHL-kah STOH-eet EH-tot CHYE?"
        },
        {
          "speaker": "Prodavets",
          "text": "Сто рублей.",
          "translation": "One hundred rubles.",
          "romajiOrPronunciation": "STOH roob-LYAY."
        }
      ],
      "exercises": [
        {
          "id": "ru2-q1",
          "type": "multiple_choice",
          "prompt": "What does 'Сколько это стоит?' mean?",
          "options": [
            "Where is it?",
            "How much does it cost?",
            "What is your name?",
            "Good morning"
          ],
          "correctAnswer": "How much does it cost?",
          "explanation": "It asks the price."
        }
      ]
    },
    {
      "id": "ru-u2-03",
      "languageId": "russian",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Navigation",
      "unitDescription": "Café culture, borscht, blini, and Moscow metro navigation.",
      "title": "At the Café & Ordering Food (В кафе)",
      "description": "Order coffee, tea, and traditional Russian dishes with ease.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order food and drinks using 'Я буду...' or 'Мне, пожалуйста...'.",
      "vocabulary": [
        {
          "word": "Я буду...",
          "romajiOrPronunciation": "Yah BOO-doo",
          "translation": "I will have...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Я буду борщ и чай.",
          "exampleTranslation": "I will have borscht and tea."
        },
        {
          "word": "Счёт, пожалуйста",
          "romajiOrPronunciation": "Schyot, pah-ZHAH-loo-stah",
          "translation": "The bill, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Официант, счёт, пожалуйста.",
          "exampleTranslation": "Waiter, the bill please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Ordering: 'Я буду' vs. 'Мне пожалуйста'",
          "explanation": "'Я буду' literally means 'I will have' and is standard when choosing a meal.",
          "examples": [
            "Я буду кофе (I will have coffee)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Ofitsiant",
          "text": "Что вы будете заказывать?",
          "translation": "What will you be ordering?",
          "romajiOrPronunciation": "SHTOH vy BOO-dee-tye zah-KAH-zy-vaht?"
        },
        {
          "speaker": "Gost",
          "text": "Мне, пожалуйста, чёрный кофе и пирожок.",
          "translation": "For me, black coffee and a pastry, please.",
          "romajiOrPronunciation": "Mnyeh, pah-ZHAH-loo-stah..."
        }
      ],
      "exercises": [
        {
          "id": "ru3-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'The bill, please' in Russian?",
          "options": [
            "Меню, пожалуйста",
            "Счёт, пожалуйста",
            "Воду, пожалуйста",
            "Чай, пожалуйста"
          ],
          "correctAnswer": "Счёт, пожалуйста",
          "explanation": "'Счёт, пожалуйста' is the bill."
        }
      ]
    }
  ],
  "portuguese": [
    {
      "id": "pt-u1-01",
      "languageId": "portuguese",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Nasal vowels, warm Brazilian & European courtesies, and introductions.",
      "title": "Greetings & Salutations (Cumprimentos)",
      "description": "Learn Olá, Bom dia, and Obrigado/Obrigada in Lisbon and Rio de Janeiro.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Greet people politely and introduce yourself using 'Meu nome é...'.",
      "vocabulary": [
        {
          "word": "Olá / Oi",
          "romajiOrPronunciation": "oh-LAH / oy",
          "translation": "Hello / Hi",
          "partOfSpeech": "Greeting",
          "exampleSentence": "Olá! Tudo bem com você?",
          "exampleTranslation": "Hello! Is everything good with you?"
        },
        {
          "word": "Obrigado / Obrigada",
          "romajiOrPronunciation": "oh-bree-GAH-doo / dah",
          "translation": "Thank you (m / f)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Muito obrigado pela ajuda!",
          "exampleTranslation": "Thank you very much for the help!"
        },
        {
          "word": "Por favor",
          "romajiOrPronunciation": "poor fah-VOR",
          "translation": "Please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Um café expresso, por favor.",
          "exampleTranslation": "An espresso, please."
        },
        {
          "word": "Tchau / Até logo",
          "romajiOrPronunciation": "chow / ah-TEH LOH-goo",
          "translation": "Bye / See you soon",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Até amanhã, tchau!",
          "exampleTranslation": "See you tomorrow, bye!"
        }
      ],
      "grammarNotes": [
        {
          "title": "Obrigado vs. Obrigada",
          "explanation": "Men say 'Obrigado'. Women say 'Obrigada'. The ending agrees with the gender of the speaker.",
          "examples": [
            "Homem: Obrigado!",
            "Mulher: Obrigada!"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Mateus",
          "text": "Oi, tudo bem?",
          "translation": "Hi, how are you?",
          "romajiOrPronunciation": "Oy, TOO-doo ben?"
        },
        {
          "speaker": "Beatriz",
          "text": "Tudo bem! E você, como vai?",
          "translation": "Everything's good! And you, how are you doing?",
          "romajiOrPronunciation": "TOO-doo ben! Ee voh-SEH, KOH-moo vye?"
        }
      ],
      "exercises": [
        {
          "id": "pt1-q1",
          "type": "multiple_choice",
          "prompt": "If a female speaker says 'Thank you' in Portuguese, she says:",
          "options": [
            "Obrigado",
            "Obrigada",
            "Por favor",
            "De nada"
          ],
          "correctAnswer": "Obrigada",
          "explanation": "Female speakers say 'Obrigada'."
        }
      ]
    },
    {
      "id": "pt-u1-02",
      "languageId": "portuguese",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Nasal vowels (ã, õ), numbers 1-100, and self-introductions.",
      "title": "Pronunciation, Nasal Vowels & Numbers (Números)",
      "description": "Master the tilde (São Paulo, pão) and count in reais and euros.",
      "category": "Phonetics & Numbers",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Pronounce nasal vowels accurately and count from 1 to 100.",
      "vocabulary": [
        {
          "word": "Um, Dois, Três",
          "romajiOrPronunciation": "oom, doysh, trays",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Dois cafés, por favor.",
          "exampleTranslation": "Two coffees, please."
        },
        {
          "word": "Quanto custa?",
          "romajiOrPronunciation": "KWAHN-too KOOS-tah?",
          "translation": "How much does it cost?",
          "partOfSpeech": "Question",
          "exampleSentence": "Quanto custa esta garrafa?",
          "exampleTranslation": "How much does this bottle cost?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Nasal Vowels in Portuguese (ã, õ)",
          "explanation": "The tilde (~) indicates sound resonates through the nose, like in 'pão' (bread) and 'não' (no).",
          "examples": [
            "Pão (bread)",
            "Mão (hand)",
            "Não (no)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Cliente",
          "text": "Quanto custa o pastel de nata?",
          "translation": "How much is the custard tart?",
          "romajiOrPronunciation": "KWAHN-too KOOS-tah oo pahs-TEL deh NAH-tah?"
        },
        {
          "speaker": "Empregado",
          "text": "Custa um euro e cinquenta cêntimos.",
          "translation": "It costs one euro and fifty cents.",
          "romajiOrPronunciation": "KOOS-tah oom EH-oo-roo..."
        }
      ],
      "exercises": [
        {
          "id": "pt2-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'How much does it cost?' in Portuguese?",
          "options": [
            "Onde fica?",
            "Quanto custa?",
            "Quem é?",
            "Como vai?"
          ],
          "correctAnswer": "Quanto custa?",
          "explanation": "'Quanto custa?' asks the price."
        }
      ]
    },
    {
      "id": "pt-u2-03",
      "languageId": "portuguese",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Food & Daily Life",
      "unitDescription": "Café culture, pastéis de nata, pão de queijo, and ordering drinks.",
      "title": "No Café & Restaurante (Ordering Food)",
      "description": "Order coffee, fresh tropical juice, and local dishes with confidence.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order food and drinks using 'Eu queria...' or 'Um... por favor'.",
      "vocabulary": [
        {
          "word": "Eu queria...",
          "romajiOrPronunciation": "eh-oo keh-REE-ah",
          "translation": "I would like...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Eu queria um suco de maracujá.",
          "exampleTranslation": "I would like a passion fruit juice."
        },
        {
          "word": "A conta, por favor",
          "romajiOrPronunciation": "ah KOHN-tah, poor fah-VOR",
          "translation": "The check, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Pode trazer a conta, por favor?",
          "exampleTranslation": "Could you bring the check, please?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Eu queria vs. Eu quero",
          "explanation": "Use 'Eu queria' (imperfect subjunctive) for a warm and polite request rather than blunt 'Eu quero'.",
          "examples": [
            "Eu queria um café (Polite)",
            "Eu quero (Blunt)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Garçom",
          "text": "Boa tarde! O que vai desejar?",
          "translation": "Good afternoon! What would you like?",
          "romajiOrPronunciation": "BOH-ah TAR-jee! Oo kee vye deh-zeh-ZHAR?"
        },
        {
          "speaker": "Cliente",
          "text": "Eu queria uma porção de pão de queijo e um café expresso.",
          "translation": "I would like an order of cheese bread and an espresso.",
          "romajiOrPronunciation": "Eh-oo keh-REE-ah oo-mah poor-SOWNG..."
        }
      ],
      "exercises": [
        {
          "id": "pt3-q1",
          "type": "multiple_choice",
          "prompt": "What do you say to ask for the bill in Portuguese?",
          "options": [
            "A conta, por favor",
            "O cardápio, por favor",
            "A água, por favor",
            "O prato, por favor"
          ],
          "correctAnswer": "A conta, por favor",
          "explanation": "'A conta, por favor' is the bill."
        }
      ]
    }
  ],
  "italian": [
    {
      "id": "it-u1-01",
      "languageId": "italian",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Musical rhythm, double consonants, and authentic Italian greetings.",
      "title": "Ciao! Saluti & Piacere (Greetings & Introductions)",
      "description": "Learn Ciao, Buongiorno, and express pleasure in meeting someone in Rome.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Introduce yourself using 'Mi chiamo...' and greet at different times of day.",
      "vocabulary": [
        {
          "word": "Ciao",
          "romajiOrPronunciation": "CHOW",
          "translation": "Hello / Bye (informal)",
          "partOfSpeech": "Greeting",
          "exampleSentence": "Ciao Marco! Come stai?",
          "exampleTranslation": "Hi Marco! How are you?"
        },
        {
          "word": "Buongiorno",
          "romajiOrPronunciation": "bwon-ZHOR-noh",
          "translation": "Good morning / Good day",
          "partOfSpeech": "Greeting",
          "exampleSentence": "Buongiorno signora, benvenuta!",
          "exampleTranslation": "Good morning Madame, welcome!"
        },
        {
          "word": "Grazie mille",
          "romajiOrPronunciation": "GRAHT-syeh MEEL-leh",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Grazie mille per l'aiuto.",
          "exampleTranslation": "Thank you very much for the help."
        },
        {
          "word": "Per favore",
          "romajiOrPronunciation": "pair fah-VOH-reh",
          "translation": "Please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Un cappuccino, per favore.",
          "exampleTranslation": "A cappuccino, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "Ciao: Both Hello and Goodbye!",
          "explanation": "'Ciao' is the ultimate friendly word in Italian. Use it when meeting friends and when parting. For formal situations, use 'Buongiorno' or 'Arrivederci'.",
          "examples": [
            "Ciao! (When arriving)",
            "Ciao ciao! (When leaving)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Lorenzo",
          "text": "Ciao! Mi chiamo Lorenzo. E tu?",
          "translation": "Hi! My name is Lorenzo. And you?",
          "romajiOrPronunciation": "CHOW! Mee KYAH-moh Loh-REN-tsoh. Ay too?"
        },
        {
          "speaker": "Giulia",
          "text": "Piacere, Lorenzo! Io sono Giulia.",
          "translation": "Pleasure, Lorenzo! I am Giulia.",
          "romajiOrPronunciation": "Pyah-CHEH-reh, Loh-REN-tsoh! EE-oh SOH-noh JOOL-yah."
        }
      ],
      "exercises": [
        {
          "id": "it1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Thank you very much' in Italian?",
          "options": [
            "Prego",
            "Grazie mille",
            "Per favore",
            "Arrivederci"
          ],
          "correctAnswer": "Grazie mille",
          "explanation": "'Grazie mille' (literally 'a thousand thanks') means thank you very much."
        },
        {
          "id": "it1-q2",
          "type": "arrange_order",
          "prompt": "Arrange: 'A cappuccino, please.'",
          "wordBank": [
            "favore.",
            "per",
            "Un",
            "cappuccino,"
          ],
          "correctAnswer": [
            "Un",
            "cappuccino,",
            "per",
            "favore."
          ],
          "explanation": "In Italian: [Item] + per favore."
        }
      ]
    },
    {
      "id": "it-u1-02",
      "languageId": "italian",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Phonetics",
      "unitDescription": "Italian double consonants, rolling rhythm, and counting in euros.",
      "title": "Alphabet, Pronunciation & Numbers 1–100",
      "description": "Master C and G sounds, double letters (pizza, notte), and numbers.",
      "category": "Phonetics & Numbers",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Pronounce Italian vowels, double consonants, and count from 1 to 100.",
      "vocabulary": [
        {
          "word": "Uno, Due, Tre",
          "romajiOrPronunciation": "OO-noh, DOO-eh, TRAY",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "Due pizze margherite, per favore.",
          "exampleTranslation": "Two margherita pizzas, please."
        },
        {
          "word": "Quanto costa?",
          "romajiOrPronunciation": "KWAHN-toh KOHS-tah?",
          "translation": "How much does it cost?",
          "partOfSpeech": "Question",
          "exampleSentence": "Quanto costa questo gelato?",
          "exampleTranslation": "How much does this gelato cost?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Italian Double Consonants",
          "explanation": "Double consonants (tt, pp, zz) are held twice as long: 'penne' (quills/pasta) vs. 'pene' (completely different word!).",
          "examples": [
            "notte (night)",
            "pizza (pizza)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Cliente",
          "text": "Quanto costa un gelato a due gusti?",
          "translation": "How much is a two-flavor gelato?",
          "romajiOrPronunciation": "KWAHN-toh KOHS-tah oon jeh-LAH-toh..."
        },
        {
          "speaker": "Gelataio",
          "text": "Costa tre euro, signore.",
          "translation": "It costs three euros, sir.",
          "romajiOrPronunciation": "KOHS-tah tray EH-oo-roh, seen-YOH-reh."
        }
      ],
      "exercises": [
        {
          "id": "it2-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'How much does it cost?' in Italian?",
          "options": [
            "Dov'è?",
            "Quanto costa?",
            "Come ti chiami?",
            "Che ore sono?"
          ],
          "correctAnswer": "Quanto costa?",
          "explanation": "'Quanto costa?' asks the price."
        }
      ]
    },
    {
      "id": "it-u2-03",
      "languageId": "italian",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Bar & Food Culture",
      "unitDescription": "The art of Italian espresso, cornetto al pistacchio, and trattoria dining.",
      "title": "Al Bar Italiano: Espresso & Cornetto",
      "description": "Experience an authentic Italian bar morning ritual with local etiquette.",
      "category": "Dining & Food",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order coffee at the counter using 'Vorrei...' and ask for the receipt (scontrino).",
      "vocabulary": [
        {
          "word": "Vorrei...",
          "romajiOrPronunciation": "vohr-RAY",
          "translation": "I would like...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Vorrei un espresso e un cornetto.",
          "exampleTranslation": "I would like an espresso and a croissant."
        },
        {
          "word": "Il conto, per favore",
          "romajiOrPronunciation": "eel KOHN-toh, pair fah-VOH-reh",
          "translation": "The check, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "Possiamo avere il conto, per favore?",
          "exampleTranslation": "Can we have the check, please?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Vorrei (I would like)",
          "explanation": "Always say 'Vorrei' when ordering at an Italian bar or restaurant for polite and refined speech.",
          "examples": [
            "Vorrei un bicchiere d'acqua (A glass of water please)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Barista",
          "text": "Prego, cosa le porto?",
          "translation": "Welcome, what can I bring you?",
          "romajiOrPronunciation": "PRAY-goh, KOH-zah lay POHR-toh?"
        },
        {
          "speaker": "Cliente",
          "text": "Vorrei un caffè macchiato e un cornetto al pistacchio, grazie!",
          "translation": "I would like a macchiato and a pistachio croissant, thank you!",
          "romajiOrPronunciation": "Vohr-RAY oon kahf-FEH mahk-KYAH-toh..."
        }
      ],
      "exercises": [
        {
          "id": "it3-q1",
          "type": "multiple_choice",
          "prompt": "What is the polite way to say 'I would like' when ordering in Italian?",
          "options": [
            "Voglio",
            "Vorrei",
            "Dammi",
            "Prendo"
          ],
          "correctAnswer": "Vorrei",
          "explanation": "'Vorrei' (conditional) is the polite standard."
        }
      ]
    }
  ],
  "arabic": [
    {
      "id": "ar-u1-01",
      "languageId": "arabic",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Script",
      "unitDescription": "Right-to-left cursive script, Middle Eastern courtesies, and hospitalities.",
      "title": "Greetings & Marhaban (التحيات والترحيب)",
      "description": "Learn Marhaban, Shukran, and As-salamu alaykum in Modern Standard Arabic.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Exchange greetings respectfully and thank people in the Arab world.",
      "vocabulary": [
        {
          "word": "مرحباً",
          "romajiOrPronunciation": "Marhaban",
          "translation": "Hello / Welcome",
          "partOfSpeech": "Greeting",
          "exampleSentence": "مرحباً بك في دبي!",
          "exampleTranslation": "Welcome to Dubai!"
        },
        {
          "word": "السلام عليكم",
          "romajiOrPronunciation": "As-salamu alaykum",
          "translation": "Peace be upon you",
          "partOfSpeech": "Greeting",
          "exampleSentence": "السلام عليكم ورحمة الله.",
          "exampleTranslation": "Peace be upon you and God's mercy."
        },
        {
          "word": "شكراً جزيلاً",
          "romajiOrPronunciation": "Shukran jazeelan",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "شكراً جزيلاً على مساعدتك.",
          "exampleTranslation": "Thank you very much for your help."
        },
        {
          "word": "من فضلك",
          "romajiOrPronunciation": "Min fadlik",
          "translation": "Please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "قهوة عربية، من فضلك.",
          "exampleTranslation": "Arabic coffee, please."
        }
      ],
      "grammarNotes": [
        {
          "title": "The Peace Greeting (As-salamu alaykum)",
          "explanation": "When someone greets you with 'السلام عليكم' (As-salamu alaykum), the standard polite reply is 'وعليكم السلام' (Wa alaykum as-salam).",
          "examples": [
            "Greeting: As-salamu alaykum",
            "Reply: Wa alaykum as-salam"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Tariq",
          "text": "السلام عليكم! كيف حالك؟",
          "translation": "Peace be upon you! How are you?",
          "romajiOrPronunciation": "As-salamu alaykum! Kayfa haluk?"
        },
        {
          "speaker": "Fatima",
          "text": "وعليكم السلام! أنا بخير، والحمد لله.",
          "translation": "And upon you be peace! I am well, praise be to God.",
          "romajiOrPronunciation": "Wa alaykum as-salam! Ana bi-khayr, wal-hamdu lillah."
        }
      ],
      "exercises": [
        {
          "id": "ar1-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Thank you' in Arabic?",
          "options": [
            "مرحباً (Marhaban)",
            "شكراً (Shukran)",
            "نعم (Na'am)",
            "لا (La)"
          ],
          "correctAnswer": "شكراً (Shukran)",
          "explanation": "'Shukran' is thank you across the Arabic speaking world."
        },
        {
          "id": "ar1-q2",
          "type": "match_pairs",
          "prompt": "Match Arabic phrases to their English meanings:",
          "correctAnswer": [
            {
              "left": "مرحباً",
              "right": "Hello"
            },
            {
              "left": "شكراً",
              "right": "Thank you"
            },
            {
              "left": "من فضلك",
              "right": "Please"
            },
            {
              "left": "مع السلامة",
              "right": "Goodbye"
            }
          ],
          "explanation": "Mastery of essential Arabic courtesies!"
        }
      ]
    },
    {
      "id": "ar-u1-02",
      "languageId": "arabic",
      "level": "A1",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Script",
      "unitDescription": "The 28 Arabic letters, connected handwriting forms, and numbers.",
      "title": "Arabic Alphabet & Letter Joining (الحروف العربية)",
      "description": "Learn how Arabic letters connect in initial, medial, and final positions.",
      "category": "Script & Phonetics",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Identify initial, medial, and standalone Arabic letters.",
      "vocabulary": [
        {
          "word": "واحد، اثنان، ثلاثة",
          "romajiOrPronunciation": "Waahid, Ithnaan, Thalaatha",
          "translation": "One, Two, Three",
          "partOfSpeech": "Numbers",
          "exampleSentence": "ثلاثة فناجين قهوة، من فضلك.",
          "exampleTranslation": "Three cups of coffee, please."
        },
        {
          "word": "بكم هذا؟",
          "romajiOrPronunciation": "Bikam haatha?",
          "translation": "How much is this?",
          "partOfSpeech": "Question",
          "exampleSentence": "لو سمحت، بكم هذا؟",
          "exampleTranslation": "Excuse me, how much is this?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Letter Shapes: Initial, Medial, Final",
          "explanation": "Most Arabic letters connect like cursive: Baa (ب) at start looks like (بـ), in middle (ـبـ), at end (ـب).",
          "examples": [
            "باب (Baab = Door)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Customer",
          "text": "لو سمحت، بكم هذا الكتاب؟",
          "translation": "Excuse me, how much is this book?",
          "romajiOrPronunciation": "Law samaht, bikam haadha al-kitaab?"
        },
        {
          "speaker": "Seller",
          "text": "هذا الكتاب بعشرين درهماً.",
          "translation": "This book is twenty dirhams.",
          "romajiOrPronunciation": "Haadha al-kitaab bi-'ishreena dirhaman."
        }
      ],
      "exercises": [
        {
          "id": "ar2-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'How much is this?' in Arabic?",
          "options": [
            "أين هذا؟",
            "بكم هذا؟",
            "من هذا؟",
            "متى هذا؟"
          ],
          "correctAnswer": "بكم هذا؟",
          "explanation": "'Bikam haatha?' asks the price."
        }
      ]
    },
    {
      "id": "ar-u2-03",
      "languageId": "arabic",
      "level": "A1",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Souq & Coffee Culture",
      "unitDescription": "Exploring traditional souqs, spices, cardamom coffee, and hospitality.",
      "title": "In the Traditional Souq & Arabic Coffee (في السوق والقهوة)",
      "description": "Order Arabic coffee (Gahwa), dates, and navigate a bustling bazaar.",
      "category": "Dining & Souq",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order items using 'Ureed...' and ask for the bill using 'Al-hisaab'.",
      "vocabulary": [
        {
          "word": "أريد...",
          "romajiOrPronunciation": "Ureed...",
          "translation": "I want / I would like...",
          "partOfSpeech": "Phrase",
          "exampleSentence": "أريد شاياً بالنعناع، من فضلك.",
          "exampleTranslation": "I would like mint tea, please."
        },
        {
          "word": "الحساب، من فضلك",
          "romajiOrPronunciation": "Al-hisaab, min fadlik",
          "translation": "The bill, please",
          "partOfSpeech": "Phrase",
          "exampleSentence": "هل يمكنني الحصول على الحساب؟",
          "exampleTranslation": "Can I have the bill, please?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Polite Requests: 'Ureed' + 'Min fadlik'",
          "explanation": "'أريد' (Ureed) followed by your item and ending with 'من فضلك' (Min fadlik = please) forms a courteous order.",
          "examples": [
            "أريد ماءً، من فضلك (Water please)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Nadeel",
          "text": "أهلاً وسهلاً! ماذا تريد أن تشرب؟",
          "translation": "Welcome! What would you like to drink?",
          "romajiOrPronunciation": "Ahlan wa sahlan! Maadha tureed an tashrab?"
        },
        {
          "speaker": "Zaboon",
          "text": "أريد قهوة عربية مع التمر، شكراً لك.",
          "translation": "I want Arabic coffee with dates, thank you.",
          "romajiOrPronunciation": "Ureed qahwa 'arabiyya ma'a at-tamr, shukran lak."
        }
      ],
      "exercises": [
        {
          "id": "ar3-q1",
          "type": "multiple_choice",
          "prompt": "What does 'الحساب، من فضلك (Al-hisaab, min fadlik)' mean?",
          "options": [
            "The menu, please",
            "The bill, please",
            "The key, please",
            "The taxi, please"
          ],
          "correctAnswer": "The bill, please",
          "explanation": "'Al-hisaab' is the check/bill in Arabic."
        }
      ]
    }
  ]
};

export const ACHIEVEMENTS = [
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
