import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { GeoQuestPasswordReset } from './components/GeoQuestPasswordReset';
import { Toaster } from './components/ui/sonner';
import { motion } from 'motion/react';
import quantumAtom from 'figma:asset/2dc6162f6781f52470269ba74a0edb5177fcac0f.png';
import qbitrixLogo from 'figma:asset/6ccd07d6525d4a191b25f964cd502ff0936372b5.png';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#050b15]">
      {/* Floating logo pill */}
      <motion.div
        className="fixed top-6 left-8 z-50 flex items-center gap-0 px-8 py-0 rounded-full bg-gradient-to-r from-[#0a1628]/80 via-[#0d1b3a]/80 to-[#0f1e42]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-[#00ffe0]/20 overflow-hidden h-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-12 h-12">
          <img 
            src={quantumAtom} 
            alt="Qbitrix Quantum Atom" 
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,224,0.5)]"
          />
        </div>
        <img
          src={qbitrixLogo}
          alt="Qbitrix Logo"
          className="h-32 w-auto object-contain -ml-3"
        />
      </motion.div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/geoquest-privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/geoquest/password-reset" element={<GeoQuestPasswordReset />} />
      </Routes>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
          },
        }}
      />
    </BrowserRouter>
  );
}