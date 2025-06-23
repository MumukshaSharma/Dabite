
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { MapPin, Plus, Edit, Trash2, Home, Building } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'home',
      title: 'Home',
      address: 'Room 204, Boys Hostel, ABC Engineering College',
      city: 'Delhi',
      pincode: '110001',
      landmark: 'Near Main Gate',
      isDefault: true
    },
    {
      id: 2,
      type: 'work',
      title: 'Library',
      address: 'Central Library, ABC Engineering College',
      city: 'Delhi',
      pincode: '110001',
      landmark: 'Ground Floor',
      isDefault: false
    }
  ]);

  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'home',
    title: '',
    address: '',
    city: '',
    pincode: '',
    landmark: ''
  });

  const handleAddAddress = () => {
    if (newAddress.title && newAddress.address && newAddress.city && newAddress.pincode) {
      const address = {
        id: addresses.length + 1,
        ...newAddress,
        isDefault: addresses.length === 0
      };
      setAddresses([...addresses, address]);
      setNewAddress({ type: 'home', title: '', address: '', city: '', pincode: '', landmark: '' });
      setIsAddingAddress(false);
    }
  };

  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 cursor-default">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-woodland">Manage Addresses</h1>
              <p className="text-kelp">Add and manage your delivery locations</p>
            </div>
            <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
              <DialogTrigger asChild>
                <Button className="bg-woodland hover:bg-kelp text-stark-white rounded-xl shadow-md">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] cursor-default bg-stark-white/100 shadow-sm">
                <DialogHeader>
                  <DialogTitle>Add New Address</DialogTitle>
                  <DialogDescription>
                    Add a new delivery location for your orders
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Address Type</Label>
                    <RadioGroup 
                      value={newAddress.type} 
                      onValueChange={(value) => setNewAddress({...newAddress, type: value})}
                      className="flex space-x-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="home" id="home" />
                        <Label htmlFor="home">Home</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="work" id="work" />
                        <Label htmlFor="work">Work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="title">Address Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Home, Office, Hostel Room"
                      value={newAddress.title}
                      onChange={(e) => setNewAddress({...newAddress, title: e.target.value})}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Complete Address</Label>
                    <Input
                      id="address"
                      placeholder="House/Room number, Building, Area"
                      value={newAddress.address}
                      onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                      className="rounded-xl shadow-md"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        placeholder="110001"
                        value={newAddress.pincode}
                        onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                      className="rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="landmark">Landmark (Optional)</Label>
                    <Input
                      id="landmark"
                      placeholder="Near landmark for easy identification"
                      value={newAddress.landmark}
                      onChange={(e) => setNewAddress({...newAddress, landmark: e.target.value})}
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <Button onClick={handleAddAddress} className="w-full bg-woodland/90 hover:bg-kelp text-stark-white rounded-xl shadow-md">
                    Save Address
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {addresses.map((address) => (
              <Card key={address.id} className="border-woodland/20 rounded-xl shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-confetti/20 rounded-full flex items-center justify-center">
                        {address.type === 'home' ? <Home className="h-6 w-6 text-woodland" /> : <Building className="h-6 w-6 text-woodland" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-woodland">{address.title}</h3>
                          {address.isDefault && (
                            <Badge variant="secondary" className="bg-confetti/20 text-woodland">
                              Default
                            </Badge>
                          )}
                        </div>
                        <p className="text-kelp text-sm">{address.address}</p>
                        <p className="text-kelp text-sm">{address.city} - {address.pincode}</p>
                        {address.landmark && (
                          <p className="text-kelp text-sm">Landmark: {address.landmark}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!address.isDefault && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSetDefault(address.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-woodland/20 mt-8 rounded-xl shadow-md">
            <CardHeader>
              <CardTitle>Delivery Areas</CardTitle>
              <CardDescription>We currently deliver to these areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'South Delhi', 'North Delhi', 'East Delhi',
                  'Gurgaon', 'Noida', 'Faridabad',
                  'Ghaziabad', 'Greater Noida', 'Dwarka'
                ].map((area) => (
                  <div key={area} className="flex items-center space-x-2 p-3 border border-woodland/10 rounded-xl shadow-sm">
                    <MapPin className="h-4 w-4 text-woodland" />
                    <span className="text-kelp">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-kelp mt-4">
                Don't see your area? <Button variant="link" className="p-0 text-woodland">Request delivery to your location</Button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddressManagement;
