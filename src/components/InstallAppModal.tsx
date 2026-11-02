import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Check, Share, X, Sparkles } from 'lucide-react';
import { LingoraLogo } from './LingoraLogo.tsx';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if running in standalone PWA mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);

    const ua = window.navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(ua));
    setIsIOS(/iphone|ipad|ipod/.test(ua));

    const handleBeforePrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforePrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforePrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isAndroid,
    isIOS,
    promptInstall,
  };
}

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isAndroid, isIOS, promptInstall } = usePWAInstall();
  const [installedSuccess, setInstalledSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const ok = await promptInstall();
      if (ok) setInstalledSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-7 border border-slate-100 max-h-[92vh] overflow-y-auto">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#6546D7]/15 to-[#45B8E8]/10 rounded-full blur-2xl -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#6546D7] flex items-center justify-center text-white shadow-lg shadow-[#6546D7]/30">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#20243A]">Lingora Mobile App</h3>
            <p className="text-xs font-semibold text-slate-500">Android & iOS Installation Guide</p>
          </div>
        </div>

        {/* Status Box */}
        {isInstalled || installedSuccess ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">Lingora is already installed!</p>
              <p className="text-xs text-emerald-700">Open it from your home screen or app drawer anytime.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-[#F8F9FC] border border-slate-200/80 rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#6546D7]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#6546D7]">
                  Native App Experience
                </span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Full-screen immersive lessons without browser address bar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Instant offline caching for study materials & audio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  Instant access icon right on your phone home screen
                </li>
              </ul>
            </div>

            {/* Direct One-Click Install for Android/Chromium */}
            {isInstallable ? (
              <button
                onClick={handleInstallClick}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-[#6546D7] hover:bg-[#5233c4] text-white font-extrabold text-sm shadow-xl shadow-[#6546D7]/25 transition transform active:scale-95 mb-4"
              >
                <Download className="w-5 h-5" />
                <span>Install on Android / Device</span>
              </button>
            ) : null}

            {/* Android instructions */}
            <div className="space-y-3 mb-5">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black">ANDROID</span>
                  How to install via Google Chrome:
                </p>
                <ol className="text-xs text-slate-600 list-decimal list-inside space-y-1 pl-1">
                  <li>Tap the <strong>three dots (⋮)</strong> in Chrome at top right.</li>
                  <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                  <li>Tap <strong>Install</strong> to add Lingora with its purple owl icon.</li>
                </ol>
              </div>

              {/* iOS instructions */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-black">IPHONE / IPAD</span>
                  How to install via Safari:
                </p>
                <ol className="text-xs text-slate-600 list-decimal list-inside space-y-1 pl-1">
                  <li>Tap the <strong>Share</strong> button (<Share className="w-3 h-3 inline text-slate-500" />) in Safari toolbar.</li>
                  <li>Scroll down and tap <strong>"Add to Home Screen"</strong>.</li>
                  <li>Tap <strong>Add</strong> at top right.</li>
                </ol>
              </div>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};
