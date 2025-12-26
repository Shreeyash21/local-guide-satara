import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
          
          {/* Emergency Numbers */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Emergency Numbers</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <span>🚑</span>
                <span>Ambulance: <span className="text-red-400 font-bold">108</span></span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🚓</span>
                <span>Police: <span className="text-red-400 font-bold">100</span></span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🔥</span>
                <span>Fire Brigade: <span className="text-red-400 font-bold">101</span></span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🆘</span>
                <span>Women Helpline: <span className="text-red-400 font-bold">181</span></span>
              </li>
              <li className="flex items-center space-x-2">
                <span>👶</span>
                <span>Child Helpline: <span className="text-red-400 font-bold">1098</span></span>
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              * Toll-free numbers available 24/7
            </p>
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
          <p className="text-gray-400 text-sm mb-3">
            © 2024 The Local Guide - Satara. Made with ❤️ for exploring Maharashtra's heritage city.
          </p>
          <div className="flex items-center justify-center space-x-3 text-gray-500 text-xs">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logos/polymathist-logo.svg" 
                alt="POLYMATHIST Logo" 
                className="w-5 h-5"
                onError={(e) => {
                  console.error('POLYMATHIST logo failed to load');
                  // Replace with a simple text logo if image fails
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    e.currentTarget.style.display = 'none';
                    const textLogo = document.createElement('span');
                    textLogo.textContent = 'P';
                    textLogo.className = 'w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold';
                    parent.insertBefore(textLogo, e.currentTarget);
                  }
                }}
                onLoad={() => {
                  console.log('POLYMATHIST SVG logo loaded successfully');
                }}
              />
              <span className="text-orange-400 font-medium">©</span>
              <span className="font-medium">Copyright POLYMATHIST</span>
            </div>
            <span className="text-orange-400">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;