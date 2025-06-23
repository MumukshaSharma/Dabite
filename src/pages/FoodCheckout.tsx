
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Tag, CreditCard, Clock, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const FoodCheckout = () => {
  const [showSubscriptionSuggestion, setShowSubscriptionSuggestion] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: 'Classic Dal Rice Combo', price: 99, quantity: 2, kitchen: 'Mama\'s Kitchen' },
    { id: 2, name: 'Rajma Chawal', price: 119, quantity: 1, kitchen: 'Home Taste' }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-display font-bold text-woodland mb-8">Checkout</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Checkout Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Delivery Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-woodland/20 rounded-lg bg-confetti/10">
                      <div className="font-medium text-woodland">Room 204, Boys Hostel</div>
                      <div className="text-sm text-kelp">ABC Engineering College, Delhi - 110001</div>
                      <Badge variant="secondary" className="mt-2">Home</Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Address
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Time */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Delivery Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border-2 border-woodland rounded-lg bg-woodland/5">
                      <div className="font-medium text-woodland">Lunch</div>
                      <div className="text-sm text-kelp">12:00 PM - 2:00 PM</div>
                    </div>
                    <div className="p-4 border border-woodland/20 rounded-lg cursor-pointer hover:border-woodland">
                      <div className="font-medium text-woodland">Dinner</div>
                      <div className="text-sm text-kelp">7:00 PM - 9:00 PM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscription Suggestion */}
              {showSubscriptionSuggestion && (
                <Card className="border-confetti bg-confetti/10">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-woodland">💡 Save with Subscription!</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setShowSubscriptionSuggestion(false)}
                      >
                        ✕
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-kelp mb-4">Get 30% off on monthly meals with our Dabba Max plan!</p>
                    <div className="flex space-x-3">
                      <Button 
                        className="bg-woodland hover:bg-kelp text-stark-white"
                        onClick={() => navigate('/subscription-checkout')}
                      >
                        Add to Cart
                      </Button>
                      <Button variant="outline">Maybe Later</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Apply Coupon */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tag className="h-5 w-5" />
                    <span>Apply Coupon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                  <div className="space-y-2">
                    {['FIRST50', 'STUDENT20', 'SAVE100'].map((code) => (
                      <div key={code} className="flex justify-between items-center p-2 border border-woodland/10 rounded">
                        <div>
                          <span className="font-medium text-woodland">{code}</span>
                          <p className="text-xs text-kelp">Get discount on your order</p>
                        </div>
                        <Button size="sm" variant="ghost" onClick={() => setCouponCode(code)}>
                          Use
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border-2 border-woodland rounded-lg bg-woodland/5">
                      <div className="w-6 h-6 bg-woodland rounded-full"></div>
                      <span className="text-woodland font-medium">UPI (Recommended)</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border border-woodland/20 rounded-lg">
                      <div className="w-6 h-6 border-2 border-woodland/20 rounded-full"></div>
                      <span className="text-kelp">Credit/Debit Card</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border border-woodland/20 rounded-lg">
                      <div className="w-6 h-6 border-2 border-woodland/20 rounded-full"></div>
                      <span className="text-kelp">dabite Wallet</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-woodland/20 sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium text-woodland">{item.name}</div>
                        <div className="text-sm text-kelp">{item.kitchen}</div>
                        <div className="text-sm text-kelp">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-woodland font-medium">₹{item.price * item.quantity}</div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>₹{Math.round(subtotal * 0.05)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{subtotal + Math.round(subtotal * 0.05)}</span>
                  </div>

                  <Button 
                    className="w-full bg-woodland hover:bg-kelp text-stark-white"
                    onClick={() => navigate('/order-tracking')}
                  >
                    Place Order
                  </Button>

                  <p className="text-xs text-kelp text-center">
                    By placing this order, you agree to our Terms & Conditions
                  </p>
                </CardContent>
              </Card>

              {/* Are you forgetting something? */}
              <Card className="border-woodland/20 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Are you forgetting something?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border border-woodland/10 rounded-lg">
                      <div>
                        <div className="font-medium text-woodland">Sweet Lassi</div>
                        <div className="text-sm text-kelp">₹25</div>
                      </div>
                      <Button size="sm" variant="outline">Add</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-woodland/10 rounded-lg">
                      <div>
                        <div className="font-medium text-woodland">Pickle Combo</div>
                        <div className="text-sm text-kelp">₹15</div>
                      </div>
                      <Button size="sm" variant="outline">Add</Button>
                    </div>
                  </div>
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

export default FoodCheckout;
