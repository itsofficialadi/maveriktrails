import React from 'react';

const Hero = () => {
  return (
    <div className="text-center text-white py-20">
      <h1 className="text-5xl font-bold">A Sustainable way to travel.</h1>
      <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <div className="mt-8">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition mr-4">
          Get started
        </button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
