import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { Star, ShieldCheck, ExternalLink, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface GuestReviewsSectionProps {
  lang: Language;
}

export const GuestReviewsSection: React.FC<GuestReviewsSectionProps> = ({ lang }) => {
  const t = translations[lang].reviews;

  const verifiedSubScores = [
    { label: lang === 'en' ? 'Location & Airport Proximity' : 'አመቺ መገኛና ለኤርፖርት ያለው ቅርበት', score: '9.2' },
    { label: lang === 'en' ? 'Staff Hospitality & Service' : 'የሰራተኞች እንግዳ ተቀባይነት', score: '8.8' },
    { label: lang === 'en' ? 'Cleanliness & Bed Comfort' : 'የክፍል ፅዳትና የአልጋ ምቾት', score: '8.6' },
    { label: lang === 'en' ? 'Value for Money' : 'ከተከፈለበት ዋጋ አንጻር ያለው ጥራት', score: '8.4' },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1a1b1e] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9c7d54] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-luxury text-stone-900 mb-3">
            {t.title}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            {t.sourceNotice}
          </p>
        </div>

        {/* Big Verified Rating Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start justify-center border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>{HOTEL_INFO.reviews.source} Verified</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-extrabold font-serif-luxury text-stone-900">
                  {HOTEL_INFO.reviews.rating}
                </span>
                <span className="text-xl text-stone-400 font-medium">/ 10</span>
              </div>

              <span className="text-xl font-bold text-stone-900 mb-1">
                {lang === 'en' ? HOTEL_INFO.reviews.verdictEn : HOTEL_INFO.reviews.verdictAm}
              </span>

              <p className="text-sm text-stone-500 font-medium">
                {HOTEL_INFO.reviews.totalReviews} {lang === 'en' ? 'verified guest reviews' : 'የተረጋገጡ የእንግዶች ግምገማዎች'}
              </p>

              {/* Star graphics */}
              <div className="flex items-center gap-1 mt-4 text-[#c5a880]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5a880]" />
                ))}
              </div>
            </div>

            {/* Sub-Score Bars */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-2">
                {lang === 'en' ? 'Verified Rating Breakdown' : 'የግምገማ ዝርዝር ውጤቶች'}
              </h3>

              {verifiedSubScores.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                    <span>{item.label}</span>
                    <span className="font-bold text-stone-900">{item.score}</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#c5a880] to-[#9c7d54] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${parseFloat(item.score) * 10}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9c7d54]" />
                  {lang === 'en' ? 'Authentic guest reviews only' : 'ትክክለኛ የእንግዶች ግምገማ ብቻ'}
                </span>
                <span className="text-stone-400 italic">
                  {lang === 'en' ? 'Source: Booking.com' : 'ምንጭ፡ Booking.com'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
