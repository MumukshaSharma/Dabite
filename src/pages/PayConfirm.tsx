import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';


const SubscriptionSuccessPage = () => {
const navigate = useNavigate();

    useEffect(() => {
        import('canvas-confetti').then((module) => {
          const confetti = module.default;
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
          });
        });
      }, []);

  const today = new Date().toLocaleDateString();
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const nextDate = nextMonth.toLocaleDateString();

  return (
    <div className="min-h-screen bg-kelp text-stark-white">
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto mt-10 space-y-6 bg-stark-white  text-kelp rounded-2xl shadow-lg border border-stark-white/10 opacity-90">
        <h1 className="text-3xl font-bold text-center">✅ You’re In, Foodie!</h1>
        <p className="text-center text-lg">Welcome to the <strong>dabite</strong> Family!</p>
        <p className="text-center text-sm text-stark-white/80">Your payment was successful, and you’re now officially a Subscribed Member.</p>

        <div className="space-y-2 bg-stark-white p-4 rounded-xl">
          <h2 className="text-xl font-semibold">🍱 Get ready for:</h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Fresh, homemade meals delivered daily</li>
            <li>Flexible plans & meal preferences</li>
            <li>Exclusive offers and priority support</li>
          </ul>
        </div>

        <hr className="border-kelp" />

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">📦 Your Subscription Details:</h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Plan: <strong>Monthly Veg Plan</strong></li>
            <li>Start Date: <strong>{today}</strong></li>
            <li>Next Renewal: <strong>{nextDate}</strong></li>
            <li>Delivery Location: <strong>123, Your Street, Jaipur</strong></li>
          </ul>
        </div>

        <hr className="border-kelp" />

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">💡 What’s Next?</h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Explore your meal calendar</li>
            <li>Update your preferences anytime</li>
            <li>Track your delivery from your dashboard</li>
          </ul>
        </div>

        <hr className="border-kelp" />

        <div className="space-y-3 text-center">
          <h2 className="text-lg font-semibold">👀 Need Help?</h2>
          <p className="text-sm text-stark-white/70">Our support team is just a click away if you have any questions.</p>
          <div className="flex flex-wrap gap-2 justify-center bg-inherit">
            <Button
             variant="secondary"
             className="bg-inherit hover:bg-kelp hover:text-stark-white rounded-2xl hover:shadow-md"
             onClick={() => navigate('/home')}
             >Go to Dashboard</Button>
            <Button 
            variant="outline"
             className="bg-inherit hover:bg-kelp hover:text-stark-white rounded-2xl hover:shadow-md"
             onClick={() => navigate('/Subscription')}
             >Manage Subscription</Button>
            <Button
             variant="ghost"
             className="bg-inherit hover:bg-kelp hover:text-stark-white rounded-2xl hover:shadow-md"
             onClick={() => navigate('/Help')}
             >Contact Support</Button>
            <Button
             className="bg-inherit hover:bg-kelp hover:text-stark-white text-kelp rounded-2xl hover:shadow-md"
             onClick={() => navigate('/Menu')}
             >Explore Kitchens</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccessPage;