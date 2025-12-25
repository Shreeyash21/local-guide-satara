import React from 'react';
import PlaceCard from './PlaceCard';
import { sataraContext } from '../data/sataraContext';

const PlacesSection: React.FC = () => {
  return (
    <section id="places" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Places to Visit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Satara's rich heritage from historic Maratha forts to UNESCO World Heritage sites
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sataraContext.landmarks.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              marathi={place.marathi}
              type={place.type}
              description={place.significance}
              rating={place.rating}
              image={place.image}
              timings={place.timings}
              priceRange={place.entryFee}
              location={place.distance}
              localTip={place.localTip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;