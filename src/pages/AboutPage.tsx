import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle, 
  Compass, 
  CheckCircle, 
  Sparkles, 
  Users, 
  Car, 
  Globe 
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';

interface AboutPageProps {
  setCurrentTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentTab }) => {
  const { businessConfig, buildWhatsAppUrl, openEnquiryModal } = useTravel();

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-[#071B33] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Travel inspiration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-[#071B33]/90 to-[#071B33]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFC94A] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            About Alex Tours & Travels
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mt-4 text-white">
            Committed to Making Every <br />
            <span className="text-[#00B8E8]">Journey Unforgettable.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Based in the sacred temple town of Dakor, Gujarat, Alex Tours and Travels is your reliable partner for handcrafted holidays, family getaways, honeymoon vacations, and trustworthy car rentals.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 text-xs text-white flex items-center space-x-2">
              <Star className="w-4 h-4 fill-[#FFC94A] text-[#FFC94A]" />
              <span><strong>5.0 Google Rating</strong> ({businessConfig.googleReviewCount} Reviews)</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 text-xs text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#00B8E8]" />
              <span>Station Road, Dakor, Gujarat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
                Our Story & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#071B33] mt-2">
                Travel With Confidence, Comfort & Heart
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              At <strong>Alex Tours and Travels</strong>, our mission is to eliminate the stress of travel planning so you can immerse yourself in the joy of discovery. Located centrally on Station Road in Dakor (opposite Ranchodray Hospital and near the Police Station and Bus Station), we take immense pride in serving local families, pilgrims, corporate travellers, and vacationers.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are planning a pilgrimage across Gujarat, a snowy mountain retreat in Kashmir or Himachal, a romantic beach honeymoon in Goa or Kerala, or a grand holiday to Dubai, Thailand, Singapore, or Europe, we handle every detail with warmth, precision, and complete transparency.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Customer-Centric Care</h4>
                  <p className="text-xs text-slate-600">We listen to your specific preferences, pace, and dietary needs before crafting any itinerary.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Verified Accommodation & Safe Transport</h4>
                  <p className="text-xs text-slate-600">Only sanitized, comfortable vehicles and vetted 3-star to 5-star hotels are included in our tours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Human Connection</h4>
                  <p className="text-xs text-slate-600">No frustrating bots—you communicate directly with our travel organizers in Dakor via phone or WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Tropical beach vacation"
                className="w-full h-56 object-cover rounded-3xl shadow-lg border border-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80"
                alt="Scenic Kashmir valley"
                className="w-full h-72 object-cover rounded-3xl shadow-lg border border-slate-200"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                alt="Dubai skyline"
                className="w-full h-72 object-cover rounded-3xl shadow-lg border border-slate-200"
              />
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                alt="Comfortable car rental fleet"
                className="w-full h-56 object-cover rounded-3xl shadow-lg border border-slate-200"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-3 py-1 rounded-full">
              Our Core Commitments
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#071B33] mt-2">
              Why Travellers Trust Alex Tours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0878C9]/10 text-[#0878C9] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#071B33]">Tailor-Made Itineraries</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We craft each schedule around your comfort, whether you prefer leisure mornings or packed sightseeing days.
              </p>
            </div>

            <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF8A32]/10 text-[#FF8A32] flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#071B33]">Well-Maintained Fleet</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All vehicles in our fleet are regularly inspected, air-conditioned, and chauffeured by courteous, experienced drivers.
              </p>
            </div>

            <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#071B33]">Honest & Transparent</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear inclusions, explicit exclusions, and honest advice. We take pride in building lifetime relationships with clients.
              </p>
            </div>

            <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00B8E8]/10 text-[#00B8E8] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#071B33]">Global Connections</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong partnerships with destination management companies worldwide to ensure seamless international travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Dakor Connection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071B33] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC94A] bg-white/10 px-3 py-1 rounded-full">
                Rooted in Dakor, Serving the World
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Visit Us at Our Dakor Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Planning a trip is best done with a friendly chat over tea! Drop by our office opposite Ranchodray Hospital on Station Road in Dakor. We are open until 7:30 PM daily to answer all your travel queries.
              </p>
              <div className="text-xs text-slate-300 space-y-1 pt-1">
                <p>📍 {businessConfig.address}</p>
                <p>🕒 {businessConfig.businessHours}</p>
                <p>📞 Phone: {businessConfig.phoneFormatted}</p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => {
                  setCurrentTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 px-5 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center"
              >
                Get Office Directions
              </button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
