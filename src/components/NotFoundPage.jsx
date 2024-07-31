// src/NotFoundPage.jsx

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '/public/404-animation.json'; // Update this path to your Lottie animation file

const NotFoundPage = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Initialize Lottie animation
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    // Clean up the animation on component unmount
    return () => lottie.stop();
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-pink-100">
      <div
        ref={animationContainer}
        className="absolute inset-0 z-0 w-full h-full"
      ></div>
    </div>
  );
};

export default NotFoundPage;
