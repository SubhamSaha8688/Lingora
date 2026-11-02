# 🌍 Lingora – AI-Powered Multilingual Learning Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI%20Tutor-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Learn Languages. Unlock Your World.**  
> Master 10 world languages with structured CEFR/JLPT/TOPIK/HSK curriculum, real-time conversational AI tutoring powered by Google Gemini, pronunciation coaching, study materials hub, and gamified progress tracking.

---

## ✨ Features

### 🌐 10 Supported World Languages
- 🇫🇷 **French** (CEFR A1–B2)
- 🇩🇪 **German** (CEFR A1–B2)
- 🇯🇵 **Japanese** (JLPT N5–N2 with Kanji, Kana & Romaji)
- 🇰🇷 **Korean** (TOPIK I–II with Hangul & Romanization)
- 🇪🇸 **Spanish** (CEFR A1–B2)
- 🇨🇳 **Mandarin Chinese** (HSK 1–4 with Pinyin & Tones)
- 🇷🇺 **Russian** (A1–B1 with Cyrillic & Latin phonetics)
- 🇵🇹 **Portuguese** (CEFR A1–B2)
- 🇮🇹 **Italian** (CEFR A1–B2)
- 🇸🇦 **Arabic** (Modern Standard Arabic with transliteration)

### 🤖 Gemini AI Tutor (5 Adaptive Modes)
1. **Interactive Chat**: Conversational practice adapted to your proficiency level with instant grammar feedback.
2. **Grammar Professor**: Deep linguistic breakdowns, conjugation tables, and practice sentences in English or Hindi.
3. **Situational Roleplay**: Real-world scenarios (ordering coffee in Paris, booking trains in Tokyo, asking directions in Berlin).
4. **Pronunciation Coach**: Syllable stress, phonetic transcription, tone marks, and audio tips.
5. **Quiz Generator**: Dynamic practice exercises and translation quizzes generated on the fly.

### 🎮 Gamification & Retention
- **Streaks & Daily Goals**: Keep the momentum alive with streak counters and customizable daily XP goals.
- **Hearts & Gems**: Interactive learning mechanics with rewards and heart replenishment.
- **Global Leaderboard**: Compete with other language learners across the world.
- **Interactive Quizzes**: Multiple choice, word pairing, listening recognition, and sentence building with confetti celebration.

### 📚 Study Materials & Cheatsheets
- Downloadable and previewable grammar cheat sheets, vocabulary workbooks, and exam prep PDFs.
- Integrated purchase and unlocking system.

### 📱 Progressive Web App (PWA)
- Full standalone mobile app experience for Android and iOS.
- Offline caching, responsive layout, and app-like navigation.

### 🛡️ Admin Management Console
- Curriculum and lesson creator with preview.
- Student analytics, engagement metrics, and subscription plan management.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite 8, TailwindCSS v4, Framer Motion, Lucide Icons, Canvas Confetti.
- **Backend**: Node.js, Express, tsx.
- **AI Engine**: Google Gemini API via official `@google/genai` SDK (`gemini-2.5-flash` / `gemini-2.0-flash`).
- **Database & Auth**: Google Firebase Auth & Cloud Firestore.
- **Speech**: HTML5 Web Speech API (Speech Recognition & Speech Synthesis).

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v20+ or v22+
- npm v10+
- (Optional) [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### 1. Clone the Repository
```bash
git clone https://github.com/SubhamSaha8688/Lingora.git
cd Lingora
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your Gemini API key:
```env
PORT=3000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.5-flash
VITE_ADMIN_EMAILS=shadowmonarch8688@gmail.com
APP_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

### Build the Static Assets
```bash
npm run build
```

### Run the Full-Stack Production Server
```bash
npm start
```

### Deploy with Docker
```bash
# Build Docker image
docker build -t lingora .

# Run container
docker run -d -p 3000:3000 --env-file .env lingora
```

### Deploy to Cloud Platforms (Vercel, Render, Railway, Cloud Run)
- **Render / Railway**: Connect your GitHub repository, choose **Node**, build command: `npm install && npm run build`, start command: `npm start`. Add your environment variables (`GEMINI_API_KEY`, etc.) in the platform dashboard.
- **Vercel / Netlify**: Configure root directory with build command `npm run build` and output directory `dist`.

---

## ⚙️ Environment Variables Reference

| Variable | Description | Default |
|---|---|---|
| `PORT` | HTTP port for the Express full-stack server | `3000` |
| `NODE_ENV` | Environment mode (`development` or `production`) | `development` |
| `GEMINI_API_KEY` | Google Gemini API Key for AI tutoring & quizzes | *None* |
| `GEMINI_MODEL` | Gemini model code (`gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-flash`) | `gemini-2.5-flash` |
| `VITE_ADMIN_EMAILS`| Comma-separated list of admin email addresses | `shadowmonarch8688@gmail.com` |
| `APP_URL` | Public URL of the app | `http://localhost:3000` |

---

## 📁 Project Structure

```
lingora/
├── public/                 # Static assets, SVG icons, PWA manifest
│   ├── icon.svg
│   └── manifest.json
├── server/                 # Express backend services
│   └── tutorService.ts     # Gemini AI tutor orchestration & prompt engineering
├── src/                    # Frontend React 19 application
│   ├── components/         # UI components & views
│   │   ├── AdminDashboard.tsx
│   │   ├── AiTutor.tsx
│   │   ├── AuthModal.tsx
│   │   ├── Header.tsx
│   │   ├── HomeDashboard.tsx
│   │   ├── InstallAppModal.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── LearnPath.tsx
│   │   ├── LingoraLogo.tsx
│   │   ├── LingoraMascot.tsx
│   │   ├── Navigation.tsx
│   │   ├── OnboardingModal.tsx
│   │   ├── PracticeHub.tsx
│   │   ├── QuizSession.tsx
│   │   ├── StudyMaterialsView.tsx
│   │   ├── SubscriptionModal.tsx
│   │   └── UserProfileView.tsx
│   ├── context/            # Global state (Auth, User Profile, Gamification)
│   │   └── AuthContext.tsx
│   ├── data/               # Multilingual curriculum database
│   │   └── curriculum.ts
│   ├── lib/                # Firebase SDK initialization & error handling
│   │   └── firebase.ts
│   ├── utils/              # Speech recognition & TTS speech helpers
│   │   └── speech.ts
│   ├── App.tsx             # Root application view
│   ├── index.css           # Tailwind v4 styles
│   └── main.tsx            # Vite entrypoint
├── Dockerfile              # Production container build
├── firestore.rules         # Hardened Firestore security rules
├── package.json            # Scripts & dependencies
├── server.ts               # Full-stack server entrypoint
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler & vendor code-splitting configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) © 2026 Subham Saha.
