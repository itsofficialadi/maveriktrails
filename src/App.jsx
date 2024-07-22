import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import TrustedBrands from './components/TrustedBrands';
import Footer from './components/Footer';
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator';
import CustomCursor from './CustomCursor';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen font-sans">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
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
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
