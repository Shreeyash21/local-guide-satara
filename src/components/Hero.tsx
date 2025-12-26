import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Satara
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the rich heritage, delicious cuisine, and warm hospitality of Satara city. 
          From historic forts to UNESCO World Heritage sites, from authentic Kandi Pedha to 
          luxury resorts - explore everything this beautiful Maharashtrian city has to offer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🏛️</div>
            <h3 className="text-xl font-semibold text-gray-800">4 Historic Places</h3>
            <p className="text-gray-600">Including UNESCO sites</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🏨</div>
            <h3 className="text-xl font-semibold text-gray-800">4 Premium Hotels</h3>
            <p className="text-gray-600">From nature resorts to luxury</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-800">4 Top Restaurants</h3>
            <p className="text-gray-600">Diverse culinary experiences</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🍛</div>
            <h3 className="text-xl font-semibold text-gray-800">5 Famous Foods</h3>
            <p className="text-gray-600">Authentic Satara specialties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;