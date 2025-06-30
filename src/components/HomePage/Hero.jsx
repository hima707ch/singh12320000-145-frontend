import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="20" fill="white" />
        </svg>
        <svg className="absolute right-0 bottom-0 opacity-20" viewBox="0 0 100 100">
          <rect width="40" height="40" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Empowering Education</span>
              <span className="block mt-2 animate-bounce">Together</span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-lg mb-8">Transform your educational journey with our comprehensive school management system.</p>
            <div className="space-x-4">
              <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started</button>
              <button id="Hero_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={images[0] || 'https://placeholder.com/800x600'} alt="Education" className="rounded-lg shadow-2xl animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;