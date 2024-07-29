import React from 'react';
import 'aos/dist/aos.css';

// Sample images for North India
import rishikesh from '/src/india/NorthIMG/rishikesh-min.jpg';
import manali from '/src/india/NorthIMG/manali-min.jpg';
import gulmarg from '/src/india/NorthIMG/gulmarg-min.jpg';
import haridwar from '/src/india/NorthIMG/Haridwar-min.jpg';
import leh from '/src/india/NorthIMG/leh-min.jpg';
import mcleodganj from '/src/india/NorthIMG/mcleodganj-min.jpg';
import nanital from '/src/india/NorthIMG/nanital-min.jpg';
import srinagar from '/src/india/NorthIMG/srinagar-min.jpg';

const destinations = [
  {
    image: rishikesh,
    title: 'Rishikesh, Uttarakhand',
    description: 'Famous for yoga and spiritual retreats, Rishikesh promotes eco-tourism with organic eateries, green lodges, and river conservation efforts.',
  },
  {
    image: manali,
    title: 'Manali, Himachal Pradesh',
    description: 'Known for its beautiful landscapes and eco-friendly tourism practices, including sustainable accommodations and waste management initiatives.',
  },
  {
    image: gulmarg,
    title: 'Gulmarg, Kashmir',
    description: 'A popular ski resort committed to maintaining its natural beauty through sustainable practices, including waste management and eco-friendly accommodations.',
  },
  {
    image: haridwar,
    title: 'Haridwar, Uttarakhand',
    description: 'A significant pilgrimage site on the banks of the Ganges, Haridwar is committed to maintaining the river\'s cleanliness and promoting sustainable practices.',
  },
  {
    image: leh,
    title: 'Leh, Ladakh',
    description: 'Leh, the capital of Ladakh, is a pioneer in eco-tourism with a focus on protecting its fragile high-altitude environment through solar-powered accommodations and waste management systems.',
  },
  {
    image: mcleodganj,
    title: 'McLeod Ganj, Himachal Pradesh',
    description: 'Known for its Tibetan culture and spirituality, McLeod Ganj supports sustainable tourism with eco-friendly guesthouses and conservation projects.',
  },
  {
    image: nanital,
    title: 'Nainital, Uttarakhand',
    description: 'Known for its picturesque lake, Nainital promotes sustainable tourism with eco-friendly hotels and initiatives aimed at preserving the lake and surrounding forests.',
  },
  {
    image: srinagar,
    title: 'Srinagar, Jammu & Kashmir',
    description: 'Known for its houseboats and gardens, Srinagar emphasizes sustainability with eco-friendly houseboat operators and conservation efforts to preserve its unique aquatic and garden ecosystems.',
  },
];

const NorthIndia = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        North India
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

export default NorthIndia;
