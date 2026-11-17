import React, { useState } from 'react';
import { Globe, Clock, Star, ArrowRight, ShieldCheck, Check, Plane, MessageCircle, HelpCircle } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

export const InternationalPage: React.FC = () => {
  const { packages, openPackageDetail, openEnquiryModal, buildWhatsAppUrl } = useTravel();
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const internationalPackages = packages.filter((p) => p.category === 'international');

  const categories = [
    { id: 'all', label: 'All International Tours' },
    { id: 'Asia', label: 'Asia' },
    { id: 'Middle East', label: 'Middle East (Dubai)' },
    { id: 'Europe', label: 'Europe' },
    { id: 'Africa', label: 'Africa / Islands' },
    { id: 'Australia', label: 'Australia' }
  ];

  const filtered = internationalPackages.filter((p) => {
    if (selectedSubCategory === 'all') return true;
    return p.subCategory === selectedSubCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#071B33] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00B8E8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            Worldwide Holidays
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-3 text-white">
            International Tour Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Discover the world's most glamorous cities, exotic islands, and cultural icons. Complete international packages with visa support, flights, 4-star hotels, and authentic Indian dining options.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedSubCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedSubCategory === cat.id
                  ? 'bg-[#0878C9] text-white shadow-md shadow-[#0878C9]/25'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* International Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
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
                  <span className="bg-[#FF8A32]/95 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full shadow">
                    Sample
                  </span>
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
                        serviceRequired: 'International Tour',
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

        {/* International Travel Services Featurettes */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
              Hassle-Free Global Travel
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#071B33] mt-2">
              Complete International Travel Assistance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-slate-200/60 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center font-bold">
                <Plane className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071B33]">Flight Bookings & Visa Guidance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We assist with visa documentation, biometric appointments, and best flight connections departing from Ahmedabad (AMD) or Mumbai (BOM).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-slate-200/60 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF8A32]/10 text-[#FF8A32] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071B33]">4-Star Accommodations & Transfers</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stay in trusted centrally located international properties with sanitized private transfers for your safety and comfort.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-slate-200/60 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071B33]">Vegetarian & Indian Food Options</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traveling overseas from Gujarat? We curate restaurants offering authentic Indian, pure veg, and Jain dining throughout your tour.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
