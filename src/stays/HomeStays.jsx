import React from 'react';
import 'aos/dist/aos.css'; // Import AOS for animations

// Sample images for Eco-Friendly Homestays
import bambooForestLodge from '/src/stays/StaysIMG/HomeIMG/Bamboo Forest-min.jpg';
import ecoLodgeJibhi from '/src/stays/StaysIMG/HomeIMG/Eco Lodge at Jibhi-min.jpg';
import theGreenHouse from '/src/stays/StaysIMG/HomeIMG/The Green House-min.jpg';
import windflowerResort from '/src/stays/StaysIMG/HomeIMG/The Windflower Resort & Spa-min.jpg';
import kanhaEarthLodge from '/src/stays/StaysIMG/HomeIMG/kanha-image-min.jpg';
import amanziTentedCamp from '/src/stays/StaysIMG/HomeIMG/Amanzi Luxury Tented Camp-min.jpg';
import theLotusFarm from '/src/stays/StaysIMG/HomeIMG/The Lotus Farm-min.jpeg';
import vamaRetreats from '/src/stays/StaysIMG/HomeIMG/Vama Retreats-min.jpeg';
import thePalmsChennai from '/src/stays/StaysIMG/HomeIMG/The Palms, Chennai-min.jpeg';
import campKalahari from '/src/stays/StaysIMG/HomeIMG/Camp Kalahari-min.jpg';
import woodpeckerEcoLodge from '/src/stays/StaysIMG/HomeIMG/woodpecker-ecolodge-min.jpg';
import villageRetreat from '/src/stays/StaysIMG/HomeIMG/village-retreat-min.jpg';

