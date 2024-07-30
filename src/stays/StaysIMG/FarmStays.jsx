import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Farm Stays
import dewalokam from '/src/stays/StaysIMG/FarmIMG/dewalokam-min.jpg';
import maachli from '/src/stays/StaysIMG/FarmIMG/maachli-min.jpg';
import nativeVillage from '/src/stays/StaysIMG/FarmIMG/Our-Native-Village-min.jpg';
import Annapara from '/src/stays/StaysIMG/FarmIMG/Annapara-min.jpg';
import Green from '/src/stays/StaysIMG/FarmIMG/Green-Hills-Estate-min.jpeg';
import WildMahseer from '/src/stays/StaysIMG/FarmIMG/Wild-Mahseer-min.jpg';
import bonFarmhouse from '/src/stays/StaysIMG/FarmIMG/bon-farmhouse-min.jpg';
import Glenburn from '/src/stays/StaysIMG/FarmIMG/Glenburn-Tea-Estate-min.jpg';
import Shahpura from '/src/stays/StaysIMG/FarmIMG/Shahpura-Bagh-min.jpeg';
import redHill from '/src/stays/StaysIMG/FarmIMG/red-hills-nature-resort-min.jpg';

const destinations = [
  {
    image: dewalokam,
    title: 'Dewalokam Farmstay Retreat',
    address: 'Dewalokam, Near Thattekkad Bird Sanctuary, Kothamangalam, Kerala 686681, India',
    description: 'Dewalokam is an organic farmstay offering an immersive experience in sustainable living. Surrounded by lush greenery, guests can enjoy fresh farm produce, Ayurvedic treatments, and eco-friendly practices.',
    features: [
      'Organic farming',
      'Solar energy',
      'Rainwater harvesting',
      'Nature walks and bird watching',
      'Cooking classes and cultural experiences'
    ]
  },
  {
    image: maachli,
    title: 'Maachli Farmstay',
    address: 'Parule Village, Vengurla, Sindhudurg, Maharashtra 416523, India',
    description: 'Maachli Farmstay provides a rustic experience amidst coconut, areca nut, and banana plantations. The homestay emphasizes traditional farming and eco-friendly living.',
    features: [
      'Traditional Konkani cottages',
      'Organic farming',
      'Eco-friendly construction',
      'Nature trails and river walks',
      'Local cuisine and cultural experiences'
    ]
  },
  {
    image: nativeVillage,
    title: 'Our Native Village',
    address: 'Hessarghatta, Bengaluru, Karnataka 560088, India',
    description: 'Our Native Village is an eco-resort that offers a glimpse into rural Indian life with sustainable practices and organic farming.',
    features: [
      'Solar energy',
      'Organic farming',
      'Waste management systems',
      'Traditional games and cultural activities',
      'Ayurvedic treatments and yoga sessions'
    ]
  },
  {
    image: Annapara,
    title: 'Annapara Homestay',
    address: 'Vythiri, Wayanad, Kerala 673576, India',
    description: 'Nestled in the hills of Wayanad, Annapara Homestay offers a serene and eco-friendly experience with a focus on sustainable tourism.',
    features: [
      'Solar power',
      'Organic vegetable garden',
      'Rainwater harvesting',
      'Trekking and nature walks',
      'Bird watching and local cuisine'
    ]
  },
  {
    image: Green,
    title: 'Green Hills Estate',
    address: 'Chithirapuram, Munnar, Kerala 685565, India',
    description: 'Green Hills Estate is an eco-friendly homestay located in the picturesque hills of Munnar, focusing on sustainable living and organic farming.',
    features: [
      'Solar power',
      'Organic farming',
      'Waste management',
      'Tea plantation tours',
      'Nature walks and bird watching'
    ]
  },
  {
    image: WildMahseer,
    title: 'Wild Mahseer',
    address: 'Addabarie Tea Estate, Balipara, Sonitpur, Assam 784101, India',
    description: 'Wild Mahseer offers a unique experience in a colonial-era tea estate with a focus on biodiversity conservation and sustainable tourism.',
    features: [
      'Solar energy',
      'Organic farming',
      'Waste management systems',
      'Tea garden tours and bird watching',
      'Traditional Assamese cuisine and cultural experiences'
    ]
  },
  {
    image: bonFarmhouse,
    title: 'Bon Farmhouse',
    address: 'Kewzing Village, Ravangla, Sikkim 737139, India',
    description: 'Bon Farmhouse is a sustainable homestay located in the serene hills of Sikkim, promoting eco-friendly practices and organic farming.',
    features: [
      'Organic farming',
      'Solar power',
      'Rainwater harvesting',
      'Nature walks and bird watching',
      'Local cuisine and cultural experiences'
    ]
  },
  {
    image: Glenburn,
    title: 'Glenburn Tea Estate',
    address: 'Glenburn Tea Estate, Darjeeling, West Bengal 734101, India',
    description: 'Glenburn Tea Estate offers a luxurious yet eco-friendly experience in the lush tea gardens of Darjeeling, with a focus on sustainability.',
    features: [
      'Solar energy',
      'Organic farming',
      'Waste management',
      'Tea plantation tours and bird watching',
      'Nature walks and local cuisine'
    ]
  },
  {
    image: Shahpura,
    title: 'Shahpura Bagh',
    address: 'Shahpura, Bhilwara, Rajasthan 311023, India',
    description: 'Shahpura Bagh is a heritage homestay that combines luxury with eco-friendly practices, set amidst lakes and gardens in Rajasthan.',
    features: [
      'Solar energy',
      'Organic farming',
      'Rainwater harvesting',
      'Bird watching and nature walks',
      'Cultural experiences and local cuisine'
    ]
  },
  {
    image: redHill,
    title: 'Red Hill Nature Resort',
    address: 'Emerald Lake, Nilgiris, Ooty, Tamil Nadu 643209, India',
    description: 'Red Hill Nature Resort is an eco-friendly homestay located near Emerald Lake in Ooty, offering stunning views and sustainable living practices.',
    features: [
      'Solar power',
      'Organic vegetable garden',
      'Rainwater harvesting',
      'Nature walks and bird watching',
      'Tea plantation tours and local cuisine'
    ]
  }
];

const FarmStays = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top 10 Eco-Friendly Farmstays in India
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

export default FarmStays;
