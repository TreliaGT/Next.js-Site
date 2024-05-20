// components/BubbleEffect.js
"use client"
import React, { useEffect } from 'react';

const BubbleEffect = ({ sectionId }) => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const section = document.getElementById(sectionId);
      section.appendChild(bubble);

      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 2 + 3}s`;

      setTimeout(() => {
        bubble.remove();
      }, 5000);
    };

    const interval = setInterval(createBubble, 300);

    return () => clearInterval(interval);
  }, [sectionId]);

  return null;
};

export default BubbleEffect;
