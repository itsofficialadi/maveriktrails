import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoorgImage from '/src/assets/coorg-min.jpg';
import KeralaBackwatersImage from '/src/assets/kerala-backwaters-min.jpg';
import AurovilleImage from '/src/assets/Auroville-min.jpg';
import SikkimImage from '/src/assets/sikkim-min.jpg';

const LearnMore = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 min-h-screen p-8">
      <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
      Explore Beautiful Destinations in India
      </h1>
      </header>

      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Coorg (Kodagu)</h2>
        <img src={CoorgImage} alt="Coorg" className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg" />
        <p className="text-gray-700 mb-4"><strong>Overview and Importance:</strong> Coorg, also known as Kodagu, is a picturesque hill station in Karnataka, renowned for its lush greenery, coffee plantations, and rich cultural heritage. It's often referred to as the "Scotland of India" due to its misty landscapes and cool climate.</p>
        <p className="text-gray-700 mb-4"><strong>Places to Visit:</strong></p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Madikeri Fort</li>
          <li>Abbey Falls</li>
          <li>Talakaveri</li>
          <li>Raja’s Seat</li>
          <li>Dubare Elephant Camp</li>
          <li>Nisargadhama</li>
        </ul>
        <p className="text-gray-700 mb-4"><strong>Best Time to Visit:</strong> October to March</p>
        <p className="text-gray-700 mb-4"><strong>Famous Attractions:</strong> Coffee Plantations, Bylakuppe, Chettalli</p>
        <p className="text-gray-700 mb-4"><strong>Top Activities:</strong> Trekking, River Rafting, Bird Watching</p>
        <p className="text-gray-700 mb-4"><strong>Cuisine:</strong> Pandi Curry, Kadumbuttu, Akki Roti</p>
      </section>

      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Kerala Backwaters</h2>
        <img src={KeralaBackwatersImage} alt="Kerala Backwaters" className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg" />
        <p className="text-gray-700 mb-4"><strong>Overview and Importance:</strong> The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and inlets, stretching across the state of Kerala. They are known for their unique ecosystem and are a major tourist attraction, offering a glimpse into traditional Kerala village life.</p>
        <p className="text-gray-700 mb-4"><strong>Places to Visit:</strong></p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Alleppey (Alappuzha)</li>
          <li>Kumarakom</li>
          <li>Kollam</li>
          <li>Kochi</li>
        </ul>
        <p className="text-gray-700 mb-4"><strong>Best Time to Visit:</strong> November to February</p>
        <p className="text-gray-700 mb-4"><strong>Famous Attractions:</strong> Houseboats, Vembanad Lake, Pathiramanal Island</p>
        <p className="text-gray-700 mb-4"><strong>Top Activities:</strong> Houseboat Cruise, Kayaking, Fishing</p>
        <p className="text-gray-700 mb-4"><strong>Cuisine:</strong> Karimeen Pollichathu, Appam with Stew, Prawn Curry</p>
      </section>

      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">Auroville</h2>
        <img src={AurovilleImage} alt="Auroville" className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg" />
        <p className="text-gray-700 mb-4"><strong>Overview and Importance:</strong> Auroville is an experimental township in Tamil Nadu and Pondicherry, founded in 1968 by Mirra Alfassa (known as 'The Mother') and designed by architect Roger Anger. It aims to be a universal town where people from all over the world live in harmony, transcending nationalities and beliefs.</p>
        <p className="text-gray-700 mb-4"><strong>Places to Visit:</strong></p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Matrimandir</li>
          <li>Auroville Beach</li>
          <li>Auroville Botanical Gardens</li>
        </ul>
        <p className="text-gray-700 mb-4"><strong>Best Time to Visit:</strong> October to March</p>
        <p className="text-gray-700 mb-4"><strong>Famous Attractions:</strong> Visitor’s Center, Savitribai Phule Women's Center, Solar Kitchen</p>
        <p className="text-gray-700 mb-4"><strong>Top Activities:</strong> Meditation and Yoga, Workshops and Seminars, Volunteering</p>
        <p className="text-gray-700 mb-4"><strong>Cuisine:</strong> Solar Kitchen Meals, Bread & Chocolate Café, Tantos</p>
      </section>

      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Sikkim</h2>
        <img src={SikkimImage} alt="Sikkim" className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg" />
        <p className="text-gray-700 mb-4"><strong>Overview and Importance:</strong> Sikkim is a small northeastern state in India, known for its mountainous terrain, rich biodiversity, and vibrant culture. It shares borders with Tibet, Bhutan, and Nepal and offers stunning views of the Himalayas, including Mount Kanchenjunga, the third-highest peak in the world.</p>
        <p className="text-gray-700 mb-4"><strong>Places to Visit:</strong></p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Gangtok</li>
          <li>Pelling</li>
          <li>Nathu La Pass</li>
          <li>Yuksom</li>
        </ul>
        <p className="text-gray-700 mb-4"><strong>Best Time to Visit:</strong> March to June and September to December</p>
        <p className="text-gray-700 mb-4"><strong>Famous Attractions:</strong> Lake Tsomgo, Rumtek Monastery, Gurudongmar Lake</p>
        <p className="text-gray-700 mb-4"><strong>Top Activities:</strong> Trekking, River Rafting, Bird Watching</p>
        <p className="text-gray-700 mb-4"><strong>Cuisine:</strong> Momos, Thukpa, Phagshapa</p>
      </section>
    </div>
  );
};

export default LearnMore;