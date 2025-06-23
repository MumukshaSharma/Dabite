import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuPreview from '@/components/MenuPreview';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <Hero />
      <Features />
      <MenuPreview />
      <Testimonials />
      <CTA />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;