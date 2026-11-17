import React, { useState } from 'react';
import { 
  Car, 
  Users, 
  Briefcase, 
  Wind, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { Vehicle } from '../types';

export const CarsPage: React.FC = () => {
  const { vehicles, openEnquiryModal, buildWhatsAppUrl, businessConfig } = useTravel();

  // Quick Fare Estimator / Booking state
  const [tripType, setTripType] = useState<'local' | 'outstation' | 'airport'>('outstation');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(vehicles[1]?.id || vehicles[0]?.id);
  const [pickupCity, setPickupCity] = useState('Dakor, Gujarat');
  const [dropLocation, setDropLocation] = useState('');
  const [tripDate, setTripDate] = useState('');

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  const handleCarEnquiry = (v: Vehicle) => {
    openEnquiryModal({
      vehicleName: v.name,
      destination: 'Dakor Car Rental / Taxi Hire',
      serviceRequired: 'Car Rental'
    });
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Alex Tours and Travels Dakor,
I would like to enquire about Car Rental:
- Service Type: ${tripType.toUpperCase()}
- Vehicle: ${selectedVehicle.name} (${selectedVehicle.category})
- Pickup: ${pickupCity}
- Drop: ${dropLocation || 'Local Sightseeing'}
- Travel Date: ${tripDate || 'Upcoming'}
Please share rates, availability, and driver details. Thank you!`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#071B33] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A32] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            Dakor Taxi & Cab Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-3 text-white">
            Car Rental & Fleet Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Reliable, clean, air-conditioned cars with courteous experienced chauffeurs. Serving Dakor Temple darshan, Ahmedabad & Vadodara airport transfers, and pan-India outstations.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15">
              ✓ 24/7 Dakor On-Call Service
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15">
              ✓ Sanitized Clean Vehicles
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15">
              ✓ Honest Meter & Per-KM Rates
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Quick Booking & Fare Inquiry Widget */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 -mt-10 sm:-mt-14 relative z-20">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-2.5 py-1 rounded-full">
              Quick Rental Calculator
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#071B33] mt-2">
              Book Your Cab in Dakor
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Select your trip type and vehicle to get an instant quote on WhatsApp or phone.
            </p>
          </div>

          <form onSubmit={handleCalculatorSubmit} className="space-y-4">
            {/* Trip Type Selector */}
            <div className="grid grid-cols-3 gap-2 max-w-md">
              <button
                type="button"
                onClick={() => setTripType('outstation')}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all text-center ${
                  tripType === 'outstation'
                    ? 'bg-[#0878C9] text-white border-[#0878C9] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Outstation Trip
              </button>
              <button
                type="button"
                onClick={() => setTripType('local')}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all text-center ${
                  tripType === 'local'
                    ? 'bg-[#0878C9] text-white border-[#0878C9] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Local (8 Hr / 80 Km)
              </button>
              <button
                type="button"
                onClick={() => setTripType('airport')}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all text-center ${
                  tripType === 'airport'
                    ? 'bg-[#0878C9] text-white border-[#0878C9] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Airport Pickup/Drop
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  placeholder="e.g. Dakor, Anand, Nadiad..."
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Destination / Drop
                </label>
                <input
                  type="text"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder={
                    tripType === 'airport'
                      ? 'e.g. Ahmedabad Airport (AMD) or Vadodara (BDQ)'
                      : tripType === 'local'
                      ? 'Dakor Temple & Local Sightseeing'
                      : 'e.g. Somnath, Dwarka, Udaipur, Surat...'
                  }
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Vehicle Model
                </label>
                <select
                  value={selectedVehicleId}
                  onChange={(e) => setSelectedVehicleId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.category} – {v.name} ({v.seatingCapacity})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Travel Date
                </label>
                <input
                  type="text"
                  value={tripDate}
                  onChange={(e) => setTripDate(e.target.value)}
                  placeholder="e.g. Tomorrow, 10:00 AM"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                />
              </div>
            </div>

            {/* Estimated rate banner & Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-3 text-xs text-slate-700">
                <span className="font-bold text-slate-900">{selectedVehicle.name}:</span>
                <span className="text-[#0878C9] font-bold">
                  {tripType === 'local' ? selectedVehicle.localPackageRate : `${selectedVehicle.ratePerKm} (Min ${selectedVehicle.outstationMinKm})`}
                </span>
                <span className="text-[11px] text-slate-500 hidden md:inline">
                  * Indicative base rate. Tolls & parking extra as applicable.
                </span>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Get Quote on WhatsApp</span>
                </button>
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="px-4 py-2.5 bg-[#0878C9] hover:bg-[#076bb3] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center"
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Vehicle Fleet Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
              Our Modern Fleet
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#071B33] mt-2">
              Choose the Perfect Vehicle for Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From solo airport transfers to 20-seater luxury tempo travellers for family pilgrimages to Dakor Ranchodray Mandir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Vehicle Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#071B33]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {v.category}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow flex items-center space-x-1">
                      <Wind className="w-3.5 h-3.5 text-[#00B8E8]" />
                      <span>{v.acType}</span>
                    </div>
                  </div>

                  {/* Vehicle Specs */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold font-serif text-[#071B33]">
                        {v.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {v.idealFor}
                      </p>
                    </div>

                    {/* Capacity Pills */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-4 h-4 text-[#0878C9] shrink-0" />
                        <span className="truncate">{v.seatingCapacity}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Briefcase className="w-4 h-4 text-[#0878C9] shrink-0" />
                        <span className="truncate">{v.luggageCapacity}</span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-1">
                      {v.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600 space-x-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Rate Display */}
                    <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Outstation Rate:</span>
                        <span className="text-lg font-bold text-[#0878C9] font-serif">
                          {v.ratePerKm}
                        </span>
                        <span className="text-[10px] text-slate-500 ml-1">({v.outstationMinKm})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">Local Package:</span>
                        <span className="text-xs font-bold text-slate-700">
                          {v.localPackageRate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleCarEnquiry(v)}
                      className="py-2.5 px-3 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all text-center"
                    >
                      Book Cab
                    </button>
                    <a
                      href={buildWhatsAppUrl(`Hello Alex Tours Dakor, I want to check availability for ${v.name} (${v.category}). Please share details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all text-center flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Airport Transfer Services Banner */}
        <div className="bg-[#071B33] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC94A] bg-white/10 px-3 py-1 rounded-full">
                On-Time Punctuality Guarantee
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Airport Transfers to Ahmedabad (AMD) & Vadodara (BDQ)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Catch your flight without stress. We provide doorstep 24-hour pickups from Dakor, Umreth, Thasra, and Anand direct to Sardar Vallabhbhai Patel International Airport (Ahmedabad) or Vadodara Airport. Experienced drivers who know the highways and flight schedules.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`tel:${businessConfig.phone}`}
                className="w-full py-3.5 px-5 bg-white text-[#071B33] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#0878C9]" />
                <span>Call for Airport Drop: {businessConfig.phoneFormatted}</span>
              </a>
              <button
                onClick={() => openEnquiryModal({ destination: 'Ahmedabad/Vadodara Airport Drop', serviceRequired: 'Car Rental' })}
                className="w-full py-3.5 px-5 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center"
              >
                Book Airport Transfer Online
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
