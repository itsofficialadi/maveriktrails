import React from 'react';
import 'aos/dist/aos.css'; // Import AOS for animations

// Sample images for Eco-Friendly Water Activities
import kayakingKerala from '/src/activities/WaterIMG/kayakingKerala-min.jpg';
import snorkelingAndaman from '/src/activities/WaterIMG/snorkelingAndaman-min.jpeg';
import coralReefDiving from '/src/activities/WaterIMG/coralReefDiving-min.jpg';
import paddleboardingGoa from '/src/activities/WaterIMG/paddleboard-yamuna-min.jpeg';
import raftingGanges from '/src/activities/WaterIMG/rafting-min.jpeg';
import ecoBoatToursSundarbans from '/src/activities/WaterIMG/Eco-Tourism Boat Tours in the Sundarbans-min.jpg';
import fishingAndaman from '/src/activities/WaterIMG/fishing-min.jpg';
import riverCruisingBrahmaputra from '/src/activities/WaterIMG/brahmaputra-cruise-min.jpg';
import dolphinWatchingGoa from '/src/activities/WaterIMG/dolphin-goa-min.jpg';
import kayakingRishikesh from '/src/activities/WaterIMG/Kayaking-in-Rishikesh-min.jpg';
import canoeingLakePichola from '/src/activities/WaterIMG/Canoeing on Lake Pichola-min.jpg';
import paddleboardingYamuna from '/src/activities/WaterIMG/paddleboard-yamuna-min.jpeg';

