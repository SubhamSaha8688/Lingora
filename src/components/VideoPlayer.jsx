import React, { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Clock,
  Sparkles,
  ExternalLink,
  Layers,
  GraduationCap,
} from 'lucide-react';

/**
 * Helper to convert various YouTube / video URLs into an embeddable format
 */
export function getEmbedUrl(url, startTimeSeconds = 0) {
  if (!url) return null;

  // YouTube standard watch
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&start=${startTimeSeconds}`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/);
  if (vimeoMatch && vimeoMatch[3]) {
    return `https://player.vimeo.com/video/${vimeoMatch[3]}`;
  }

  return url;
}

export const VideoPlayer = ({
  videoUrl,
  title = 'Native Masterclass Explanation',
  instructor = 'Native Master Instructor',
  duration = '3-5 min',
  bookmarks = [],
  onBookmarkClick,
}) => {
  const [activeBookmarkTime, setActiveBookmarkTime] = useState(0);
  const [embedSrc, setEmbedSrc] = useState(() => getEmbedUrl(videoUrl, 0));

  if (!videoUrl) return null;

  const handleJumpToBookmark = (seconds) => {
    setActiveBookmarkTime(seconds);
    const newSrc = getEmbedUrl(videoUrl, seconds);
    setEmbedSrc(newSrc);
    if (onBookmarkClick) onBookmarkClick(seconds);
  };

  const isIframe = embedSrc?.includes('youtube') || embedSrc?.includes('vimeo');

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl text-white">
      {/* Video Masterclass Header */}
      <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#1E3A8A] text-white">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Micro-Masterclass
              </span>
              <span className="text-slate-500 text-[10px]">•</span>
              <span className="text-[10px] text-slate-400 font-bold">{instructor}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-sm sm:max-w-md">
              {title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Video Container (16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full bg-black">
        {isIframe ? (
          <iframe
            key={embedSrc}
            src={embedSrc}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-contain"
            playsInline
          />
        )}
      </div>

      {/* Interactive Key Bookmarks / Timeline Chapters */}
      {bookmarks && bookmarks.length > 0 && (
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Interactive Lesson Bookmarks</span>
            </span>
            <span className="text-[10px] text-slate-500">Tap to jump & practice</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {bookmarks.map((bm, bIdx) => {
              const isActive = activeBookmarkTime === bm.seconds;
              return (
                <button
                  key={bIdx}
                  type="button"
                  onClick={() => handleJumpToBookmark(bm.seconds)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isActive
                      ? 'bg-[#3B82F6] text-white shadow-xs'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-mono text-blue-300">
                    {bm.timestamp || `00:${String(bm.seconds).padStart(2, '0')}`}
                  </span>
                  <span>{bm.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
