"use client"
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  number: number;
  text: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number, text }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1000; // Animation duration in milliseconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentNumber = Math.round(percentage * number);

      setDisplayNumber(currentNumber);

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (number > 0) {
      setDisplayNumber(0);
      animationRef.current = requestAnimationFrame(animate);
    }else {
      setDisplayNumber(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <span className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        {displayNumber}
      </span>
      <span className="text-lg text-gray-600 dark:text-gray-400 mt-2">
        {text}
      </span>
    </div>
  );
};

export default AnimatedNumber;