const homestays = [
  {
    image: bambooForestLodge,
    title: 'Bamboo Forest Lodge',
    address: 'Kothi, Mcleod Ganj, Dharamshala, Himachal Pradesh 176219, India',
    description: 'Bamboo Forest Lodge offers an immersive experience in the lush forests of Dharamshala, using eco-friendly bamboo construction and renewable energy. The homestay promotes sustainability and offers activities like meditation and nature walks.',
    features: [
      'Bamboo construction',
      'Solar power',
      'Organic farming',
      'Meditation and yoga sessions',
      'Local Himachali cuisine'
    ]
  },
  {
    image: ecoLodgeJibhi,
    title: 'Eco Lodge at Jibhi',
    address: 'Jibhi, Banjar Valley, Himachal Pradesh 175123, India',
    description: 'Eco Lodge at Jibhi is located in the picturesque Banjar Valley, focusing on sustainable living with solar energy, rainwater harvesting, and organic farming. Guests can enjoy trekking, nature walks, and traditional Himachali food.',
    features: [
      'Solar power',
      'Organic farming',
      'Rainwater harvesting',
      'Nature walks and local trekking',
      'Traditional Himachali cuisine'
    ]
  },
  {
    image: theGreenHouse,
    title: 'The Green House',
    address: 'Sadhana Forest, Auroville, Tamil Nadu 605101, India',
    description: 'The Green House in Auroville is dedicated to eco-friendly living and community-driven sustainability. It offers unique accommodations and engages guests in forest restoration projects and sustainable practices.',
    features: [
      'Solar power',
      'Organic gardening',
      'Rainwater harvesting',
      'Forest restoration activities',
      'Community-driven experiences'
    ]
  },
  {
    image: windflowerResort,
    title: 'The Windflower Resort & Spa',
    address: '14/24, Gokulam 1st Stage, Mysuru, Karnataka 570002, India',
    description: 'The Windflower Resort & Spa integrates eco-friendly practices with luxury accommodations. The resort features organic farming, solar energy, and sustainable waste management.',
    features: [
      'Solar energy',
      'Organic farming',
      'Waste management',
      'Spa and wellness treatments',
      'Nature walks and local cuisine'
    ]
  },
  {
    image: kanhaEarthLodge,
    title: 'Kanha Earth Lodge',
    address: 'Village Mardhi, Kanha National Park, Madhya Pradesh 481768, India',
    description: 'Kanha Earth Lodge offers a blend of luxury and eco-friendliness with thatched cottages, sustainable practices, and proximity to Kanha National Park. The lodge focuses on conservation and providing a unique wildlife experience.',
    features: [
      'Eco-friendly construction',
      'Solar power',
      'Water conservation',
      'Wildlife safaris and nature walks',
      'Local cuisine and cultural experiences'
    ]
  },
  {
    image: amanziTentedCamp,
    title: 'Amanzi Luxury Tented Camp',
    address: 'Bera, Pali District, Rajasthan 306702, India',
    description: 'Amanzi offers a luxurious yet eco-friendly camping experience in the desert of Rajasthan. The camp emphasizes sustainable practices and provides an immersive experience in nature.',
    features: [
      'Solar power',
      'Sustainable water use',
      'Eco-friendly construction',
      'Wildlife observation and nature walks',
      'Traditional Rajasthani cuisine'
    ]
  },
  {
    image: theLotusFarm,
    title: 'The Lotus Farm',
    address: 'Udaipur, Rajasthan 313001, India',
    description: 'The Lotus Farm combines traditional Rajasthani architecture with sustainable practices. It features organic farming, solar energy, and offers a peaceful retreat amidst lotus ponds and gardens.',
    features: [
      'Organic farming',
      'Solar energy',
      'Rainwater harvesting',
      'Nature walks and local cuisine',
      'Cultural experiences'
    ]
  },
  {
    image: vamaRetreats,
    title: 'Vama Retreats',
    address: 'Village Shivpuri, Rishikesh, Uttarakhand 249137, India',
    description: 'Vama Retreats offers a blend of luxury and eco-conscious living, focusing on sustainable tourism with solar power, organic farming, and waste management. It’s situated near the Ganges River, offering various wellness activities.',
    features: [
      'Solar power',
      'Organic farming',
      'Waste management',
      'Yoga and wellness activities',
      'Nature walks and local cuisine'
    ]
  },
  {
    image: thePalmsChennai,
    title: 'The Palms, Chennai',
    address: 'Ekkatuthangal, Chennai, Tamil Nadu 600032, India',
    description: 'The Palms is a green oasis in Chennai offering eco-friendly accommodations with a focus on sustainability and local culture. It features organic gardens, solar energy, and waste reduction practices.',
    features: [
      'Solar power',
      'Organic gardening',
      'Waste reduction',
      'Cultural experiences',
      'Wellness treatments'
    ]
  },
  {
    image: campKalahari,
    title: 'Camp Kalahari',
    address: 'Maun, Botswana (though the homestay operates in India, the Botswana location is noted for eco-friendly practices)',
    description: 'Camp Kalahari brings a sustainable desert safari experience with minimal environmental impact. It emphasizes eco-friendly practices and offers an immersive experience in the Kalahari Desert.',
    features: [
      'Eco-friendly construction',
      'Solar power',
      'Sustainable water use',
      'Wildlife safaris and cultural interactions',
      'Traditional cuisine'
    ]
  },
  {
    image: woodpeckerEcoLodge,
    title: 'Woodpecker Eco Lodge',
    address: 'Kallar, Munnar, Kerala 685561, India',
    description: 'Woodpecker Eco Lodge provides a sustainable retreat in the hills of Munnar, focusing on eco-friendly practices and organic farming. Guests can enjoy nature walks, bird watching, and local cuisine.',
    features: [
      'Solar power',
      'Organic farming',
      'Rainwater harvesting',
      'Nature walks and bird watching',
      'Local cuisine'
    ]
  },
  {
    image: villageRetreat,
    title: 'The Village Retreat',
    address: 'Village Kadappur, Tanjore District, Tamil Nadu 614205, India',
    description: 'The Village Retreat offers a sustainable escape with traditional Tamil architecture and eco-friendly practices. It emphasizes organic farming, solar energy, and waste management, providing guests with an authentic rural experience.',
    features: [
      'Solar power',
      'Organic farming',
      'Waste management',
      'Rural experiences and local cuisine',
      'Nature walks and cultural activities'
    ]
  }
];

const EcoHomestays = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top Eco-Friendly Homestays in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {homestays.map((homestay, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={homestay.image} alt={homestay.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{homestay.title}</h2>
              <p className="italic text-sm mb-2">{homestay.address}</p>
              <p className="text-sm mb-2"><strong>Description:</strong> {homestay.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {homestay.features.map((feature, i) => (
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

export default EcoHomestays;
