
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Subscription from "./pages/Subscription";
import Payment from "./pages/Payment";
import PaymentSub from "./pages/PaymentSub";
import PayConfirm from "./pages/PayConfirm";
import FoodCheckout from "./pages/FoodCheckout";
import SubscriptionCheckout from "./pages/SubscriptionCheckout";
import OrderTracking from "./pages/OrderTracking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddressManagement from "./pages/AddressManagement";
import OrderTiffin from "./pages/OrderTiffin";
import WatchStory from "./pages/WatchStory";
import FAQ from "./pages/FAQ";
import PartnerPage from '@/pages/PartnerPage';
import Help from '@/pages/Help';
import NutritionInfo from "./pages/NutritionInfo";
import Location from '@/pages/location';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const fetchData = async () => {
      const { data, error } = await supabase.from('orders').select('*');
      if (error) {
        console.error("❌ Supabase error:", error);
      } else {
        console.log("✅ Supabase data:", data);
      }
    };
  
    fetchData();  

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/partnerpage" element={<PartnerPage />} />
            <Route path="/help" element={<Help />} />
            <Route path="/home" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentsub" element={<PaymentSub />} />
            <Route path="/payconfirm" element={<PayConfirm />} />
            <Route path="/food-checkout" element={<FoodCheckout />} />
            <Route path="/subscription-checkout" element={<SubscriptionCheckout />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/order-tiffin" element={<OrderTiffin />} />
            <Route path="/watch-story" element={<WatchStory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/addresses" element={<AddressManagement />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/nutrition" element={<NutritionInfo />} />
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
