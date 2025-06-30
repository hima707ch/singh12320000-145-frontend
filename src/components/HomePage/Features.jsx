import React from 'react';
import images from '../assets/images';

const Features = ({ announcements, loading }) => {
  return (
    <section id="Features_1" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 id="Features_2" className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Announcements</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements?.map((announcement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 id={`Features_${index + 3}`} className="font-semibold text-xl mb-3 text-gray-800">{announcement.title}</h3>
                <p className="text-gray-600 mb-4">{announcement.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{announcement.date}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;