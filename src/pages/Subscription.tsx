
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly Plan',
      duration: '1 Week',
      price: 699,
      originalPrice: 799,
      discount: '12% OFF',
      pricePerMeal: 99,
      meals: 7,
      features: [
        '7 Fresh meals',
        'Free delivery',
        'No commitment',
        'Flexible cancellation'
      ]
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      duration: '1 Month',
      price: 2499,
      originalPrice: 2999,
      discount: '17% OFF',
      pricePerMeal: 83,
      meals: 30,
      features: [
        '30 Fresh meals',
        'Free delivery',
        'Priority support',
        'Meal customization',
        'Weekend specials'
      ],
      popular: true
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      duration: '3 Months',
      price: 6999,
      originalPrice: 8999,
      discount: '22% OFF',
      pricePerMeal: 77,
      meals: 90,
      features: [
        '90 Fresh meals',
        'Free delivery',
        'Premium support',
        'Full customization',
        'Weekly variety box',
        'Health tracking'
      ]
    },
    {
      id: 'biannual',
      name: 'Half-Yearly Plan',
      duration: '6 Months',
      price: 12999,
      originalPrice: 17999,
      discount: '28% OFF',
      pricePerMeal: 72,
      meals: 180,
      features: [
        '180 Fresh meals',
        'Free delivery',
        'Dedicated manager',
        'Complete customization',
        'Nutrition consultation',
        'Recipe sharing',
        'Family add-ons'
      ]
    }
  ];

  const handleSubscribe = (plan: any) => {
    navigate('/PaymentSub', { state: { selectedPlan: plan } });
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 cursor-default">
          <h1 className="text-4xl font-display font-bold text-woodland mb-4">Choose Your Plan</h1>
          <p className="text-lg text-kelp max-w-2xl mx-auto">
            Select the perfect subscription plan for your needs. Save more with longer commitments!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative border-2 hover:shadow-xl transition-all cursor-pointer rounded-xl ${
                plan.popular 
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
                <CardTitle className="text-xl text-woodland">{plan.name}</CardTitle>
                <CardDescription>{plan.duration}</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-woodland">₹{plan.price}</span>
                    <span className="text-sm text-kelp line-through">₹{plan.originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="bg-confetti/20 text-woodland">
                    {plan.discount}
                  </Badge>
                  <p className="text-sm text-kelp">₹{plan.pricePerMeal} per meal</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-woodland" />
                      <span className="text-sm text-kelp">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full rounded-xl ${
                    plan.popular 
                      ? 'bg-woodland hover:bg-kelp text-stark-white' 
                      : 'bg-woodland/90 hover:bg-woodland text-stark-white'
                  }`}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center cursor-default">
          <h3 className="text-2xl font-display font-bold text-woodland mb-4">Why Choose dabite?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-bold text-woodland">Homestyle Cooking</h4>
              <p className="text-sm text-kelp">Freshly prepared meals with traditional recipes</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-woodland">Affordable Pricing</h4>
              <p className="text-sm text-kelp">Save money compared to restaurants and cloud kitchens</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-bold text-woodland">Reliable Delivery</h4>
              <p className="text-sm text-kelp">On-time delivery to your doorstep every day</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
