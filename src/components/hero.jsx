import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import sikkim from '/src/assets/sikkim-min.jpg';
import auroville from '/src/assets/Auroville-min.jpg';
import keralaBackwaters from '/src/assets/kerala-backwaters-min.jpg';
import coorg from '/src/assets/coorg-min.jpg';
import himachalPradesh from '/src/assets/himachal-pradesh-min.jpg';

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const heading = headingRef.current;

    gsap.fromTo(
      heading,
      { scale: 3, y: 200, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  const carouselItems = [
    {
      src: sikkim,
      type: 'image',
      alt: 'Photo by Abhishek Singh on Unsplash',
      title: 'Sikkim',
      description: 'Sikkim is the first Indian state that banned plastic bottles and encouraged people to use bamboo bottles instead. The place is all about green valleys, pretty glaciers, lakes and national parks.',
      path: '/learn-more',
    },
    {
      src: auroville,
      type: 'image',
      alt: 'Auroville',
      title: 'Auroville',
      description: 'It’s a place where sustainable living, non-traditional lifestyles and a spiritual life go hand in hand.',
      path: '/learn-more',
    },
    {
      src: keralaBackwaters,
      type: 'image',
      alt: 'Photo by Kyran Low on Unsplash',
      title: 'Kerala Backwaters',
      description: 'Amidst the paddy fields and lush green palm grove these backwaters have their own gentle rhythm hewed out from the rivers which flow down from the Western Ghats to the coast of India.',
      path: '/learn-more',
    },
    {
      src: coorg,
      type: 'image',
      alt: 'Coorg',
      title: 'Coorg',
      description: 'Dressed in old-world charm, dreamy-looking hills, coffee, and cardamom plantations, it is the perfect eco-tourist destination. The hospitality of the people belonging to the Kodava community will win you over, as will the picturesque beauty of the place.',
      path: '/learn-more',
    },
    {
      src: himachalPradesh,
      type: 'image',
      alt: 'Photo by Ashwini Chaudhary (Monty) on Unsplash',
      title: 'Himachal Pradesh',
      description: 'The state is home to several prominent tourist destinations, including Shimla, Manali, Dharamshala, and Dalhousie, each offering a unique blend of natural beauty and cultural heritage.',
      path: '/learn-more',
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
            <div className="relative w-full h-full">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover filter brightness-50" />
              ) : (
                <video src={item.src} alt={item.alt} className="w-full h-full object-cover filter brightness-50" autoPlay loop muted />
              )}
            </div>
            <div className="absolute bottom-10 left-10 bg-white bg-opacity-70 p-6 rounded-lg text-black max-w-md group-hover:bg-opacity-90 transition-all">
              <h2 className="text-3xl font-display font-bold">{item.title}</h2>
              <p className="mt-4">{item.description}</p>
              <Link to={item.path} className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="relative bg-background text-black p-10 mt-10" data-aos="fade-up">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-10xl font-display font-bold mb-6 text-primary absolute top-0 left-0 w-full"
          style={{ top: '0', paddingTop: '1rem' }}
        >
          Welcome to Maverick Trails
        </h1>
        <div ref={paragraphsRef} className="relative mt-32">
          <p className="text-lg font-sans mb-4" data-aos="fade-up" data-aos-delay="100">
            At Maverick Trails, we believe that travel can be both thrilling and kind to the planet. Our platform is a passionate endeavor to make sustainable tourism the norm rather than the exception.
          </p>
          <p className="text-lg font-sans mb-4" data-aos="fade-up" data-aos-delay="200">
            Imagine a space where eco-friendly travel destinations, green accommodations, and mindful activities come together, just waiting to be explored. Maverick Trails is here to guide environmentally conscious travelers to make choices that not only create unforgettable memories but also support our beautiful Earth and its communities.
          </p>
          <p className="text-lg font-sans mb-4" data-aos="fade-up" data-aos-delay="300">
            By offering a treasure trove of resources, heartfelt recommendations, and intuitive booking options, we hope to inspire a new way of traveling—one that leaves a positive mark on the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
