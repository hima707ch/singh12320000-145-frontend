import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Features from './Features';
import CallToAction from './CallToAction';
import Footer from './Footer';
import images from '../assets/images';
import useHome from './useHome';

const Body = () => {
  const { announcements, loading, error } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <Features announcements={announcements} loading={loading} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;