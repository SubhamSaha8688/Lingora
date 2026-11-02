import React, { useState } from 'react';
import { LingoraLogo } from './LingoraLogo.jsx';
import { FlagIcon } from './FlagIcon.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { SUPPORTED_LANGUAGES } from '../data/curriculum.js';
import {
  Flame,
  Heart,
  Gem,
  Crown,
  ChevronDown,
  User,
  Shield,
  Sparkles,
  LogOut,
  Globe,
  Smartphone,
} from 'lucide-react';

export const Header = ({
  onOpenAuth,
  onOpenSubscription,
  onNavigateTab,
  activeTab,
  onOpenInstallApp,
}) => {
  const { profile, firebaseUser, logout, updateUserLanguage, updateUserLevel, isAdmin } = useAuth();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === profile.targetLanguage) || SUPPORTED_LANGUAGES[0];

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigateTab('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-xl cursor-pointer"
          >
            <LingoraLogo size="sm" />
          </button>

          {/* Language & Level Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-xs sm:text-sm font-bold text-[#20243A] transition border border-slate-200/60 cursor-pointer"
            >
              <FlagIcon code={currentLang.id} size="sm" />
              <span className="hidden sm:inline">{currentLang.name}</span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-[#1E3A8A]/10 text-[#1E3A8A] font-extrabold truncate max-w-[90px]">
                {profile.currentLevel}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </button>

            {langMenuOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-3xl bg-white shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Select Language (10 Supported)
                </div>
                <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => {
                        updateUserLanguage(lang.id);
                        updateUserLevel(lang.availableLevels[0]);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        lang.id === profile.targetLanguage
                          ? 'bg-blue-50 text-[#1E3A8A]'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <FlagIcon code={lang.id} size="sm" />
                        <span>{lang.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{lang.pathwayType}</span>
                    </button>
                  ))}
                </div>

                <div className="my-2 border-t border-slate-100" />

                <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Pathway Level ({currentLang.pathwayType})
                </div>
                <div className="flex flex-wrap gap-1 p-1">
                  {currentLang.availableLevels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        updateUserLevel(lvl);
                        setLangMenuOpen(false);
                      }}
                      className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition cursor-pointer ${
                        profile.currentLevel === lvl
                          ? 'bg-[#1E3A8A] text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gamification Stats: Streak, Gems, Hearts, Plus */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak */}
          <div
            title="Daily Learning Streak"
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 font-extrabold text-xs sm:text-sm cursor-default"
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{profile.streak}</span>
          </div>

          {/* Gems */}
          <div
            title="Lingora Gems"
            className="hidden min-[420px]:flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 font-extrabold text-xs sm:text-sm cursor-default"
          >
            <Gem className="w-4 h-4 fill-[#3B82F6] text-[#3B82F6]" />
            <span>{profile.gems}</span>
          </div>

          {/* Hearts */}
          <div
            title={profile.plan === 'premium' ? 'Unlimited Hearts (Lingora Plus)' : `${profile.hearts} Hearts remaining`}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 font-extrabold text-xs sm:text-sm cursor-default"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>{profile.plan === 'premium' ? '∞' : profile.hearts}</span>
          </div>

          {/* Plus Button */}
          {profile.plan === 'free' ? (
            <button
              onClick={onOpenSubscription}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-black text-xs shadow-sm transition transform active:scale-95 cursor-pointer"
            >
              <Crown className="w-3.5 h-3.5 fill-white" />
              <span>PLUS</span>
            </button>
          ) : (
            <span className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-wider uppercase border border-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600" /> Plus
            </span>
          )}

          {/* Android / Mobile App Button */}
          {onOpenInstallApp && (
            <button
              onClick={onOpenInstallApp}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-[#6546D7] font-bold text-xs border border-purple-200/80 transition cursor-pointer"
              title="Install Android / Mobile App"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#6546D7]" />
              <span>Get App</span>
            </button>
          )}

          {/* Admin shortcut button if authorized */}
          {isAdmin && (
            <button
              onClick={() => onNavigateTab('admin')}
              className={`p-2 rounded-xl transition cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-blue-50 text-[#1E3A8A] hover:bg-blue-100'
              }`}
              title="Admin Dashboard"
            >
              <Shield className="w-4 h-4" />
            </button>
          )}

          {/* Sign In CTA if not logged in */}
          {!firebaseUser && (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* User Account / Avatar */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-1.5 p-1 rounded-full hover:ring-2 hover:ring-[#3B82F6]/40 transition cursor-pointer"
            >
              {profile.photoURL ? (
                <img
                  src={profile.photoURL}
                  alt={profile.displayName}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-xs">
                  {profile.displayName?.charAt(0) || 'U'}
                </div>
              )}
            </button>

            {userMenuOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <p className="font-bold text-sm text-[#20243A] truncate">{profile.displayName}</p>
                  <p className="text-xs text-slate-500 truncate">{profile.email}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#059669]">
                    {profile.totalXp} XP • {profile.plan === 'premium' ? 'Premium Learner' : 'Free Learner'}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onNavigateTab('profile');
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 text-slate-700 text-left cursor-pointer"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>My Profile & Stats</span>
                </button>

                <button
                  onClick={() => {
                    onNavigateTab('materials');
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 text-slate-700 text-left cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>Study Materials</span>
                </button>

                <button
                  onClick={() => {
                    onOpenSubscription();
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-amber-50 text-amber-700 text-left cursor-pointer"
                >
                  <Crown className="w-4 h-4 text-amber-500" />
                  <span>Lingora Plus Plans</span>
                </button>

                {onOpenInstallApp && (
                  <button
                    onClick={() => {
                      onOpenInstallApp();
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-purple-50 text-[#6546D7] text-left cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-[#6546D7]" />
                    <span>Install Mobile App</span>
                  </button>
                )}

                {isAdmin && (
                  <button
                    onClick={() => {
                      onNavigateTab('admin');
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-purple-50 text-[#1E3A8A] text-left cursor-pointer"
                  >
                    <Shield className="w-4 h-4 text-[#1E3A8A]" />
                    <span>Admin Console</span>
                  </button>
                )}

                <div className="my-1 border-t border-slate-100" />

                {firebaseUser ? (
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 text-left cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onOpenAuth();
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-bold bg-[#1E3A8A] text-white hover:bg-[#1e40af] transition cursor-pointer"
                  >
                    <span>Sign In / Create Account</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
