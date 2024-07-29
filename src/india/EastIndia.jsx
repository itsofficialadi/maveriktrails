import React from 'react';
import 'aos/dist/aos.css';

// Sample images for East India
import majuli from '/src/india/EastIMG/Majuli.jpg';
import Patratu from '/src/india/EastIMG/Patratu.jpg';
import Puri from '/src/india/EastIMG/Puri.jpg';
import Shilong from '/src/india/EastIMG/Shillong.jpg';
import SikkimFarming from '/src/india/EastIMG/SikkimFarming.jpg';
import Jorhat from '/src/india/EastIMG/Jorhat.jpg';
import bhubaneswar from '/src/india/EastIMG/Bhubaneswar.jpg';
import cooch from '/src/india/EastIMG/Cooch.jpg';

const destinations = [
  {
    image: majuli,
    title: 'Majuli Island, Assam',
    description: 'This river island is dedicated to preserving its unique ecology and cultural heritage through sustainable tourism practices and community involvement in conservation efforts.',
  },
  {
    image: Patratu,
    title: 'Partratu, Jharkhand',
    description: 'The capital city of Jharkhand, Ranchi is developing its eco-tourism sector with green hotels and initiatives aimed at preserving its natural beauty and promoting sustainable practices.',
  },
  {
    image: Puri,
    title: 'Puri, Odisha',
    description: 'Puri focuses on sustainable tourism by promoting beach conservation and responsible travel practices. The city is involved in maintaining the cleanliness of its beaches and local environment.',
  },
  {
    image: Shilong,
    title: 'Shilong, Meghalaya',
    description: ' Nestled in the hills, Shillong is known for its commitment to eco-tourism and sustainability, with green accommodations and efforts to preserve its natural beauty.',
  },
  {
    image: SikkimFarming,
    title: 'Sikkim',
    description: 'The entire state of Sikkim is a model for eco-tourism with its commitment to organic farming, conservation, and green energy. The state has implemented various sustainable practices across its tourism sector.',
  },
  {
    image: Jorhat,
    title: 'Jorhat, Assam',
    description: 'An important gateway to tea plantations and wildlife sanctuaries, Jorhat promotes eco-tourism with sustainable practices in its tea estates and conservation efforts in nearby areas.',
  },
  {
    image: bhubaneswar,
    title: 'Bhubaneswar, Odisha',
    description: ' Known for its historic temples and green spaces, Bhubaneswar is adopting eco-friendly practices in tourism and urban planning to enhance sustainability.',
  },
  {
    image: cooch,
    title: 'Cooch, West Bengal',
    description: 'This historic town is focusing on sustainable tourism with eco-friendly accommodations and conservation initiatives to preserve its heritage and natural surroundings.',
  },
];

const EastIndia = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        East India
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

export default EastIndia;
