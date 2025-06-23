import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, User, MapPin, Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LocationPage = () => {
  const [formData, setFormData] = useState({
    flatNumber: '',
    apartmentBlock: '',
    roadArea: '',
    directions: '',
    saveAs: 'home',
    receiverName: '',
    receiverPhone: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Address Saved:', formData);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-woodland via-kelp to-woodland">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md">
            <Card className="border-woodland/20 bg-stark-white/95 backdrop-blur-sm shadow-md rounded-2xl shadow-stark-white">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl lg:text-3xl text-woodland">Add New Address</CardTitle>
                <CardDescription className="text-kelp/80">Help us reach you better</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">House / Flat / Floor Number</Label>
                    <Input
                      placeholder="E.g. 123, 2nd Floor"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.flatNumber}
                      onChange={(e) => setFormData({ ...formData, flatNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Apartment Block (Optional)</Label>
                    <Input
                      placeholder="E.g. B1 Block"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.apartmentBlock}
                      onChange={(e) => setFormData({ ...formData, apartmentBlock: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Apartment / Road / Area</Label>
                    <Input
                      placeholder="E.g. Shanti Vihar Road, Jaipur"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.roadArea}
                      onChange={(e) => setFormData({ ...formData, roadArea: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Directions to Reach (Optional)</Label>
                    <Input
                      placeholder="E.g. Near SBI ATM"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.directions}
                      onChange={(e) => setFormData({ ...formData, directions: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Save As</Label>
                    <div className="relative">
                    <select
                      className="cursor-pointer relative appearance-none rounded-xl h-11 w-full border border-woodland/30 shadow-md px-3 focus:outline-none focus:border-woodland text-sm"
                      value={formData.saveAs}
                      onChange={(e) => setFormData({ ...formData, saveAs: e.target.value })}
                    >
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                      <option value="friend">Friend/Family</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-kelp">
                      <svg
                       className="w-4 h-4"
                       fill="none"
                       stroke="currentColor"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                      >
        
                       <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                   </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Receiver's Name</Label>
                    <Input
                      placeholder="E.g. Mumuksha Sharma"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.receiverName}
                      onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-kelp text-sm">Receiver's Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="E.g. 9876543210"
                      className="h-11 border-woodland/30 focus:border-woodland rounded-xl shadow-md"
                      value={formData.receiverPhone}
                      onChange={(e) => setFormData({ ...formData, receiverPhone: e.target.value })}
                      required
                    />
                  </div>
                  <Button 
                  type="submit"
                   className="w-full bg-woodland hover:bg-kelp text-stark-white h-11 text-base font-medium mt-6 rounded-xl shadow-md">
                    Save Address
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;