
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Smartphone, Wallet, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const selectedPlan = location.state?.selectedPlan || {
    name: 'Monthly Plan',
    price: 2499,
    originalPrice: 2999,
    meals: 30
  };

  const coupons = [
    { code: 'FIRST50', discount: 50, description: 'Flat ₹50 off on first order' },
    { code: 'STUDENT20', discount: 20, description: '20% off for students' },
    { code: 'SAVE100', discount: 100, description: 'Save ₹100 on orders above ₹2000' }
  ];

  const [orderDetails, setOrderDetails] = useState({
    instructions: '',
    deliveryTime: 'lunch'
  });

  const applyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponCode.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon);
    } else {
      alert('Invalid coupon code');
    }
  };

  const calculateTotal = () => {
    let total = selectedPlan.price;
    if (appliedCoupon) {
      if (appliedCoupon.code === 'STUDENT20') {
        total = total * 0.8; // 20% discount
      } else {
        total = total - appliedCoupon.discount;
      }
    }
    return Math.max(total, 0);
  };

  const handlePayment = () => {
    // Process payment logic here
    console.log('Processing payment:', {
      plan: selectedPlan,
      paymentMethod,
      coupon: appliedCoupon,
      orderDetails,
      total: calculateTotal()
    });
    navigate('/order-tracking');
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-woodland mb-8">Complete Your Order</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Details */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Tag className="h-5 w-5" />
                    <span>Order Specifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                    <Input
                      id="instructions"
                      placeholder="Any dietary preferences or special requests..."
                      value={orderDetails.instructions}
                      onChange={(e) => setOrderDetails({...orderDetails, instructions: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Preferred Delivery Time</Label>
                    <RadioGroup 
                      value={orderDetails.deliveryTime} 
                      onValueChange={(value) => setOrderDetails({...orderDetails, deliveryTime: value})}
                      className="flex space-x-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lunch" id="lunch" />
                        <Label htmlFor="lunch">Lunch (12-2 PM)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dinner" id="dinner" />
                        <Label htmlFor="dinner">Dinner (7-9 PM)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Coupon Section */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle>Apply Coupon</CardTitle>
                  <CardDescription>Get amazing discounts on your order</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} variant="outline">Apply</Button>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="bg-confetti/20 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-woodland">
                        Coupon "{appliedCoupon.code}" applied! {appliedCoupon.description}
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-kelp">Available Coupons:</p>
                    {coupons.map((coupon) => (
                      <div key={coupon.code} className="flex justify-between items-center p-2 border border-woodland/10 rounded">
                        <div>
                          <span className="font-medium text-woodland">{coupon.code}</span>
                          <p className="text-xs text-kelp">{coupon.description}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => setCouponCode(coupon.code)}
                        >
                          Use
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="border-woodland/20">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-3 border border-woodland/10 rounded">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="h-5 w-5 text-kelp" />
                      <Label htmlFor="upi">UPI (GPay, PhonePe, Paytm)</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-woodland/10 rounded">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5 text-kelp" />
                      <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-woodland/10 rounded">
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Wallet className="h-5 w-5 text-kelp" />
                      <Label htmlFor="wallet">Digital Wallet</Label>
                    </div>
                  </RadioGroup>
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
                  <div className="space-y-2">
                    <h4 className="font-medium text-woodland">{selectedPlan.name}</h4>
                    <p className="text-sm text-kelp">{selectedPlan.meals} meals included</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{selectedPlan.price}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({appliedCoupon.code})</span>
                        <span>-₹{appliedCoupon.code === 'STUDENT20' ? Math.round(selectedPlan.price * 0.2) : appliedCoupon.discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                  </div>

                  <Button 
                    onClick={handlePayment}
                    className="w-full bg-woodland hover:bg-kelp text-stark-white"
                  >
                    Complete Payment
                  </Button>

                  <p className="text-xs text-kelp text-center">
                    By placing this order, you agree to our Terms & Conditions
                  </p>
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

export default Payment;
