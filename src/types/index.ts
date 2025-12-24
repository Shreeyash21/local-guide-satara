// Type definitions for The Local Guide - Satara

export interface Landmark {
  name: string;
  marathi: string;
  type: string;
  significance: string;
  localTip?: string;
  image?: string;
  rating?: number;
  timings?: string;
  entryFee?: string;
  distance?: string;
  bestTime?: string;
}

export interface Hotel {
  name: string;
  marathi: string;
  type: string;
  rating: number;
  priceRange: string;
  amenities: string[];
  location: string;
  contact: string;
  image: string;
  localTip: string;
}

export interface Restaurant {
  name: string;
  marathi: string;
  cuisine: string;
  specialty: string;
  rating: number;
  priceRange: string;
  location: string;
  timings: string;
  image: string;
  localTip: string;
}

export interface LocalPhrase {
  marathi: string;
  english: string;
  usage: string;
}

export interface LocalSlang {
  word: string;
  meaning: string;
  context: string;
}

export interface Dish {
  name: string;
  marathi: string;
  description: string;
  whereToFind?: string;
  localTip?: string;
  culturalNote?: string;
  price?: string;
  spiceLevel?: string;
  image?: string;
}

export interface PopularEatery {
  name: string;
  specialty: string;
  mustTry: string;
  priceRange: string;
}

export interface Festival {
  name: string;
  marathi?: string;
  significance: string;
  localTradition?: string;
  timing?: string;
}

export interface SataraContextData {
  cityInfo: {
    name: string;
    state: string;
    district: string;
    population: string;
    altitude: string;
    climate: string;
    languages: string[];
  };
  landmarks: Landmark[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  localLanguage: {
    commonPhrases: LocalPhrase[];
    localSlang: LocalSlang[];
  };
  foodCulture: {
    specialDishes: Dish[];
    popularEateries: PopularEatery[];
  };
  festivals: Festival[];
  transportation: {
    localTransport: string[];
    connectivity: {
      nearestAirport: string;
      railwayStation: string;
      majorHighways: string[];
    };
  };
  weather: {
    summer: string;
    monsoon: string;
    winter: string;
    bestTimeToVisit: string;
  };
  businessCulture: {
    shopTimings: string;
    lunchBreak: string;
    weeklyOff: string;
    marketDays: string;
  };
}