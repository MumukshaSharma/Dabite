import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Subscription Plans', href: '/subscription' },
    { name: 'Track Order', href: '/track' },
    { name: 'Contact', href: '/contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'FSSAI License', href: '/fssai' },
    { name: 'Nutritional Info', href: '/nutrition' }
  ];

  const cities = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 
    'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  return (
    <footer className="bg-kelp text-stark-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-10 mb-8">
          
          {/* Company Info */}
          <div className="space-y-5 cursor-default">
            <div>
              <h2 className="text-3xl font-display font-bold text-confetti mb-2">
                dabite
              </h2>
              <p className="text-stark-white/80 leading-relaxed">
                Bringing the taste of home to students and professionals across India. 
                Fresh, hygienic, and affordable meals delivered daily.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">hello@dabite.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-confetti" />
                <span className="text-stark-white/90">Mon-Sun: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-stark-white/10 rounded-full flex items-center justify-center hover:bg-confetti hover:text-woodland transition-all duration-300"
                  onClick={() =>
                    {
                    navigate('/')
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-4 cursor-default">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-stark-white/80 hover:text-confetti transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-4 cursor-default">Policies & Info</h3>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a 
                    href={policy.href} 
                    className="text-stark-white/80 hover:text-confetti transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities We Serve */}
          <div>
            <h3 className="text-xl font-semibold text-confetti mb-4">
              <MapPin className="inline h-5 w-5 mr-2 cursor-default"/>
              Cities We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <Badge 
                  key={city} 
                  variant="secondary" 
                  className="bg-stark-white/10 text-stark-white hover:bg-confetti hover:text-woodland transition-all duration-300 cursor-pointer"
                >
                  {city}
                </Badge>
              ))}
            </div>
            <p className="text-stark-white/60 text-sm mt-3">
              More cities coming soon! Stay tuned.
            </p>
          </div>
        </div>

        <Separator className="bg-stark-white/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <p className="text-stark-white/70 text-sm">
              © 2024 dabite. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 text-stark-white/60 text-sm">
              <span>FSSAI Lic. No: 12345678901234</span>
              <span>GST: 07AABCD1234E1Z5</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge className="bg-green-500 text-white hover:bg-green-500 cursor-default text-sm px-3 py-1">
              ✓ FSSAI Certified
            </Badge>
            <Badge className="bg-blue-500 text-white hover:bg-blue-500 cursor-default text-sm px-3 py-1">
              🔒 Secure Payments
            </Badge>
            <Badge className="bg-orange-500 text-white hover:bg-orange-500 cursor-default text-sm px-3 py-1">
              🚚 Fast Delivery
            </Badge>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 bg-stark-white/5 rounded-xl p-5 text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-confetti mb-2">
            Stay Updated with dabite
          </h3>
          <p className="text-stark-white/80 mb-4 text-sm">
            Get the latest menu updates, offers, and nutrition tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-stark-white/10 border border-stark-white/20 text-stark-white placeholder-stark-white/60 focus:outline-none focus:ring-2 focus:ring-confetti text-sm"
            />
            <button className="px-5 py-2 bg-confetti text-woodland font-semibold rounded-lg hover:bg-canary transition-colors duration-300 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
