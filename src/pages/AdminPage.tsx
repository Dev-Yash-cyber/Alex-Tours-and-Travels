import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  LogOut, 
  Package, 
  Car, 
  Users, 
  Settings, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  Phone, 
  MessageCircle, 
  Calendar, 
  DollarSign, 
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useTravel } from '../context/TravelContext';
import { TourPackage, Vehicle, CustomerEnquiry } from '../types';

export const AdminPage: React.FC = () => {
  const { 
    isAdminLoggedIn, 
    adminLogin, 
    adminLogout,
    packages,
    addPackage,
    updatePackage,
    deletePackage,
    vehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    enquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    businessConfig,
    updateBusinessConfig,
    buildWhatsAppUrl
  } = useTravel();

  // Login form state
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab in Admin
  const [adminTab, setAdminTab] = useState<'overview' | 'packages' | 'vehicles' | 'enquiries' | 'settings'>('overview');

  // Package editor modal state
  const [editingPackage, setEditingPackage] = useState<TourPackage | null>(null);
  const [isNewPackage, setIsNewPackage] = useState(false);

  // Vehicle editor modal state
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [isNewVehicle, setIsNewVehicle] = useState(false);

  // Settings form state
  const [configForm, setConfigForm] = useState(businessConfig);
  const [settingsSuccess, setSettingsSuccess] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(passcode)) {
      setLoginError('');
      setPasscode('');
    } else {
      setLoginError('Incorrect Passcode. (Try default: admin123)');
    }
  };

  // If not logged in, render login screen
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 text-slate-800 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#071B33] text-white flex items-center justify-center mx-auto shadow-md">
              <Shield className="w-7 h-7 text-[#00B8E8]" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-[#071B33]">
              Admin Portal
            </h2>
            <p className="text-xs text-slate-500">
              Alex Tours & Travels Dakor • Secure Content Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl border border-red-200">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center">
                <Lock className="w-3.5 h-3.5 mr-1 text-[#0878C9]" />
                Admin Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (default: admin123)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0878C9]"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Demo access code: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">admin123</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#071B33] hover:bg-[#10243A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Save Settings Handler
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessConfig(configForm);
    setSettingsSuccess('Business settings updated successfully!');
    setTimeout(() => setSettingsSuccess(''), 3000);
  };

  // Open Package Modal
  const startAddPackage = () => {
    setIsNewPackage(true);
    setEditingPackage({
      id: `pkg-${Date.now()}`,
      title: '',
      slug: '',
      destination: '',
      region: '',
      category: 'domestic',
      subCategory: 'North India',
      duration: '4 Nights / 5 Days',
      days: 5,
      nights: 4,
      startingPrice: '₹15,000',
      priceNote: 'Starting per person (Illustrative)',
      rating: 5.0,
      reviewsCount: 10,
      coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      galleryImages: [],
      overview: 'Exciting tour package exploring top sightseeing spots.',
      highlights: ['Sightseeing in private sanitized vehicle', '3-star or 4-star hotel stay', 'Daily breakfast & dinner'],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', description: 'Pickup and transfer to hotel.', meals: 'Dinner included' }
      ],
      inclusions: ['Hotel stay', 'Meals as mentioned', 'All transfers'],
      exclusions: ['Flight/train tickets', 'Personal expenses'],
      accommodation: 'Deluxe category hotels',
      bestTimeToVisit: 'All year round',
      isPopular: false,
      isFeatured: false,
      isIllustrative: true
    });
  };

  const handleSavePackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPackage) return;
    if (isNewPackage) {
      addPackage(editingPackage);
    } else {
      updatePackage(editingPackage);
    }
    setEditingPackage(null);
  };

  // Open Vehicle Modal
  const startAddVehicle = () => {
    setIsNewVehicle(true);
    setEditingVehicle({
      id: `car-${Date.now()}`,
      name: '',
      category: 'Sedan',
      seatingCapacity: '4 Passengers + 1 Driver',
      luggageCapacity: '2 Large Bags',
      acType: 'AC',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
      ratePerKm: '₹14 / km',
      localPackageRate: '₹2,200 (8 Hrs / 80 Km)',
      outstationMinKm: '250 Km / day',
      features: ['Air Conditioning', 'Clean Interiors', 'Sanitized Cab'],
      idealFor: 'Local Dakor and outstation trips',
      isAvailable: true
    });
  };

  const handleSaveVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVehicle) return;
    if (isNewVehicle) {
      addVehicle(editingVehicle);
    } else {
      updateVehicle(editingVehicle);
    }
    setEditingVehicle(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Admin Header */}
      <div className="bg-[#071B33] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 p-2 flex items-center justify-center border border-white/20">
            <img src="/logo.png" alt="Alex Tours" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Alex Tours & Travels Admin Dashboard
            </h1>
            <p className="text-xs text-[#00B8E8]">
              Manage Tour Packages, Car Rental Fleet, and Customer Enquiries
            </p>
          </div>
        </div>

        <button
          onClick={adminLogout}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all"
        >
          <LogOut className="w-4 h-4 text-red-400" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-slate-200 text-xs font-bold">
        <button
          onClick={() => setAdminTab('overview')}
          className={`py-2.5 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            adminTab === 'overview'
              ? 'bg-[#0878C9] text-white shadow'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>Overview</span>
        </button>

        <button
          onClick={() => setAdminTab('packages')}
          className={`py-2.5 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            adminTab === 'packages'
              ? 'bg-[#0878C9] text-white shadow'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Tour Packages ({packages.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('vehicles')}
          className={`py-2.5 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            adminTab === 'vehicles'
              ? 'bg-[#0878C9] text-white shadow'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>Car Rental Fleet ({vehicles.length})</span>
        </button>

        <button
          onClick={() => setAdminTab('enquiries')}
          className={`py-2.5 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            adminTab === 'enquiries'
              ? 'bg-[#0878C9] text-white shadow'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Enquiries ({enquiries.length})</span>
          {enquiries.filter(e => e.status === 'New').length > 0 && (
            <span className="bg-[#FF8A32] text-white text-[10px] px-1.5 py-0.2 rounded-full">
              {enquiries.filter(e => e.status === 'New').length} New
            </span>
          )}
        </button>

        <button
          onClick={() => setAdminTab('settings')}
          className={`py-2.5 px-4 rounded-xl transition-all flex items-center space-x-2 ${
            adminTab === 'settings'
              ? 'bg-[#0878C9] text-white shadow'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Business Info & Settings</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {adminTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-semibold uppercase">Total Packages</span>
              <div className="text-3xl font-black font-serif text-[#071B33]">{packages.length}</div>
              <p className="text-[11px] text-slate-500">Domestic & International Active</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-semibold uppercase">Vehicles in Fleet</span>
              <div className="text-3xl font-black font-serif text-[#0878C9]">{vehicles.length}</div>
              <p className="text-[11px] text-slate-500">Available for Dakor & Outstations</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-semibold uppercase">Total Enquiries</span>
              <div className="text-3xl font-black font-serif text-[#FF8A32]">{enquiries.length}</div>
              <p className="text-[11px] text-slate-500">Customer leads received</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs text-slate-500 font-semibold uppercase">Google Rating</span>
              <div className="text-3xl font-black font-serif text-emerald-600">5.0 ★</div>
              <p className="text-[11px] text-slate-500">Based on 198 Google reviews</p>
            </div>
          </div>

          {/* Quick Enquiries Preview */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif text-[#071B33]">
                Recent Customer Enquiries
              </h3>
              <button
                onClick={() => setAdminTab('enquiries')}
                className="text-xs text-[#0878C9] font-bold hover:underline"
              >
                View All Enquiries →
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {enquiries.slice(0, 3).map((enq) => (
                <div key={enq.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{enq.fullName}</span>
                    <span className="text-slate-500">{enq.destination} • {enq.serviceRequired}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      enq.status === 'New' ? 'bg-[#FF8A32]/20 text-[#FF8A32]' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {enq.status}
                    </span>
                    <a
                      href={`tel:${enq.phone}`}
                      className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-[#0878C9]"
                      title="Call"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PACKAGES MANAGEMENT */}
      {adminTab === 'packages' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-[#071B33]">
                Tour Packages Management
              </h2>
              <p className="text-xs text-slate-500">
                Add, edit pricing, or remove domestic and international holiday packages.
              </p>
            </div>
            <button
              onClick={startAddPackage}
              className="px-4 py-2 bg-[#FF8A32] hover:bg-[#e87620] text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Package</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-40 relative">
                    <img src={pkg.coverImage} alt={pkg.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-[#071B33]/85 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                      {pkg.subCategory}
                    </span>
                    <span className="absolute bottom-2 right-2 bg-white/95 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">
                      {pkg.startingPrice}
                    </span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{pkg.title}</h4>
                    <p className="text-xs text-slate-500">{pkg.destination} • {pkg.duration}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">ID: {pkg.id}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setIsNewPackage(false);
                        setEditingPackage(pkg);
                      }}
                      className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                      title="Edit"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete package: "${pkg.title}"?`)) {
                          deletePackage(pkg.id);
                        }
                      }}
                      className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: VEHICLES MANAGEMENT */}
      {adminTab === 'vehicles' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-[#071B33]">
                Car Rental Fleet Management
              </h2>
              <p className="text-xs text-slate-500">
                Manage taxi categories, rates, seating capacities, and availability.
              </p>
            </div>
            <button
              onClick={startAddVehicle}
              className="px-4 py-2 bg-[#0878C9] hover:bg-[#076bb3] text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add Vehicle</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <div key={v.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-40 relative">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-[#071B33]/85 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                      {v.category}
                    </span>
                  </div>
                  <div className="p-4 space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-900">{v.name}</h4>
                    <p className="text-xs text-slate-500">{v.seatingCapacity} • {v.acType}</p>
                    <div className="text-xs text-[#0878C9] font-bold">
                      {v.ratePerKm} (Local: {v.localPackageRate})
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Min: {v.outstationMinKm}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setIsNewVehicle(false);
                        setEditingVehicle(v);
                      }}
                      className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                      title="Edit"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete vehicle: "${v.name}"?`)) {
                          deleteVehicle(v.id);
                        }
                      }}
                      className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: ENQUIRIES INBOX */}
      {adminTab === 'enquiries' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold font-serif text-[#071B33]">
              Customer Enquiries Inbox ({enquiries.length})
            </h2>
            <p className="text-xs text-slate-500">
              Review customer trip requests submitted from the website and connect via phone or WhatsApp.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#071B33] text-white">
                  <tr>
                    <th className="p-3.5">Customer Name & Contact</th>
                    <th className="p-3.5">Destination / Service</th>
                    <th className="p-3.5">Date & Travellers</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-400">
                        No customer enquiries yet.
                      </td>
                    </tr>
                  ) : (
                    enquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5">
                          <strong className="text-slate-900 block">{enq.fullName}</strong>
                          <span className="text-slate-500">{enq.phone}</span>
                          {enq.email && <span className="text-slate-400 block text-[11px]">{enq.email}</span>}
                        </td>
                        <td className="p-3.5">
                          <span className="font-semibold text-[#0878C9]">{enq.destination}</span>
                          <span className="text-slate-500 block text-[11px]">{enq.serviceRequired}</span>
                          {enq.additionalRequirements && (
                            <span className="text-slate-400 text-[10px] block italic max-w-xs truncate">
                              "{enq.additionalRequirements}"
                            </span>
                          )}
                        </td>
                        <td className="p-3.5">
                          <span>{enq.travelDate}</span>
                          <span className="text-slate-500 block text-[11px]">{enq.numberOfTravellers}</span>
                        </td>
                        <td className="p-3.5">
                          <select
                            value={enq.status}
                            onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                            className={`px-2 py-1 rounded text-[11px] font-bold border ${
                              enq.status === 'New'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : enq.status === 'Contacted'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : enq.status === 'Booked'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Booked">Booked</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <a
                              href={`tel:${enq.phone}`}
                              className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg"
                              title="Call Customer"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={buildWhatsAppUrl(`Hello ${enq.fullName}, regarding your enquiry for ${enq.destination} on Alex Tours and Travels...`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg"
                              title="WhatsApp Customer"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => {
                                if (confirm(`Delete enquiry from ${enq.fullName}?`)) {
                                  deleteEnquiry(enq.id);
                                }
                              }}
                              className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: BUSINESS SETTINGS */}
      {adminTab === 'settings' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-3xl space-y-6">
          <div>
            <h2 className="text-xl font-bold font-serif text-[#071B33]">
              Business Details & Contact Settings
            </h2>
            <p className="text-xs text-slate-500">
              Update phone numbers, WhatsApp, business hours, and address shown on the website.
            </p>
          </div>

          {settingsSuccess && (
            <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl border border-emerald-200 text-xs flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>{settingsSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Business Name</label>
                <input
                  type="text"
                  value={configForm.name}
                  onChange={(e) => setConfigForm({ ...configForm, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tagline</label>
                <input
                  type="text"
                  value={configForm.tagline}
                  onChange={(e) => setConfigForm({ ...configForm, tagline: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone Number (Formatted)</label>
                <input
                  type="text"
                  value={configForm.phoneFormatted}
                  onChange={(e) => setConfigForm({ ...configForm, phoneFormatted: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">WhatsApp Number (e.g. 918347511900)</label>
                <input
                  type="text"
                  value={configForm.whatsappNumber}
                  onChange={(e) => setConfigForm({ ...configForm, whatsappNumber: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Google Review Count</label>
                <input
                  type="number"
                  value={configForm.googleReviewCount}
                  onChange={(e) => setConfigForm({ ...configForm, googleReviewCount: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={configForm.email}
                  onChange={(e) => setConfigForm({ ...configForm, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Business Hours</label>
              <input
                type="text"
                value={configForm.businessHours}
                onChange={(e) => setConfigForm({ ...configForm, businessHours: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Office Address (Dakor)</label>
              <textarea
                rows={2}
                value={configForm.address}
                onChange={(e) => setConfigForm({ ...configForm, address: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#071B33] hover:bg-[#10243A] text-white font-bold rounded-xl transition-all"
              >
                Save Business Information
              </button>
            </div>
          </form>
        </div>
      )}

      {/* PACKAGE EDIT MODAL */}
      {editingPackage && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold font-serif text-[#071B33]">
                {isNewPackage ? 'Add Tour Package' : 'Edit Tour Package'}
              </h3>
              <button onClick={() => setEditingPackage(null)} className="p-1 hover:bg-slate-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePackage} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={editingPackage.title}
                  onChange={(e) => setEditingPackage({ ...editingPackage, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Destination</label>
                  <input
                    type="text"
                    required
                    value={editingPackage.destination}
                    onChange={(e) => setEditingPackage({ ...editingPackage, destination: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={editingPackage.category}
                    onChange={(e) => setEditingPackage({ ...editingPackage, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  >
                    <option value="domestic">Domestic</option>
                    <option value="international">International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Duration</label>
                  <input
                    type="text"
                    value={editingPackage.duration}
                    onChange={(e) => setEditingPackage({ ...editingPackage, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Starting Price</label>
                  <input
                    type="text"
                    value={editingPackage.startingPrice}
                    onChange={(e) => setEditingPackage({ ...editingPackage, startingPrice: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Cover Image URL</label>
                <input
                  type="text"
                  value={editingPackage.coverImage}
                  onChange={(e) => setEditingPackage({ ...editingPackage, coverImage: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Overview</label>
                <textarea
                  rows={2}
                  value={editingPackage.overview}
                  onChange={(e) => setEditingPackage({ ...editingPackage, overview: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingPackage(null)}
                  className="px-4 py-2 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0878C9] text-white font-bold rounded-xl"
                >
                  Save Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VEHICLE EDIT MODAL */}
      {editingVehicle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full text-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold font-serif text-[#071B33]">
                {isNewVehicle ? 'Add Vehicle' : 'Edit Vehicle'}
              </h3>
              <button onClick={() => setEditingVehicle(null)} className="p-1 hover:bg-slate-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveVehicle} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Vehicle Name</label>
                <input
                  type="text"
                  required
                  value={editingVehicle.name}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Category</label>
                  <select
                    value={editingVehicle.category}
                    onChange={(e) => setEditingVehicle({ ...editingVehicle, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  >
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Seating Capacity</label>
                  <input
                    type="text"
                    value={editingVehicle.seatingCapacity}
                    onChange={(e) => setEditingVehicle({ ...editingVehicle, seatingCapacity: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Rate per KM</label>
                  <input
                    type="text"
                    value={editingVehicle.ratePerKm}
                    onChange={(e) => setEditingVehicle({ ...editingVehicle, ratePerKm: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Local Package Rate</label>
                  <input
                    type="text"
                    value={editingVehicle.localPackageRate}
                    onChange={(e) => setEditingVehicle({ ...editingVehicle, localPackageRate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingVehicle.image}
                  onChange={(e) => setEditingVehicle({ ...editingVehicle, image: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingVehicle(null)}
                  className="px-4 py-2 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0878C9] text-white font-bold rounded-xl"
                >
                  Save Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
