import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Use useLocation hook to get the current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to('.navbar', {
      duration: 0.3,
      opacity: isScrolled ? 0.9 : 1, // Adjust opacity if needed
      ease: 'power2.out',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.6)', // Set default background color
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)', // Ensure blur effect transitions
    });
  }, [isScrolled]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} flex justify-between items-center p-6 transition-all duration-300 bg-black bg-opacity-60`}>
      <Link to="/" className="text-white text-2xl font-bold">
        <img src="src/assets/MaverikTrails-logo.png" alt="MaverikTrails Logo" className="h-12" /> {/* Update the src with the actual path to your logo */}
      </Link>
      <ul className="hidden md:flex space-x-8 text-white">
        {['Footprint Calculator', 'Gallery', 'Testimonial', 'Contact', 'Blog'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-primary-dark transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
      {location.pathname !== '/login' && ( // Conditionally render the button based on the path
        <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
