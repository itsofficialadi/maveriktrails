import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Hero = () => {
  const carouselItems = [
    {
      src: 'src/assets/sikkim-min.jpg',
      type: 'image',
      alt: 'Photo by Abhishek Singh on Unsplash',
      title: 'Sikkim',
      description: 'Sikkim is the first Indian state that banned plastic bottles and encouraged people to use bamboo bottles instead. The place is all about green valleys, pretty glaciers, lakes and national parks.',
      link: '/learn-more',
    },
    {
      src: 'src/assets/Auroville-min.jpg',
      type: 'image',
      alt: 'auroville',
      title: 'Auroville',
      description: 'It’s a place where sustainable living, non-traditional lifestyles and a spiritual life go hand in hand.',
      link: '/learn-more',
    },
    {
      src: 'src/assets/kerala-backwaters-min.jpg',
      type: 'image',
      alt: 'Photo by kyran low on Unsplash',
      title: 'Kerela Backwaters',
      description: 'Amidst the paddy fields and lush green palm grove these backwaters have its own gentle rhythm hewed out from the rivers which flow down from the Western Ghats to the coast of India.',
      link: '/learn-more',
    },
    {
      src: 'src/assets/coorg-min.jpg',
      type: 'image',
      alt: 'Coorg',
      title: 'Coorg',
      description: 'Dressed in old-world charm, dreamy-looking hills, coffee, and cardamom plantations, it is the perfect eco-tourist destination. The hospitality of the people belonging to the Kodava community will win you over, as will the picturesque beauty of the place.',
      link: '/learn-more',
    },
    {
      src: 'src/assets/himachal-pradesh-min.jpg',
      type: 'image',
      alt: 'Photo by Ashwini Chaudhary(Monty) on Unsplash',
      title: 'Himachal Pradesh',
      description: 'The state is home to several prominent tourist destinations, including Shimla, Manali, Dharamshala, and Dalhousie, each offering a unique blend of natural beauty and cultural heritage.',
      link: '/learn-more',
    },
  ];

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute left-0 z-10 p-2 transform -translate-y-1/2 bg-white rounded-full top-1/2 text-primary hover:bg-primary hover:text-white transition-all"
      >
        <FaArrowCircleLeft size={32} />
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute right-0 z-10 p-2 transform -translate-y-1/2 bg-white rounded-full top-1/2 text-primary hover:bg-primary hover:text-white transition-all"
      >
        <FaArrowCircleRight size={32} />
      </button>
    );

  return (
    <div className="relative text-center text-white py-20">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-screen group">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            ) : (
              <video src={item.src} alt={item.alt} className="w-full h-full object-cover" autoPlay loop muted />
            )}
            <div className="absolute bottom-10 left-10 bg-white bg-opacity-70 p-6 rounded-lg text-black max-w-md group-hover:bg-opacity-90 transition-all">
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="mt-4">{item.description}</p>
              <a href={item.link} className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
