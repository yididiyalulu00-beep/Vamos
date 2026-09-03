import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ROOMS_DATA } from '../data/hotelData';
import { Calendar, Users, BedDouble, Search, CheckCircle2, Shield } from 'lucide-react';

interface QuickBookingBarProps {
  lang: Language;
  onCheckAvailability: (params: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomType: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ lang, onCheckAvailability }) => {
  const t = translations[lang].bookingBar;

  // Default dates: tomorrow and 3 days later
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(today.getDate() + 3);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDate(checkoutDefault));
  const [guests, setGuests] = useState<string>('2');
  const [roomType, setRoomType] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      roomType
    });
  };

  return (
    <div id="booking-bar-anchor" className="relative z-30 max-w-6xl mx-auto px-4 -mt-10 sm:-mt-12 mb-12">
      <div className="bg-[#1a1b1f] border border-[#2e3038] rounded-2xl shadow-2xl p-4 sm:p-6 text-white backdrop-blur-xl">
        {/* Micro Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-stone-800/80 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <h2 className="text-sm font-semibold tracking-wider text-stone-200 uppercase">
              {t.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#c5a880]">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.guaranteeNotice}</span>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          {/* Check-in */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.checkIn}</span>
            </label>
            <input
              id="booking-bar-checkin"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className="w-full bg-[#121316] border border-stone-700/80 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#c5a880] transition-colors"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.checkOut}</span>
            </label>
            <input
              id="booking-bar-checkout"
              type="date"
              value={checkOut}
              min={checkIn || formatDate(tomorrow)}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className="w-full bg-[#121316] border border-stone-700/80 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#c5a880] transition-colors"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.guests}</span>
            </label>
            <select
              id="booking-bar-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#121316] border border-stone-700/80 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
            >
              <option value="1">{t.guest1}</option>
              <option value="2">{t.guests2}</option>
              <option value="3">{t.guests3}</option>
              <option value="4+">{t.guests4Plus}</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.roomType}</span>
            </label>
            <select
              id="booking-bar-room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-[#121316] border border-stone-700/80 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
            >
              <option value="all">{t.allRooms}</option>
              {ROOMS_DATA.map((room) => (
                <option key={room.id} value={room.id}>
                  {lang === 'en' ? room.nameEn : room.nameAm} ({room.size})
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              id="booking-bar-submit-btn"
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-[#141518] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-[#c5a880]/30 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>{t.checkAvailability}</span>
            </button>
          </div>
        </form>

        {/* Micro feature pills under bar */}
        <div className="mt-4 pt-3 border-t border-stone-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{lang === 'en' ? 'Free Airport Shuttle Included' : 'ነፃ የኤርፖርት ማመላለሻ ተካቷል'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{lang === 'en' ? 'Free High-Speed Wi-Fi' : 'ነፃ ፈጣን ዋይፋይ'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{lang === 'en' ? '24/7 Front Desk & Concierge' : 'የ24 ሰዓት የደንበኞች አገልግሎት'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
