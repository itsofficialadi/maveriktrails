import React from 'react';
import { FaStar } from 'react-icons/fa';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'John Doe',
    text: 'Maverick Trails offers an exceptional travel experience with a strong focus on sustainability. Highly recommended!',
    rating: 5,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jane Smith',
    text: 'An unforgettable journey! The eco-friendly approach of Maverick Trails made our vacation even more special.',
    rating: 4,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Puneet Superstar',
    text: 'Yaaaay',
    rating: 5,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Deepak Kalal',
    text: 'Rom Rom Bhaiyo',
    rating: 4,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Bhupinder Jogi',
    text: 'Bhupinder Jogi.',
    rating: 5,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Hindustani Bhau',
    text: 'Ruk abhi batata hai mai',
    rating: 4,
    image: 'https://via.placeholder.com/150'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <div className="overflow-hidden relative">
        <div
          className="marquee flex space-x-4"
          style={{
            display: 'flex',
            animation: 'marquee 15s linear infinite',
            width: 'max-content'
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg mx-4 flex-shrink-0 w-80">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
