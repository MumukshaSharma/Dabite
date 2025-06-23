import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const slides = [
  '🍲 Turn Your Kitchen into a Business',
  '📍 Reach Customers Nearby You',
  '💸 Earn with Every Meal You Cook',
  '🚀 Grow Your Food Brand from Home',
  '🤝 Build Long-Term Tiffin Customers with dabite',
];

const PartnerPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobile, setMobile] = useState('');
  const [showFullForm, setShowFullForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', business: '', city: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Application submitted:', { mobile, ...formData });
    alert('Application submitted! We’ll contact you soon.');
    setMobile('');
    setFormData({ name: '', business: '', city: '' });
    setShowFullForm(false);
  };

  const isValidMobile = /^\d{10}$/.test(mobile.trim());

  const FormInput = ({ placeholder, value, onChange }) => (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 bg-white text-kelp placeholder:text-kelp/60 border border-kelp/10"
    />
  );

  return (
    <div className="min-h-screen bg-kelp text-stark-white">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col justify-center px-10 text-left bg-kelp relative flex-grow">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-xl"
            >
              {slides[currentSlide]}
            </motion.h1>
          </AnimatePresence>
          <p className="text-md sm:text-lg max-w-xl text-white/80">
            Join dabite and earn by serving hygienic, local, homemade meals to students, professionals, and offices nearby.
          </p>
        </div>

        <div className="flex items-center justify-center p-6 bg-[url('/form-bg-pattern.png')] bg-cover bg-center">
          <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 border border-amber-100">
            <h2 className="text-2xl font-bold text-kelp mb-2">Get Started</h2>
            <p className="text-sm text-kelp/70 mb-5">Enter your mobile number to begin.</p>

            {!showFullForm ? (
              <>
                <Input
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mb-4 bg-white text-kelp placeholder:text-kelp/60 border border-kelp/10"
                  aria-label="Enter mobile number"
                />
                <Button
                  className="bg-kelp text-white w-full font-semibold rounded-md hover:bg-kelp/90 py-2 text-sm"
                  onClick={() => {
                    if (!isValidMobile) {
                      alert('Please enter a valid 10-digit mobile number');
                    } else {
                      setShowFullForm(true);
                    }
                  }}
                >
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <FormInput
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <FormInput
                  placeholder="Tiffin Center / Business Name"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
                <FormInput
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                <Button
                  className="bg-kelp text-white w-full font-semibold rounded-md hover:bg-kelp/90 py-2 text-sm"
                  onClick={handleSubmit}
                  aria-label="Submit your application"
                >
                  Submit Application
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white text-kelp py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Join dabite?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: '💸 Earn Every Day', desc: 'Subscription model = stable, monthly income' },
            { title: '📍 Local Reach', desc: 'We connect you with hungry people nearby' },
            { title: '🧼 Hygiene First', desc: 'You cook with care, we ensure trust' },
            { title: '🛵 Logistics Support', desc: 'You focus on food, we’ll handle deliveries' },
            { title: '🆓 No Upfront Cost', desc: 'No setup fee, no hidden charges' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-amber-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-kelp text-white py-14 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">🏠 "You don’t need a restaurant. Just good food and a clean kitchen."</h2>
        <p className="max-w-2xl mx-auto text-md sm:text-lg">
          dabite is made for tiffin centres and homemade food businesses looking to grow without complicated processes. We keep it simple so you can focus on cooking.
        </p>
      </div>

      <div className="bg-amber-50 text-kelp py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Serve Your City?</h2>
        <p className="mb-6 text-md sm:text-lg max-w-xl mx-auto">
          Apply now and grow your kitchen with dabite.
        </p>
        <Button
          className="bg-kelp text-white px-6 py-3 rounded-full font-semibold hover:bg-kelp/90"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Apply Now
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default PartnerPage;