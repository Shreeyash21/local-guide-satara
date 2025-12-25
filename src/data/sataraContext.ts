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
      image: "/images/places/ajinkyatara-fort.jpg",
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
      image: "/images/places/satara-palace.jpg",
      rating: 4.2,
      timings: "9:00 AM - 5:00 PM",
      entryFee: "₹5 per person"
    },
    {
      name: "Yashwantrao Chavan Natyagruha",
      marathi: "यशवंतराव चव्हाण नाट्यगृह",
      type: "Cultural Center",
      significance: "Premier theater for Marathi plays and cultural events",
      image: "/images/places/natyagruha.jpg",
      rating: 4.3,
      timings: "Show timings vary"
    },
    {
      name: "Kaas Plateau",
      marathi: "कास पठार",
      type: "Natural Wonder",
      significance: "UNESCO World Heritage site, Valley of Flowers",
      localTip: "Visit during monsoon (Aug-Oct) for blooming flowers",
      image: "/images/places/kaas-plateau.jpg",
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
      image: "/images/places/thoseghar-falls.jpg",
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
      image: "/images/places/sajjangad.jpg",
      rating: 4.4,
      distance: "15 km from Satara",
      entryFee: "Free"
    }
  ],

  // Hotels and accommodation
  hotels: [
    {
      name: "Kaas Woods Resort",
      marathi: "कास वुड्स रिसॉर्ट",
      type: "Nature Resort",
      rating: 4.5,
      priceRange: "₹4,000 - ₹8,000 per night",
      amenities: ["AC", "WiFi", "Restaurant", "Swimming Pool", "Garden", "Room Service", "Parking"],
      location: "Near Kaas Plateau, 25 km from Satara",
      contact: "+91 2162 278901",
      image: "/images/hotels/kaas-woods-resort.jpg",
      localTip: "Perfect for nature lovers, close to famous Kaas Plateau"
    },
    {
      name: "Hotel Maharaja Regency",
      marathi: "हॉटेल महाराजा रीजेंसी",
      type: "Business Hotel",
      rating: 4.2,
      priceRange: "₹2,800 - ₹5,500 per night",
      amenities: ["AC", "WiFi", "Multi-cuisine Restaurant", "Conference Hall", "Room Service", "Parking"],
      location: "Shaniwar Peth, City Center",
      contact: "+91 2162 234567",
      image: "/images/hotels/maharaja-regency.jpg",
      localTip: "Excellent for business travelers, centrally located"
    },
    {
      name: "Hotel Preeti Executive",
      marathi: "हॉटेल प्रीती एक्झिक्यूटिव्ह",
      type: "Executive Hotel",
      rating: 4.0,
      priceRange: "₹2,200 - ₹4,200 per night",
      amenities: ["AC", "WiFi", "Restaurant", "Banquet Hall", "Room Service", "Parking"],
      location: "Near Bus Stand, Powai Naka",
      contact: "+91 2162 245678",
      image: "/images/hotels/preeti-executive.jpg",
      localTip: "Good connectivity, popular among families and tourists"
    },
    {
      name: "The Fern Residency",
      marathi: "द फर्न रेसिडेन्सी",
      type: "Premium Hotel",
      rating: 4.4,
      priceRange: "₹3,500 - ₹6,500 per night",
      amenities: ["AC", "WiFi", "Fine Dining Restaurant", "Spa", "Gym", "Business Center", "Parking"],
      location: "Pune-Bangalore Highway",
      contact: "+91 2162 267890",
      image: "/images/hotels/fern-residency.jpg",
      localTip: "Premium experience with eco-friendly practices, great for luxury stays"
    }
  ],

  // Restaurants and eateries
  restaurants: [
    {
      name: "Chandravilas",
      marathi: "चंद्रविलास",
      cuisine: "Traditional Maharashtrian, South Indian",
      specialty: "Authentic Maharashtrian Thali, Dosa varieties",
      rating: 4.3,
      priceRange: "₹150 - ₹350 per person",
      location: "Main Road, City Center",
      timings: "7:00 AM - 10:30 PM",
      image: "/images/restaurants/chandravilas.jpg",
      localTip: "Famous for traditional breakfast and authentic Maharashtrian meals"
    },
    {
      name: "MERAAJ PALACE RESTAURANT",
      marathi: "मेराज पॅलेस रेस्टॉरंट",
      cuisine: "Multi-cuisine, North Indian, Chinese",
      specialty: "Biryani, Tandoor items, Chinese dishes",
      rating: 4.2,
      priceRange: "₹200 - ₹500 per person",
      location: "Near Railway Station",
      timings: "11:00 AM - 11:00 PM",
      image: "/images/restaurants/meraaj-palace.jpg",
      localTip: "Great for family dining, known for flavorful biryanis and tandoor"
    },
    {
      name: "KANASE PUNJABI DHABA",
      marathi: "कानसे पंजाबी ढाबा",
      cuisine: "Punjabi, North Indian",
      specialty: "Dal Makhani, Butter Chicken, Punjabi Thali",
      rating: 4.1,
      priceRange: "₹180 - ₹400 per person",
      location: "Pune-Bangalore Highway",
      timings: "10:00 AM - 11:00 PM",
      image: "/images/restaurants/kanase-punjabi-dhaba.jpg",
      localTip: "Authentic Punjabi flavors, popular among highway travelers"
    },
    {
      name: "Manas Resto Lounge",
      marathi: "मानस रेस्टो लाउंज",
      cuisine: "Continental, Indian, Bar & Grill",
      specialty: "Grilled items, Cocktails, Continental dishes",
      rating: 4.0,
      priceRange: "₹300 - ₹800 per person",
      location: "Powai Naka, Commercial Area",
      timings: "12:00 PM - 12:00 AM",
      image: "/images/restaurants/manas-resto-lounge.jpg",
      localTip: "Modern dining experience with bar, perfect for evening hangouts"
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
        name: "Kandi Pedha",
        marathi: "कांदी पेढा",
        description: "Famous sweet made from milk solids, Satara's signature dessert",
        whereToFind: "Local sweet shops, Chitale Bandhu",
        price: "₹30 - ₹60 per piece",
        culturalNote: "Must-buy souvenir from Satara",
        image: "/images/food/kandi-pedha.jpg"
      },
      {
        name: "Misal Pav",
        marathi: "मिसळ पाव",
        description: "Spicy curry with sprouts, served with bread - Satara style",
        whereToFind: "Misal House near Railway Station, local eateries",
        price: "₹60 - ₹120",
        spiceLevel: "High",
        localTip: "Satara misal has unique taste different from other cities",
        image: "/images/food/misal-pav.jpg"
      },
      {
        name: "Puri Bhaji",
        marathi: "पुरी भाजी",
        description: "Deep-fried bread with spiced potato curry",
        whereToFind: "Street vendors, Shivneri Restaurant",
        price: "₹40 - ₹80",
        culturalNote: "Popular breakfast and evening snack",
        image: "/images/food/puri-bhaji.jpg"
      },
      {
        name: "Vada Pav & Batata Vada",
        marathi: "वडा पाव आणि बटाटा वडा",
        description: "Potato fritters in bread bun & standalone potato balls",
        whereToFind: "Street vendors near bus stand, local tea stalls",
        price: "₹15 - ₹30 per piece",
        localTip: "Best enjoyed with green chutney and fried chilies",
        image: "/images/food/vada-pav.jpg"
      },
      {
        name: "Kopra Pattice",
        marathi: "कोप्रा पॅटिस",
        description: "Coconut-stuffed potato patties, crispy outside and soft inside",
        whereToFind: "Local snack vendors, evening food stalls",
        price: "₹25 - ₹50 per piece",
        spiceLevel: "Medium",
        localTip: "Popular evening snack, best when hot and crispy",
        image: "/images/food/kopra-pattice.jpg"
      }
    ],
    popularEateries: [
      {
        name: "Chitale Bandhu",
        specialty: "Kandi Pedha & sweets",
        mustTry: "Original Kandi Pedha",
        priceRange: "₹30 - ₹200"
      },
      {
        name: "Misal House",
        specialty: "Authentic Satara Misal Pav",
        mustTry: "Special Misal with extra pav",
        priceRange: "₹60 - ₹150"
      },
      {
        name: "Shivneri Restaurant",
        specialty: "Traditional Maharashtrian food",
        mustTry: "Puri Bhaji, Unlimited Thali",
        priceRange: "₹40 - ₹350"
      },
      {
        name: "Street Food Vendors",
        specialty: "Vada Pav, Batata Vada",
        mustTry: "Fresh hot vada pav with chutneys",
        priceRange: "₹15 - ₹50"
      },
      {
        name: "Evening Snack Stalls",
        specialty: "Kopra Pattice & local snacks",
        mustTry: "Hot crispy Kopra Pattice",
        priceRange: "₹25 - ₹80"
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