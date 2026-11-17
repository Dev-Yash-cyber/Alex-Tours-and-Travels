import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  MapPin, 
  ArrowUpDown, 
  Sparkles, 
  MessageCircle, 
  X,
  Compass
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { TourPackage } from '../types';

export const PackagesPage: React.FC = () => {
  const { packages, openPackageDetail, openEnquiryModal, buildWhatsAppUrl } = useTravel();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [durationFilter, setDurationFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  // Extract unique regions for filter
  const regions = useMemo(() => {
    const list = Array.from(new Set(packages.map(p => p.subCategory)));
    return list;
  }, [packages]);

  // Filtered & Sorted Packages
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Search
      const matchesSearch = 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.region.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category
      const matchesCategory = categoryFilter === 'all' || pkg.category === categoryFilter;

      // SubCategory / Region
      const matchesRegion = regionFilter === 'all' || pkg.subCategory === regionFilter;

      // Duration
      let matchesDuration = true;
      if (durationFilter === 'short') matchesDuration = pkg.days <= 4;
      if (durationFilter === 'medium') matchesDuration = pkg.days >= 5 && pkg.days <= 6;
      if (durationFilter === 'long') matchesDuration = pkg.days >= 7;

      return matchesSearch && matchesCategory && matchesRegion && matchesDuration;
    }).sort((a, b) => {
      if (sortBy === 'popular') return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      const parsePrice = (p: string) => {
        const num = parseInt(p.replace(/[^0-9]/g, '')) || 0;
        return num;
      };
      if (sortBy === 'price-asc') return parsePrice(a.startingPrice) - parsePrice(b.startingPrice);
      if (sortBy === 'price-desc') return parsePrice(b.startingPrice) - parsePrice(a.startingPrice);
      return 0;
    });
  }, [packages, searchQuery, categoryFilter, regionFilter, durationFilter, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setRegionFilter('all');
    setDurationFilter('all');
    setSortBy('popular');
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#071B33] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFC94A] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            Handcrafted Itineraries
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-3 text-white">
            Explore All Tour Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Find the perfect holiday package for couples, families, and adventure seekers. All packages can be customized with your choice of hotels, private vehicles, and dates.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search destination (e.g. Kashmir, Dubai, Goa, Thailand)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              >
                <option value="all">All Packages (Domestic & Global)</option>
                <option value="domestic">Domestic Tours (India)</option>
                <option value="international">International Tours</option>
              </select>
            </div>

            {/* Region Filter */}
            <div className="md:col-span-2">
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              >
                <option value="all">All Regions</option>
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 font-semibold flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#0878C9]" /> Duration:
              </span>
              <button
                onClick={() => setDurationFilter('all')}
                className={`px-2.5 py-1 rounded-lg border ${
                  durationFilter === 'all'
                    ? 'bg-[#0878C9] text-white border-[#0878C9]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Any
              </button>
              <button
                onClick={() => setDurationFilter('short')}
                className={`px-2.5 py-1 rounded-lg border ${
                  durationFilter === 'short'
                    ? 'bg-[#0878C9] text-white border-[#0878C9]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Short (3-4 Days)
              </button>
              <button
                onClick={() => setDurationFilter('medium')}
                className={`px-2.5 py-1 rounded-lg border ${
                  durationFilter === 'medium'
                    ? 'bg-[#0878C9] text-white border-[#0878C9]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Standard (5-6 Days)
              </button>
              <button
                onClick={() => setDurationFilter('long')}
                className={`px-2.5 py-1 rounded-lg border ${
                  durationFilter === 'long'
                    ? 'bg-[#0878C9] text-white border-[#0878C9]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Extended (7+ Days)
              </button>
            </div>

            <div className="flex items-center space-x-3 text-slate-500">
              <span>Showing <strong>{filteredPackages.length}</strong> of {packages.length} packages</span>
              {(searchQuery || categoryFilter !== 'all' || regionFilter !== 'all' || durationFilter !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="text-red-500 hover:underline font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredPackages.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-[#071B33]">No Packages Found</h3>
            <p className="text-xs text-slate-600">
              We couldn't find any packages matching your filter criteria. Let us know your preferred destination and we will customize a special itinerary for you!
            </p>
            <div className="pt-2">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 bg-[#0878C9] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.coverImage}
                    alt={pkg.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
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

                  <div className="absolute bottom-3 left-3 bg-[#071B33]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#00B8E8]" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 px-2 py-0.5 rounded-lg text-[11px] font-bold flex items-center space-x-1 shadow">
                    <Star className="w-3 h-3 fill-[#FFC94A] text-[#FFC94A]" />
                    <span>{pkg.rating}.0</span>
                  </div>
                </div>

                {/* Content */}
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

                  {/* Highlights snippet */}
                  <div className="space-y-1 py-1">
                    {pkg.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="text-[11px] text-slate-500 flex items-center space-x-1 truncate">
                        <span className="text-[#00B8E8] font-bold">✓</span>
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
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

                  {/* Actions */}
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
        )}

      </div>
    </div>
  );
};
