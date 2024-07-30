import React from 'react';
import 'aos/dist/aos.css';

// Sample images for Trekking Routes
import chopta from '/src/activities/TrekIMG/Chopta-Tungnath-Chandrashila Trek-min.jpg';
import roopkund from '/src/activities/TrekIMG/Roopkund-min.jpg';
import markha from '/src/activities/TrekIMG/Markha Valley Trek-min.jpg';
import kedarkantha from '/src/activities/TrekIMG/Kedarkantha Trek-min.jpg';
import hampta from '/src/activities/TrekIMG/hampta-pass-min.jpg';
import everest from '/src/activities/TrekIMG/Everest-Base-Camp-min.jpg';
import bhrigu from '/src/activities/TrekIMG/Bhrigu Lake Trek-min.jpeg';
import nandaDevi from '/src/activities/TrekIMG/Nanda Devi Base Camp Trek-min.jpg';
import goecha from '/src/activities/TrekIMG/Goechala Trek-min.jpeg';
import triund from '/src/activities/TrekIMG/Triund Trek-min.jpeg';
import valleyOfFlowers from '/src/activities/TrekIMG/Valley of Flowers Trek-min.jpg';
import pinParvati from '/src/activities/TrekIMG/Pin Parvati Pass Trek-min.jpeg';

