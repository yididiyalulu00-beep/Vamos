import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';
import { MapPin, Navigation, Plane, ExternalLink, Compass, CheckCircle2 } from 'lucide-react';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const t = translations[lang].location;

  // Real Google Maps navigation link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Cameroon Street, Bole, Addis Ababa, Ethiopia'
  )}`;

  // Google Maps embed URL for Cameroon St, Bole, Addis Ababa
  const mapEmbedUrl = `https://maps.google.com/maps?q=Cameroon%20Street%2C%20Bole%2C%20Addis%20Ababa%2C%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-[#FAF9F6] text-[#1a1b1e]">
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

          {/* Airport Proximity Banner */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-[#1a1b1f] text-white border border-stone-800 shadow-lg">
            <div className="flex items-center gap-2 text-[#c5a880]">
              <Plane className="w-5 h-5 animate-pulse" />
              <span className="text-sm sm:text-base font-bold">
                {t.airportHighlight}
              </span>
            </div>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="text-xs text-stone-300">
              {t.airportSubtext}
            </span>
          </div>
        </div>

        {/* Map & Neighborhood Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Nearby Attractions & Verified Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-serif-luxury text-stone-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#9c7d54]" />
                  <span>{t.nearbyTitle}</span>
                </h3>
                <span className="text-xs font-semibold text-[#9c7d54] uppercase tracking-wider">
                  Bole Brass
                </span>
              </div>

              <div className="space-y-3">
                {NEARBY_ATTRACTIONS.map((spot, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-stone-900">
                        {lang === 'en' ? spot.nameEn : spot.nameAm}
                      </h4>
                      <span className="text-[11px] font-bold text-[#9c7d54] bg-[#F5F2EB] px-2 py-0.5 rounded shrink-0">
                        {lang === 'en' ? spot.distanceEn.split('/')[0] : spot.distanceAm.split('/')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {lang === 'en' ? spot.highlightEn : spot.highlightAm}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Direct Directions Box */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm mt-4">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#9c7d54] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                    {t.addressLabel}
                  </span>
                  <p className="text-sm font-semibold text-stone-900">
                    {lang === 'en' ? HOTEL_INFO.address : HOTEL_INFO.addressAm}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {lang === 'en' ? 'Bole / Bole Brass • 50m from Yod Abyssinia' : 'ቦሌ / ቦሌ ብራስ • ከዮድ አቢሲኒያ 50 ሜትር'}
                  </p>
                </div>
              </div>

              <a
                id="location-get-directions-btn"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[420px] rounded-2xl overflow-hidden border-2 border-stone-300/80 shadow-xl relative bg-stone-100">
              <iframe
                title="Vamos Addis Hotel Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Verified Marker Overlay Ribbon */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-stone-300 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-xs font-bold text-stone-900 font-serif-luxury uppercase">
                    VAMOS ADDIS HOTEL
                  </p>
                  <p className="text-[10px] text-stone-500 font-medium">
                    Cameroon St, Bole Brass, Addis Ababa
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
