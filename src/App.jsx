import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import TrustedBrands from './components/TrustedBrands';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="trusted-brands">
        <TrustedBrands />
      </section>
      <Footer />
    </div>
  );
};

export default App;
