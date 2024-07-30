import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Eco-Friendly Resorts
import machan from '/src/stays/ResortIMG/machan-min.jpg';
import swaswara from '/src/stays/ResortIMG/SwaSwara-min.jpg';
import coconutLagoon from '/src/stays/ResortIMG/Coconut-Lagoon-min.jpg';
import diphlu from '/src/stays/ResortIMG/diphlu-min.jpg';
import banasura from '/src/stays/ResortIMG/Banasura-min.jpg';
import spiceVillage from '/src/stays/ResortIMG/Spice-Village-min.jpg';
import Orange from '/src/stays/ResortIMG/Orange-County-min.jpg';
import vanghat from '/src/stays/ResortIMG/vanghat-min.jpeg';
import barefoot from '/src/stays/ResortIMG/Barefoot-min.jpg';
import rainforestRetreat from '/src/stays/ResortIMG/Rainforest-Retreat-min.jpeg';

const destinations = [
  {
    image: machan,
    title: 'The Machan',
    address: 'Private Road, Village Jambulne, Atvan, Maharashtra 410401, India',
    description: 'The Machan is a luxury eco-resort offering tree houses set amidst a private tropical forest in the Western Ghats. Each Machan (tree house) is designed to minimize the impact on the environment.',
    features: [
      'Solar power',
      'Rainwater harvesting',
      'Organic toiletries',
      'No TV policy to enhance the natural experience',
      'Activities like trekking, bird watching, and star gazing'
    ]
  },
  {
    image: swaswara,
    title: 'SwaSwara',
    address: 'Om Beach, Donibhail, Gokarna, Karnataka 581326, India',
    description: 'SwaSwara is a wellness retreat focusing on holistic healing and sustainable living. It offers a serene environment with yoga and meditation sessions.',
    features: [
      'Organic farm-to-table dining',
      'Rainwater harvesting',
      'Waste management systems',
      'Ayurvedic treatments',
      'Art yoga and meditation programs'
    ]
  },
  {
    image: coconutLagoon,
    title: 'CGH Earth - Coconut Lagoon',
    address: 'Kumarakom, Kottayam, Kerala 686563, India',
    description: 'Coconut Lagoon is an eco-friendly resort in the Kerala backwaters, featuring traditional Kerala-style cottages. It emphasizes sustainable tourism and cultural preservation.',
    features: [
      'Organic farming',
      'Biogas plant',
      'Water recycling',
      'Traditional cultural experiences',
      'Canoeing and bird watching tours'
    ]
  },
  {
    image: diphlu,
    title: 'Diphlu River Lodge',
    address: 'P.O. Kuthari, Kaziranga National Park, Assam 785609, India',
    description: 'Diphlu River Lodge is an eco-friendly lodge near Kaziranga National Park, offering a blend of luxury and sustainability with views of the Diphlu River.',
    features: [
      'Solar power',
      'Organic vegetable garden',
      'Waste management systems',
      'Wildlife safaris',
      'Bird watching and cultural performances'
    ]
  },
  {
    image: banasura,
    title: 'Banasura Hill Resort',
    address: 'Vellamunda, Wayanad, Kerala 670731, India',
    description: 'Nestled in the lush hills of Wayanad, Banasura Hill Resort is built using mud architecture and offers a rustic yet luxurious experience.',
    features: [
      'Rainwater harvesting',
      'Solar energy',
      'Organic farming',
      'Ayurvedic spa treatments',
      'Trekking and nature walks'
    ]
  },
  {
    image: spiceVillage,
    title: 'Spice Village',
    address: 'Kumily, Thekkady, Kerala 685536, India',
    description: 'Located near Periyar Wildlife Sanctuary, Spice Village is an eco-friendly resort designed to resemble a tribal village, offering a unique blend of comfort and sustainability.',
    features: [
      'Solar power',
      'Organic vegetable garden',
      'Waste management',
      'Ayurvedic treatments',
      'Guided nature walks and wildlife safaris'
    ]
  },
  {
    image: Orange,
    title: 'Orange County (Evolve Back)',
    address: 'Siddapur, Coorg, Karnataka 571253, India',
    description: 'Evolve Back in Coorg is a luxury eco-resort known for its sustainable practices and serene environment amidst coffee plantations and forests.',
    features: [
      'Solar heating',
      'Organic farming',
      'Waste management systems',
      'Ayurvedic spa',
      'Plantation tours and nature walks'
    ]
  },
  {
    image: vanghat,
    title: 'Vanghat',
    address: 'Jim Corbett National Park, Uttarakhand 244715, India',
    description: 'Vanghat is a remote eco-lodge situated along the Ramganga River in the Jim Corbett National Park buffer zone, focusing on wildlife conservation and sustainable tourism.',
    features: [
      'Solar power',
      'Minimal plastic use',
      'Organic vegetable garden',
      'Bird watching and wildlife safaris',
      'Riverside relaxation and nature walks'
    ]
  },
  {
    image: barefoot,
    title: 'Barefoot at Havelock',
    address: 'Beach No. 7, Radha Nagar Village, Havelock Island, Andaman & Nicobar Islands 744211, India',
    description: 'Barefoot at Havelock is an eco-friendly resort on Havelock Island, known for its sustainable practices and pristine natural surroundings.',
    features: [
      'Solar energy',
      'Organic toiletries',
      'Rainwater harvesting',
      'Scuba diving and snorkeling',
      'Nature trails and beach walks'
    ]
  },
  {
    image: rainforestRetreat,
    title: 'Rainforest Retreat',
    address: 'Mojo Plantation, Galibeedu Post, Madikeri, Coorg, Karnataka 571201, India',
    description: 'Located in Coorg, Rainforest Retreat is an organic farm and eco-lodge offering a close-to-nature experience with sustainable practices.',
    features: [
      'Organic farming',
      'Solar power',
      'Rainwater harvesting',
      'Guided plantation tours',
      'Trekking and bird watching'
    ]
  }
];

const EcoFriendlyResorts = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top 10 Eco-Friendly Resorts in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{dest.title}</h2>
              <p className="italic text-sm mb-2">{dest.address}</p>
              <p className="mt-2">{dest.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {dest.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoFriendlyResorts;
