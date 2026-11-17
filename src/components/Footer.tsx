import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { businessConfig, buildWhatsAppUrl } = useTravel();

  const handleLinkClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041021] text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0878C9]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B8E8]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Trust Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Alex Tours and Travels"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,184,232,0.3)]"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Alex Tours and Travels is Dakor’s premier travel partner for domestic and international holiday tour packages, family vacations, romantic honeymoon escapes, and reliable car rental services.
            </p>

            {/* Google Rating Verified Card */}
            <div className="bg-[#071B33] border border-white/15 rounded-xl p-4 flex items-center space-x-4 max-w-md shadow-md">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#FFC94A]/40 flex flex-col items-center justify-center shrink-0">
                <span className="text-sm font-bold text-[#FFC94A]">5.0</span>
                <div className="flex text-[#FFC94A] text-[9px]">★★★★★</div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-white">Google Verified Business</span>
                  <ShieldCheck className="w-4 h-4 text-[#00B8E8]" />
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  100% Genuine 5.0 Rating based on <strong className="text-white">{businessConfig.googleReviewCount} Google Reviews</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#0878C9] hover:bg-[#076bb3] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${businessConfig.phone}`}
                className="inline-flex items-center px-4 py-2 text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#00B8E8]" />
                {businessConfig.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#00B8E8] mr-2"></span>
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('packages')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('domestic')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> Domestic Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('international')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> International Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('cars')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> Car Rental & Cabs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#00B8E8] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-50 text-[#00B8E8]" /> Contact & Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#FF8A32] mr-2"></span>
              Top Tours
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick('domestic')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Kashmir Paradise Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('domestic')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Goa Beaches & Cruise
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('domestic')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Kerala Houseboat Holidays
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('domestic')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Royal Rajasthan Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('international')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Dubai Desert & Sky Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('international')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Thailand Bangkok & Pattaya
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('international')}
                  className="hover:text-[#FF8A32] transition-colors text-left"
                >
                  Singapore & Malaysia
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('cars')}
                  className="hover:text-[#FF8A32] transition-colors text-left font-medium text-emerald-400"
                >
                  Dakor Station & Airport Taxi
                </button>
              </li>
            </ul>
          </div>

          {/* Dakor Location & Contact Column */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#FFC94A] mr-2"></span>
              Dakor Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#00B8E8] shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address}, {businessConfig.landmark}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#0878C9] shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="hover:text-white transition-colors">
                  {businessConfig.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 {businessConfig.whatsappNumber.slice(2)} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{businessConfig.email}</span>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#FF8A32] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Business Hours:</span>
                  <span>{businessConfig.businessHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Alex Tours and Travels, Dakor. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 flex items-center">
              Made with <Heart className="w-3 h-3 text-red-500 mx-1 fill-red-500" /> for Travelers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
