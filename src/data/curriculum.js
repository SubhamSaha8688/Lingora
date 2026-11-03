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
            "unitTitle": "Unit 1: Foundations, Kana & Phonetics (五十音・発音)",
            "unitDescription": "Hiragana, Katakana, Tokyo pitch accent mechanics, and standard Japanese phonology.",
            "title": "Hiragana Syllabary & The 5 Pure Vowels (平仮名)",
            "description": "Master the 5 core Japanese vowels (A-I-U-E-O), Dakuten marks (がざだば), and Handakuten (ぱ).",
            "category": "Characters & Phonology",
            "estimatedMinutes": 5,
            "xpReward": 30,
            "objective": "Read and pronounce basic Hiragana syllables with authentic Tokyo mora timing.",
            "videoUrl": "https://www.youtube.com/watch?v=6p9Il_j0zjc",
            "videoDuration": "4:15",
            "vocabulary": [
                {
                    "word": "あめ (雨)",
                    "romajiOrPronunciation": "Ame",
                    "translation": "Rain",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "東京は今日、雨です。",
                    "exampleTranslation": "Tokyo is rainy today."
                },
                {
                    "word": "いえ (家)",
                    "romajiOrPronunciation": "Ie",
                    "translation": "House / Home",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "ここが私の家です。",
                    "exampleTranslation": "This is my house."
                },
                {
                    "word": "うみ (海)",
                    "romajiOrPronunciation": "Umi",
                    "translation": "Sea / Ocean",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "夏に海へ行きます。",
                    "exampleTranslation": "I go to the sea in summer."
                },
                {
                    "word": "えき (駅)",
                    "romajiOrPronunciation": "Eki",
                    "translation": "Train station",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新宿駅は大きいです。",
                    "exampleTranslation": "Shinjuku station is large."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Mora Rhythm & Equal Syllable Length",
                    "explanation": "Every Japanese Hiragana character takes up exactly one 'mora' (one equal musical beat). Unlike English, syllables are never stressed by volume; they are sustained with uniform duration.",
                    "examples": [
                        "あ-め (2 beats)",
                        "しん-じゅ-く (4 beats including ん)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Sensei",
                    "text": "あいうえお、リズムに合わせて読んでみましょう。",
                    "romajiOrPronunciation": "A-i-u-e-o, rizumu ni awasete yonde mimashou.",
                    "translation": "A-I-U-E-O, let's read them in rhythm together."
                },
                {
                    "speaker": "Student",
                    "text": "あ、い、う、え、お！音がはっきりしていますね。",
                    "romajiOrPronunciation": "A, i, u, e, o! Oto ga hakkiri shite imasu ne.",
                    "translation": "A, I, U, E, O! The sounds are very clear, aren't they?"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u1-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How many basic pure vowels does the Japanese language possess?",
                    "options": [
                        "5 (A, I, U, E, O)",
                        "7",
                        "3",
                        "12"
                    ],
                    "correctAnswer": "5 (A, I, U, E, O)",
                    "explanation": "Japanese phonology is founded strictly on the five pure vowels: A, I, U, E, and O."
                }
            ]
        },
        {
            "id": "ja-n5-u1-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations, Kana & Phonetics (五十音・発音)",
            "unitDescription": "Hiragana, Katakana, Tokyo pitch accent mechanics, and standard Japanese phonology.",
            "title": "Katakana & Foreign Loanwords (片仮名・外来語)",
            "description": "Master Katakana characters used for foreign loanwords, technical terms, and modern cuisine.",
            "category": "Characters & Loanwords",
            "estimatedMinutes": 5,
            "xpReward": 30,
            "objective": "Instantly recognize Katakana words on Japanese menus, street signs, and technology.",
            "videoUrl": "https://www.youtube.com/watch?v=s6DKRgtVLGA",
            "videoDuration": "4:30",
            "vocabulary": [
                {
                    "word": "コーヒー",
                    "romajiOrPronunciation": "Koohii",
                    "translation": "Coffee",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "温かいコーヒーをください。",
                    "exampleTranslation": "Hot coffee, please."
                },
                {
                    "word": "コンビニ",
                    "romajiOrPronunciation": "Konbini",
                    "translation": "Convenience store",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "コンビニでおにぎりを買います。",
                    "exampleTranslation": "I buy an onigiri at the convenience store."
                },
                {
                    "word": "ホテル",
                    "romajiOrPronunciation": "Hoteru",
                    "translation": "Hotel",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "ホテルは駅の近くです。",
                    "exampleTranslation": "The hotel is near the station."
                },
                {
                    "word": "パソコン",
                    "romajiOrPronunciation": "Pasokon",
                    "translation": "PC / Laptop",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新しいパソコンが欲しいです。",
                    "exampleTranslation": "I want a new personal computer."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Long Vowel Dash (ー) in Katakana",
                    "explanation": "In Katakana, the horizontal bar 'ー' extends the preceding vowel sound by exactly one mora. E.g., 'コー' is two beats, 'ヒー' is two beats (4 beats total: Ko-o-hi-i).",
                    "examples": [
                        "コーヒー (Coffee = 4 beats)",
                        "タクシー (Taxi = 4 beats)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Clerk",
                    "text": "いらっしゃいませ！ホットコーヒーでよろしいですか？",
                    "romajiOrPronunciation": "Irasshaimase! Hotto koohii de yoroshii desu ka?",
                    "translation": "Welcome! Would hot coffee be alright?"
                },
                {
                    "speaker": "Customer",
                    "text": "はい、ホットコーヒーを一つお願いします。",
                    "romajiOrPronunciation": "Hai, hotto koohii o hitotsu onegai shimasu.",
                    "translation": "Yes, one hot coffee, please."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u1-02-q1",
                    "type": "multiple_choice",
                    "prompt": "What does the horizontal mark 'ー' indicate in Katakana words?",
                    "options": [
                        "Extends the vowel sound by one mora beat",
                        "Makes the sound silent",
                        "Marks a glottal stop",
                        "Indicates a question"
                    ],
                    "correctAnswer": "Extends the vowel sound by one mora beat",
                    "explanation": "The chouonpu (ー) elongates the preceding vowel by one full beat."
                }
            ]
        },
        {
            "id": "ja-n5-u1-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations, Kana & Phonetics (五十音・発音)",
            "unitDescription": "Hiragana, Katakana, Tokyo pitch accent mechanics, and standard Japanese phonology.",
            "title": "Tokyo Pitch Accent & Native Intonation (高低アクセント)",
            "description": "Understand why Japanese pitch accent matters and avoid robotic flat English intonation.",
            "category": "Phonetics & Fluency",
            "estimatedMinutes": 5,
            "xpReward": 30,
            "objective": "Distinguish homophones and master natural Tokyo downstep patterns.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "はし (箸)",
                    "romajiOrPronunciation": "Háshi [Atamadaka]",
                    "translation": "Chopsticks (High-Low pitch)",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "お箸を使います。",
                    "exampleTranslation": "I use chopsticks."
                },
                {
                    "word": "はし (橋)",
                    "romajiOrPronunciation": "Hashí [Odaka]",
                    "translation": "Bridge (Low-High pitch)",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "大きい橋を渡ります。",
                    "exampleTranslation": "I cross the large bridge."
                },
                {
                    "word": "あめ (雨)",
                    "romajiOrPronunciation": "Áme [Atamadaka]",
                    "translation": "Rain (High-Low pitch)",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "外は雨です。",
                    "exampleTranslation": "It is rain outside."
                },
                {
                    "word": "あめ (飴)",
                    "romajiOrPronunciation": "Amé [Heiban]",
                    "translation": "Candy (Low-High pitch)",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "甘い飴を食べます。",
                    "exampleTranslation": "I eat sweet candy."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Four Tokyo Pitch Patterns",
                    "explanation": "Standard Tokyo Japanese uses pitch (high vs. low tone) rather than volume stress: 1. Heiban (Flat: Low-High), 2. Atamadaka (Initial high drop), 3. Nakadaka (Drop inside the word), 4. Odaka (Drop on the following particle).",
                    "examples": [
                        "箸 (Háshi = chopsticks) vs 橋 (Hashí = bridge)",
                        "雨 (Áme = rain) vs 飴 (Amé = candy)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Native",
                    "text": "日本語は英語と違って、強さではなく音の高低で意味が変わるんですよ。",
                    "romajiOrPronunciation": "Nihongo wa Eigo to chigatte, tsuyosa dewa naku oto no koutei de imi ga kawarun desu yo.",
                    "translation": "Unlike English, Japanese changes meaning through pitch height rather than volume strength."
                },
                {
                    "speaker": "Learner",
                    "text": "なるほど！だから箸と橋の発音が違うんですね。",
                    "romajiOrPronunciation": "Naruhodo! Dakara hashi to hashi no hatsuon ga chigaun desu ne.",
                    "translation": "I see! That's why the pronunciation of chopsticks and bridge is different."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u1-03-q1",
                    "type": "multiple_choice",
                    "prompt": "In Tokyo Japanese, how is 'chopsticks' (箸) distinguished from 'bridge' (橋)?",
                    "options": [
                        "Pitch accent: Chopsticks starts high, while Bridge starts low",
                        "Loudness stress on the last syllable",
                        "Chopsticks has a silent 'h'",
                        "They sound identical in all contexts"
                    ],
                    "correctAnswer": "Pitch accent: Chopsticks starts high, while Bridge starts low",
                    "explanation": "Chopsticks (箸) is Atamadaka (High-Low), while Bridge (橋) is Odaka (Low-High followed by drop on particle)."
                }
            ]
        },
        {
            "id": "ja-n5-u1-04",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 1,
            "unitTitle": "Unit 1: Foundations, Kana & Phonetics (五十音・発音)",
            "unitDescription": "Hiragana, Katakana, Tokyo pitch accent mechanics, and standard Japanese phonology.",
            "title": "Daily Aisatsu, Bowing Culture & Ojigi (挨拶・お辞儀)",
            "description": "Master essential everyday greetings, bows (Eshaku, Keirei), and politeness registers.",
            "category": "Etiquette & Culture",
            "estimatedMinutes": 5,
            "xpReward": 30,
            "objective": "Greet neighbors, coworkers, and teachers with proper body language and verbal respect.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "4:45",
            "vocabulary": [
                {
                    "word": "おはようございます",
                    "romajiOrPronunciation": "Ohayou gozaimasu",
                    "translation": "Good morning (polite)",
                    "partOfSpeech": "Greeting",
                    "exampleSentence": "先生、おはようございます。",
                    "exampleTranslation": "Teacher, good morning."
                },
                {
                    "word": "お疲れ様です",
                    "romajiOrPronunciation": "Otsukaresama desu",
                    "translation": "Thank you for your hard work",
                    "partOfSpeech": "Greeting",
                    "exampleSentence": "皆さん、今日もお疲れ様でした。",
                    "exampleTranslation": "Everyone, thank you for your hard work today too."
                },
                {
                    "word": "失礼します",
                    "romajiOrPronunciation": "Shitsurei shimasu",
                    "translation": "Excuse me (entering/leaving an office)",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "お先に失礼します。",
                    "exampleTranslation": "I am leaving ahead (goodbye at work)."
                },
                {
                    "word": "よろしくお願いいたします",
                    "romajiOrPronunciation": "Yoroshiku onegai itashimasu",
                    "translation": "Please treat me well (business polite)",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "今後ともよろしくお願いいたします。",
                    "exampleTranslation": "I look forward to our ongoing cooperation."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The 3 Levels of Japanese Bowing (お辞儀)",
                    "explanation": "1. 会釈 (Eshaku - 15°): Casual greeting to colleagues in hallways. 2. 敬礼 (Keirei - 30°): Respectful bow to clients, seniors, and teachers. 3. 最敬礼 (Saikeirei - 45°): Deepest bow for sincere gratitude or deep apologies.",
                    "examples": [
                        "Morning greeting in hallway -> 15° Eshaku",
                        "Meeting client / Teacher -> 30° Keirei"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Colleague A",
                    "text": "お先に失礼します！",
                    "romajiOrPronunciation": "Osaki ni shitsurei shimasu!",
                    "translation": "I'm leaving for the day!"
                },
                {
                    "speaker": "Colleague B",
                    "text": "お疲れ様でした！また明日。",
                    "romajiOrPronunciation": "Otsukaresama deshita! Mata ashita.",
                    "translation": "Thank you for your hard work! See you tomorrow."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u1-04-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the standard workplace phrase when leaving the office before your colleagues?",
                    "options": [
                        "お先に失礼します (Osaki ni shitsurei shimasu)",
                        "さようなら (Sayounara)",
                        "じゃあね (Jaa ne)",
                        "おやすみ (Oyasumi)"
                    ],
                    "correctAnswer": "お先に失礼します (Osaki ni shitsurei shimasu)",
                    "explanation": "'Osaki ni shitsurei shimasu' politely acknowledges leaving before others who are still working."
                }
            ]
        },
        {
            "id": "ja-n5-u2-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Sentence Structure & Essential Particles (助詞・語順)",
            "unitDescription": "The SOV sentence order, topic particle は, object particle を, and direction particles.",
            "title": "The SOV Structure & Topic Marker は (語順と「は」)",
            "description": "Understand the Subject-Object-Verb architecture and the fundamental topic particle は (pronounced 'wa').",
            "category": "Sentence Architecture",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Form grammatically flawless sentences using '[Noun] は [Predicate] です'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:15",
            "vocabulary": [
                {
                    "word": "わたし (私)",
                    "romajiOrPronunciation": "Watashi",
                    "translation": "I / Me",
                    "partOfSpeech": "Pronoun",
                    "exampleSentence": "私は学生です。",
                    "exampleTranslation": "I am a student."
                },
                {
                    "word": "がくせい (学生)",
                    "romajiOrPronunciation": "Gakusei",
                    "translation": "Student",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "田中さんは大学生です。",
                    "exampleTranslation": "Mr. Tanaka is a university student."
                },
                {
                    "word": "せんせい (先生)",
                    "romajiOrPronunciation": "Sensei",
                    "translation": "Teacher / Doctor",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "佐藤先生は親切です。",
                    "exampleTranslation": "Teacher Sato is kind."
                },
                {
                    "word": "にほんじん (日本人)",
                    "romajiOrPronunciation": "Nihonjin",
                    "translation": "Japanese person",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "ケンさんは日本人です。",
                    "exampleTranslation": "Ken is a Japanese person."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Golden Rule: Predicate Goes at the Very End",
                    "explanation": "In Japanese, the verb or copula (です / だ) MUST be at the end of the clause. Formula: [Topic / Subject] は + [Attribute / Noun] です. Negative form: ではありません (polite) or じゃありません (conversational).",
                    "examples": [
                        "私は学生です (I am a student)",
                        "私は先生ではありません (I am not a teacher)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Kenji",
                    "text": "はじめまして。私はケンジです。大学生です。",
                    "romajiOrPronunciation": "Hajimemashite. Watashi wa Kenji desu. Daigakusei desu.",
                    "translation": "Nice to meet you. I am Kenji. I am a university student."
                },
                {
                    "speaker": "Elena",
                    "text": "はじめまして、エレナです。私は会社員です。",
                    "romajiOrPronunciation": "Hajimemashite, Elena desu. Watashi wa kaishain desu.",
                    "translation": "Nice to meet you, I am Elena. I am a company employee."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u2-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How is the topic particle 'は' pronounced when used as a grammatical particle?",
                    "options": [
                        "Wa",
                        "Ha",
                        "Ba",
                        "Ya"
                    ],
                    "correctAnswer": "Wa",
                    "explanation": "When written as the grammatical topic particle, 'は' is always pronounced 'wa'."
                }
            ]
        },
        {
            "id": "ja-n5-u2-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Sentence Structure & Essential Particles (助詞・語順)",
            "unitDescription": "The SOV sentence order, topic particle は, object particle を, and direction particles.",
            "title": "The Epic Mystery: Topic は vs Subject が (「は」と「が」の違い)",
            "description": "Solve the #1 stumbling block in Japanese: Old/known information (は) vs New/focused information (が).",
            "category": "Grammar Mastery",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Know exactly when to use は and when to switch to が with zero hesitation.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "だれ (誰)",
                    "romajiOrPronunciation": "Dare",
                    "translation": "Who",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "誰が来ましたか？",
                    "exampleTranslation": "Who came?"
                },
                {
                    "word": "なに (何)",
                    "romajiOrPronunciation": "Nani / Nan",
                    "translation": "What",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "何が好きですか？",
                    "exampleTranslation": "What do you like?"
                },
                {
                    "word": "すき (好き)",
                    "romajiOrPronunciation": "Suki",
                    "translation": "Liked / Fond of",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "私は寿司が好きです。",
                    "exampleTranslation": "I like sushi."
                },
                {
                    "word": "じょうず (上手)",
                    "romajiOrPronunciation": "Jouzu",
                    "translation": "Skilled at",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "日本語が上手ですね。",
                    "exampleTranslation": "You are skilled at Japanese, aren't you?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Decisive Formula: [Topic] は vs [Subject of Focus] が",
                    "explanation": "1. は marks old or shared knowledge ('As for X...'). 2. が marks NEW information, specific identification, or the answer to a question word (誰が/何が). 3. Verbs of liking/skill/potential take が (寿司が好きです).",
                    "examples": [
                        "誰が来ましたか？ -> 田中さんが来ました (Tanaka is the answer, so が)",
                        "田中さんは学生です (Talking about Tanaka, so は)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "A",
                    "text": "誰がリーダーですか？",
                    "romajiOrPronunciation": "Dare ga riidaa desu ka?",
                    "translation": "Who is the leader?"
                },
                {
                    "speaker": "B",
                    "text": "私がリーダーです。田中さんは副リーダーです。",
                    "romajiOrPronunciation": "Watashi ga riidaa desu. Tanaka-san wa fuku-riidaa desu.",
                    "translation": "I am the leader (focus). As for Tanaka-san, he is the sub-leader."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u2-02-q1",
                    "type": "multiple_choice",
                    "prompt": "When answering 'Who ate the cake?' (誰がケーキを食べましたか？), which particle marks the answer 'Kenji'?",
                    "options": [
                        "ケンジが (Kenji ga)",
                        "ケンジは (Kenji wa)",
                        "ケンジを (Kenji o)",
                        "ケンジに (Kenji ni)"
                    ],
                    "correctAnswer": "ケンジが (Kenji ga)",
                    "explanation": "When answering a question word marked by が (誰が), the answer must also be marked by が."
                }
            ]
        },
        {
            "id": "ja-n5-u2-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Sentence Structure & Essential Particles (助詞・語順)",
            "unitDescription": "The SOV sentence order, topic particle は, object particle を, and direction particles.",
            "title": "Direct Object Particle を & Daily Transitive Verbs (目的語「を」)",
            "description": "Learn particle を (pronounced 'o') and the essential verbs of eating, drinking, and reading.",
            "category": "Essential Verbs",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Connect direct objects to transitive action verbs: [Noun] を [Verb] ます.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "たべます (食べます)",
                    "romajiOrPronunciation": "Tabemasu",
                    "translation": "To eat (polite non-past)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "毎朝、パンを食べます。",
                    "exampleTranslation": "I eat bread every morning."
                },
                {
                    "word": "のみます (飲みます)",
                    "romajiOrPronunciation": "Nomimasu",
                    "translation": "To drink (polite non-past)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "お茶を飲みます。",
                    "exampleTranslation": "I drink green tea."
                },
                {
                    "word": "よみます (読みます)",
                    "romajiOrPronunciation": "Yomimasu",
                    "translation": "To read (polite non-past)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "本を読みます。",
                    "exampleTranslation": "I read books."
                },
                {
                    "word": "みます (見ます)",
                    "romajiOrPronunciation": "Mimasu",
                    "translation": "To see / watch (polite non-past)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "アニメを見ます。",
                    "exampleTranslation": "I watch anime."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Particle を (O) Rule",
                    "explanation": "The particle を marks the direct receiver of an action. Written with Hiragana 'を', pronounced simply as 'o'. Conjugations: 食べます (present/future), 食べません (negative), 食べました (past), 食べませんでした (past negative).",
                    "examples": [
                        "水を飲みます (Drink water)",
                        "昨日は肉を食べませんでした (I didn't eat meat yesterday)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Aoi",
                    "text": "お昼ご飯に何を食べますか？",
                    "romajiOrPronunciation": "Ohirugohan ni nani o tabemasu ka?",
                    "translation": "What will you eat for lunch?"
                },
                {
                    "speaker": "Ren",
                    "text": "ラーメンを食べます。それから緑茶を飲みます。",
                    "romajiOrPronunciation": "Raamen o tabemasu. Sorekara ryokucha o nomimasu.",
                    "translation": "I will eat ramen. And then drink green tea."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u2-03-q1",
                    "type": "multiple_choice",
                    "prompt": "Which particle correctly completes '本___読みます' (I read a book)?",
                    "options": [
                        "を (o)",
                        "は (wa)",
                        "に (ni)",
                        "で (de)"
                    ],
                    "correctAnswer": "を (o)",
                    "explanation": "Particle を marks the direct object of the transitive verb 読みます."
                }
            ]
        },
        {
            "id": "ja-n5-u2-04",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 2,
            "unitTitle": "Unit 2: Sentence Structure & Essential Particles (助詞・語順)",
            "unitDescription": "The SOV sentence order, topic particle は, object particle を, and direction particles.",
            "title": "Direction Particles へ vs に & Locomotion (移動・「へ」と「に」)",
            "description": "Master verbs of motion (行く, 来る, 帰る) and the destination markers に and へ.",
            "category": "Motion & Direction",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Express where you are going, coming from, or returning to with natural fluency.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:15",
            "vocabulary": [
                {
                    "word": "いきます (行きます)",
                    "romajiOrPronunciation": "Ikimasu",
                    "translation": "To go",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "明日、東京へ行きます。",
                    "exampleTranslation": "Tomorrow, I go to Tokyo."
                },
                {
                    "word": "きます (来ます)",
                    "romajiOrPronunciation": "Kimasu",
                    "translation": "To come",
                    "partOfSpeech": "Verb (Irregular)",
                    "exampleSentence": "友達が家に来ます。",
                    "exampleTranslation": "A friend is coming to my house."
                },
                {
                    "word": "かえります (帰ります)",
                    "romajiOrPronunciation": "Kaerimasu",
                    "translation": "To return / go home",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "7時にうちへ帰ります。",
                    "exampleTranslation": "I return home at 7 o'clock."
                },
                {
                    "word": "どこ (何処)",
                    "romajiOrPronunciation": "Doko",
                    "translation": "Where",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "どこへ行きますか？",
                    "exampleTranslation": "Where are you going?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "Direction Particle へ (e) vs Destination に (ni)",
                    "explanation": "へ (written 'he', pronounced 'e') emphasizes the direction or heading of movement. に emphasizes the final destination or arrival point. In everyday speech, both are widely interchangeable with 行きます, 来ます, 帰ります.",
                    "examples": [
                        "日本へ行きます (Heading toward Japan)",
                        "駅に着きます (Arrive at the station - specifically に)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Ken",
                    "text": "週末はどこかへ行きますか？",
                    "romajiOrPronunciation": "Shuumatsu wa dokoka e ikimasu ka?",
                    "translation": "Are you going anywhere this weekend?"
                },
                {
                    "speaker": "Hana",
                    "text": "はい、京都へ行きます。新幹線で行きます。",
                    "romajiOrPronunciation": "Hai, Kyouto e ikimasu. Shinkansen de ikimasu.",
                    "translation": "Yes, I am going to Kyoto. I'll go by Shinkansen bullet train."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u2-04-q1",
                    "type": "multiple_choice",
                    "prompt": "Which particle marks the destination in '明日、学校___行きます'?",
                    "options": [
                        "へ (e) or に (ni)",
                        "を (o)",
                        "が (ga)",
                        "と (to)"
                    ],
                    "correctAnswer": "へ (e) or に (ni)",
                    "explanation": "Both へ and に indicate destination or direction of travel."
                }
            ]
        },
        {
            "id": "ja-n5-u3-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Numbers, Counters & Shopping (数字・助数詞・買い物)",
            "unitDescription": "Japanese numerals up to 100,000, essential counters (つ, 人, 本, 枚), and Konbini transactions.",
            "title": "The Japanese Numeral System (数字 0〜100,000)",
            "description": "Count from 1 to 100,000 in Japanese and master the 4-digit grouping system (万 - Man = 10,000).",
            "category": "Numbers & Math",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Fluently read prices, phone numbers, and room numbers in Japanese.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "いち・に・さん・よん・ご",
                    "romajiOrPronunciation": "Ichi, Ni, San, Yon/Shi, Go",
                    "translation": "1, 2, 3, 4, 5",
                    "partOfSpeech": "Number",
                    "exampleSentence": "3階へ行きます。",
                    "exampleTranslation": "I go to the 3rd floor."
                },
                {
                    "word": "ろく・なな・はち・きゅう・じゅう",
                    "romajiOrPronunciation": "Roku, Nana/Shichi, Hachi, Kyuu/Ku, Juu",
                    "translation": "6, 7, 8, 9, 10",
                    "partOfSpeech": "Number",
                    "exampleSentence": "10時です。",
                    "exampleTranslation": "It is 10 o'clock."
                },
                {
                    "word": "ひゃく・せん・まん",
                    "romajiOrPronunciation": "Hyaku (100), Sen (1,000), Man (10,000)",
                    "translation": "100, 1,000, 10,000",
                    "partOfSpeech": "Number",
                    "exampleSentence": "この靴は一万円です。",
                    "exampleTranslation": "These shoes are 10,000 yen."
                },
                {
                    "word": "いくら (幾ら)",
                    "romajiOrPronunciation": "Ikura",
                    "translation": "How much (cost)",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "これはいくらですか？",
                    "exampleTranslation": "How much is this?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Japanese 4-Digit Unit: 万 (Man = 10,000)",
                    "explanation": "English counts by thousands (1,000 -> 1,000,000). Japanese counts by ten-thousands (万). Therefore, 50,000 is '五万' (5 Man), and 100,000 is '十万' (10 Man).",
                    "examples": [
                        "1,000 = 一千 (Issen) or 千 (Sen)",
                        "10,000 = 一万 (Ichiman)",
                        "50,000 = 五万 (Goman)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Shopper",
                    "text": "すみません、このシャツはいくらですか？",
                    "romajiOrPronunciation": "Sumimasen, kono shatsu wa ikura desu ka?",
                    "translation": "Excuse me, how much is this shirt?"
                },
                {
                    "speaker": "Clerk",
                    "text": "それは三千五百円（3,500円）です。",
                    "romajiOrPronunciation": "Sore wa sanzen gohyaku-en desu.",
                    "translation": "That is 3,500 yen."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u3-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say '20,000' in Japanese?",
                    "options": [
                        "二万 (Niman)",
                        "二十千 (Nijuusen)",
                        "二千 (Nisen)",
                        "二十百 (Nijuuhyaku)"
                    ],
                    "correctAnswer": "二万 (Niman)",
                    "explanation": "Japanese groups by 万 (10,000), so 20,000 is 2 x 10,000 = 二万 (Niman)."
                }
            ]
        },
        {
            "id": "ja-n5-u3-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Numbers, Counters & Shopping (数字・助数詞・買い物)",
            "unitDescription": "Japanese numerals up to 100,000, essential counters (つ, 人, 本, 枚), and Konbini transactions.",
            "title": "Essential Japanese Counters & Classifiers (助数詞: つ・人・本・枚)",
            "description": "Master the Japanese counting system: generic objects (つ), people (人), long items (本), and flat things (枚).",
            "category": "Counters & Classifiers",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Order food, count tickets, and specify quantities accurately without offending native grammar.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "ひとつ・ふたつ・みっつ",
                    "romajiOrPronunciation": "Hitotsu, Futatsu, Mittsu",
                    "translation": "1, 2, 3 (Native generic counter)",
                    "partOfSpeech": "Counter",
                    "exampleSentence": "りんごを二つください。",
                    "exampleTranslation": "Two apples, please."
                },
                {
                    "word": "ひとり・ふたり・さんにん",
                    "romajiOrPronunciation": "Hitori, Futari, Sannin",
                    "translation": "1 person, 2 people, 3 people",
                    "partOfSpeech": "Counter",
                    "exampleSentence": "二人でレストランに行きます。",
                    "exampleTranslation": "We go to the restaurant as two people."
                },
                {
                    "word": "いっぽん・にほん・さんぼん (本)",
                    "romajiOrPronunciation": "Ippon, Nihon, Sanbon",
                    "translation": "Cylindrical objects (pens, bottles, trees)",
                    "partOfSpeech": "Counter",
                    "exampleSentence": "ビールを二本ください。",
                    "exampleTranslation": "Two bottles of beer, please."
                },
                {
                    "word": "いちまい・にまい (枚)",
                    "romajiOrPronunciation": "Ichimai, Nimai",
                    "translation": "Flat objects (paper, shirts, tickets)",
                    "partOfSpeech": "Counter",
                    "exampleSentence": "切符を一枚買いました。",
                    "exampleTranslation": "I bought one ticket."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Native 1 to 10 Counter (ひとつ 〜 とお)",
                    "explanation": "When counting general items without a specialized counter: 1:ひとつ, 2:ふたつ, 3:みっつ, 4:よっつ, 5:いつつ, 6:むっつ, 7:ななつ, 8:やっつ, 9:ここのつ, 10:とお. Above 10, use standard Sino-Japanese numbers.",
                    "examples": [
                        "これを二つください (Please give me two of these)",
                        "三人 (Three people)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Waiter",
                    "text": "いらっしゃいませ。何名様ですか？",
                    "romajiOrPronunciation": "Irasshaimase. Nan-mei-sama desu ka?",
                    "translation": "Welcome. How many people in your party?"
                },
                {
                    "speaker": "Customer",
                    "text": "二人です。禁煙席をお願いします。",
                    "romajiOrPronunciation": "Futari desu. Kin'en-seki o onegai shimasu.",
                    "translation": "Two people. Non-smoking seats, please."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u3-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'two people' in natural Japanese?",
                    "options": [
                        "二人 (ふたり - Futari)",
                        "二つ (ふたつ - Futatsu)",
                        "二人 (ににん - Ninin)",
                        "二本 (にほん - Nihon)"
                    ],
                    "correctAnswer": "二人 (ふたり - Futari)",
                    "explanation": "1 person is ひとり (Hitori), 2 people is ふたり (Futari). From 3 onwards, it uses 〜にん (さんにん, よにん)."
                }
            ]
        },
        {
            "id": "ja-n5-u3-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 3,
            "unitTitle": "Unit 3: Numbers, Counters & Shopping (数字・助数詞・買い物)",
            "unitDescription": "Japanese numerals up to 100,000, essential counters (つ, 人, 本, 枚), and Konbini transactions.",
            "title": "Konbini Mastery & Ordering Food (コンビニ・飲食店)",
            "description": "Navigate 7-Eleven, FamilyMart, Lawson, and Japanese ramen shops with authentic real-life phrases.",
            "category": "Daily Life & Shopping",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Order food, request heated bento, decline plastic bags, and pay with confidence.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "これをください",
                    "romajiOrPronunciation": "Kore o kudasai",
                    "translation": "Please give me this",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "このお弁当をください。",
                    "exampleTranslation": "Please give me this bento box."
                },
                {
                    "word": "ふくろ (袋)",
                    "romajiOrPronunciation": "Fukuro",
                    "translation": "Bag / Plastic shopping bag",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "袋は大丈夫です（いりません）。",
                    "exampleTranslation": "I am fine without a bag (I don't need one)."
                },
                {
                    "word": "あたためますか (温めますか)",
                    "romajiOrPronunciation": "Atatamemasu ka",
                    "translation": "Would you like this heated up?",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "お弁当、温めますか？",
                    "exampleTranslation": "Shall I microwave your bento?"
                },
                {
                    "word": "おかいけい (お会計)",
                    "romajiOrPronunciation": "Okaikei",
                    "translation": "The bill / check",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "お会計をお願いします。",
                    "exampleTranslation": "The bill, please."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Magic Phrase: '大丈夫です' (Daijoubu desu)",
                    "explanation": "In modern Tokyo convenience stores, when asked if you need a receipt or plastic bag, saying '袋は大丈夫です' (Fukuro wa daijoubu desu) politely means 'No thank you, I don't need a bag'.",
                    "examples": [
                        "レシートは大丈夫です (No receipt needed)",
                        "温めてください (Please heat it up)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Clerk",
                    "text": "お弁当温めますか？袋はおつけしますか？",
                    "romajiOrPronunciation": "Obentou atatamemasu ka? Fukuro wa otsuke shimasu ka?",
                    "translation": "Would you like your bento heated? Would you like a bag?"
                },
                {
                    "speaker": "Customer",
                    "text": "温めてください。袋は大丈夫です。",
                    "romajiOrPronunciation": "Atatamete kudasai. Fukuro wa daijoubu desu.",
                    "translation": "Please heat it. I don't need a bag."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u3-03-q1",
                    "type": "multiple_choice",
                    "prompt": "What does 'お会計をお願いします' (Okaikei o onegai shimasu) mean at a restaurant?",
                    "options": [
                        "Please give us the bill / check",
                        "Please bring the menu",
                        "Is this seat taken?",
                        "More water please"
                    ],
                    "correctAnswer": "Please give us the bill / check",
                    "explanation": "'Okaikei' refers to the restaurant bill or bill payment."
                }
            ]
        },
        {
            "id": "ja-n5-u4-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 4,
            "unitTitle": "Unit 4: Existence, Positions & Telling Time (存在・位置・時間)",
            "unitDescription": "Living (います) vs inanimate (あります) existence, spatial prepositions, and scheduling.",
            "title": "Living vs Inanimate Existence: います vs あります (存在動詞)",
            "description": "Master the critical distinction between living beings (people, animals) and inanimate objects.",
            "category": "Core Verbs",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Correctly express the existence of people, pets, buildings, and items: [Place] に [Noun] が います/あります.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "います (居ます)",
                    "romajiOrPronunciation": "Imasu",
                    "translation": "Exists (living: people, animals)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "庭に犬がいます。",
                    "exampleTranslation": "There is a dog in the garden."
                },
                {
                    "word": "あります (有ります)",
                    "romajiOrPronunciation": "Arimasu",
                    "translation": "Exists (inanimate: objects, plants, events)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "机の上に本があります。",
                    "exampleTranslation": "There is a book on the desk."
                },
                {
                    "word": "へや (部屋)",
                    "romajiOrPronunciation": "Heya",
                    "translation": "Room",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "部屋に猫がいます。",
                    "exampleTranslation": "There is a cat in the room."
                },
                {
                    "word": "どこ (何処)",
                    "romajiOrPronunciation": "Doko",
                    "translation": "Where",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "トイレはどこにありますか？",
                    "exampleTranslation": "Where is the restroom located?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Ironclad Rule: Animate vs Inanimate",
                    "explanation": "Formula: [Location] に [Subject] が います / あります. 1. います is ONLY for autonomous living beings (humans, cats, birds). 2. あります is for non-living objects, plants, buildings, or abstract events (concerts, exams).",
                    "examples": [
                        "公園に子供がいます (There are children in the park)",
                        "東京タワーがあります (There is Tokyo Tower)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Guest",
                    "text": "すみません、この近くにコンビニはありますか？",
                    "romajiOrPronunciation": "Sumimasen, kono chikaku ni konbini wa arimasu ka?",
                    "translation": "Excuse me, is there a convenience store near here?"
                },
                {
                    "speaker": "Local",
                    "text": "はい、駅の前にローソンがありますよ。",
                    "romajiOrPronunciation": "Hai, eki no mae ni Rooson ga arimasu yo.",
                    "translation": "Yes, there is a Lawson in front of the station."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u4-01-q1",
                    "type": "multiple_choice",
                    "prompt": "Which verb completes '庭に猫が___' (There is a cat in the garden)?",
                    "options": [
                        "います (imasu)",
                        "あります (arimasu)",
                        "します (shimasu)",
                        "いきます (ikimasu)"
                    ],
                    "correctAnswer": "います (imasu)",
                    "explanation": "A cat (猫) is a living animal, which strictly requires います."
                }
            ]
        },
        {
            "id": "ja-n5-u4-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 4,
            "unitTitle": "Unit 4: Existence, Positions & Telling Time (存在・位置・時間)",
            "unitDescription": "Living (います) vs inanimate (あります) existence, spatial prepositions, and scheduling.",
            "title": "Spatial Positions & Directions (上・下・前・後ろ・中・隣)",
            "description": "Describe exactly where objects and landmarks are located using Japanese spatial nouns.",
            "category": "Spatial Vocabulary",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Locate items and landmarks using '[Noun A] の [Position] に [Noun B] が あります/います'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "うえ・した (上・下)",
                    "romajiOrPronunciation": "Ue / Shita",
                    "translation": "Above / Below (Top / Bottom)",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "机の上に鍵があります。",
                    "exampleTranslation": "The key is on top of the desk."
                },
                {
                    "word": "まえ・うしろ (前・後ろ)",
                    "romajiOrPronunciation": "Mae / Ushiro",
                    "translation": "In front / Behind",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "駅の前に交番があります。",
                    "exampleTranslation": "There is a police box in front of the station."
                },
                {
                    "word": "なか・そと (中・外)",
                    "romajiOrPronunciation": "Naka / Soto",
                    "translation": "Inside / Outside",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "箱の中に何がありますか？",
                    "exampleTranslation": "What is inside the box?"
                },
                {
                    "word": "となり・あいだ (隣・間)",
                    "romajiOrPronunciation": "Tonari / Aida",
                    "translation": "Next to / Between",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "銀行と郵便局の間にカフェがあります。",
                    "exampleTranslation": "There is a cafe between the bank and post office."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Position Formula: [A] の [Position] に [B] が ある/いる",
                    "explanation": "Japanese places the anchor object first, followed by the possessive の, the position noun, and the location particle に. E.g., '机の上' = top of desk.",
                    "examples": [
                        "机 (Desk) + の + 上 (Top) + に = On top of the desk",
                        "本屋の隣に (Next to the bookstore)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Tourist",
                    "text": "すみません、交番はどこですか？",
                    "romajiOrPronunciation": "Sumimasen, kouban wa doko desu ka?",
                    "translation": "Excuse me, where is the police box?"
                },
                {
                    "speaker": "Officer",
                    "text": "駅の出口のすぐ前にありますよ。",
                    "romajiOrPronunciation": "Eki no deguchi no sugu mae ni arimasu yo.",
                    "translation": "It is right in front of the station exit."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u4-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'under the table' in Japanese?",
                    "options": [
                        "テーブルの下 (Teeburu no shita)",
                        "テーブルの上 (Teeburu no ue)",
                        "テーブルの前 (Teeburu no mae)",
                        "テーブルの隣 (Teeburu no tonari)"
                    ],
                    "correctAnswer": "テーブルの下 (Teeburu no shita)",
                    "explanation": "下 (した - shita) means below or under."
                }
            ]
        },
        {
            "id": "ja-n5-u4-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 4,
            "unitTitle": "Unit 4: Existence, Positions & Telling Time (存在・位置・時間)",
            "unitDescription": "Living (います) vs inanimate (あります) existence, spatial prepositions, and scheduling.",
            "title": "Telling Time, Minutes & Daily Schedule (時間・〜時〜分・曜日)",
            "description": "Master hours (時), minutes (分 with sound changes: ぷん vs ふん), half past (半), and calendar days.",
            "category": "Time & Schedule",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Schedule meetings, ask train departure times, and express daily time routines.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "いま・なんじ (今・何時)",
                    "romajiOrPronunciation": "Ima / Nanji",
                    "translation": "Now / What time",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "今、何時ですか？",
                    "exampleTranslation": "What time is it right now?"
                },
                {
                    "word": "〜じ・〜はん (〜時・〜半)",
                    "romajiOrPronunciation": "〜Ji / 〜Han",
                    "translation": "〜 O'clock / 〜 Half past",
                    "partOfSpeech": "Suffix",
                    "exampleSentence": "会議は3時半からです。",
                    "exampleTranslation": "The meeting is from 3:30."
                },
                {
                    "word": "〜ふん・〜ぷん (〜分)",
                    "romajiOrPronunciation": "〜Fun / 〜Pun",
                    "translation": "〜 Minute(s)",
                    "partOfSpeech": "Suffix",
                    "exampleSentence": "電車は10時15分に出発します。",
                    "exampleTranslation": "The train departs at 10:15."
                },
                {
                    "word": "げつ・か・すい・もく・きん・ど・にち (月火水木金土日)",
                    "romajiOrPronunciation": "Getsu, Ka, Sui, Moku, Kin, Do, Nichi",
                    "translation": "Mon, Tue, Wed, Thu, Fri, Sat, Sun",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "金曜日の夜に映画を見ます。",
                    "exampleTranslation": "I watch movies on Friday night."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Irregular Hours: 4, 7, and 9 O'clock",
                    "explanation": "Watch out for these 3 crucial irregular hours on the JLPT N5: 4 o'clock is よじ (Yoji - NEVER Yonji), 7 o'clock is しちじ (Shichiji - rarely Nanaji), 9 o'clock is くじ (Kuji - NEVER Kyuuji).",
                    "examples": [
                        "4:00 = よじ (Yoji)",
                        "7:00 = しちじ (Shichiji)",
                        "9:00 = くじ (Kuji)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Traveler",
                    "text": "次の電車は何時に出ますか？",
                    "romajiOrPronunciation": "Tsugi no densha wa nanji ni demasu ka?",
                    "translation": "What time does the next train leave?"
                },
                {
                    "speaker": "Station Staff",
                    "text": "次は9時15分発です。3番線へどうぞ。",
                    "romajiOrPronunciation": "Tsugi wa kuji juugofun hatsu desu. Sanban-sen e douzo.",
                    "translation": "The next is at 9:15. Please go to Platform 3."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u4-03-q1",
                    "type": "multiple_choice",
                    "prompt": "How is 4:00 (4 o'clock) pronounced correctly in Japanese?",
                    "options": [
                        "よじ (Yoji)",
                        "よんじ (Yonji)",
                        "しじ (Shiji)",
                        "よんじかん (Yonjikan)"
                    ],
                    "correctAnswer": "よじ (Yoji)",
                    "explanation": "4 o'clock is strictly irregular: よじ (Yoji)."
                }
            ]
        },
        {
            "id": "ja-n5-u5-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Adjectives & Comparisons (い形容詞・な形容詞・比較)",
            "unitDescription": "Master I-adjectives, Na-adjectives, past/negative conjugations, and comparative structures.",
            "title": "True I-Adjectives & Conjugations (い形容詞の活用)",
            "description": "Master い-adjectives and their 4 grammatical states: Present, Negative, Past, and Past Negative.",
            "category": "Adjectives",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Conjugate any true I-adjective seamlessly: 〜い, 〜くない, 〜かった, 〜くなかった.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "たかい (高い)",
                    "romajiOrPronunciation": "Takai",
                    "translation": "Expensive / High / Tall",
                    "partOfSpeech": "I-Adjective",
                    "exampleSentence": "このカメラは高かったです。",
                    "exampleTranslation": "This camera was expensive."
                },
                {
                    "word": "やすい (安い)",
                    "romajiOrPronunciation": "Yasui",
                    "translation": "Cheap / Inexpensive",
                    "partOfSpeech": "I-Adjective",
                    "exampleSentence": "このリンゴは安くないです。",
                    "exampleTranslation": "These apples are not cheap."
                },
                {
                    "word": "おいしい (美味しい)",
                    "romajiOrPronunciation": "Oishii",
                    "translation": "Delicious / Tasty",
                    "partOfSpeech": "I-Adjective",
                    "exampleSentence": "日本のラーメンはとても美味しいです。",
                    "exampleTranslation": "Japanese ramen is very delicious."
                },
                {
                    "word": "いい・よい (良い)",
                    "romajiOrPronunciation": "Ii / Yoi",
                    "translation": "Good (Irregular)",
                    "partOfSpeech": "I-Adjective",
                    "exampleSentence": "昨日の映画はとてもよかったです。",
                    "exampleTranslation": "Yesterday's movie was very good."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The 4-Step I-Adjective Conjugation Chart",
                    "explanation": "Drop the final 'い' and add: 1. Present Affirmative: 高い (Takai). 2. Present Negative: 高くない (Takakunai). 3. Past Affirmative: 高かった (Takakatta). 4. Past Negative: 高くなかった (Takakunakatta). *Exception: いい conjugates using よい (よくない, よかった).",
                    "examples": [
                        "美味しい -> 美味しくない -> 美味しかった -> 美味しくなかった",
                        "いい -> よくない -> よかった"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Riko",
                    "text": "昨日のテストはどうでしたか？難しかったですか？",
                    "romajiOrPronunciation": "Kinou no tesuto wa dou deshita ka? Muzukashikatta desu ka?",
                    "translation": "How was yesterday's test? Was it difficult?"
                },
                {
                    "speaker": "Daiki",
                    "text": "いいえ、全然難しくなかったです。とても簡単でした。",
                    "romajiOrPronunciation": "Iie, zenzen muzukashikunakatta desu. Totemo kantan deshita.",
                    "translation": "No, it wasn't difficult at all. It was very easy."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u5-01-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the past-negative form of '暑い' (Atsui - hot)?",
                    "options": [
                        "暑くなかった (Atsukunakatta)",
                        "暑くないでした (Atsukunaideshita)",
                        "暑いでした (Atsuideshita)",
                        "暑かったない (Atsukattanai)"
                    ],
                    "correctAnswer": "暑くなかった (Atsukunakatta)",
                    "explanation": "Drop 'い' and add 'くなかった' -> 暑くなかった (It was not hot)."
                }
            ]
        },
        {
            "id": "ja-n5-u5-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Adjectives & Comparisons (い形容詞・な形容詞・比較)",
            "unitDescription": "Master I-adjectives, Na-adjectives, past/negative conjugations, and comparative structures.",
            "title": "Na-Adjectives & Noun Modifiers (な形容詞と名詞修飾)",
            "description": "Master な-adjectives, their copula endings (です/でした/じゃない), and the connecting 'な'.",
            "category": "Adjectives",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Modify nouns directly and describe personality, places, and health using Na-adjectives.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "しずか (静か)",
                    "romajiOrPronunciation": "Shizuka",
                    "translation": "Quiet / Peaceful",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "ここはとても静かな町です。",
                    "exampleTranslation": "This is a very quiet town."
                },
                {
                    "word": "べんり (便利)",
                    "romajiOrPronunciation": "Benri",
                    "translation": "Convenient / Handy",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "地下鉄はとても便利です。",
                    "exampleTranslation": "The subway is very convenient."
                },
                {
                    "word": "ゆうめい (有名)",
                    "romajiOrPronunciation": "Yuumei",
                    "translation": "Famous",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "京都は有名なお寺が多いです。",
                    "exampleTranslation": "Kyoto has many famous temples."
                },
                {
                    "word": "げんき (元気)",
                    "romajiOrPronunciation": "Genki",
                    "translation": "Healthy / Energetic",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "お元気ですか？",
                    "exampleTranslation": "How are you? (Are you healthy?)"
                }
            ],
            "grammarNotes": [
                {
                    "title": "Why They Are Called 'Na-Adjectives'",
                    "explanation": "When modifying a noun directly, you MUST insert 'な' between the adjective and noun: 静かな部屋 (Quiet room), 有名な人 (Famous person). When ending a sentence, they use です: この町は静かです (This town is quiet).",
                    "examples": [
                        "静かな部屋 (Quiet room)",
                        "静かではありません (Not quiet)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Tourist",
                    "text": "東京の電車はどうですか？",
                    "romajiOrPronunciation": "Toukyou no densha wa dou desu ka?",
                    "translation": "How are trains in Tokyo?"
                },
                {
                    "speaker": "Resident",
                    "text": "とても便利ですが、朝は全然静かじゃないです。",
                    "romajiOrPronunciation": "Totemo benri desu ga, asa wa zenzen shizuka ja nai desu.",
                    "translation": "They are very convenient, but in the morning they are not quiet at all."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u5-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you correctly say 'a famous restaurant' using 有名 (Yuumei)?",
                    "options": [
                        "有名なレストラン (Yuumei na resutoran)",
                        "有名のレストラン (Yuumei no resutoran)",
                        "有名いレストラン (Yuumei i resutoran)",
                        "有名レストラン (Yuumei resutoran)"
                    ],
                    "correctAnswer": "有名なレストラン (Yuumei na resutoran)",
                    "explanation": "Na-adjectives require 'な' when modifying nouns directly."
                }
            ]
        },
        {
            "id": "ja-n5-u5-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 5,
            "unitTitle": "Unit 5: Adjectives & Comparisons (い形容詞・な形容詞・比較)",
            "unitDescription": "Master I-adjectives, Na-adjectives, past/negative conjugations, and comparative structures.",
            "title": "Comparisons & Superlatives (比較: より・どちら・一番)",
            "description": "Compare two things (AはBより〜), ask choices (どちらが〜), and express the absolute best (一番〜).",
            "category": "Comparisons",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Make comparisons and express preferences naturally: '[A] の方が [B] より [Adj] です'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:15",
            "vocabulary": [
                {
                    "word": "より",
                    "romajiOrPronunciation": "Yori",
                    "translation": "Than (comparison marker)",
                    "partOfSpeech": "Particle",
                    "exampleSentence": "飛行機は新幹線より速いです。",
                    "exampleTranslation": "Airplanes are faster than Shinkansen bullet trains."
                },
                {
                    "word": "〜のほうが (〜の方)",
                    "romajiOrPronunciation": "〜 No hou ga",
                    "translation": "More ... (indicates chosen side)",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "寿司の方が好きです。",
                    "exampleTranslation": "I prefer sushi (sushi is more liked)."
                },
                {
                    "word": "どちら (何方)",
                    "romajiOrPronunciation": "Dochira",
                    "translation": "Which one (of two choices)",
                    "partOfSpeech": "Question word",
                    "exampleSentence": "肉と魚と、どちらが好きですか？",
                    "exampleTranslation": "Between meat and fish, which do you like?"
                },
                {
                    "word": "いちばん (一番)",
                    "romajiOrPronunciation": "Ichiban",
                    "translation": "The most / Number one / Best",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "日本で富士山が一番高い山です。",
                    "exampleTranslation": "Mt. Fuji is the tallest mountain in Japan."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The 3 Fundamental Comparison Patterns",
                    "explanation": "1. Comparison: [A] は [B] より [Adj] です (A is more [Adj] than B). 2. Choice: [A] と [B] と どちらが [Adj] ですか (Between A and B, which is more [Adj]?). 3. Superlative: [Category] の中で [A] が 一番 [Adj] です (Among [Category], A is the most [Adj]).",
                    "examples": [
                        "コーヒーと紅茶、どちらが好きですか？",
                        "スポーツの中でサッカーが一番面白いです"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Interviewer",
                    "text": "夏と冬と、どちらが好きですか？",
                    "romajiOrPronunciation": "Natsu to fuyu to, dochira ga suki desu ka?",
                    "translation": "Between summer and winter, which do you prefer?"
                },
                {
                    "speaker": "Guest",
                    "text": "冬の方が好きです。スノーボードが一番楽しいですから。",
                    "romajiOrPronunciation": "Fuyu no hou ga suki desu. Sunooboodo ga ichiban tanoshii desu kara.",
                    "translation": "I prefer winter. Because snowboarding is the most fun."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u5-03-q1",
                    "type": "multiple_choice",
                    "prompt": "Which sentence means 'Apples are cheaper than melons'?",
                    "options": [
                        "りんごはメロンより安いです",
                        "メロンはりんごより安いです",
                        "りんごはメロンが安いです",
                        "りんごよりメロンが安いです"
                    ],
                    "correctAnswer": "りんごはメロンより安いです",
                    "explanation": "[A] は [B] より [Adj] です -> Apples (A) are cheaper than melons (B)."
                }
            ]
        },
        {
            "id": "ja-n5-u6-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 6,
            "unitTitle": "Unit 6: The Crucial Te-form Mastery (て形の活用・依頼・状態)",
            "unitDescription": "Master Godan, Ichidan, and Irregular Te-form conjugations, polite requests, and continuous states.",
            "title": "The 3 Verb Groups & Te-form Conjugation (動詞のグループとて形)",
            "description": "Conquer the single most important conjugation in Japanese: Group 1 (Godan), Group 2 (Ichidan), Group 3 (Irregular).",
            "category": "Verb Conjugation",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Conjugate any Japanese verb into its Te-form rapidly using the rhythm rule.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:30",
            "vocabulary": [
                {
                    "word": "かきます (書きます) -> かいて",
                    "romajiOrPronunciation": "Kakimasu -> Kaite",
                    "translation": "Write -> Writing (ku -> ite)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "名前を書いてください。",
                    "exampleTranslation": "Please write your name."
                },
                {
                    "word": "のみます (飲みます) -> のんで",
                    "romajiOrPronunciation": "Nomimasu -> Nonde",
                    "translation": "Drink -> Drinking (mu -> nde)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "お薬を飲んでください。",
                    "exampleTranslation": "Please drink your medicine."
                },
                {
                    "word": "たべます (食べます) -> たべて",
                    "romajiOrPronunciation": "Tabemasu -> Tabete",
                    "translation": "Eat -> Eating (ru -> te)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "野菜を食べてください。",
                    "exampleTranslation": "Please eat vegetables."
                },
                {
                    "word": "します / きます -> して / きて",
                    "romajiOrPronunciation": "Shimasu -> Shite / Kimasu -> Kite",
                    "translation": "Do -> Doing / Come -> Coming (Irregular)",
                    "partOfSpeech": "Verb (Irregular)",
                    "exampleSentence": "ここに来てください。",
                    "exampleTranslation": "Please come here."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Godan Te-Form Rhythm Song",
                    "explanation": "Group 1 (Godan) rules: 1. う・つ・る -> って (買って, 待って, 帰って). 2. む・ぶ・ぬ -> んで (飲んで, 遊んで, 死んで). 3. く -> いて (書いて) *Special: 行く -> 行って. 4. ぐ -> いで (泳いで). 5. す -> して (話して). Group 2 (Ichidan): drop る + て (食べて, 見て). Group 3: して, きて.",
                    "examples": [
                        "待つ -> 待って (Matte)",
                        "飲む -> 飲んで (Nonde)",
                        "行く -> 行って (Itte)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Teacher",
                    "text": "教科書の25ページを開いて、読んでください。",
                    "romajiOrPronunciation": "Kyoukasho no nijuugopeeji o hiraite, yonde kudasai.",
                    "translation": "Please open page 25 of the textbook and read."
                },
                {
                    "speaker": "Student",
                    "text": "はい、読んでみます。",
                    "romajiOrPronunciation": "Hai, yonde mimasu.",
                    "translation": "Yes, I will read it."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u6-01-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the correct Te-form of the irregular verb '行く' (Iku - to go)?",
                    "options": [
                        "行って (Itte)",
                        "行いて (Iite)",
                        "行きて (Ikite)",
                        "行いで (Iide)"
                    ],
                    "correctAnswer": "行って (Itte)",
                    "explanation": "Even though く normally becomes いて, 行く is the famous exception: 行って (Itte)."
                }
            ]
        },
        {
            "id": "ja-n5-u6-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 6,
            "unitTitle": "Unit 6: The Crucial Te-form Mastery (て形の活用・依頼・状態)",
            "unitDescription": "Master Godan, Ichidan, and Irregular Te-form conjugations, polite requests, and continuous states.",
            "title": "Polite Requests: 〜てください (Please do...)",
            "description": "Make polite everyday requests in stores, taxis, trains, and offices using [Verb Te-form] + ください.",
            "category": "Polite Requests",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Ask native speakers for directions, assistance, and actions politely and accurately.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "まってください (待ってください)",
                    "romajiOrPronunciation": "Matte kudasai",
                    "translation": "Please wait",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "少々お待ちください。",
                    "exampleTranslation": "Please wait a brief moment (polite)."
                },
                {
                    "word": "おしえてください (教えてください)",
                    "romajiOrPronunciation": "Oshiete kudasai",
                    "translation": "Please teach / tell me",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "駅への道を教えてください。",
                    "exampleTranslation": "Please tell me the way to the station."
                },
                {
                    "word": "みせてください (見せてください)",
                    "romajiOrPronunciation": "Misete kudasai",
                    "translation": "Please show me",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "パスポートを見せてください。",
                    "exampleTranslation": "Please show your passport."
                },
                {
                    "word": "もういちど (もう一度)",
                    "romajiOrPronunciation": "Mou ichido",
                    "translation": "Once more / Again",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "もう一度言ってください。",
                    "exampleTranslation": "Please say that once more."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Verb て-form] + ください",
                    "explanation": "Adding ください to the Te-form is the foundation of polite instruction and requests. For negative requests ('Please do not...'), use [Verb ない-form] + でください (e.g. 写真を撮らないでください = Please do not take photos).",
                    "examples": [
                        "ゆっくり話してください (Please speak slowly)",
                        "ここに座ってください (Please sit here)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Passenger",
                    "text": "すみません、東京駅まで行ってください。",
                    "romajiOrPronunciation": "Sumimasen, Toukyou-eki made itte kudasai.",
                    "translation": "Excuse me, please go to Tokyo Station."
                },
                {
                    "speaker": "Taxi Driver",
                    "text": "かしこまりました。東京駅ですね。シートベルトを締めてください。",
                    "romajiOrPronunciation": "Kashikomarimashita. Toukyou-eki desu ne. Shiitoberuto o shimete kudasai.",
                    "translation": "Understood. Tokyo Station it is. Please fasten your seatbelt."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u6-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you politely ask someone to 'please speak slowly'?",
                    "options": [
                        "ゆっくり話してください (Yukkuri hanashite kudasai)",
                        "早く話してください (Hayaku hanashite kudasai)",
                        "静かに話してください (Shizuka ni hanashite kudasai)",
                        "話さないでください (Hanasanaide kudasai)"
                    ],
                    "correctAnswer": "ゆっくり話してください (Yukkuri hanashite kudasai)",
                    "explanation": "ゆっくり (slowly) + 話して (Te-form of to speak) + ください."
                }
            ]
        },
        {
            "id": "ja-n5-u6-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 6,
            "unitTitle": "Unit 6: The Crucial Te-form Mastery (て形の活用・依頼・状態)",
            "unitDescription": "Master Godan, Ichidan, and Irregular Te-form conjugations, polite requests, and continuous states.",
            "title": "Present Continuous & Resulting States: 〜ています (Te-imasu)",
            "description": "Express actions happening right now AND ongoing states of being (marriage, residence, knowing).",
            "category": "Continuous & States",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Distinguish actions in progress from enduring resulting states using [Verb Te] + います.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "べんきょうしています (勉強しています)",
                    "romajiOrPronunciation": "Benkyou shite imasu",
                    "translation": "Am studying (Action in progress)",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "今、図書館で日本語を勉強しています。",
                    "exampleTranslation": "Right now, I am studying Japanese at the library."
                },
                {
                    "word": "すんでいます (住んでいます)",
                    "romajiOrPronunciation": "Sunde imasu",
                    "translation": "Am living in (Resulting state)",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "私は東京に住んでいます。",
                    "exampleTranslation": "I live in Tokyo."
                },
                {
                    "word": "しっています (知っています)",
                    "romajiOrPronunciation": "Shitte imasu",
                    "translation": "I know / Am aware of (State)",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "田中さんの電話番号を知っています。",
                    "exampleTranslation": "I know Mr. Tanaka's phone number."
                },
                {
                    "word": "けっこんしています (結婚しています)",
                    "romajiOrPronunciation": "Kekkon shite imasu",
                    "translation": "Am married (State)",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "兄は結婚しています。",
                    "exampleTranslation": "My older brother is married."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Action in Progress vs Resulting State",
                    "explanation": "〜ています has TWO meanings: 1. Action happening now: 今、本を読んでいます (Reading now). 2. Resulting state of a change: 住んでいます (Living in), 結婚しています (Married), 知っています (Knowing). *Trap: Negative of 知っています is 知りません (NEVER 知っていません).",
                    "examples": [
                        "東京に住んでいます (I reside in Tokyo)",
                        "知りません (I don't know - irregular negative)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "A",
                    "text": "今、何をしていますか？",
                    "romajiOrPronunciation": "Ima, nani o shite imasu ka?",
                    "translation": "What are you doing right now?"
                },
                {
                    "speaker": "B",
                    "text": "テレビを見ています。あなたは？",
                    "romajiOrPronunciation": "Terebi o mite imasu. Anata wa?",
                    "translation": "I am watching TV. How about you?"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u6-03-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the correct negative form of '知っています' (I know)?",
                    "options": [
                        "知りません (Shirimasen)",
                        "知っていません (Shitte imasen)",
                        "知らなかったです (Shirakatta desu)",
                        "知るではありません (Shiru dewa arimasen)"
                    ],
                    "correctAnswer": "知りません (Shirimasen)",
                    "explanation": "The negative of the state '知っています' is strictly '知りません' in Japanese."
                }
            ]
        },
        {
            "id": "ja-n5-u6-04",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 6,
            "unitTitle": "Unit 6: The Crucial Te-form Mastery (て形の活用・依頼・状態)",
            "unitDescription": "Master Godan, Ichidan, and Irregular Te-form conjugations, polite requests, and continuous states.",
            "title": "Permissions & Prohibitions: 〜てもいいですか & 〜てはいけません",
            "description": "Ask permission politely ('May I...?') and state rules or prohibitions ('You must not...').",
            "category": "Permissions & Rules",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Ask permission in public venues and understand museum, train, and library rules.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜てもいいですか",
                    "romajiOrPronunciation": "〜 Te mo ii desu ka",
                    "translation": "May I do ...? (Asking permission)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "写真を撮ってもいいですか？",
                    "exampleTranslation": "May I take a photograph?"
                },
                {
                    "word": "〜てはいけません",
                    "romajiOrPronunciation": "〜 Te wa ikemasen",
                    "translation": "Must not do ... (Prohibition)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "ここでタバコを吸ってはいけません。",
                    "exampleTranslation": "You must not smoke cigarettes here."
                },
                {
                    "word": "しゃしん (写真)",
                    "romajiOrPronunciation": "Shashin",
                    "translation": "Photograph",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "富士山の写真を撮りました。",
                    "exampleTranslation": "I took a photo of Mt. Fuji."
                },
                {
                    "word": "すわります (座ります)",
                    "romajiOrPronunciation": "Suwarimasu",
                    "translation": "To sit down",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "ここに座ってもいいですか？",
                    "exampleTranslation": "May I sit here?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "Permission Formula: [Verb Te] + もいいですか",
                    "explanation": "To ask permission: [Verb て-form] + もいいですか. To give permission: [Verb て-form] + もいいですよ (You may). To forbid: [Verb て-form] + はいけません (You must not).",
                    "examples": [
                        "入ってもいいですか？ (May I come in?)",
                        "入ってはいけません (Do not enter)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Visitor",
                    "text": "すみません、この美術館で写真を撮ってもいいですか？",
                    "romajiOrPronunciation": "Sumimasen, kono bijutsukan de shashin o totte mo ii desu ka?",
                    "translation": "Excuse me, may I take pictures in this art museum?"
                },
                {
                    "speaker": "Attendant",
                    "text": "申し訳ございません。館内での撮影はご遠慮ください（撮ってはいけません）。",
                    "romajiOrPronunciation": "Moushiwake gozaimasen. Kannai de no satsuei wa go-enryo kudasai.",
                    "translation": "We are very sorry. Photography inside is prohibited."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u6-04-q1",
                    "type": "multiple_choice",
                    "prompt": "Which phrase means 'May I sit here?'",
                    "options": [
                        "ここに座ってもいいですか？",
                        "ここに座ってはいけません",
                        "ここに座ってください",
                        "ここに座りましょうか？"
                    ],
                    "correctAnswer": "ここに座ってもいいですか？",
                    "explanation": "[Verb て-form] + もいいですか is the polite formula for asking permission."
                }
            ]
        },
        {
            "id": "ja-n5-u7-01",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Nai-form, Obligations & Experiences (ない形・義務・経験)",
            "unitDescription": "Master the plain negative (ない形), must do (〜なければならない), and life experiences (〜たことがある).",
            "title": "The Plain Negative Nai-Form & Prohibitions (ない形・ないでください)",
            "description": "Master the Nai-form conjugation across all 3 verb groups and express negative polite requests.",
            "category": "Negative Conjugations",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Form the Nai-form effortlessly: Group 1 (a-stem + ない), Group 2 (stem + ない), Group 3 (しない, こない).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "かかない (書かない)",
                    "romajiOrPronunciation": "Kakanai",
                    "translation": "Do not write (Godan: ku -> ka + nai)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "ボールペンで書かないでください。",
                    "exampleTranslation": "Please do not write in ballpoint pen."
                },
                {
                    "word": "たべない (食べない)",
                    "romajiOrPronunciation": "Tabenai",
                    "translation": "Do not eat (Ichidan: drop ru + nai)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "甘いものを食べないようにしています。",
                    "exampleTranslation": "I try not to eat sweet things."
                },
                {
                    "word": "しない・こない (来ない)",
                    "romajiOrPronunciation": "Shinai / Konai",
                    "translation": "Do not do / Do not come (Irregular)",
                    "partOfSpeech": "Verb (Irregular)",
                    "exampleSentence": "無理をしないでください。",
                    "exampleTranslation": "Please don't overexert yourself."
                },
                {
                    "word": "わすれます (忘れます) -> わすれないで",
                    "romajiOrPronunciation": "Wasuremasu -> Wasurenaide",
                    "translation": "Forget -> Please don't forget",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "傘を忘れないでください。",
                    "exampleTranslation": "Please don't forget your umbrella."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Nai-Form Conjugation Formula",
                    "explanation": "Group 1 (Godan): Change the 'u' sound to the 'a' sound + ない (書く -> 書かない, 飲む -> 飲まない). *Note: verbs ending in う become わない (買う -> 買わない). Group 2: drop る + ない (食べる -> 食べない). Group 3: する -> しない, 来る -> こない (Konai).",
                    "examples": [
                        "話す -> 話さない",
                        "行く -> 行かない",
                        "来る -> こない"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Doctor",
                    "text": "今日はお風呂に入らないでください。激しい運動もしないでくださいね。",
                    "romajiOrPronunciation": "Kyou wa ofuro ni hairanaide kudasai. Hageshii undou mo shinaide kudasai ne.",
                    "translation": "Please do not take a bath today. Also, please do not do strenuous exercise."
                },
                {
                    "speaker": "Patient",
                    "text": "はい、わかりました。安静にします。",
                    "romajiOrPronunciation": "Hai, wakarimashita. Ansei ni shimasu.",
                    "translation": "Yes, understood. I will rest quietly."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u7-01-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the plain negative (Nai-form) of '買う' (Kau - to buy)?",
                    "options": [
                        "買わない (Kawanai)",
                        "買かない (Kakanai)",
                        "買あない (Kaanai)",
                        "買ない (Kanai)"
                    ],
                    "correctAnswer": "買わない (Kawanai)",
                    "explanation": "Verbs ending in 'う' always change to 'わ' before ない (買う -> 買わない)."
                }
            ]
        },
        {
            "id": "ja-n5-u7-02",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Nai-form, Obligations & Experiences (ない形・義務・経験)",
            "unitDescription": "Master the plain negative (ない形), must do (〜なければならない), and life experiences (〜たことがある).",
            "title": "Expressing Obligation: 〜なければなりません (Must / Have to)",
            "description": "Express duty, legal requirements, and daily necessities using the essential 'must do' construction.",
            "category": "Obligation & Rules",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "State obligations formally (なければなりません) and in casual daily speech (なきゃ / なくちゃ).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "〜なければなりません",
                    "romajiOrPronunciation": "〜 Nakereba narimasen",
                    "translation": "Must do ... / Have to do ... (Formal)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "明日、早く起きなければなりません。",
                    "exampleTranslation": "I have to wake up early tomorrow."
                },
                {
                    "word": "〜なきゃ (〜なきゃいけない)",
                    "romajiOrPronunciation": "〜 Nakya",
                    "translation": "Gotta do ... / Must (Casual native)",
                    "partOfSpeech": "Casual contraction",
                    "exampleSentence": "もう帰らなきゃ！",
                    "exampleTranslation": "I've gotta head home now!"
                },
                {
                    "word": "くすり (薬)",
                    "romajiOrPronunciation": "Kusuri",
                    "translation": "Medicine",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "毎食後、薬を飲まなければなりません。",
                    "exampleTranslation": "I have to take medicine after every meal."
                },
                {
                    "word": "はらいます (払います)",
                    "romajiOrPronunciation": "Haraimasu",
                    "translation": "To pay",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "家賃を払わなければなりません。",
                    "exampleTranslation": "I must pay the rent."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: Drop ない from Nai-Form + なければなりません",
                    "explanation": "Take the verb's Nai-form, drop 'い', and attach 'ければなりません'. Literal meaning: 'If you don't do it, it won't do'. Casual native spoken form: [Stem] + なきゃ (Nakya).",
                    "examples": [
                        "行かない -> 行かなければなりません (Must go) -> 行かなきゃ (Casual)",
                        "食べる -> 食べなければなりません (Must eat)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Friend",
                    "text": "明日、遊びに行かない？",
                    "romajiOrPronunciation": "Ashita, asobi ni ikanai?",
                    "translation": "Wanna hang out tomorrow?"
                },
                {
                    "speaker": "You",
                    "text": "ごめん、明日はレポートを出さなきゃいけないんだ。",
                    "romajiOrPronunciation": "Gomen, ashita wa repooto o dasanakya ikenain da.",
                    "translation": "Sorry, I have to submit a report tomorrow."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u7-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'I must study tonight' formally?",
                    "options": [
                        "今夜、勉強しなければなりません",
                        "今夜、勉強してもいいです",
                        "今夜、勉強しないでください",
                        "今夜、勉強したいです"
                    ],
                    "correctAnswer": "今夜、勉強しなければなりません",
                    "explanation": "〜なければなりません expresses strict obligation ('must')."
                }
            ]
        },
        {
            "id": "ja-n5-u7-03",
            "languageId": "japanese",
            "level": "JLPT N5",
            "unitNumber": 7,
            "unitTitle": "Unit 7: Nai-form, Obligations & Experiences (ない形・義務・経験)",
            "unitDescription": "Master the plain negative (ない形), must do (〜なければならない), and life experiences (〜たことがある).",
            "title": "The Ta-Form & Past Life Experiences: 〜たことがある (Have experienced)",
            "description": "Conjugate the plain past Ta-form and express life milestones and travel experiences.",
            "category": "Experience & Past",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Ask and answer questions about past life experiences using [Verb Ta-form] + ことがある.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "〜たことがある",
                    "romajiOrPronunciation": "〜 Ta koto ga aru",
                    "translation": "Have had the experience of ...",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "日本へ行ったことがありますか？",
                    "exampleTranslation": "Have you ever been to Japan?"
                },
                {
                    "word": "いちども (一度も)",
                    "romajiOrPronunciation": "Ichido mo",
                    "translation": "Not even once (+ negative)",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "一度も納豆を食べたことがありません。",
                    "exampleTranslation": "I have never eaten natto even once."
                },
                {
                    "word": "なんかいも (何回も)",
                    "romajiOrPronunciation": "Nankai mo",
                    "translation": "Many times",
                    "partOfSpeech": "Adverb",
                    "exampleSentence": "その映画は何回も見たことがあります。",
                    "exampleTranslation": "I have watched that movie many times."
                },
                {
                    "word": "のぼります (登ります)",
                    "romajiOrPronunciation": "Noborimasu",
                    "translation": "To climb (a mountain)",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "富士山に登ったことがあります。",
                    "exampleTranslation": "I have climbed Mt. Fuji before."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Verb Plain Past (Ta-Form)] + ことがある",
                    "explanation": "The Ta-form follows the EXACT same phonetic changes as the Te-form (simply replace 'て/で' with 'た/だ'). Then add ことがあります: 行ったことがある (Have gone), 食べたことがある (Have eaten).",
                    "examples": [
                        "行った (Went) + ことがある = Have been to",
                        "飲んだ (Drank) + ことがある = Have drunk"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Ken",
                    "text": "すき焼きを食べたことがありますか？",
                    "romajiOrPronunciation": "Sukiyaki o tabeta koto ga arimasu ka?",
                    "translation": "Have you ever eaten Sukiyaki?"
                },
                {
                    "speaker": "Anna",
                    "text": "いいえ、一度も食べたことがありません。一度食べてみたいです！",
                    "romajiOrPronunciation": "Iie, ichido mo tabeta koto ga arimasen. Ichido tabete mitai desu!",
                    "translation": "No, I have never eaten it even once. I'd love to try eating it once!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n5-u7-03-q1",
                    "type": "multiple_choice",
                    "prompt": "Which sentence means 'I have climbed Mt. Fuji before'?",
                    "options": [
                        "富士山に登ったことがあります",
                        "富士山に登ります",
                        "富士山に登りたいです",
                        "富士山に登っています"
                    ],
                    "correctAnswer": "富士山に登ったことがあります",
                    "explanation": "[Verb Ta-form] + ことがあります is the exact pattern for past experience."
                }
            ]
        },
        {
            "id": "ja-n4-u8-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Potential Ability & Transitive/Intransitive Pairs (可能形・自動詞・他動詞)",
            "unitDescription": "Expressing ability (Can do), object particle が shift, and transitive/intransitive verb pairs.",
            "title": "The Potential Form: Verb Conjugations & Particle が (可能形)",
            "description": "Conjugate verbs into the potential form (can do) across all groups and master the particle を -> が shift.",
            "category": "Potential & Ability",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Conjugate Godan (える), Ichidan (られる), and irregular verbs to express what you can and cannot do.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "はなせます (話せます)",
                    "romajiOrPronunciation": "Hanasemasu",
                    "translation": "Can speak (Godan: su -> se + masu)",
                    "partOfSpeech": "Verb (Potential)",
                    "exampleSentence": "少し日本語が話せます。",
                    "exampleTranslation": "I can speak a little Japanese."
                },
                {
                    "word": "たべられます (食べられます)",
                    "romajiOrPronunciation": "Taberaremasu",
                    "translation": "Can eat (Ichidan: drop ru + raremasu)",
                    "partOfSpeech": "Verb (Potential)",
                    "exampleSentence": "辛いものが食べられますか？",
                    "exampleTranslation": "Can you eat spicy food?"
                },
                {
                    "word": "できます (出来ます)",
                    "romajiOrPronunciation": "Dekimasu",
                    "translation": "Can do (Irregular: suru -> dekiru)",
                    "partOfSpeech": "Verb (Potential)",
                    "exampleSentence": "ピアノを弾くことができます（ピアノができます）。",
                    "exampleTranslation": "I can play the piano."
                },
                {
                    "word": "こられます (来られます)",
                    "romajiOrPronunciation": "Koraremasu",
                    "translation": "Can come (Irregular: kuru -> korareru)",
                    "partOfSpeech": "Verb (Potential)",
                    "exampleSentence": "明日のパーティーに来られますか？",
                    "exampleTranslation": "Can you come to tomorrow's party?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Particle Shift: [Object] が [Potential Verb]",
                    "explanation": "In potential sentences, the direct object particle を usually converts to が because the potential form describes an ability/state. E.g., 日本語を話します (I speak Japanese) -> 日本語が話せます (I CAN speak Japanese).",
                    "examples": [
                        "寿司を食べます -> 寿司が食べられます (Can eat sushi)",
                        "漢字が読めます (Can read Kanji)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Host",
                    "text": "刺身や生魚は食べられますか？",
                    "romajiOrPronunciation": "Sashimi ya namazakana wa taberaremasu ka?",
                    "translation": "Can you eat sashimi and raw fish?"
                },
                {
                    "speaker": "Guest",
                    "text": "はい！大好物ですから、たくさん食べられます。",
                    "romajiOrPronunciation": "Hai! Daikoubutsu desu kara, takusan taberaremasu.",
                    "translation": "Yes! Because it's my favorite food, I can eat a lot."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u8-01-q1",
                    "type": "multiple_choice",
                    "prompt": "Which particle typically marks the object in '日本語___話せます' (I can speak Japanese)?",
                    "options": [
                        "が (ga)",
                        "を (o)",
                        "に (ni)",
                        "で (de)"
                    ],
                    "correctAnswer": "が (ga)",
                    "explanation": "Potential verbs typically shift the direct object marker from を to が."
                }
            ]
        },
        {
            "id": "ja-n4-u8-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Potential Ability & Transitive/Intransitive Pairs (可能形・自動詞・他動詞)",
            "unitDescription": "Expressing ability (Can do), object particle が shift, and transitive/intransitive verb pairs.",
            "title": "Transitive vs. Intransitive Verb Pairs (自動詞と他動詞)",
            "description": "Master Japanese verb pairs: Transitive actions caused by an agent (を) vs. Intransitive natural occurrences (が).",
            "category": "Verb Dynamics",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Distinguish '開ける / 開く', 'つける / つく', '消す / 消える', and never confuse agency with natural states.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "あけます (開けます) [他動詞]",
                    "romajiOrPronunciation": "Akemasu (Transitive)",
                    "translation": "To open (something) [requires agent + を]",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "私が窓を開けます。",
                    "exampleTranslation": "I open the window."
                },
                {
                    "word": "あきます (開きます) [自動詞]",
                    "romajiOrPronunciation": "Akimasu (Intransitive)",
                    "translation": "Opens (by itself) [takes subject + が]",
                    "partOfSpeech": "Verb",
                    "exampleSentence": "ドアが開きました。",
                    "exampleTranslation": "The door opened."
                },
                {
                    "word": "つけます (他) / つきます (自)",
                    "romajiOrPronunciation": "Tsukemasu / Tsukimasu",
                    "translation": "Turn on (transitive) / Turns on (intransitive)",
                    "partOfSpeech": "Verb pair",
                    "exampleSentence": "電気をつけます。電気がつきました。",
                    "exampleTranslation": "I turn on the light. The light turned on."
                },
                {
                    "word": "けします (他) / きえます (自)",
                    "romajiOrPronunciation": "Keshimasu / Kiemasu",
                    "translation": "Turn off, extinguish (transitive) / Goes out (intransitive)",
                    "partOfSpeech": "Verb pair",
                    "exampleSentence": "火を消してください。火が消えました。",
                    "exampleTranslation": "Please put out the fire. The fire went out."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Decisive Formula: [Agent] が [Noun] を [他動詞] vs [Noun] が [自動詞]",
                    "explanation": "1. 他動詞 (Transitive) has human intention and takes を: 窓を開ける (Someone opens the window). 2. 自動詞 (Intransitive) describes the state or spontaneous action and takes が: 窓が開く (The window opens).",
                    "examples": [
                        "私が電気を消します (I turn off the light)",
                        "電気が消えています (The light is off)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "A",
                    "text": "部屋が暑いですね。窓を開けましょうか？",
                    "romajiOrPronunciation": "Heya ga atsui desu ne. Mado o akemashou ka?",
                    "translation": "The room is hot, isn't it? Shall I open the window?"
                },
                {
                    "speaker": "B",
                    "text": "あ、風で窓がもう開いていますよ。",
                    "romajiOrPronunciation": "A, kaze de mado ga mou aite imasu yo.",
                    "translation": "Ah, the window is already open due to the wind."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u8-02-q1",
                    "type": "multiple_choice",
                    "prompt": "Which sentence means 'The door opened' (intransitive event)?",
                    "options": [
                        "ドアが開きました (Doa ga akimashita)",
                        "ドアを開けました (Doa o akemashita)",
                        "ドアを開けます (Doa o akemasu)",
                        "ドアを開けてください (Doa o akete kudasai)"
                    ],
                    "correctAnswer": "ドアが開きました (Doa ga akimashita)",
                    "explanation": "自動詞 (開く) with particle が indicates the door opened naturally."
                }
            ]
        },
        {
            "id": "ja-n4-u8-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 8,
            "unitTitle": "Unit 8: Potential Ability & Transitive/Intransitive Pairs (可能形・自動詞・他動詞)",
            "unitDescription": "Expressing ability (Can do), object particle が shift, and transitive/intransitive verb pairs.",
            "title": "Actions Prepared in Advance: 〜ておく & Spoken 〜とく (Advance Prep)",
            "description": "Express preparing something in advance for future convenience using [Verb Te] + おく (contracted to 〜とく).",
            "category": "Preparation & Daily Life",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Use 〜ておきます formally and 〜とく in natural native daily conversation.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜ておく (〜ておきます)",
                    "romajiOrPronunciation": "〜 Te oku (Te okimasu)",
                    "translation": "To do in advance (for later use)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "ホテルの部屋を予約しておきます。",
                    "exampleTranslation": "I will reserve a hotel room in advance."
                },
                {
                    "word": "〜とく (〜ときます)",
                    "romajiOrPronunciation": "〜 Toku",
                    "translation": "Do in advance (Casual spoken contraction)",
                    "partOfSpeech": "Spoken contraction",
                    "exampleSentence": "ビールを買っとくね（買っておくね）。",
                    "exampleTranslation": "I'll buy some beer in advance, okay?"
                },
                {
                    "word": "よやく (予約)",
                    "romajiOrPronunciation": "Yoyaku",
                    "translation": "Reservation / Booking",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "新幹線のチケットを予約しておきました。",
                    "exampleTranslation": "I booked the bullet train tickets in advance."
                },
                {
                    "word": "しらべます (調べます)",
                    "romajiOrPronunciation": "Shirabemasu",
                    "translation": "To investigate / check / look up",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "時刻表を調べておきます。",
                    "exampleTranslation": "I will check the timetable in advance."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Native Contraction: ておく -> とく",
                    "explanation": "In real-life spoken Japanese, nobody says '買っておくね' (too stiff). Native speakers contract ておく to とく: 買っておく -> 買っとく, 準備しておく -> 準備しとく, 調べておく -> 調べとく.",
                    "examples": [
                        "席を取っとくね (I'll save our seats)",
                        "冷やしておきます (I'll chill it in the fridge in advance)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Wife",
                    "text": "今夜、友達が家に来るから、ビールを冷やしておいてね。",
                    "romajiOrPronunciation": "Kon'ya, tomodachi ga ie ni kuru kara, biiru o hiyashite oite ne.",
                    "translation": "Friends are coming over tonight, so please chill the beer in advance."
                },
                {
                    "speaker": "Husband",
                    "text": "了解！冷蔵庫に入れとくよ。",
                    "romajiOrPronunciation": "Ryoukai! Reizouko ni iretoku yo.",
                    "translation": "Roger! I'll put it in the fridge in advance (casual contraction)."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u8-03-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the casual spoken form of '買っておく' (buy in advance)?",
                    "options": [
                        "買っとく (Kattoku)",
                        "買っちゃう (Kacchau)",
                        "買ってる (Katteru)",
                        "買っといて (Kattoite)"
                    ],
                    "correctAnswer": "買っとく (Kattoku)",
                    "explanation": "〜ておく contracts directly to 〜とく in natural spoken Japanese."
                }
            ]
        },
        {
            "id": "ja-n4-u9-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Giving, Receiving & Social Favors (授受表現: あげる・もらう・くれる)",
            "unitDescription": "Master the core of Japanese social harmony: giving (あげる), receiving (もらう), and giving to me (くれる).",
            "title": "The 3 Giving & Receiving Verbs: あげる・もらう・くれる (授受動詞)",
            "description": "Master the directional psychology of Japanese gifts: Giving outward (あげる), Receiving (もらう), and Inward giving (くれる).",
            "category": "Social Psychology",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Never mix up who gave what to whom on the JLPT N4 exam.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "あげます (上げます)",
                    "romajiOrPronunciation": "Agemasu",
                    "translation": "I give to someone / Someone gives to equal",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "妹に誕生日プレゼントをあげました。",
                    "exampleTranslation": "I gave a birthday present to my younger sister."
                },
                {
                    "word": "くれます",
                    "romajiOrPronunciation": "Kuremasu",
                    "translation": "Someone gives to ME (or my in-group)",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "田中さんが私にお土産をくれました。",
                    "exampleTranslation": "Mr. Tanaka gave me a souvenir."
                },
                {
                    "word": "もらいます (貰います)",
                    "romajiOrPronunciation": "Moraimasu",
                    "translation": "I receive from someone",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "先生に辞書をもらいました。",
                    "exampleTranslation": "I received a dictionary from my teacher."
                },
                {
                    "word": "プレゼント",
                    "romajiOrPronunciation": "Purezento",
                    "translation": "Present / Gift",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "素敵なプレゼントをありがとう。",
                    "exampleTranslation": "Thank you for the wonderful present."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Golden Rule of くれる (Kureru)",
                    "explanation": "You can NEVER say '私が田中さんにあげます' with くれる. くれる is ONLY used when someone else directs an item or kindness TOWARD YOU or your immediate family: [Giver] が 私に [Item] を くれました.",
                    "examples": [
                        "田中さんが私に本をくれました (Tanaka gave me a book)",
                        "私は田中さんに本をあげました (I gave Tanaka a book)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Friend",
                    "text": "その腕時計、すごくかっこいいね！",
                    "romajiOrPronunciation": "Sono udedokei, sugoku kakkoii ne!",
                    "translation": "That wristwatch is super cool!"
                },
                {
                    "speaker": "You",
                    "text": "ありがとう！誕生日に父がくれたんだ。",
                    "romajiOrPronunciation": "Arigatou! Tanjoubi ni chichi ga kuretan da.",
                    "translation": "Thanks! My father gave it to me for my birthday."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u9-01-q1",
                    "type": "multiple_choice",
                    "prompt": "Which verb correctly fills '佐藤さんが私に花を___' (Sato gave me flowers)?",
                    "options": [
                        "くれました (kuremashita)",
                        "あげました (agemashita)",
                        "もらいました (moraimashita)",
                        "やりました (yarimashita)"
                    ],
                    "correctAnswer": "くれました (kuremashita)",
                    "explanation": "When an external person gives something to YOU (私に), the verb MUST be くれました."
                }
            ]
        },
        {
            "id": "ja-n4-u9-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Giving, Receiving & Social Favors (授受表現: あげる・もらう・くれる)",
            "unitDescription": "Master the core of Japanese social harmony: giving (あげる), receiving (もらう), and giving to me (くれる).",
            "title": "Exchanging Favors with Verbs: 〜てあげる, 〜てもらう, 〜てくれる",
            "description": "Express doing favors for others and receiving acts of kindness using [Verb Te] + あげる/もらう/くれる.",
            "category": "Favors & Politeness",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Show genuine appreciation and gratitude for actions done on your behalf.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "〜てくれる (〜てくれます)",
                    "romajiOrPronunciation": "〜 Te kureru",
                    "translation": "Do (a favor) for me",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "友達が駅まで送ってくれました。",
                    "exampleTranslation": "My friend kindly drove me to the station."
                },
                {
                    "word": "〜てもらう (〜てもらいます)",
                    "romajiOrPronunciation": "〜 Te morau",
                    "translation": "Receive the favor of having someone do ...",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "先生に日本語を直してもらいました。",
                    "exampleTranslation": "I had my teacher correct my Japanese."
                },
                {
                    "word": "〜てあげる (〜てあげます)",
                    "romajiOrPronunciation": "〜 Te ageru",
                    "translation": "Do a favor for someone else",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "弟の宿題を手伝ってあげました。",
                    "exampleTranslation": "I helped my little brother with his homework."
                },
                {
                    "word": "てつだいます (手伝います)",
                    "romajiOrPronunciation": "Tetsudaimasu",
                    "translation": "To help / assist",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "引っ越しを手伝ってくれました。",
                    "exampleTranslation": "They kindly helped with my move."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Politeness Trap of '〜てあげる'",
                    "explanation": "Be cautious: saying '〜てあげます' directly to a teacher or boss can sound condescending ('I am doing you a favor!'). Use it freely with children, family, or close friends. When speaking to seniors, use humble Keigo: 〜て差し上げます or simply 〜ましょうか.",
                    "examples": [
                        "荷物を持ってあげましょうか (To a friend)",
                        "直してくれました (Someone corrected it for me)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Lost Traveler",
                    "text": "道が全然わからなくて困っています...",
                    "romajiOrPronunciation": "Michi ga zenzen wakaranakute komatte imasu...",
                    "translation": "I don't know the way at all and am in trouble..."
                },
                {
                    "speaker": "Local",
                    "text": "あ、親切な交番のお巡りさんが地図を書いてくれましたよ！",
                    "romajiOrPronunciation": "A, shinsetsu na kouban no omawari-san ga chizu o kaite kuremashita yo!",
                    "translation": "Ah, the kind police officer at the police box drew a map for me!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u9-02-q1",
                    "type": "multiple_choice",
                    "prompt": "Which pattern means 'My friend helped me with my homework'?",
                    "options": [
                        "友達が宿題を手伝ってくれました",
                        "友達に宿題を手伝ってあげました",
                        "私が友達に宿題を手伝ってくれました",
                        "友達は宿題を手伝わないでした"
                    ],
                    "correctAnswer": "友達が宿題を手伝ってくれました",
                    "explanation": "〜てくれました expresses that an external person kindly performed an action for the speaker."
                }
            ]
        },
        {
            "id": "ja-n4-u9-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 9,
            "unitTitle": "Unit 9: Giving, Receiving & Social Favors (授受表現: あげる・もらう・くれる)",
            "unitDescription": "Master the core of Japanese social harmony: giving (あげる), receiving (もらう), and giving to me (くれる).",
            "title": "Regret & Completion: 〜てしまう & Spoken 〜ちゃう (Shimau / Chau)",
            "description": "Express completed actions ('done completely') AND accidents/regret ('darn it, I accidentally did it!').",
            "category": "Regret & Spoken Native",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Use 〜てしまう in writing and 〜ちゃった / 〜じゃった in casual native conversations.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜てしまう (〜てしまいました)",
                    "romajiOrPronunciation": "〜 Te shimau",
                    "translation": "Completely do / Accidentally do (with regret)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "電車の中に財布を忘れてしまいました。",
                    "exampleTranslation": "I accidentally left my wallet in the train (regret)."
                },
                {
                    "word": "〜ちゃう (〜ちゃった)",
                    "romajiOrPronunciation": "〜 Chau (Chatta)",
                    "translation": "Accidentally did it (Spoken contraction)",
                    "partOfSpeech": "Spoken contraction",
                    "exampleSentence": "ケーキを全部食べちゃった！",
                    "exampleTranslation": "I ended up eating all the cake!"
                },
                {
                    "word": "さいふ (財布)",
                    "romajiOrPronunciation": "Saifu",
                    "translation": "Wallet / Purse",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "財布を落としました。",
                    "exampleTranslation": "I dropped my wallet."
                },
                {
                    "word": "わすれもの (忘れ物)",
                    "romajiOrPronunciation": "Wasuremono",
                    "translation": "Lost item / Something left behind",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "駅の忘れ物センターへ行きます。",
                    "exampleTranslation": "I'll go to the station's lost-and-found center."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Native Spoken Contraction: てしまう -> ちゃう",
                    "explanation": "1. てしまう becomes ちゃう (食べてしまう -> 食べちゃう). 2. でしまう becomes じゃう (飲んでしまう -> 飲んじゃう). Past tense: ちゃった / じゃった. Used constantly in anime and real Japanese.",
                    "examples": [
                        "忘れちゃった (I accidentally forgot)",
                        "死んじゃった (Died / passed away)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Yuki",
                    "text": "どうしたの？顔色が悪いよ。",
                    "romajiOrPronunciation": "Doushita no? Kaoiro ga warui yo.",
                    "translation": "What happened? You look pale."
                },
                {
                    "speaker": "Kenta",
                    "text": "スマホをタクシーの中に忘れちゃったんだ...",
                    "romajiOrPronunciation": "Sumaho o takushii no naka ni wasurechattan da...",
                    "translation": "I accidentally left my smartphone in the taxi..."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u9-03-q1",
                    "type": "multiple_choice",
                    "prompt": "What does '宿題を忘れちゃった！' mean in natural Japanese?",
                    "options": [
                        "I accidentally forgot my homework!",
                        "I did my homework in advance",
                        "Please do my homework",
                        "I can't do homework"
                    ],
                    "correctAnswer": "I accidentally forgot my homework!",
                    "explanation": "〜ちゃった expresses accidental action accompanied by feelings of regret."
                }
            ]
        },
        {
            "id": "ja-n4-u10-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 10,
            "unitTitle": "Unit 10: Future Plans, Volitional & Intentions (意向形・意志・予定)",
            "unitDescription": "Volitional casual let's (〜よう), firm intentions (〜つもり), and scheduled plans (〜予定).",
            "title": "The Volitional Form: Casual Let's & Decisions: 〜よう / 〜おう (意向形)",
            "description": "Conjugate the volitional form across all groups and use it for casual suggestions and personal determination.",
            "category": "Volitional Form",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Conjugate Godan (お-sound + う), Ichidan (よう), and irregulars (しよう, こよう) naturally.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "いこう (行こう)",
                    "romajiOrPronunciation": "Ikou",
                    "translation": "Let's go / I will go (Godan: ku -> kou)",
                    "partOfSpeech": "Verb (Volitional)",
                    "exampleSentence": "一緒に映画を見に行こう！",
                    "exampleTranslation": "Let's go see a movie together!"
                },
                {
                    "word": "たべよう (食べよう)",
                    "romajiOrPronunciation": "Tabeyou",
                    "translation": "Let's eat (Ichidan: drop ru + you)",
                    "partOfSpeech": "Verb (Volitional)",
                    "exampleSentence": "お昼ご飯を食べよう。",
                    "exampleTranslation": "Let's eat lunch."
                },
                {
                    "word": "しよう・こよう (来よう)",
                    "romajiOrPronunciation": "Shiyou / Koyou",
                    "translation": "Let's do / Let's come (Irregular)",
                    "partOfSpeech": "Verb (Volitional)",
                    "exampleSentence": "週末、パーティーをしよう！",
                    "exampleTranslation": "Let's throw a party this weekend!"
                },
                {
                    "word": "〜とおもっています (〜と思っています)",
                    "romajiOrPronunciation": "〜 To omotte imasu",
                    "translation": "I am thinking of / planning to ...",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "来年、日本へ留学しようと思っています。",
                    "exampleTranslation": "I am thinking of studying abroad in Japan next year."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Volitional Form] + と思っています",
                    "explanation": "When expressing a plan you have already been considering for some time, combine the Volitional form with と思っています: 大学で医学を勉強しようと思っています (I have been thinking of studying medicine at university).",
                    "examples": [
                        "車を買おうと思っています (I'm thinking of buying a car)",
                        "早く寝よう (Let's sleep early)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Takuya",
                    "text": "卒業したら何をするの？",
                    "romajiOrPronunciation": "Sotsugyou shitara nani o suru no?",
                    "translation": "What will you do after graduation?"
                },
                {
                    "speaker": "Maya",
                    "text": "日本でITの会社で働こうと思っています。",
                    "romajiOrPronunciation": "Nihon de IT no kaisha de hatarakou to omotte imasu.",
                    "translation": "I'm planning to work at an IT company in Japan."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u10-01-q1",
                    "type": "multiple_choice",
                    "prompt": "What is the volitional form of '飲む' (Nomu - to drink)?",
                    "options": [
                        "飲もう (Nomou)",
                        "飲みよう (Nomiyou)",
                        "飲まよう (Nomayou)",
                        "飲めよう (Nomeyou)"
                    ],
                    "correctAnswer": "飲もう (Nomou)",
                    "explanation": "Godan verbs change the 'u' ending to 'o' + う -> 飲む -> 飲もう (Nomou)."
                }
            ]
        },
        {
            "id": "ja-n4-u10-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 10,
            "unitTitle": "Unit 10: Future Plans, Volitional & Intentions (意向形・意志・予定)",
            "unitDescription": "Volitional casual let's (〜よう), firm intentions (〜つもり), and scheduled plans (〜予定).",
            "title": "Firm Intentions vs Schedules: 〜つもり vs 〜予定 (Tsumori / Yotei)",
            "description": "Distinguish personal subjective determination (〜つもり) from objective organizational schedules (〜予定).",
            "category": "Plans & Intentions",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "State your firm life resolutions using つもり and professional calendars using 予定.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜つもりです",
                    "romajiOrPronunciation": "〜 Tsumori desu",
                    "translation": "I intend to / plan to (personal resolution)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "タバコをやめるつもりです。",
                    "exampleTranslation": "I intend to quit smoking."
                },
                {
                    "word": "〜よていです (〜予定です)",
                    "romajiOrPronunciation": "〜 Yotei desu",
                    "translation": "Is scheduled to / plan (objective)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "新幹線は午後3時に到着する予定です。",
                    "exampleTranslation": "The bullet train is scheduled to arrive at 3:00 PM."
                },
                {
                    "word": "りょこう (旅行)",
                    "romajiOrPronunciation": "Ryokou",
                    "translation": "Travel / Trip",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "来月、北海道を旅行するつもりです。",
                    "exampleTranslation": "Next month, I plan to travel around Hokkaido."
                },
                {
                    "word": "けいかく (計画)",
                    "romajiOrPronunciation": "Keikaku",
                    "translation": "Plan / Project",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "計画を立てます。",
                    "exampleTranslation": "I make a plan."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Decisive Contrast: つもり vs 予定",
                    "explanation": "1. つもり expresses PERSONAL internal willpower or resolution: 国へ帰らないつもりです (I intend not to go back). 2. 予定 expresses FIXED official schedules or facts outside personal whim: 会議は10時からの予定です (The meeting is scheduled from 10).",
                    "examples": [
                        "JLPT N4に合格するつもりです (I intend to pass JLPT N4)",
                        "出張の予定です (Scheduled on business trip)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Colleague",
                    "text": "出張は何曜日の予定ですか？",
                    "romajiOrPronunciation": "Shucchou wa nanyoubi no yotei desu ka?",
                    "translation": "What day of the week is the business trip scheduled for?"
                },
                {
                    "speaker": "Manager",
                    "text": "水曜日から金曜日までの予定です。",
                    "romajiOrPronunciation": "Suiyoubi kara Kin'youbi made no yotei desu.",
                    "translation": "It is scheduled from Wednesday until Friday."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u10-02-q1",
                    "type": "multiple_choice",
                    "prompt": "Which phrase expresses 'I intend to study abroad' (personal willpower)?",
                    "options": [
                        "留学するつもりです",
                        "留学する予定です",
                        "留学してもいいです",
                        "留学してください"
                    ],
                    "correctAnswer": "留学するつもりです",
                    "explanation": "〜つもりです expresses the speaker's personal intention or resolution."
                }
            ]
        },
        {
            "id": "ja-n4-u11-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 11,
            "unitTitle": "Unit 11: The 4 Conditionals: たら・と・ば・なら (条件表現)",
            "unitDescription": "Master the four Japanese 'ifs': General (たら), Natural consequence (と), Hypothetical (ば), Contextual (なら).",
            "title": "The King of Conditionals: 〜たら (If / When)",
            "description": "Conjugate the versatile たら conditional (Plain past + ら) and use it for general conditions and time triggers.",
            "category": "Conditionals",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Form [Verb Ta] + ら and use it for both hypothetical 'if' and sequential 'when'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:45",
            "vocabulary": [
                {
                    "word": "〜たら (〜動詞た形＋ら)",
                    "romajiOrPronunciation": "〜 Tara",
                    "translation": "If / When (General conditional)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "日本へ行ったら、寿司を食べたいです。",
                    "exampleTranslation": "If / When I go to Japan, I want to eat sushi."
                },
                {
                    "word": "じかんがあったら (時間があったら)",
                    "romajiOrPronunciation": "Jikan ga attara",
                    "translation": "If you have time ...",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "時間があったら、お茶を飲みませんか？",
                    "exampleTranslation": "If you have time, wouldn't you like to have tea?"
                },
                {
                    "word": "あめがふったら (雨が降ったら)",
                    "romajiOrPronunciation": "Ame ga futtara",
                    "translation": "If it rains ...",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "雨が降ったら、家にいます。",
                    "exampleTranslation": "If it rains, I will stay home."
                },
                {
                    "word": "おわったら (終わったら)",
                    "romajiOrPronunciation": "Owattara",
                    "translation": "When it finishes / ends",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "仕事が終わったら、連絡します。",
                    "exampleTranslation": "When work finishes, I will contact you."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Why 〜たら is the Most Common Conditional",
                    "explanation": "Unlike the other conditionals, 〜たら allows requests, invitations, and permissions in the main clause: 駅に着いたら電話してください (When you arrive at the station, please call me). Formula: Take plain past (た-form) and add ら.",
                    "examples": [
                        "着いた -> 着いたら (When you arrive)",
                        "安かったら買います (If it is cheap, I'll buy it)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Sara",
                    "text": "今週末、ハイキングに行きませんか？",
                    "romajiOrPronunciation": "Konshuumatsu, haikingu ni ikimasen ka?",
                    "translation": "Would you like to go hiking this weekend?"
                },
                {
                    "speaker": "Ken",
                    "text": "いいですね！でも、雨が降ったら美術館に行きましょう。",
                    "romajiOrPronunciation": "Ii desu ne! Demo, ame ga futtara bijutsukan ni ikimashou.",
                    "translation": "Sounds good! But if it rains, let's go to an art museum."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u11-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you form the conditional 'If you eat' using 食べる?",
                    "options": [
                        "食べたら (Tabetara)",
                        "食べたらば (Tabetaraba)",
                        "食べるたら (Taberutara)",
                        "食べてら (Tabetera)"
                    ],
                    "correctAnswer": "食べたら (Tabetara)",
                    "explanation": "Plain past 食べた + ら = 食べたら (If / when you eat)."
                }
            ]
        },
        {
            "id": "ja-n4-u11-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 11,
            "unitTitle": "Unit 11: The 4 Conditionals: たら・と・ば・なら (条件表現)",
            "unitDescription": "Master the four Japanese 'ifs': General (たら), Natural consequence (と), Hypothetical (ば), Contextual (なら).",
            "title": "Natural Consequence & Machines: 〜と (Whenever / Inevitably)",
            "description": "Express natural consequences, mechanical reactions (buttons, vending machines), and giving street directions.",
            "category": "Conditionals & Directions",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Use [Dictionary Form] + と for inevitable natural laws and street navigation.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜と (辞書形＋と)",
                    "romajiOrPronunciation": "〜 To",
                    "translation": "Whenever / When (Natural or mechanical consequence)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "このボタンを押すと、切符が出ます。",
                    "exampleTranslation": "When you press this button, the ticket comes out."
                },
                {
                    "word": "おす (押す) -> おすと",
                    "romajiOrPronunciation": "Osu -> Osuto",
                    "translation": "To press -> When pressed",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "ボタンを押すと、お釣りが戻ります。",
                    "exampleTranslation": "When you press the button, your change returns."
                },
                {
                    "word": "まがる (曲がる) -> まがると",
                    "romajiOrPronunciation": "Magaru -> Magaruto",
                    "translation": "To turn -> When you turn",
                    "partOfSpeech": "Verb (Godan)",
                    "exampleSentence": "右に曲がると、銀行があります。",
                    "exampleTranslation": "When you turn right, there is a bank."
                },
                {
                    "word": "はるになると (春になると)",
                    "romajiOrPronunciation": "Haru ni naru to",
                    "translation": "When spring arrives",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "春になると、桜が咲きます。",
                    "exampleTranslation": "When spring arrives, cherry blossoms bloom."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Golden Restriction of 〜と",
                    "explanation": "You can NEVER use requests, invitations, or commands with 〜と (NEVER ボタンを押すと、来てください). It describes strictly objective, automatic cause-and-effect: Button pressed -> Ticket emerges.",
                    "examples": [
                        "春になると桜が咲く (Natural law)",
                        "右へ曲がると郵便局がある (Objective direction)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Tourist",
                    "text": "すみません、東京駅へはどう行けばいいですか？",
                    "romajiOrPronunciation": "Sumimasen, Toukyou-eki e wa dou ikeba ii desu ka?",
                    "translation": "Excuse me, how can I get to Tokyo Station?"
                },
                {
                    "speaker": "Local",
                    "text": "この道を真っ直ぐ行くと、左手に大きな駅が見えますよ。",
                    "romajiOrPronunciation": "Kono michi o massugu iku to, hidarite ni ookina eki ga miemasu yo.",
                    "translation": "If you go straight down this street, you'll see a large station on your left."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u11-02-q1",
                    "type": "multiple_choice",
                    "prompt": "Which conditional particle is used for giving street directions (e.g. 'Turn left and you will see the post office')?",
                    "options": [
                        "〜と (〜 to)",
                        "〜たら (〜 tara)",
                        "〜ば (〜 ba)",
                        "〜なら (〜 nara)"
                    ],
                    "correctAnswer": "〜と (〜 to)",
                    "explanation": "〜と describes inevitable physical layout and navigation consequences."
                }
            ]
        },
        {
            "id": "ja-n4-u11-03",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 11,
            "unitTitle": "Unit 11: The 4 Conditionals: たら・と・ば・なら (条件表現)",
            "unitDescription": "Master the four Japanese 'ifs': General (たら), Natural consequence (と), Hypothetical (ば), Contextual (なら).",
            "title": "Contextual Advice: 〜なら (If that's the case / As for)",
            "description": "Give expert recommendations and advice based on a topic raised by your conversational partner.",
            "category": "Advice & Conversation",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Form [Topic] なら and give tailored suggestions: 'If it's [Topic], I recommend...'.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜なら",
                    "romajiOrPronunciation": "〜 Nara",
                    "translation": "If that is the case / If it's ... (Contextual advice)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "京都に行くなら、秋が一番おすすめですよ。",
                    "exampleTranslation": "If you're going to Kyoto, autumn is most recommended."
                },
                {
                    "word": "おすすめ (お勧め)",
                    "romajiOrPronunciation": "Osusume",
                    "translation": "Recommendation",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "ラーメンなら、あのお店が一番おすすめです。",
                    "exampleTranslation": "If it's ramen, that shop is the most recommended."
                },
                {
                    "word": "パソコンをかうなら (パソコンを買うなら)",
                    "romajiOrPronunciation": "Pasokon o kau nara",
                    "translation": "If you are buying a PC",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "パソコンを買うなら、秋葉原がいいですよ。",
                    "exampleTranslation": "If you're buying a PC, Akihabara is great."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Meaning of 〜なら: Topic Picking",
                    "explanation": "Use 〜なら when picking up a topic the other speaker just mentioned and giving them advice: 'Oh, if THAT is what you want to do, then this is the best option'.",
                    "examples": [
                        "日本料理なら寿司が一番です (If it's Japanese food, sushi is number one)",
                        "明日なら空いています (If it's tomorrow, I'm free)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "A",
                    "text": "来週、日本へ旅行に行くんですよ。",
                    "romajiOrPronunciation": "Raishuu, Nihon e ryokou ni ikun desu yo.",
                    "translation": "I'm going on a trip to Japan next week."
                },
                {
                    "speaker": "B",
                    "text": "いいですね！日本へ行くなら、ポケットWi-Fiを借りておくと便利ですよ。",
                    "romajiOrPronunciation": "Ii desu ne! Nihon e iku nara, poketto waifai o karite oku to benri desu yo.",
                    "translation": "Nice! If you're going to Japan, renting a pocket Wi-Fi in advance is very convenient."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u11-03-q1",
                    "type": "multiple_choice",
                    "prompt": "When offering advice based on what someone just said ('If it's ramen, go to that shop'), which conditional is ideal?",
                    "options": [
                        "〜なら (〜 nara)",
                        "〜と (〜 to)",
                        "〜たら (〜 tara)",
                        "〜ば (〜 ba)"
                    ],
                    "correctAnswer": "〜なら (〜 nara)",
                    "explanation": "〜なら picks up on context or topics raised by the listener to provide tailored advice."
                }
            ]
        },
        {
            "id": "ja-n4-u12-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 12,
            "unitTitle": "Unit 12: Conjectures, Hearsay & Impressions (様態・伝聞・推量)",
            "unitDescription": "Looks like (〜そう), Hearsay (〜そう), Uncertainty (〜かもしれない), and Impressions (〜よう/〜らしい).",
            "title": "The Epic Battle: Looks Like 〜そう vs Hearsay 〜そう (様態と伝聞)",
            "description": "Never confuse 'It looks delicious' with 'I heard it is delicious': Verb stem + そう vs Plain form + そう.",
            "category": "Conjectures & Hearsay",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Instantly distinguish visual conjecture (美味しそう) from reported hearsay (美味しいそうだ) on the JLPT N4.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "おいしそう (美味しそう)",
                    "romajiOrPronunciation": "Oishisou",
                    "translation": "Looks delicious (Stem + sou: Visual impression)",
                    "partOfSpeech": "Na-Adjective",
                    "exampleSentence": "このケーキ、とても美味しそうですね！",
                    "exampleTranslation": "This cake looks very delicious!"
                },
                {
                    "word": "おいしいそうだ (美味しいそうだ)",
                    "romajiOrPronunciation": "Oishii sou da",
                    "translation": "I heard that it's delicious (Plain + sou: Hearsay)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "あの店のラーメンはとても美味しいそうです。",
                    "exampleTranslation": "I heard that restaurant's ramen is very delicious."
                },
                {
                    "word": "あめがふりそう (雨が降りそう)",
                    "romajiOrPronunciation": "Ame ga furisou",
                    "translation": "It looks like it's going to rain (Masu stem + sou)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "空が暗いです。雨が降りそうですね。",
                    "exampleTranslation": "The sky is dark. It looks like it will rain."
                },
                {
                    "word": "あめがふるそうだ (雨が降るそうだ)",
                    "romajiOrPronunciation": "Ame ga furu sou da",
                    "translation": "I heard it will rain (Weather report hearsay)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "天気予報によると、明日は雨が降るそうです。",
                    "exampleTranslation": "According to the weather forecast, I heard it will rain tomorrow."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Decisive Grammatical Formula",
                    "explanation": "1. Visual Impression (Looks like): Drop い or ます + そう -> 美味しそう (Looks tasty), 降りそう (Looks like raining). *Special: いい -> よさそう. 2. Hearsay (I heard that): Keep complete PLAIN FORM + そう -> 美味しいそうだ (I heard it's tasty), 降るそうだ (I heard it will rain).",
                    "examples": [
                        "美味しそう (Looks delicious)",
                        "美味しいそうだ (I heard it is delicious)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Colleague",
                    "text": "天気予報見ましたか？",
                    "romajiOrPronunciation": "Tenkiyohou mimashita ka?",
                    "translation": "Did you see the weather forecast?"
                },
                {
                    "speaker": "You",
                    "text": "はい、午後から大雨が降るそうですよ。傘を持っていきましょう。",
                    "romajiOrPronunciation": "Hai, gogo kara ooame ga furu sou desu yo. Kasa o motte ikimashou.",
                    "translation": "Yes, I heard heavy rain will fall from the afternoon. Let's take umbrellas."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u12-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you say 'This food looks delicious' based on visual appearance?",
                    "options": [
                        "美味しそうです (Oishisou desu)",
                        "美味しいそうです (Oishii sou desu)",
                        "美味しかったです (Oishikatta desu)",
                        "美味しいようです (Oishii you desu)"
                    ],
                    "correctAnswer": "美味しそうです (Oishisou desu)",
                    "explanation": "Drop 'い' + そう expresses immediate visual appearance ('looks delicious')."
                }
            ]
        },
        {
            "id": "ja-n4-u12-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 12,
            "unitTitle": "Unit 12: Conjectures, Hearsay & Impressions (様態・伝聞・推量)",
            "unitDescription": "Looks like (〜そう), Hearsay (〜そう), Uncertainty (〜かもしれない), and Impressions (〜よう/〜らしい).",
            "title": "Uncertainty & Possibility: 〜かもしれません (Might / Perhaps)",
            "description": "Express moderate or low probability (~50% chance) using [Plain Form] + かもしれません (casual: かも).",
            "category": "Possibility",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Express caution and possibility in business and daily conversation without sounding overly certain.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜かもしれません",
                    "romajiOrPronunciation": "〜 Kamoshiremasen",
                    "translation": "Might be / Perhaps / Maybe (Formal)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "明日は雨が降るかもしれません。",
                    "exampleTranslation": "It might rain tomorrow."
                },
                {
                    "word": "〜かも",
                    "romajiOrPronunciation": "〜 Kamo",
                    "translation": "Maybe / Might (Casual spoken native)",
                    "partOfSpeech": "Casual particle",
                    "exampleSentence": "彼、もう帰ったかも。",
                    "exampleTranslation": "He might have gone home already."
                },
                {
                    "word": "おくれます (遅れます)",
                    "romajiOrPronunciation": "Okuremasu",
                    "translation": "To be late / delayed",
                    "partOfSpeech": "Verb (Ichidan)",
                    "exampleSentence": "電車が遅れるかもしれません。",
                    "exampleTranslation": "The train might be delayed."
                },
                {
                    "word": "かぜ (風邪)",
                    "romajiOrPronunciation": "Kaze",
                    "translation": "A cold / illness",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "風邪を引いたかもしれません。",
                    "exampleTranslation": "I might have caught a cold."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Native Spoken Shortcut: 〜かも (Kamo)",
                    "explanation": "In casual everyday Japanese, native speakers drop 'しれません' and just say '〜かも' at the end of sentences: 行くかも (Might go), 無理かも (Might be impossible), 好きかも (Might like it).",
                    "examples": [
                        "間に合わないかもしれない (Might not make it in time)",
                        "そうかも (That might be so)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Yuto",
                    "text": "田中さん、まだ来ていませんね。",
                    "romajiOrPronunciation": "Tanaka-san, mada kite imasen ne.",
                    "translation": "Tanaka-san hasn't arrived yet, has he?"
                },
                {
                    "speaker": "Mika",
                    "text": "中央線が止まっているから、遅れるかもしれませんね。",
                    "romajiOrPronunciation": "Chuuou-sen ga tomatte iru kara, okureru kamoshiremasen ne.",
                    "translation": "Because the Chuo Line is stopped, he might be delayed."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u12-02-q1",
                    "type": "multiple_choice",
                    "prompt": "What does '電車に間に合わないかもしれません' mean?",
                    "options": [
                        "I might not make it in time for the train",
                        "I definitely missed the train",
                        "Please wait for the train",
                        "I caught the train"
                    ],
                    "correctAnswer": "I might not make it in time for the train",
                    "explanation": "〜かもしれません expresses uncertainty or moderate probability ('might')."
                }
            ]
        },
        {
            "id": "ja-n4-u13-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 13,
            "unitTitle": "Unit 13: Voice Transformations: Passive & Causative (受身・使役)",
            "unitDescription": "Master the passive voice (〜られる), indirect suffering passive, and causative (〜させる).",
            "title": "The Passive Voice & Suffering Passive: 〜られる (受身形)",
            "description": "Conjugate passive verbs and understand the unique Japanese 'Suffering / Indirect Passive' (迷惑の受身).",
            "category": "Passive Voice",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Conjugate passive verbs across all groups and correctly use particle に for the agent.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "ほめられます (褒められます)",
                    "romajiOrPronunciation": "Homeraremasu",
                    "translation": "To be praised (Ichidan passive)",
                    "partOfSpeech": "Verb (Passive)",
                    "exampleSentence": "先生に褒められました。",
                    "exampleTranslation": "I was praised by the teacher."
                },
                {
                    "word": "ふまれます (踏まれます)",
                    "romajiOrPronunciation": "Fumaremasu",
                    "translation": "To be stepped on (Godan passive)",
                    "partOfSpeech": "Verb (Passive)",
                    "exampleSentence": "満員電車で足を踏まれました。",
                    "exampleTranslation": "My foot was stepped on in the packed train (suffering passive)."
                },
                {
                    "word": "ぬすまれます (盗まれます)",
                    "romajiOrPronunciation": "Nusumaremasu",
                    "translation": "To be stolen",
                    "partOfSpeech": "Verb (Passive)",
                    "exampleSentence": "自転車を盗まれてしまいました。",
                    "exampleTranslation": "My bicycle was stolen (suffering)."
                },
                {
                    "word": "あめにふられます (雨に降られます)",
                    "romajiOrPronunciation": "Ame ni furaremasu",
                    "translation": "To be rained upon (suffering)",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "途中で雨に降られて、濡れました。",
                    "exampleTranslation": "I got rained on halfway and became soaked."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Japanese 'Suffering Passive' (迷惑の受身)",
                    "explanation": "In Japanese, passive can be applied to intransitive verbs to express annoyance or suffering from an event: 雨に降られた (Rained upon), 猫に逃げられた (The cat ran away on me). Formula: The person who caused the action is marked by に.",
                    "examples": [
                        "先生に褒められた (Praised by teacher)",
                        "泥棒に財布を盗まれた (Had wallet stolen by thief)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Colleague",
                    "text": "服が濡れていますね！どうしたんですか？",
                    "romajiOrPronunciation": "Fuku ga nurete imasu ne! Doushitan desu ka?",
                    "translation": "Your clothes are soaked! What happened?"
                },
                {
                    "speaker": "You",
                    "text": "傘を持っていなくて、途中で急な大雨に降られてしまったんです。",
                    "romajiOrPronunciation": "Kasa o motte inakute, tochuu de kyuu na ooame ni furarete shimattan desu.",
                    "translation": "I didn't have an umbrella and got caught in sudden heavy rain on the way."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u13-01-q1",
                    "type": "multiple_choice",
                    "prompt": "In the passive sentence '私は先生___褒められました' (I was praised by the teacher), which particle marks the teacher?",
                    "options": [
                        "に (ni)",
                        "を (o)",
                        "が (ga)",
                        "で (de)"
                    ],
                    "correctAnswer": "に (ni)",
                    "explanation": "In passive sentences, the agent who performed the action is marked by particle に."
                }
            ]
        },
        {
            "id": "ja-n4-u13-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 13,
            "unitTitle": "Unit 13: Voice Transformations: Passive & Causative (受身・使役)",
            "unitDescription": "Master the passive voice (〜られる), indirect suffering passive, and causative (〜させる).",
            "title": "The Causative Voice: Make or Let Someone Do: 〜させる (使役形)",
            "description": "Conjugate causative verbs to express making someone do an action, or granting permission to let them do it.",
            "category": "Causative Voice",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Conjugate Godan (せる), Ichidan (させる), and irregulars (させる, こさせる).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "たべさせます (食べさせます)",
                    "romajiOrPronunciation": "Tabesasemasu",
                    "translation": "Make/let someone eat (Ichidan causative)",
                    "partOfSpeech": "Verb (Causative)",
                    "exampleSentence": "母は子供に野菜を食べさせます。",
                    "exampleTranslation": "The mother makes the child eat vegetables."
                },
                {
                    "word": "いかせます (行かせます)",
                    "romajiOrPronunciation": "Ikasemasu",
                    "translation": "Make/let someone go (Godan: ku -> kaseru)",
                    "partOfSpeech": "Verb (Causative)",
                    "exampleSentence": "息子をアメリカに留学させたいです。",
                    "exampleTranslation": "I want to let my son study abroad in America."
                },
                {
                    "word": "〜させてください",
                    "romajiOrPronunciation": "〜 Sasete kudasai",
                    "translation": "Please let me do ... (Polite request for permission)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "私にやらせてください！",
                    "exampleTranslation": "Please let me do it!"
                },
                {
                    "word": "やすませてください (休ませてください)",
                    "romajiOrPronunciation": "Yasumasete kudasai",
                    "translation": "Please allow me to take time off / rest",
                    "partOfSpeech": "Phrase",
                    "exampleSentence": "体調が悪いので、今日休ませてください。",
                    "exampleTranslation": "Because I feel unwell, please allow me to take the day off today."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Magic Polite Request: 〜させてください (Let me do)",
                    "explanation": "Combining the causative with ください creates the most respectful way to request permission for yourself: 休ませてください (Please let me take time off), 自己紹介させてください (Please allow me to introduce myself).",
                    "examples": [
                        "説明させてください (Please allow me to explain)",
                        "手伝わせてください (Please let me help)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Employee",
                    "text": "部長、熱が38度あるので、今日は病院へ行かせてください。",
                    "romajiOrPronunciation": "Buchou, netsu ga sanjuuhachido aru node, kyou wa byouin e ikasete kudasai.",
                    "translation": "Manager, because I have a fever of 38 degrees, please allow me to go to the hospital today."
                },
                {
                    "speaker": "Manager",
                    "text": "それは大変だ！仕事はいいから、すぐに休んでください。",
                    "romajiOrPronunciation": "Sore wa taihen da! Shigoto wa ii kara, sugu ni yasunde kudasai.",
                    "translation": "That's terrible! Don't worry about work, please rest immediately."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u13-02-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you politely ask your boss 'Please allow me to explain'?",
                    "options": [
                        "説明させてください (Setsumei sasete kudasai)",
                        "説明してください (Setsumei shite kudasai)",
                        "説明させます (Setsumei sasemasu)",
                        "説明しましょう (Setsumei shimashou)"
                    ],
                    "correctAnswer": "説明させてください (Setsumei sasete kudasai)",
                    "explanation": "〜させてください is the humble causative request meaning 'please allow me to do'."
                }
            ]
        },
        {
            "id": "ja-n4-u14-01",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 14,
            "unitTitle": "Unit 14: Everyday Keigo & Native Speech Secrets (敬語・口語・相槌)",
            "unitDescription": "Foundations of Keigo (Sonkeigo & Kenjougo), dropping the subject (脱・主語), and native Aizuchi.",
            "title": "The 3 Keigo Tiers: Sonkeigo, Kenjougo & Teineigo (敬語の基礎)",
            "description": "Master the Japanese honorific triangle: Respectful speech for others (尊敬語) vs Humble speech for yourself (謙譲語).",
            "category": "Honorifics & Business",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Recognize the essential special Keigo verbs on the JLPT N4 exam and in Japanese workplaces.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "いらっしゃいます (尊敬語)",
                    "romajiOrPronunciation": "Irasshaimasu",
                    "translation": "To go / come / exist (Respectful for 行く・来る・いる)",
                    "partOfSpeech": "Keigo (Sonkeigo)",
                    "exampleSentence": "社長は部屋にいらっしゃいますか？",
                    "exampleTranslation": "Is the company president in the room?"
                },
                {
                    "word": "まいります (参ります) [謙譲語]",
                    "romajiOrPronunciation": "Mairimasu",
                    "translation": "To go / come (Humble for 行く・来る)",
                    "partOfSpeech": "Keigo (Kenjougo)",
                    "exampleSentence": "今からそちらへ参ります。",
                    "exampleTranslation": "I will come over to your location right now (humble)."
                },
                {
                    "word": "おっしゃいます (尊敬語)",
                    "romajiOrPronunciation": "Osshaimasu",
                    "translation": "To say (Respectful for 言う)",
                    "partOfSpeech": "Keigo (Sonkeigo)",
                    "exampleSentence": "お客様がおっしゃいました。",
                    "exampleTranslation": "The customer said so."
                },
                {
                    "word": "もうします (申します) [謙譲語]",
                    "romajiOrPronunciation": "Moushimasu",
                    "translation": "To say / be called (Humble for 言う)",
                    "partOfSpeech": "Keigo (Kenjougo)",
                    "exampleSentence": "スミスと申します。",
                    "exampleTranslation": "I am called Smith (humble self-intro)."
                }
            ],
            "grammarNotes": [
                {
                    "title": "The Fundamental Rule of Keigo",
                    "explanation": "1. 尊敬語 (Sonkeigo - Respectful): ELEVATES the customer, client, or teacher. NEVER use Sonkeigo for yourself. 2. 謙譲語 (Kenjougo - Humble): LOWERS yourself and your colleagues to show modesty and respect.",
                    "examples": [
                        "先生がいらっしゃいました (Teacher arrived - Sonkeigo)",
                        "私が参ります (I will go - Kenjougo)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Receptionist",
                    "text": "お名前をお伺いしてもよろしいでしょうか？",
                    "romajiOrPronunciation": "Onamae o oukagai shite mo yoroshii deshous ka?",
                    "translation": "May I inquire your honorable name?"
                },
                {
                    "speaker": "Client",
                    "text": "ABC商事の佐藤と申します。田中部長はいらっしゃいますか？",
                    "romajiOrPronunciation": "ABC-shouji no Satou to moushimasu. Tanaka-buchou wa irasshaimasu ka?",
                    "translation": "I am called Sato from ABC Trading (humble). Is Director Tanaka in (respectful)?"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u14-01-q1",
                    "type": "multiple_choice",
                    "prompt": "When introducing your own name in a business interview, which verb is grammatically correct?",
                    "options": [
                        "〜と申します (〜 to moushimasu - Humble)",
                        "〜とおっしゃいます (〜 to osshaimasu - Respectful)",
                        "〜といらっしゃいます (〜 to irasshaimasu)",
                        "〜と申されます (〜 to mousaremasu)"
                    ],
                    "correctAnswer": "〜と申します (〜 to moushimasu - Humble)",
                    "explanation": "申します (Moushimasu) is the humble Kenjougo verb used strictly for oneself."
                }
            ]
        },
        {
            "id": "ja-n4-u14-02",
            "languageId": "japanese",
            "level": "JLPT N4",
            "unitNumber": 14,
            "unitTitle": "Unit 14: Everyday Keigo & Native Speech Secrets (敬語・口語・相槌)",
            "unitDescription": "Foundations of Keigo (Sonkeigo & Kenjougo), dropping the subject (脱・主語), and native Aizuchi.",
            "title": "The Native Conversational Layer: Dropping the Subject & Aizuchi (脱・主語・相槌)",
            "description": "Speak like a true Tokyo native: drop robotic 'watashi wa', use casual contractions (てる・ちゃう・なきゃ), and master active listening Aizuchi.",
            "category": "Native Fluency Secrets",
            "estimatedMinutes": 8,
            "xpReward": 45,
            "objective": "Transform stiff textbook Japanese into natural, authentic, flowing native conversation.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "6:00",
            "vocabulary": [
                {
                    "word": "うん・そうなんだ",
                    "romajiOrPronunciation": "Un / Sou nan da",
                    "translation": "Yeah / I see! (Casual Aizuchi nod)",
                    "partOfSpeech": "Aizuchi phrase",
                    "exampleSentence": "へえ、そうなんだ！知らなかった。",
                    "exampleTranslation": "Whoa, is that so! I didn't know that."
                },
                {
                    "word": "なるほど・たしかに",
                    "romajiOrPronunciation": "Naruhodo / Tashika ni",
                    "translation": "Indeed / That makes complete sense",
                    "partOfSpeech": "Aizuchi phrase",
                    "exampleSentence": "なるほど、そういうことですね。",
                    "exampleTranslation": "I see, that makes sense now."
                },
                {
                    "word": "何してるの？ (何しているの？)",
                    "romajiOrPronunciation": "Nani shiteru no?",
                    "translation": "What are you doing? (Contraction: shiteiru -> shiteru)",
                    "partOfSpeech": "Casual contraction",
                    "exampleSentence": "今どこ？何してるの？",
                    "exampleTranslation": "Where are you now? What're you doing?"
                },
                {
                    "word": "〜じゃん！",
                    "romajiOrPronunciation": "〜 Jan!",
                    "translation": "Isn't it?! / Right?! (Tokyo casual confirmation)",
                    "partOfSpeech": "Sentence ending",
                    "exampleSentence": "これ、すごく美味しいじゃん！",
                    "exampleTranslation": "This is super delicious, right?!"
                }
            ],
            "grammarNotes": [
                {
                    "title": "The 3 Secrets to Sounding Like a Native Speaker",
                    "explanation": "1. Stop saying '私は' (Watashi wa) every sentence. In Japanese, repeating 'I' sounds self-obsessed and unnatural. 2. Contract continuous forms: している -> してる, 食べている -> 食べてる. 3. Use Aizuchi (相槌): Always nod verbally while listening (うん, そうなんだ, なるほど) so the speaker knows you are engaged.",
                    "examples": [
                        "(私は) ラーメン食べたい (Just: ラーメン食べたい！)",
                        "行かなきゃ！ (I gotta go!)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Friend A",
                    "text": "昨日、渋谷で新しいカフェ見つけたんだけど、めっちゃ良かったよ！",
                    "romajiOrPronunciation": "Kinou, Shibuya de atarashii kafe mitsuketan dakedo, meccha yokatta yo!",
                    "translation": "Yesterday I found a new cafe in Shibuya, and it was super great!"
                },
                {
                    "speaker": "Friend B",
                    "text": "へえ、マジで？なんていうお店？今度一緒に行こうよ！",
                    "romajiOrPronunciation": "Hee, maji de? Nante iu omise? Kondo issho ni ikou yo!",
                    "translation": "Whoa, seriously? What's the shop called? Let's go together next time!"
                }
            ],
            "exercises": [
                {
                    "id": "ja-n4-u14-02-q1",
                    "type": "multiple_choice",
                    "prompt": "Why do native Japanese speakers omit '私は' (Watashi wa) in natural daily conversation?",
                    "options": [
                        "Japanese is a high-context language where the topic is already understood",
                        "It is grammatically forbidden",
                        "'Watashi' is an archaic word",
                        "It can only be used by children"
                    ],
                    "correctAnswer": "Japanese is a high-context language where the topic is already understood",
                    "explanation": "Japanese omitted subjects (脱・主語) keep dialogue natural, dynamic, and non-repetitive."
                }
            ]
        },
        {
            "id": "ja-n3-u15-01",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 15,
            "unitTitle": "Unit 15: JLPT N3 Intermediate Mastery (中級文法・思考・試行)",
            "unitDescription": "Bridging to advanced fluency: opinions (〜と思う), attempting actions (〜てみる), and simultaneous events (〜ながら).",
            "title": "Expressing Thoughts & Quotations: 〜とおもう (To omou)",
            "description": "Express opinions, subjective evaluations, and indirect reported speech: [Plain form] + と思います.",
            "category": "Opinions & Thoughts",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Quote statements and frame opinions politely in academic and casual discourse.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜とおもいます (〜と思います)",
                    "romajiOrPronunciation": "〜 To omoimasu",
                    "translation": "I think that ...",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "日本語の漢字はとても面白いと思います。",
                    "exampleTranslation": "I think Japanese Kanji are very interesting."
                },
                {
                    "word": "いけん (意見)",
                    "romajiOrPronunciation": "Iken",
                    "translation": "Opinion",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "自分の意見を述べます。",
                    "exampleTranslation": "I state my own opinion."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Plain Form] + と思います",
                    "explanation": "Verbs, adjectives, and nouns in their plain form attach directly to と思います. For nouns and Na-adjectives, attach だ: 学生だと思います (I think he is a student).",
                    "examples": [
                        "明日は晴れると思います (I think it will be sunny tomorrow)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "A",
                    "text": "新しいプロジェクトはどう思いますか？",
                    "romajiOrPronunciation": "Atarashii purojekuto wa dou omoimasu ka?",
                    "translation": "What do you think of the new project?"
                },
                {
                    "speaker": "B",
                    "text": "少し大変ですが、成功すると思います。",
                    "romajiOrPronunciation": "Sukoshi taihen desu ga, seikou suru to omoimasu.",
                    "translation": "It is a bit tough, but I think it will succeed."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-u15-01-q1",
                    "type": "multiple_choice",
                    "prompt": "How do you form 'I think it is convenient' using 便利 (Benri)?",
                    "options": [
                        "便利だと思います (Benri da to omoimasu)",
                        "便利と思います (Benri to omoimasu)",
                        "便利いと思います (Benri i to omoimasu)",
                        "便利でしたと思います (Benri deshita to omoimasu)"
                    ],
                    "correctAnswer": "便利だと思います (Benri da to omoimasu)",
                    "explanation": "Na-adjectives require だ before the quotation particle と."
                }
            ]
        },
        {
            "id": "ja-n3-u15-02",
            "languageId": "japanese",
            "level": "JLPT N3",
            "unitNumber": 15,
            "unitTitle": "Unit 15: JLPT N3 Intermediate Mastery (中級文法・思考・試行)",
            "unitDescription": "Bridging to advanced fluency: opinions (〜と思う), attempting actions (〜てみる), and simultaneous events (〜ながら).",
            "title": "Attempting Actions: 〜てみる (Te-miru - Try doing)",
            "description": "Express trying something out to see what it is like: [Verb Te] + みる.",
            "category": "Attempts & Experiments",
            "estimatedMinutes": 6,
            "xpReward": 35,
            "objective": "Express tasting new cuisine, trying on clothes, or experimenting with new hobbies.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:00",
            "vocabulary": [
                {
                    "word": "〜てみる (〜てみます)",
                    "romajiOrPronunciation": "〜 Te miru",
                    "translation": "To try doing ... (to see how it goes)",
                    "partOfSpeech": "Pattern",
                    "exampleSentence": "納豆を初めて食べてみました。",
                    "exampleTranslation": "I tried eating natto for the first time."
                },
                {
                    "word": "きてみます (着てみます)",
                    "romajiOrPronunciation": "Kite mimasu",
                    "translation": "Try on (clothes)",
                    "partOfSpeech": "Verb phrase",
                    "exampleSentence": "このジャケットを着てみてもいいですか？",
                    "exampleTranslation": "May I try on this jacket?"
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Verb て-form] + みる",
                    "explanation": "Derived from the verb 見る (to see), 〜てみる literally means 'do and see what happens'.",
                    "examples": [
                        "やってみます (I'll give it a try)",
                        "行ってみてください (Please try going there)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Shopper",
                    "text": "このシャツ、試着してみてもいいですか？",
                    "romajiOrPronunciation": "Kono shatsu, shichaku shite mite mo ii desu ka?",
                    "translation": "May I try on this shirt?"
                },
                {
                    "speaker": "Clerk",
                    "text": "かしこまりました。試着室へご案内します。",
                    "romajiOrPronunciation": "Kashikomarimashita. Shichakushitsu e go-annai shimasu.",
                    "translation": "Certainly. I will guide you to the fitting room."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n3-u15-02-q1",
                    "type": "multiple_choice",
                    "prompt": "What does '一度日本酒を飲んでみたいです' mean?",
                    "options": [
                        "I want to try drinking sake once",
                        "I always drink sake",
                        "I don't like sake",
                        "Please drink sake"
                    ],
                    "correctAnswer": "I want to try drinking sake once",
                    "explanation": "〜てみたい combines trial (〜てみる) with desire (〜たい)."
                }
            ]
        },
        {
            "id": "ja-n2-u16-01",
            "languageId": "japanese",
            "level": "JLPT N2",
            "unitNumber": 16,
            "unitTitle": "Unit 16: JLPT N2 Advanced & Business Logic (論理・複合格助詞)",
            "unitDescription": "Advanced formal structures: based upon (〜に基づいて), strong contrasts (〜にもかかわらず), and sources (〜によると).",
            "title": "Actions Based Upon: 〜にもとづいて (Based on data/facts)",
            "description": "Express actions, laws, and decisions grounded in objective data, evidence, or regulations.",
            "category": "Advanced Logic",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Form [Noun] に基づいて in academic essays, news, and business presentations.",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "〜にもとづいて (〜に基づいて)",
                    "romajiOrPronunciation": "〜 Ni motozuite",
                    "translation": "Based on / Grounded upon",
                    "partOfSpeech": "Compound particle",
                    "exampleSentence": "アンケートの結果に基づいて計画を立てます。",
                    "exampleTranslation": "We develop our plan based on the survey results."
                },
                {
                    "word": "ほうりつ (法律)",
                    "romajiOrPronunciation": "Houritsu",
                    "translation": "Law / Legislation",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "法律に基づいて行動します。",
                    "exampleTranslation": "We act in accordance with the law."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Noun] + に基づいて",
                    "explanation": "Used in formal written and spoken Japanese to denote that an action is derived from an objective foundation, survey, law, or fact.",
                    "examples": [
                        "事実に基づいて報道する (Report based on facts)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Presenter",
                    "text": "本日の提案は、最新の市場データに基づいて作成いたしました。",
                    "romajiOrPronunciation": "Honjitsu no teian wa, saishin no shijou deeta ni motozuite sakusei itashimashita.",
                    "translation": "Today's proposal was prepared based on the latest market data."
                },
                {
                    "speaker": "Director",
                    "text": "素晴らしい分析ですね。詳しく聞かせてください。",
                    "romajiOrPronunciation": "Subarashii bunseki desu ne. Kuwashiku kikasete kudasai.",
                    "translation": "Wonderful analysis. Please share more details."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n2-u16-01-q1",
                    "type": "multiple_choice",
                    "prompt": "Which phrase means 'Based on data' in formal Japanese?",
                    "options": [
                        "データに基づいて (Deeta ni motozuite)",
                        "データにとって (Deeta ni totte)",
                        "データに関して (Deeta ni kanshite)",
                        "データに対して (Deeta ni taishite)"
                    ],
                    "correctAnswer": "データに基づいて (Deeta ni motozuite)",
                    "explanation": "〜に基づいて expresses 'grounded upon' or 'based upon'."
                }
            ]
        },
        {
            "id": "ja-n1-u17-01",
            "languageId": "japanese",
            "level": "JLPT N1",
            "unitNumber": 17,
            "unitTitle": "Unit 17: JLPT N1 Literary & Native Masterclass (高度な文法・洗練された表現)",
            "unitDescription": "Literary markers (〜を皮切りに), unique identity expressions (〜ならでは), and formal compulsion (〜を余儀なくされる).",
            "title": "Uniqueness & Inimitable Quality: 〜ならでは (Naredewa)",
            "description": "Express qualities, craftsmanship, or cultural traits that can only be found in a specific entity.",
            "category": "Literary Nuance",
            "estimatedMinutes": 7,
            "xpReward": 40,
            "objective": "Express unique praise: '[Entity] ならではの [Noun]' (A specialty only achievable by Entity).",
            "videoUrl": "https://www.youtube.com/watch?v=ujDtm0hZyII",
            "videoDuration": "5:30",
            "vocabulary": [
                {
                    "word": "〜ならでは (〜ならではの)",
                    "romajiOrPronunciation": "〜 Naredewa",
                    "translation": "Distinctive to / Unique only to ...",
                    "partOfSpeech": "Expression",
                    "exampleSentence": "これは京都の職人ならではの繊細な技術です。",
                    "exampleTranslation": "This is delicate craftsmanship unique only to Kyoto artisans."
                },
                {
                    "word": "しょくにん (職人)",
                    "romajiOrPronunciation": "Shokunin",
                    "translation": "Artisan / Craftsman",
                    "partOfSpeech": "Noun",
                    "exampleSentence": "熟練の職人の技です。",
                    "exampleTranslation": "It is the technique of a master craftsman."
                }
            ],
            "grammarNotes": [
                {
                    "title": "Formula: [Noun] + ならではの + [Quality]",
                    "explanation": "Derived from 'なら' (if) and 'では' (not), meaning 'if it were not for X, it would be impossible'. Expresses high praise for unique attributes.",
                    "examples": [
                        "日本ならではのおもてなし (Hospitality unique to Japan)"
                    ]
                }
            ],
            "conversationDialogue": [
                {
                    "speaker": "Critic",
                    "text": "この料理は、日本の四季ならではの素材の美しさが活かされていますね。",
                    "romajiOrPronunciation": "Kono ryouri wa, Nihon no shiki naredewa no sozai no utsukushisa ga ikasarete imasu ne.",
                    "translation": "This dish brings to life the beauty of ingredients unique to Japan's four seasons."
                },
                {
                    "speaker": "Chef",
                    "text": "ありがとうございます。旬の味わいをお楽しみください。",
                    "romajiOrPronunciation": "Arigatou gozaimasu. Shun no ajiwai o o-tanoshimi kudasai.",
                    "translation": "Thank you very much. Please enjoy the flavor of the season."
                }
            ],
            "exercises": [
                {
                    "id": "ja-n1-u17-01-q1",
                    "type": "multiple_choice",
                    "prompt": "What does '京都ならではの体験' mean?",
                    "options": [
                        "An experience that can only be had in Kyoto",
                        "A cheap trip to Kyoto",
                        "A common experience across Japan",
                        "An impossible journey to Kyoto"
                    ],
                    "correctAnswer": "An experience that can only be had in Kyoto",
                    "explanation": "〜ならでは denotes a unique, distinctive quality exclusive to that subject."
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
