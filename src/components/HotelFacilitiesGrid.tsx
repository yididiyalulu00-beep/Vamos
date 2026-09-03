import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_FACILITIES } from '../data/hotelData';
import {
  Wifi,
  Plane,
  Car,
  UtensilsCrossed,
  Wine,
  Sparkles,
  Dumbbell,
  Flame,
  CloudRain,
  Users,
  Clock,
  Luggage,
  ConciergeBell,
  Coffee,
  Sun,
  Maximize2,
  Trees
} from 'lucide-react';

interface HotelFacilitiesGridProps {
  lang: Language;
}

const facilityIconMap: Record<string, React.ElementType> = {
  Wifi,
  Plane,
  Car,
  UtensilsCrossed,
  Wine,
  Sparkles,
  Dumbbell,
  Flame,
  CloudRain,
  Users,
  Clock,
  Luggage,
  ConciergeBell,
  Coffee,
  Sun,
  Maximize2,
  Trees
};

export const HotelFacilitiesGrid: React.FC<HotelFacilitiesGridProps> = ({ lang }) => {
  const t = translations[lang].facilities;

  return (
    <section id="facilities" className="py-24 bg-[#FAF9F6] text-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* 17 Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {HOTEL_FACILITIES.map((facility) => {
            const IconComponent = facilityIconMap[facility.icon] || Sparkles;
            return (
              <div
                key={facility.id}
                className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-xl hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] group-hover:bg-[#c5a880] text-stone-700 group-hover:text-stone-950 flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-serif-luxury text-stone-900 mb-1.5 group-hover:text-[#9c7d54] transition-colors">
                    {lang === 'en' ? facility.nameEn : facility.nameAm}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {lang === 'en' ? facility.descriptionEn : facility.descriptionAm}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#9c7d54] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                  <span>{lang === 'en' ? 'Verified Facility' : 'የተረጋገጠ አገልግሎት'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
