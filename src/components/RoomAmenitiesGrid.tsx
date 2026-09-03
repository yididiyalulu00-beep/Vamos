import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ROOM_AMENITIES } from '../data/hotelData';
import {
  Wifi,
  Bath,
  ShowerHead,
  Sparkles,
  Layers,
  Wind,
  Tv,
  Radio,
  Phone,
  Wine,
  Refrigerator,
  Coffee,
  Zap,
  Briefcase,
  ShieldCheck,
  BedDouble,
  Footprints,
  Fan,
  Bell
} from 'lucide-react';

interface RoomAmenitiesGridProps {
  lang: Language;
}

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Bath,
  ShowerHead,
  Sparkles,
  Layers,
  Wind,
  Tv,
  Radio,
  Phone,
  Wine,
  Refrigerator,
  Coffee,
  Zap,
  Briefcase,
  ShieldCheck,
  BedDouble,
  Footprints,
  Fan,
  Bell
};

export const RoomAmenitiesGrid: React.FC<RoomAmenitiesGridProps> = ({ lang }) => {
  const t = translations[lang].amenities;

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1a1b1e] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c7d54] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 mb-3">
            {t.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 19 Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {ROOM_AMENITIES.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles;
            return (
              <div
                key={amenity.id}
                className="group bg-white p-4 rounded-xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#c5a880]/50 transition-all duration-300 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] group-hover:bg-[#c5a880]/20 text-stone-700 group-hover:text-[#9c7d54] flex items-center justify-center shrink-0 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-stone-950 transition-colors leading-snug">
                  {lang === 'en' ? amenity.nameEn : amenity.nameAm}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
