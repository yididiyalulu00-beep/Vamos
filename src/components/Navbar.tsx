import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { Menu, X, Phone, Globe, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.rooms, href: '#rooms' },
    { name: t.dining, href: '#dining' },
    { name: t.wellness, href: '#wellness' },
    { name: t.facilities, href: '#facilities' },
    { name: t.about, href: '#about' },
    { name: t.gallery, href: '#gallery' },
    { name: t.location, href: '#location' },
    { name: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div id="top-announcement-bar" className="bg-[#121316] text-[#c5a880] text-xs py-2 px-4 border-b border-[#2a2b30] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
              {lang === 'en' ? 'Cameroon St, Bole, Addis Ababa • ~1 km from Bole Airport' : 'ካሜሩን ጎዳና፣ ቦሌ፣ አዲስ አበባ • ከቦሌ ኤርፖርት ~1 ኪ.ሜ'}
            </span>
            <span className="hidden lg:inline-block text-stone-400">
              {lang === 'en' ? '50m from Yod Abyssinia' : 'ከዮድ አቢሲኒያ 50 ሜትር ርቀት'}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              id="topbar-phone-link"
              href={`tel:${HOTEL_INFO.phones[0]}`}
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{HOTEL_INFO.phones[0]}</span>
            </a>
            <span className="text-stone-600">|</span>
            <button
              id="topbar-lang-toggle"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 text-[#c5a880] hover:text-amber-200 transition-colors font-medium cursor-pointer"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141518]/95 backdrop-blur-md shadow-lg border-b border-stone-800/60 py-3'
            : 'bg-[#181a1f] border-b border-stone-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880] group-hover:scale-125 transition-transform"></span>
                <span className="text-xl sm:text-2xl font-bold tracking-wider text-white font-serif-luxury uppercase">
                  VAMOS ADDIS
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] text-[#c5a880] uppercase pl-4 font-medium">
                HOTEL • BOLE ADDIS ABABA
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-1.5 text-[13px] tracking-wide text-stone-200 hover:text-[#c5a880] transition-colors rounded hover:bg-white/5 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch Button */}
              <button
                id="navbar-language-switch-btn"
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 border border-stone-700/60 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className={lang === 'en' ? 'font-amharic' : ''}>{t.langSwitch}</span>
              </button>

              {/* Primary BOOK NOW button */}
              <button
                id="navbar-book-now-btn"
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-[#141518] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-[#c5a880]/20 cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.bookNow}</span>
              </button>
            </div>

            {/* Mobile buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-lang-toggle-btn"
                onClick={onToggleLang}
                className="px-2.5 py-1 text-xs text-[#c5a880] border border-[#c5a880]/40 rounded bg-stone-900/60 font-medium"
              >
                {lang === 'en' ? 'አማ' : 'EN'}
              </button>

              <button
                id="mobile-book-now-header-btn"
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded bg-[#c5a880] text-[#141518] text-xs font-bold uppercase tracking-wider"
              >
                {lang === 'en' ? 'BOOK' : 'ይያዙ'}
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a880]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="lg:hidden bg-[#16171b] border-b border-stone-800 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-1 divide-y divide-stone-800/60">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2.5 px-2 text-stone-200 hover:text-[#c5a880] text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-stone-800 flex flex-col gap-3">
              <button
                id="mobile-drawer-book-now-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded bg-gradient-to-r from-[#c5a880] to-[#b89758] text-[#141518] text-center text-sm font-bold tracking-wider uppercase"
              >
                {t.bookNow}
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-stone-400">
                <a href={`tel:${HOTEL_INFO.phones[0]}`} className="flex items-center gap-1.5 text-stone-300">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{HOTEL_INFO.phones[0]}</span>
                </a>
                <button
                  onClick={onToggleLang}
                  className="text-[#c5a880] underline font-medium"
                >
                  {lang === 'en' ? 'ቋንቋ ቀይር (አማርኛ)' : 'Switch to English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
