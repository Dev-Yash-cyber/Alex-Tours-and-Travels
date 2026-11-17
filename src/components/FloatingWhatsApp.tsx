import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { useTravel } from '../context/TravelContext';

export const FloatingWhatsApp: React.FC = () => {
  const { businessConfig, buildWhatsAppUrl, openEnquiryModal } = useTravel();
  const [isOpen, setIsOpen] = useState(false);
  const [quickDestination, setQuickDestination] = useState('');
  const [quickDate, setQuickDate] = useState('');
  const [quickPersons, setQuickPersons] = useState('2 Persons');

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Alex Tours and Travels, I am planning a trip to ${quickDestination || 'an exciting destination'} around ${quickDate || 'upcoming dates'} for ${quickPersons}. Please share package details and pricing.`;
    window.open(buildWhatsAppUrl(message), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#071B33] text-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0878C9] to-[#071B33] p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center border border-white/20">
                  <img src="/logo.png" alt="Alex Tours" className="w-8 h-8 object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#071B33] rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center">
                  Alex Tours & Travels
                  <span className="ml-1.5 px-1.5 py-0.5 text-[9px] bg-emerald-500/20 text-emerald-300 rounded font-semibold">Online</span>
                </h4>
                <p className="text-[11px] text-slate-300">Dakor, Gujarat • 5.0 ★ Google Rated</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Chat Bubble */}
          <div className="p-4 bg-[#041021]/80 space-y-3">
            <div className="bg-[#071B33] p-3 rounded-xl rounded-tl-none border border-white/10 text-xs text-slate-200 shadow-inner">
              <p className="font-semibold text-white mb-1 flex items-center">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC94A] mr-1" />
                Namaste! Welcome to Alex Tours & Travels.
              </p>
              <p>How can we assist your travel plans today? Ask us about Kashmir, Goa, Kerala, Dubai, Thailand, or Car Rentals from Dakor.</p>
            </div>

            {/* Quick Trip Form */}
            <form onSubmit={handleQuickSend} className="space-y-2 pt-1">
              <div>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    placeholder="Where do you want to travel?"
                    value={quickDestination}
                    onChange={(e) => setQuickDestination(e.target.value)}
                    className="w-full bg-[#071B33] text-xs text-white pl-8 pr-3 py-2 rounded-lg border border-white/15 focus:outline-none focus:border-[#00B8E8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <Calendar className="w-3 h-3 text-slate-400 absolute left-2 top-2.5" />
                  <input
                    type="text"
                    placeholder="Travel Date"
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full bg-[#071B33] text-[11px] text-white pl-6 pr-2 py-2 rounded-lg border border-white/15 focus:outline-none focus:border-[#00B8E8]"
                  />
                </div>
                <div className="relative">
                  <Users className="w-3 h-3 text-slate-400 absolute left-2 top-2.5" />
                  <select
                    value={quickPersons}
                    onChange={(e) => setQuickPersons(e.target.value)}
                    className="w-full bg-[#071B33] text-[11px] text-white pl-6 pr-2 py-2 rounded-lg border border-white/15 focus:outline-none focus:border-[#00B8E8]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                    <option value="Family (3-5)">Family (3-5)</option>
                    <option value="Group (6+)">Group (6+)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </form>

            {/* Quick Action Links */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
              <a
                href={`tel:${businessConfig.phone}`}
                className="text-slate-300 hover:text-white flex items-center py-1 px-2 rounded hover:bg-white/5"
              >
                <Phone className="w-3 h-3 text-[#00B8E8] mr-1" />
                Call +91 83475 11900
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openEnquiryModal();
                }}
                className="text-[#FF8A32] hover:underline font-semibold"
              >
                Full Enquiry Form →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${businessConfig.phone}`}
          className="p-3.5 bg-[#0878C9] hover:bg-[#076bb3] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white/20"
          title="Direct Call"
          aria-label="Direct Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white/30"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 text-[9px] font-bold text-slate-900 items-center justify-center">
              1
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};
