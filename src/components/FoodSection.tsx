import React, { useState } from 'react';
import { sataraContext } from '../data/sataraContext';

const FoodSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="food" className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Famous Satara Foods</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taste the authentic flavors that make Satara special - from the famous Kandi Pedha to spicy Misal Pav
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sataraContext.foodCulture.specialDishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Food Image */}
              <div className="h-48 bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center relative overflow-hidden">
                {dish.image && !imageErrors[index] ? (
                  <>
                    <img
                      src={dish.image}
                      alt={`${dish.name} - ${dish.marathi}`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onError={() => handleImageError(index)}
                      onLoad={() => handleImageLoad(index)}
                    />
                    {!imageLoaded[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🍛</div>
                    <div className="text-sm px-4">{imageErrors[index] ? 'Image coming soon' : dish.name}</div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{dish.marathi}</p>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{dish.description}</p>
                
                <div className="space-y-2 text-sm">
                  {dish.price && (
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-600 mr-2">💰</span>
                      <span className="font-medium">{dish.price}</span>
                    </div>
                  )}
                  
                  {dish.whereToFind && (
                    <div className="flex items-center text-gray-600">
                      <span className="text-blue-600 mr-2">📍</span>
                      <span>{dish.whereToFind}</span>
                    </div>
                  )}
                  
                  {dish.spiceLevel && (
                    <div className="flex items-center text-gray-600">
                      <span className="text-red-600 mr-2">🌶️</span>
                      <span>Spice Level: {dish.spiceLevel}</span>
                    </div>
                  )}
                </div>
                
                {(dish.localTip || dish.culturalNote) && (
                  <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                    <p className="text-sm text-orange-800">
                      <span className="font-medium">💡 {dish.localTip ? 'Local Tip' : 'Cultural Note'}:</span> {dish.localTip || dish.culturalNote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;