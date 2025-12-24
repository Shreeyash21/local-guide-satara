import React, { useState, useRef, useEffect } from 'react';
import { LocalGuideAI, ChatMessage } from '../services/aiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiService = new LocalGuideAI();

  useEffect(() => {
    // Welcome message
    const welcomeMessage: ChatMessage = {
      role: 'assistant',
      content: `नमस्कार! Welcome to Satara! 🙏\n\nI'm your local AI guide. I can help you with:\n\n🍛 **Local food** - Best restaurants and street food\n🏰 **Places to visit** - Forts, waterfalls, heritage sites\n🏨 **Hotels & stay** - From budget to luxury options\n🎭 **Cultural events** - Festivals and traditions\n🚌 **Transportation** - Getting around the city\n\nWhat would you like to explore in our beautiful city?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    
    // Initial suggestions
    setSuggestions([
      "Show me the best hotels in Satara",
      "Where can I find authentic local food?",
      "What are the must-visit places?",
      "Tell me about Kaas Plateau"
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatMessage = (content: string) => {
    // Convert markdown-style formatting to HTML
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic text
      .replace(/• /g, '• ') // Bullet points
      .replace(/⭐(\d+\.?\d*)/g, '<span class="inline-flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium ml-1"><span class="text-yellow-500">⭐</span>$1</span>') // Star ratings
      .replace(/(₹[\d,-]+)/g, '<span class="text-green-600 font-medium">$1</span>'); // Price highlighting

    return formatted;
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await aiService.sendMessage(textToSend, messages);
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Update suggestions based on the conversation
      const newSuggestions = aiService.getContextualSuggestions(textToSend);
      setSuggestions(newSuggestions);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an issue. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-md border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🏰</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">The Local Guide – SATARA</h1>
              <p className="text-sm text-gray-600">Your AI companion for exploring Satara city • सातारा शहर मार्गदर्शक</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-2xl px-4 py-3 rounded-lg shadow-md ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <div 
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: message.role === 'assistant' 
                      ? formatMessage(message.content).replace(/\n/g, '<br/>') 
                      : message.content.replace(/\n/g, '<br/>') 
                  }}
                />
                <div className={`text-xs mt-2 ${
                  message.role === 'user' ? 'text-orange-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="px-4 py-2">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(suggestion)}
                  className="px-3 py-2 bg-white border border-orange-200 rounded-full text-sm text-gray-700 hover:bg-orange-50 hover:border-orange-300 transition-colors shadow-sm"
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Satara... (मला सातारा बद्दल विचारा...)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;