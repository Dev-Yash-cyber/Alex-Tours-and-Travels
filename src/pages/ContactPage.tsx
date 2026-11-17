import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { CustomerEnquiry } from '../types';

export const ContactPage: React.FC = () => {
  const { businessConfig, submitEnquiry, buildWhatsAppUrl } = useTravel();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !destination.trim()) {
      setError('Please provide your name, phone number, and destination.');
      return;
    }

    const enq = submitEnquiry({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      destination: destination.trim(),
      travelDate: travelDate || 'Flexible',
      numberOfTravellers,
      serviceRequired,
      additionalRequirements: additionalRequirements.trim()
    });

    setSubmittedEnquiry(enq);
    setError('');
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
${submittedEnquiry.additionalRequirements ? `- Details: ${submittedEnquiry.additionalRequirements}\n` : ''}
Please share complete details, pricing, and availability. Thank you!`;
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#071B33] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00B8E8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            Let's Connect
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif mt-3 text-white">
            Contact Alex Tours & Travels
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Have questions about a holiday package or need an immediate car rental booking in Dakor? We are here to assist you via phone, WhatsApp, or at our office.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0878C9] bg-[#0878C9]/10 px-2.5 py-1 rounded-full">
                  Official Office
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#071B33] mt-2">
                  Dakor Branch Office
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                
                {/* Address */}
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <MapPin className="w-5 h-5 text-[#0878C9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Office Address:</strong>
                    <span>{businessConfig.address}</span>
                    <span className="text-slate-500 block mt-0.5">({businessConfig.landmark})</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <Phone className="w-5 h-5 text-[#00B8E8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Direct Phone Line:</strong>
                    <a
                      href={`tel:${businessConfig.phone}`}
                      className="text-[#0878C9] font-bold text-sm hover:underline"
                    >
                      {businessConfig.phoneFormatted}
                    </a>
                    <span className="text-slate-500 block text-[11px]">Instant call assistance 24/7</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200/70">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">WhatsApp Inquiry:</strong>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold text-sm hover:underline"
                    >
                      +91 {businessConfig.whatsappNumber.slice(2)}
                    </a>
                    <span className="text-emerald-600 block text-[11px]">Typically replies within 15 minutes</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Email:</strong>
                    <span className="text-slate-800">{businessConfig.email}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <Clock className="w-5 h-5 text-[#FF8A32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Business Hours:</strong>
                    <span>{businessConfig.businessHours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Interactive Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/80">
              <div className="p-4 bg-[#071B33] text-white flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-[#FF8A32]" />
                  <span>Locate Us on Google Maps</span>
                </div>
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00B8E8] hover:underline flex items-center"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="h-64 w-full bg-slate-200">
                <iframe
                  title="Alex Tours and Travels Dakor Location"
                  src={businessConfig.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-slate-800">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A32] bg-[#FF8A32]/10 px-2.5 py-1 rounded-full">
                  Trip Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#071B33] mt-2">
                  Send Your Travel Enquiry
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your details below. We will provide a complete custom itinerary and honest pricing without obligation.
                </p>
              </div>

              {submittedEnquiry ? (
                /* Success Screen */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#071B33]">
                      Thank You, {submittedEnquiry.fullName}!
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                      Your enquiry for <strong>{submittedEnquiry.destination}</strong> has been successfully received by our team in Dakor.
                    </p>
                    <div className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-full border border-slate-200">
                      Booking Reference: {submittedEnquiry.id}
                    </div>
                  </div>

                  {/* Direct WhatsApp Call to Action */}
                  <div className="bg-[#F4F7FB] border border-[#E5EAF1] rounded-2xl p-6 text-left space-y-3">
                    <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-sm">
                      <Sparkles className="w-4 h-4 text-[#FF8A32]" />
                      <span>Speed Up Response via WhatsApp</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Send your pre-formatted enquiry directly to our WhatsApp number with one tap:
                    </p>
                    <a
                      href={buildWhatsAppUrl(getWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                      <span>Continue to WhatsApp (+91 83475 11900)</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmittedEnquiry(null)}
                      className="text-xs text-[#0878C9] hover:underline font-semibold"
                    >
                      Submit Another Trip Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98250 11223"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      >
                        <option value="Tour Package">Domestic Tour Package</option>
                        <option value="International Tour">International Tour Package</option>
                        <option value="Car Rental">Car Rental & Taxi Hire</option>
                        <option value="Family Trip">Family Vacation</option>
                        <option value="Honeymoon Package">Romantic Honeymoon</option>
                        <option value="Other">Other Custom Enquiry</option>
                      </select>
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Destination / Route <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kashmir, Dubai, Goa, Ahmedabad Airport..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      />
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15th December, or Diwali break"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                      />
                    </div>
                  </div>

                  {/* Travellers count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Travellers
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Requirements & Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your requirements (e.g. flight tickets needed, 4-star hotel stay, pure veg food, pickup time from Dakor...)"
                      value={additionalRequirements}
                      onChange={(e) => setAdditionalRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#FF8A32] hover:bg-[#e87620] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#FF8A32]/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry to Alex Tours</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center text-[11px] text-slate-500">
                    🔒 Verified Local Travel Agency in Dakor, Gujarat. Your information is 100% confidential.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
