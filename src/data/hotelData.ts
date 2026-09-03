import { Room, Facility, Amenity, GalleryItem } from '../types';

export const HOTEL_INFO = {
  name: 'Vamos Addis Hotel',
  previousName: 'Vamos Addis Hotel Apartment',
  nameAm: 'ቫሞስ አዲስ ሆቴል',
  previousNameAm: 'ቫሞስ አዲስ ሆቴል አፓርትመንት',
  address: 'Cameroon Street, Bole, Addis Ababa 7405, Ethiopia',
  addressAm: 'ካሜሩን ጎዳና፣ ቦሌ፣ አዲስ አበባ 7405፣ ኢትዮጵያ',
  location: 'Bole / Bole Brass, Addis Ababa',
  locationAm: 'ቦሌ / ቦሌ ብራስ፣ አዲስ አበባ',
  distanceToAirportKm: 1.0,
  distanceToAirportMiles: 0.6,
  distanceToYodAbyssiniaMeters: 50,
  website: 'www.vamosaddis.com',
  websiteUrl: 'http://www.vamosaddis.com',
  phones: [
    '+251 988 888484',
    '+251 988 888787',
    '+251 911 224377'
  ],
  emails: {
    sales: 'sales@vamosaddis.com',
    booking: 'booking@vamosaddis.com'
  },
  reviews: {
    rating: '8.5',
    maxRating: '10',
    verdictEn: 'Very Good',
    verdictAm: 'በጣም ጥሩ',
    totalReviews: '221',
    source: 'Booking.com'
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'twin-city-view',
    nameEn: 'Twin Room with City View',
    nameAm: 'ባለ ሁለት አልጋ ክፍል ከከተማ እይታ ጋር',
    size: '35 m²',
    bedsEn: '2 single beds',
    bedsAm: '2 ነጠላ አልጋዎች',
    maxGuests: 2,
    descriptionEn: 'Spacious and illuminated with panoramic views of Addis Ababa’s Bole skyline. Features two comfortable single beds and modern en-suite private bathroom.',
    descriptionAm: 'የቦሌ አዲስ አበባን ማራኪ የከተማ እይታ የሚያሳይ ሰፊና ብሩህ ክፍል፤ 2 ምቹ ነጠላ አልጋዎችና የግል መታጠቢያ ቤት ያለው።',
    featuresEn: ['City view', 'Private bathroom', 'Free Wi-Fi', 'TV', 'Tea/coffee facilities'],
    featuresAm: ['የከተማ እይታ', 'የግል መታጠቢያ ቤት', 'ነፃ ዋይፋይ', 'ቴሌቪዥን', 'የሻይ/ቡና ማዘጋጃ'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'studio',
    nameEn: 'Studio',
    nameAm: 'ስቱዲዮ ክፍል',
    size: '36 m²',
    bedsEn: 'Queen bed + sofa bed',
    bedsAm: 'ኩዊን አልጋ + ሶፋ አልጋ',
    maxGuests: 3,
    tagEn: 'Up to 3 adults',
    tagAm: 'እስከ 3 አዋቂዎች',
    descriptionEn: 'An expansive modern aparthotel studio offering dedicated living space with a plush queen bed, convertible sofa bed, refrigerator, minibar, and tea/coffee station.',
    descriptionAm: 'ምቹ የመኖሪያ ቦታ ያለው ዘመናዊ ስቱዲዮ ክፍል፤ ኩዊን አልጋ፣ የሚዘረጋ ሶፋ አልጋ፣ ማቀዝቀዣ፣ ሚኒባር እና የሻይ/ቡና ማዘጋጃ ያካተተ።',
    featuresEn: ['Private bathroom', 'Refrigerator', 'Minibar', 'Tea/coffee facilities', 'Free Wi-Fi'],
    featuresAm: ['የግል መታጠቢያ ቤት', 'ማቀዝቀዣ (ፍሪጅ)', 'ሚኒባር', 'የሻይ/ቡና ማዘጋጃ', 'ነፃ ዋይፋይ'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'junior-suite',
    nameEn: 'Junior Suite',
    nameAm: 'ጁኒየር ስዊት',
    size: '38 m²',
    bedsEn: 'King bed + sofa bed',
    bedsAm: 'ኪንግ አልጋ + ሶፋ አልጋ',
    maxGuests: 3,
    tagEn: 'Popular Choice',
    tagAm: 'ተመራጭ ምርጫ',
    descriptionEn: 'The pinnacle of comfort at Vamos Addis. An expansive 38 m² suite featuring a luxurious king bed, cozy sofa bed lounge, flat-screen entertainment, minibar, and refrigerator.',
    descriptionAm: 'ለላቀ ምቾት የተዘጋጀ 38 ካሬ ሜትር ስፋት ያለው ጁኒየር ስዊት፤ የኪንግ አልጋ፣ ሳሎን የሚመስል የሶፋ መቀመጫ፣ ቴሌቪዥን፣ ሚኒባር እና ፍሪጅ ያካተተ።',
    featuresEn: ['Private bathroom', 'Refrigerator', 'Minibar', 'Free Wi-Fi', 'TV'],
    featuresAm: ['የግል መታጠቢያ ቤት', 'ማቀዝቀዣ (ፍሪጅ)', 'ሚኒባር', 'ነፃ ዋይፋይ', 'ቴሌቪዥን'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'deluxe-balcony',
    nameEn: 'Deluxe Room with Balcony',
    nameAm: 'ዴሉክስ ክፍል ከበረንዳ ጋር',
    size: '25 m²',
    bedsEn: 'Queen bed',
    bedsAm: 'ኩዊን አልጋ',
    maxGuests: 2,
    descriptionEn: 'Charming and intimate deluxe room featuring an open-air private balcony with sweeping views of the vibrant Bole district, queen bed, work desk, and flat-screen TV.',
    descriptionAm: 'የቦሌን ሕያው ድባብ የሚያሳይ የግል በረንዳ ያለው ማራኪ ዴሉክስ ክፍል፤ ምቹ ኩዊን አልጋ፣ የግል መታጠቢያ፣ ቴሌቪዥን እና ነፃ ዋይፋይ ያካተተ።',
    featuresEn: ['Balcony', 'City view', 'Private bathroom', 'Free Wi-Fi', 'TV'],
    featuresAm: ['በረንዳ', 'የከተማ እይታ', 'የግል መታጠቢያ ቤት', 'ነፃ ዋይፋይ', 'ቴሌቪዥን'],
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];

export const ROOM_AMENITIES: Amenity[] = [
  { id: 'wifi', nameEn: 'Free Wi-Fi', nameAm: 'ነፃ ዋይፋይ', icon: 'Wifi' },
  { id: 'bathroom', nameEn: 'Private bathroom', nameAm: 'የግል መታጠቢያ ቤት', icon: 'Bath' },
  { id: 'shower', nameEn: 'Shower', nameAm: 'ሻወር', icon: 'ShowerHead' },
  { id: 'toiletries', nameEn: 'Toiletries', nameAm: 'የግል ንፅህና መጠበቂያዎች', icon: 'Sparkles' },
  { id: 'towels', nameEn: 'Towels', nameAm: 'ፎጣዎች', icon: 'Layers' },
  { id: 'hairdryer', nameEn: 'Hair dryer', nameAm: 'የፀጉር ማድረቂያ', icon: 'Wind' },
  { id: 'tv', nameEn: 'Flat-screen TV', nameAm: 'ፍላት ስክሪን ቴሌቪዥን', icon: 'Tv' },
  { id: 'satellite', nameEn: 'Satellite/cable channels', nameAm: 'የሳተላይት/ኬብል ቻናሎች', icon: 'Radio' },
  { id: 'telephone', nameEn: 'Telephone', nameAm: 'ስልክ', icon: 'Phone' },
  { id: 'minibar', nameEn: 'Minibar', nameAm: 'ሚኒባር', icon: 'Wine' },
  { id: 'refrigerator', nameEn: 'Refrigerator', nameAm: 'ማቀዝቀዣ (ፍሪጅ)', icon: 'Refrigerator' },
  { id: 'tea-coffee', nameEn: 'Tea/coffee maker', nameAm: 'የሻይ/ቡና ማፍያ', icon: 'Coffee' },
  { id: 'kettle', nameEn: 'Electric kettle', nameAm: 'የኤሌክትሪክ ኬትል', icon: 'Zap' },
  { id: 'desk', nameEn: 'Work desk', nameAm: 'የስራ ጠረጴዛ', icon: 'Briefcase' },
  { id: 'safebox', nameEn: 'Safe box', nameAm: 'የደህንነት ሳጥን (ሴፍ)', icon: 'ShieldCheck' },
  { id: 'linens', nameEn: 'Linens', nameAm: 'ንጹህ አንሶላዎች', icon: 'BedDouble' },
  { id: 'slippers', nameEn: 'Slippers', nameAm: 'የቤት ጫማዎች', icon: 'Footprints' },
  { id: 'ac', nameEn: 'Air conditioning', nameAm: 'የአየር ማቀዝቀዣ (AC)', icon: 'Fan' },
  { id: 'wakeup', nameEn: 'Wake-up service', nameAm: 'የመቀስቀሻ አገልግሎት', icon: 'Bell' }
];

export const HOTEL_FACILITIES: Facility[] = [
  { id: 'wifi', nameEn: 'Free Wi-Fi', nameAm: 'ነፃ ዋይፋይ', icon: 'Wifi', descriptionEn: 'High-speed complimentary internet throughout the property', descriptionAm: 'በሁሉም ሆቴሉ ክፍሎች ፈጣን ነፃ ኢንተርኔት' },
  { id: 'shuttle', nameEn: 'Free Airport Shuttle', nameAm: 'ነፃ የኤርፖርት ማመላለሻ', icon: 'Plane', descriptionEn: 'Convenient complimentary pickup and drop-off to Bole International Airport (~1 km)', descriptionAm: 'ወደ ቦሌ ኤርፖርት እና ከኤርፖርት የሚደረግ ነፃ ምቹ ትራንስፖርት' },
  { id: 'parking', nameEn: 'Free Parking', nameAm: 'ነፃ የመኪና ማቆሚያ', icon: 'Car', descriptionEn: 'Secure on-site complimentary parking for resident guests', descriptionAm: 'ደህንነቱ የተጠበቀ ነፃ የመኪና ማቆሚያ' },
  { id: 'restaurant', nameEn: 'Restaurant', nameAm: 'ምግብ ቤት', icon: 'UtensilsCrossed', descriptionEn: 'Ethiopian authentic specialties and international culinary dishes', descriptionAm: 'ጣፋጭ የሀገር ባህል እና አለም አቀፍ ምግቦች' },
  { id: 'bar', nameEn: 'Bar', nameAm: 'ባር', icon: 'Wine', descriptionEn: 'Refined cocktail bar, local beers, and premium beverage selection', descriptionAm: 'ምርጥ መጠጦችና ዘና የሚያደርግ ድባብ' },
  { id: 'spa', nameEn: 'Spa & Wellness Center', nameAm: 'ስፓና ጤና ማዕከል', icon: 'Sparkles', descriptionEn: 'Revitalizing treatments, steam sessions, and relaxation spaces', descriptionAm: 'እራስዎን የሚያድሱበት የሰላምና የመረጋጋት ስፍራ' },
  { id: 'fitness', nameEn: 'Fitness Center', nameAm: 'የአካል ብቃት እንቅስቃሴ ማዕከል', icon: 'Dumbbell', descriptionEn: 'Maintain your workout routine during your Addis stay', descriptionAm: 'በቆይታዎ ወቅት የአካል ብቃትዎን የሚጠብቁበት ዘመናዊ ጂም' },
  { id: 'sauna', nameEn: 'Sauna', nameAm: 'ሳውና', icon: 'Flame', descriptionEn: 'Traditional dry heat detoxifying sauna room', descriptionAm: 'ሰውነትን የሚያፍታታና የሚያድስ ሳውና' },
  { id: 'steam', nameEn: 'Steam Room', nameAm: 'የእንፋሎት ክፍል', icon: 'CloudRain', descriptionEn: 'Therapeutic warm steam room for total relaxation', descriptionAm: 'የእንፋሎት ቴራፒ ክፍል' },
  { id: 'family', nameEn: 'Family Rooms', nameAm: 'የቤተሰብ ክፍሎች', icon: 'Users', descriptionEn: 'Spacious interconnecting studio and suite options', descriptionAm: 'ለቤተሰብ አመቺ የሆኑ ሰፋፊ ክፍሎች' },
  { id: 'frontdesk', nameEn: '24-Hour Front Desk', nameAm: 'የ24 ሰዓት የደንበኞች መቀበያ', icon: 'Clock', descriptionEn: 'Always open to assist your travel, check-in, and concierge needs', descriptionAm: 'በቀንና በሌሊት ዝግጁ የሆነ የደንበኞች አገልግሎት' },
  { id: 'luggage', nameEn: 'Luggage Storage', nameAm: 'የሻንጣ ማስቀመጫ', icon: 'Luggage', descriptionEn: 'Secure luggage holding before check-in or prior to flights', descriptionAm: 'ከበረራዎ በፊት ሻንጣዎን በደህንነት የሚያስቀምጡበት' },
  { id: 'roomservice', nameEn: 'Room Service', nameAm: 'የክፍል ውስጥ ምግብ አገልግሎት', icon: 'ConciergeBell', descriptionEn: 'Dine in the comfort and privacy of your room or suite', descriptionAm: 'በክፍልዎ ውስጥ ሆነው የሚስተናገዱበት አገልግሎት' },
  { id: 'teacoffee', nameEn: 'Tea/Coffee Facilities', nameAm: 'የሻይና ቡና አገልግሎት', icon: 'Coffee', descriptionEn: 'Renowned Ethiopian highland coffee and fine teas', descriptionAm: 'ጥራት ያለው የኢትዮጵያ ሀገር በቀል ቡና እና ሻይ' },
  { id: 'terrace', nameEn: 'Terrace', nameAm: 'በረንዳ/ቴራስ', icon: 'Sun', descriptionEn: 'Open-air views of the dynamic Bole neighborhood', descriptionAm: 'የቦሌን ድባብ የሚያዩበት ውብ ክፍት አየር ቦታ' },
  { id: 'balcony', nameEn: 'Balcony', nameAm: 'በረንዳ', icon: 'Maximize2', descriptionEn: 'Private balconies attached to select room types', descriptionAm: 'በክፍሎች የተካተቱ የግል በረንዳዎች' },
  { id: 'garden', nameEn: 'Garden', nameAm: 'የአትክልት ስፍራ', icon: 'Trees', descriptionEn: 'Lush greenery courtyard for tranquility in the capital', descriptionAm: 'አረንጓዴ ያማረና የሚያረጋጋ ግቢ' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    titleEn: 'Vamos Addis Hotel Exterior',
    titleAm: 'የቫሞስ አዲስ ሆቴል ውጫዊ ገጽታ',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g2',
    titleEn: 'Junior Suite Living Lounge',
    titleAm: 'የጁኒየር ስዊት ሳሎን ክፍል',
    category: 'suites',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g3',
    titleEn: 'Deluxe Room with Balcony',
    titleAm: 'ዴሉክስ ክፍል ከበረንዳ ጋር',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g4',
    titleEn: 'Hotel Reception & Lobby',
    titleAm: 'የሆቴሉ መስተንግዶ እና ሎቢ',
    category: 'lobby',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g5',
    titleEn: 'Fine Dining Restaurant',
    titleAm: 'የሆቴሉ ሬስቶራንት',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g6',
    titleEn: 'Traditional Ethiopian Coffee Ceremony',
    titleAm: 'ባህላዊ የኢትዮጵያ ቡና አፈላል ስነ-ስርዓት',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g7',
    titleEn: 'Twin Room with City View',
    titleAm: 'ባለ ሁለት አልጋ ክፍል ከከተማ እይታ ጋር',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g8',
    titleEn: 'Modern Studio Aparthotel',
    titleAm: 'ዘመናዊ ስቱዲዮ አፓርትመንት',
    category: 'suites',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g9',
    titleEn: 'Hotel Bar & Lounge',
    titleAm: 'የሆቴል ባር እና ላውንጅ',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g10',
    titleEn: 'Wellness Spa & Steam Relaxation',
    titleAm: 'የስፓ እና የእንፋሎት ማዕከል',
    category: 'spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g11',
    titleEn: 'State-of-the-Art Fitness Gym',
    titleAm: 'ዘመናዊ የአካል ብቃት እንቅስቃሴ ማዕከል',
    category: 'gym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g12',
    titleEn: 'Breakfast Buffet & Fresh Dishes',
    titleAm: 'የቁርስ ቡፌ እና ትኩስ ምግቦች',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g13',
    titleEn: 'Vibrant Bole Streetscape',
    titleAm: 'የቦሌ አዲስ አበባ ገጽታ',
    category: 'addis',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g14',
    titleEn: 'Executive Event & Meeting Space',
    titleAm: 'የስብሰባ እና ዝግጅት አዳራሽ',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g15',
    titleEn: 'Warm Hospitality & Welcome',
    titleAm: 'ሞቅ ያለ የኢትዮጵያውያን መስተንግዶ',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g16',
    titleEn: 'Private Bath & Premium Amenities',
    titleAm: 'የግል መታጠቢያ እና ቁሳቁሶች',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    nameEn: 'Bole Addis Ababa International Airport',
    nameAm: 'ቦሌ ዓለም አቀፍ አየር ማረፊያ',
    distanceEn: 'Approx. 1 km (0.6 miles) / 3-5 min drive',
    distanceAm: 'በግምት 1 ኪ.ሜ / ከ3-5 ደቂቃ በመኪና',
    highlightEn: 'Complimentary shuttle service available',
    highlightAm: 'ነፃ የሆቴል ማመላለሻ አገልግሎት አለ'
  },
  {
    nameEn: 'Yod Abyssinia Cultural Restaurant',
    nameAm: 'ዮድ አቢሲኒያ የባህል ሬስቶራንት',
    distanceEn: 'About 50 meters / 1 min walk',
    distanceAm: 'ወደ 50 ሜትር / የ1 ደቂቃ የእግር ጉዞ',
    highlightEn: 'Iconic traditional Ethiopian music, dance & culinary experience',
    highlightAm: 'ተወዳጅ የኢትዮጵያ ባህላዊ ሙዚቃ፣ ጭፈራና የምግብ ማዕከል'
  },
  {
    nameEn: 'Edna Mall & Matti Multiplex Theatre',
    nameAm: 'ኤድና ሞል እና ማቲ ሲኒማ',
    distanceEn: 'Approx. 800 meters / Bole Central',
    distanceAm: 'ወደ 800 ሜትር / ቦሌ መሃል',
    highlightEn: 'Cinema multiplex, shopping boutiques & entertainment',
    highlightAm: 'ሲኒማ፣ የገበያ ማዕከላትና መዝናኛ'
  },
  {
    nameEn: 'Medhane Alem Cathedral',
    nameAm: 'ቦሌ መድኃኔዓለም ካቴድራል',
    distanceEn: 'Approx. 900 meters / Walking distance',
    distanceAm: 'ወደ 900 ሜትር / በእግር መድረስ የሚቻል',
    highlightEn: 'One of the largest architectural cathedrals in Africa',
    highlightAm: 'በአፍሪካ ትልልቅ ከሚባሉ ህንጻዎች አንዱ የሆነው ካቴድራል'
  },
  {
    nameEn: 'Addis Ababa City Center (Meskel Square)',
    nameAm: 'የአዲስ አበባ ከተማ መሃል (መስቀል አደባባይ)',
    distanceEn: 'Approx. 4.5 km / 10-15 min drive',
    distanceAm: 'ወደ 4.5 ኪ.ሜ / ከ10-15 ደቂቃ በመኪና',
    highlightEn: 'Historic heart, museums, government and financial hub',
    highlightAm: 'የከተማው እምብርት፣ ሙዚየሞችና የፋይናንስ ማዕከል'
  }
];
