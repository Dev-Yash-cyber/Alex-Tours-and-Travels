export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  region: string;
  category: 'domestic' | 'international';
  subCategory: 'North India' | 'South India' | 'West India' | 'East India' | 'Northeast India' | 'Asia' | 'Middle East' | 'Europe' | 'Africa' | 'Australia';
  duration: string;
  days: number;
  nights: number;
  startingPrice: string;
  priceNote?: string;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  bestTimeToVisit: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  isIllustrative?: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | 'Tempo Traveller';
  seatingCapacity: string;
  luggageCapacity: string;
  acType: 'AC' | 'Non-AC' | 'Both Available';
  image: string;
  ratePerKm: string;
  localPackageRate: string;
  outstationMinKm: string;
  features: string[];
  idealFor: string;
  isAvailable: boolean;
}

export interface CustomerEnquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  destination: string;
  travelDate: string;
  numberOfTravellers: string;
  serviceRequired: 'Tour Package' | 'Car Rental' | 'Family Trip' | 'Honeymoon Package' | 'International Tour' | 'Other';
  additionalRequirements?: string;
  status: 'New' | 'Contacted' | 'Booked' | 'Archived';
  createdAt: string;
  packageName?: string;
  vehicleName?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tourTaken: string;
  source: 'Google Review' | 'Direct Customer';
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  googleRating: number;
  googleReviewCount: number;
  businessHours: string;
  googleMapsUrl: string;
  embedMapUrl: string;
}
