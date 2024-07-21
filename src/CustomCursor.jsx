import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(cursorRef.current, {
        x: x - cursorRef.current.clientWidth / 2,
        y: y - cursorRef.current.clientHeight / 2,
        duration: 0.1,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.05 }); // Instant disappearance
    };

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.05 }); // Instant appearance
    };

    const onClick = (e) => {
      const cloudAnim = document.createElement('div');
      cloudAnim.className = 'cloud-anim';
      cloudAnim.style.left = `${e.clientX}px`;
      cloudAnim.style.top = `${e.clientY}px`;
      document.body.appendChild(cloudAnim);

      gsap.to(cloudAnim, {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.body.removeChild(cloudAnim);
        },
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
};

export default CustomCursor;
