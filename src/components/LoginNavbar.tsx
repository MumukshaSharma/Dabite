
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Smartphone, Users, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-stark-white/95 backdrop-blur-sm border-b border-woodland/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-display font-bold text-woodland cursor-pointer"
             onClick={() => navigate('/Login')}
             >
              dabite
            </h1>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-kelp hover:text-woodland hover:bg-stark-white/0 text-sm lg:text-base px-3 lg:px-4"
              onClick={() => navigate('/PartnerPage')}
            >
              <Users className="h-4 w-4 mr-2" />
              Partner with Us
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-kelp hover:text-woodland hover:bg-stark-white/0 text-sm lg:text-base px-3 lg:px-4"
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Get the App
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-kelp hover:text-woodland hover:bg-stark-white/0 text-sm lg:text-base px-3 lg:px-4"
              onClick={() => navigate('/signup')}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
            <Button 
              className="bg-woodland hover:bg-kelp text-stark-white hover:text-stark-white text-sm lg:text-base px-4 lg:px-6"
              size="sm"
              onClick={() => navigate('/login#login')}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6 text-woodland" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-stark-white w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-kelp hover:text-woodland text-base"
                    onClick={() =>
                      {
                       setIsOpen(false);
                      navigate('/partnerpage')
                    }}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    Partner with Us
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-kelp hover:text-woodland text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <Smartphone className="h-5 w-5 mr-3" />
                    Get the App
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-kelp hover:text-woodland text-base"
                    onClick={() => {
                      navigate('/signup');
                      setIsOpen(false);
                    }}
                  >
                    <UserPlus className="h-5 w-5 mr-3" />
                    Sign Up
                  </Button>
                  <Button 
                    className="w-full bg-woodland hover:bg-kelp text-stark-white text-base"
                    onClick={() => navigate('/login#login')}
                  >
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
