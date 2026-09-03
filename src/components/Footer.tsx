import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Mail, MapPin, Globe, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang }) => {
  const t = translations[lang].footer;
  const tn = translations[lang].nav;

  const quickLinks = [
    { name: tn.home, href: '#home' },
    { name: tn.rooms, href: '#rooms' },
    { name: tn.dining, href: '#dining' },
    { name: tn.wellness, href: '#wellness' },
    { name: tn.facilities, href: '#facilities' },
    { name: tn.about, href: '#about' },
    { name: tn.gallery, href: '#gallery' },
    { name: tn.location, href: '#location' },
    { name: tn.contact, href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121316] text-white border-t border-stone-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#c5a880]" />
              <span className="text-2xl font-bold tracking-wider text-white font-serif-luxury uppercase">
                VAMOS ADDIS HOTEL
              </span>
            </div>
            <p className="text-xs text-[#c5a880] tracking-[0.2em] uppercase font-semibold">
              {lang === 'en' ? 'Boutique Hotel & Aparthotel • Bole, Addis Ababa' : 'የቦቲክ ሆቴልና አፓርትሆቴል • ቦሌ፣ አዲስ አበባ'}
            </p>

            <p className="text-base font-serif-luxury italic text-stone-300">
              “{t.motto}”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Providing modern luxury, aparthotel convenience, and warm Ethiopian hospitality just 1 km from Bole Addis Ababa International Airport.'
                : 'ከቦሌ አዲስ አበባ ዓለም አቀፍ አውሮፕላን ማረፊያ በ1 ኪ.ሜ ርቀት ላይ ዘመናዊ የቅንጦት መስተንግዶና ሞቅ ያለ የኢትዮጵያውያን ፍቅር እናቀርባለን።'}
            </p>

            <div className="pt-2 text-xs text-stone-500">
              <span>{lang === 'en' ? 'Previous name:' : 'ቀደም ሲል:'} </span>
              <span className="text-stone-400">{HOTEL_INFO.previousName}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c5a880] mb-4">
              {t.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-stone-400 hover:text-[#c5a880] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c5a880] mb-4">
              {t.contactUs}
            </h4>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>Cameroon Street, Bole, Addis Ababa 7405, Ethiopia</span>
              </div>

              <div className="space-y-1 pt-1">
                {HOTEL_INFO.phones.map((p) => (
                  <div key={p} className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <a href={`tel:${p}`} className="text-stone-300 hover:text-white transition-colors">
                      {p}
                    </a>
                  </div>
                ))}
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                  <a href={`mailto:${HOTEL_INFO.emails.sales}`} className="text-stone-300 hover:text-white transition-colors">
                    {HOTEL_INFO.emails.sales}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                  <a href={`mailto:${HOTEL_INFO.emails.booking}`} className="text-stone-300 hover:text-white transition-colors">
                    {HOTEL_INFO.emails.booking}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Globe className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                <a
                  href={HOTEL_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#c5a880] underline transition-colors"
                >
                  {HOTEL_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>© 2026 Vamos Addis Hotel. All Rights Reserved.</p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Cameroon Street, Bole, Addis Ababa, Ethiopia
            </p>
          </div>

          {/* Language and Back to top */}
          <div className="flex items-center gap-6">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-stone-300 hover:text-[#c5a880] transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Language: {lang === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-[#c5a880] border border-stone-800 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
