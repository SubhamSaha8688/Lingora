import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { Trophy, Flame, Crown, ArrowUp, ArrowDown, Sparkles, Shield, Medal } from 'lucide-react';
import { FlagIcon } from './FlagIcon.tsx';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  language: string;
  flag: string;
  xp: number;
  streak: number;
  isCurrentUser?: boolean;
}

export const Leaderboard: React.FC = () => {
  const { profile } = useAuth();
  const [selectedLeague, setSelectedLeague] = useState('Ruby');

  const leagues = ['Bronze', 'Silver', 'Gold', 'Sapphire', 'Ruby', 'Diamond'];

  // Generate dynamic competitor list
  const baseUsers: LeaderboardUser[] = [
    {
      id: '1',
      name: 'Claire Moreau',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      language: 'French',
      flag: '🇫🇷',
      xp: Math.max(profile.totalXp + 140, 480),
      streak: 18,
    },
    {
      id: '2',
      name: 'Florian Becker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      language: 'German',
      flag: '🇩🇪',
      xp: Math.max(profile.totalXp + 95, 410),
      streak: 12,
    },
    {
      id: '3',
      name: 'Kenji Sato',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      language: 'Japanese',
      flag: '🇯🇵',
      xp: Math.max(profile.totalXp + 45, 360),
      streak: 9,
    },
    {
      id: 'current_user',
      name: profile.displayName || 'You',
      avatar: profile.photoURL || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      language: profile.targetLanguage === 'french' ? 'French' : profile.targetLanguage === 'german' ? 'German' : 'Japanese',
      flag: profile.targetLanguage === 'french' ? '🇫🇷' : profile.targetLanguage === 'german' ? '🇩🇪' : '🇯🇵',
      xp: profile.totalXp,
      streak: profile.streak,
      isCurrentUser: true,
    },
    {
      id: '5',
      name: 'Sofia Alvarez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80',
      language: 'French',
      flag: '🇫🇷',
      xp: Math.max(profile.totalXp - 20, 280),
      streak: 5,
    },
    {
      id: '6',
      name: 'Lukas Meyer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
      language: 'German',
      flag: '🇩🇪',
      xp: Math.max(profile.totalXp - 55, 230),
      streak: 4,
    },
    {
      id: '7',
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      language: 'Japanese',
      flag: '🇯🇵',
      xp: Math.max(profile.totalXp - 80, 190),
      streak: 3,
    },
    {
      id: '8',
      name: 'Matteo Rossi',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      language: 'French',
      flag: '🇫🇷',
      xp: Math.max(profile.totalXp - 110, 150),
      streak: 2,
    },
  ];

  // Sort by XP descending
  const sortedUsers = [...baseUsers].sort((a, b) => b.xp - a.xp);
  const currentUserRank = sortedUsers.findIndex((u) => u.isCurrentUser) + 1;

  const top3 = sortedUsers.slice(0, 3);
  const remaining = sortedUsers.slice(3);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-[#6546D7] to-[#45B8E8] rounded-3xl p-6 text-white shadow-xl shadow-[#6546D7]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold">{selectedLeague} League</h1>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold">
                  Tier 5 of 6
                </span>
              </div>
              <p className="text-xs text-white/80">
                Resets every Sunday at midnight • Top 5 advance to Diamond League
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white/15 backdrop-blur-md text-xs font-bold self-start sm:self-auto">
            ⏳ 3 days 14 hours remaining
          </div>
        </div>

        {/* League Tier Pills */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
          {leagues.map((lg) => (
            <button
              key={lg}
              onClick={() => setSelectedLeague(lg)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                selectedLeague === lg
                  ? 'bg-white text-[#6546D7] shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {lg}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <h2 className="text-center font-extrabold text-sm uppercase tracking-wider text-slate-400 mb-6">
          Weekly Champions Podium
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto items-end pt-4">
          {/* #2 Silver (Left) */}
          {top3[1] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={top3[1].avatar}
                  alt={top3[1].name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-slate-300 shadow-md"
                />
                <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-slate-300 text-slate-800 font-black text-xs flex items-center justify-center shadow">
                  2
                </span>
              </div>
              <span className="text-xs font-bold text-[#20243A] mt-2 text-center truncate max-w-[90px]">
                {top3[1].name.split(' ')[0]}
              </span>
              <span className="text-[11px] font-extrabold text-[#6546D7]">{top3[1].xp} XP</span>
              <div className="w-full h-20 bg-slate-100 rounded-t-2xl mt-3 flex items-center justify-center font-black text-slate-400 text-xl border-t-2 border-slate-300">
                🥈
              </div>
            </div>
          )}

          {/* #1 Gold (Center) */}
          {top3[0] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <Crown className="w-7 h-7 text-amber-500 fill-amber-400 absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce-short" />
                <img
                  src={top3[0].avatar}
                  alt={top3[0].name}
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-amber-400 shadow-lg"
                />
                <span className="absolute -top-2 -right-1 w-7 h-7 rounded-full bg-amber-400 text-amber-950 font-black text-xs flex items-center justify-center shadow">
                  1
                </span>
              </div>
              <span className="text-xs font-bold text-[#20243A] mt-2 text-center truncate max-w-[100px]">
                {top3[0].name.split(' ')[0]}
              </span>
              <span className="text-[11px] font-extrabold text-amber-600">{top3[0].xp} XP</span>
              <div className="w-full h-28 bg-amber-50 rounded-t-2xl mt-3 flex items-center justify-center font-black text-amber-500 text-2xl border-t-2 border-amber-400">
                🥇
              </div>
            </div>
          )}

          {/* #3 Bronze (Right) */}
          {top3[2] && (
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={top3[2].avatar}
                  alt={top3[2].name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-amber-700/40 shadow-md"
                />
                <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-amber-700 text-white font-black text-xs flex items-center justify-center shadow">
                  3
                </span>
              </div>
              <span className="text-xs font-bold text-[#20243A] mt-2 text-center truncate max-w-[90px]">
                {top3[2].name.split(' ')[0]}
              </span>
              <span className="text-[11px] font-extrabold text-[#6546D7]">{top3[2].xp} XP</span>
              <div className="w-full h-16 bg-amber-900/10 rounded-t-2xl mt-3 flex items-center justify-center font-black text-amber-800 text-lg border-t-2 border-amber-700">
                🥉
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm space-y-2">
        <div className="flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-400 border-b border-slate-100">
          <span>RANK & LEARNER</span>
          <span>STREAK & TOTAL XP</span>
        </div>

        {sortedUsers.map((user, idx) => {
          const rank = idx + 1;
          const isPromotionZone = rank <= 4;
          const isDemotionZone = rank >= sortedUsers.length - 1;

          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-2xl transition-all ${
                user.isCurrentUser
                  ? 'bg-[#6546D7]/10 border-2 border-[#6546D7] shadow-sm'
                  : 'hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`w-6 text-center font-black text-sm ${
                    rank === 1
                      ? 'text-amber-500'
                      : rank === 2
                      ? 'text-slate-500'
                      : rank === 3
                      ? 'text-amber-700'
                      : 'text-slate-400'
                  }`}
                >
                  {rank}
                </span>

                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-[#20243A]">
                      {user.name} {user.isCurrentUser && '(You)'}
                    </span>
                    <FlagIcon flag={user.flag} code={user.language} size="xs" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Learning {user.language}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                  <Flame className="w-4 h-4 fill-amber-500" />
                  <span>{user.streak}d</span>
                </div>

                <div className="text-right min-w-[70px]">
                  <span className="font-black text-sm text-[#6546D7] block">{user.xp} XP</span>
                  {isPromotionZone && (
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center justify-end gap-0.5">
                      <ArrowUp className="w-3 h-3" /> Promoted
                    </span>
                  )}
                  {isDemotionZone && (
                    <span className="text-[10px] text-rose-500 font-bold flex items-center justify-end gap-0.5">
                      <ArrowDown className="w-3 h-3" /> Relegated
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
