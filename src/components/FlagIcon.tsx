import React from 'react';

export type FlagCode =
  | 'french'
  | 'fr'
  | 'german'
  | 'de'
  | 'japanese'
  | 'ja'
  | 'jp'
  | 'korean'
  | 'ko'
  | 'kr'
  | 'spanish'
  | 'es'
  | 'mandarin'
  | 'chinese'
  | 'zh'
  | 'cn'
  | 'russian'
  | 'ru'
  | 'portuguese'
  | 'pt'
  | 'br'
  | 'italian'
  | 'it'
  | 'arabic'
  | 'ar'
  | 'sa'
  | string;

interface FlagIconProps {
  code?: FlagCode;
  flag?: string; // support emoji input like '🇫🇷'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  rounded?: 'none' | 'sm' | 'md' | 'full';
  shadow?: boolean;
}

// Normalize any language id or emoji string to standard country code
function normalizeFlagCode(code?: string, flag?: string): string {
  const query = (code || '').toLowerCase().trim();
  const emoji = (flag || '').trim();

  if (query === 'french' || query === 'fr' || emoji.includes('🇫🇷')) return 'fr';
  if (query === 'german' || query === 'de' || emoji.includes('🇩🇪')) return 'de';
  if (query === 'japanese' || query === 'ja' || query === 'jp' || emoji.includes('🇯🇵')) return 'jp';
  if (query === 'korean' || query === 'ko' || query === 'kr' || emoji.includes('🇰🇷')) return 'kr';
  if (query === 'spanish' || query === 'es' || emoji.includes('🇪🇸')) return 'es';
  if (query === 'mandarin' || query === 'chinese' || query === 'zh' || query === 'cn' || emoji.includes('🇨🇳')) return 'cn';
  if (query === 'russian' || query === 'ru' || emoji.includes('🇷🇺')) return 'ru';
  if (query === 'portuguese' || query === 'pt' || query === 'br' || emoji.includes('🇧🇷')) return 'br';
  if (query === 'italian' || query === 'it' || emoji.includes('🇮🇹')) return 'it';
  if (query === 'arabic' || query === 'ar' || query === 'sa' || emoji.includes('🇸🇦')) return 'sa';
  if (query === 'gb' || query === 'uk' || query === 'english' || emoji.includes('🇬🇧')) return 'gb';
  if (query === 'in' || query === 'india' || query === 'hindi' || emoji.includes('🇮🇳')) return 'in';

  return query;
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  code,
  flag,
  size = 'md',
  className = '',
  rounded = 'sm',
  shadow = true,
}) => {
  const normalized = normalizeFlagCode(code, flag);

  const sizeClasses = {
    xs: 'w-4 h-3',
    sm: 'w-5 h-3.5',
    md: 'w-6 h-4.5',
    lg: 'w-8 h-6',
    xl: 'w-10 h-7.5',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-[3px]',
    md: 'rounded-md',
    full: 'rounded-full aspect-square object-cover',
  };

  const shadowClass = shadow ? 'shadow-xs ring-1 ring-black/10' : '';

  const renderSvg = () => {
    switch (normalized) {
      case 'fr': // France
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="213.3" height="480" fill="#002654" />
            <rect x="213.3" width="213.4" height="480" fill="#FFFFFF" />
            <rect x="426.7" width="213.3" height="480" fill="#CE1126" />
          </svg>
        );

      case 'de': // Germany
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="160" fill="#000000" />
            <rect y="160" width="640" height="160" fill="#DD0000" />
            <rect y="320" width="640" height="160" fill="#FFCE00" />
          </svg>
        );

      case 'jp': // Japan
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="480" fill="#FFFFFF" />
            <circle cx="320" cy="240" r="144" fill="#BC002D" />
          </svg>
        );

      case 'it': // Italy
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="213.3" height="480" fill="#009246" />
            <rect x="213.3" width="213.4" height="480" fill="#FFFFFF" />
            <rect x="426.7" width="213.3" height="480" fill="#CE2B37" />
          </svg>
        );

      case 'ru': // Russia
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="160" fill="#FFFFFF" />
            <rect y="160" width="640" height="160" fill="#0039A6" />
            <rect y="320" width="640" height="160" fill="#D52B1E" />
          </svg>
        );

      case 'es': // Spain
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="120" fill="#AA151B" />
            <rect y="120" width="640" height="240" fill="#F1BF00" />
            <rect y="360" width="640" height="120" fill="#AA151B" />
            {/* Simplified Spanish Coat of Arms icon */}
            <g transform="translate(130, 180) scale(0.65)">
              <rect x="0" y="0" width="70" height="90" rx="10" fill="#AA151B" stroke="#800c11" strokeWidth="4" />
              <rect x="15" y="15" width="40" height="60" fill="#F1BF00" />
              <path d="M 5 -10 L 65 -10 L 50 -25 L 35 -15 L 20 -25 Z" fill="#F1BF00" stroke="#800c11" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'kr': // South Korea
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="480" fill="#FFFFFF" />
            {/* Taegeuk Circle */}
            <g transform="translate(320, 240) rotate(-34)">
              <path d="M -110 0 A 110 110 0 0 0 110 0 A 55 55 0 0 0 0 0 A 55 55 0 0 1 -110 0 Z" fill="#CD2E3A" />
              <path d="M -110 0 A 110 110 0 0 1 110 0 A 55 55 0 0 1 0 0 A 55 55 0 0 0 -110 0 Z" fill="#0047A0" />
            </g>
            {/* 4 Trigrams */}
            {/* Top Left (Geon) */}
            <g transform="translate(160, 120) rotate(34)" stroke="#000000" strokeWidth="12">
              <line x1="-35" y1="-20" x2="35" y2="-20" />
              <line x1="-35" y1="0" x2="35" y2="0" />
              <line x1="-35" y1="20" x2="35" y2="20" />
            </g>
            {/* Bottom Right (Gon) */}
            <g transform="translate(480, 360) rotate(34)" stroke="#000000" strokeWidth="12">
              <line x1="-35" y1="-20" x2="-6" y2="-20" /><line x1="6" y1="-20" x2="35" y2="-20" />
              <line x1="-35" y1="0" x2="-6" y2="0" /><line x1="6" y1="0" x2="35" y2="0" />
              <line x1="-35" y1="20" x2="-6" y2="20" /><line x1="6" y1="20" x2="35" y2="20" />
            </g>
            {/* Top Right (Gam) */}
            <g transform="translate(480, 120) rotate(-34)" stroke="#000000" strokeWidth="12">
              <line x1="-35" y1="-20" x2="-6" y2="-20" /><line x1="6" y1="-20" x2="35" y2="-20" />
              <line x1="-35" y1="0" x2="35" y2="0" />
              <line x1="-35" y1="20" x2="-6" y2="20" /><line x1="6" y1="20" x2="35" y2="20" />
            </g>
            {/* Bottom Left (Ri) */}
            <g transform="translate(160, 360) rotate(-34)" stroke="#000000" strokeWidth="12">
              <line x1="-35" y1="-20" x2="35" y2="-20" />
              <line x1="-35" y1="0" x2="-6" y2="0" /><line x1="6" y1="0" x2="35" y2="0" />
              <line x1="-35" y1="20" x2="35" y2="20" />
            </g>
          </svg>
        );

      case 'cn': // China
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="480" fill="#DE2910" />
            {/* Big Star */}
            <polygon
              points="100,50 118,105 175,105 129,139 146,194 100,160 54,194 71,139 25,105 82,105"
              fill="#FFDE00"
            />
            {/* 4 Small Stars */}
            <polygon points="190,40 196,55 212,55 200,65 204,80 190,70 176,80 180,65 168,55 184,55" fill="#FFDE00" transform="scale(0.85) translate(40, -10)" />
            <polygon points="230,80 236,95 252,95 240,105 244,120 230,110 216,120 220,105 208,95 224,95" fill="#FFDE00" transform="scale(0.85) translate(40, -5)" />
            <polygon points="230,140 236,155 252,155 240,165 244,180 230,170 216,180 220,165 208,155 224,155" fill="#FFDE00" transform="scale(0.85) translate(40, 5)" />
            <polygon points="190,185 196,200 212,200 200,210 204,225 190,215 176,225 180,210 168,200 184,200" fill="#FFDE00" transform="scale(0.85) translate(40, 10)" />
          </svg>
        );

      case 'br': // Brazil
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="480" fill="#009B3A" />
            <polygon points="320,40 590,240 320,440 50,240" fill="#FEDF00" />
            <circle cx="320" cy="240" r="115" fill="#002776" />
            {/* White celestial band */}
            <path
              d="M 210 260 Q 320 210 430 260"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="16"
            />
          </svg>
        );

      case 'sa': // Saudi Arabia / Arabic
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="480" fill="#006C35" />
            {/* Simplified iconic sword & Arabic calligraphy representation */}
            <g fill="#FFFFFF">
              {/* Calligraphy bar */}
              <rect x="150" y="160" width="340" height="48" rx="8" fill="#FFFFFF" opacity="0.95" />
              <text x="320" y="196" fill="#006C35" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                العربية
              </text>
              {/* Sword */}
              <rect x="170" y="270" width="290" height="12" rx="4" />
              <polygon points="460,276 490,272 460,284" />
              <rect x="200" y="255" width="10" height="42" rx="3" />
            </g>
          </svg>
        );

      case 'gb': // United Kingdom
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <path d="M0 0v480h640V0z" fill="#012169" />
            <path d="M0 0l640 480m0-480L0 480" stroke="#FFF" strokeWidth="60" />
            <path d="M0 0l640 480m0-480L0 480" stroke="#C8102E" strokeWidth="30" />
            <path d="M320 0v480M0 240h640" stroke="#FFF" strokeWidth="100" />
            <path d="M320 0v480M0 240h640" stroke="#C8102E" strokeWidth="60" />
          </svg>
        );

      case 'in': // India
        return (
          <svg viewBox="0 0 640 480" className="w-full h-full block">
            <rect width="640" height="160" fill="#FF9933" />
            <rect y="160" width="640" height="160" fill="#FFFFFF" />
            <rect y="320" width="640" height="160" fill="#138808" />
            <circle cx="320" cy="240" r="48" fill="none" stroke="#000080" strokeWidth="6" />
            <circle cx="320" cy="240" r="10" fill="#000080" />
            <path
              d="M320 192v96M272 240h96M286 206l68 68M286 274l68-68"
              stroke="#000080"
              strokeWidth="3.5"
            />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-xs font-black text-slate-700">
            {flag || code?.slice(0, 2).toUpperCase() || '🌐'}
          </div>
        );
    }
  };

  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden select-none align-middle ${sizeClasses[size]} ${roundedClasses[rounded]} ${shadowClass} ${className}`}
      title={code || flag || 'Flag'}
    >
      {renderSvg()}
    </span>
  );
};
