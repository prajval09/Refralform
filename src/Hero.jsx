// src/components/Hero.jsx
import React from 'react';

const Hero = ({ onOpenModal }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Let's Learn & Earn</h1>
        <p className="text-2xl mb-6">Get a chance to win up to Rs. 15,000</p>
        <button
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded"
          onClick={onOpenModal}
        >
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
