# 🌍 Lingora – AI-Powered Multilingual Learning Platform

[![React](https://img.shields.io/badge/React-19.0%20(JSX)-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI%20Tutor-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Learn Languages. Unlock Your World.**  
> Master 10 world languages with structured CEFR/JLPT/TOPIK/HSK curriculum, real-time conversational AI tutoring powered by Google Gemini, native voice speech recognition, study materials hub, and gamified progress tracking.

---

## 🚀 Key Highlights & Architectural Overview

1. **Pure React JSX & JavaScript Frontend**:
   - Clean, lightweight, and modern React JSX architecture (`.jsx` and `.js`).
   - Zero TypeScript compilation hurdles, fast build times (~1.5s).
   - Pixel-perfect responsive design across all devices (mobile phones, tablets, laptops, widescreen PCs).
   - Native SVG vector flag icons for all supported countries.

2. **Independent Backend with MongoDB Atlas**:
   - Dedicated `backend/` folder built with Node.js, Express, Mongoose, and JWT.
   - Built for **MongoDB Atlas** (100% free M0 cluster supported).
   - Password hashing with `bcryptjs` and session tokens with `jsonwebtoken`.
   - **Zero-Config Resilient Fallback**: If `MONGODB_URI` is not yet configured, the platform automatically switches to an in-memory session store so anyone can sign up, log in, and learn immediately without errors!

3. **1-Click Instant Learner & Admin Access**:
   - Instant guest / demo access for any visitor so they can experience courses right away.
   - 1-Click Founder & Administrator console login (`shadowmonarch8688@gmail.com`).

4. **10 Supported Global Languages**:
   - 🇫🇷 **French** (CEFR A1–C2)
   - 🇩🇪 **German** (CEFR A1–C2)
   - 🇯🇵 **Japanese** (JLPT N5–N1)
   - 🇰🇷 **Korean** (TOPIK I–II)
   - 🇪🇸 **Spanish** (CEFR A1–C2)
   - 🇨🇳 **Mandarin Chinese** (HSK 1–4)
   - 🇷🇺 **Russian** (A1–C1)
   - 🇵🇹 **Portuguese** (CEFR A1–B2)
   - 🇮🇹 **Italian** (CEFR A1–C2)
   - 🇸🇦 **Arabic** (Modern Standard Arabic)

5. **AI Language Tutor (Google Gemini)**:
   - Free-form conversation practice with voice output & recognition.
   - Situational roleplay (Café, Train Station, Hotel, Meet & Greet).
   - Grammar doctor with dual-language explanations (English & Hindi).
   - Pronunciation accent lab and dynamic quiz generator.

---

## 🛠️ Quick Start Guide

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/SubhamSaha8688/Lingora.git
cd Lingora

# Install dependencies
npm install
```

### 2. Configure Environment Variables (`.env`)

Create a `.env` file in the root directory:

```env
# MongoDB Atlas Database URI (Free tier from https://cloud.mongodb.com)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/lingora?retryWrites=true&w=majority

# JWT Token Secret
JWT_SECRET=your_jwt_secret_key_here

# Google Gemini API Key (Free from https://aistudio.google.com)
GEMINI_API_KEY=your_gemini_api_key

# Admin Email Privileges
VITE_ADMIN_EMAILS=shadowmonarch8688@gmail.com
```

> **Note**: Even if you haven't created your MongoDB Atlas cluster yet, Lingora will launch and work right away in session mode!

### 3. Run the Full-Stack Application

```bash
# Start backend and frontend simultaneously
npm run dev

# Or build the frontend for production
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub: `https://github.com/SubhamSaha8688/Lingora.git`
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import `SubhamSaha8688/Lingora`.
4. Under **Environment Variables**, add:
   - `MONGODB_URI` = your MongoDB Atlas connection string
   - `GEMINI_API_KEY` = your Google Gemini API key
   - `JWT_SECRET` = your secret string
5. Click **Deploy**. Vercel will build the Vite app and serve the serverless API routes (`/api/auth`, `/api/progress`, `/api/tutor`, `/api/health`) automatically.

---

## 🍃 MongoDB Atlas Setup Guide (Free Tier)

1. Sign up for free at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a new **M0 (Free)** cluster (choose AWS or Google Cloud, nearest region).
3. Under **Security > Database Access**, add a database user with username & password.
4. Under **Security > Network Access**, click **Add IP Address** > select **Allow Access from Anywhere** (`0.0.0.0/0`).
5. Click **Connect > Drivers > Node.js**, and copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/lingora?retryWrites=true&w=majority
   ```
6. Paste it into your `.env` or Vercel Environment Variables as `MONGODB_URI`.

---

## 👤 Author & Ownership

- **Founder & Maintainer**: Subham Saha ([@SubhamSaha8688](https://github.com/SubhamSaha8688))
- **Email**: `shadowmonarch8688@gmail.com`
- **Repository**: [https://github.com/SubhamSaha8688/Lingora](https://github.com/SubhamSaha8688/Lingora)
- **License**: MIT
