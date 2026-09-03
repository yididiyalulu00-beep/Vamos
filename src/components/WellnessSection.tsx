import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Flame, CloudRain, Dumbbell, PackageCheck, Check, HeartPulse, Activity } from 'lucide-react';

interface WellnessSectionProps {
  lang: Language;
  onBookWellness?: () => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({ lang, onBookWellness }) => {
  const t = translations[lang].wellness;
  const tf = translations[lang].fitness;
  const [activeFacility, setActiveFacility] = useState<'spa' | 'sauna' | 'steam' | 'fitness'>('spa');

  const wellnessCards = [
    {
      id: 'spa',
      title: t.spaTitle,
      description: t.spaDesc,
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      badgeEn: 'Full Relaxation',
      badgeAm: 'ሙሉ እረፍት'
    },
    {
      id: 'sauna',
      title: t.saunaTitle,
      description: t.saunaDesc,
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
      badgeEn: 'Dry Heat Therapy',
      badgeAm: 'ደረቅ ሳውና'
    },
    {
      id: 'steam',
      title: t.steamTitle,
      description: t.steamDesc,
      icon: CloudRain,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      badgeEn: 'Steam Detox',
      badgeAm: 'የእንፋሎት ቴራፒ'
    },
    {
      id: 'fitness',
      title: t.packagesTitle,
      description: t.packagesDesc,
      icon: PackageCheck,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
      badgeEn: 'Custom Bundles',
      badgeAm: 'የተመረጡ ጥቅሎች'
    }
  ];

  return (
    <section id="wellness" className="py-24 bg-[#141518] text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c5a880] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-stone-300 text-base max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="#wellness-facilities-grid"
              className="px-6 py-2.5 rounded-full bg-[#c5a880] hover:bg-[#d4b992] text-stone-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.exploreSpa}
            </a>
            <a
              href="#fitness-center"
              className="px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-stone-700"
            >
              {t.viewFitness}
            </a>
          </div>
        </div>

        {/* 4 Wellness Facilities Cards */}
        <div id="wellness-facilities-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {wellnessCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group bg-[#1c1d22] rounded-2xl overflow-hidden border border-stone-800/80 hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d22] via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-[#c5a880] text-[10px] font-bold uppercase tracking-wider border border-stone-700">
                    {lang === 'en' ? card.badgeEn : card.badgeAm}
                  </span>

                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-[#c5a880] text-stone-950 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-serif-luxury text-white mb-2 group-hover:text-[#c5a880] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DEDICATED FITNESS CENTER SECTION */}
        <div id="fitness-center" className="bg-[#1c1d22] rounded-3xl border border-stone-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Text & Features */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#c5a880] text-xs font-bold uppercase tracking-widest mb-3">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>{tf.tag}</span>
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-4">
                {tf.title}
              </h3>

              <p className="text-stone-300 text-base leading-relaxed mb-6">
                {tf.text}
              </p>

              {/* Gym Feature Checklist */}
              <div className="space-y-3 mb-8">
                {tf.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-stone-800 flex items-center gap-3 text-xs text-stone-400">
                <HeartPulse className="w-5 h-5 text-[#c5a880] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Complimentary access included with all room bookings at Vamos Addis Hotel.'
                    : 'በቫሞስ አዲስ ሆቴል በሁሉም ክፍሎች ቆይታ ወቅት ያለምንም ተጨማሪ ክፍያ የሚሰጥ።'}
                </span>
              </div>
            </div>

            {/* Right: Modern Gym Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-stone-700 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Hotel Gym at Vamos Addis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1">
                    <Activity className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Cardio & Resistance Equipment' : 'የካርዲዮና የጡንቻ ማጎልበቻ'}</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    {lang === 'en' ? 'Open daily for resident guests in Bole' : 'በየቀኑ ለሆቴሉ እንግዶች ክፍት'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
