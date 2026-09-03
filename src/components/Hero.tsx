import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, Bed, ChevronDown, Plane, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
  onExploreRooms: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    titleEn: 'Modern Hospitality in Bole',
    titleAm: 'ዘመናዊ መስተንግዶ በቦሌ',
    captionEn: 'Vamos Addis Hotel Lobby & Welcome',
    captionAm: 'የቫሞስ አዲስ ሆቴል ሎቢና አቀባበል'
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85',
    titleEn: 'Luxury Living Suites',
    titleAm: 'ምቹ የቅንጦት ስዊቶች',
    captionEn: 'Junior Suites & Aparthotel Living',
    captionAm: 'ጁኒየር ስዊቶችና አፓርትመንቶች'
  },
  {
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=85',
    titleEn: 'Prime Cameroon Street Location',
    titleAm: 'ምርጥ የካሜሩን ጎዳና መገኛ',
    captionEn: 'Moments from Bole Airport & Attractions',
    captionAm: 'ለቦሌ ኤርፖርትና መስህቦች ቅርብ'
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85',
    titleEn: 'Fine Dining & Ethiopian Flavors',
    titleAm: 'ምርጥ የሀገር ባህልና አለም አቀፍ ምግቦች',
    captionEn: 'Culinary Experiences & Fresh Breakfast',
    captionAm: 'ጣፋጭ ምግቦች እና ትኩስ ቁርስ'
  }
];

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick, onExploreRooms }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[lang].hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('booking-bar-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#121316] text-white overflow-hidden">
      {/* Background Slideshow with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      ))}

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/75 to-[#121316]/60 backdrop-blur-[1px]" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Boutique Tag / Proximity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2025]/80 border border-[#c5a880]/30 text-[#c5a880] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.tag}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-luxury leading-[1.15] mb-6 drop-shadow-sm">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow">
          {t.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          <button
            id="hero-book-stay-btn"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#c5a880] to-[#b89758] hover:from-[#d4b992] hover:to-[#c5a880] text-[#141518] text-sm font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-[#c5a880]/30 cursor-pointer flex items-center justify-center gap-2.5 group active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#141518] group-hover:scale-110 transition-transform" />
            <span>{t.bookStay}</span>
          </button>

          <button
            id="hero-explore-rooms-btn"
            onClick={onExploreRooms}
            className="w-full sm:w-auto px-8 py-4 rounded bg-stone-900/80 hover:bg-stone-800/90 text-stone-100 hover:text-white text-sm font-semibold tracking-wider uppercase border border-stone-700/80 hover:border-[#c5a880]/60 transition-all backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2.5 active:scale-95"
          >
            <Bed className="w-4 h-4 text-[#c5a880]" />
            <span>{t.exploreRooms}</span>
          </button>
        </div>

        {/* Key Highlights Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2.5 px-4 sm:px-6 rounded-xl bg-black/40 border border-stone-800/70 backdrop-blur-md text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2 text-stone-200">
            <Plane className="w-4 h-4 text-[#c5a880]" />
            <span>
              {lang === 'en' ? 'Approx. 1 km from Bole Airport (Free Shuttle)' : 'ከቦሌ ኤርፖርት 1 ኪ.ሜ (ነፃ ማመላለሻ)'}
            </span>
          </div>
          <span className="hidden sm:inline text-stone-600">•</span>
          <div className="flex items-center gap-2 text-stone-200">
            <MapPin className="w-4 h-4 text-[#c5a880]" />
            <span>
              {lang === 'en' ? '50m from Yod Abyssinia' : 'ከዮድ አቢሲኒያ 50 ሜትር'}
            </span>
          </div>
          <span className="hidden sm:inline text-stone-600">•</span>
          <div className="flex items-center gap-1.5 text-stone-200">
            <span className="font-bold text-[#c5a880]">8.5 / 10</span>
            <span className="text-stone-400">{HOTEL_INFO.reviews.source}</span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-[#c5a880]' : 'w-2 bg-stone-600 hover:bg-stone-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 text-center">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-1 text-stone-400 hover:text-[#c5a880] transition-colors cursor-pointer"
          aria-label={t.scrollDown}
        >
          <span className="text-[10px] tracking-widest uppercase">{t.scrollDown}</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a880]" />
        </button>
      </div>
    </section>
  );
};
