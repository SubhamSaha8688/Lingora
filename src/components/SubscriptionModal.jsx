import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import {
  X,
  Crown,
  Check,
  Sparkles,
  Heart,
  Bot,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export const SubscriptionModal = ({ isOpen, onClose }) => {
  const { profile, upgradeToPremium } = useAuth();
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [currency, setCurrency] = useState('INR');
  const [upgraded, setUpgraded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSimulateUpgrade = async () => {
    setIsProcessing(true);
    setTimeout(async () => {
      await upgradeToPremium();
      setIsProcessing(false);
      setUpgraded(true);
      setTimeout(() => {
        setUpgraded(false);
        onClose();
      }, 2000);
    }, 1200);
  };

  const pricing = {
    INR: {
      monthly: '₹299',
      yearly: '₹1,999',
      yearlySub: '₹166/month (Billed ₹1,999 annually)',
    },
    USD: {
      monthly: '$6.99',
      yearly: '$49.99',
      yearlySub: '$4.16/month (Billed $49.99 annually)',
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-md mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider mb-2">
            <Crown className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            <span>LINGORA PLUS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243A]">
            Unlock Fluency Faster with Plus
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Unlimited hearts, unlimited Gemini AI conversations, all 10 language courses, and advanced pronunciation coaching.
          </p>

          {/* Controls: Billing Cycle + Currency */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual (Save 45%) 🔥
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  currency === 'INR' ? 'bg-white text-[#1E3A8A] shadow-xs' : ''
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  currency === 'USD' ? 'bg-white text-[#1E3A8A] shadow-xs' : ''
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* Plan Cards Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Free Tier */}
          <div className="p-5 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[#20243A]">Lingora Free</h3>
                <span className="text-xs font-bold text-slate-400">Current Plan</span>
              </div>
              <div className="mt-2 text-2xl font-black text-[#20243A]">
                {currency === 'INR' ? '₹0' : '$0'} <span className="text-xs font-medium text-slate-400">/ forever</span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>5 Hearts daily with replenishment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Access to core beginner curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Standard practice exercises</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Unlimited Gemini AI tutor conversations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <X className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>Advanced voice pronunciation coach</span>
                </div>
              </div>
            </div>

            <button
              disabled
              className="mt-6 w-full py-2.5 rounded-2xl bg-slate-200 text-slate-400 font-bold text-xs cursor-default"
            >
              {profile.plan === 'free' ? 'Active Plan' : 'Free Tier'}
            </button>
          </div>

          {/* Premium Tier */}
          <div className="p-5 rounded-3xl border-2 border-amber-400 bg-gradient-to-b from-amber-50/60 to-blue-50/40 relative flex flex-col justify-between shadow-lg">
            <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-black text-[10px] tracking-wider uppercase shadow-xs">
              BEST VALUE
            </span>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[#20243A]">Lingora Plus</h3>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-[#20243A]">
                {billingCycle === 'yearly' ? pricing[currency].yearly : pricing[currency].monthly}
                <span className="text-xs font-medium text-slate-400">
                  {billingCycle === 'yearly' ? ' / year' : ' / month'}
                </span>
              </div>
              <p className="text-[11px] text-amber-800 font-bold mt-0.5">
                {billingCycle === 'yearly' ? pricing[currency].yearlySub : 'Cancel anytime with one click'}
              </p>

              <div className="mt-4 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                  <Heart className="w-4 h-4 fill-[#1E3A8A] shrink-0" />
                  <span>Unlimited Hearts (Never stop learning)</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                  <Bot className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                  <span>Unlimited Gemini AI Voice & Roleplay</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                  <Globe className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                  <span>All 10 Languages (CEFR, JLPT, HSK, TOPIK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Personalized mistake reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Discounted access to Study Materials</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {upgraded ? (
                <div className="w-full py-3 rounded-2xl bg-[#10B981] text-white font-extrabold text-xs text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Lingora Plus Activated!</span>
                </div>
              ) : (
                <button
                  disabled={isProcessing}
                  onClick={handleSimulateUpgrade}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-extrabold text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Crown className="w-4 h-4 fill-white" />
                  <span>
                    {isProcessing
                      ? 'Connecting Razorpay...'
                      : profile.plan === 'premium'
                      ? 'Extend Lingora Plus'
                      : `Activate Plus (${billingCycle === 'yearly' ? pricing[currency].yearly : pricing[currency].monthly})`}
                  </span>
                </button>
              )}

              <p className="text-[10px] text-slate-400 text-center leading-tight flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Protected by Razorpay India. No automatic surprise charges.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionModal;
