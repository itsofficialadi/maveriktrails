import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-white text-2xl font-bold">Astrolus</div>
      <ul className="hidden md:flex space-x-8 text-white">
        {['Footprint Calculator', 'Gallery', 'Testimonial', 'Contact', 'Blog'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
