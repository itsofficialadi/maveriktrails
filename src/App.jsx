import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import TrustedBrands from './components/TrustedBrands';
import Footer from './components/Footer';
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator';
import CustomCursor from './CustomCursor';
import Login from './components/Login';
import TeamSection from './components/TeamSection';

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? '' : 'pt-20'}> {/* Conditionally apply padding */}
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="trusted-brands">
              <TrustedBrands />
            </section>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/carbon-footprint-calculator" element={<CarbonFootprintCalculator />} />
        <Route path="/our-team" element={<TeamSection />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen font-sans">
        <CustomCursor />
        <Navbar />
        <AppContent /> {/* Moved routing content into AppContent */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
