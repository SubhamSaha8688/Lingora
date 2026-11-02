import React from 'react';

export type MascotExpression =
  | 'welcome'
  | 'teaching'
  | 'thinking'
  | 'correct'
  | 'incorrect'
  | 'encouragement'
  | 'celebration'
  | 'streak'
  | 'achievements'
  | 'course_completion';

interface MascotProps {
  expression?: MascotExpression;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  bubbleText?: string;
}

export const LingoraMascot: React.FC<MascotProps> = ({
  expression = 'welcome',
  size = 'md',
  className = '',
  bubbleText,
}) => {
  const dimensions = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Optional Speech Bubble above mascot */}
      {bubbleText && (
        <div className="mb-2 max-w-[220px] rounded-2xl bg-white px-3.5 py-2 text-xs font-extrabold text-[#20243A] shadow-md border border-slate-100 relative animate-in fade-in zoom-in-95">
          {bubbleText}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-100 rotate-45" />
        </div>
      )}

      <div className={`${dimensions[size]} relative transition-transform duration-300`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Body Purple Gradient */}
            <linearGradient id="owlBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>

            {/* Belly Soft Lavender Gradient */}
            <linearGradient id="owlBellyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EDE9FE" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>

            {/* Eye Shine Glow */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ear Tufts (Feathers) */}
          <path d="M26 38 Q18 16 34 26 Z" fill="#6D28D9" />
          <path d="M94 38 Q102 16 86 26 Z" fill="#6D28D9" />

          {/* Feet (Orange Claws) */}
          <ellipse cx="46" cy="110" rx="9" ry="5" fill="#F59E0B" />
          <ellipse cx="74" cy="110" rx="9" ry="5" fill="#F59E0B" />

          {/* Main Body (Friendly Rounded Owl Shape) */}
          <rect x="24" y="24" width="72" height="84" rx="36" fill="url(#owlBodyGrad)" />

          {/* Soft Belly Patch */}
          <ellipse cx="60" cy="74" rx="26" ry="28" fill="url(#owlBellyGrad)" />

          {/* Belly Feathers (Curved Chevrons) */}
          <path d="M54 66 Q60 70 66 66" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M50 75 Q60 79 70 75" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M55 84 Q60 88 65 84" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" />

          {/* Left Eye Socket */}
          <circle cx="44" cy="46" r="15" fill="white" stroke="#6D28D9" strokeWidth="1" />
          {/* Right Eye Socket */}
          <circle cx="76" cy="46" r="15" fill="white" stroke="#6D28D9" strokeWidth="1" />

          {/* DYNAMIC EYE & EXPRESSION RENDERING */}
          {/* 1. Welcome / Default (Friendly Big Sparkling Eyes) */}
          {expression === 'welcome' && (
            <>
              <circle cx="44" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="76" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="47" cy="43" r="3" fill="white" />
              <circle cx="79" cy="43" r="3" fill="white" />
              <circle cx="42" cy="48" r="1.5" fill="white" />
              <circle cx="74" cy="48" r="1.5" fill="white" />
              {/* Rosy Cheeks */}
              <circle cx="30" cy="56" r="4.5" fill="#F472B6" opacity="0.5" />
              <circle cx="90" cy="56" r="4.5" fill="#F472B6" opacity="0.5" />
            </>
          )}

          {/* 2. Correct / Celebration / Achievements (Joyful Happy Arc Eyes) */}
          {(expression === 'correct' || expression === 'celebration' || expression === 'achievements') && (
            <>
              <path d="M37 47 Q44 38 51 47" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M69 47 Q76 38 83 47" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Rosy Cheeks */}
              <circle cx="30" cy="54" r="5" fill="#F472B6" opacity="0.6" />
              <circle cx="90" cy="54" r="5" fill="#F472B6" opacity="0.6" />
              {/* Little party confetti stars */}
              {expression === 'celebration' && (
                <>
                  <polygon points="18,18 20,24 26,24 21,27 23,33 18,29 13,33 15,27 10,24 16,24" fill="#F59E0B" />
                  <polygon points="102,18 104,24 110,24 105,27 107,33 102,29 97,33 99,27 94,24 100,24" fill="#10B981" />
                </>
              )}
            </>
          )}

          {/* 3. Thinking (Looking upward thoughtfully) */}
          {expression === 'thinking' && (
            <>
              <circle cx="43" cy="42" r="7.5" fill="#1E1B4B" />
              <circle cx="75" cy="42" r="7.5" fill="#1E1B4B" />
              <circle cx="46" cy="39" r="2.8" fill="white" />
              <circle cx="78" cy="39" r="2.8" fill="white" />
              {/* Curious Eyebrows */}
              <path d="M36 30 Q44 26 50 30" stroke="#4C1D95" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M70 28 Q76 32 82 28" stroke="#4C1D95" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}

          {/* 4. Incorrect / Encouragement (Gentle, supportive, caring expression - never mocking) */}
          {(expression === 'incorrect' || expression === 'encouragement') && (
            <>
              <circle cx="44" cy="47" r="7.5" fill="#1E1B4B" />
              <circle cx="76" cy="47" r="7.5" fill="#1E1B4B" />
              <circle cx="46" cy="44" r="3" fill="white" />
              <circle cx="78" cy="44" r="3" fill="white" />
              {/* Soft, empathetic tilt to eyebrows */}
              <path d="M37 32 Q44 35 50 31" stroke="#4C1D95" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M70 31 Q76 35 83 32" stroke="#4C1D95" strokeWidth="2.2" strokeLinecap="round" />
              {/* Small encouraging blush */}
              <circle cx="32" cy="56" r="4" fill="#F472B6" opacity="0.4" />
              <circle cx="88" cy="56" r="4" fill="#F472B6" opacity="0.4" />
            </>
          )}

          {/* 5. Streak / Fire (Energetic eyes with subtle flame badge) */}
          {expression === 'streak' && (
            <>
              <circle cx="44" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="76" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="47" cy="43" r="3" fill="white" />
              <circle cx="79" cy="43" r="3" fill="white" />
              {/* Small Fire Crown on top */}
              <path d="M52 14 Q60 6 68 14 Q65 18 60 16 Q55 18 52 14 Z" fill="#F59E0B" />
            </>
          )}

          {/* 6. Teaching (Wise professor look with neat little glasses) */}
          {expression === 'teaching' && (
            <>
              <circle cx="44" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="76" cy="46" r="8" fill="#1E1B4B" />
              <circle cx="47" cy="43" r="3" fill="white" />
              <circle cx="79" cy="43" r="3" fill="white" />
              {/* Cute Golden Spectacles */}
              <circle cx="44" cy="46" r="14" stroke="#F59E0B" strokeWidth="2" fill="none" />
              <circle cx="76" cy="46" r="14" stroke="#F59E0B" strokeWidth="2" fill="none" />
              <path d="M58 46 L62 46" stroke="#F59E0B" strokeWidth="2.5" />
            </>
          )}

          {/* 7. Course Completion (Graduation Cap / Laurel) */}
          {expression === 'course_completion' && (
            <>
              <path d="M37 47 Q44 38 51 47" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M69 47 Q76 38 83 47" stroke="#1E1B4B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Graduation mortarboard cap */}
              <polygon points="60,6 94,18 60,30 26,18" fill="#1E1B4B" />
              <rect x="52" y="27" width="16" height="7" rx="3" fill="#1E1B4B" />
              <path d="M82 22 L86 36 L84 38 L80 36 Z" fill="#F59E0B" />
            </>
          )}

          {/* Golden Beak */}
          <polygon points="60,54 53,63 67,63" fill="#F59E0B" />
          <polygon points="60,57 55,63 65,63" fill="#D97706" />

          {/* Left Wing */}
          <path d="M24 54 Q14 74 26 90 Q30 76 28 62 Z" fill="#5B21B6" />

          {/* Right Wing holding Green Learning Book */}
          {/* Green Learning Book */}
          <g transform="translate(68, 68)">
            {/* Book Base (Green) */}
            <rect x="0" y="0" width="28" height="34" rx="4" fill="#10B981" />
            {/* Pages (Soft Cream White) */}
            <rect x="3" y="3" width="22" height="28" rx="2" fill="#F8FAFC" />
            {/* Book Spine Detail */}
            <line x1="14" y1="3" x2="14" y2="31" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* Bookmark Ribbon */}
            <path d="M12 0 L16 0 L16 10 L14 8 L12 10 Z" fill="#F59E0B" />
            {/* Lingora 'L' on cover edge */}
            <text x="6" y="20" fill="#10B981" fontSize="10" fontWeight="900" fontFamily="sans-serif">L</text>
          </g>

          {/* Wing holding book */}
          <path d="M96 54 Q106 72 90 84 Q88 72 92 60 Z" fill="#5B21B6" />
        </svg>
      </div>
    </div>
  );
};
