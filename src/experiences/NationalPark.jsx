import React from 'react';
import 'aos/dist/aos.css';

// Sample images for National Parks
import corbett from '/src/experiences/ParkIMG/jim-corbett-min.jpg';
import kaziranga from '/src/experiences/ParkIMG/kaziranga-min.jpeg';
import bandhavgarh from '/src/experiences/ParkIMG/bandhavgarh-national-park-min.jpg';
import ranthambore from '/src/experiences/ParkIMG/ranthambore-min.jpeg';
import periyar from '/src/experiences/ParkIMG/periyar-min.jpg';
import sundarbans from '/src/experiences/ParkIMG/sundarban-min.jpg';
import kanha from '/src/experiences/ParkIMG/Kanha-National-Park-min.jpg';
import gir from '/src/experiences/ParkIMG/gir-min.jpeg';
import nagarhole from '/src/experiences/ParkIMG/Nagarhole-min.jpg';
import pench from '/src/experiences/ParkIMG/pench-national-park-min.jpg';
import mudumalai from '/src/experiences/ParkIMG/mudumalai-min.jpeg';
import bannerghatta from '/src/experiences/ParkIMG/bannerghatta-min.jpeg';

const parks = [
  {
    image: corbett,
    title: 'Jim Corbett National Park',
    address: 'Nainital District, Ramnagar, Uttarakhand 244715, India',
    description: "Jim Corbett National Park is India's oldest national park, established in 1936 to protect the endangered Bengal tiger. It is renowned for its diverse flora and fauna, and eco-friendly tourism practices.",
    features: [
      'Sustainable safari tours',
      'Eco-friendly lodges',
      'Biodiversity conservation',
      'River rafting and bird watching',
      'Educational programs on wildlife conservation'
    ]
  },
  {
    image: kaziranga,
    title: 'Kaziranga National Park',
    address: 'Golaghat and Nagaon Districts, Assam 785609, India',
    description: 'A UNESCO World Heritage Site, Kaziranga is famous for its significant population of the Great Indian One-Horned Rhinoceros. The park is a model of successful wildlife conservation.',
    features: [
      'Rhino conservation',
      'Eco-friendly jeep and elephant safaris',
      'Sustainable accommodations',
      'Bird watching and boat rides',
      'Community-based tourism initiatives'
    ]
  },
  {
    image: bandhavgarh,
    title: 'Bandhavgarh National Park',
    address: 'Umaria District, Madhya Pradesh 484661, India',
    description: 'Known for its high tiger density, Bandhavgarh National Park is a haven for wildlife enthusiasts. The park focuses on sustainable tourism and wildlife conservation.',
    features: [
      'Tiger safari',
      'Eco-friendly resorts',
      'Biodiversity preservation',
      'Jungle walks and bird watching',
      'Community involvement in conservation'
    ]
  },
  {
    image: ranthambore,
    title: 'Ranthambore National Park',
    address: 'Sawai Madhopur District, Rajasthan 322021, India',
    description: 'Ranthambore is one of the largest national parks in northern India, renowned for its tiger population. The park integrates eco-tourism with wildlife protection.',
    features: [
      'Tiger conservation',
      'Eco-friendly accommodations',
      'Wildlife safaris',
      'Historical fort tours',
      'Environmental education programs'
    ]
  },
  {
    image: periyar,
    title: 'Periyar National Park',
    address: 'Thekkady, Idukki District, Kerala 685536, India',
    description: 'Located in the Western Ghats, Periyar is famous for its elephants and scenic beauty. The park promotes eco-tourism and sustainable wildlife experiences.',
    features: [
      'Elephant safaris',
      'Eco-friendly lodges',
      'Bamboo rafting and nature walks',
      'Conservation education',
      'Community eco-tourism projects'
    ]
  },
  {
    image: sundarbans,
    title: 'Sundarbans National Park',
    address: 'South 24 Parganas District, West Bengal 743370, India',
    description: 'A UNESCO World Heritage Site, Sundarbans is home to the Royal Bengal Tiger and the largest mangrove forest in the world. The park emphasizes sustainable tourism and conservation.',
    features: [
      'Mangrove ecosystem conservation',
      'Eco-friendly boat tours',
      'Tiger and wildlife spotting',
      'Community-based tourism',
      'Environmental awareness programs'
    ]
  },
  {
    image: kanha,
    title: 'Kanha National Park',
    address: 'Mandla and Balaghat Districts, Madhya Pradesh 481111, India',
    description: "Kanha inspired Rudyard Kipling's \"The Jungle Book\" and is renowned for its tiger reserve. The park focuses on eco-tourism and preserving its rich biodiversity.",
    features: [
      'Tiger and wildlife safaris',
      'Eco-friendly accommodations',
      'Nature trails and bird watching',
      'Community conservation initiatives',
      'Environmental education'
    ]
  },
  {
    image: gir,
    title: 'Gir National Park',
    address: 'Junagadh District, Gujarat 362135, India',
    description: 'The only natural habitat of the Asiatic Lion, Gir National Park is a significant wildlife sanctuary. The park promotes eco-friendly tourism and lion conservation.',
    features: [
      'Lion safaris',
      'Eco-friendly lodges',
      'Wildlife conservation programs',
      'Bird watching and nature walks',
      'Community involvement in tourism'
    ]
  },
  {
    image: nagarhole,
    title: 'Nagarhole National Park',
    address: 'Kodagu and Mysore Districts, Karnataka 571114, India',
    description: 'Also known as Rajiv Gandhi National Park, Nagarhole is part of the Nilgiri Biosphere Reserve. The park emphasizes sustainable tourism and wildlife protection.',
    features: [
      'Wildlife safaris',
      'Eco-friendly accommodations',
      'River boat safaris',
      'Conservation education programs',
      'Bird watching and nature trails'
    ]
  },
  {
    image: pench,
    title: 'Pench National Park',
    address: 'Seoni and Chhindwara Districts, Madhya Pradesh and Maharashtra, India',
    description: 'Famous for its role in inspiring "The Jungle Book," Pench is known for its diverse wildlife and eco-friendly tourism practices.',
    features: [
      'Tiger and wildlife safaris',
      'Eco-friendly lodges',
      'Bird watching and nature trails',
      'Community-based conservation initiatives',
      'Environmental education programs'
    ]
  },
  {
    image: mudumalai,
    title: 'Mudumalai National Park',
    address: 'Nilgiri District, Tamil Nadu 643223, India',
    description: 'Part of the Nilgiri Biosphere Reserve, Mudumalai is renowned for its varied flora and fauna. The park focuses on eco-tourism and biodiversity conservation.',
    features: [
      'Wildlife safaris',
      'Eco-friendly accommodations',
      'Nature trails and bird watching',
      'Conservation education',
      'Community eco-tourism projects'
    ]
  },
  {
    image: bannerghatta,
    title: 'Bannerghatta National Park',
    address: 'Bengaluru, Karnataka 560083, India',
    description: 'Bannerghatta combines a wildlife sanctuary with a biological park, promoting sustainable tourism and conservation education.',
    features: [
      'Wildlife safaris',
      'Butterfly park',
      'Rescue and rehabilitation center',
      'Conservation education programs',
      'Eco-friendly accommodations'
    ]
  }
];

const NationalParks = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top 12 National Parks of India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {parks.map((park, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={park.image} alt={park.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{park.title}</h2>
              <p className="italic text-sm mb-2">{park.address}</p>
              <p className="mt-2">{park.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {park.features.map((feature, i) => (
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

export default NationalParks;
