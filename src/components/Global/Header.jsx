import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', route: '/' },
    { name: 'Login', route: '/loginpage' },
    { name: 'Register', route: '/registerpage' }
  ];

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" id="Header_2" className="flex items-center">
              <img
                className="h-10 w-auto"
                src={images[0]}
                alt="Logo"
                id="Header_3"
              />
              <span id="Header_4" className="ml-2 text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200">YourLogo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav id="Header_5" className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.route}
                id={`Header_${6 + index}`}
                className={`${location.pathname === item.route ? 'text-white border-b-2 border-white' : 'text-gray-200'} hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="Header_9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="Header_10" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.route}
                id={`Header_${11 + index}`}
                className={`${location.pathname === item.route ? 'bg-blue-800 text-white' : 'text-gray-200'} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-white transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;