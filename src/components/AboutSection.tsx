import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Plane, Award, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onDiscoverClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onDiscoverClick }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 bg-[#FAF9F6] text-[#1a1b1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Layered Boutique Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Vamos Addis Hotel Lobby and Boutique Hospitality"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Bottom Badge on Main Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#c5a880]/15 flex items-center justify-center text-[#9c7d54]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        {lang === 'en' ? 'Bole Brass, Cameroon St.' : 'ቦሌ ብራስ፣ ካሜሩን ጎዳና'}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        {lang === 'en' ? '50m from Yod Abyssinia Restaurant' : 'ከዮድ አቢሲኒያ ሬስቶራንት 50 ሜትር'}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-[#c5a880] text-stone-900">
                    {lang === 'en' ? 'Prime Bole' : 'ምርጥ መገኛ'}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Inset Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 z-20 bg-[#1a1b20] text-white p-5 rounded-2xl shadow-2xl border border-stone-700 max-w-[240px] flex-col gap-2">
              <div className="flex items-center gap-2 text-[#c5a880]">
                <Plane className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Airport Gateway' : 'የአየር ማረፊያ በር'}
                </span>
              </div>
              <p className="text-2xl font-bold font-serif-luxury text-white">
                ~1 km / 0.6 mi
              </p>
              <p className="text-[11px] text-stone-400">
                {lang === 'en' ? 'Free shuttle to/from Bole International Airport' : 'ነፃ የቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ ማመላለሻ'}
              </p>
            </div>

            {/* Decorative Gold Frame Accent */}
            <div className="absolute -top-4 -left-4 w-40 h-40 border-t-2 border-l-2 border-[#c5a880] -z-0 opacity-70" />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#9c7d54] text-xs font-bold tracking-widest uppercase mb-4">
              <span>{t.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury text-stone-900 tracking-tight leading-[1.2] mb-4">
              {t.title}
            </h2>

            {/* Sub-line acknowledging previous name without ambiguity */}
            <p className="text-xs text-stone-500 font-medium tracking-wide uppercase mb-6 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span>
                {lang === 'en'
                  ? `Previously known as ${HOTEL_INFO.previousName}`
                  : `ቀደም ሲል ${HOTEL_INFO.previousNameAm} በመባል ይታወቅ የነበረ`}
              </span>
            </p>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-stone-700 text-base leading-relaxed mb-8">
              <p className="border-l-2 border-[#c5a880] pl-4 italic text-stone-800 font-medium">
                {t.p1}
              </p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Three key stats */}
            <div className="grid grid-cols-3 gap-4 w-full py-6 border-y border-stone-200 mb-8">
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 text-[#9c7d54]">
                  {t.stat1Value}
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  {t.stat1Label}
                </span>
              </div>
              <div className="text-center sm:text-left border-x border-stone-200 px-3">
                <span className="block text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 text-[#9c7d54]">
                  {t.stat2Value}
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  {t.stat2Label}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 text-[#9c7d54]">
                  {t.stat3Value}
                </span>
                <span className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  {t.stat3Label}
                </span>
              </div>
            </div>

            {/* CTA button */}
            <button
              id="about-discover-vamos-btn"
              onClick={onDiscoverClick}
              className="px-8 py-4 rounded-lg bg-stone-900 hover:bg-[#1f2127] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-3 group cursor-pointer active:scale-95"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#c5a880] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
