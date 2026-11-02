import React, { useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { LingoraLogo } from './LingoraLogo.jsx';
import { FlagIcon } from './FlagIcon.jsx';

export const CertificateModal = ({ isOpen, onClose, userName, language, level, pathwayType }) => {
  if (!isOpen) return null;

  const dateStr = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const certId = `LNG-${(language?.id || 'GLOBAL').slice(0, 3).toUpperCase()}-${Date.now().toString().slice(-6)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-3xl w-full my-6 bg-white rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-xs sm:text-sm">Official Lingora Academy Credential</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-8 sm:p-14 bg-gradient-to-b from-[#FFFDF8] via-white to-[#F9FAFC] border-8 border-double border-amber-600/30 m-4 rounded-2xl relative shadow-inner">
          {/* Subtle Watermark Corner Emblems */}
          <div className="absolute top-4 left-4 text-amber-600/40 text-xs font-serif font-bold">★ LINGORA ★</div>
          <div className="absolute top-4 right-4 text-amber-600/40 text-xs font-serif font-bold">★ LINGORA ★</div>
          <div className="absolute bottom-4 left-4 text-amber-600/40 text-xs font-serif font-bold">★ VERIFIED ★</div>
          <div className="absolute bottom-4 right-4 text-amber-600/40 text-xs font-serif font-bold">★ CEFR ALIGNED ★</div>

          <div className="text-center space-y-6">
            {/* Academy Brand Header */}
            <div className="flex justify-center items-center gap-3">
              <LingoraLogo size="md" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-amber-800 block">
                Certificate of Academic Achievement
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#20243A] tracking-tight">
                CERTIFICATE OF COMPLETION
              </h1>
              <p className="text-xs text-slate-500 font-serif italic pt-1">
                This official credential is proudly awarded to
              </p>
            </div>

            {/* Learner Name */}
            <div className="py-2 border-b-2 border-slate-300 max-w-md mx-auto">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A8A]">
                {userName || 'Dedicated Learner'}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
              for successfully mastering the comprehensive curriculum, grammar frameworks, native vocabulary,
              and interactive conversational roleplay modules for:
            </p>

            {/* Certified Subject & Level Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-amber-950 shadow-sm">
              <FlagIcon code={language?.id || 'french'} size="md" />
              <div className="text-left">
                <span className="text-lg sm:text-xl font-black block leading-tight">
                  {language?.name || 'French'} • {level || 'A1'}
                </span>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                  {pathwayType || 'CEFR'} Standard International Curriculum
                </span>
              </div>
            </div>

            {/* Signatures & Seal Grid */}
            <div className="pt-8 grid grid-cols-3 items-end max-w-lg mx-auto text-center gap-4">
              {/* Date */}
              <div className="text-left">
                <div className="border-b border-slate-400 pb-1">
                  <span className="text-xs font-bold text-slate-800">{dateStr}</span>
                </div>
                <span className="text-[9px] uppercase font-bold text-slate-400 mt-1 block">
                  Issue Date
                </span>
              </div>

              {/* Official Gold Foil Seal */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-500 p-1 shadow-md flex items-center justify-center text-amber-950">
                  <div className="w-full h-full rounded-full border border-amber-700/50 flex flex-col items-center justify-center p-1 bg-amber-200/40">
                    <Award className="w-6 h-6 text-amber-900" />
                    <span className="text-[7px] font-black uppercase tracking-tighter">OFFICIAL SEAL</span>
                  </div>
                </div>
                <span className="text-[8px] font-mono font-bold text-slate-500 mt-1">
                  ID: {certId}
                </span>
              </div>

              {/* Founder Signature */}
              <div className="text-right">
                <div className="border-b border-slate-400 pb-1">
                  <span className="text-xs font-serif font-bold text-slate-900 italic">
                    Subham Saha
                  </span>
                </div>
                <span className="text-[9px] uppercase font-bold text-slate-400 mt-1 block">
                  Founder & Academic Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
