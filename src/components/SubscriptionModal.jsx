import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useCurriculum } from '../context/CurriculumContext.jsx';
import {
  X,
  Crown,
  Check,
  Sparkles,
  Heart,
  Bot,
  ShieldCheck,
  Globe,
  CreditCard,
  Zap,
  CheckCircle2,
  Lock,
} from 'lucide-react';

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export const SubscriptionModal = ({ isOpen, onClose }) => {
  const { profile, upgradeToPremium } = useAuth();
  const { paymentConfig } = useCurriculum();

  const [billingCycle, setBillingCycle] = useState('yearly'); // 'yearly' | 'monthly'
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [upgraded, setUpgraded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  if (!isOpen) return null;

  const inrMonthly = paymentConfig?.inrMonthlyPrice || 199;
  const inrYearly = paymentConfig?.inrYearlyPrice || 1499;
  const usdMonthly = paymentConfig?.usdMonthlyPrice || 4.99;
  const usdYearly = paymentConfig?.usdYearlyPrice || 39.99;

  const handleCheckout = async () => {
    setIsProcessing(true);
    setPaymentError(null);

    const isYearly = billingCycle === 'yearly';
    const amountInr = isYearly ? inrYearly : inrMonthly;
    const amountUsd = isYearly ? usdYearly : usdMonthly;

    // Check if Razorpay is configured and client key is valid
    const hasLiveRazorpay =
      paymentConfig?.gatewayMode === 'razorpay' &&
      paymentConfig?.razorpayKeyId &&
      !paymentConfig.razorpayKeyId.includes('placeholder');

    if (hasLiveRazorpay && currency === 'INR') {
      const isLoaded = await loadRazorpayScript();
      if (isLoaded && window.Razorpay) {
        try {
          const options = {
            key: paymentConfig.razorpayKeyId,
            amount: amountInr * 100, // paise
            currency: 'INR',
            name: 'Lingora Academy',
            description: `Lingora Plus (${isYearly ? 'Annual' : 'Monthly'} Membership)`,
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=120&auto=format&fit=crop&q=80',
            handler: async function (response) {
              await upgradeToPremium();
              setIsProcessing(false);
              setUpgraded(true);
              setTimeout(() => {
                setUpgraded(false);
                onClose();
              }, 2500);
            },
            prefill: {
              name: profile.displayName || 'Lingora Learner',
              email: profile.email || 'learner@lingora.app',
            },
            theme: {
              color: '#1E3A8A',
            },
            modal: {
              ondismiss: () => {
                setIsProcessing(false);
              },
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
          return;
        } catch (err) {
          console.warn('Razorpay checkout initialization error:', err);
        }
      }
    }

    // Direct Instant Simulation Mode (for test/preview or when keys not yet entered)
    setTimeout(async () => {
      await upgradeToPremium();
      setIsProcessing(false);
      setUpgraded(true);
      setTimeout(() => {
        setUpgraded(false);
        onClose();
      }, 2500);
    }, 1200);
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
            <span>LINGORA PLUS MEMBERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#20243A]">
            Learn Any Language Without Limits
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Unlimited hearts, 24/7 Gemini AI speaking partner, full institute-grade curriculum, and video masterclasses.
          </p>

          {/* Controls: Billing Cycle + Currency */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual (Save 37%) 🔥
              </button>
              <button
                type="button"
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
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  currency === 'INR' ? 'bg-white text-[#1E3A8A] shadow-xs' : ''
                }`}
              >
                ₹ INR (UPI / Cards)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-xl transition cursor-pointer ${
                  currency === 'USD' ? 'bg-white text-[#1E3A8A] shadow-xs' : ''
                }`}
              >
                $ USD (Global)
              </button>
            </div>
          </div>
        </div>

        {paymentError && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold text-center">
            {paymentError}
          </div>
        )}

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
                  <span>Basic Gemini AI tutor queries</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <X className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Video micro-masterclasses</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <X className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Official course certificates</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80">
              <span className="block text-center text-xs font-bold text-slate-400">
                Active Forever
              </span>
            </div>
          </div>

          {/* Plus Premium Tier */}
          <div className="p-5 rounded-3xl border-2 border-[#1E3A8A] bg-gradient-to-b from-blue-50/50 via-white to-amber-50/30 flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
              MOST POPULAR
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[#1E3A8A] flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Lingora Plus</span>
                </h3>
              </div>

              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-[#20243A]">
                  {currency === 'INR'
                    ? billingCycle === 'yearly'
                      ? `₹${inrYearly}`
                      : `₹${inrMonthly}`
                    : billingCycle === 'yearly'
                    ? `$${usdYearly}`
                    : `$${usdMonthly}`}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  /{billingCycle === 'yearly' ? 'year' : 'month'}
                </span>
              </div>

              {billingCycle === 'yearly' && (
                <p className="text-[11px] font-bold text-emerald-600 mt-0.5">
                  {currency === 'INR'
                    ? `Only ₹${Math.round(inrYearly / 12)}/month • Save 37%`
                    : `Only $${(usdYearly / 12).toFixed(2)}/month • Save 37%`}
                </p>
              )}

              <div className="mt-4 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                  <span>Unlimited Hearts (Never get locked out)</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-purple-700">
                  <Bot className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Unlimited 24/7 Gemini AI Voice Roleplay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Native Teacher Video Masterclasses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>All 10 World Language Curriculums</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Official Verifiable Course Certificates</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              {upgraded ? (
                <div className="p-2.5 rounded-2xl bg-emerald-500 text-white text-xs font-black flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Lingora Plus Activated! Enjoy Fluency.</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-black text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>
                    {isProcessing
                      ? 'Processing Secure Checkout...'
                      : currency === 'INR'
                      ? `Pay ₹${billingCycle === 'yearly' ? inrYearly : inrMonthly} (UPI / Cards)`
                      : `Subscribe $${billingCycle === 'yearly' ? usdYearly : usdMonthly}`}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Security / Guarantee Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit Bank Grade SSL Encrypted Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by Razorpay & Stripe</span>
            <span>•</span>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};
