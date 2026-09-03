import React, { useState } from 'react';
import { GalleryItem, Language } from '../types';
import { translations } from '../data/translations';
import { GALLERY_ITEMS } from '../data/hotelData';
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const t = translations[lang].gallery;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t.tabs.all },
    { id: 'hotel', label: t.tabs.hotel },
    { id: 'rooms', label: t.tabs.rooms },
    { id: 'suites', label: t.tabs.suites },
    { id: 'restaurant', label: t.tabs.restaurant },
    { id: 'spa', label: t.tabs.spa },
    { id: 'gym', label: t.tabs.gym },
    { id: 'exterior', label: t.tabs.exterior },
    { id: 'lobby', label: t.tabs.lobby },
    { id: 'events', label: t.tabs.events },
    { id: 'addis', label: t.tabs.addis },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#121316] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c5a880] mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-stone-300 text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c5a880] text-stone-950 shadow-md scale-105'
                  : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with Masonry Look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-stone-800/80 bg-stone-900"
            >
              <img
                src={item.image}
                alt={lang === 'en' ? item.titleEn : item.titleAm}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-[#c5a880] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a880] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-white drop-shadow-sm line-clamp-1">
                  {lang === 'en' ? item.titleEn : item.titleAm}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Display */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={lang === 'en' ? filteredItems[activeLightboxIndex].titleEn : filteredItems[activeLightboxIndex].titleAm}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-stone-800"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-[#c5a880]">
                {filteredItems[activeLightboxIndex].category} • {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
              <p className="text-lg font-bold font-serif-luxury text-white mt-1">
                {lang === 'en'
                  ? filteredItems[activeLightboxIndex].titleEn
                  : filteredItems[activeLightboxIndex].titleAm}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
