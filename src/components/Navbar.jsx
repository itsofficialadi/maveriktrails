import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)', // Ensure smooth transition
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)', // Ensure blur effect transitions
    });
  }, [isScrolled]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} flex justify-between items-center p-6 transition-all duration-300`}>
      <div className="text-white text-2xl font-bold">MaverikTrails</div>
      <ul className="hidden md:flex space-x-8 text-white">
        {['Footprint Calculator', 'Gallery', 'Testimonial', 'Contact', 'Blog'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-primary-dark transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a href="/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;
