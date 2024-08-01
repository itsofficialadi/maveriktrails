import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update navbar style on scroll
  useEffect(() => {
    gsap.to('.navbar', {
      duration: 0.3,
      opacity: isScrolled ? 0.9 : 1,
      ease: 'power2.out',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
    });
  }, [isScrolled]);

  // Animate current link
  useEffect(() => {
    const currentLink = document.querySelector(`.nav-link[href='${location.pathname}']`);
    if (currentLink) {
      gsap.fromTo(currentLink, { scale: 1.2 }, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    }
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to element with offset for fixed navbar
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Adjust this value to offset for your fixed navbar height
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  // Handle link click for smooth scroll
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname === '/') {
      scrollToElement(id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} flex justify-between items-center p-6 transition-all duration-300 bg-transparent`}>
      <Link to="/" className="text-black text-2xl font-bold">
        <img src="./Maverick_trails-removebg-preview.png" alt="MaverickTrails Logo" className="h-12" />
      </Link>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      <ul className="hidden md:flex space-x-8 text-black">
        <li>
          <Link to="/carbon-footprint-calculator" className={`nav-link hover:text-primary-dark transition ${location.pathname === '/carbon-footprint-calculator' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Footprint Calculator</Link>
        </li>
        <li>
          <a href="#testimonials" className={`nav-link hover:text-primary-dark transition ${location.pathname === '#testimonials' ? 'text-primary' : ''}`} onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonial</a>
        </li>
        <li>
          <Link to="/contact" className={`nav-link hover:text-primary-dark transition ${location.pathname === '/contact' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/our-team" className={`nav-link hover:text-primary-dark transition ${location.pathname === '/our-team' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Our Team</Link>
        </li>
      </ul>
      {location.pathname !== '/login' && (
        <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
          Get Started
        </Link>
      )}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link to="/" className="text-black text-2xl font-bold" onClick={closeMobileMenu}>
            <img src="/Maverick_trails-removebg-preview.png" alt="MaverickTrails Logo" className="h-12" />
          </Link>
          <button onClick={closeMobileMenu} className="text-black focus:outline-none">
            <FaTimes size={28} />
          </button>
        </div>
        <ul className="flex flex-col items-center mt-10 text-black">
          <li className="w-full text-center py-4 border-b border-gray-200 bg-gray-100">
            <Link to="/carbon-footprint-calculator" className={`nav-link text-xl hover:text-primary-dark transition ${location.pathname === '/carbon-footprint-calculator' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Footprint Calculator</Link>
          </li>
          <li className="w-full text-center py-4 border-b border-gray-200 bg-gray-100">
            <a href="#testimonials" className={`nav-link text-xl hover:text-primary-dark transition ${location.pathname === '#testimonials' ? 'text-primary' : ''}`} onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonial</a>
          </li>
          <li className="w-full text-center py-4 border-b border-gray-200 bg-gray-100">
            <Link to="/contact" className={`nav-link text-xl hover:text-primary-dark transition ${location.pathname === '/contact' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className="w-full text-center py-4 border-b border-gray-200 bg-gray-100">
            <Link to="/our-team" className={`nav-link text-xl hover:text-primary-dark transition ${location.pathname === '/our-team' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>Our Team</Link>
          </li>
          {location.pathname !== '/login' && (
            <li className="w-full text-center py-4 border-b border-gray-200 bg-gray-100">
              <Link to="/login" className="bg-primary text-white px-6 py-3 rounded-lg text-xl hover:bg-primary-dark transition inline-block" onClick={closeMobileMenu}>Get Started</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
