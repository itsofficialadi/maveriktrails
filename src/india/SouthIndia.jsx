import React from 'react';
import 'aos/dist/aos.css';

// Sample images for South India
import auroville from '/src/india/SouthIMG/auroville-village-min.jpg';
import coorg from '/src/india/SouthIMG/coorg-min.jpeg';
import hampi from '/src/india/SouthIMG/hampi-min.jpg';
import kumarakom from '/src/india/SouthIMG/Kumarakom-min.jpeg';
import munnar from '/src/india/SouthIMG/munnar-min.jpg';
import mysore from '/src/india/SouthIMG/Mysore-min.jpg';
import ooty from '/src/india/SouthIMG/ooty-min.jpg';
import pondicherry from '/src/india/SouthIMG/Pondicherry-min.png';

const destinations = [
  {
    image: auroville,
    title: 'Auroville, Tamil Nadu',
    description: 'Auroville is an experimental township dedicated to the ideal of human unity, emphasizing sustainable living and ecological practices.',
  },
  {
    image: coorg,
    title: 'Coorg, Karnataka',
    description: 'Coorg, known as the Scotland of India, is famous for its coffee plantations and eco-friendly tourism practices that promote conservation and community involvement.',
  },
  {
    image: hampi,
    title: 'Hampi, Karnataka',
    description: 'A UNESCO World Heritage Site, Hampi focuses on preserving its ancient ruins while promoting sustainable tourism to minimize environmental impact.',
  },
  {
    image: kumarakom,
    title: 'Kumarakom, Kerala',
    description: 'Kumarakom is a cluster of small islands famous for its backwaters, promoting eco-tourism through responsible travel and conservation efforts.',
  },
  {
    image: munnar,
    title: 'Munnar, Kerala',
    description: 'Munnar, known for its tea plantations, practices sustainable tourism by promoting organic farming and eco-friendly lodging options.',
  },
  {
    image: mysore,
    title: 'Mysore, Karnataka',
    description: 'Mysore, known for its rich cultural heritage, supports sustainable tourism by preserving its historical sites and promoting green practices among its tourism industry.',
  },
  {
    image: ooty,
    title: 'Ooty, Tamil Nadu',
    description: 'Ooty, a popular hill station, emphasizes sustainable tourism by promoting eco-friendly accommodations and waste management initiatives.',
  },
  {
    image: pondicherry,
    title: 'Pondicherry, Puducherry',
    description: 'Pondicherry combines French colonial architecture with Indian traditions, supporting sustainable tourism through conservation of its cultural heritage and natural resources.',
  },
];

const SouthIndia = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        South India
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

export default SouthIndia;