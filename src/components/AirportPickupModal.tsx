import React, { useState } from 'react';
import { Language, AirportShuttleFormData } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { X, Plane, Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface AirportPickupModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const AirportPickupModal: React.FC<AirportPickupModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const t = translations[lang].shuttleModal;
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AirportShuttleFormData>({
    fullName: '',
    email: '',
    phone: '',
    arrivalDate: today,
    arrivalTime: '14:00',
    flightNumber: '',
    airline: '',
    numberOfPassengers: '1',
    luggageCount: '2',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `VA-SHUTTLE-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#1a1b1f] text-white rounded-2xl shadow-2xl border border-stone-700 p-6 sm:p-8 my-8"
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

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-[#c5a880]/20 flex items-center justify-center text-[#c5a880]">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              {t.title}
            </h3>
            <p className="text-xs text-[#c5a880] font-medium">
              {t.subtitle}
            </p>
          </div>
        </div>

        <hr className="border-stone-800 my-4" />

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif-luxury text-white">
              {lang === 'en' ? 'Shuttle Request Confirmed!' : 'የማመላለሻ ጥያቄዎ ተመዝግቧል!'}
            </h4>
            <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
              {t.success}
            </p>
            <div className="p-4 rounded-xl bg-black/50 border border-stone-800 max-w-xs mx-auto">
              <span className="text-xs text-stone-400 block mb-1">
                {lang === 'en' ? 'Reference Number' : 'የጥያቄ መለያ ቁጥር'}
              </span>
              <span className="text-base font-bold text-[#c5a880] tracking-wider">
                {refCode}
              </span>
            </div>
            <div className="text-xs text-stone-400">
              {lang === 'en' ? 'Need urgent airport pickup? Call directly:' : 'አስቸኳይ አቀባበል ከፈለጉ በቀጥታ ይደውሉ፡'}{' '}
              <a href={`tel:${HOTEL_INFO.phones[0]}`} className="text-[#c5a880] underline font-semibold">
                {HOTEL_INFO.phones[0]}
              </a>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-2.5 rounded-lg bg-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              {lang === 'en' ? 'Done' : 'ጨርስ'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {lang === 'en' ? 'Guest Name' : 'የእንግዳ ስም'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={lang === 'en' ? 'Your full name' : 'ሙሉ ስምዎን ያስገቡ'}
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {lang === 'en' ? 'Phone / WhatsApp' : 'ስልክ ቁጥር'} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+251 ..."
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.arrivalDate} *
                </label>
                <input
                  type="date"
                  required
                  value={formData.arrivalDate}
                  onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.arrivalTime} *
                </label>
                <input
                  type="time"
                  required
                  value={formData.arrivalTime}
                  onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.flightNumber} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.flightNumber}
                  onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
                  placeholder="e.g. ET 500 / EK 723"
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.airline}
                </label>
                <input
                  type="text"
                  value={formData.airline}
                  onChange={(e) => setFormData({ ...formData, airline: e.target.value })}
                  placeholder="e.g. Ethiopian Airlines"
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.passengers}
                </label>
                <select
                  value={formData.numberOfPassengers}
                  onChange={(e) => setFormData({ ...formData, numberOfPassengers: e.target.value })}
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4+">4+ Passengers</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">
                  {t.luggage}
                </label>
                <select
                  value={formData.luggageCount}
                  onChange={(e) => setFormData({ ...formData, luggageCount: e.target.value })}
                  className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="1">1 Piece</option>
                  <option value="2">2 Pieces</option>
                  <option value="3">3 Pieces</option>
                  <option value="4+">4+ Pieces</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1">
                {t.notes}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={lang === 'en' ? 'Any special assistance or flight delay notes' : 'ልዩ ማስታወሻ ወይም ጥያቄ'}
                className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c5a880]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                {t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
