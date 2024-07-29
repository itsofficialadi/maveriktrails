import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Central India
import bandhavgarh from '/src/india/CentralIMG/bandhavgarh-min.jpeg';
import gwalior from '/src/india/CentralIMG/gwalior-min.jpeg';
import kanger from '/src/india/CentralIMG/kanger-valley-national-park-min.jpeg';
import pachmarhi from '/src/india/CentralIMG/pachmari-min.jpeg';
import sanchi from '/src/india/CentralIMG/sanchi-min.jpeg';
import sanjay from '/src/india/CentralIMG/sanjay-dubri-tiger-reserve-min.jpeg';
import satpura from '/src/india/CentralIMG/Satpura-min.jpeg';
import sirpur from '/src/india/CentralIMG/Sirpur-min.jpeg';

const destinations = [
  {
    image: bandhavgarh,
    title: 'Bandhavgarh National Park, Madhya Pradesh',
    description: 'Home to a large population of Bengal tigers, Bandhavgarh promotes eco-tourism through sustainable safari practices and wildlife conservation efforts.',
  },
  {
    image: gwalior,
    title: 'Gwalior, Madhya Pradesh',
    description: 'Known for its majestic fort and rich history, Gwalior supports sustainable tourism by preserving its historical monuments and promoting eco-friendly travel.',
  },
  {
    image: kanger,
    title: 'Kanger Valley National Park, Chhattisgarh',
    description: 'A biodiversity hotspot with unique limestone caves and rich flora and fauna, Kanger Valley promotes eco-tourism through conservation and responsible travel.',
  },
  {
    image: pachmarhi,
    title: 'Pachmarhi, Madhya Pradesh',
    description: 'A picturesque hill station in the Satpura Range, Pachmarhi emphasizes sustainable tourism with eco-friendly accommodations and conservation of its natural beauty.',
  },
  {
    image: sanchi,
    title: 'Sanchi, Madhya Pradesh',
    description: 'Famous for its ancient stupas and Buddhist monuments, Sanchi promotes sustainable tourism through the preservation of its archaeological heritage.',
  },
  {
    image: sanjay,
    title: 'Sanjay-Dubri Tiger Reserve, Madhya Pradesh',
    description: 'A significant tiger habitat, the Sanjay-Dubri Tiger Reserve focuses on wildlife conservation and sustainable eco-tourism practices.',
  },
  {
    image: satpura,
    title: 'Satpura National Park, Madhya Pradesh',
    description: 'Known for its diverse wildlife and beautiful landscapes, Satpura National Park promotes eco-tourism with sustainable safari experiences and conservation initiatives.',
  },
  {
    image: sirpur,
    title: 'Sirpur, Chhattisgarh',
    description: 'An ancient town with significant archaeological sites, Sirpur supports sustainable tourism by preserving its historical artifacts and promoting responsible travel.',
  },
];

const CentralIndia = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Central India
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

export default CentralIndia;
