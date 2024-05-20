"use client"
import { useRef, useEffect } from 'react';

const DotFollowMouse = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = dotRef.current;
      if (!dot) return;

      const container = dot.parentElement;

      // Calculate the position of the dot relative to the container
      const x = e.clientX - container.offsetLeft;
      const y = e.clientY - container.offsetTop;

      // Set the position of the dot
      setTimeout(() => {
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
      }, 80);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

      <div
        id="dot"
        ref={dotRef}
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
        }}
      ></div>

  );
};

export default DotFollowMouse;
