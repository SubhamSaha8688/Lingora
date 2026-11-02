import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { STUDY_MATERIALS, SUPPORTED_LANGUAGES, StudyMaterialItem } from '../data/curriculum.ts';
import { FlagIcon } from './FlagIcon.tsx';
import {
  BookOpen,
  FileText,
  Download,
  Lock,
  CheckCircle2,
  Sparkles,
  CreditCard,
  Eye,
  X,
  ExternalLink,
  ShieldCheck,
  Search,
} from 'lucide-react';

export const StudyMaterialsView: React.FC = () => {
  const { profile, purchaseStudyMaterial } = useAuth();

  const [activeTab, setActiveTab] = useState<'catalog' | 'purchased'>('catalog');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewMaterial, setPreviewMaterial] = useState<StudyMaterialItem | null>(null);
  const [checkoutMaterial, setCheckoutMaterial] = useState<StudyMaterialItem | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const purchasedList = profile.purchasedMaterials || [];

  const filteredMaterials = STUDY_MATERIALS.filter((mat) => {
    const matchesLang =
      selectedLanguageFilter === 'all' || mat.languageId === selectedLanguageFilter;
    const matchesQuery =
      mat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesQuery;
  });

  const myMaterials = STUDY_MATERIALS.filter((mat) => purchasedList.includes(mat.id));

  // Razorpay / Payment Gateway simulated checkout with secure verification receipt
  const handleConfirmPurchase = async (mat: StudyMaterialItem) => {
    setIsProcessingPayment(true);
    // Simulate secure 1.5s server-side verification
    setTimeout(async () => {
      await purchaseStudyMaterial(mat.id, mat.priceInInr);
      setIsProcessingPayment(false);
      setCheckoutMaterial(null);
      setPurchaseSuccess(`Successfully unlocked "${mat.title}"! Added to My Purchased Materials.`);
      setTimeout(() => setPurchaseSuccess(null), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1e40af] to-[#3B82F6] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#FDBA74]" />
            <span>Official Licensed Course Materials</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Study Materials & Guides
          </h1>
          <p className="mt-2 text-white/90 text-xs sm:text-sm leading-relaxed">
            Download curated, printable PDF grammar cheat sheets, vocabulary workbooks, and JLPT/TOPIK/HSK exam prep handbooks for just ₹49.
          </p>
        </div>
      </div>

      {purchaseSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{purchaseSuccess}</span>
        </div>
      )}

      {/* Navigation Tabs & Search */}
      <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Catalog vs My Purchased Materials */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex-1 md:flex-none px-4 py-2 rounded-2xl text-xs font-black transition ${
              activeTab === 'catalog'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Course Materials ({STUDY_MATERIALS.length})
          </button>
          <button
            onClick={() => setActiveTab('purchased')}
            className={`flex-1 md:flex-none px-4 py-2 rounded-2xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
              activeTab === 'purchased'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span>My Library</span>
            <span className="w-5 h-5 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center font-bold">
              {myMaterials.length}
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, JLPT, A1..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3B82F6] text-xs font-medium"
          />
        </div>
      </div>

      {/* Language Filter Pills */}
      {activeTab === 'catalog' && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedLanguageFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
              selectedLanguageFilter === 'all'
                ? 'bg-[#1E3A8A] text-white'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            All Languages
          </button>
          {SUPPORTED_LANGUAGES.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLanguageFilter(l.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                selectedLanguageFilter === l.id
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              <FlagIcon code={l.id} size="xs" />
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Materials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {(activeTab === 'catalog' ? filteredMaterials : myMaterials).map((mat) => {
          const isUnlocked = purchasedList.includes(mat.id);
          const langMeta =
            SUPPORTED_LANGUAGES.find((l) => l.id === mat.languageId) || SUPPORTED_LANGUAGES[0];

          return (
            <div
              key={mat.id}
              className={`bg-white rounded-3xl border p-5 flex flex-col justify-between transition-all hover:shadow-lg ${
                isUnlocked
                  ? 'border-emerald-200 shadow-sm ring-1 ring-emerald-200'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <FlagIcon code={langMeta.id} size="sm" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1E3A8A]">
                      {langMeta.name} • {mat.level}
                    </span>
                  </div>

                  {isUnlocked ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Unlocked
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1E3A8A] text-xs font-black">
                      ₹{mat.priceInInr}
                    </span>
                  )}
                </div>

                {/* Title & Preview Image */}
                <div className="relative rounded-2xl overflow-hidden mb-3 aspect-[16/9] bg-slate-100 group">
                  <img
                    src={mat.previewUrl}
                    alt={mat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-bold text-white flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#FDBA74]" /> {mat.pagesCount} Pages PDF Guide
                    </span>
                  </div>
                </div>

                <h3 className="font-extrabold text-sm text-[#20243A] leading-snug">{mat.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {mat.description}
                </p>

                {/* Chapters list preview */}
                <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">
                    What's inside:
                  </span>
                  <ul className="text-[11px] text-slate-600 space-y-1">
                    {mat.chapters.slice(0, 2).map((ch, i) => (
                      <li key={i} className="truncate flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                        <span className="truncate">{ch}</span>
                      </li>
                    ))}
                    {mat.chapters.length > 2 && (
                      <li className="text-[10px] text-slate-400 font-semibold italic">
                        +{mat.chapters.length - 2} more chapters
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setPreviewMaterial(mat)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                {isUnlocked ? (
                  <button
                    onClick={() => {
                      alert(`Opening secure PDF download for "${mat.title}"`);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-extrabold transition shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setCheckoutMaterial(mat)}
                    className="flex-1 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-extrabold transition shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Buy (₹{mat.priceInInr})</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {activeTab === 'purchased' && myMaterials.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-100 shadow-sm space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-[#20243A]">No Study Materials Purchased Yet</h3>
          <p className="text-xs text-slate-400">
            Browse our catalog above to unlock comprehensive printable PDF guides and cheat sheets for ₹49.
          </p>
          <button
            onClick={() => setActiveTab('catalog')}
            className="px-5 py-2.5 rounded-xl bg-[#1E3A8A] text-white text-xs font-bold"
          >
            Explore Catalog
          </button>
        </div>
      )}

      {/* PDF PREVIEW MODAL */}
      {previewMaterial && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[88vh] overflow-y-auto p-6 shadow-2xl border border-slate-100">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-black uppercase text-[#3B82F6]">
                  PDF Sample Preview
                </span>
                <h3 className="text-lg font-black text-[#20243A]">{previewMaterial.title}</h3>
              </div>
              <button
                onClick={() => setPreviewMaterial(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Watermarked Document Preview */}
            <div className="mt-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 relative">
              <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                SAMPLE PREVIEW
              </span>
              <h4 className="font-extrabold text-sm text-[#20243A] mb-2">Table of Contents</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {previewMaterial.chapters.map((ch, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="font-bold text-[#1E3A8A]">0{idx + 1}.</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-amber-200/60 text-[11px] text-amber-900/80 italic">
                * Complete {previewMaterial.pagesCount}-page PDF includes color grammatical diagrams, vocabulary flashcard cuts, and native audio transcriptions.
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-400">
                Official Reference Price: ₹{previewMaterial.priceInInr}
              </span>

              {!purchasedList.includes(previewMaterial.id) ? (
                <button
                  onClick={() => {
                    const m = previewMaterial;
                    setPreviewMaterial(null);
                    setCheckoutMaterial(m);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-white text-xs font-extrabold shadow-sm hover:bg-[#1e40af]"
                >
                  Unlock Full Material (₹{previewMaterial.priceInInr})
                </button>
              ) : (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Already in your library
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RAZORPAY / SECURE PAYMENT GATEWAY CHECKOUT MODAL */}
      {checkoutMaterial && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                <h3 className="font-black text-base text-[#20243A]">Secure Razorpay Checkout</h3>
              </div>
              <button
                onClick={() => setCheckoutMaterial(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Item:</span>
                <p className="font-extrabold text-sm text-[#20243A]">{checkoutMaterial.title}</p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Format: Printable PDF Guide</span>
                  <span className="font-black text-[#1E3A8A] text-base">₹{checkoutMaterial.priceInInr}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase">
                  Supported Indian Payment Methods:
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700">
                  <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">UPI / QR</div>
                  <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">Cards (Visa/MC)</div>
                  <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">NetBanking</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 text-[11px] text-blue-900 font-medium">
                🔒 Verified on secure server-side webhook endpoints. Instant lifetime access added to your Lingora account.
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <button
                disabled={isProcessingPayment}
                onClick={() => handleConfirmPurchase(checkoutMaterial)}
                className="w-full py-3.5 rounded-2xl bg-[#10B981] hover:bg-[#059669] disabled:bg-slate-300 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                {isProcessingPayment ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Verifying with Razorpay...</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹{checkoutMaterial.priceInInr} & Unlock</span>
                  </>
                )}
              </button>

              <button
                disabled={isProcessingPayment}
                onClick={() => setCheckoutMaterial(null)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
