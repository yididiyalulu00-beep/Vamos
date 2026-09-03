export type Language = 'en' | 'am';

export interface Room {
  id: string;
  nameEn: string;
  nameAm: string;
  size: string;
  bedsEn: string;
  bedsAm: string;
  maxGuests: number;
  descriptionEn: string;
  descriptionAm: string;
  featuresEn: string[];
  featuresAm: string[];
  image: string;
  additionalImages?: string[];
  tagEn?: string;
  tagAm?: string;
}

export interface Facility {
  id: string;
  nameEn: string;
  nameAm: string;
  icon: string;
  descriptionEn?: string;
  descriptionAm?: string;
}

export interface Amenity {
  id: string;
  nameEn: string;
  nameAm: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleAm: string;
  category: 'hotel' | 'rooms' | 'suites' | 'restaurant' | 'spa' | 'gym' | 'exterior' | 'lobby' | 'events' | 'addis';
  image: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}

export interface AirportShuttleFormData {
  fullName: string;
  email: string;
  phone: string;
  arrivalDate: string;
  arrivalTime: string;
  flightNumber: string;
  airline: string;
  numberOfPassengers: string;
  luggageCount: string;
  notes: string;
}
