import { BusinessConfig, TourPackage, Vehicle, Testimonial, CustomerEnquiry } from '../types';

export const INITIAL_BUSINESS_CONFIG: BusinessConfig = {
  name: 'Alex Tours and Travels',
  tagline: 'Your Journey Begins With Us – Fly High',
  phone: '+918347511900',
  phoneFormatted: '+91 83475 11900',
  whatsappNumber: '918347511900',
  email: 'alextoursdakor@gmail.com',
  address: 'Ranchodray Hospital Opposite, Near Police Station and Bus Station, Station Road, Dakor',
  landmark: 'Opposite Ranchodray Hospital, Near Police Station & Dakor Bus Station',
  city: 'Dakor',
  state: 'Gujarat',
  pincode: '388225',
  googleRating: 5.0,
  googleReviewCount: 198,
  businessHours: 'Open until 7:30 PM (Mon - Sat: 9:00 AM - 7:30 PM, Sun: 10:00 AM - 4:00 PM)',
  googleMapsUrl: 'https://maps.google.com/?q=Alex+Tours+and+Travels+Dakor+Gujarat',
  embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.493863489379!2d73.1491741!3d22.7562098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e347432f80165%3A0x6b1070ff1709e86!2sStation%20Rd%2C%20Dakor%2C%20Gujarat%20388225!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const INITIAL_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-kashmir',
    title: 'Jewels of Kashmir – Srinagar, Gulmarg & Pahalgam',
    slug: 'kashmir-paradise-tour',
    destination: 'Kashmir',
    region: 'Jammu & Kashmir',
    category: 'domestic',
    subCategory: 'North India',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: '₹18,500',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 42,
    coverImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience the paradise on earth with snow-clad Himalayan peaks, serene Dal Lake Shikara rides, gondola rides in Gulmarg, and lush green meadows of Pahalgam.',
    highlights: [
      '1 Night stay in a Luxury Dal Lake Houseboat',
      'Scenic Shikara ride in Dal Lake at sunset',
      'World-famous Gulmarg Gondola Cable Car Ride',
      'Betaab Valley and Aru Valley in Pahalgam',
      'Mughal Gardens visit (Shalimar & Nishat Bagh)'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar & Dal Lake Shikara Ride', description: 'Warm welcome at Srinagar Airport. Transfer to your deluxe Houseboat. Evening sunset Shikara ride across the floating gardens.', meals: 'Dinner included' },
      { day: 2, title: 'Srinagar to Gulmarg Day Excursion', description: 'Scenic drive to Gulmarg (Meadow of Flowers). Take the world-famous Gondola ride to Phase 1 & Phase 2 snow peaks. Return to Srinagar hotel.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Srinagar to Pahalgam (Valley of Shepherds)', description: 'Drive past saffron fields of Pampore and pine forests to Pahalgam. Visit scenic Lidder River and local marketplace.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Explore Betaab Valley & Chandanwari', description: 'Excursion to Betaab Valley, Aru Valley, and Chandanwari. Leisure evening around pine forest trails.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Pahalgam to Srinagar & Mughal Heritage', description: 'Return to Srinagar. Visit famous Mughal Gardens – Nishat Bagh, Shalimar Bagh, and Shankaracharya Temple.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure from Srinagar', description: 'After hearty Kashmiri breakfast, transfer to Srinagar airport with unforgettable memories.', meals: 'Breakfast included' }
    ],
    inclusions: [
      'Deluxe hotel accommodation (4 Nights) + 1 Night in Premium Houseboat',
      'Daily breakfast and dinner (MAP plan)',
      'All airport transfers and sightseeing in private sanitized vehicle',
      '1 Hour Shikara ride on Dal Lake',
      'Toll taxes, parking, driver allowances, and GST'
    ],
    exclusions: [
      'Airfare / Train tickets to/from Srinagar',
      'Gondola ride tickets and pony rides',
      'Personal expenses, laundry, and tips',
      'Anything not explicitly mentioned in inclusions'
    ],
    accommodation: '3-Star / 4-Star Premium hotels with central heating & Deluxe Dal Lake Houseboat',
    bestTimeToVisit: 'March to October (Summer & Autumn) or Dec to Feb (Snow lovers)',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-goa',
    title: 'Vibrant Goa Beach Vacation & Cruise',
    slug: 'goa-sun-sand-beach-tour',
    destination: 'Goa',
    region: 'Goa',
    category: 'domestic',
    subCategory: 'West India',
    duration: '3 Nights / 4 Days',
    days: 4,
    nights: 3,
    startingPrice: '₹11,999',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 38,
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Sun, sand, sea, and historic Portuguese architecture. Unwind on golden beaches, enjoy thrilling water sports, and experience the famous Mandovi River sunset cruise.',
    highlights: [
      'North Goa famous beaches: Calangute, Baga, and Anjuna',
      'Fort Aguada panoramic Arabian Sea views',
      'South Goa UNESCO heritage churches in Old Goa',
      'Evening Mandovi River cruise with Goan folk music',
      'Water sports options at Miramar beach'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Goa & Beachside Relaxation', description: 'Arrival at Goa airport/railway station. Transfer to resort. Evening free to stroll Calangute beach.', meals: 'Dinner included' },
      { day: 2, title: 'North Goa Sightseeing & Fort Aguada', description: 'Visit historic Fort Aguada, Candolim Beach, Baga Beach, and vibrant Anjuna market.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'South Goa Heritage & Mandovi Sunset Cruise', description: 'Visit Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and enjoy an evening sunset cruise.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Departure from Goa', description: 'Relaxed breakfast at the resort. Transfer to airport or station for journey home.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '3 Nights in 3-star / 4-star beachside resort with swimming pool',
      'Daily breakfast and dinner',
      'All airport/railway transfers in private AC cab',
      'Full day North & South Goa sightseeing tours',
      'Mandovi River cruise entry tickets'
    ],
    exclusions: [
      'Flight/Train fares',
      'Water sports charges',
      'Personal bar and laundry expenses'
    ],
    accommodation: 'Premium beachside resort with swimming pool & modern amenities',
    bestTimeToVisit: 'October to May',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-kerala',
    title: 'God’s Own Country – Munnar & Alleppey Houseboat',
    slug: 'kerala-munnar-alleppey-tour',
    destination: 'Kerala',
    region: 'Kerala',
    category: 'domestic',
    subCategory: 'South India',
    duration: '4 Nights / 5 Days',
    days: 5,
    nights: 4,
    startingPrice: '₹16,800',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 31,
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Lush green tea plantations of Munnar, mist-covered mountains, aromatic spice gardens, and cruising through tranquil palm-fringed backwaters on a private traditional houseboat.',
    highlights: [
      '2 Nights in Munnar tea garden resorts',
      'Cheeyappara and Valara waterfalls visit',
      'Mattupetty Dam and Echo Point boating',
      'Spice plantation tour with authentic herbs',
      '1 Night stay in a private luxury Alleppey Houseboat with all meals'
    ],
    itinerary: [
      { day: 1, title: 'Cochin Arrival & Scenic Drive to Munnar', description: 'Pickup from Cochin Airport. Drive through winding Western Ghats stopping at Cheeyappara and Valara waterfalls. Check-in at Munnar.', meals: 'Dinner included' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam National Park', description: 'Visit Eravikulam National Park (home to Nilgiri Tahr), Tea Museum, Mattupetty Dam, and Kundala Lake.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Munnar to Thekkady (Periyar Wildlife Sanctuary)', description: 'Scenic drive to Thekkady. Visit spice plantations and enjoy a boat safari on Periyar Lake.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat Cruise', description: 'Board your private luxury houseboat in Alleppey by noon. Cruise through canals, paddy fields, and backwaters.', meals: 'Breakfast, Lunch & Dinner on Board' },
      { day: 5, title: 'Alleppey to Cochin Departure', description: 'Disembark after breakfast. Transfer to Cochin airport with beautiful memories of Kerala.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '4 Nights total accommodation (3 Nights resort + 1 Night private AC houseboat)',
      'All meals on houseboat (Authentic Kerala traditional cuisine)',
      'Daily breakfast and dinner at resorts',
      'Private AC vehicle for all transfers and sightseeing',
      'Driver charges, toll, and parking'
    ],
    exclusions: ['Airfare, national park entry fees, boating fees'],
    accommodation: 'Hilltop tea-garden resorts & Luxury backwater houseboat',
    bestTimeToVisit: 'September to April',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-rajasthan',
    title: 'Royal Heritage of Rajasthan – Jaipur, Jodhpur & Udaipur',
    slug: 'rajasthan-royal-heritage-tour',
    destination: 'Rajasthan',
    region: 'Rajasthan',
    category: 'domestic',
    subCategory: 'West India',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: '₹19,500',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 29,
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Step into the land of maharajas. Explore majestic hilltop forts, ornate royal palaces, vibrant bazaars, and romantic sunset boat rides on Lake Pichola in Udaipur.',
    highlights: [
      'Amber Fort elephant / jeep ride in Jaipur',
      'Hawa Mahal and City Palace guided tour',
      'Massive Mehrangarh Fort and Jaswant Thada in Jodhpur',
      'City Palace and Lake Pichola boat cruise in Udaipur',
      'Authentic Rajasthani cultural evening with dinner'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Pink City Jaipur', description: 'Arrival in Jaipur. Check in and visit Birla Temple and Chokhi Dhani ethnic village.', meals: 'Dinner included' },
      { day: 2, title: 'Jaipur Forts & Palaces', description: 'Visit Amber Fort, Jal Mahal, Hawa Mahal, City Palace, and Jantar Mantar observatory.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Jaipur to Sun City Jodhpur', description: 'Drive to Jodhpur. Visit the majestic Mehrangarh Fort overlooking the blue city and Jaswant Thada.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Jodhpur to City of Lakes Udaipur', description: 'Drive to Udaipur visiting the intricately carved Ranakpur Jain Temples en route. Evening at Lake Pichola.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Udaipur City Palace & Saheliyon Ki Bari', description: 'Visit grand Udaipur City Palace, Jagdish Temple, Saheliyon-ki-Bari, and enjoy boat ride.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure from Udaipur', description: 'Breakfast at hotel. Transfer to Udaipur airport or railway station.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '5 Nights accommodation in heritage 3-star / 4-star hotels',
      'Daily breakfast and royal dinner',
      'Private AC Sedan/SUV for entire tour',
      'Sightseeing as per itinerary',
      'Tolls, parking, and driver allowances'
    ],
    exclusions: ['Monument entry tickets, guide fees, airfare'],
    accommodation: 'Heritage style palace hotels with royal Rajasthani hospitality',
    bestTimeToVisit: 'October to March',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-dubai',
    title: 'Dazzling Dubai & Abu Dhabi Experience',
    slug: 'dubai-international-holiday-package',
    destination: 'Dubai',
    region: 'United Arab Emirates',
    category: 'international',
    subCategory: 'Middle East',
    duration: '4 Nights / 5 Days',
    days: 5,
    nights: 4,
    startingPrice: '₹48,999',
    priceNote: 'Starting per person excluding flights (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 45,
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience futuristic luxury in the City of Gold. Stand atop the Burj Khalifa 124th floor, conquer sand dunes in a 4x4 desert safari, cruise the illuminated Dubai Marina, and explore the Grand Mosque.',
    highlights: [
      'Burj Khalifa 124th & 125th floor observation deck entry',
      'Desert Safari with 4x4 dune bashing, BBQ dinner & Tanoura show',
      'Dubai Marina Dhow Cruise with international buffet',
      'Full-day Abu Dhabi tour with Sheikh Zayed Grand Mosque',
      'Dubai Frame and Miracle Garden visits'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Dubai & Marina Dhow Cruise', description: 'Welcome at Dubai International Airport. Transfer to luxury 4-star hotel. Evening luxury Marina Dhow cruise with dinner and skyline views.', meals: 'Dinner on Cruise' },
      { day: 2, title: 'Half Day City Tour & Burj Khalifa At The Top', description: 'Explore Dubai Museum, Jumeirah Mosque, Burj Al Arab photo stop. Evening visit to Dubai Mall and 124th floor of Burj Khalifa with fountain show.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Thrilling Desert Safari with BBQ Dinner', description: 'Morning at leisure for Gold Souk shopping. Afternoon 4x4 Land Cruiser desert safari with dune bashing, camel rides, belly dance show, and BBQ dinner.', meals: 'Breakfast & BBQ Dinner' },
      { day: 4, title: 'Abu Dhabi City Tour & Grand Mosque', description: 'Full day excursion to Abu Dhabi. Visit the breathtaking Sheikh Zayed Grand Mosque, Emirates Palace photo stop, and Ferrari World drive-by.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Departure from Dubai', description: 'Morning shopping at Dubai Mall. Transfer to Dubai airport for your return flight home.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '4 Nights in 4-Star Dubai hotel with breakfast',
      'Desert Safari with dune bashing, BBQ buffet dinner and cultural shows',
      'Marina Dhow Cruise with international buffet dinner',
      'Burj Khalifa At The Top 124th floor ticket',
      'Full Day Abu Dhabi tour with Grand Mosque',
      'All transfers in AC coach with English/Hindi speaking guides'
    ],
    exclusions: ['Airfare, UAE Visa fees, Tourism Dirham fee paid at hotel, personal expenses'],
    accommodation: '4-Star central Dubai hotel (Bur Dubai or Deira) with swimming pool',
    bestTimeToVisit: 'November to April',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-thailand',
    title: 'Amazing Thailand – Bangkok & Pattaya Getaway',
    slug: 'thailand-bangkok-pattaya-tour',
    destination: 'Thailand',
    region: 'Southeast Asia',
    category: 'international',
    subCategory: 'Asia',
    duration: '4 Nights / 5 Days',
    days: 5,
    nights: 4,
    startingPrice: '₹28,500',
    priceNote: 'Starting per person excluding international flights (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 36,
    coverImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Immerse yourself in tropical beaches, speedboats to Coral Island, vibrant Thai street food, ornate Buddhist temples, and world-class shopping in Bangkok.',
    highlights: [
      'Speedboat excursion to Coral Island (Koh Larn) with Indian buffet lunch',
      'Alcazar Cabaret Show VIP seating in Pattaya',
      'Bangkok Temple & City tour: Golden Buddha & Marble Temple',
      'Chao Phraya River Princess luxury dinner cruise',
      'Shopping at Pratunam and MBK Mall Bangkok'
    ],
    itinerary: [
      { day: 1, title: 'Bangkok Airport Arrival & Transfer to Pattaya', description: 'Arrive at Suvarnabhumi Airport. Transfer to Pattaya beach resort. Evening Alcazar Cabaret show.', meals: 'Dinner included' },
      { day: 2, title: 'Speedboat to Coral Island (Koh Larn)', description: 'Speedboat across turquoise waters to Coral Island. Enjoy parasailing and swimming followed by Indian buffet lunch.', meals: 'Breakfast & Lunch' },
      { day: 3, title: 'Pattaya to Bangkok & Temple Tour', description: 'Drive to Bangkok. Visit Wat Traimit (Golden Buddha) and Wat Benchamabophit. Check-in at hotel.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Bangkok Shopping & Chao Phraya Dinner Cruise', description: 'Free day for shopping in Bangkok markets. Evening romantic Chao Phraya dinner cruise with live band.', meals: 'Breakfast & Dinner on Cruise' },
      { day: 5, title: 'Departure from Bangkok', description: 'Breakfast at hotel. Last-minute souvenir shopping. Transfer to airport for flight back home.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '2 Nights in Pattaya 4-Star Resort + 2 Nights in Bangkok 4-Star Hotel',
      'Daily breakfast + 1 Coral Island lunch + 1 Chao Phraya cruise dinner',
      'Speedboat to Coral Island',
      'Alcazar Show ticket with transfers',
      'Bangkok City & Temple tour',
      'All airport and intercity transfers'
    ],
    exclusions: ['Airfare, Visa on arrival fees, water sports fees'],
    accommodation: '4-Star centrally located hotels with breakfast',
    bestTimeToVisit: 'November to April',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-singapore',
    title: 'Singapore & Malaysia Twin Wonders',
    slug: 'singapore-malaysia-twin-tour',
    destination: 'Singapore & Malaysia',
    region: 'Southeast Asia',
    category: 'international',
    subCategory: 'Asia',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: '₹56,500',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 27,
    coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Two magical Southeast Asian countries in one journey. Visit Sentosa Island, Universal Studios Singapore, iconic Marina Bay Sands, Kuala Lumpur Petronas Towers, and Genting Highlands.',
    highlights: [
      'Universal Studios Singapore full day pass with all rides',
      'Sentosa Island cable car, Wings of Time show & S.E.A. Aquarium',
      'Gardens by the Bay Supertree Grove & Cloud Forest Dome',
      'Kuala Lumpur Petronas Twin Towers photo stop & Batu Caves',
      'Genting Highlands cable car ride and indoor theme park'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Singapore & Night Safari', description: 'Arrive at Changi Airport. Transfer to hotel. Evening visit to world-famous Singapore Night Safari with tram ride.', meals: 'Dinner included' },
      { day: 2, title: 'Sentosa Island Discovery', description: 'Take the scenic cable car to Sentosa. Visit S.E.A. Aquarium, Madame Tussauds, and watch the Wings of Time laser spectacle.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Universal Studios Thrills & Marina Bay', description: 'Full day adventure at Universal Studios Singapore. Evening stroll through futuristic Gardens by the Bay.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Singapore to Kuala Lumpur via Coach', description: 'Comfortable AC coach journey to Kuala Lumpur, Malaysia. Check-in and evening visit to KLCC park near Petronas Towers.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Batu Caves & Genting Highlands', description: 'Ascend the rainbow steps of Batu Caves. Cable car ride up to Genting Highlands mountain resort.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure from Kuala Lumpur', description: 'City tour of King\'s Palace, National Monument. Transfer to KLIA airport for your flight home.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '3 Nights in Singapore 3/4-Star Hotel + 2 Nights in Kuala Lumpur 4-Star Hotel',
      'Daily breakfast and Indian dinners',
      'Universal Studios Singapore ticket',
      'Sentosa Island pass with cable car & Wings of Time',
      'Intercity coach transfer from Singapore to KL',
      'All guided sightseeing tours in AC coach'
    ],
    exclusions: ['Airfare, Visa fees for Singapore & Malaysia, personal expenses'],
    accommodation: 'Premium 4-Star hotels located near shopping and metro hubs',
    bestTimeToVisit: 'Year round destination',
    isPopular: true,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-europe',
    title: 'Glimpse of Europe – Swiss Alps & Paris Dream',
    slug: 'europe-switzerland-paris-tour',
    destination: 'Switzerland & France',
    region: 'Europe',
    category: 'international',
    subCategory: 'Europe',
    duration: '6 Nights / 7 Days',
    days: 7,
    nights: 6,
    startingPrice: '₹1,45,000',
    priceNote: 'Starting per person excluding Schengen visa & flights (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 22,
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The quintessential European dream holiday. Ascend Mt. Titlis on the revolving cable car, cruise Lake Lucerne, ride through scenic Swiss valleys, and marvel at the Eiffel Tower and Seine River in Paris.',
    highlights: [
      'Mt. Titlis revolving cable car (Rotair) & Glacier Cave',
      'Lucerne city tour: Chapel Bridge & Lion Monument',
      'Paris Eiffel Tower 2nd level entry',
      'Scenic Seine River cruise through the heart of Paris',
      'Louvre Museum photo stop and Champs-Élysées drive'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Zurich / Lucerne, Switzerland', description: 'Arrive at Zurich Airport. Board scenic coach to Lucerne. Relax by Lake Lucerne with mountain views.', meals: 'Dinner included' },
      { day: 2, title: 'Mt. Titlis Snow Peak & Ice Flyer', description: 'Ascend Mt. Titlis on the world\'s first revolving cable car. Walk the cliff walk and explore the glacier cave.', meals: 'Breakfast & Indian Dinner' },
      { day: 3, title: 'Interlaken & Jungfraujoch Optional Excursion', description: 'Visit the picturesque resort town of Interlaken situated between two Alpine lakes with views of Jungfrau.', meals: 'Breakfast & Indian Dinner' },
      { day: 4, title: 'Lucerne to Paris via High-Speed TGV Train', description: 'Board the ultra-smooth TGV train to Paris. Check-in and enjoy evening illuminated city drive.', meals: 'Breakfast & Indian Dinner' },
      { day: 5, title: 'Eiffel Tower Level 2 & Seine River Cruise', description: 'Ascend Eiffel Tower 2nd floor for spectacular panoramic views of Paris. Relax on a romantic Seine River boat cruise.', meals: 'Breakfast & Indian Dinner' },
      { day: 6, title: 'Paris City Tour & Louvre Exterior', description: 'Panoramic tour of Arc de Triomphe, Champs-Élysées, Place de la Concorde, and shopping at Galeries Lafayette.', meals: 'Breakfast & Indian Dinner' },
      { day: 7, title: 'Departure from Paris', description: 'Transfer to Paris Charles de Gaulle Airport for your flight back home.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '3 Nights in Switzerland 4-Star Hotel + 3 Nights in Paris 4-Star Hotel',
      'Daily continental breakfast + Daily hot Indian dinners',
      'High-speed TGV train ticket Switzerland to Paris',
      'Mt. Titlis cable car excursion tickets',
      'Eiffel Tower 2nd floor tickets & Seine Cruise',
      'Private AC luxury coach for transfers and excursions'
    ],
    exclusions: ['International flights, Schengen Visa, travel insurance'],
    accommodation: '4-Star hotels with close proximity to city attractions',
    bestTimeToVisit: 'April to October',
    isPopular: false,
    isFeatured: true,
    isIllustrative: true
  },
  {
    id: 'pkg-himachal',
    title: 'Himachal Splendour – Shimla, Kullu & Manali',
    slug: 'himachal-shimla-manali-tour',
    destination: 'Himachal Pradesh',
    region: 'Himachal Pradesh',
    category: 'domestic',
    subCategory: 'North India',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: '₹14,500',
    priceNote: 'Starting per person on twin sharing (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 34,
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579618218290-24a26f63a708?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Breathe the pure Himalayan air. Walk the Mall Road in Queen of Hills Shimla, witness apple orchards in Kullu, and experience snow activities in Solang Valley & Atal Tunnel.',
    highlights: [
      'Shimla Mall Road, Ridge & Kufri green valley',
      'Scenic Beas River valley and Kullu Shawl factory visit',
      'Solang Valley adventure sports and Atal Tunnel drive',
      'Hadimba Temple and Vashisht Hot Springs in Manali',
      'Tibetan Monastery and Old Manali cafes'
    ],
    itinerary: [
      { day: 1, title: 'Chandigarh / Delhi Pickup to Shimla', description: 'Warm pickup and drive through scenic Shivalik hills to Shimla. Evening stroll on the famous Ridge.', meals: 'Dinner included' },
      { day: 2, title: 'Kufri & Shimla Local Sightseeing', description: 'Visit Kufri winter sports hub, Himalayan nature park, followed by Jakhoo Temple and Mall Road.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', description: 'Spectacular mountain drive along River Beas. Visit Kullu shawl factory and Vaishno Devi temple. Arrive Manali.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Solang Valley & Atal Tunnel Adventure', description: 'Day excursion to Solang Valley for paragliding, zorbing, and drive through the engineering marvel Atal Tunnel.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Manali Local Sightseeing', description: 'Visit 450-year-old wooden Hadimba Devi Temple, Vashisht sulphur hot springs, and Van Vihar pine forest.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Manali to Chandigarh / Delhi Departure', description: 'Scenic drive back to Chandigarh or Delhi for your departure journey.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '5 Nights hotel stay with breakfast and dinner',
      'Private AC Cab for entire journey (AC off on hill roads)',
      'All sightseeing and excursion permits',
      'Driver allowance, toll taxes, and parking'
    ],
    exclusions: ['Personal adventure sports charges, heater charges, air/train fares'],
    accommodation: 'Himalayan view resort with private balconies',
    bestTimeToVisit: 'March to June (Summer) or Dec to Feb (Snowfall)',
    isPopular: false,
    isFeatured: false,
    isIllustrative: true
  },
  {
    id: 'pkg-bali',
    title: 'Tropical Bali Island & Nusa Penida Paradise',
    slug: 'tropical-bali-nusa-penida-tour',
    destination: 'Bali',
    region: 'Indonesia',
    category: 'international',
    subCategory: 'Asia',
    duration: '5 Nights / 6 Days',
    days: 6,
    nights: 5,
    startingPrice: '₹34,999',
    priceNote: 'Starting per person excluding flights (Sample indicative price)',
    rating: 5.0,
    reviewsCount: 25,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Pristine beaches, emerald rice terraces, cliffside ocean temples, thrilling Bali jungle swings, and turquoise waters of Nusa Penida Island.',
    highlights: [
      'Private day tour to West Nusa Penida (Kelingking T-Rex Beach & Angel Billabong)',
      'Ubud Monkey Forest & famous Tegalalang Rice Terrace',
      'Bali Jungle Swing overlooking rainforest valleys',
      'Tanah Lot & Uluwatu cliff sunset temple tours',
      'Romantic Jimbaran beach candle-light dinner'
    ],
    itinerary: [
      { day: 1, title: 'Arrival at Denpasar Bali & Kuta Relaxation', description: 'Traditional flower garland welcome at Bali airport. Transfer to resort. Evening leisure at Kuta / Seminyak beach.', meals: 'Dinner included' },
      { day: 2, title: 'Ubud Cultural Heart & Jungle Swing', description: 'Visit Tegenungan Waterfall, Ubud sacred monkey forest, Tegalalang rice fields, and famous Bali swing.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Kintamani Volcano & Coffee Plantation', description: 'Scenic views of Mount Batur active volcano, coffee tasting at traditional luwak farm, and Tirta Empul temple.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Nusa Penida Island Excursion by Speedboat', description: 'Early morning speedboat to Nusa Penida. Visit Kelingking Beach, Broken Beach, and Angel’s Billabong natural infinity pool.', meals: 'Breakfast & Lunch' },
      { day: 5, title: 'Tanah Lot & Uluwatu Sunset Temple Tour', description: 'Visit iconic Tanah Lot sea temple and Uluwatu cliff temple followed by Jimbaran Bay beach dinner.', meals: 'Breakfast & Jimbaran Dinner' },
      { day: 6, title: 'Departure from Bali', description: 'Enjoy resort breakfast and last-minute Indonesian handicraft shopping before airport drop.', meals: 'Breakfast included' }
    ],
    inclusions: [
      '5 Nights in 4-Star Resort with private pool option',
      'Daily breakfast + 4 dinners + 1 island lunch',
      'Speedboat transfers to Nusa Penida with island tour',
      'Bali swing ticket and all temple entry tickets',
      'Private AC car with English-speaking driver guide'
    ],
    exclusions: ['Airfare, Indonesia tourist levy, personal expenses'],
    accommodation: '4-Star Bali tropical resort with swimming pool',
    bestTimeToVisit: 'April to October',
    isPopular: false,
    isFeatured: true,
    isIllustrative: true
  }
];

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'car-hatchback',
    name: 'Maruti Suzuki Swift / WagonR',
    category: 'Hatchback',
    seatingCapacity: '4 Passengers + 1 Driver',
    luggageCapacity: '2 Medium Bags',
    acType: 'AC',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    ratePerKm: '₹11 / km',
    localPackageRate: '₹1,800 (8 Hrs / 80 Km)',
    outstationMinKm: '250 Km / day',
    features: ['Chilled Air Conditioning', 'Music System with Bluetooth', 'Clean & Sanitized Interiors', 'Comfortable City Driving'],
    idealFor: 'Local Dakor travel, Dakor Temple Darshan, Railway station drops & budget short trips',
    isAvailable: true
  },
  {
    id: 'car-sedan',
    name: 'Maruti Swift Dzire / Honda Amaze',
    category: 'Sedan',
    seatingCapacity: '4 Passengers + 1 Driver',
    luggageCapacity: '3 Large Bags + Boot Space',
    acType: 'AC',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    ratePerKm: '₹13 / km',
    localPackageRate: '₹2,200 (8 Hrs / 80 Km)',
    outstationMinKm: '250 Km / day',
    features: ['Dual AC Vents', 'Ample Boot Luggage Space', 'Smooth Highway Ride', 'Mobile Charger & Clean Seat Covers'],
    idealFor: 'Ahmedabad (AMD) & Vadodara (BDQ) Airport pickup/drop, business travel & family outstation journeys',
    isAvailable: true
  },
  {
    id: 'car-ertiga',
    name: 'Maruti Ertiga / XL6',
    category: 'SUV',
    seatingCapacity: '6 Passengers + 1 Driver',
    luggageCapacity: '3 Medium Bags + Roof Carrier',
    acType: 'AC',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    ratePerKm: '₹16 / km',
    localPackageRate: '₹2,800 (8 Hrs / 80 Km)',
    outstationMinKm: '300 Km / day',
    features: ['Roof-mounted AC for all rows', 'Flexible 3rd-row folding seats', 'Luggage Carrier Available', 'Spacious Legroom'],
    idealFor: 'Medium families, Gujarat temple circuits (Somnath, Dwarka, Statue of Unity) & group outstations',
    isAvailable: true
  },
  {
    id: 'car-innova',
    name: 'Toyota Innova Crysta',
    category: 'Luxury',
    seatingCapacity: '7 Passengers + 1 Driver',
    luggageCapacity: '4-5 Large Bags',
    acType: 'AC',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    ratePerKm: '₹20 / km',
    localPackageRate: '₹3,800 (8 Hrs / 80 Km)',
    outstationMinKm: '300 Km / day',
    features: ['Captain Seat Comfort', 'Dual Zone Climate Control', 'Superior Suspension & Safety', 'Premium Leather Upholstery'],
    idealFor: 'VIP travel, wedding parties, executive airport transfers & long-distance luxury road trips',
    isAvailable: true
  },
  {
    id: 'car-tempo',
    name: 'Force Tempo Traveller (Executive 12/17/20 Seater)',
    category: 'Tempo Traveller',
    seatingCapacity: '12 to 20 Passengers + Driver',
    luggageCapacity: 'Dedicated Rear Luggage Box & Carrier',
    acType: 'Both Available',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    ratePerKm: '₹26 - ₹32 / km',
    localPackageRate: '₹5,500 (8 Hrs / 80 Km)',
    outstationMinKm: '300 Km / day',
    features: ['Pushback Reclining Seats', 'High Roof & Walk-through Aisle', 'LED TV & Audio Sound System', 'Individual AC Vents & Reading Lights'],
    idealFor: 'Large pilgrimage groups, Dakor Krishna Darshan yatras, corporate outings & wedding guest transit',
    isAvailable: true
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Patel Hirenkumar',
    location: 'Dakor, Gujarat',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Best travel agency in Dakor! We booked our family trip to Kashmir with Alex Tours and Travels. From hotel bookings in Srinagar to houseboat and cab driver, everything was exceptionally well managed. Truly 5 star service.',
    tourTaken: 'Kashmir Family Tour',
    source: 'Google Review'
  },
  {
    id: 'rev-2',
    author: 'Bhavin Shah',
    location: 'Nadiad / Anand',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Booked Innova Crysta for our family trip from Dakor to Statue of Unity and Somnath. The car was spotlessly clean, and the driver was very courteous, punctual, and drove very safely. Highly recommended for car rentals.',
    tourTaken: 'Gujarat Temple Tour & Car Rental',
    source: 'Google Review'
  },
  {
    id: 'rev-3',
    author: 'Pooja & Jignesh Sharma',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'We planned our international honeymoon package to Dubai through Alex Tours and Travels. They arranged visa, 4-star hotel, desert safari, and Burj Khalifa tickets at very honest rates. Very transparent and dependable!',
    tourTaken: 'Dubai International Tour',
    source: 'Google Review'
  },
  {
    id: 'rev-4',
    author: 'Maheshbhai Solanki',
    location: 'Dakor',
    rating: 5,
    date: 'Recent Google Review',
    comment: 'Always our first choice for airport drop to Ahmedabad or Vadodara. Whenever relatives come for Dakor Ranchodray Mandir darshan, Alex Tours provides the best cars and friendly service. 100% reliable.',
    tourTaken: 'Airport Transfer & Car Rental',
    source: 'Google Review'
  }
];

export const INITIAL_ENQUIRIES: CustomerEnquiry[] = [
  {
    id: 'enq-101',
    fullName: 'Ramesh Patel',
    phone: '+91 98250 12345',
    email: 'ramesh.patel@gmail.com',
    destination: 'Kashmir',
    travelDate: '2026-12-15',
    numberOfTravellers: '4 Adults',
    serviceRequired: 'Family Trip',
    additionalRequirements: 'Looking for 5 nights tour with 1 night houseboat stay in Dal lake.',
    status: 'New',
    createdAt: '2026-11-17T11:20:00Z',
    packageName: 'Jewels of Kashmir – Srinagar, Gulmarg & Pahalgam'
  },
  {
    id: 'enq-102',
    fullName: 'Aniket Desai',
    phone: '+91 94270 98765',
    destination: 'Ahmedabad Airport Drop',
    travelDate: '2026-11-25',
    numberOfTravellers: '3 Passengers',
    serviceRequired: 'Car Rental',
    additionalRequirements: 'Need Sedan (Dzire) early morning 4:30 AM pickup from Dakor Station Road.',
    status: 'Contacted',
    createdAt: '2026-11-16T14:45:00Z',
    vehicleName: 'Maruti Swift Dzire / Honda Amaze'
  }
];
