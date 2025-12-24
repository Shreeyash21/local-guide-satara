import { sataraContext, conversationContext } from '../data/sataraContext';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export class LocalGuideAI {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    this.baseUrl = 'http://localhost:3001/api';
  }

  async sendMessage(message: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history: conversationHistory,
          context: {
            sataraData: sataraContext,
            systemPrompt: conversationContext
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling AI service:', error);
      return this.getFallbackResponse(message);
    }
  }

  private getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Simple keyword-based fallback responses
    if (lowerMessage.includes('food') || lowerMessage.includes('eat')) {
      return "For authentic Satara food, try the famous Satara Special Misal near the bus stand, or visit Shivneri Restaurant for a traditional Maharashtrian thali. Don't miss the local solkadhi - it's perfect for our climate!";
    }
    
    if (lowerMessage.includes('fort') || lowerMessage.includes('ajinkyatara')) {
      return "Ajinkyatara Fort (अजिंक्यतारा किल्ला) is our pride! Locals call it 'Tara'. Best time to visit is early morning or evening. The view of Satara city from the top is breathtaking, especially during monsoons.";
    }
    
    if (lowerMessage.includes('weather') || lowerMessage.includes('climate')) {
      return "Satara has a pleasant semi-arid climate. Right now it's a good time to explore. Monsoons (June-September) make the city beautiful and green. Winter months (October-March) are perfect for sightseeing.";
    }
    
    return "I'm here to help you explore Satara! Ask me about local food, places to visit, cultural events, or anything about our beautiful city. मी तुमची मदत करण्यासाठी इथे आहे! (I'm here to help you!)";
  }

  // Get contextual suggestions based on user input
  getContextualSuggestions(userInput: string): string[] {
    const suggestions = [];
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('food') || lowerInput.includes('restaurant') || lowerInput.includes('eat')) {
      suggestions.push(
        "Show me the best restaurants in Satara",
        "Where can I find authentic Maharashtrian food?",
        "What's special about Satara misal?",
        "Tell me about local street food"
      );
    }

    if (lowerInput.includes('hotel') || lowerInput.includes('stay') || lowerInput.includes('accommodation')) {
      suggestions.push(
        "What are the best hotels in Satara?",
        "Show me budget-friendly accommodation",
        "Which hotel is good for families?",
        "Where should business travelers stay?"
      );
    }

    if (lowerInput.includes('place') || lowerInput.includes('visit') || lowerInput.includes('sightseeing')) {
      suggestions.push(
        "Tell me about Kaas Plateau",
        "How to reach Thoseghar Waterfalls?",
        "What's the best time to visit Ajinkyatara Fort?",
        "Show me places near Satara"
      );
    }

    if (lowerInput.includes('festival') || lowerInput.includes('event') || lowerInput.includes('culture')) {
      suggestions.push(
        "When is the next major festival?",
        "How do locals celebrate Ganesh Chaturthi?",
        "What cultural events happen in Satara?",
        "Tell me about local traditions"
      );
    }

    if (lowerInput.includes('transport') || lowerInput.includes('travel') || lowerInput.includes('bus')) {
      suggestions.push(
        "How to get around Satara city?",
        "What's the best way to reach from Pune?",
        "Tell me about local transportation",
        "How to book auto-rickshaws?"
      );
    }

    // Default suggestions if no specific context
    if (suggestions.length === 0) {
      suggestions.push(
        "Show me top-rated places to visit",
        "What are the must-try local dishes?",
        "Where should I stay in Satara?",
        "Tell me about the local culture"
      );
    }

    return suggestions.slice(0, 4); // Limit to 4 suggestions
  }
}