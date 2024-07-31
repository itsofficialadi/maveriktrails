import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const regions = [
  { name: "North India", path: "/north-india", image: "/src/assets/taj-mahal-min.jpeg" },
  { name: "South India", path: "/south-india", image: "/src/assets/hampi-min.jpg" },
  { name: "East India", path: "/east-india", image: "/src/assets/tibetian-flags-min.jpg" },
  { name: "West India", path: "/west-india", image: "/src/assets/jaipur-min.jpg" },
  { name: "Central India", path: "/central-india", image: "/src/assets/sanchi-min.jpg" },
];

const ExploreIndia = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Explore India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {regions.map((region) => (
          <Link to={region.path} key={region.name} className="group relative block bg-white rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
            <div className="relative w-full h-96">
              <img
                src={region.image}
                alt={region.name}
                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-4 px-6">
                <h2 className="text-2xl font-bold">{region.name}</h2>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer">
                  Explore {region.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreIndia;
