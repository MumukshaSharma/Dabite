
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Gift, Clock, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-confetti via-canary to-confetti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-woodland text-stark-white border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-6xl animate-float">🍛</div>
                <div className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
                <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>❤️</div>
                <div className="absolute bottom-10 right-10 text-3xl animate-float" style={{ animationDelay: '3s' }}>🎯</div>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
                
                {/* Left Content */}
                <div className="space-y-8 animate-slide-in-left">
                  <div>
                    <Badge className="bg-confetti text-woodland px-4 py-2 text-sm font-medium mb-4 cursor-default hover:bg-confetti shadow-md shadow-amber-100 rounded-xl">
                      🎉 Limited Time Offer
                    </Badge>
                    
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight cursor-default">
                      Start your healthy food journey
                      <span className="block text-confetti">today!</span>
                    </h2>
                    
                    <p className="text-xl text-stark-white/90 leading-relaxed cursor-default">
                      Join thousands of students and professionals who trust dabite for their daily nutrition. 
                      Get your first week at 50% off!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-confetti rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-woodland" />
                      </div>
                      <span className="text-stark-white/90 cursor-default">Free delivery on all subscription plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-confetti rounded-full flex items-center justify-center">
                        <Clock className="h-3 w-3 text-woodland" />
                      </div>
                      <span className="text-stark-white/90 cursor-default">Cancel or modify anytime, no questions asked</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-confetti rounded-full flex items-center justify-center">
                        <Gift className="h-3 w-3 text-woodland" />
                      </div>
                      <span className="text-stark-white/90 cursor-default">First 100 customers get a free dessert box</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      size="lg" 
                      className="bg-confetti hover:bg-canary text-woodland px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 rounded-xl"
                    >
                      Claim 50% Off Deal
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-stark-white text-woodland hover:bg-stark-white hover:text-woodland px-8 py-4 text-lg font-semibold cursor-default rounded-xl"
                    >
                      View Sample Menu
                    </Button>
                  </div>

                  <div className="bg-stark-white/10 backdrop-blur-sm p-6 rounded-2xl ">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-confetti cursor-default">₹49/day*</p>
                        <p className="text-stark-white/80 text-sm cursor-default">*For first week with 50% off</p>
                      </div>
                      <div className="text-right">
                        <p className="text-stark-white font-medium cursor-default">Offer ends in:</p>
                        <p className="text-confetti font-bold cursor-default">23:59:45</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Food Showcase */}
                <div className="relative animate-slide-in-right">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-stark-white/20 backdrop-blur-sm border-stark-white/30 p-4 hover:scale-105 transition-transform duration-300 cursor-default">
                      <div className="text-center">
                        <img
                          src="/images/dalChawal.jpeg"
                          alt="Dal Chawal"
                          className="mx-auto w-20 h-20 object-cover rounded-full mb-2"
                        />
                        <p className="text-stark-white text-sm font-medium">Dal Chawal</p>
                        <p className="text-confetti text-xs">₹99</p>
                      </div>
                    </Card>
                    
                    <Card className="bg-stark-white/20 backdrop-blur-sm border-stark-white/30 p-4 hover:scale-105 transition-transform duration-300 cursor-default">
                      <div className="text-center">
                        <img
                          src="/images/chick.jpg"
                          alt="chicken curry"
                          className="mx-auto w-20 h-20 object-cover rounded-full mb-2"
                        />
                        <p className="text-stark-white text-sm font-medium">Chicken Curry</p>
                        <p className="text-confetti text-xs">₹149</p>
                      </div>
                    </Card>
                    
                    <Card className="bg-stark-white/20 backdrop-blur-sm border-stark-white/30 p-4 hover:scale-105 transition-transform duration-300 cursor-default">
                      <div className="text-center">
                        <img
                          src="/images/southIndian.jpeg"
                          alt="south indian"
                          className="mx-auto w-20 h-20 object-cover rounded-full mb-2"
                        />
                        <p className="text-stark-white text-sm font-medium">South Special</p>
                        <p className="text-confetti text-xs">₹105</p>
                      </div>
                    </Card>
                    
                    <Card className="bg-stark-white/20 backdrop-blur-sm border-stark-white/30 p-4 hover:scale-105 transition-transform duration-300 cursor-default">
                      <div className="text-center">
                        <img
                          src="/images/rajmaChawal.jpeg"
                          alt="rajma Chawal"
                          className="mx-auto w-20 h-20 object-cover rounded-full mb-2"
                        />
                        <p className="text-stark-white text-sm font-medium">Rajma Rice</p>
                        <p className="text-confetti text-xs">₹110</p>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-confetti text-woodland rounded-full px-4 py-2 animate-bounce">
                    <span className="text-sm font-bold">50% OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
