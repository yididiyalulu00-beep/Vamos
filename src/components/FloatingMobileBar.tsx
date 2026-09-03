import React from 'react';
import { Language } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, Phone, Navigation } from 'lucide-react';

interface FloatingMobileBarProps {
  lang: Language;
  onBookNow: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ lang, onBookNow }) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Cameroon Street, Bole, Addis Ababa, Ethiopia'
  )}`;

  return (
    <div
      id="floating-mobile-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#16171b]/95 backdrop-blur-md border-t border-stone-800 p-2.5 px-4 flex items-center justify-between gap-2.5 sm:hidden shadow-2xl"
    >
      <a
        href={`tel:${HOTEL_INFO.phones[0]}`}
        className="flex-1 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
        <span>{lang === 'en' ? 'Call Hotel' : 'ደውል'}</span>
      </a>

      <button
        onClick={onBookNow}
        className="flex-[1.5] py-2.5 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b89758] text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'Book Now' : 'አሁን ይያዙ'}</span>
      </button>

      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95"
      >
        <Navigation className="w-3.5 h-3.5 text-[#c5a880]" />
        <span>{lang === 'en' ? 'Maps' : 'ካርታ'}</span>
      </a>
    </div>
  );
};