const activities = [
  {
    image: kayakingKerala,
    title: 'Kayaking in the Backwaters of Kerala',
    location: 'Alleppey and Kumarakom, Kerala',
    duration: '2-3 hours',
    description: 'Glide through the serene backwaters of Kerala in a kayak, enjoying the peaceful surroundings and lush landscapes while practicing minimal-impact recreation.',
    features: [
      'Best Time: September-March',
      'Eco-Friendliness: Non-motorized, low-impact; minimal noise and disturbance',
      'Important Tips: Use eco-friendly sunscreen, avoid touching aquatic plants, and respect local wildlife.'
    ]
  },
  {
    image: snorkelingAndaman,
    title: 'Snorkeling in the Andaman and Nicobar Islands',
    location: 'Havelock Island, Andaman and Nicobar Islands',
    duration: '2-3 hours',
    description: 'Explore vibrant coral reefs and marine life in the crystal-clear waters of Havelock Island. Eco-friendly tours focus on conservation and respect for marine environments.',
    features: [
      'Best Time: October-April',
      'Eco-Friendliness: Emphasis on sustainable practices and reef-safe equipment',
      'Important Tips: Use reef-safe sunscreen, and avoid touching or standing on coral reefs.'
    ]
  },
  {
    image: coralReefDiving,
    title: 'Coral Reef Diving in Lakshadweep',
    location: 'Agatti Island, Lakshadweep',
    duration: '1-2 hours',
    description: 'Dive into the pristine coral reefs of Lakshadweep with eco-conscious diving tours that prioritize marine conservation and sustainable practices.',
    features: [
      'Best Time: October-May',
      'Eco-Friendliness: Sustainable diving techniques, use of biodegradable products',
      'Important Tips: Ensure diving certification, follow all environmental and safety guidelines.'
    ]
  },
  {
    image: paddleboardingGoa,
    title: 'Stand-Up Paddleboarding in Goa',
    location: 'Palolem Beach, Goa',
    duration: '1-2 hours',
    description: 'Enjoy a tranquil paddleboarding experience on the calm waters of Palolem Beach. This eco-friendly activity provides a unique view of the coastal environment while promoting sustainability.',
    features: [
      'Best Time: November-March',
      'Eco-Friendliness: Non-motorized, low-impact activity',
      'Important Tips: Wear sun protection and avoid disturbing wildlife or nesting areas.'
    ]
  },
  {
    image: raftingGanges,
    title: 'White-Water Rafting on the Ganges River',
    location: 'Rishikesh, Uttarakhand',
    duration: '3-4 hours',
    description: 'Experience the excitement of white-water rafting on the Ganges River with tours that emphasize conservation and minimize impact on the river environment.',
    features: [
      'Best Time: March-May and September-November',
      'Eco-Friendliness: Environmentally responsible operations',
      'Important Tips: Wear safety gear, follow all instructions, and ensure minimal impact on the river.'
    ]
  },
  {
    image: ecoBoatToursSundarbans,
    title: 'Eco-Tourism Boat Tours in the Sundarbans',
    location: 'Sundarbans, West Bengal',
    duration: '3-4 hours',
    description: 'Navigate the unique mangrove forests of the Sundarbans on eco-tourism boats. These tours focus on environmental preservation and offer insight into the local ecosystem.',
    features: [
      'Best Time: November-March',
      'Eco-Friendliness: Low-impact boats, emphasis on sustainable practices',
      'Important Tips: Avoid making loud noises and follow guidelines to protect the mangrove ecosystem.'
    ]
  },
  {
    image: fishingAndaman,
    title: 'Fishing with Locals in the Andaman Islands',
    location: 'Baratang Island, Andaman and Nicobar Islands',
    duration: '2-3 hours',
    description: 'Participate in traditional, sustainable fishing practices with local fishermen, supporting local communities and promoting the preservation of marine resources.',
    features: [
      'Best Time: October-April',
      'Eco-Friendliness: Use of sustainable fishing methods',
      'Important Tips: Follow local regulations and use recommended fishing techniques.'
    ]
  },
  {
    image: riverCruisingBrahmaputra,
    title: 'River Cruising on the Brahmaputra',
    location: 'Guwahati, Assam',
    duration: '3-4 hours',
    description: 'Enjoy a scenic and eco-friendly river cruise on the Brahmaputra River, focusing on conservation and minimal environmental impact.',
    features: [
      'Best Time: October-April',
      'Eco-Friendliness: Eco-conscious cruising practices',
      'Important Tips: Avoid littering, respect wildlife, and follow all conservation guidelines.'
    ]
  },
  {
    image: dolphinWatchingGoa,
    title: 'Eco-Friendly Dolphin Watching in Goa',
    location: 'Candolim Beach, Goa',
    duration: '2-3 hours',
    description: 'Participate in dolphin watching tours that prioritize respectful observation and minimize disturbance to these marine mammals and their habitat.',
    features: [
      'Best Time: November-April',
      'Eco-Friendliness: Respectful observation practices',
      'Important Tips: Maintain a safe distance from dolphins and avoid loud noises.'
    ]
  },
  {
    image: kayakingRishikesh,
    title: 'Kayaking in the Rishikesh Ganges',
    location: 'Rishikesh, Uttarakhand',
    duration: '2-3 hours',
    description: 'Paddle through the scenic stretches of the Ganges River in Rishikesh with eco-friendly kayaking tours that emphasize environmental conservation.',
    features: [
      'Best Time: March-May and September-November',
      'Eco-Friendliness: Non-motorized, low-impact activity',
      'Important Tips: Respect local wildlife and avoid littering.'
    ]
  },
  {
    image: canoeingLakePichola,
    title: 'Canoeing on Lake Pichola',
    location: 'Udaipur, Rajasthan',
    duration: '1-2 hours',
    description: 'Experience a serene canoe ride on Lake Pichola, with eco-friendly practices focused on preserving the lake’s natural beauty.',
    features: [
      'Best Time: October-March',
      'Eco-Friendliness: Low-impact canoeing activity',
      'Important Tips: Avoid disturbing wildlife and be mindful of the local environment.'
    ]
  },
  {
    image: paddleboardingYamuna,
    title: 'Stand-Up Paddleboarding on the Yamuna River',
    location: 'Agra, Uttar Pradesh',
    duration: '1-2 hours',
    description: 'Explore the Yamuna River through eco-friendly stand-up paddleboarding. This activity offers a unique perspective of the river while emphasizing conservation and minimal environmental impact.',
    features: [
      'Best Time: October-March',
      'Eco-Friendliness: Non-motorized, low-impact activity',
      'Important Tips: Avoid littering, use eco-friendly sun protection, and respect local wildlife.'
    ]
  }
];

const EcoWaterActivities = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top Eco-Friendly Water Activities in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{activity.title}</h2>
              <p className="italic text-sm mb-2">{activity.location}</p>
              <p className="text-sm mb-2"><strong>Duration:</strong> {activity.duration}</p>
              <p className="mt-2">{activity.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {activity.features.map((feature, i) => (
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

export default EcoWaterActivities;
