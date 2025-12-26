import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🏰</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">The Local Guide – SATARA</h1>
              <p className="text-orange-100 text-lg">सातारा शहर मार्गदर्शक • Discover the Heart of Maharashtra</p>
              <p className="text-orange-200 text-sm mt-1">© POLYMATHIST</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;