
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Truck, ChefHat, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [progress, setProgress] = useState(60);

  const orderSteps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been confirmed and payment processed',
      icon: CheckCircle,
      completed: true,
      time: '10:30 AM'
    },
    {
      id: 2,
      title: 'Preparing in Kitchen',
      description: 'Our chefs are preparing your fresh meal',
      icon: ChefHat,
      completed: true,
      time: '11:00 AM'
    },
    {
      id: 3,
      title: 'Out for Delivery',
      description: 'Your order is on the way to your location',
      icon: Truck,
      completed: false,
      time: 'Estimated: 12:15 PM'
    },
    {
      id: 4,
      title: 'Delivered',
      description: 'Enjoy your delicious homestyle meal!',
      icon: MapPin,
      completed: false,
      time: 'Estimated: 12:30 PM'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < 4) {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(curr => Math.min(curr + 1, 4));
            return 25;
          }
          return prev + 5;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-stark-white cursor-default">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-woodland mb-2">Track Your Order</h1>
            <p className="text-kelp">Order #DB2024001234</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Tracking */}
            <div className="lg:col-span-2">
              <Card className="border-woodland/20 rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                  <CardDescription>Real-time updates on your meal preparation and delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orderSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = step.id === currentStep;
                      const isCompleted = step.id < currentStep || step.completed;
                      
                      return (
                        <div key={step.id} className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-woodland text-stark-white' 
                              : isActive 
                                ? 'bg-confetti text-woodland' 
                                : 'bg-kelp/20 text-kelp'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-medium ${
                                isCompleted || isActive ? 'text-woodland' : 'text-kelp'
                              }`}>
                                {step.title}
                              </h3>
                              <span className="text-sm text-kelp">{step.time}</span>
                            </div>
                            <p className="text-sm text-kelp mt-1">{step.description}</p>
                            {isActive && (
                              <div className="mt-2">
                                <Progress value={progress} className="w-full h-2" />
                                <p className="text-xs text-kelp mt-1">{progress}% complete</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Executive Info */}
              <Card className="border-woodland/20 mt-6 rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle>Delivery Executive</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-confetti/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚴‍♂️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-woodland">Rahul Kumar</h4>
                      <p className="text-sm text-kelp">Delivery Partner</p>
                      <p className="text-sm text-kelp">Contact: +91 98765 43210</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl shadow-md hover:bg-kelp hover:text-stark-white">
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Details */}
            <div className="lg:col-span-1">
              <Card className="border-woodland/20 rounded-2xl shadow-md">
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-woodland">Monthly Plan</h4>
                    <p className="text-sm text-kelp">30 meals included</p>
                    <Badge variant="secondary" className="mt-1">₹2,499</Badge>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-woodland">Delivery Address</h5>
                    <p className="text-sm text-kelp">
                      Room 204, Boys Hostel<br />
                      ABC Engineering College<br />
                      Delhi - 110001
                    </p>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-woodland">Special Instructions</h5>
                    <p className="text-sm text-kelp">Extra spicy food preferred. No onions.</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium text-woodland">Estimated Delivery</h5>
                    <p className="text-sm text-kelp">12:30 PM (Lunch time)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-woodland/20 mt-6 rounded-2xl shadow-md ">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full rounded-xl shadow-md hover:bg-kelp hover:text-stark-white">
                    Chat with Support
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl shadow-md hover:bg-kelp hover:text-stark-white">
                    Call Customer Care
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl shadow-md hover:bg-kelp hover:text-stark-white">
                    Report an Issue
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderTracking;
