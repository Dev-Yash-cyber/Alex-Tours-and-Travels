import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Check, AlertCircle, MessageCircle, Phone, Sparkles, Star, Hotel, Sun, Shield } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

export const PackageDetailModal: React.FC = () => {
  const { activeDetailPackage, closePackageDetail, openEnquiryModal, buildWhatsAppUrl, businessConfig } = useTravel();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'accommodation'>('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!activeDetailPackage) return null;

  const pkg = activeDetailPackage;
  const currentImage = selectedImage || pkg.coverImage;

  const handleWhatsAppBooking = () => {
    const msg = `Hello Alex Tours and Travels Dakor, I am interested in booking the "${pkg.title}" (${pkg.duration}). Please share full pricing for upcoming dates, hotel options, and availability.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  const handleOnlineEnquiry = () => {
    closePackageDetail();
    openEnquiryModal({
      destination: pkg.destination,
      packageName: pkg.title,
      serviceRequired: pkg.category === 'international' ? 'International Tour' : 'Tour Package'
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="bg-[#071B33] text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#0878C9] text-white rounded-md">
              {pkg.category === 'domestic' ? 'Domestic Tour' : 'International Holiday'}
            </span>
            <span className="text-xs text-slate-300 flex items-center">
              <MapPin className="w-3 h-3 text-[#00B8E8] mr-1" />
              {pkg.destination}, {pkg.region}
            </span>
          </div>

          <button
            onClick={closePackageDetail}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">
          
          {/* Main Visual & Title Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <img
                  src={currentImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#071B33]/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow">
                  <Clock className="w-3.5 h-3.5 text-[#00B8E8]" />
                  <span>{pkg.duration}</span>
                </div>
                {pkg.isIllustrative && (
                  <div className="absolute bottom-3 left-3 bg-amber-500/95 text-slate-950 font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider shadow">
                    Sample Package (Customizable)
                  </div>
                )}
              </div>

              {/* Thumbnail selector */}
              {pkg.galleryImages && pkg.galleryImages.length > 1 && (
                <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                  {pkg.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        currentImage === img ? 'border-[#0878C9] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Details & Booking Snapshot Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-1 text-[#FFC94A] text-xs font-semibold mb-1">
                  <Star className="w-4 h-4 fill-[#FFC94A]" />
                  <span>{pkg.rating}.0 / 5.0 Rating</span>
                  <span className="text-slate-400">({pkg.reviewsCount} customer reviews)</span>
                </div>

                <h2 className="text-2xl font-bold font-serif text-[#071B33] leading-snug">
                  {pkg.title}
                </h2>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {pkg.overview}
                </p>
              </div>

              {/* Price Box */}
              <div className="bg-[#F4F7FB] border border-[#E5EAF1] rounded-2xl p-4 space-y-1">
                <span className="text-xs text-slate-500 font-medium block">Starting From:</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0878C9] font-serif">
                    {pkg.startingPrice}
                  </span>
                  <span className="text-xs text-slate-500">/ person</span>
                </div>
                {pkg.priceNote && (
                  <p className="text-[11px] text-slate-500 leading-tight">
                    * {pkg.priceNote}
                  </p>
                )}
              </div>

              {/* Call-to-actions */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  onClick={handleOnlineEnquiry}
                  className="w-full py-3 px-4 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-[#FF8A32]/25 transition-all hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize & Plan This Trip</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200">
            <div className="flex space-x-2 sm:space-x-6 overflow-x-auto text-xs font-semibold pb-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-[#0878C9] text-[#0878C9]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Tour Highlights
              </button>
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`py-2 px-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'itinerary'
                    ? 'border-[#0878C9] text-[#0878C9]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Day-by-Day Itinerary ({pkg.itinerary.length} Days)
              </button>
              <button
                onClick={() => setActiveTab('inclusions')}
                className={`py-2 px-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'inclusions'
                    ? 'border-[#0878C9] text-[#0878C9]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Inclusions & Exclusions
              </button>
              <button
                onClick={() => setActiveTab('accommodation')}
                className={`py-2 px-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'accommodation'
                    ? 'border-[#0878C9] text-[#0878C9]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Stay & Best Season
              </button>
            </div>
          </div>

          {/* Tab 1: Highlights */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#071B33]">
                Package Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl"
                  >
                    <div className="p-1 bg-[#0878C9]/10 text-[#0878C9] rounded-lg shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#0878C9]/5 border border-[#0878C9]/20 flex items-center space-x-3 text-xs text-slate-700">
                <Shield className="w-5 h-5 text-[#0878C9] shrink-0" />
                <p>
                  <strong>Alex Tours Guarantee:</strong> Every itinerary can be fully customized for private couples, senior citizens, and family groups. Contact our Dakor office for custom hotel choices and meal plans.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Day-by-Day Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#071B33]">
                Detailed Day-wise Schedule
              </h4>
              <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {pkg.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="relative pl-10">
                    {/* Day number badge */}
                    <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-[#0878C9] text-white font-bold text-xs flex items-center justify-center shadow-md">
                      D{dayItem.day}
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                        <h5 className="text-sm font-bold text-[#071B33]">
                          Day {dayItem.day}: {dayItem.title}
                        </h5>
                        {dayItem.meals && (
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block w-fit">
                            🍴 {dayItem.meals}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {dayItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-150">
              {/* Inclusions */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 flex items-center">
                  <Check className="w-4 h-4 mr-1.5" />
                  What is Included
                </h4>
                <ul className="space-y-2">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-700 space-x-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-rose-700 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1.5" />
                  What is Not Included
                </h4>
                <ul className="space-y-2">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-600 space-x-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Accommodation & Season */}
          {activeTab === 'accommodation' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-4">
                <div className="p-2.5 bg-[#0878C9]/10 text-[#0878C9] rounded-xl shrink-0">
                  <Hotel className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071B33] mb-1">
                    Accommodation Standard
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.accommodation}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2">
                    * Upgrades to 5-star luxury resorts, private villas, or specific boutique properties are available on request.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl shrink-0">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071B33] mb-1">
                    Recommended Season & Best Time to Visit
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.bestTimeToVisit}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-4 text-xs text-slate-600">
            <a
              href={`tel:${businessConfig.phone}`}
              className="hover:text-[#0878C9] flex items-center font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
              Call: {businessConfig.phoneFormatted}
            </a>
            <span>•</span>
            <span className="text-slate-500">Alex Tours Dakor</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleOnlineEnquiry}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#FF8A32] hover:bg-[#e87620] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow"
            >
              Enquire Online
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Booking</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
