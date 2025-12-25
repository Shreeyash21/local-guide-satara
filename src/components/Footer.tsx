import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏰</span>
              <h3 className="text-xl font-bold">Satara Guide</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your comprehensive guide to exploring the beautiful city of Satara, Maharashtra. 
              Discover heritage, taste authentic cuisine, and experience warm hospitality.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#places" className="text-gray-300 hover:text-orange-400 transition-colors">Places to Visit</a></li>
              <li><a href="#hotels" className="text-gray-300 hover:text-orange-400 transition-colors">Hotels</a></li>
              <li><a href="#restaurants" className="text-gray-300 hover:text-orange-400 transition-colors">Restaurants</a></li>
              <li><a href="#food" className="text-gray-300 hover:text-orange-400 transition-colors">Famous Foods</a></li>
            </ul>
          </div>
          
          {/* Famous Places */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Famous Places</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Ajinkyatara Fort</li>
              <li>Kaas Plateau (UNESCO)</li>
              <li>Thoseghar Waterfalls</li>
              <li>Sajjangad Fort</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Satara</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Satara, Maharashtra, India</p>
              <p>🚂 Satara Railway Station</p>
              <p>✈️ Nearest: Pune Airport (120km)</p>
              <p>🌤️ Best Time: October - March</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Local Guide - Satara. Made with ❤️ for exploring Maharashtra's heritage city.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;