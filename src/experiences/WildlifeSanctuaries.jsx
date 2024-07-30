import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Wildlife Sanctuaries
import chilika from '/src/experiences/WildlifeIMG/Chilika-min.jpg';
import keoladeo from '/src/experiences/WildlifeIMG/keoladeo-min.jpeg';
import bhadra from '/src/experiences/WildlifeIMG/Bhadra-wildlife-sanctuary-min.jpg';
import periyar from '/src/experiences/ParkIMG/periyar-min.jpg';
import kumbhalgarh from '/src/experiences/WildlifeIMG/kumbhalgarh-min.jpg';
import dandeli from '/src/experiences/WildlifeIMG/dandeli-min.jpg';
import manas from '/src/experiences/WildlifeIMG/manas-min.jpg';
import kumarakom from '/src/experiences/WildlifeIMG/kumarakom-min.jpg';
import bhagwanMahavir from '/src/experiences/WildlifeIMG/bhagwan-mahavir-min.jpg';
import neyyar from '/src/experiences/WildlifeIMG/Neyyar-min.jpg';
import sariska from '/src/experiences/WildlifeIMG/Sariska-min.jpg';
import greatHimalayan from '/src/experiences/WildlifeIMG/The-Great-Himalayan-National-Park-min.jpeg';

const sanctuaries = [
  {
    image: chilika,
    title: 'Chilika Wildlife Sanctuary',
    address: 'Puri, Khurda, and Ganjam Districts, Odisha 752001, India',
    description: 'Chilika Wildlife Sanctuary is the largest coastal lagoon in India and a significant wintering ground for migratory birds. The sanctuary promotes eco-tourism and biodiversity conservation.',
    features: [
      'Bird watching',
      'Eco-friendly boat tours',
      'Dolphin sightings',
      'Conservation education programs',
      'Community-based tourism initiatives'
    ]
  },
  {
    image: keoladeo,
    title: 'Keoladeo National Park (Bharatpur Bird Sanctuary)',
    address: 'Bharatpur, Rajasthan 321001, India',
    description: 'A UNESCO World Heritage Site, Keoladeo is renowned for its diverse bird population, making it a paradise for bird watchers. The sanctuary emphasizes eco-friendly tourism and bird conservation.',
    features: [
      'Bird watching',
      'Eco-friendly cycling tours',
      'Wildlife safaris',
      'Conservation education programs',
      'Community involvement in tourism'
    ]
  },
  {
    image: bhadra,
    title: 'Bhadra Wildlife Sanctuary',
    address: 'Chikkamagaluru District, Karnataka 577101, India',
    description: 'Nestled in the Western Ghats, Bhadra Wildlife Sanctuary is known for its diverse flora and fauna. The sanctuary promotes eco-tourism and sustainable conservation practices.',
    features: [
      'Wildlife safaris',
      'Eco-friendly lodges',
      'Nature trails and bird watching',
      'River rafting',
      'Conservation education programs'
    ]
  },
  {
    image: periyar,
    title: 'Periyar Wildlife Sanctuary',
    address: 'Thekkady, Idukki District, Kerala 685536, India',
    description: 'Located in the Western Ghats, Periyar Wildlife Sanctuary is famous for its elephants and rich biodiversity. The sanctuary focuses on eco-friendly tourism and wildlife conservation.',
    features: [
      'Elephant safaris',
      'Eco-friendly accommodations',
      'Bamboo rafting and nature walks',
      'Conservation education',
      'Community eco-tourism projects'
    ]
  },
  {
    image: kumbhalgarh,
    title: 'Kumbhalgarh Wildlife Sanctuary',
    address: 'Rajsamand District, Rajasthan 313325, India',
    description: 'Surrounding the historic Kumbhalgarh Fort, this sanctuary is known for its wolves and diverse wildlife. Kumbhalgarh emphasizes sustainable tourism and heritage conservation.',
    features: [
      'Wildlife safaris',
      'Trekking and nature walks',
      'Eco-friendly lodges',
      'Conservation education',
      'Community-based tourism'
    ]
  },
  {
    image: dandeli,
    title: 'Dandeli Wildlife Sanctuary',
    address: 'Uttara Kannada District, Karnataka 581325, India',
    description: 'Dandeli Wildlife Sanctuary is known for its dense forests and rich biodiversity, offering various eco-friendly adventure activities.',
    features: [
      'Wildlife safaris',
      'White water rafting',
      'Eco-friendly accommodations',
      'Bird watching and nature walks',
      'Conservation education programs'
    ]
  },
  {
    image: manas,
    title: 'Manas Wildlife Sanctuary',
    address: 'Barpeta and Baksa Districts, Assam 781315, India',
    description: 'A UNESCO World Heritage Site, Manas is known for its diverse wildlife, including the endangered pygmy hog. The sanctuary focuses on sustainable tourism and wildlife protection.',
    features: [
      'Wildlife safaris',
      'River rafting',
      'Eco-friendly lodges',
      'Bird watching and nature walks',
      'Conservation education programs'
    ]
  },
  {
    image: kumarakom,
    title: 'Kumarakom Bird Sanctuary',
    address: 'Kumarakom, Kottayam District, Kerala 686563, India',
    description: 'Situated on the banks of Vembanad Lake, Kumarakom Bird Sanctuary is a paradise for bird watchers, especially during the migratory season.',
    features: [
      'Bird watching',
      'Eco-friendly boat tours',
      'Nature trails',
      'Conservation education programs',
      'Community involvement in tourism'
    ]
  },
  {
    image: bhagwanMahavir,
    title: 'Bhagwan Mahavir Wildlife Sanctuary',
    address: 'Sanguem Taluk, South Goa District, Goa 403704, India',
    description: 'Located in the Western Ghats, this sanctuary is known for its diverse flora and fauna, promoting eco-friendly tourism and conservation.',
    features: [
      'Wildlife safaris',
      'Nature trails and bird watching',
      'Eco-friendly accommodations',
      'Dudhsagar Falls tours',
      'Conservation education programs'
    ]
  },
  {
    image: neyyar,
    title: 'Neyyar Wildlife Sanctuary',
    address: 'Thiruvananthapuram District, Kerala 695572, India',
    description: 'Neyyar Wildlife Sanctuary is known for its picturesque landscapes and diverse wildlife, offering eco-friendly tourism and conservation programs.',
    features: [
      'Wildlife safaris',
      'Eco-friendly lodges',
      'Boating and nature walks',
      'Lion safari park',
      'Conservation education programs'
    ]
  },
  {
    image: sariska,
    title: 'Sariska Wildlife Sanctuary',
    address: 'Alwar District, Rajasthan 301001, India',
    description: 'Sariska Wildlife Sanctuary is home to tigers and rich biodiversity. The sanctuary promotes sustainable tourism and wildlife conservation.',
    features: [
      'Tiger safaris',
      'Eco-friendly accommodations',
      'Nature trails and bird watching',
      'Conservation education programs',
      'Community involvement in tourism'
    ]
  },
  {
    image: greatHimalayan,
    title: 'Great Himalayan National Park',
    address: 'Kullu District, Himachal Pradesh 175123, India',
    description: 'A UNESCO World Heritage Site, this park is known for its stunning landscapes and rich biodiversity, emphasizing eco-friendly tourism and conservation.',
    features: [
      'Wildlife safaris',
      'Trekking and nature walks',
      'Eco-friendly lodges',
      'Bird watching',
      'Conservation education programs'
    ]
  }
];

const WildlifeSanctuaries = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
        Top 12 Wildlife Sanctuaries in India
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {sanctuaries.map((sanctuary, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
            data-aos="fade-up"
          >
            <img src={sanctuary.image} alt={sanctuary.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-xl font-bold">{sanctuary.title}</h2>
              <p className="italic text-sm mb-2">{sanctuary.address}</p>
              <p className="mt-2">{sanctuary.description}</p>
              <ul className="mt-4 list-disc list-inside">
                {sanctuary.features.map((feature, i) => (
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

export default WildlifeSanctuaries;
