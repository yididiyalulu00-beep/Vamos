import React, { useState, useEffect } from 'react';
import { Language, Room } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { AboutSection } from './components/AboutSection';
import { HotelExperienceSection } from './components/HotelExperienceSection';
import { LocationSection } from './components/LocationSection';
import { RoomsSection } from './components/RoomsSection';
import { RoomAmenitiesGrid } from './components/RoomAmenitiesGrid';
import { DiningSection } from './components/DiningSection';
import { WellnessSection } from './components/WellnessSection';
import { AirportShuttleSection } from './components/AirportShuttleSection';
import { HotelFacilitiesGrid } from './components/HotelFacilitiesGrid';
import { GuestReviewsSection } from './components/GuestReviewsSection';
import { GallerySection } from './components/GallerySection';
import { BookingCTA } from './components/BookingCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { AirportPickupModal } from './components/AirportPickupModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);
  const [isShuttleModalOpen, setIsShuttleModalOpen] = useState(false);

  // Booking pre-population state
  const [prefilledRoomType, setPrefilledRoomType] = useState<string>('all');
  const [prefilledCheckIn, setPrefilledCheckIn] = useState<string>('');
  const [prefilledCheckOut, setPrefilledCheckOut] = useState<string>('');
  const [prefilledGuests, setPrefilledGuests] = useState<string>('2');

  // Sync document title and HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'am';
    if (lang === 'en') {
      document.title = 'Vamos Addis Hotel | Hotel in Bole, Addis Ababa';
    } else {
      document.title = 'ቫሞስ አዲስ ሆቴል | በቦሌ አዲስ አበባ የሚገኝ ሆቴል';
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const scrollToContactBooking = (roomId?: string) => {
    if (roomId) {
      setPrefilledRoomType(roomId);
    }
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCheckAvailability = (params: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomType: string;
  }) => {
    setPrefilledCheckIn(params.checkIn);
    setPrefilledCheckOut(params.checkOut);
    setPrefilledGuests(params.guests);
    setPrefilledRoomType(params.roomType);
    scrollToContactBooking(params.roomType);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAF9F6] text-[#1a1b1e] ${lang === 'am' ? 'font-amharic' : ''}`}>
      {/* Sticky Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => scrollToContactBooking()}
      />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          lang={lang}
          onBookClick={() => scrollToContactBooking()}
          onExploreRooms={scrollToRooms}
        />

        {/* Functional Quick Booking Bar */}
        <QuickBookingBar
          lang={lang}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* About Vamos Addis */}
        <AboutSection
          lang={lang}
          onDiscoverClick={scrollToRooms}
        />

        {/* Hotel Experience: Comfort, Convenience, Hospitality */}
        <HotelExperienceSection lang={lang} />

        {/* Rooms & Suites */}
        <RoomsSection
          lang={lang}
          onViewRoom={(room) => setSelectedRoomModal(room)}
          onBookRoom={(roomId) => scrollToContactBooking(roomId)}
        />

        {/* Room Amenities Grid (19 verified items) */}
        <RoomAmenitiesGrid lang={lang} />

        {/* Dining & Breakfast Section */}
        <DiningSection
          lang={lang}
          onExploreDining={() => scrollToContactBooking()}
        />

        {/* Wellness & Fitness Center */}
        <WellnessSection
          lang={lang}
          onBookWellness={() => scrollToContactBooking()}
        />

        {/* Easy Airport Transfers Feature Banner */}
        <AirportShuttleSection
          lang={lang}
          onRequestShuttle={() => setIsShuttleModalOpen(true)}
        />

        {/* Hotel Facilities (17 verified items) */}
        <HotelFacilitiesGrid lang={lang} />

        {/* Verified Guest Reviews */}
        <GuestReviewsSection lang={lang} />

        {/* Interactive Gallery */}
        <GallerySection lang={lang} />

        {/* Location & Map Section */}
        <LocationSection lang={lang} />

        {/* Dark Booking CTA */}
        <BookingCTA
          lang={lang}
          onBookNow={() => scrollToContactBooking()}
          onContactUs={() => scrollToContactBooking()}
        />

        {/* Verified Contact Directory & Booking Request Form */}
        <ContactSection
          lang={lang}
          initialRoomType={prefilledRoomType}
          initialCheckIn={prefilledCheckIn}
          initialCheckOut={prefilledCheckOut}
          initialGuests={prefilledGuests}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Mobile Sticky Bar */}
      <FloatingMobileBar
        lang={lang}
        onBookNow={() => scrollToContactBooking()}
      />

      {/* Room Details Modal */}
      <RoomDetailsModal
        room={selectedRoomModal}
        lang={lang}
        onClose={() => setSelectedRoomModal(null)}
        onBookRoom={(roomId) => scrollToContactBooking(roomId)}
      />

      {/* Airport Shuttle Modal */}
      <AirportPickupModal
        lang={lang}
        isOpen={isShuttleModalOpen}
        onClose={() => setIsShuttleModalOpen(false)}
      />
    </div>
  );
}
