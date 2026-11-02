import React from 'react';

export const LingoraLogo = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Lingora Logo Icon: Minimalist flat-vector icon combining 
          a friendly human profile silhouette + blue speech bubble + communication arc */}
      <div className={`${iconSizes[size] || iconSizes.md} relative shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Sky Blue Speech Bubble (#3B82F6) */}
          <path
            d="M8 22C8 13.1634 15.1634 6 24 6C32.8366 6 40 13.1634 40 22C40 30.8366 32.8366 38 24 38C20.6136 38 17.4729 36.9458 14.8872 35.143L8 38L9.89735 31.621C8.68593 28.7961 8 25.5097 8 22Z"
            fill="#3B82F6"
          />

          {/* Friendly Human Profile / Face Silhouette (Soft Peach #FDBA74 & White) inside the speech bubble */}
          <path
            d="M23 13C20.2386 13 18 15.2386 18 18C18 20.7614 20.2386 23 23 23C25.7614 23 28 20.7614 28 18C28 15.2386 25.7614 13 23 13Z"
            fill="#FDBA74"
          />
          <path
            d="M16 29C16 26.2386 18.2386 24 21 24H25C27.7614 24 30 26.2386 30 29V31H16V29Z"
            fill="#FFFFFF"
          />

          {/* Green Language Soundwave / Orbital Dot (#10B981) */}
          <circle cx="33" cy="16" r="3" fill="#10B981" />
          <path
            d="M33 11C35.7614 11 38 13.2386 38 16"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`${textSizes[size] || textSizes.md} font-extrabold tracking-tight text-[#1E3A8A] leading-tight flex items-center gap-1`}
        >
          LINGORA
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981]" />
        </span>
        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">
            Learn Languages. Unlock Your World.
          </span>
        )}
      </div>
    </div>
  );
};
export default LingoraLogo;
