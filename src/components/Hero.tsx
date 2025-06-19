
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Fresh Homemade Tiffins",
      subtitle: "Delivered Daily",
      description: "Nutritious, hygienic meals prepared with love - just like home",
      price: "Starting at ₹99/day",
      image: "🍛"
    },
    {
      title: "Healthy & Affordable",
      subtitle: "For Students",
      description: "Perfect portions designed for college students and young professionals",
      price: "Monthly plans available",
      image: "🥗"
    },
    {
      title: "Customizable Meals",
      subtitle: "Your Choice",
      description: "Veg, Non-veg, Jain - we cater to all dietary preferences",
      price: "Flexible subscriptions",
      image: "🍜"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-confetti via-stark-white to-canary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl animate-float">🍛</div>
        <div className="absolute top-40 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>🥗</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🍜</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float" style={{ animationDelay: '3s' }}>🥙</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <Badge className="bg-woodland text-stark-white px-4 py-2 text-sm font-medium">
                🚀 Now serving in your city!
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-woodland leading-tight">
                {heroSlides[currentSlide].title}
                <span className="block text-kelp">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xl text-kelp/80 max-w-lg leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-canary text-canary" />
                  ))}
                </div>
                <span className="text-kelp font-medium">4.8/5 from 2000+ customers</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-woodland hover:bg-kelp text-stark-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              >
                Order Your Tiffin
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-woodland text-woodland hover:bg-woodland hover:text-stark-white px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>

            <div className="bg-woodland/5 p-6 rounded-2xl">
              <p className="text-2xl font-bold text-woodland">
                {heroSlides[currentSlide].price}
              </p>
              <p className="text-kelp">Free delivery • Cancel anytime</p>
            </div>
          </div>

          {/* Right Content - Food Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-9xl mb-6 animate-scale-in">
                  {heroSlides[currentSlide].image}
                </div>
                <h3 className="text-2xl font-bold text-woodland mb-2">
                  Today's Special
                </h3>
                <p className="text-kelp mb-4">
                  Dal Chawal • Sabji • Roti • Pickle
                </p>
                <Badge className="bg-canary text-woodland px-3 py-1">
                  Fresh & Hot
                </Badge>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-woodland text-stark-white rounded-full p-3 animate-bounce">
                <span className="text-sm font-bold">₹99</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-canary text-woodland rounded-full p-3 animate-pulse">
                <span className="text-sm font-bold">Fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-woodland scale-125' : 'bg-woodland/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
