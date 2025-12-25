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
        "For authentic Satara experience, you must try our famous specialties! 🍛\n\n🥮 **Kandi Pedha** - Satara's signature sweet (₹30-60) at Chitale Bandhu\n🌶️ **Misal Pav** - Unique Satara style (₹60-120)\n🍞 **Puri Bhaji** - Crispy bread with spiced potato curry (₹40-80)\n🥔 **Vada Pav & Batata Vada** - Street food favorites (₹15-30)\n🥥 **Kopra Pattice** - Coconut-stuffed potato patties (₹25-50)\n\n🍽️ **Best Restaurants:**\n• **Chandravilas** - Traditional Maharashtrian thali (₹150-350) ⭐4.3\n• **MERAAJ PALACE** - Famous biryani & tandoor (₹200-500) ⭐4.2\n• **KANASE PUNJABI DHABA** - Authentic Punjabi flavors (₹180-400) ⭐4.1\n• **Manas Resto Lounge** - Modern dining with bar (₹300-800) ⭐4.0\n\nThese are the real taste of Satara! भावा, हे खाल्याशिवाय सातारा अधुरं! (Brother, Satara is incomplete without trying these!)"
      ],
      places: [
        "Ajinkyatara Fort (अजिंक्यतारा किल्ला) is our crown jewel! 🏰 We locals call it 'Tara'. Entry ₹10, open 6 AM-6 PM. Best time is early morning or evening.\n\n🏛️ **Must Visit Places:**\n• **Kaas Plateau** (25km) - UNESCO site, Valley of Flowers (Aug-Oct) ⭐4.8\n• **Thoseghar Waterfalls** (20km) - 200m drop, spectacular in monsoons ⭐4.6\n• **Sajjangad Fort** (15km) - Sant Ramdas samadhi, peaceful trekking ⭐4.4\n• **Satara Palace** - Maratha Empire seat, ₹5 entry ⭐4.2\n\nInsider tip: During monsoons, these places look magical with clouds and greenery! तारावर जाणं म्हणजे सातारा पाहणं! (Going to Tara means seeing Satara!)"
      ],
      hotels: [
        "Looking for a place to stay? Here are the best hotels in Satara! 🏨\n\n🌟 **Top Hotels:**\n• **Kaas Woods Resort** - Nature lovers' paradise (₹4,000-8,000) ⭐4.5\n  Near Kaas Plateau, swimming pool & garden\n• **The Fern Residency** - Premium eco-friendly (₹3,500-6,500) ⭐4.4\n  Pune-Bangalore Highway, spa & fine dining\n• **Hotel Maharaja Regency** - Business travelers' choice (₹2,800-5,500) ⭐4.2\n  City center, conference facilities\n• **Hotel Preeti Executive** - Family-friendly (₹2,200-4,200) ⭐4.0\n  Near Bus Stand, good connectivity\n\nAll hotels have AC, WiFi, and parking. **Kaas Woods Resort** is perfect if you're visiting the famous Kaas Plateau! Book in advance during flower season (Aug-Oct)."
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
    if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('restaurant') || lowerMessage.includes('misal') || lowerMessage.includes('pedha')) {
      category = 'food';
    } else if (lowerMessage.includes('restaurant') || lowerMessage.includes('dining') || lowerMessage.includes('chandravilas') || lowerMessage.includes('meraaj') || lowerMessage.includes('kanase') || lowerMessage.includes('manas')) {
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