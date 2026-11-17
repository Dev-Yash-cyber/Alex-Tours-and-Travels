import React, { useState, useEffect } from 'react';
import { TravelProvider } from './context/TravelContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { PackageDetailModal } from './components/PackageDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { DomesticPage } from './pages/DomesticPage';
import { InternationalPage } from './pages/InternationalPage';
import { CarsPage } from './pages/CarsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    // Read hash on initial load if present
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'packages', 'domestic', 'international', 'cars', 'contact', 'admin'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Sync hash with currentTab
  useEffect(() => {
    window.location.hash = currentTab;
  }, [currentTab]);

  // Listen to hash changes (e.g. back button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'packages', 'domestic', 'international', 'cars', 'contact', 'admin'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] text-[#071B33]">
      {/* Sticky Navbar */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentTab === 'home' && <HomePage setCurrentTab={setCurrentTab} />}
        {currentTab === 'about' && <AboutPage setCurrentTab={setCurrentTab} />}
        {currentTab === 'packages' && <PackagesPage />}
        {currentTab === 'domestic' && <DomesticPage />}
        {currentTab === 'international' && <InternationalPage />}
        {currentTab === 'cars' && <CarsPage />}
        {currentTab === 'contact' && <ContactPage />}
        {currentTab === 'admin' && <AdminPage />}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Modals & Overlays */}
      <FloatingWhatsApp />
      <EnquiryModal />
      <PackageDetailModal />
    </div>
  );
}

export function App() {
  return (
    <TravelProvider>
      <AppContent />
    </TravelProvider>
  );
}

export default App;
