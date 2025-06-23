
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, Crown, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const SubscriptionCheckout = () => {
  const [selectedPlan, setSelectedPlan] = useState('dabba-max');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'dabba-lite',
      name: 'Dabba Lite',
      icon: <Star className="h-6 w-6" />,
      price: 1999,
      originalPrice: 2499,
      meals: 20,
      features: ['20 Meals/month', 'Basic variety', 'Standard delivery'],
      color: 'bg-blue-500'
    },
    {
      id: 'dabba-max',
      name: 'Dabba Max',
      icon: <Crown className="h-6 w-6" />,
      price: 2499,
      originalPrice: 2999,
      meals: 30,
      features: ['30 Meals/month', 'Premium variety', 'Priority delivery', 'Weekend specials'],
      color: 'bg-woodland',
      popular: true
    },
    {
      id: 'protein-pack',
      name: 'Protein Pack',
      icon: <Zap className="h-6 w-6" />,
      price: 3499,
      originalPrice: 3999,
      meals: 30,
      features: ['30 High-protein meals', 'Gym-focused nutrition', 'Protein tracking', 'Consultation'],
      color: 'bg-orange-500'
    }
  ];

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-display font-bold text-woodland mb-8">Choose Your Subscription</h1>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative cursor-pointer transition-all border-2 ${
                  selectedPlan === plan.id 
                    ? 'border-woodland bg-woodland/5 scale-105' 
                    : 'border-woodland/20 hover:border-woodland/40'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-woodland text-stark-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center text-white mx-auto mb-2`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-woodland">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-woodland">₹{plan.price}</span>
                      <span className="text-sm text-kelp line-through">₹{plan.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="bg-confetti/20 text-woodland">
                      Save ₹{plan.originalPrice - plan.price}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-woodland rounded-full"></div>
                        <span className="text-sm text-kelp">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedPlanData && (
            <Card className="border-woodland/20">
              <CardHeader>
                <CardTitle>Subscription Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-confetti/10 rounded-lg">
                  <div>
                    <div className="font-bold text-woodland">{selectedPlanData.name}</div>
                    <div className="text-sm text-kelp">{selectedPlanData.meals} meals per month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-woodland">₹{selectedPlanData.price}</div>
                    <div className="text-sm text-kelp line-through">₹{selectedPlanData.originalPrice}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subscription (1 month)</span>
                    <span>₹{selectedPlanData.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{selectedPlanData.originalPrice - selectedPlanData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>₹{Math.round(selectedPlanData.price * 0.18)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total Amount</span>
                  <span>₹{selectedPlanData.price + Math.round(selectedPlanData.price * 0.18)}</span>
                </div>

                <div className="bg-confetti/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-woodland mb-2">What's Included:</h4>
                  <ul className="space-y-1 text-sm text-kelp">
                    {selectedPlanData.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full bg-woodland hover:bg-kelp text-stark-white"
                  onClick={() => navigate('/payment')}
                >
                  Proceed to Payment
                </Button>

                <p className="text-xs text-kelp text-center">
                  Cancel anytime. No commitment. Auto-renewal available.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionCheckout;
