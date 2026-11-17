import React, { useState } from 'react';
import { 
  Compass, 
  MessageCircle, 
  Phone, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Car, 
  Heart, 
  Globe2, 
  ShieldCheck, 
  Headphones, 
  Smile, 
  Clock, 
  CheckCircle2, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { TourPackage } from '../types';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab }) => {
  const { 
    packages, 
    businessConfig, 
    openEnquiryModal, 
    openPackageDetail, 
    buildWhatsAppUrl,
    testimonials 
  } = useTravel();

  // Floating enquiry card state
  const [heroDestination, setHeroDestination] = useState('');
  const [heroDate, setHeroDate] = useState('');
  const [heroTravellers, setHeroTravellers] = useState('2 Travellers');
  const [heroType, setHeroType] = useState('Domestic Tour');

  // Package filter tab on homepage
  const [packageFilter, setPackageFilter] = useState<'all' | 'domestic' | 'international'>('all');

  const filteredPackages = packages.filter((pkg) => {
    if (packageFilter === 'all') return true;
    return pkg.category === packageFilter;
  });

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEnquiryModal({
      destination: heroDestination || 'Featured Tour',
      serviceRequired: heroType.includes('International') ? 'International Tour' : 'Tour Package',
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ========================================================= */}
      {/* SECTION B: HERO SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#071B33] overflow-hidden pt-8 pb-16 sm:pb-24">
        {/* Background Image with Dark Midnight Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
            alt="Scenic Travel Destination"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse duration-10000"
          />
          {/* Gradients to enforce Midnight Navy #071B33 aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B33]/95 via-[#071B33]/85 to-[#071B33]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-transparent to-[#071B33]/70"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-white">
                <span className="flex text-[#FFC94A]">★★★★★</span>
                <span className="font-semibold text-[#FFC94A]">5.0 Rated</span>
                <span className="text-slate-300">• {businessConfig.googleReviewCount} Google Reviews in Dakor</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.15]">
                Your Journey <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E8] via-[#1677B8] to-[#FF8A32]">
                  Begins With Us.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover incredible destinations, unforgettable experiences, and comfortable journeys with Alex Tours and Travels.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('popular-packages');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-[#FF8A32]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Tour Packages</span>
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#0878C9] hover:bg-[#076bb3] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#0878C9]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 border border-white/10"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#0878C9]" />
                  <span>Plan Your Trip on WhatsApp</span>
                </a>
              </div>

              {/* Quick Contact & Verified Info */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00B8E8] mr-1.5" />
                  <span>Call: <strong className="text-white">{businessConfig.phoneFormatted}</strong></span>
                </a>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#FF8A32] mr-1.5" />
                  <span>Dakor, Gujarat</span>
                </span>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="text-emerald-400 font-medium">
                  ● Verified Travel Partner
                </span>
              </div>
            </div>

            {/* Right Column: Floating Travel Enquiry Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40 text-slate-800">
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-2.5 py-1 rounded-full">
                    Quick Trip Planner
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#071B33] mt-2">
                    Where Would You Like To Go?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Get custom itineraries & best quotation in minutes.
                  </p>
                </div>

                <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center">
                      <MapPin className="w-3.5 h-3.5 text-[#0878C9] mr-1" />
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kashmir, Goa, Dubai, Kerala..."
                      value={heroDestination}
                      onChange={(e) => setHeroDestination(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center">
                      <Calendar className="w-3.5 h-3.5 text-[#0878C9] mr-1" />
                      Travel Date / Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next month, Dec 2026, or Diwali"
                      value={heroDate}
                      onChange={(e) => setHeroDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Number of Travellers & Travel Type in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center">
                        <Users className="w-3.5 h-3.5 text-[#0878C9] mr-1" />
                        Travellers
                      </label>
                      <select
                        value={heroTravellers}
                        onChange={(e) => setHeroTravellers(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                      >
                        <option value="1 Traveller">1 Person (Solo)</option>
                        <option value="2 Travellers">2 Travellers (Couple)</option>
                        <option value="3-5 Travellers">3-5 Travellers (Family)</option>
                        <option value="6+ Travellers">6+ Travellers (Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center">
                        <Compass className="w-3.5 h-3.5 text-[#0878C9] mr-1" />
                        Travel Type
                      </label>
                      <select
                        value={heroType}
                        onChange={(e) => setHeroType(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                      >
                        <option value="Domestic Tour">Domestic India Tour</option>
                        <option value="International Tour">International Holiday</option>
                        <option value="Family Trip">Family Vacation</option>
                        <option value="Honeymoon Package">Honeymoon Trip</option>
                        <option value="Car Rental">Car Rental / Taxi</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Enquiry Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#FF8A32]/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Submit Enquiry & Get Quote</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-500 pt-1">
                    Free Consultation • Direct WhatsApp & Phone Assistance
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION C: TRUST SECTION (4 Attractive Verified Stats)    */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            
            {/* Stat 1: 5.0 Google Rating */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FFC94A] flex items-center justify-center mb-3">
                <Star className="w-7 h-7 fill-[#FFC94A]" />
              </div>
              <span className="text-3xl sm:text-4xl font-black font-serif text-[#071B33]">5.0 / 5.0</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Google Rating</span>
              <span className="text-[11px] text-slate-500">Perfect 5-Star Customer Trust</span>
            </div>

            {/* Stat 2: 198 Google Reviews */}
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0878C9] flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-3xl sm:text-4xl font-black font-serif text-[#071B33]">198</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Google Reviews</span>
              <span className="text-[11px] text-slate-500">100% Verified Travellers</span>
            </div>

            {/* Stat 3: Personalized Travel Planning */}
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF8A32] flex items-center justify-center mb-3">
                <Heart className="w-7 h-7" />
              </div>
              <span className="text-2xl sm:text-3xl font-black font-serif text-[#071B33] text-center">Personalized</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Travel Planning</span>
              <span className="text-[11px] text-slate-500">Tailored Itineraries for Families & Couples</span>
            </div>

            {/* Stat 4: Domestic & International Travel */}
            <div className="flex flex-col items-center text-center p-2 pt-6 sm:pt-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00B8E8] flex items-center justify-center mb-3">
                <Globe2 className="w-7 h-7" />
              </div>
              <span className="text-2xl sm:text-3xl font-black font-serif text-[#071B33]">Domestic & Global</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Travel Coverage</span>
              <span className="text-[11px] text-slate-500">India, Asia, Middle East & Europe</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION D: POPULAR TOUR PACKAGES                          */}
      {/* ========================================================= */}
      <section id="popular-packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
              Handcrafted Vacations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#071B33] mt-2">
              Popular Tour Packages
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Carefully curated sample itineraries designed for maximum comfort, scenic beauty, and authentic experiences.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setPackageFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                packageFilter === 'all'
                  ? 'bg-white text-[#071B33] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setPackageFilter('domestic')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                packageFilter === 'domestic'
                  ? 'bg-white text-[#071B33] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Domestic Tours (India)
            </button>
            <button
              onClick={() => setPackageFilter('international')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                packageFilter === 'international'
                  ? 'bg-white text-[#071B33] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              International Tours
            </button>
          </div>
        </div>

        {/* Tour Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredPackages.map((pkg: TourPackage) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={pkg.coverImage}
                  alt={pkg.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                  <span className="bg-[#071B33]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {pkg.subCategory}
                  </span>
                  {pkg.isIllustrative && (
                    <span className="bg-[#FF8A32]/95 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full shadow">
                      Sample
                    </span>
                  )}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-[#071B33]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#00B8E8]" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 px-2 py-0.5 rounded-lg text-[11px] font-bold flex items-center space-x-1 shadow">
                  <Star className="w-3 h-3 fill-[#FFC94A] text-[#FFC94A]" />
                  <span>{pkg.rating}.0</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs text-[#0878C9] font-semibold uppercase tracking-wider mb-1">
                    {pkg.destination}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-[#071B33] leading-snug line-clamp-1 group-hover:text-[#0878C9] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                {/* Starting Price Placeholder */}
                <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Starting From:</span>
                    <span className="text-lg font-bold text-[#0878C9] font-serif">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1">/ person</span>
                  </div>
                  <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    Illustrative
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => openPackageDetail(pkg)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-[#071B33] bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() =>
                      openEnquiryModal({
                        destination: pkg.destination,
                        packageName: pkg.title,
                        serviceRequired: pkg.category === 'international' ? 'International Tour' : 'Tour Package',
                      })
                    }
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#FF8A32] hover:bg-[#e87620] shadow-sm shadow-[#FF8A32]/20 transition-all text-center"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              setCurrentTab('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-[#071B33] hover:border-[#0878C9] hover:text-[#0878C9] shadow-sm transition-all"
          >
            <span>Explore All Domestic & International Packages</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION E: OUR SERVICES                                    */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-b from-white to-[#F4F7FB] py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#071B33] mt-2">
              Our Premium Services
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From local taxi travel in Dakor to worldwide holidays, we take care of all your travel arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1: Car Rental */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center mb-6 group-hover:bg-[#0878C9] group-hover:text-white transition-all">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#071B33] mb-2">
                1. Car Rental
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Comfortable vehicles for local travel, airport transfers (Ahmedabad AMD & Vadodara BDQ), Dakor temple darshan, and outstation journeys. Hatchbacks, Sedans, Ertiga, Innova Crysta, and Tempo Travellers.
              </p>
              <button
                onClick={() => {
                  setCurrentTab('cars');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#0878C9] flex items-center group-hover:underline"
              >
                <span>View Fleet & Book Taxi</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Service 2: Family Tour Packages */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#FF8A32]/10 text-[#FF8A32] flex items-center justify-center mb-6 group-hover:bg-[#FF8A32] group-hover:text-white transition-all">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#071B33] mb-2">
                2. Family Tour Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Memorable holidays with comfortable accommodation, private vehicles, delicious meals, and personalized planning suited for multi-generational families and seniors.
              </p>
              <button
                onClick={() => openEnquiryModal({ serviceRequired: 'Family Trip', destination: 'Family Vacation' })}
                className="text-xs font-bold text-[#FF8A32] flex items-center group-hover:underline"
              >
                <span>Plan Family Vacation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Service 3: Honeymoon Packages */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#071B33] mb-2">
                3. Honeymoon Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Romantic travel experiences for couples. Candlelight dinners, luxury stays in Kashmir houseboats, Goa beachside villas, Kerala backwaters, or exotic Bali and Maldives resorts.
              </p>
              <button
                onClick={() => openEnquiryModal({ serviceRequired: 'Honeymoon Package', destination: 'Romantic Honeymoon' })}
                className="text-xs font-bold text-rose-600 flex items-center group-hover:underline"
              >
                <span>Book Romantic Escape</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Service 4: Domestic Tour Packages */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#00B8E8]/10 text-[#00B8E8] flex items-center justify-center mb-6 group-hover:bg-[#00B8E8] group-hover:text-white transition-all">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#071B33] mb-2">
                4. Domestic Tour Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Explore India’s beautiful destinations. From snowy Himalayan peaks in Kashmir and Himachal, to royal Rajasthan palaces, serene Kerala backwaters, and pristine Goa beaches.
              </p>
              <button
                onClick={() => {
                  setCurrentTab('domestic');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#00B8E8] flex items-center group-hover:underline"
              >
                <span>Discover India Tours</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Service 5: International Tour Packages */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden lg:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-[#071B33]/10 text-[#071B33] flex items-center justify-center mb-6 group-hover:bg-[#071B33] group-hover:text-white transition-all">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#071B33] mb-2">
                5. International Tour Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Discover destinations around the world. Hassle-free international holidays covering Dubai, Thailand, Singapore, Malaysia, Bali, Europe, and beyond. Complete support with visas, flights, 4-star hotels, transfers, and guided sightseeing.
              </p>
              <button
                onClick={() => {
                  setCurrentTab('international');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#0878C9] flex items-center group-hover:underline"
              >
                <span>Explore International Packages</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION F: WHY CHOOSE US?                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left visual column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                alt="Travellers exploring"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B33]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 text-[#FFC94A] text-xs font-bold mb-1">
                  <span>★ ★ ★ ★ ★</span>
                  <span>5.0 Star Agency</span>
                </div>
                <h4 className="text-xl font-bold font-serif">Alex Tours & Travels</h4>
                <p className="text-xs text-slate-200 mt-1">Dakor, Gujarat • Trusted by 1000+ Happy Families</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hidden sm:flex items-center space-x-3 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">100% Reliable Service</span>
                <span className="text-[11px] text-slate-500">Punctual cars & verified hotels</span>
              </div>
            </div>
          </div>

          {/* Right features column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
                The Alex Tours Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#071B33] mt-2">
                Why Choose Alex Tours & Travels?
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                We believe travel is not just about visiting places—it is about creating cherished memories with peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Feature 1 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Personalized Travel Planning</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every package is customized to match your budget, pace, dietary preferences, and travel dreams.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <Headphones className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Reliable Customer Assistance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated local support in Dakor and continuous phone/WhatsApp assistance throughout your journey.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Comfortable Travel Arrangements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean, well-maintained AC vehicles, experienced chauffeurs, and handpicked partner hotels.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Domestic & International Options</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wide range of destinations from Gujarat spiritual circuits to snow peaks of Kashmir and global marvels.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <Smile className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Family-Friendly Tour Planning</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thoughtful pacing, pure veg / Jain food arrangements upon request, and child-safe itineraries.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#071B33]">Convenient Booking Enquiries</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quick WhatsApp enquiry dispatch, transparent pricing, and zero hidden charges.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION G: CUSTOMER REVIEWS (Google Reviews Link)         */}
      {/* ========================================================= */}
      <section className="bg-[#071B33] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0878C9]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-xs text-[#FFC94A] font-semibold mb-3">
              <span>★ ★ ★ ★ ★</span>
              <span>100% Verified Google Feedback</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Rated 5.0/5 on Google – 198 Reviews
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Read what travellers say about their domestic family holidays, international tours, and car rentals booked through Alex Tours and Travels in Dakor.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all hover:border-[#00B8E8]/40"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#FFC94A] text-xs">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFC94A]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/20 px-2 py-0.5 rounded">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4">
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-0.5">
                    <span>{t.location}</span>
                    <span className="text-[#00B8E8]">{t.tourTaken}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Google Review Link Button */}
          <div className="mt-12 text-center">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-[#071B33] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>View All 198 Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#0878C9]" />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION H: CALL-TO-ACTION                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071B33] via-[#0878C9] to-[#071B33] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
          
          {/* Subtle decoration circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC94A] bg-white/10 px-3 py-1 rounded-full">
              Let's Make It Happen
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-3 text-white">
              Ready to Explore the World?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed max-w-2xl">
              Tell us your dream destination. We'll help you plan your next memorable journey with honest advice, comfortable arrangements, and best available pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <a
                href={`tel:${businessConfig.phone}`}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#071B33] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#0878C9]" />
                <span>Call Now: {businessConfig.phoneFormatted}</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => openEnquiryModal()}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#FF8A32]/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4" />
                <span>Plan Your Trip Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
