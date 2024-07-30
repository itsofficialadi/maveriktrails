import React from 'react';
import 'aos/dist/aos.css'; // Import AOS for animations

// Sample images for Wildlife Safaris
import jimCorbett from '/src/experiences/ParkIMG/jim-corbett-min.jpg';
import kaziranga from '/src/experiences/ParkIMG/kaziranga-min.jpeg';
import ranthambore from '/src/experiences/ParkIMG/ranthambore-min.jpeg';
import bandhavgarh from '/src/experiences/ParkIMG/bandhavgarh-national-park-min.jpg';
import kanha from '/src/experiences/ParkIMG/Kanha-National-Park-min.jpg';
import periyar from '/src/experiences/ParkIMG/periyar-min.jpg';
import sundarbans from '/src/experiences/ParkIMG/sundarban-min.jpg';
import gir from '/src/experiences/ParkIMG/gir-min.jpeg';
import mudhumalai from '/src/experiences/ParkIMG/mudumalai-min.jpeg';
import nagarhole from '/src/experiences/ParkIMG/Nagarhole-min.jpg';
import bandipur from '/src/activities/SafariIMG/bandipur-min.jpeg';

const safaris = [
  {
    image: jimCorbett,
    title: 'Jim Corbett National Park Safari',
    location: 'Ramnagar, Uttarakhand',
    duration: '3-4 hours',
    zones: 'Dhikala, Bijrani, Jhirna, and Durgadevi',
    description: 'India’s oldest national park, Jim Corbett is renowned for its Bengal tigers and diverse wildlife. The park offers jeep and canter safaris through its rich forests and grasslands.',
    features: [
      'Best Time for Safari: November-June',
      'Wildlife Sightings: Bengal tiger, leopards, elephants, various deer species',
      'Important Tips: Book safaris in advance, carry a valid ID, and follow park guidelines to minimize disturbance.'
    ]
  },
  {
    image: kaziranga,
    title: 'Kaziranga National Park Safari',
    location: 'Golaghat and Karbi Anglong, Assam',
    duration: '3-4 hours',
    zones: 'Central, Western, and Eastern',
    description: 'Famous for its population of the one-horned rhinoceros, Kaziranga offers jeep and elephant safaris. The park’s diverse ecosystems provide habitats for numerous other species.',
    features: [
      'Best Time for Safari: November-April',
      'Wildlife Sightings: One-horned rhinoceros, Bengal tiger, wild water buffalo, various bird species',
      'Important Tips: Wear neutral clothing to avoid startling animals and carry binoculars for bird watching.'
    ]
  },
  {
    image: ranthambore,
    title: 'Ranthambore National Park Safari',
    location: 'Sawai Madhopur, Rajasthan',
    duration: '3-4 hours',
    zones: 'Zone 1 to Zone 10',
    description: 'Known for its royal Bengal tigers and the historic Ranthambore Fort, this park offers jeep and canter safaris. The landscape includes a mix of grasslands, forests, and lakes.',
    features: [
      'Best Time for Safari: October-April',
      'Wildlife Sightings: Bengal tiger, leopards, sloth bears, marsh crocodiles',
      'Important Tips: Early morning safaris increase the chances of tiger sightings. Dress in layers as temperatures can vary.'
    ]
  },
  {
    image: bandhavgarh,
    title: 'Bandhavgarh National Park Safari',
    location: 'Umaria, Madhya Pradesh',
    duration: '3-4 hours',
    zones: 'Tala, Magadhi, Khitauli',
    description: 'Bandhavgarh is famous for its high density of Bengal tigers and the historic Bandhavgarh Fort. The park offers jeep safaris through its diverse terrain.',
    features: [
      'Best Time for Safari: October-June',
      'Wildlife Sightings: Bengal tiger, leopards, various deer species, wild boars',
      'Important Tips: Book safaris early, and try for a mix of morning and afternoon safaris for varied sightings.'
    ]
  },
  {
    image: kanha,
    title: 'Kanha National Park Safari',
    location: 'Mandla and Balaghat, Madhya Pradesh',
    duration: '3-4 hours',
    zones: 'Kisli, Mukki, and Sarhi',
    description: 'Known for its pristine sal and bamboo forests, Kanha is a haven for tigers and barasingha (swamp deer). Jeep and elephant safaris are available.',
    features: [
      'Best Time for Safari: October-June',
      'Wildlife Sightings: Bengal tiger, barasingha, leopards, wild dogs',
      'Important Tips: Choose safari times based on your interest (morning for cooler weather, afternoon for wildlife activity).'
    ]
  },
  {
    image: periyar,
    title: 'Periyar National Park Safari',
    location: 'Thekkady, Kerala',
    duration: '2 hours (boat safari)',
    zones: 'Periyar Lake',
    description: 'Located around the scenic Periyar Lake, this park offers boat safaris which provide a unique perspective of wildlife, especially elephants.',
    features: [
      'Best Time for Safari: September-April',
      'Wildlife Sightings: Elephants, Indian bison, sambar deer, various bird species',
      'Important Tips: Carry binoculars and a camera with a zoom lens for better wildlife observation.'
    ]
  },
  {
    image: sundarbans,
    title: 'Sundarbans National Park Safari',
    location: 'South 24 Parganas, West Bengal',
    duration: '3-4 hours (boat safari)',
    zones: 'Sundarbans Core Area',
    description: 'The Sundarbans is famous for its mangrove forests and the elusive Royal Bengal tiger. Boat safaris are the primary means of exploring this UNESCO World Heritage Site.',
    features: [
      'Best Time for Safari: November-March',
      'Wildlife Sightings: Royal Bengal tiger, saltwater crocodiles, spotted deer, various bird species',
      'Important Tips: Bring waterproof gear and be prepared for high humidity.'
    ]
  },
  {
    image: gir,
    title: 'Gir National Park Safari',
    location: 'Sasan Gir, Gujarat',
    duration: '3-4 hours',
    zones: 'Gir Forest, Devalia Safari Park',
    description: 'Gir is the last refuge of the Asiatic lion and offers jeep safaris through its dry deciduous forests. The park is also home to a variety of other wildlife.',
    features: [
      'Best Time for Safari: November-June',
      'Wildlife Sightings: Asiatic lion, leopards, chital, wild boars',
      'Important Tips: The park is hot and dry; carry sun protection and stay hydrated.'
    ]
  },
  {
    image: mudhumalai,
    title: 'Mudhumalai National Park Safari',
    location: 'Nilgiri Hills, Tamil Nadu',
    duration: '3-4 hours',
    zones: 'Core and Buffer Zones',
    description: 'Part of the Nilgiri Biosphere Reserve, Mudhumalai offers jeep safaris through its diverse habitats, including tropical forests and grasslands.',
    features: [
      'Best Time for Safari: October-May',
      'Wildlife Sightings: Elephants, tigers, leopards, gaurs',
      'Important Tips: Wear comfortable clothing and be prepared for bumpy rides. The park can be cooler in the mornings.'
    ]
  },
  {
    image: nagarhole,
    title: 'Nagarhole National Park Safari',
    location: 'Kodagu and Mysore, Karnataka',
    duration: '3-4 hours',
    zones: 'Kabini and Nagarhole',
    description: 'Known for its rich biodiversity and lush forests, Nagarhole offers jeep safaris through its varied landscapes, including dense forests and open grasslands.',
    features: [
      'Best Time for Safari: October-May',
      'Wildlife Sightings: Tigers, elephants, leopards, various deer species',
      'Important Tips: Be patient and quiet during safaris to increase chances of wildlife sightings.'
    ]
  },
  {
    image: bandipur,
    title: 'Bandipur National Park Safari',
    location: 'Chamarajanagar, Karnataka',
    duration: '3-4 hours',
    zones: 'Bandipur Core Area',
    description: 'Located in the Nilgiri Hills, Bandipur offers jeep safaris through its lush forests and is part of the Nilgiri Biosphere Reserve.',
    features: [
      'Best Time for Safari: October-May',
      'Wildlife Sightings: Tigers, elephants, leopards, Indian bison',
      'Important Tips: Early morning and late afternoon safaris are ideal for spotting wildlife. Carry a camera with a good zoom lens.'
    ]
  }
];

const Safari = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top Wildlife Safaris in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {safaris.map((safari, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={safari.image} alt={safari.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{safari.title}</h2>
              <p className="italic text-sm mb-2">{safari.location}</p>
              <p className="text-sm mb-2"><strong>Duration:</strong> {safari.duration}</p>
              <p className="text-sm mb-2"><strong>Zones:</strong> {safari.zones}</p>
              <p className="mt-2">{safari.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {safari.features.map((feature, i) => (
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

export default Safari;
