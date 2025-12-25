import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏰</span>
            <span className="text-xl font-bold text-gray-800">Satara Guide</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('places')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Places
            </button>
            <button
              onClick={() => scrollToSection('hotels')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Hotels
            </button>
            <button
              onClick={() => scrollToSection('restaurants')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Restaurants
            </button>
            <button
              onClick={() => scrollToSection('food')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Food
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('places')}
                className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                Places
              </button>
              <button
                onClick={() => scrollToSection('hotels')}
                className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                Hotels
              </button>
              <button
                onClick={() => scrollToSection('restaurants')}
                className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                Restaurants
              </button>
              <button
                onClick={() => scrollToSection('food')}
                className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
              >
                Food
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;