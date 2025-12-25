import React from 'react';
import PlaceCard from './PlaceCard';
import { sataraContext } from '../data/sataraContext';

const HotelsSection: React.FC = () => {
  return (
    <section id="hotels" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Where to Stay</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From nature resorts near Kaas Plateau to premium city hotels - find your perfect accommodation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sataraContext.hotels.map((hotel, index) => (
            <PlaceCard
              key={index}
              name={hotel.name}
              marathi={hotel.marathi}
              type={hotel.type}
              description={`${hotel.amenities.slice(0, 3).join(', ')} and more amenities`}
              rating={hotel.rating}
              image={hotel.image}
              priceRange={hotel.priceRange}
              location={hotel.location}
              localTip={hotel.localTip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;