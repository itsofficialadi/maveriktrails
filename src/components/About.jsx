import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(".fade-in", {
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="bg-green-50 text-gray-800">
      <div className="container mx-auto py-12 px-4 md:px-12">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">About Maverick Trails</h1>

        <section className="mb-12 fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Concept of the Project</h2>
          <p className="text-lg leading-relaxed">Welcome to Maverick Trails, where we believe that travel can be both thrilling and kind to the planet. Our platform is a passionate endeavor to make sustainable tourism the norm rather than the exception. Imagine a space where eco-friendly travel destinations, green accommodations, and mindful activities come together, just waiting to be explored. Maverick Trails is here to guide environmentally conscious travelers to make choices that not only create unforgettable memories but also support our beautiful Earth and its communities. By offering a treasure trove of resources, heartfelt recommendations, and intuitive booking options, we hope to inspire a new way of traveling—one that leaves a positive mark on the world.</p>
        </section>

        <section className="mb-12 fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Problem Statement</h2>
          <p className="text-lg leading-relaxed">Travelers today are more aware than ever of the environmental impact of their adventures. Yet, finding reliable, sustainable options can be daunting. Maverick Trails steps in to bridge this gap, creating a one-stop hub for discovering eco-friendly travel choices that make a real difference. Our platform is designed to help travelers navigate this journey with ease, so they can focus on the joy of discovery while knowing they're making a responsible choice.</p>
        </section>

        <section className="mb-12 fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Objective of the Project</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li><strong>Celebrate Sustainable Travel:</strong> We want to shine a spotlight on destinations, accommodations, and activities that are as good for the planet as they are for the soul.</li>
            <li><strong>Empower Local Communities:</strong> By connecting travelers with opportunities that benefit local economies, we hope to foster a genuine connection between visitors and the places they explore.</li>
            <li><strong>Educate and Inspire:</strong> We’re committed to offering valuable insights and practical tips to help travelers make eco-conscious decisions that align with their values.</li>
            <li><strong>Enhance the Journey:</strong> Our goal is to create a visually stunning, user-friendly platform that enriches the travel experience with engaging content and interactive features.</li>
          </ul>
        </section>

        <section className="mb-12 fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li><strong>Eco-Friendly Destination Listings:</strong> Discover a curated selection of travel spots that embrace sustainability, complete with detailed profiles on their green practices and certifications.</li>
            <li><strong>Green Accommodations:</strong> Find hotels, lodges, and hostels committed to reducing their environmental footprint, complete with user reviews focusing on their sustainability efforts.</li>
            <li><strong>Sustainable Activities:</strong> Explore and book eco-friendly adventures, from nature tours to local cultural experiences that make a positive impact.</li>
            <li><strong>Carbon Footprint Calculator:</strong> Measure and offset the carbon footprint of your travel plans with handy tools and tips for reducing your environmental impact.</li>
            <li><strong>Resource Center:</strong> Dive into articles, guides, and practical advice on sustainable travel practices and how to support local communities.</li>
            <li><strong>Rich Media Content:</strong> Immerse yourself in high-quality images, videos, and 360-degree virtual tours of destinations and accommodations.</li>
            <li><strong>Login Functionality:</strong> Enjoy a personalized experience with secure user authentication.</li>
          </ul>
        </section>

        <section className="mb-12 fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Methodology</h2>
          <p className="text-lg leading-relaxed">Creating Maverick Trails is a journey in itself. We’ll start by understanding the needs and dreams of our users, design an intuitive and engaging interface, and develop the platform using React and Tailwind CSS. Our team will ensure robust user authentication with Appwrite and add a touch of magic with GSAP animations. Through rigorous testing, deployment, and continuous feedback, we’ll refine the platform to make sure it’s as inspiring and effective as possible.</p>
        </section>

        <section className="fade-in">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Probable Outcome</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li><strong>Boosted Sustainable Travel Choices:</strong> Travelers will have easy access to eco-friendly options, making sustainable choices effortless.</li>
            <li><strong>Stronger Community Ties:</strong> Enhanced support for local economies and a deeper connection between travelers and communities.</li>
            <li><strong>Empowered Travelers:</strong> An informed and inspired user base that makes thoughtful travel decisions.</li>
            <li><strong>Enhanced Travel Experiences:</strong> A dynamic platform that makes discovering and booking sustainable travel options enjoyable and seamless.</li>
            <li><strong>Reduced Carbon Footprint:</strong> Practical tools to help travelers reduce and offset their environmental impact.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
