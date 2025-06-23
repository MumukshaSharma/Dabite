
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: 'Classic Dal Rice Combo',
      description: 'Traditional dal, steamed rice, sabzi, pickle, and papad',
      price: 99,
      category: 'veg',
      calories: 450,
      image: '/public/images/dc2.webp'
    },
    {
      id: 2,
      name: 'Chicken Curry Meal',
      description: 'Homestyle chicken curry with rice, roti, and salad',
      price: 149,
      category: 'non-veg',
      calories: 580,
      image: '/public/images/chick.jpg'
    },
    {
      id: 3,
      name: 'South Indian Special',
      description: 'Sambar rice, rasam, vegetable curry, and curd',
      price: 109,
      category: 'veg',
      calories: 420,
      image: '/public/images/si2.webp'
    },
    {
      id: 4,
      name: 'Rajma Chawal',
      description: 'Kidney bean curry with basmati rice and pickle',
      price: 119,
      category: 'veg',
      calories: 480,
      image: '/public/images/rc2.jpg'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleOrderNow = (item: any) => {
    navigate('/Payment', { state: { selectedItem: item } });
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 cursor-default">
          <h1 className="text-4xl font-display font-bold text-woodland mb-4">Our Menu</h1>
          <p className="text-lg text-kelp max-w-2xl mx-auto">
            Freshly prepared homestyle meals delivered to your doorstep
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full rounded-xl">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8 rounded-xl bg-muted p-1">
            <TabsTrigger value="all" className={`rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm`}>All Items</TabsTrigger>
            <TabsTrigger value="veg" className={`rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm`}>Vegetarian</TabsTrigger>
            <TabsTrigger value="non-veg" className={`rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm`}>Non-Veg</TabsTrigger>
          </TabsList>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-default">
            {filteredItems.map((item) => (
              <Card key={item.id} className="border-woodland/20 rounded-xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-confetti/20 mb-4 flex items-center justify-center rounded-xl">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className=" flex justify-between items-start">
                    <CardTitle className="text-woodland">{item.name}</CardTitle>
                    <Badge variant={item.category === 'veg' ? 'default' : 'destructive'}>
                      {item.category === 'veg' ? '🌱 Veg' : '🍗 Non-Veg'}
                    </Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-woodland">₹{item.price}</span>
                    <span className="text-sm text-kelp">{item.calories} calories</span>
                  </div>
                  <Button 
                    onClick={() => handleOrderNow(item)}
                    className="w-full rounded-xl bg-woodland hover:bg-kelp text-stark-white"
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
