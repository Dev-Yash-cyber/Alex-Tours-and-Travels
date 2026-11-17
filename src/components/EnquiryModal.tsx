import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle, Sparkles, Calendar, Users, MapPin, User, Mail, FileText } from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { CustomerEnquiry } from '../types';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, enquiryModalPrefill, closeEnquiryModal, submitEnquiry, buildWhatsAppUrl, businessConfig } = useTravel();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [numberOfTravellers, setNumberOfTravellers] = useState('2 Travellers');
  const [serviceRequired, setServiceRequired] = useState<CustomerEnquiry['serviceRequired']>('Tour Package');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [submittedEnquiry, setSubmittedEnquiry] = useState<CustomerEnquiry | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (enquiryModalPrefill) {
      if (enquiryModalPrefill.destination) setDestination(enquiryModalPrefill.destination);
      if (enquiryModalPrefill.serviceRequired) setServiceRequired(enquiryModalPrefill.serviceRequired);
      if (enquiryModalPrefill.packageName) {
        setAdditionalRequirements(`Enquiring about package: ${enquiryModalPrefill.packageName}`);
      }
      if (enquiryModalPrefill.vehicleName) {
        setAdditionalRequirements(`Enquiring about car rental: ${enquiryModalPrefill.vehicleName}`);
      }
    }
    setSubmittedEnquiry(null);
    setError('');
  }, [enquiryModalPrefill, isEnquiryModalOpen]);

  if (!isEnquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !destination.trim()) {
      setError('Please fill in your name, contact phone number, and destination.');
      return;
    }

    const created = submitEnquiry({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      destination: destination.trim(),
      travelDate: travelDate || 'Flexible / Upcoming',
      numberOfTravellers,
      serviceRequired,
      additionalRequirements: additionalRequirements.trim(),
      packageName: enquiryModalPrefill?.packageName,
      vehicleName: enquiryModalPrefill?.vehicleName
    });

    setSubmittedEnquiry(created);
  };

  const getWhatsAppMessage = () => {
    if (!submittedEnquiry) return '';
    return `Hello Alex Tours and Travels Dakor,
My name is ${submittedEnquiry.fullName}.
I would like to enquire about:
- Service: ${submittedEnquiry.serviceRequired}
- Destination: ${submittedEnquiry.destination}
- Travel Date: ${submittedEnquiry.travelDate}
- Travellers: ${submittedEnquiry.numberOfTravellers}
${submittedEnquiry.packageName ? `- Selected Package: ${submittedEnquiry.packageName}\n` : ''}${submittedEnquiry.vehicleName ? `- Selected Vehicle: ${submittedEnquiry.vehicleName}\n` : ''}${submittedEnquiry.additionalRequirements ? `- Note: ${submittedEnquiry.additionalRequirements}\n` : ''}
Please share availability, quotation, and itinerary details. Thank you!`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#071B33] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
              <img src="/logo.png" alt="Alex Tours" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white flex items-center">
                Plan Your Trip with Alex Tours
              </h3>
              <p className="text-xs text-[#00B8E8]">Dakor, Gujarat • 5.0 ★ Google Rated Agency</p>
            </div>
          </div>
          <button
            onClick={closeEnquiryModal}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submittedEnquiry ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#071B33] font-serif">Enquiry Received Successfully!</h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{submittedEnquiry.fullName}</strong>. Your enquiry for <strong className="text-slate-900">{submittedEnquiry.destination}</strong> has been saved. Our travel specialist from Dakor will connect with you promptly.
                </p>
                <div className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-full border border-slate-200">
                  Ref ID: {submittedEnquiry.id}
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="bg-[#F4F7FB] border border-[#E5EAF1] rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#FF8A32]" />
                  <span>Get Instant Response on WhatsApp</span>
                </div>
                <p className="text-xs text-slate-600">
                  Click below to open WhatsApp with your customized trip summary already pre-filled. We typically respond within minutes!
                </p>
                <a
                  href={buildWhatsAppUrl(getWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Send Enquiry via WhatsApp Now</span>
                </a>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-2">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="text-xs text-[#0878C9] hover:underline flex items-center font-medium"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  Or Call Directly: {businessConfig.phoneFormatted}
                </a>
                <span className="text-slate-300">•</span>
                <button
                  onClick={closeEnquiryModal}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {enquiryModalPrefill?.packageName && (
                <div className="bg-[#0878C9]/10 border border-[#0878C9]/30 rounded-xl p-3 text-xs text-[#0878C9] flex items-center justify-between">
                  <span className="font-semibold">Selected Tour: {enquiryModalPrefill.packageName}</span>
                  <span className="text-[10px] bg-[#0878C9] text-white px-2 py-0.5 rounded-full">Customizable</span>
                </div>
              )}

              {enquiryModalPrefill?.vehicleName && (
                <div className="bg-[#FF8A32]/10 border border-[#FF8A32]/30 rounded-xl p-3 text-xs text-[#FF8A32] flex items-center justify-between">
                  <span className="font-semibold">Selected Vehicle: {enquiryModalPrefill.vehicleName}</span>
                  <span className="text-[10px] bg-[#FF8A32] text-white px-2 py-0.5 rounded-full">Cab Rental</span>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                    Full Name <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                    Mobile / WhatsApp Number <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98250 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. ramesh@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <FileText className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                    Service Required
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  >
                    <option value="Tour Package">Domestic Tour Package</option>
                    <option value="International Tour">International Tour Package</option>
                    <option value="Car Rental">Car Rental & Taxi Hire</option>
                    <option value="Family Trip">Family Holiday Package</option>
                    <option value="Honeymoon Package">Romantic Honeymoon Package</option>
                    <option value="Other">Custom Travel Planning</option>
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#FF8A32]" />
                    Destination / Route <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kashmir, Dubai, Goa, Dakor Station drop"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                    Estimated Travel Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next month, 15th Dec, or Diwali"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                  />
                </div>
              </div>

              {/* Number of Travellers */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                  Number of Travellers / Passengers
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1 Person', 'Couple (2)', 'Family (3-5)', 'Group (6+)'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setNumberOfTravellers(opt)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                        numberOfTravellers === opt
                          ? 'bg-[#0878C9] text-white border-[#0878C9] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Special Requests / Preferred Hotel Category / Taxi Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your preferences: e.g. 4-star hotels, pure veg food, flight tickets required, or pickup location..."
                  value={additionalRequirements}
                  onChange={(e) => setAdditionalRequirements(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9] focus:bg-white"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#FF8A32]/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Trip Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="w-full sm:w-auto px-5 py-3 border border-slate-300 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 pt-1">
                🔒 Your privacy is protected. We will never spam or share your contact details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
