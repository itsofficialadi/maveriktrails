import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

// Import images
import nationalParks from '/src/assets/nationalpark-min.jpeg';
import wildlifeSanctuaries from '/src/assets/wildlife-sanctury-min.jpeg';
import ecoVillages from '/src/assets/eco-villages-min.jpeg';

const experienceOptions = [
  { name: "National Parks", path: "/national-parks", image: nationalParks, description: "Explore India's beautiful national parks." },
  { name: "Wildlife Sanctuaries", path: "/wildlife-sanctuaries", image: wildlifeSanctuaries, description: "Visit the diverse wildlife sanctuaries." },
  { name: "Eco-villages", path: "/eco-villages", image: ecoVillages, description: "Experience sustainable living in eco-villages." },
];

const ExperienceNature = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Experience Nature
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {experienceOptions.map((option) => (
          <Link to={option.path} key={option.name} className="group" data-aos="fade-up">
            <motion.div
              className="relative w-full h-80 flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${option.image})` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">{option.name}</h2>
                  <p className="text-white">{option.description}</p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExperienceNature;
