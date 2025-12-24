# The Local Guide – SATARA

An AI-powered local assistant that understands Satara city's culture, language, slang, and lifestyle with comprehensive information about hotels, restaurants, and attractions.

## 🌟 Features

- **Local Intelligence**: Deep knowledge of Satara's culture, traditions, and lifestyle
- **Bilingual Support**: Marathi + English with local slang and expressions
- **Comprehensive Database**: 
  - 🏨 **Hotels**: 4 top-rated hotels from budget to luxury
  - 🍽️ **Restaurants**: 6 popular eateries with specialties and pricing
  - 🏛️ **Attractions**: 6 must-visit places including UNESCO sites
  - 🍛 **Local Food**: 5 authentic dishes with where to find them
- **Smart Conversations**: Contextual suggestions and natural dialogue
- **Visual Experience**: Image support for places, hotels, and restaurants
- **Cultural Context**: Local festivals, transportation, and business culture

## 🏨 Hotels Covered

- **Hotel Surya Executive** - Luxury (₹3,500-6,000) ⭐4.3
- **Hotel Radhika Executive** - Business (₹2,500-4,000) ⭐4.1  
- **Satara Residency** - Family-friendly (₹1,800-3,200) ⭐4.0
- **Hotel Shreyas** - Budget (₹1,200-2,200) ⭐3.8

## 🍽️ Restaurants Featured

- **Misal House** - Famous Satara Special Misal ⭐4.6
- **Shivneri Restaurant** - Authentic Maharashtrian Thali ⭐4.4
- **Kokani Darbar** - Best Seafood & Konkani cuisine ⭐4.3
- **Hotel Radhika Restaurant** - South Indian breakfast ⭐4.2
- **Bhel Puri Corner** - Street food & evening snacks ⭐4.1
- **Cafe Coffee Day** - Modern hangout spot ⭐4.0

## 🏛️ Top Attractions

- **Kaas Plateau** - UNESCO World Heritage, Valley of Flowers ⭐4.8
- **Thoseghar Waterfalls** - 200m waterfall, spectacular in monsoons ⭐4.6
- **Ajinkyatara Fort** - Historic Maratha fort, city symbol ⭐4.5
- **Sajjangad Fort** - Sant Ramdas samadhi, spiritual significance ⭐4.4
- **Yashwantrao Chavan Natyagruha** - Cultural center ⭐4.3
- **Satara Palace** - Former Maratha Empire seat ⭐4.2

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Node.js with Express
- **AI**: Custom context-aware responses (OpenAI ready)
- **Styling**: Tailwind CSS with Satara-themed design
- **Build**: Vite for fast development
- **Images**: Structured image gallery support

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Start development server (frontend + backend)
npm run dev

# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
```

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── ChatInterface.tsx
│   │   ├── PlaceCard.tsx
│   │   └── ImageGallery.tsx
│   ├── data/          # Comprehensive Satara context
│   │   └── sataraContext.ts
│   ├── services/      # AI and API services
│   ├── types/         # TypeScript definitions
│   └── utils/         # Helper functions
├── server/            # Backend API with enhanced responses
├── public/
│   └── images/        # Image assets for places & restaurants
└── docs/              # Documentation
```

## 🎯 Sample Conversations

**User**: "Show me the best hotels in Satara"
**AI**: Lists 4 hotels with ratings, prices, amenities, and local tips

**User**: "Where can I find authentic misal?"
**AI**: Recommends Misal House with pricing, location, and insider tips

**User**: "Tell me about Kaas Plateau"
**AI**: Provides UNESCO status, best visiting time, distance, and local advice

## 🌐 Deployment Ready

- Environment configuration
- Docker support
- Production build optimization
- API health checks
- Error handling and fallbacks

## 🔮 Future Enhancements

- Real image integration
- Voice input/output in Marathi
- GPS-based recommendations
- Weather API integration
- User reviews and ratings
- Mobile app version