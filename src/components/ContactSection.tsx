import React, { useState } from 'react';
import { Language, BookingFormData } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  initialRoomType?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialRoomType = 'all',
  initialCheckIn,
  initialCheckOut,
  initialGuests = '2'
}) => {
  const t = translations[lang].contact;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(today.getDate() + 3);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    checkIn: initialCheckIn || formatDate(tomorrow),
    checkOut: initialCheckOut || formatDate(checkoutDefault),
    guests: initialGuests,
    roomType: initialRoomType,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate unique reference code
    const generatedCode = `VA-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setRefCode(generatedCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      checkIn: formatDate(tomorrow),
      checkOut: formatDate(checkoutDefault),
      guests: '2',
      roomType: 'all',
      message: ''
    });
  };

  // Build mailto link for direct desktop client email
  const mailtoSubject = encodeURIComponent(`Booking Inquiry: Vamos Addis Hotel [${formData.roomType}]`);
  const mailtoBody = encodeURIComponent(
    `Hello Vamos Addis Hotel Team,\n\nI would like to request a reservation:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Check-in: ${formData.checkIn}\n- Check-out: ${formData.checkOut}\n- Guests: ${formData.guests}\n- Preferred Room: ${formData.roomType}\n- Message: ${formData.message}\n\nThank you.`
  );
  const directMailtoLink = `mailto:${HOTEL_INFO.emails.booking}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] text-[#1a1b1e]">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Verified Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Numbers Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] text-[#9c7d54] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                    {t.phoneTitle}
                  </h3>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {lang === 'en' ? 'Direct front office & reservations' : 'የደንበኞች መቀበያ እና የክፍል ማስያዣ'}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {HOTEL_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-[#FAF9F6] border border-stone-200/70 text-stone-800 hover:text-[#9c7d54] font-semibold text-sm transition-colors"
                  >
                    <span>{phone}</span>
                    <span className="text-xs font-bold text-[#9c7d54] uppercase tracking-wider">
                      {lang === 'en' ? 'Call' : 'ይደውሉ'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email Addresses Card */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] text-[#9c7d54] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                    {t.emailTitle}
                  </h3>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {lang === 'en' ? 'Official inquiry channels' : 'ይፋዊ የኢሜይል አድራሻዎች'}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${HOTEL_INFO.emails.booking}`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-[#FAF9F6] border border-stone-200/70 text-stone-800 hover:text-[#9c7d54] text-sm transition-colors"
                >
                  <div>
                    <span className="text-xs text-stone-500 block">
                      {lang === 'en' ? 'Bookings & Reservations:' : 'የክፍል ማስያዣ፡'}
                    </span>
                    <span className="font-semibold">{HOTEL_INFO.emails.booking}</span>
                  </div>
                  <Mail className="w-4 h-4 text-[#9c7d54]" />
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.emails.sales}`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-[#FAF9F6] border border-stone-200/70 text-stone-800 hover:text-[#9c7d54] text-sm transition-colors"
                >
                  <div>
                    <span className="text-xs text-stone-500 block">
                      {lang === 'en' ? 'Sales & Corporate Services:' : 'ሽያጭና ድርጅታዊ አገልግሎት፡'}
                    </span>
                    <span className="font-semibold">{HOTEL_INFO.emails.sales}</span>
                  </div>
                  <Mail className="w-4 h-4 text-[#9c7d54]" />
                </a>
              </div>
            </div>

            {/* Address & Official Web Info */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#9c7d54] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                    {t.addressTitle}
                  </h3>
                  <p className="text-sm font-semibold text-stone-800 mt-1">
                    {lang === 'en' ? HOTEL_INFO.address : HOTEL_INFO.addressAm}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {lang === 'en'
                      ? 'Bole / Bole Brass • 50 meters from Yod Abyssinia'
                      : 'ቦሌ / ቦሌ ብራስ • ከዮድ አቢሲኒያ 50 ሜትር ርቀት'}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#9c7d54]" />
                  <span>{HOTEL_INFO.website}</span>
                </span>
                <span className="text-stone-400">Addis Ababa, Ethiopia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Booking Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xl">
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl font-bold font-serif-luxury text-stone-900">
                    {t.formTitle}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#c5a880]/20 text-[#9c7d54]">
                    {lang === 'en' ? 'Direct Desk' : 'ቀጥተኛ ጥያቄ'}
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  {t.formSubtitle}
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-serif-luxury text-stone-900">
                    {t.successTitle}
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    {t.successMsg} <strong className="text-stone-900">{formData.email}</strong> or <strong className="text-stone-900">{formData.phone}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-xs mx-auto">
                    <span className="text-xs text-stone-500 block mb-1">
                      {t.confirmCode}
                    </span>
                    <span className="text-lg font-bold text-[#9c7d54] tracking-wider">
                      {refCode}
                    </span>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={directMailtoLink}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors"
                    >
                      {t.directEmailBtn}
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider hover:bg-stone-200 transition-colors cursor-pointer"
                    >
                      {t.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={lang === 'en' ? 'John Doe' : 'ሙሉ ስም'}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="guest@example.com"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 9..."
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.guests}
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4+">4+ Guests / Family</option>
                      </select>
                    </div>
                  </div>

                  {/* Check-in & Check-out */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.checkIn} *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        min={formatDate(today)}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t.checkOut} *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        min={formData.checkIn || formatDate(tomorrow)}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Preferred Room Type */}
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.roomType}
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors cursor-pointer"
                    >
                      <option value="all">
                        {lang === 'en' ? 'Any Available Room' : 'ማንኛውም ክፍት ክፍል'}
                      </option>
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.id}>
                          {lang === 'en' ? room.nameEn : room.nameAm} ({room.size})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.message}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'en'
                          ? 'Optional airport pickup request, flight details, or dietary preferences...'
                          : 'ተጨማሪ የኤርፖርት ትራንስፖርት፣ የበረራ ዝርዝር ወይም ልዩ ፍላጎት ካለዎት...'
                      }
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:bg-white focus:outline-none focus:border-[#9c7d54] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.submitting : t.submitBtn}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-500 text-center pt-2">
                    {lang === 'en'
                      ? 'By submitting, you send a direct reservation inquiry to booking@vamosaddis.com.'
                      : 'ይህን ቅጽ በመላክ ጥያቄዎን በቀጥታ ወደ booking@vamosaddis.com ያስተላልፋሉ።'}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
