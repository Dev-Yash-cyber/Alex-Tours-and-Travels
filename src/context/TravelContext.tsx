import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessConfig, TourPackage, Vehicle, CustomerEnquiry, Testimonial } from '../types';
import { INITIAL_BUSINESS_CONFIG, INITIAL_PACKAGES, INITIAL_VEHICLES, INITIAL_TESTIMONIALS, INITIAL_ENQUIRIES } from '../data/travelData';

interface ModalPrefill {
  destination?: string;
  packageName?: string;
  vehicleName?: string;
  serviceRequired?: CustomerEnquiry['serviceRequired'];
}

interface TravelContextType {
  businessConfig: BusinessConfig;
  updateBusinessConfig: (config: BusinessConfig) => void;
  packages: TourPackage[];
  addPackage: (pkg: TourPackage) => void;
  updatePackage: (pkg: TourPackage) => void;
  deletePackage: (id: string) => void;
  vehicles: Vehicle[];
  addVehicle: (veh: Vehicle) => void;
  updateVehicle: (veh: Vehicle) => void;
  deleteVehicle: (id: string) => void;
  testimonials: Testimonial[];
  enquiries: CustomerEnquiry[];
  submitEnquiry: (data: Omit<CustomerEnquiry, 'id' | 'createdAt' | 'status'>) => CustomerEnquiry;
  updateEnquiryStatus: (id: string, status: CustomerEnquiry['status']) => void;
  deleteEnquiry: (id: string) => void;
  
  // Modal controllers
  isEnquiryModalOpen: boolean;
  enquiryModalPrefill: ModalPrefill | null;
  openEnquiryModal: (prefill?: ModalPrefill) => void;
  closeEnquiryModal: () => void;
  
  activeDetailPackage: TourPackage | null;
  openPackageDetail: (pkg: TourPackage) => void;
  closePackageDetail: () => void;

  // WhatsApp & Phone Helpers
  buildWhatsAppUrl: (customMessage?: string) => string;
  
  // Admin auth
  isAdminLoggedIn: boolean;
  adminLogin: (pass: string) => boolean;
  adminLogout: () => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  CONFIG: 'alex_travel_config_v1',
  PACKAGES: 'alex_travel_packages_v1',
  VEHICLES: 'alex_travel_vehicles_v1',
  ENQUIRIES: 'alex_travel_enquiries_v1',
  ADMIN_AUTH: 'alex_travel_admin_auth_v1'
};

export const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [businessConfig, setBusinessConfig] = useState<BusinessConfig>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.CONFIG);
    return saved ? JSON.parse(saved) : INITIAL_BUSINESS_CONFIG;
  });

  const [packages, setPackages] = useState<TourPackage[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.PACKAGES);
    return saved ? JSON.parse(saved) : INITIAL_PACKAGES;
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.VEHICLES);
    return saved ? JSON.parse(saved) : INITIAL_VEHICLES;
  });

  const [enquiries, setEnquiries] = useState<CustomerEnquiry[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.ENQUIRIES);
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalPrefill, setEnquiryModalPrefill] = useState<ModalPrefill | null>(null);
  const [activeDetailPackage, setActiveDetailPackage] = useState<TourPackage | null>(null);

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CONFIG, JSON.stringify(businessConfig));
  }, [businessConfig]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.VEHICLES, JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  const updateBusinessConfig = (config: BusinessConfig) => {
    setBusinessConfig(config);
  };

  const addPackage = (pkg: TourPackage) => {
    setPackages(prev => [pkg, ...prev]);
  };

  const updatePackage = (updated: TourPackage) => {
    setPackages(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  const deletePackage = (id: string) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  };

  const addVehicle = (veh: Vehicle) => {
    setVehicles(prev => [veh, ...prev]);
  };

  const updateVehicle = (updated: Vehicle) => {
    setVehicles(prev => prev.map(v => (v.id === updated.id ? updated : v)));
  };

  const deleteVehicle = (id: string) => {
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  const submitEnquiry = (data: Omit<CustomerEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: CustomerEnquiry = {
      ...data,
      id: `enq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const updateEnquiryStatus = (id: string, status: CustomerEnquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  const openEnquiryModal = (prefill?: ModalPrefill) => {
    setEnquiryModalPrefill(prefill || null);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryModalPrefill(null);
  };

  const openPackageDetail = (pkg: TourPackage) => {
    setActiveDetailPackage(pkg);
  };

  const closePackageDetail = () => {
    setActiveDetailPackage(null);
  };

  const buildWhatsAppUrl = (customMessage?: string) => {
    const defaultText = `Hello Alex Tours and Travels, I am interested in planning a trip with you. Please share the details, pricing, itinerary, and availability.`;
    const textToSend = customMessage || defaultText;
    return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
  };

  const adminLogin = (pass: string) => {
    // Default admin passcode: admin123
    if (pass === 'admin123' || pass === 'alex2026') {
      setIsAdminLoggedIn(true);
      localStorage.setItem(LOCAL_STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ADMIN_AUTH);
  };

  return (
    <TravelContext.Provider
      value={{
        businessConfig,
        updateBusinessConfig,
        packages,
        addPackage,
        updatePackage,
        deletePackage,
        vehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        testimonials,
        enquiries,
        submitEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        isEnquiryModalOpen,
        enquiryModalPrefill,
        openEnquiryModal,
        closeEnquiryModal,
        activeDetailPackage,
        openPackageDetail,
        closePackageDetail,
        buildWhatsAppUrl,
        isAdminLoggedIn,
        adminLogin,
        adminLogout
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};
