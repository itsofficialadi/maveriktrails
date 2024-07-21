import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import TrustedBrands from './components/TrustedBrands';
import Footer from './components/Footer';
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator';
import CustomCursor from './CustomCursor';

const App = () => {
  return (
    <div className="bg-background min-h-screen font-sans">
      <CustomCursor />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <CarbonFootprintCalculator />
      <section id="trusted-brands">
        <TrustedBrands />
      </section>
      <Footer />
    </div>
  );
};

export default App;
