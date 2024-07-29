import React from 'react';
import 'aos/dist/aos.css';

// Sample images for West India
import alibaug from '/src/india/WestIND/alibaug-min.jpeg';
import daman from '/src/india/WestIND/daman-min.jpeg';
import goa from '/src/india/WestIND/goa-min.jpg';
import jaisalmer from '/src/india/WestIND/jaisalmer-min.jpeg';
import khandala from '/src/india/WestIND/khandala-min.jpeg';
import matheran from '/src/india/WestIND/Matheran-min.jpeg';
import mount from '/src/india/WestIND/mount-abu-min.jpeg';
import udaipur from '/src/india/WestIND/udaipur-min.jpeg';

const destinations = [
  {
    image: alibaug,
    title: 'Alibaug, Maharashtra',
    description: 'Known for its beaches and historic forts, Alibaug promotes eco-friendly tourism with sustainable lodging and clean beach initiatives.',
  },
  {
    image: daman,
    title: 'Daman, Daman and Diu',
    description: 'A coastal town famous for its beaches and colonial architecture, Daman emphasizes sustainable tourism by preserving its natural and cultural heritage.',
  },
  {
    image: goa,
    title: 'Goa',
    description: 'Renowned for its beaches, nightlife, and Portuguese heritage, Goa promotes eco-tourism through sustainable beach management and conservation projects.',
  },
  {
    image: jaisalmer,
    title: 'Jaisalmer, Rajasthan',
    description: 'Known as the Golden City, Jaisalmer focuses on preserving its desert ecosystem and historic forts through sustainable tourism practices.',
  },
  {
    image: khandala,
    title: 'Khandala, Maharashtra',
    description: 'A popular hill station near Mumbai, Khandala emphasizes eco-friendly tourism by promoting conservation of its natural landscapes and biodiversity.',
  },
  {
    image: matheran,
    title: 'Matheran, Maharashtra',
    description: 'Asia’s only automobile-free hill station, Matheran is committed to preserving its environment through sustainable tourism practices.',
  },
  {
    image: mount,
    title: 'Mount Abu, Rajasthan',
    description: 'The only hill station in Rajasthan, Mount Abu promotes eco-friendly tourism through conservation efforts and sustainable accommodations.',
  },
  {
    image: udaipur,
    title: 'Udaipur, Rajasthan',
    description: 'Known as the City of Lakes, Udaipur emphasizes sustainable tourism by preserving its lakes and historical sites through various conservation initiatives.',
  },
];

const WestIndia = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        West India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{dest.title}</h2>
              <p className="mt-2">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WestIndia;
