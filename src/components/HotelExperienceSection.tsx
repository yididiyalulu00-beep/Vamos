import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HeartHandshake, BedDouble, Navigation, ShieldCheck } from 'lucide-react';

interface HotelExperienceSectionProps {
  lang: Language;
}

export const HotelExperienceSection: React.FC<HotelExperienceSectionProps> = ({ lang }) => {
  const t = translations[lang].experience;

  const pillars = [
    {
      id: 'comfort',
      icon: BedDouble,
      title: t.comfortTitle,
      description: t.comfortDesc,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      badgeEn: 'Tailored for Rest',
      badgeAm: 'ለእረፍት የተዘጋጀ'
    },
    {
      id: 'convenience',
      icon: Navigation,
      title: t.convenienceTitle,
      description: t.convenienceDesc,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      badgeEn: '1 km from Airport',
      badgeAm: '1 ኪ.ሜ ከኤርፖርት'
    },
    {
      id: 'hospitality',
      icon: HeartHandshake,
      title: t.hospitalityTitle,
      description: t.hospitalityDesc,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badgeEn: 'Ethiopian Warmth',
      badgeAm: 'የኢትዮጵያ እንግዳ ተቀባይነት'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1a1b1e] border-y border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c7d54] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 mb-4">
            {t.title}
          </h2>
          <p className="text-stone-600 text-base">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-stone-700">
                    {lang === 'en' ? pillar.badgeEn : pillar.badgeAm}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#c5a880] text-stone-950 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif-luxury text-stone-900 mb-3 group-hover:text-[#9c7d54] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs text-[#9c7d54] font-semibold tracking-wider uppercase">
                    <ShieldCheck className="w-4 h-4 mr-1.5" />
                    <span>{lang === 'en' ? 'Verified Vamos Quality' : 'የተረጋገጠ የቫሞስ ጥራት'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
