import React from 'react';
import { Home, BookOpen, Bot, Trophy, UserCircle, FileText } from 'lucide-react';
import { LingoraMascot } from './LingoraMascot.tsx';

interface NavigationProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNavigation: React.FC<NavigationProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'AI Tutor', icon: Bot, isSpecial: true },
    { id: 'materials', label: 'Materials', icon: FileText },
    { id: 'leaderboard', label: 'Leagues', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: UserCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 py-1.5 px-2 lg:hidden shadow-lg safe-area-bottom">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-2xl transition-all relative ${
                isActive ? 'text-[#1E3A8A]' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 text-[#1E3A8A] scale-105'
                    : tab.isSpecial
                    ? 'text-[#3B82F6]'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className={`text-[10px] font-bold tracking-tight mt-0.5 ${isActive ? 'font-black' : ''}`}>
                {tab.label}
              </span>
              {tab.isSpecial && !isActive && (
                <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#10B981] ring-2 ring-white" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export const DesktopSidebarNav: React.FC<NavigationProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'home', label: 'Dashboard', icon: Home, desc: 'Overview & Goals' },
    { id: 'learn', label: 'Learn Path', icon: BookOpen, desc: 'Course Curriculum' },
    { id: 'practice', label: 'AI Voice Tutor', icon: Bot, badge: 'AI', desc: 'Speaking & Chat' },
    { id: 'materials', label: 'Study Materials', icon: FileText, desc: 'PDF Guides & Notes' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, desc: 'Weekly Leagues' },
    { id: 'profile', label: 'My Profile', icon: UserCircle, desc: 'Stats & Badges' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 py-6 pr-6">
      <div className="sticky top-24 space-y-4">
        {/* Lingo Mascot Helper Card in Sidebar */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 border border-slate-100 flex items-center gap-3">
          <LingoraMascot expression="welcome" size="sm" />
          <div>
            <span className="text-[10px] font-black uppercase text-[#1E3A8A] block">
              Meet Lingo
            </span>
            <p className="text-xs font-bold text-[#20243A]">Your Language Companion</p>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Navigation
          </div>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-left transition-all ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-md shadow-[#1E3A8A]/20 font-bold'
                    : 'hover:bg-white text-slate-600 hover:text-[#20243A] font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-1.5 rounded-xl ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-tight">{tab.label}</div>
                    <div className={`text-[11px] ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                      {tab.desc}
                    </div>
                  </div>
                </div>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white text-[#1E3A8A]' : 'bg-[#10B981] text-white'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
