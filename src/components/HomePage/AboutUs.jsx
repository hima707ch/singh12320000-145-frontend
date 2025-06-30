import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src={images[1] || 'https://placeholder.com/600x400'} alt="About Us" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 id="AboutUs_2" className="text-3xl font-bold mb-6 text-gray-800">Why Choose Our School?</h2>
            <p id="AboutUs_3" className="text-gray-600 mb-6">We believe in providing excellence in education through innovative teaching methods and a supportive learning environment.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_4" className="font-semibold text-blue-900 mb-2">Expert Faculty</h3>
                <p className="text-sm text-gray-600">Highly qualified teachers dedicated to student success</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_5" className="font-semibold text-blue-900 mb-2">Modern Facilities</h3>
                <p className="text-sm text-gray-600">State-of-the-art infrastructure for optimal learning</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_6" className="font-semibold text-blue-900 mb-2">Holistic Development</h3>
                <p className="text-sm text-gray-600">Focus on academic and personal growth</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 id="AboutUs_7" className="font-semibold text-blue-900 mb-2">Global Perspective</h3>
                <p className="text-sm text-gray-600">International exposure and diverse learning opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;