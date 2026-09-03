import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingCTAProps {
  lang: Language;
  onBookNow: () => void;
  onContactUs: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ lang, onBookNow, onContactUs }) => {
  const t = translations[lang].bookingCta;

  return (
    <section className="py-20 bg-[#121316] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#c5a880_0%,transparent_45%)] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#c5a880] text-xs font-bold uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Direct Booking Privilege' : 'ቀጥተኛ የክፍል መያዣ'}</span>
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-white tracking-tight mb-6">
          {t.headline}
        </h2>

        <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {t.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            id="cta-book-now-btn"
            onClick={onBookNow}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-[#c5a880]/25 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookNow}</span>
          </button>

          <button
            id="cta-contact-us-btn"
            onClick={onContactUs}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-100 hover:text-white text-xs sm:text-sm font-bold tracking-wider uppercase border border-stone-700 hover:border-[#c5a880]/60 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#c5a880]" />
            <span>{t.contactUs}</span>
          </button>
        </div>

        <div className="text-xs text-stone-400">
          <span>{t.callDirect} </span>
          <a
            href={`tel:${HOTEL_INFO.phones[0]}`}
            className="text-[#c5a880] hover:text-amber-200 font-bold underline transition-colors"
          >
            {HOTEL_INFO.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
};
