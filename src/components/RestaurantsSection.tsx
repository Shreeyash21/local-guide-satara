import React from 'react';
import PlaceCard from './PlaceCard';
import { sataraContext } from '../data/sataraContext';

const RestaurantsSection: React.FC = () => {
  return (
    <section id="restaurants" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Where to Dine</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience diverse flavors from traditional Maharashtrian cuisine to modern continental dining
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sataraContext.restaurants.map((restaurant, index) => (
            <PlaceCard
              key={index}
              name={restaurant.name}
              marathi={restaurant.marathi}
              type={restaurant.cuisine}
              description={restaurant.specialty}
              rating={restaurant.rating}
              image={restaurant.image}
              priceRange={restaurant.priceRange}
              location={restaurant.location}
              timings={restaurant.timings}
              localTip={restaurant.localTip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;