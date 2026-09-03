import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UtensilsCrossed, Wine, ConciergeBell, Coffee, Check, Apple, Sparkles, Flame, Clock } from 'lucide-react';

interface DiningSectionProps {
  lang: Language;
  onExploreDining?: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ lang, onExploreDining }) => {
  const t = translations[lang].dining;
  const tb = translations[lang].breakfast;
  const [activeTab, setActiveTab] = useState<'restaurant' | 'bar' | 'roomservice'>('restaurant');

  const diningHighlights = [
    { label: t.ethiopianCuisine, descEn: 'Tibs, Doro Wat, Kitfo & authentic injera specialties', descAm: 'ጥብስ፣ የዶሮ ወጥ፣ ክትፎ እና ትክክለኛ የሀበሻ እንጀራ' },
    { label: t.internationalCuisine, descEn: 'Pastas, grilled steaks, poultry & continental recipes', descAm: 'ፓስታዎች፣ የተጠበሱ ስጋዎች እና አህጉራዊ ምግቦች' },
    { label: t.halalOptions, descEn: 'Certified Halal meats and carefully separated culinary prep', descAm: 'የተረጋገጠ የሃላል ስጋ እና የተለየ ዝግጅት' },
    { label: t.vegetarianOptions, descEn: 'Rich lentil stews, fresh salads & Mediterranean plates', descAm: 'የምስር ወጦች፣ ሰላጣዎች እና ልዩ ልዩ የአትክልት ምግቦች' },
    { label: t.veganOptions, descEn: 'Traditional Ethiopian fasting dishes (Yetsom Beyaynetu)', descAm: 'ባህላዊ የኢትዮጵያ የፆም በያይነቱ እና ጤናማ አማራጮች' },
    { label: t.localSpecialties, descEn: 'Fresh honey wine (Tej), Shiro, and local breakfast dishes', descAm: 'ትኩስ ጠጅ፣ ሽሮ እና ባህላዊ የቁርስ ምግቦች' },
  ];

  return (
    <section id="dining" className="py-24 bg-[#FAF9F6] text-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c7d54] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-stone-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Pillars: Restaurant | Bar | Room Service Tabs & Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 border-b border-stone-200 pb-4">
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'restaurant'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 text-[#c5a880]" />
              <span>{t.restaurantTitle}</span>
            </button>

            <button
              onClick={() => setActiveTab('bar')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'bar'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Wine className="w-4 h-4 text-[#c5a880]" />
              <span>{t.barTitle}</span>
            </button>

            <button
              onClick={() => setActiveTab('roomservice')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'roomservice'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <ConciergeBell className="w-4 h-4 text-[#c5a880]" />
              <span>{t.roomServiceTitle}</span>
            </button>
          </div>

          {/* Active Tab Showcase Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden">
              <img
                src={
                  activeTab === 'restaurant'
                    ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
                    : activeTab === 'bar'
                    ? 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80'
                    : 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
                }
                alt={activeTab}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#9c7d54] block mb-2">
                  {lang === 'en' ? 'Dining at Vamos' : 'በቫሞስ መመገብ'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 mb-4">
                  {activeTab === 'restaurant'
                    ? t.restaurantTitle
                    : activeTab === 'bar'
                    ? t.barTitle
                    : t.roomServiceTitle}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeTab === 'restaurant'
                    ? t.restaurantDesc
                    : activeTab === 'bar'
                    ? t.barDesc
                    : t.roomServiceDesc}
                </p>

                {/* Cultural coffee ceremony highlight */}
                <div className="p-4 rounded-xl bg-[#F5F2EB] border border-stone-200/90 mb-6 flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-[#9c7d54] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-0.5">
                      {t.coffeeCeremonyTitle}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {t.coffeeCeremonyDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="text-xs text-stone-500 font-medium">
                  {lang === 'en' ? 'Breakfast • Lunch • Dinner' : 'ቁርስ • ምሳ • እራት'}
                </span>
                <span className="text-xs font-bold text-[#9c7d54] uppercase tracking-wider">
                  {lang === 'en' ? 'Halal & Vegan Options' : 'ሃላል እና የፆም አማራጮች'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dietary & Cuisine Variety Grid */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-stone-900 text-center mb-8">
            {t.cuisinesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diningHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:border-[#c5a880]/60 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#c5a880]" />
                  <h4 className="text-sm font-bold text-stone-900">{item.label}</h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-4.5">
                  {lang === 'en' ? item.descEn : item.descAm}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DEDICATED BREAKFAST SECTION */}
        <div className="bg-[#1a1b1f] text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c5a880] mb-2">
                {tb.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-white mb-4">
                {tb.title}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                {tb.subtitle}
              </p>

              {/* Breakfast options list */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-bold text-[#c5a880] mb-1 flex items-center gap-2">
                    <Apple className="w-4 h-4" />
                    <span>{tb.continental}</span>
                  </h4>
                  <p className="text-xs text-stone-300">{tb.continentalDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-bold text-[#c5a880] mb-1 flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>{tb.american}</span>
                  </h4>
                  <p className="text-xs text-stone-300">{tb.americanDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-bold text-[#c5a880] mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{tb.buffet}</span>
                  </h4>
                  <p className="text-xs text-stone-300">{tb.buffetDesc}</p>
                </div>
              </div>
            </div>

            {/* Breakfast Imagery */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-stone-700">
                <img
                  src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
                  alt="Breakfast Buffet spread"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  {lang === 'en' ? 'Fresh Fruit & Pastry Buffet' : 'ትኩስ ፍራፍሬዎችና ኬኮች'}
                </span>
              </div>

              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-stone-700">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                  alt="Ethiopian Coffee Ceremony"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                  {lang === 'en' ? 'Fresh Ethiopian Highland Coffee' : 'የሀገር በቀል ቡና ማፍላት'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
