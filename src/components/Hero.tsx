import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Fresh Homemade",
      subtitle: "Tiffins",
      description: "Nutritious, hygienic meals prepared with love - just like home",
      price: "Starting at ₹99/day",
      image: "/images/dcrs.jpeg",
      alt: "Tiffin with dal, roti, sabji",
      special: "Dal Chawal • Sabji • Roti • Pickle"
    },
    {
      title: "Healthy & Affordable",
      subtitle: "For Students",
      description: "Perfect portions designed for college students and young professionals",
      price: "Monthly plans available",
      image: "/images/dcrs2.webp",
      alt: "Affordable student meal plate",
      special: "Veg Pulao • Curd • Salad • Sweet"
    },
    {
      title: "Customizable Meals",
      subtitle: "Your Choice",
      description: "Veg, Non-veg, Jain - we cater to all dietary preferences",
      price: "Flexible subscriptions",
      image: "/images/dcrs3.webp",
      alt: "Custom tiffin meals served fresh",
      special: "Paneer Curry • Rice • Roti • Chutney"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-confetti via-stark-white to-canary overflow-hidden">
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
              <Badge className="bg-woodland text-stark-white px-4 py-2 text-sm font-medium cursor-default hover:bg-woodland">
                🚀 Now serving in your city!
              </Badge>

              <div className="min-h-[100px]">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-woodland leading-tight cursor-default">
                  {heroSlides[currentSlide].title}
                  <span className="block text-kelp">{heroSlides[currentSlide].subtitle}</span>
                </h1>
              </div>

              <div className="min-h-[60px]">
                <p className="text-lg sm:text-xl text-kelp/80 max-w-lg leading-relaxed cursor-default">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-canary text-canary" />
                  ))}
                </div>
                <span className="text-kelp font-medium cursor-default">
                  4.8/5 from 2000+ customers
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                aria-label="Order your daily tiffin"
                className="bg-woodland hover:bg-kelp text-stark-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 cursor-default rounded-xl"
              >
                Order Your Tiffin
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                aria-label="Watch our customer story"
                className="border-woodland text-woodland hover:bg-woodland hover:text-stark-white px-8 py-4 text-lg font-semibold group rounded-xl"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform cursor-default" />
                Watch Story
              </Button>
            </div>

            <div className="bg-woodland/5 p-6 rounded-2xl min-h-[100px]">
              <p className="text-2xl font-bold text-woodland">
                {heroSlides[currentSlide].price}
              </p>
              <p className="text-kelp cursor-default">Free delivery • Cancel anytime</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl mt-2 min-h-[550px] h-auto flex flex-col justify-start transition-all duration-300">
              
              {/* Fixed aspect ratio for image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl mb-5">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].alt}
                  className="w-full h-full object-cover rounded-3xl mx-auto shadow-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-woodland mb-2 cursor-default">
                  Today's Special
                </h3>
                <div className="min-h-[60px]">
                  <p className="text-kelp mb-4 cursor-default">
                    {heroSlides[currentSlide].special}
                  </p>
                </div>
                <Badge className="bg-amber-100 text-woodland hover:bg-amber-200 drop-shadow-md shadow-gray-900 px-3 py-1 cursor-default">
                  Fresh & Hot
                </Badge>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-woodland text-stark-white rounded-full p-3 animate-bounce">
                <span className="text-sm font-bold cursor-default">₹99</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-canary text-woodland rounded-full p-3 animate-pulse">
                <span className="text-sm font-bold cursor-default">Fresh</span>
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
              aria-label={`Go to slide ${index + 1}`}
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
