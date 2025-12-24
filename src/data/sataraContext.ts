export const sataraContext = {
  // Basic city information
  cityInfo: {
    name: "Satara",
    state: "Maharashtra",
    district: "Satara",
    population: "120,000+",
    altitude: "2,100 feet",
    climate: "Semi-arid with monsoons",
    languages: ["Marathi", "Hindi", "English"]
  },

  // Local landmarks and attractions
  landmarks: [
    {
      name: "Ajinkyatara Fort",
      marathi: "अजिंक्यतारा किल्ला",
      type: "Historical Fort",
      significance: "17th century Maratha fort, symbol of Satara",
      localTip: "Best visited early morning or evening. Locals call it 'Tara'",
      image: "/images/ajinkyatara-fort.jpg",
      rating: 4.5,
      timings: "6:00 AM - 6:00 PM",
      entryFee: "₹10 per person"
    },
    {
      name: "Satara Palace (Rajwada)",
      marathi: "सातारा राजवाडा",
      type: "Historical Palace",
      significance: "Former seat of Maratha Empire, built in 1699",
      localTip: "Photography allowed, but respect the heritage",
      image: "/images/satara-palace.jpg",
      rating: 4.2,
      timings: "9:00 AM - 5:00 PM",
      entryFee: "₹5 per person"
    },
    {
      name: "Yashwantrao Chavan Natyagruha",
      marathi: "यशवंतराव चव्हाण नाट्यगृह",
      type: "Cultural Center",
      significance: "Premier theater for Marathi plays and cultural events",
      image: "/images/natyagruha.jpg",
      rating: 4.3,
      timings: "Show timings vary"
    },
    {
      name: "Kaas Plateau",
      marathi: "कास पठार",
      type: "Natural Wonder",
      significance: "UNESCO World Heritage site, Valley of Flowers",
      localTip: "Visit during monsoon (Aug-Oct) for blooming flowers",
      image: "/images/kaas-plateau.jpg",
      rating: 4.8,
      distance: "25 km from Satara",
      bestTime: "August to October"
    },
    {
      name: "Thoseghar Waterfalls",
      marathi: "ठोसेघर धबधबा",
      type: "Waterfall",
      significance: "Series of waterfalls, highest drop of 200m",
      localTip: "Spectacular during monsoons, carry raincoat",
      image: "/images/thoseghar-falls.jpg",
      rating: 4.6,
      distance: "20 km from Satara",
      bestTime: "June to September"
    },
    {
      name: "Sajjangad Fort",
      marathi: "सज्जनगड किल्ला",
      type: "Historical Fort & Temple",
      significance: "Samadhi of Sant Ramdas, spiritual significance",
      localTip: "Peaceful place for meditation, good trekking spot",
      image: "/images/sajjangad.jpg",
      rating: 4.4,
      distance: "15 km from Satara",
      entryFee: "Free"
    }
  ],

  // Hotels and accommodation
  hotels: [
    {
      name: "Hotel Radhika Executive",
      marathi: "हॉटेल राधिका एक्झिक्यूटिव्ह",
      type: "Business Hotel",
      rating: 4.1,
      priceRange: "₹2,500 - ₹4,000 per night",
      amenities: ["AC", "WiFi", "Restaurant", "Room Service", "Parking"],
      location: "Near Bus Stand",
      contact: "+91 2162 234567",
      image: "/images/hotel-radhika.jpg",
      localTip: "Popular among business travelers, good restaurant"
    },
    {
      name: "Hotel Shreyas",
      marathi: "हॉटेल श्रेयस",
      type: "Budget Hotel",
      rating: 3.8,
      priceRange: "₹1,200 - ₹2,200 per night",
      amenities: ["AC", "WiFi", "Restaurant", "Parking"],
      location: "Shaniwar Peth",
      contact: "+91 2162 223344",
      image: "/images/hotel-shreyas.jpg",
      localTip: "Good value for money, clean rooms"
    },
    {
      name: "Satara Residency",
      marathi: "सातारा रेसिडेन्सी",
      type: "Mid-range Hotel",
      rating: 4.0,
      priceRange: "₹1,800 - ₹3,200 per night",
      amenities: ["AC", "WiFi", "Restaurant", "Conference Hall", "Parking"],
      location: "Powai Naka",
      contact: "+91 2162 245678",
      image: "/images/satara-residency.jpg",
      localTip: "Good for families, spacious rooms"
    },
    {
      name: "Hotel Surya Executive",
      marathi: "हॉटेल सूर्य एक्झिक्यूटिव्ह",
      type: "Luxury Hotel",
      rating: 4.3,
      priceRange: "₹3,500 - ₹6,000 per night",
      amenities: ["AC", "WiFi", "Multi-cuisine Restaurant", "Gym", "Spa", "Parking"],
      location: "Pune-Bangalore Highway",
      contact: "+91 2162 267890",
      image: "/images/hotel-surya.jpg",
      localTip: "Best luxury option in Satara, excellent service"
    }
  ],

  // Restaurants and eateries
  restaurants: [
    {
      name: "Hotel Radhika Restaurant",
      marathi: "हॉटेल राधिका रेस्टॉरंट",
      cuisine: "South Indian, North Indian",
      specialty: "Dosa, Idli, Punjabi dishes",
      rating: 4.2,
      priceRange: "₹150 - ₹400 per person",
      location: "Near Bus Stand",
      timings: "7:00 AM - 11:00 PM",
      image: "/images/radhika-restaurant.jpg",
      localTip: "Famous for breakfast, try their masala dosa"
    },
    {
      name: "Shivneri Restaurant",
      marathi: "शिवनेरी रेस्टॉरंट",
      cuisine: "Maharashtrian Thali",
      specialty: "Unlimited Maharashtrian Thali",
      rating: 4.4,
      priceRange: "₹200 - ₹350 per person",
      location: "Shaniwar Peth",
      timings: "11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM",
      image: "/images/shivneri-restaurant.jpg",
      localTip: "Authentic Maharashtrian food, very popular among locals"
    },
    {
      name: "Misal House",
      marathi: "मिसळ हाऊस",
      cuisine: "Local Street Food",
      specialty: "Satara Special Misal Pav",
      rating: 4.6,
      priceRange: "₹50 - ₹150 per person",
      location: "Near Railway Station",
      timings: "6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
      image: "/images/misal-house.jpg",
      localTip: "Best misal in Satara, must-try for spice lovers"
    },
    {
      name: "Cafe Coffee Day",
      marathi: "कॅफे कॉफी डे",
      cuisine: "Cafe, Continental",
      specialty: "Coffee, Sandwiches, Pastries",
      rating: 4.0,
      priceRange: "₹100 - ₹300 per person",
      location: "Powai Naka",
      timings: "8:00 AM - 11:00 PM",
      image: "/images/ccd-satara.jpg",
      localTip: "Good for hangouts, WiFi available"
    },
    {
      name: "Kokani Darbar",
      marathi: "कोकणी दरबार",
      cuisine: "Konkani, Seafood",
      specialty: "Fish Curry, Koliwada, Solkadhi",
      rating: 4.3,
      priceRange: "₹250 - ₹500 per person",
      location: "Godoli Road",
      timings: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
      image: "/images/kokani-darbar.jpg",
      localTip: "Best seafood in Satara, try their fish thali"
    },
    {
      name: "Bhel Puri Corner",
      marathi: "भेळ पुरी कॉर्नर",
      cuisine: "Street Food, Chaat",
      specialty: "Bhel Puri, Pani Puri, Sev Puri",
      rating: 4.1,
      priceRange: "₹30 - ₹100 per person",
      location: "Near Rajwada",
      timings: "4:00 PM - 10:00 PM",
      image: "/images/bhel-puri-corner.jpg",
      localTip: "Evening snack spot, very popular among students"
    }
  ],

  // Local language and slang
  localLanguage: {
    commonPhrases: [
      { marathi: "काय चालू आहे?", english: "What's going on?", usage: "Casual greeting" },
      { marathi: "भावा", english: "Brother/Friend", usage: "Addressing friends" },
      { marathi: "ताई", english: "Sister", usage: "Respectful address for women" },
      { marathi: "काका", english: "Uncle", usage: "Respectful address for older men" },
      { marathi: "मावशी", english: "Aunt", usage: "Respectful address for older women" }
    ],
    localSlang: [
      { word: "फटाका", meaning: "Excellent/Amazing", context: "Used for something impressive" },
      { word: "धमाल", meaning: "Fun/Party", context: "Having a good time" },
      { word: "जमतं", meaning: "It works/It's good", context: "Approval or agreement" }
    ]
  },

  // Local food culture
  foodCulture: {
    specialDishes: [
      {
        name: "Satara Special Misal",
        marathi: "सातारा स्पेशल मिसळ",
        description: "Spicy curry with sprouts, served with pav",
        whereToFind: "Misal House near Railway Station",
        price: "₹60 - ₹120",
        spiceLevel: "High",
        image: "/images/satara-misal.jpg"
      },
      {
        name: "Solkadhi",
        marathi: "सोलकढी",
        description: "Kokum-based drink, perfect for hot weather",
        localTip: "Best had with fish curry or spicy food",
        whereToFind: "Kokani Darbar, most Konkani restaurants",
        price: "₹40 - ₹80",
        image: "/images/solkadhi.jpg"
      },
      {
        name: "Bhakri with Pitla",
        marathi: "भाकरी आणि पिटळा",
        description: "Traditional rural meal - jowar bread with gram flour curry",
        culturalNote: "Staple food of rural Maharashtra",
        whereToFind: "Shivneri Restaurant, local dhabas",
        price: "₹80 - ₹150",
        image: "/images/bhakri-pitla.jpg"
      },
      {
        name: "Puran Poli",
        marathi: "पुरण पोळी",
        description: "Sweet flatbread stuffed with jaggery and lentils",
        culturalNote: "Festival special, made during Gudi Padwa",
        whereToFind: "Shivneri Restaurant, homemade during festivals",
        price: "₹25 - ₹50 per piece",
        image: "/images/puran-poli.jpg"
      },
      {
        name: "Koliwada Fish Fry",
        marathi: "कोळीवाडा फिश फ्राय",
        description: "Crispy fried fish with spicy coating",
        whereToFind: "Kokani Darbar",
        price: "₹200 - ₹350",
        spiceLevel: "Medium to High",
        image: "/images/koliwada-fish.jpg"
      }
    ],
    popularEateries: [
      {
        name: "Hotel Radhika",
        specialty: "South Indian breakfast",
        mustTry: "Masala Dosa, Filter Coffee",
        priceRange: "₹150 - ₹400"
      },
      {
        name: "Shivneri Restaurant",
        specialty: "Maharashtrian thali",
        mustTry: "Unlimited Thali",
        priceRange: "₹200 - ₹350"
      },
      {
        name: "Misal House",
        specialty: "Satara Special Misal",
        mustTry: "Misal Pav with extra pav",
        priceRange: "₹50 - ₹150"
      },
      {
        name: "Kokani Darbar",
        specialty: "Konkani seafood",
        mustTry: "Fish Curry Rice, Solkadhi",
        priceRange: "₹250 - ₹500"
      },
      {
        name: "Bhel Puri Corner",
        specialty: "Evening snacks",
        mustTry: "Bhel Puri, Pani Puri",
        priceRange: "₹30 - ₹100"
      }
    ]
  },

  // Festivals and events
  festivals: [
    {
      name: "Ganesh Chaturthi",
      marathi: "गणेश चतुर्थी",
      significance: "Major festival with elaborate celebrations",
      localTradition: "Community Ganpati mandals compete for best decoration"
    },
    {
      name: "Navratri",
      marathi: "नवरात्री",
      significance: "Nine nights of Goddess worship",
      localTradition: "Garba and dandiya raas at various venues"
    },
    {
      name: "Satara Mahotsav",
      significance: "Annual cultural festival showcasing local talent",
      timing: "Usually in winter months"
    }
  ],

  // Transportation
  transportation: {
    localTransport: [
      "Auto-rickshaws (most common)",
      "City buses (MSRTC)",
      "Private taxis",
      "Shared tempos for nearby villages"
    ],
    connectivity: {
      nearestAirport: "Pune Airport (120 km)",
      railwayStation: "Satara Railway Station",
      majorHighways: ["NH-4 (Mumbai-Bangalore)", "SH-14"]
    }
  },

  // Weather patterns
  weather: {
    summer: "March-May: Hot and dry, 25-40°C",
    monsoon: "June-September: Heavy rainfall, pleasant",
    winter: "October-February: Cool and pleasant, 10-25°C",
    bestTimeToVisit: "October to March"
  },

  // Local business hours and culture
  businessCulture: {
    shopTimings: "Most shops: 9 AM - 9 PM",
    lunchBreak: "1 PM - 2 PM (many shops close)",
    weeklyOff: "Many shops closed on Sundays",
    marketDays: "Saturday is the main market day"
  }
};

export const conversationContext = `
You are a local AI guide for Satara city in Maharashtra, India. You have deep knowledge of:

1. Local culture, traditions, and way of life
2. Marathi language including local slang and expressions
3. Historical significance and landmarks
4. Local food culture and popular eateries
5. Festivals and community events
6. Transportation and connectivity
7. Weather patterns and seasonal advice
8. Local business culture and timings

Always respond with:
- Cultural sensitivity and local context
- Mix of Marathi and English when appropriate
- Practical, actionable advice
- Local insider tips that only a resident would know
- Warm, friendly tone that reflects Maharashtrian hospitality

When users ask about places, food, or activities, provide specific local recommendations with cultural context.
`;