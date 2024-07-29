import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Features';
import TrustedBrands from './components/TrustedBrands';
import Footer from './components/Footer';
import About from './components/About';
import CarbonFootprintCalculator from './components/CarbonFootprintCalculator';
import CustomCursor from './CustomCursor';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import { useNavigate } from 'react-router-dom';
import ExploreIndia from './components/ExploreIndia';
import NorthIndia from './india/NorthIndia';
import StayGreen from './stays/StayGreen';
import Activities from './activities/activities';
import ExperienceNature from './components/ExperienceNature';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? '' : 'pt-20'}>
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="explore-india">
              <ExploreIndia />
            </section>
            <section id="stay-green">
              <StayGreen/>
              </section>
              <section id="activities">
              <Activities/>
              <section id="experience-nature">
              <ExperienceNature/>
              </section>
              </section>
            <section id="features">
              <Features />
            </section>
            <section id="trusted-brands">
              <TrustedBrands />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/carbon-footprint-calculator" element={<CarbonFootprintCalculator />} />
        <Route path="/our-team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="north-india" element={<NorthIndia />} />
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
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
