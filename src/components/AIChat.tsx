
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your dabite food assistant. I can help you find the perfect tiffin based on your preferences, mood, or dietary needs. What are you craving today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
      return "Based on your preferences, I'd recommend our Gujarati Thali for a balanced meal, or our South Indian combo if you love rice dishes. Both are popular among students! Would you like to know more about either?";
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our tiffin plans start at just ₹99/day! We have daily, weekly, and monthly plans. The monthly plan gives you the best value at ₹2,499. Shall I show you all our pricing options?";
    }

    if (lowerMessage.includes('spicy') || lowerMessage.includes('hot')) {
      return "I love that you enjoy spicy food! Our Punjabi Tiffin and Rajasthani Thali are perfect for spice lovers. We can also customize the spice level for any meal. What's your spice tolerance on a scale of 1-10?";
    }

    if (lowerMessage.includes('healthy') || lowerMessage.includes('diet')) {
      return "Great choice for healthy eating! Our Protein-Rich Bowl and Keto-Friendly Tiffin are very popular. We also have a special diabetes-friendly menu. What are your specific health goals?";
    }

    if (lowerMessage.includes('veg') || lowerMessage.includes('vegetarian')) {
      return "We have amazing vegetarian options! Our Pure Veg Thali, Jain Special, and Gujarati Combo are customer favorites. All our veg meals are prepared in a separate kitchen. Which region's cuisine do you prefer?";
    }

    return "That sounds interesting! Let me help you find the perfect meal. You can also browse our menu or tell me about your dietary preferences, and I'll suggest the best options for you.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen((prev) => !prev)} // 👈 Toggle on click
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-woodland hover:bg-kelp shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-stark-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-[500px] shadow-xl z-50 border-woodland/20 bg-kelp flex flex-col cursor-default rounded-2xl border-none">
          <CardHeader className="bg-woodland text-stark-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5" />
                daBOT
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-stark-white hover:bg-stark-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col flex-1 overflow-hidden">
            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-woodland flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-stark-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${message.sender === 'user'
                      ? 'bg-woodland text-stark-white'
                      : 'bg-confetti/30 text-kelp'
                      }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-kelp flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-stark-white" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-woodland flex items-center justify-center">
                    <Bot className="h-3 w-3 text-stark-white" />
                  </div>
                  <div className="bg-confetti/30 text-kelp p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-kelp rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-kelp rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-kelp rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-woodland/20 px-4 py-3">
              <div className="flex items-center gap-2 w-full">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about food recommendations..."
                  className="flex-1 min-w-0 border-woodland/30 bg-stark-white focus:border-woodland"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-woodland hover:bg-woodland hover:text-stark-white text-stark-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChat;
