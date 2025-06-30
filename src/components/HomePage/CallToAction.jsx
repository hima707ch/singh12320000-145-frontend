import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">Ready to Join Our School?</h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Take the first step towards excellence in education. Enroll now and be part of our vibrant learning community.</p>
        <div className="flex justify-center space-x-6">
          <button id="CTA_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Apply Now</button>
          <button id="CTA_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">Schedule a Visit</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;