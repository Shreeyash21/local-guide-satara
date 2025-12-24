const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock OpenAI service for development
// In production, replace with actual OpenAI API calls
class MockAIService {
  constructor() {
    this.responses = {
      food: [
        "For authentic Satara experience, you must try our famous Satara Special Misal! 🌶️ Head to **Misal House** near Railway Station - locals swear by it (₹60-120). The misal here has a unique taste that's different from Pune or Mumbai style.\n\n🍽️ **Top Food Spots:**\n• **Shivneri Restaurant** - Unlimited Maharashtrian Thali (₹200-350)\n• **Kokani Darbar** - Best seafood, try Fish Curry Rice (₹250-500)\n• **Hotel Radhika** - Famous masala dosa for breakfast (₹150-400)\n• **Bhel Puri Corner** - Evening snacks near Rajwada (₹30-100)\n\nDon't miss Solkadhi (सोलकढी) - perfect kokum drink for our climate! भावा, खायला काही कमी नाही इथे! (Brother, there's no shortage of good food here!)"
      ],
      places: [
        "Ajinkyatara Fort (अजिंक्यतारा किल्ला) is our crown jewel! 🏰 We locals call it 'Tara'. Entry ₹10, open 6 AM-6 PM. Best time is early morning or evening.\n\n🏛️ **Must Visit Places:**\n• **Kaas Plateau** (25km) - UNESCO site, Valley of Flowers (Aug-Oct) ⭐4.8\n• **Thoseghar Waterfalls** (20km) - 200m drop, spectacular in monsoons ⭐4.6\n• **Sajjangad Fort** (15km) - Sant Ramdas samadhi, peaceful trekking ⭐4.4\n• **Satara Palace** - Maratha Empire seat, ₹5 entry ⭐4.2\n\nInsider tip: During monsoons, these places look magical with clouds and greenery! तारावर जाणं म्हणजे सातारा पाहणं! (Going to Tara means seeing Satara!)"
      ],
      hotels: [
        "Looking for a place to stay? Here are the best options in Satara! 🏨\n\n🌟 **Top Hotels:**\n• **Hotel Surya Executive** - Luxury option (₹3,500-6,000) ⭐4.3\n  Pune-Bangalore Highway, gym & spa facilities\n• **Hotel Radhika Executive** - Business travelers' choice (₹2,500-4,000) ⭐4.1\n  Near Bus Stand, excellent restaurant\n• **Satara Residency** - Family-friendly (₹1,800-3,200) ⭐4.0\n  Powai Naka, spacious rooms\n• **Hotel Shreyas** - Budget-friendly (₹1,200-2,200) ⭐3.8\n  Shaniwar Peth, good value for money\n\nAll hotels have AC, WiFi, and parking. Book in advance during festival seasons!"
      ],
      culture: [
        "Satara has a rich Maratha heritage! 👑 We're proud of our history as the seat of the Maratha Empire.\n\n🎭 **Cultural highlights:**\n• **Ganesh Chaturthi**: Community mandals compete for best decorations\n• **Navratri**: Garba and dandiya at Yashwantrao Chavan Natyagruha\n• **Satara Mahotsav**: Annual cultural festival (winter months)\n\n🗣️ **Local etiquette:**\n• Address elders as काका (kaka) or मावशी (mavshi)\n• Use 'भावा' (bhava) for friends\n• Most people understand Hindi/English, but Marathi gets you closer to hearts\n\nWe're known for hospitality - अतिथी देवो भव! (Guest is God!)"
      ],
      transport: [
        "Getting around Satara is easy! 🚗\n\n🚌 **Local transport:**\n• **Auto-rickshaws**: Most common, negotiate fare (₹10-50 within city)\n• **City buses (MSRTC)**: Cheap and reliable (₹5-15)\n• **Shared tempos**: For nearby villages (₹20-40)\n• **Private taxis**: Available for outstation trips\n\n🚂 **Connectivity:**\n• **Railway**: Satara station on Mumbai-Bangalore line\n• **Road**: NH-4 connects to Mumbai (240km) and Pune (120km)\n• **Airport**: Pune Airport is closest (120km, 2.5 hours)\n\nLocal tip: Auto drivers are friendly and know every galli (lane). They're great for local recommendations too! सातारात फिरणं सोपं आहे! (Moving around Satara is easy!)"
      ]
    };
  }

  generateResponse(message, context) {
    const lowerMessage = message.toLowerCase();
    
    // Determine response category
    let category = 'general';
    if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('restaurant') || lowerMessage.includes('misal')) {
      category = 'food';
    } else if (lowerMessage.includes('place') || lowerMessage.includes('visit') || lowerMessage.includes('fort') || lowerMessage.includes('kaas') || lowerMessage.includes('waterfall')) {
      category = 'places';
    } else if (lowerMessage.includes('hotel') || lowerMessage.includes('stay') || lowerMessage.includes('accommodation') || lowerMessage.includes('lodge')) {
      category = 'hotels';
    } else if (lowerMessage.includes('culture') || lowerMessage.includes('festival') || lowerMessage.includes('tradition')) {
      category = 'culture';
    } else if (lowerMessage.includes('transport') || lowerMessage.includes('travel') || lowerMessage.includes('bus') || lowerMessage.includes('auto')) {
      category = 'transport';
    }

    // Get response from category or provide general response
    if (this.responses[category]) {
      const responses = this.responses[category];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // General welcome response
    return `नमस्कार! Welcome to Satara! 🙏\n\nI'm your local AI guide, here to help you explore our beautiful city. I know about:\n\n🍛 **Local food** - Misal, restaurants, street food\n🏰 **Places to visit** - Forts, waterfalls, heritage sites\n🏨 **Hotels & stay** - From budget to luxury options\n🎭 **Cultural events** - Festivals and traditions\n🚌 **Transportation** - Getting around the city\n🌤️ **Weather & timing** - Best times to visit\n\nWhat would you like to know about Satara? Ask me anything - मी तुमची मदत करण्यासाठी इथे आहे! (I'm here to help you!)`;
  }
}

const aiService = new MockAIService();

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Local Guide Satara API is running' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Generate AI response
    const response = aiService.generateResponse(message, context);

    res.json({
      response,
      timestamp: new Date().toISOString(),
      context: 'satara-local-guide'
    });

  } catch (error) {
    console.error('Error processing chat request:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Sorry, I encountered an issue. Please try again.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Local Guide Satara API running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});