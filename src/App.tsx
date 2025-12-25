import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PlacesSection from './components/PlacesSection';
import HotelsSection from './components/HotelsSection';
import RestaurantsSection from './components/RestaurantsSection';
import FoodSection from './components/FoodSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <PlacesSection />
      <HotelsSection />
      <RestaurantsSection />
      <FoodSection />
      <Footer />
    </div>
  );
}

export default App;