import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import trekkingHiking from '/src/assets/trekking-min.jpg';
import wildlifeSafari from '/src/assets/wildlife-safari-min.jpeg';
import waterActivities from '/src/assets/river-rafting-min.jpg';

const activityOptions = [
  { name: "Trekking and Hiking", path: "/trekking-hiking", image: trekkingHiking, description: "Highlight eco-friendly trekking routes like those in the Himalayas, Western Ghats, etc." },
  { name: "Wildlife Safaris", path: "/wildlife-safaris", image: wildlifeSafari, description: "Provide information on responsible wildlife safaris." },
  { name: "Water Activities", path: "/water-activities", image: waterActivities, description: "Feature eco-friendly water activities like kayaking in Kerala's backwaters." },
];

const Activities = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Activities
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {activityOptions.map((option) => (
          <Link to={option.path} key={option.name} className="group relative block rounded-full overflow-hidden shadow-lg" data-aos="fade-up">
            <div className="relative w-full h-80 flex items-center justify-center bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105" style={{ backgroundImage: `url(${option.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 rounded-full"></div>
              <div className="relative z-10 p-6 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">{option.name}</h2>
                <p className="hidden group-hover:block bg-primary-dark px-4 py-2 rounded-full">{option.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Activities;
