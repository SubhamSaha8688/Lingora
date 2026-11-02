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
      "id": "ja-u1-01",
      "languageId": "japanese",
      "level": "JLPT N5",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Kana",
      "unitDescription": "Hiragana syllabary, bow culture, and Tokyo everyday greetings.",
      "title": "First Greetings & Aisatsu (挨拶)",
      "description": "Learn Konnichiwa, Arigatou gozaimasu, and bowing etiquette.",
      "category": "Basics & Etiquette",
      "estimatedMinutes": 5,
      "xpReward": 25,
      "objective": "Properly greet in morning, afternoon, and evening with polite honorifics.",
      "vocabulary": [
        {
          "word": "こんにちは",
          "romajiOrPronunciation": "Konnichiwa",
          "translation": "Hello / Good afternoon",
          "partOfSpeech": "Greeting",
          "exampleSentence": "こんにちは、田中さん。",
          "exampleTranslation": "Hello, Mr. Tanaka."
        },
        {
          "word": "おはようございます",
          "romajiOrPronunciation": "Ohayou gozaimasu",
          "translation": "Good morning (polite)",
          "partOfSpeech": "Greeting",
          "exampleSentence": "先生、おはようございます。",
          "exampleTranslation": "Good morning, Teacher."
        },
        {
          "word": "ありがとうございます",
          "romajiOrPronunciation": "Arigatou gozaimasu",
          "translation": "Thank you very much",
          "partOfSpeech": "Phrase",
          "exampleSentence": "手伝ってくれて、ありがとうございます。",
          "exampleTranslation": "Thank you very much for helping me."
        },
        {
          "word": "すみません",
          "romajiOrPronunciation": "Sumimasen",
          "translation": "Excuse me / Sorry",
          "partOfSpeech": "Phrase",
          "exampleSentence": "すみません、お水をお願いします。",
          "exampleTranslation": "Excuse me, water please."
        }
      ],
      "grammarNotes": [
        {
          "title": "The Golden Phrase: Sumimasen (すみません)",
          "explanation": "'Sumimasen' works three ways: getting attention ('Excuse me'), apologizing ('Sorry'), and thanking someone for trouble taken.",
          "examples": [
            "すみません、駅はどこですか？ (Excuse me, where is the station?)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Tanaka",
          "text": "おはようございます、スミスさん。",
          "translation": "Good morning, Mr. Smith.",
          "romajiOrPronunciation": "Ohayou gozaimasu, Sumisu-san."
        },
        {
          "speaker": "Smith",
          "text": "おはようございます！今日もよろしくお願いします。",
          "translation": "Good morning! Let's do our best today too.",
          "romajiOrPronunciation": "Ohayou gozaimasu! Kyou mo yoroshiku onegaishimasu."
        }
      ],
      "exercises": [
        {
          "id": "ja1-q1",
          "type": "multiple_choice",
          "prompt": "Which greeting is used specifically in the morning?",
          "options": [
            "こんにちは",
            "おはようございます",
            "こんばんは",
            "さようなら"
          ],
          "correctAnswer": "おはようございます",
          "explanation": "'Ohayou gozaimasu' is morning greeting."
        },
        {
          "id": "ja1-q2",
          "type": "match_pairs",
          "prompt": "Match Japanese words to English:",
          "correctAnswer": [
            {
              "left": "こんにちは",
              "right": "Hello"
            },
            {
              "left": "すみません",
              "right": "Excuse me"
            },
            {
              "left": "ありがとうございます",
              "right": "Thank you"
            },
            {
              "left": "さようなら",
              "right": "Goodbye"
            }
          ],
          "explanation": "Excellent Kana matching!"
        }
      ]
    },
    {
      "id": "ja-u1-02",
      "languageId": "japanese",
      "level": "JLPT N5",
      "unitNumber": 1,
      "unitTitle": "Unit 1: Foundations & Kana",
      "unitDescription": "Hiragana syllabary, bow culture, and Tokyo everyday greetings.",
      "title": "Self Introductions & Jikoshoukai (自己紹介)",
      "description": "State your name, nationality, and profession using 'watashi wa... desu'.",
      "category": "Introductions",
      "estimatedMinutes": 6,
      "xpReward": 25,
      "objective": "Deliver a complete Japanese self-introduction using 'hajimemashite'.",
      "vocabulary": [
        {
          "word": "はじめまして",
          "romajiOrPronunciation": "Hajimemashite",
          "translation": "Nice to meet you (first time)",
          "partOfSpeech": "Phrase",
          "exampleSentence": "はじめまして、ジョンです。",
          "exampleTranslation": "Nice to meet you, I'm John."
        },
        {
          "word": "わたし",
          "romajiOrPronunciation": "Watashi",
          "translation": "I / Me",
          "partOfSpeech": "Pronoun",
          "exampleSentence": "わたしは学生です。",
          "exampleTranslation": "I am a student."
        },
        {
          "word": "よろしくお願いします",
          "romajiOrPronunciation": "Yoroshiku onegaishimasu",
          "translation": "Please treat me well",
          "partOfSpeech": "Phrase",
          "exampleSentence": "どうぞよろしくお願いします。",
          "exampleTranslation": "Please treat me well / Pleased to work with you."
        }
      ],
      "grammarNotes": [
        {
          "title": "Sentence Structure: A は B です",
          "explanation": "The particle 'は' (pronounced 'wa') marks the topic, and 'です' (desu) means 'is/am/are'.",
          "examples": [
            "わたし は エンジニア です。 (I am an engineer.)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Ken",
          "text": "はじめまして、ケンです。よろしくお願いします。",
          "translation": "Nice to meet you, I am Ken. Pleased to meet you.",
          "romajiOrPronunciation": "Hajimemashite, Ken desu. Yoroshiku onegaishimasu."
        },
        {
          "speaker": "Yuki",
          "text": "はじめまして、ユキです。こちらこそよろしくお願いします！",
          "translation": "Nice to meet you, I am Yuki. Pleased to meet you as well!",
          "romajiOrPronunciation": "Hajimemashite, Yuki desu. Kochira koso yoroshiku onegaishimasu!"
        }
      ],
      "exercises": [
        {
          "id": "ja2-q1",
          "type": "multiple_choice",
          "prompt": "What particle marks the topic of a Japanese sentence?",
          "options": [
            "を (o)",
            "は (wa)",
            "に (ni)",
            "で (de)"
          ],
          "correctAnswer": "は (wa)",
          "explanation": "The character は is pronounced 'wa' when used as a topic marker."
        }
      ]
    },
    {
      "id": "ja-u2-03",
      "languageId": "japanese",
      "level": "JLPT N5",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Konbini",
      "unitDescription": "Ordering food in restaurants, konbini shopping, and asking prices in yen.",
      "title": "Konbini & Ordering Food (コンビニ・注文)",
      "description": "Order onigiri, ramen, and iced coffee using 'o kudasai'.",
      "category": "Food & Konbini",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Order items politely in shops using '[Item] をください'.",
      "vocabulary": [
        {
          "word": "これ",
          "romajiOrPronunciation": "Kore",
          "translation": "This (near speaker)",
          "partOfSpeech": "Demonstrative",
          "exampleSentence": "これをください。",
          "exampleTranslation": "This one, please."
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
          "word": "いくらですか",
          "romajiOrPronunciation": "Ikura desu ka",
          "translation": "How much is it?",
          "partOfSpeech": "Question",
          "exampleSentence": "これはいくらですか？",
          "exampleTranslation": "How much is this?"
        }
      ],
      "grammarNotes": [
        {
          "title": "Kore, Sore, Are (これ・それ・あれ)",
          "explanation": "これ (kore) = near speaker, それ (sore) = near listener, あれ (are) = far from both.",
          "examples": [
            "これはいくらですか？",
            "あれは富士山です。"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Ten'in",
          "text": "いらっしゃいませ！温めますか？",
          "translation": "Welcome! Would you like it heated up?",
          "romajiOrPronunciation": "Irasshaimase! Atatamemasu ka?"
        },
        {
          "speaker": "Kyaku",
          "text": "はい、お願いします。あとお箸をください。",
          "translation": "Yes, please. Also, chopsticks please.",
          "romajiOrPronunciation": "Hai, onegaishimasu. Ato ohashi o kudasai."
        }
      ],
      "exercises": [
        {
          "id": "ja3-q1",
          "type": "multiple_choice",
          "prompt": "How do you ask 'How much is it?' in Japanese?",
          "options": [
            "どこですか",
            "いくらですか",
            "だれですか",
            "なんですか"
          ],
          "correctAnswer": "いくらですか",
          "explanation": "'Ikura desu ka' asks the price."
        }
      ]
    },
    {
      "id": "ja-u2-04",
      "languageId": "japanese",
      "level": "JLPT N5",
      "unitNumber": 2,
      "unitTitle": "Unit 2: Daily Life & Navigation",
      "unitDescription": "Navigate Tokyo transit, Shinjuku station, and ask directions in Japanese.",
      "title": "Asking Directions & Train Stations (駅・道案内)",
      "description": "Find train lines, ticket gates, and ask '...wa doko desu ka?'.",
      "category": "Travel & Transit",
      "estimatedMinutes": 6,
      "xpReward": 30,
      "objective": "Ask where landmarks and stations are and understand basic directions.",
      "vocabulary": [
        {
          "word": "えき",
          "romajiOrPronunciation": "Eki",
          "translation": "Train station",
          "partOfSpeech": "Noun",
          "exampleSentence": "新宿駅はどこですか？",
          "exampleTranslation": "Where is Shinjuku station?"
        },
        {
          "word": "どこ",
          "romajiOrPronunciation": "Doko",
          "translation": "Where",
          "partOfSpeech": "Question",
          "exampleSentence": "トイレはどこですか？",
          "exampleTranslation": "Where is the restroom?"
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
          "title": "The Location Question: [Place] はどこですか？",
          "explanation": "Attach 'はどこですか？' (wa doko desu ka) to any location to ask where it is.",
          "examples": [
            "地下鉄はどこですか？ (Where is the subway?)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Tourist",
          "text": "すみません、山手線のホームはどこですか？",
          "translation": "Excuse me, where is the Yamanote Line platform?",
          "romajiOrPronunciation": "Sumimasen, Yamanote-sen no hoomu wa doko desu ka?"
        },
        {
          "speaker": "Station Staff",
          "text": "階段を上がって、右側ですよ。",
          "translation": "Go up the stairs, it's on the right side.",
          "romajiOrPronunciation": "Kaidan o agatte, migi-gawa desu yo."
        }
      ],
      "exercises": [
        {
          "id": "ja4-q1",
          "type": "multiple_choice",
          "prompt": "What does 'どこ (Doko)' mean?",
          "options": [
            "Who",
            "When",
            "Where",
            "Why"
          ],
          "correctAnswer": "Where",
          "explanation": "'Doko' means where."
        }
      ]
    },
    {
      "id": "ja-u3-05",
      "languageId": "japanese",
      "level": "JLPT N4",
      "unitNumber": 3,
      "unitTitle": "Unit 3: Social & Daily Activities",
      "unitDescription": "Daily routines, time expressions, and the crucial Te-form (〜てください).",
      "title": "Te-form Verbs & Polite Requests (〜てください)",
      "description": "Learn to conjugate verbs into the te-form to make courteous everyday requests.",
      "category": "Grammar & Requests",
      "estimatedMinutes": 8,
      "xpReward": 35,
      "objective": "Form the te-form of Ichidan and Godan verbs and ask someone to do something politely.",
      "vocabulary": [
        {
          "word": "みてください",
          "romajiOrPronunciation": "Mite kudasai",
          "translation": "Please look",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "これを見てください。",
          "exampleTranslation": "Please look at this."
        },
        {
          "word": "たべてください",
          "romajiOrPronunciation": "Tabete kudasai",
          "translation": "Please eat",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "温かいうちに食べてください。",
          "exampleTranslation": "Please eat while it's warm."
        },
        {
          "word": "まってください",
          "romajiOrPronunciation": "Matte kudasai",
          "translation": "Please wait",
          "partOfSpeech": "Verb phrase",
          "exampleSentence": "ちょっと待ってください。",
          "exampleTranslation": "Please wait a moment."
        }
      ],
      "grammarNotes": [
        {
          "title": "Te-form + ください (Please do...)",
          "explanation": "The Te-form (〜て) + ください is the foundation of polite requests in Japanese.",
          "examples": [
            "書いてください (Please write)",
            "聞いてください (Please listen)"
          ]
        }
      ],
      "conversationDialogue": [
        {
          "speaker": "Teacher",
          "text": "教科書の２０ページを開けてください。",
          "translation": "Please open page 20 of the textbook.",
          "romajiOrPronunciation": "Kyoukasho no nijuu peeji o akete kudasai."
        },
        {
          "speaker": "Student",
          "text": "はい、わかりました！",
          "translation": "Yes, understood!",
          "romajiOrPronunciation": "Hai, wakarimashita!"
        }
      ],
      "exercises": [
        {
          "id": "ja5-q1",
          "type": "multiple_choice",
          "prompt": "How do you say 'Please wait a moment' in Japanese?",
          "options": [
            "ちょっと待ってください",
            "ちょっと見てください",
            "ちょっと食べてください",
            "ちょっと飲んでください"
          ],
          "correctAnswer": "ちょっと待ってください",
          "explanation": "'Chotto matte kudasai' means please wait a moment."
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
