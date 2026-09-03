import React from 'react';
import { Room, Language } from '../types';
import { translations } from '../data/translations';
import { X, Maximize2, Users, Bed, Check, Calendar, Phone, Shield } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room | null;
  lang: Language;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  lang,
  onClose,
  onBookRoom
}) => {
  if (!room) return null;
  const t = translations[lang].rooms;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#1a1b1f] text-white rounded-2xl shadow-2xl border border-stone-700 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-stone-200 hover:text-white flex items-center justify-center border border-stone-600 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={room.image}
            alt={lang === 'en' ? room.nameEn : room.nameAm}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1f] via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider">
                {room.size}
              </span>
              {(room.tagEn || room.tagAm) && (
                <span className="px-3 py-1 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 text-xs font-medium">
                  {lang === 'en' ? room.tagEn : room.tagAm}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              {lang === 'en' ? room.nameEn : room.nameAm}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#121316] border border-stone-800 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Maximize2 className="w-5 h-5 text-[#c5a880]" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase tracking-wider">{t.approxSize}</span>
                <span className="text-sm sm:text-base font-semibold text-white">{room.size}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 border-x border-stone-800 px-2 sm:px-4">
              <Bed className="w-5 h-5 text-[#c5a880]" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase tracking-wider">{t.bedsLabel}</span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {lang === 'en' ? room.bedsEn : room.bedsAm}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Users className="w-5 h-5 text-[#c5a880]" />
              <div>
                <span className="block text-[11px] text-stone-400 uppercase tracking-wider">{t.maxLabel}</span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {room.maxGuests} {lang === 'en' ? 'Guests' : 'እንግዶች'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5a880] mb-2">
              {lang === 'en' ? 'Room Overview' : 'የክፍሉ መግለጫ'}
            </h4>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {lang === 'en' ? room.descriptionEn : room.descriptionAm}
            </p>
          </div>

          {/* Verified Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5a880] mb-3">
              {t.featuresLabel}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {(lang === 'en' ? room.featuresEn : room.featuresAm).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-stone-300 bg-stone-900/60 p-2.5 rounded-lg border border-stone-800">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Photos if available */}
          {room.additionalImages && room.additionalImages.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5a880] mb-3">
                {lang === 'en' ? 'Room Gallery' : 'የክፍል ፎቶዎች'}
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {room.additionalImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Room view ${i + 1}`}
                    className="w-full h-24 sm:h-28 object-cover rounded-lg border border-stone-800"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Direct Rates & Booking Guarantee Notice */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-[#c5a880]/30 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
            <div className="text-xs text-stone-300">
              <p className="font-semibold text-[#c5a880] mb-0.5">
                {lang === 'en' ? 'Official Direct Booking Request' : 'ይፋዊ ቀጥተኛ የክፍል መያዣ ጥያቄ'}
              </p>
              <p>
                {t.ratesNotice}. {lang === 'en' ? 'Includes complimentary airport shuttle service & high-speed Wi-Fi.' : 'ነፃ የኤርፖርት ማመላለሻ እና ከፍተኛ ፍጥነት ያለው ዋይፋይ ያካትታል።'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-stone-800">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Close' : 'ዝጋ'}
            </button>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookNow}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
