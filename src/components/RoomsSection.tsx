import React from 'react';
import { Room, Language } from '../types';
import { translations } from '../data/translations';
import { ROOMS_DATA } from '../data/hotelData';
import { Maximize2, Bed, Eye, Calendar, Users, CheckCircle2 } from 'lucide-react';

interface RoomsSectionProps {
  lang: Language;
  onViewRoom: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  lang,
  onViewRoom,
  onBookRoom
}) => {
  const t = translations[lang].rooms;

  return (
    <section id="rooms" className="py-24 bg-[#FAF9F6] text-[#1a1b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c7d54] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-stone-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a880]/15 text-[#9c7d54] text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.ratesNotice}</span>
          </div>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200/80 flex flex-col"
            >
              {/* Large Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={room.image}
                  alt={lang === 'en' ? room.nameEn : room.nameAm}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Size badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#16171a]/85 backdrop-blur-md text-[#c5a880] text-xs font-bold tracking-wider uppercase border border-stone-700">
                    {room.size}
                  </span>
                  {(room.tagEn || room.tagAm) && (
                    <span className="px-2.5 py-1 rounded-full bg-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider">
                      {lang === 'en' ? room.tagEn : room.tagAm}
                    </span>
                  )}
                </div>

                {/* Room title & bed overlay on bottom of image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-2xl font-bold font-serif-luxury text-white mb-1 group-hover:text-[#e5cfa8] transition-colors">
                    {lang === 'en' ? room.nameEn : room.nameAm}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-stone-300">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#c5a880]" />
                      {lang === 'en' ? room.bedsEn : room.bedsAm}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                      {room.maxGuests} {lang === 'en' ? 'Guests' : 'እንግዶች'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {lang === 'en' ? room.descriptionEn : room.descriptionAm}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(lang === 'en' ? room.featuresEn : room.featuresAm).map((feat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200/60"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-stone-100">
                  <button
                    id={`view-room-btn-${room.id}`}
                    onClick={() => onViewRoom(room)}
                    className="py-3 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.viewRoom}</span>
                  </button>

                  <button
                    id={`book-room-btn-${room.id}`}
                    onClick={() => onBookRoom(room.id)}
                    className="py-3 px-4 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.bookNow}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
