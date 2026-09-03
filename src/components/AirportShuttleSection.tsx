import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Plane, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AirportShuttleSectionProps {
  lang: Language;
  onRequestShuttle: () => void;
}

export const AirportShuttleSection: React.FC<AirportShuttleSectionProps> = ({ lang, onRequestShuttle }) => {
  const t = translations[lang].shuttle;

  return (
    <section className="py-16 bg-[#18191e] text-white relative overflow-hidden border-t border-stone-800">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#c5a880]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#202228] to-[#1a1b20] rounded-3xl p-8 sm:p-12 border border-stone-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#c5a880] text-xs font-bold uppercase tracking-wider">
                <Plane className="w-3.5 h-3.5" />
                <span>{t.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white">
                {t.title}
              </h2>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {t.text}
              </p>

              {/* Verified Highlight Box */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-[#c5a880]/40 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a880]" />
                  <span className="text-sm font-bold text-white tracking-wide uppercase">
                    {t.highlight}
                  </span>
                </div>

                <div className="text-xs text-stone-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                  <span>{t.highlightNote}</span>
                </div>
              </div>

              <p className="text-xs text-stone-400 italic pt-1">
                {t.bannerNote}
              </p>
            </div>

            {/* Right Column: CTA button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                id="shuttle-request-pickup-btn"
                onClick={onRequestShuttle}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-[#c5a880]/20 cursor-pointer flex items-center justify-center gap-2.5 active:scale-95"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] text-stone-400 mt-3 text-center lg:text-right">
                {lang === 'en'
                  ? 'Personal curbside meet & assist available on request'
                  : 'በኤርፖርት ተቀብሎ የማስተናገድ አገልግሎት'}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
