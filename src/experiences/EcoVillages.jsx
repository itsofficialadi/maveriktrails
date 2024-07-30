import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Eco Villages
import auroville from '/src/assets/Auroville-min.jpg';
import mawlynnong from '/src/experiences/EcoIMG/mawlynnong-min.jpeg';
import hodka from '/src/experiences/EcoIMG/hodka-min.jpg';
import piplantri from '/src/experiences/EcoIMG/piplantri-min.jpeg';
import govardhan from '/src/experiences/EcoIMG/govardhan-min.jpg';
import sanskriti from '/src/experiences/EcoIMG/sanskriti-min.jpg';
import jageshwar from '/src/experiences/EcoIMG/jageshwar-min.jpeg';
import munsiyari from '/src/experiences/EcoIMG/munsiyari-min.jpg';
import kokrebellur from '/src/experiences/EcoIMG/kokrebellur-min.jpeg';
import phyang from '/src/experiences/EcoIMG/phyang-min.jpeg';
import khonoma from '/src/experiences/EcoIMG/khonoma-min.jpeg';
import thembang from '/src/experiences/EcoIMG/thembang-min.jpg';

const villages = [
  {
    image: auroville,
    title: 'Auroville',
    address: 'Auroville, Tamil Nadu 605101, India',
    description: 'Founded in 1968, Auroville is an international community dedicated to sustainable living and spiritual growth. It focuses on green energy, organic farming, and innovative environmental projects.',
    features: [
      'Renewable energy systems',
      'Organic farming',
      'Community living',
      'Eco-friendly architecture',
      'Cultural and educational programs'
    ]
  },
  {
    image: mawlynnong,
    title: 'Mawlynnong Village',
    address: 'East Khasi Hills, Meghalaya 793109, India',
    description: 'Known as "God\'s Own Garden," Mawlynnong is renowned for its cleanliness and eco-friendly practices. The village promotes sustainable tourism and environmental conservation.',
    features: [
      'Clean and green environment',
      'Bamboo dustbins',
      'Community-based eco-tourism',
      'Rainwater harvesting',
      'Living root bridges'
    ]
  },
  {
    image: hodka,
    title: 'Hodka Village',
    address: 'Bhuj, Kutch District, Gujarat 370510, India',
    description: 'Hodka Village offers a unique cultural experience in the Rann of Kutch. The village promotes eco-tourism with traditional Bhunga houses and community-based tourism.',
    features: [
      'Traditional Bhunga accommodations',
      'Handicrafts and cultural workshops',
      'Solar energy',
      'Community-based tourism',
      'Desert safaris'
    ]
  },
  {
    image: piplantri,
    title: 'Piplantri Village',
    address: 'Rajsamand District, Rajasthan 313324, India',
    description: 'Piplantri is famous for its unique environmental initiative of planting 111 trees for every girl child born. The village focuses on afforestation and sustainable living.',
    features: [
      'Tree planting initiatives',
      'Water conservation',
      'Community involvement',
      'Sustainable agriculture',
      'Women empowerment programs'
    ]
  },
  {
    image: govardhan,
    title: 'Govardhan Eco Village',
    address: 'Galtare, Hamrapur (P.O), Wada Taluka, Palghar District, Maharashtra 421303, India',
    description: 'Govardhan Eco Village is an award-winning model of sustainable living, combining Vedic wisdom with modern technology to promote eco-friendly practices.',
    features: [
      'Organic farming',
      'Renewable energy',
      'Water conservation',
      'Eco-friendly architecture',
      'Educational programs'
    ]
  },
  {
    image: sanskriti,
    title: 'Sanskriti Eco Village',
    address: 'Bangalore, Karnataka 562135, India',
    description: 'Sanskriti Eco Village is a retreat that focuses on yoga, meditation, and sustainable living. It offers a peaceful environment with eco-friendly accommodations.',
    features: [
      'Organic farming',
      'Yoga and meditation',
      'Eco-friendly construction',
      'Waste management',
      'Nature walks and bird watching'
    ]
  },
  {
    image: jageshwar,
    title: 'Jageshwar Eco Village',
    address: 'Almora District, Uttarakhand 263623, India',
    description: 'Nestled in the Himalayas, Jageshwar Eco Village promotes sustainable living with organic farming, renewable energy, and eco-friendly tourism.',
    features: [
      'Organic farming',
      'Solar energy',
      'Rainwater harvesting',
      'Trekking and nature walks',
      'Cultural and spiritual programs'
    ]
  },
  {
    image: munsiyari,
    title: 'Munsiyari Eco Village',
    address: 'Pithoragarh District, Uttarakhand 262554, India',
    description: 'Munsiyari Eco Village offers stunning views of the Himalayas and promotes sustainable tourism through eco-friendly accommodations and community involvement.',
    features: [
      'Traditional homestays',
      'Organic farming',
      'Trekking and nature walks',
      'Community-based tourism',
      'Environmental education programs'
    ]
  },
  {
    image: kokrebellur,
    title: 'Kokrebellur',
    address: 'Mandya District, Karnataka 571422, India',
    description: 'Kokrebellur is known for its harmonious relationship between the villagers and the bird population. The village promotes eco-tourism and bird conservation.',
    features: [
      'Bird watching',
      'Community-based eco-tourism',
      'Sustainable agriculture',
      'Environmental education',
      'Traditional homestays'
    ]
  },
  {
    image: phyang,
    title: 'Phyang Village',
    address: 'Leh District, Ladakh 194101, India',
    description: 'Phyang Village in Ladakh promotes sustainable living through organic farming, renewable energy, and community-based tourism.',
    features: [
      'Organic farming',
      'Solar energy',
      'Rainwater harvesting',
      'Traditional Ladakhi architecture',
      'Cultural and educational programs'
    ]
  },
  {
    image: khonoma,
    title: 'Khonoma Village',
    address: 'Kohima District, Nagaland 797002, India',
    description: 'Known as India\'s first green village, Khonoma is renowned for its conservation efforts and sustainable living practices.',
    features: [
      'Community-based conservation',
      'Organic farming',
      'Forest preservation',
      'Eco-friendly accommodations',
      'Cultural and historical tours'
    ]
  },
  {
    image: thembang,
    title: 'Thembang Heritage Village',
    address: 'West Kameng District, Arunachal Pradesh 790001, India',
    description: 'Thembang is a heritage village known for its sustainable tourism practices and traditional Monpa architecture.',
    features: [
      'Traditional Monpa houses',
      'Community-based tourism',
      'Organic farming',
      'Cultural programs',
      'Trekking and nature walks'
    ]
  }
];

const EcoVillages = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Eco Villages in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {villages.map((village, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={village.image} alt={village.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{village.title}</h2>
              <p className="italic text-sm mb-2">{village.address}</p>
              <p className="mt-2">{village.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {village.features.map((feature, i) => (
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

export default EcoVillages;
