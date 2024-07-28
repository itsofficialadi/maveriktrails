import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


import ecoFriendlyResort from '/src/assets/eco-friendly-stays-min.jpg';
import homestays from '/src/assets/homestays-min.jpg';
import farmStays from '/src/assets/farmstays-min.jpg';

const stayOptions = [
  { name: "Eco-friendly Resorts", path: "/eco-friendly-resorts", image: ecoFriendlyResort },
  { name: "Homestays", path: "/homestays", image: homestays },
  { name: "Farm Stays", path: "/farm-stays", image: farmStays },
];

const StayGreen = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Stay Green
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stayOptions.map((option) => (
          <Link to={option.path} key={option.name} className="group relative block bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
            <div className="relative w-full h-96 flex items-center justify-center bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105" style={{ backgroundImage: `url(${option.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
              <div className="relative z-10 p-6 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">{option.name}</h2>
                <p className="hidden group-hover:block bg-primary-dark px-4 py-2 rounded-full">Explore {option.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StayGreen;
