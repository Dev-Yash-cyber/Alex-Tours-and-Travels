import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Compass, MapPin } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { businessConfig, openEnquiryModal, buildWhatsAppUrl, isAdminLoggedIn } = useTravel();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'domestic', label: 'Domestic Tours' },
    { id: 'international', label: 'International Tours' },
    { id: 'cars', label: 'Car Rental' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#041021] text-xs text-slate-300 py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#FFC94A] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              ★ 5.0 Google Rated Agency ({businessConfig.googleReviewCount} Verified Reviews)
            </span>
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#00B8E8] mr-1" />
              Dakor, Gujarat (Opp. Ranchodray Hospital)
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="text-slate-400">
              {businessConfig.businessHours}
            </span>
            <a
              href={`tel:${businessConfig.phone}`}
              className="flex items-center text-white hover:text-[#00B8E8] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#0878C9] mr-1.5" />
              {businessConfig.phoneFormatted}
            </a>
            {isAdminLoggedIn && (
              <button
                onClick={() => setCurrentTab('admin')}
                className="flex items-center text-[#FF8A32] hover:underline text-xs bg-white/10 px-2 py-0.5 rounded"
              >
                <Shield className="w-3 h-3 mr-1" /> Admin Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071B33]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2'
            : 'bg-[#071B33] py-2 sm:py-2.5'
        } border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-3">
            {/* Logo Only (prominent size, no redundant text beside it) */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none shrink-0"
              aria-label="Alex Tours & Travels Home"
            >
              <img
                src="/logo.png"
                alt="Alex Tours & Travels Logo"
                className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,184,232,0.35)] shrink-0"
              />
            </button>

            {/* Desktop Navigation Links (strictly 1 line, NO wrapping, 1 active tab) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 shrink-0">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`whitespace-nowrap px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-[#00B8E8] bg-white/10 shadow-inner'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-2 xl:space-x-3 shrink-0">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-flex items-center px-3 xl:px-3.5 py-2 text-xs font-semibold text-white bg-[#0878C9] hover:bg-[#076bb3] rounded-xl shadow-sm transition-all hover:scale-105"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-white" />
                WhatsApp
              </a>

              <button
                onClick={() => openEnquiryModal()}
                className="whitespace-nowrap inline-flex items-center px-3.5 xl:px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A32] hover:bg-[#e87620] rounded-xl shadow-md shadow-[#FF8A32]/25 transition-all hover:scale-105 active:scale-95"
              >
                <Compass className="w-4 h-4 mr-1.5" />
                Plan Your Trip
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={`tel:${businessConfig.phone}`}
                className="p-2 text-white bg-[#0878C9] rounded-lg"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#041021] border-b border-white/15 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive ? 'bg-[#0878C9] text-white' : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavClick('admin')}
                className="text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#FF8A32] flex items-center space-x-2 border-t border-white/10 mt-2 pt-3"
              >
                <Shield className="w-4 h-4" />
                <span>Admin Management Portal</span>
              </button>
            </div>

            <div className="pt-3 flex flex-col space-y-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#FF8A32] hover:bg-[#e87620] rounded-xl shadow-md"
              >
                Plan Your Trip
              </button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0878C9] rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
