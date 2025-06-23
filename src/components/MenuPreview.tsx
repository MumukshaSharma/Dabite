import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Plus, Leaf, ChefHat } from 'lucide-react';

const MenuPreview = () => {
  const navigate = useNavigate(); // ⬅️ Add this inside the component
  const [selectedCategory, setSelectedCategory] = useState('veg');

  const menuItems = {
    veg: [
      {
        id: 1,
        name: "Classic Dal Chawal Combo",
        description: "Yellow dal, steamed rice, mixed vegetable sabji, 2 rotis, pickle & salad",
        price: 99,
        originalPrice: 120,
        rating: 4.8,
        image: "/images/dc2.webp",
        tags: ["Most Popular", "Protein Rich"],
        calories: 450
      },
      {
        id: 2,
        name: "Rajma Rice Bowl",
        description: "Punjabi rajma, basmati rice, onion raita, pickle & papad",
        price: 110,
        originalPrice: 130,
        rating: 4.7,
        image: "/images/rc2.jpg",
        tags: ["High Protein", "North Indian"],
        calories: 520
      },
      {
        id: 3,
        name: "South Indian Special",
        description: "Sambar rice, rasam, vegetable curry, curd & pickle",
        price: 105,
        originalPrice: 125,
        rating: 4.9,
        image: "/images/si2.webp",
        tags: ["Authentic", "Light"],
        calories: 380
      }
    ],
    nonveg: [
      {
        id: 4,
        name: "Chicken Curry Meal",
        description: "Home-style chicken curry, rice, roti, dal & salad",
        price: 149,
        originalPrice: 180,
        rating: 4.9,
        image: "/images/chick.jpg",
        tags: ["Bestseller", "High Protein"],
        calories: 650
      },
      {
        id: 5,
        name: "Fish Curry Special",
        description: "Bengal fish curry, steamed rice, dal, pickle & papad",
        price: 159,
        originalPrice: 190,
        rating: 4.6,
        image: "/images/fishcurry.webp",
        tags: ["Omega Rich", "Bengali Style"],
        calories: 580
      },
      {
        id: 6,
        name: "Egg Curry Combo",
        description: "Spiced egg curry, rice, roti, vegetable & pickle",
        price: 129,
        originalPrice: 150,
        rating: 4.7,
        image: "/images/eggCyrry.jpg",
        tags: ["Budget Friendly", "Protein"],
        calories: 490
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-confetti/20 via-stark-white to-canary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="text-woodland bg-inherit px-4 py-2 text-xl font-medium mb-4 hover:backdrop-blur-0 hover:blur-0 hover:bg-stark-white cursor-default">
             Today's Menu Have
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-woodland mb-6 cursor-default">
            Delicious meals made with love
          </h2>
          <p className="text-xl text-kelp/80 max-w-3xl mx-auto cursor-default">
            Fresh ingredients, traditional recipes, and modern nutrition - 
            all packed in convenient tiffin boxes.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
<TabsList className="relative flex w-full max-w-md mx-auto bg-[#f2f2e9] border border-[#c7c7ae]/60 rounded-full p-1 mb-12 shadow-md overflow-hidden">
  <TabsTrigger
    value="veg"
    className="w-1/2 flex items-center justify-center gap-2 h-11 text-sm font-medium text-[#263a1c] transition-all duration-300
      data-[state=active]:bg-[#cbd8b0] data-[state=active]:text-[#1f2e12] data-[state=active]:shadow-inner data-[state=active]:font-semibold rounded-full"
  >
    <Leaf className="h-4 w-4 stroke-[2.2]" />
    Vegetarian
  </TabsTrigger>

  <TabsTrigger
    value="nonveg"
    className="w-1/2 flex items-center justify-center gap-2 h-11 text-sm font-medium text-[#3e321c] transition-all duration-300
      data-[state=active]:bg-[#e0c5aa] data-[state=active]:text-[#2c1e0e] data-[state=active]:shadow-inner data-[state=active]:font-semibold rounded-full"
  >
    <ChefHat className="h-4 w-4 stroke-[2.2]" />
    Non-Vegetarian
  </TabsTrigger>
</TabsList>


          <TabsContent value="veg" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.veg.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden animate-scale-in cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-confetti/30 to-canary/30 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 cursor-default"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-500 text-white">
                          <Leaf className="h-3 w-3 mr-1" />
                          Veg
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs bg-woodland/10 text-woodland">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="font-semibold text-lg text-woodland mb-2 group-hover:text-kelp transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="text-kelp/70 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-woodland">₹{item.price}</span>
                          <span className="text-lg text-kelp/50 line-through">₹{item.originalPrice}</span>
                        </div>
                        <span className="text-sm text-kelp/70">{item.calories} cal</span>
                      </div>
                      
                      <Button className="w-full bg-woodland hover:bg-kelp text-stark-white group-hover:scale-105 transition-all duration-300"
                      onClick={() => navigate('/Payment')}>
                        <Plus className="h-4 w-4 mr-2"
                        />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nonveg" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.nonveg.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        />
    
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white">
                          <ChefHat className="h-3 w-3 mr-1" />
                          Non-Veg
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs bg-woodland/10 text-woodland">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="font-semibold text-lg text-woodland mb-2 group-hover:text-kelp transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="text-kelp/70 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-woodland">₹{item.price}</span>
                          <span className="text-lg text-kelp/50 line-through">₹{item.originalPrice}</span>
                        </div>
                        <span className="text-sm text-kelp/70">{item.calories} cal</span>
                      </div>
                      
                      <Button className="w-full bg-woodland hover:bg-kelp text-stark-white group-hover:scale-105 transition-all duration-300"
                      onClick={() => navigate('/Payment')}
                      >
                        <Plus className="h-4 w-4 mr-2" 
                         />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-transparent bg-amber-94 text-woodland hover:bg-woodland hover:text-stark-white px-8 py-4 text-lg font-semibold rounded-xl shadow-kelp shadow-md"
            onClick={() => navigate('/Menu')}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
