import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HamburgerIcon from '@/components/ui/icons8-menu-100.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Search,
  MapPin,
  User,
  Star,
  CreditCard,
  Heart,
  Clock,
  Gift,
  LogOut,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation as useGeoLocation } from '@/hooks/useLocation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const { location, isLoading, error, requestLocation } = useGeoLocation();

  useEffect(() => {
    if (location) {
      const shortAddress = [
        location.city,
        location.state
      ].filter(Boolean).join(', ');
      setSelectedLocation(shortAddress);
    }
  }, [location]);

  const handleUseCurrentLocation = () => {
    requestLocation();
  };

  const Navbar = () => {
    return (
      <nav className="p-4 bg-white shadow-md flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/partner">Partner With Us</Link>
      </nav>
    );
  };


  const accountMenuItems = [
    {
      section: 'Subscription',
      items: [
        {
          icon: Star,
          label: 'Active Plan: Dabba Max',
          sublabel: '15 days left',
          action: () => navigate('/subscription'),
        },
      ],
    },
    {
      section: 'Personal',
      items: [
        { icon: MapPin, label: 'Saved Addresses', action: () => navigate('/addresses') },
        { icon: CreditCard, label: 'Payment Methods', sublabel: '2 cards added' },
        { icon: Gift, label: 'Available Vouchers', sublabel: '3 active' },
        { icon: Heart, label: 'Favorite Kitchens', sublabel: '5 saved' },
      ],
    },
    {
      section: 'History & Rewards',
      items: [
        { icon: Clock, label: 'Order History', action: () => navigate('/order-tracking') },
        { icon: Star, label: 'Reward Points', sublabel: '240 points' },
      ],
    },
    {
      section: 'Account',
      items: [
        { icon: Settings, label: 'Account Settings' },
        { icon: LogOut, label: 'Logout', action: () => navigate('/Login') },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur-sm border-b border-confetti/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-woodland cursor-pointer"
              onClick={() => navigate('/home')}
            >
              dabite
            </h1>
          </div>

          {/* Desktop: Center Section - Location + Search */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-2 max-w-4xl mx-4">

            {/* Location Picker */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="!border-none !shadow-none !ring-0 !outline-none bg-transparent text-kelp max-w-[180px] lg:max-w-[220px] overflow-hidden text-ellipsis whitespace-nowrap underline underline-offset-4 decoration-woodland font-medium text-sm hover:bg-kelp hover:text-stark-white rounded-full"
                  title={selectedLocation}
                >
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{selectedLocation}</span>
                </Button>


              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Location</DropdownMenuLabel>
                <DropdownMenuItem onClick={handleUseCurrentLocation}>
                  📍 Use My Current Location
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Delhi NCR')}>Delhi NCR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Mumbai')}>Mumbai</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Bangalore')}>Bangalore</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Pune')}>Pune</DropdownMenuItem>
                {isLoading && <DropdownMenuItem disabled>Detecting location...</DropdownMenuItem>}
                {error && <DropdownMenuItem disabled className="text-red-500">{error}</DropdownMenuItem>}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md lg:max-w-lg xl:max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kelp/60" />
              <Input
                placeholder="Search for food, kitchen..."
                className="pl-10 w-full h-10 lg:h-12 border-none outline-none ring-0 focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 bg-white/70 backdrop-blur-md rounded-[26px] shadow-md transition-shadow text-sm"
              />

            </div>
          </div>

          {/* Desktop: Right Section - Account + Menu */}
          <div className="hidden lg:flex items-center justify-end space-x-2">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-13 p-2 focus:outline-none focus:ring-0 hover:bg-inherit"
                  >
                    <User className="!h-5 !w-5 text-kelp" />
                  </Button>


                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 mr-2 mt-3.5 bg-stark-white/70 backdrop-blur-md border border-woodland/10 shadow-xl" align="center">
                  {accountMenuItems.map((section, sectionIndex) => (
                    <div key={section.section}>
                      <DropdownMenuLabel className="text-xs text-kelp/60 uppercase tracking-wide">
                        {section.section}
                      </DropdownMenuLabel>
                      {section.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <DropdownMenuItem
                            key={itemIndex}
                            className="flex items-center space-x-3 py-3 cursor-pointer"
                            onClick={item.action}
                          >
                            <Icon className="h-4 w-4 text-woodland" />
                            <div className="flex-1">
                              <div className="font-medium text-woodland">{item.label}</div>
                              {item.sublabel && (
                                <div className="text-xs text-kelp/60">{item.sublabel}</div>
                              )}
                            </div>
                          </DropdownMenuItem>
                        );
                      })}
                      {sectionIndex < accountMenuItems.length - 1 && <DropdownMenuSeparator />}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                className="text-kelp !my-15 w-7 h-7 hover:text-woodland hover:bg-inherit px-2 lg:px-3"
                onClick={() => navigate('/')}
              >
                <User className="h-4 w-4 my-6 lg:mr-6" />
                <span className="text-sm">Login</span>
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-inherit"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={HamburgerIcon}
                alt="Menu"
                className="h-4 w-4 lg:h-6 lg:w-6 hover:opacity-80 transition-opacity"
              />
            </Button>
          </div>

          {/* Mobile & Tablet: Location + Search + Account Menu */}

          <div className="flex items-center space-x-2 lg:hidden flex-1 ml-4">
            {/* Mobile Location - Now shows selected location text */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-[100px] sm:w-[120px] overflow-hidden text-ellipsis whitespace-nowrap text-kelp hover:text-woodland font-medium text-xs sm:text-sm flex-shrink-0"
                  title={selectedLocation}
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{selectedLocation}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Select Location</DropdownMenuLabel>
                <DropdownMenuItem onClick={handleUseCurrentLocation}>
                  📍 Use My Current Location
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Delhi NCR')}>Delhi NCR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Mumbai')}>Mumbai</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Bangalore')}>Bangalore</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLocation('Pune')}>Pune</DropdownMenuItem>
                {isLoading && <DropdownMenuItem disabled>Detecting location...</DropdownMenuItem>}
                {error && <DropdownMenuItem disabled className="text-red-500">{error}</DropdownMenuItem>}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Search Bar - Always Visible */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kelp/60" />
              <Input
                placeholder="Search food, kitchen..."
                className="pl-10 w-full h-9 sm:h-10 border-woodland/30 focus:border-woodland bg-white/70 backdrop-blur-md rounded-[20px] shadow-sm focus:shadow-md transition-shadow text-sm"
              />
            </div>

            {/* Account & Menu */}
            <div className="flex items-center space-x-1 flex-shrink-0">
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 text-kelp hover:text-woodland"
                    >
                      <User className="h-8 w-8" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 mr-2 mt-3.5 bg-stark-white/70 backdrop-blur-md border border-woodland/10 shadow-xl" align="end">
                    {accountMenuItems.map((section, sectionIndex) => (
                      <div key={section.section}>
                        <DropdownMenuLabel className="text-xs text-kelp/60 uppercase tracking-wide">
                          {section.section}
                        </DropdownMenuLabel>
                        {section.items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <DropdownMenuItem
                              key={itemIndex}
                              className="flex items-center space-x-3 py-3 cursor-pointer"
                              onClick={item.action}
                            >
                              <Icon className="h-5 w-5 text-woodland" />
                              <div className="flex-1">
                                <div className="font-medium text-woodland">{item.label}</div>
                                {item.sublabel && (
                                  <div className="text-xs text-kelp/60">{item.sublabel}</div>
                                )}
                              </div>
                            </DropdownMenuItem>
                          );
                        })}
                        {sectionIndex < accountMenuItems.length - 1 && <DropdownMenuSeparator />}
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-kelp hover:text-woodland"
                  onClick={() => navigate('/')}
                >
                  <User className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setIsOpen(true)}
              >
                <img
                  src={HamburgerIcon}
                  alt="Menu"
                  className="!my-2 h-4 w-4 hover:opacity-80 transition-opacity"
                />
              </Button>
            </div>
          </div>

          {/* Mobile Extra Menu Sheet (Optional) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <div style={{ display: 'none' }} />
            </SheetTrigger>
            <SheetContent className="bg-stark-white/95 backdrop-blur-md w-[320px] sm:w-[400px] transition-all shadow-xl shadow-woodland/10 duration-300 ease-in-out">
              <div className="flex flex-col space-y-1 mt-6">
                {[
                  { label: 'Home', icon: '/home.png', path: '/home' },
                  { label: 'Explore Kitchens / Meals', icon: '/explore.png', path: '/menu' },
                  { label: 'Change Location', icon: '/location.png', path: '/location' },
                  { label: 'Subscriptions', icon: '/subscriptions.png', path: '/Subscription' },
                  { label: 'Partner with Us', icon: '/partner.png', path: '/partner' },
                  { label: 'Get the App', icon: '/app.png', },
                  { label: 'Help & Support', icon: '/help.png', path: '/help' },
                  { label: 'About Us', icon: '/about.png', path: '/about' },
                  !isLoggedIn && { label: 'Sign In / Sign Up', icon: '/login.png', path: '/' }
                ]
                  .filter(Boolean)
                  .map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="w-full justify-start text-kelp hover:text-woodland p-3 h-auto text-sm"
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                    >
                      <span className="mr-3 text-lg">{item.emoji}</span>
                      <span>{item.label}</span>
                    </Button>
                  ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;