const treks = [
  {
    image: chopta,
    title: 'Chopta-Tungnath-Chandrashila Trek',
    startingPoint: 'Chopta, Uttarakhand',
    endPoint: 'Chandrashila Peak, Uttarakhand',
    distance: 'Approximately 22 km (round trip)',
    description: 'This trek is known for its breathtaking views of the Himalayan peaks, including Nanda Devi and Trishul. The trek takes you through lush meadows and dense forests to the highest Shiva temple at Tungnath and the summit of Chandrashila.',
    features: [
      'Duration: 4-5 days',
      'Difficulty: Moderate',
      'Best Time to Trek: May-June and September-November',
      'Significance: Chandrashila offers panoramic views of the Himalayan ranges and is considered a sacred site.',
      'Important Tips: Carry warm clothing as temperatures can drop even in summer. Ensure you are acclimatized to high altitudes.'
    ]
  },
  {
    image: roopkund,
    title: 'Roopkund Trek',
    startingPoint: 'Lohajung, Uttarakhand',
    endPoint: 'Roopkund Lake, Uttarakhand',
    distance: 'Approximately 53 km (round trip)',
    description: 'Famous for its mysterious skeletal remains, the Roopkund Trek offers an adventure through alpine meadows, dense forests, and snow-capped peaks. The trek culminates at the high-altitude Roopkund Lake.',
    features: [
      'Duration: 8-10 days',
      'Difficulty: Moderate to Difficult',
      'Best Time to Trek: May-June and September-October',
      'Significance: The lake is renowned for the human skeletons found at its edge, believed to be remnants of a historic event.',
      'Important Tips: Prepare for extreme weather conditions and carry proper trekking gear, including crampons for snow.'
    ]
  },
  {
    image: markha,
    title: 'Markha Valley Trek',
    startingPoint: 'Leh, Ladakh',
    endPoint: 'Markha Village, Ladakh',
    distance: 'Approximately 80 km (one way)',
    description: 'This trek takes you through the beautiful Markha Valley, crossing high passes and picturesque villages. You will experience the unique culture of Ladakh and stunning landscapes of the Himalayas.',
    features: [
      'Duration: 8-12 days',
      'Difficulty: Moderate to Difficult',
      'Best Time to Trek: June-September',
      'Significance: Offers a blend of cultural experiences and breathtaking views of the Ladakhi landscape.',
      'Important Tips: Acclimatize in Leh before starting the trek and carry ample water and high-altitude medication.'
    ]
  },
  {
    image: kedarkantha,
    title: 'Kedarkantha Trek',
    startingPoint: 'Sankri, Uttarakhand',
    endPoint: 'Kedarkantha Peak, Uttarakhand',
    distance: 'Approximately 20 km (round trip)',
    description: 'This trek is known for its beautiful snow-covered landscapes and panoramic views of the Himalayan ranges. The trek is ideal for beginners and offers a perfect introduction to high-altitude trekking.',
    features: [
      'Duration: 6-7 days',
      'Difficulty: Easy to Moderate',
      'Best Time to Trek: December-April',
      'Significance: Provides stunning views of peaks like Swargarohini, Black Peak, and Bandarpoonch.',
      'Important Tips: Prepare for cold temperatures and ensure you have adequate winter gear.'
    ]
  },
  {
    image: hampta,
    title: 'Hampta Pass Trek',
    startingPoint: 'Manali, Himachal Pradesh',
    endPoint: 'Chatru, Himachal Pradesh',
    distance: 'Approximately 35 km (one way)',
    description: 'This trek offers a dramatic contrast between lush green valleys and barren landscapes. The Hampta Pass is a high-altitude pass that connects the Kullu Valley with the Spiti Valley.',
    features: [
      'Duration: 5-6 days',
      'Difficulty: Moderate',
      'Best Time to Trek: June-September',
      'Significance: Provides a unique opportunity to experience diverse landscapes in a short span.',
      'Important Tips: Weather can change rapidly, so be prepared for both rain and sunshine.'
    ]
  },
  {
    image: everest,
    title: 'Everest Base Camp Trek',
    startingPoint: 'Lukla, Nepal',
    endPoint: 'Everest Base Camp, Nepal',
    distance: 'Approximately 130 km (round trip)',
    description: 'One of the most famous trekking routes in the world, the Everest Base Camp trek offers stunning views of the world\'s highest peak and the surrounding Khumbu region.',
    features: [
      'Duration: 12-14 days',
      'Difficulty: Moderate to Difficult',
      'Best Time to Trek: April-May and September-October',
      'Significance: Provides a close-up view of Mount Everest and the opportunity to experience Sherpa culture.',
      'Important Tips: Proper acclimatization is crucial. Ensure you have travel insurance that covers high-altitude trekking.'
    ]
  },
  {
    image: bhrigu,
    title: 'Bhrigu Lake Trek',
    startingPoint: 'Gulaba, Himachal Pradesh',
    endPoint: 'Bhrigu Lake, Himachal Pradesh',
    distance: 'Approximately 22 km (round trip)',
    description: 'Known for its emerald green lake, this trek takes you through meadows and alpine forests. The lake is considered sacred and offers stunning panoramic views of the surrounding peaks.',
    features: [
      'Duration: 4-5 days',
      'Difficulty: Moderate',
      'Best Time to Trek: June-September',
      'Significance: The lake is associated with ancient legends and is revered by locals.',
      'Important Tips: Carry enough water as there are limited sources on the trek.'
    ]
  },
  {
    image: nandaDevi,
    title: 'Nanda Devi Base Camp Trek',
    startingPoint: 'Joshimath, Uttarakhand',
    endPoint: 'Nanda Devi Base Camp, Uttarakhand',
    distance: 'Approximately 55 km (round trip)',
    description: 'This trek offers a close view of Nanda Devi, India\'s second-highest peak. The trek traverses through picturesque landscapes and lush forests, culminating at the base of this majestic peak.',
    features: [
      'Duration: 10-12 days',
      'Difficulty: Moderate to Difficult',
      'Best Time to Trek: June-September',
      'Significance: Provides unparalleled views of Nanda Devi and its surrounding peaks.',
      'Important Tips: Obtain necessary permits and ensure proper acclimatization before the trek.'
    ]
  },
  {
    image: goecha,
    title: 'Goechala Trek',
    startingPoint: 'Yuksom, Sikkim',
    endPoint: 'Goechala Pass, Sikkim',
    distance: 'Approximately 90 km (round trip)',
    description: 'This trek takes you through the pristine landscapes of Sikkim, with stunning views of Kanchenjunga, the third-highest peak in the world. The trek passes through diverse flora and fauna.',
    features: [
      'Duration: 10-12 days',
      'Difficulty: Moderate to Difficult',
      'Best Time to Trek: April-June and September-November',
      'Significance: Offers breathtaking views of Kanchenjunga and the surrounding peaks.',
      'Important Tips: Carry proper gear for cold weather and be prepared for high-altitude trekking.'
    ]
  },
  {
    image: triund,
    title: 'Triund Trek',
    startingPoint: 'McLeod Ganj, Himachal Pradesh',
    endPoint: 'Triund, Himachal Pradesh',
    distance: 'Approximately 18 km (round trip)',
    description: 'This short trek offers stunning views of the Dhauladhar range and the Kangra Valley. It\'s a popular choice for beginners and those looking for a quick Himalayan adventure.',
    features: [
      'Duration: 1-2 days',
      'Difficulty: Easy to Moderate',
      'Best Time to Trek: March-June and September-December',
      'Significance: Offers panoramic views and a chance to experience Himalayan landscapes.',
      'Important Tips: Weather can be unpredictable; carry layers of clothing and be prepared for sudden changes.'
    ]
  },
  {
    image: valleyOfFlowers,
    title: 'Valley of Flowers Trek',
    startingPoint: 'Joshimath, Uttarakhand',
    endPoint: 'Valley of Flowers, Uttarakhand',
    distance: 'Approximately 55 km (round trip)',
    description: 'This trek takes you through a UNESCO World Heritage Site known for its vibrant meadows of alpine flowers. The trek is a visual feast and offers a unique experience amidst stunning landscapes.',
    features: [
      'Duration: 6-8 days',
      'Difficulty: Moderate',
      'Best Time to Trek: July-September',
      'Significance: The valley is home to a wide variety of flowering plants and offers breathtaking scenery.',
      'Important Tips: Ensure to visit the valley during the blooming season and obtain the required permits.'
    ]
  },
  {
    image: pinParvati,
    title: 'Pin Parvati Pass Trek',
    startingPoint: 'Manali, Himachal Pradesh',
    endPoint: 'Spiti Valley, Himachal Pradesh',
    distance: 'Approximately 100 km (one way)',
    description: 'This challenging trek crosses the high-altitude Pin Parvati Pass and connects the Kullu Valley with Spiti Valley. The trek offers diverse landscapes, from lush forests to arid terrains.',
    features: [
      'Duration: 12-15 days',
      'Difficulty: Difficult',
      'Best Time to Trek: July-September',
      'Significance: The pass offers stunning views of the Spiti Valley and provides a unique experience crossing a high-altitude pass.',
      'Important Tips: Prepare for extreme weather conditions and high altitudes. Ensure you have proper trekking equipment and acclimatize before the trek.'
    ]
  }
];

const Trek = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
          <h1 className="text-4xl font-bold text-center mb-12 gradient-text font-display" data-aos="fade-up">
            Top Trekking and Hiking Routes in India
          </h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {treks.map((trek, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-x-2 hover:translate-y-2"
                data-aos="fade-up"
              >
                <img src={trek.image} alt={trek.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h2 className="text-xl font-bold">{trek.title}</h2>
                  <p className="italic text-sm mb-2">{trek.startingPoint} to {trek.endPoint}</p>
                  <p className="text-sm mb-2"><strong>Total Distance:</strong> {trek.distance}</p>
                  <p className="mt-2">{trek.description}</p>
                  <ul className="mt-4 list-disc list-inside">
                    {trek.features.map((feature, i) => (
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

export default Trek;
