
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Heart, Shield, Truck, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every meal is prepared fresh daily by experienced home cooks using traditional recipes",
      badge: "Fresh Daily",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Hygienic & Safe",
      description: "FSSAI certified kitchens with strict quality controls and regular health inspections",
      badge: "FSSAI Certified",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "On Time Delivery",
      description: "Guaranteed delivery within 30 minutes of scheduled time, or your next meal is free",
      badge: "30 Min Promise",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Delivery",
      description: "No delivery charges on subscription plans. Save more with longer subscriptions",
      badge: "Zero Delivery Fee",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Flexible Plans",
      description: "Daily, weekly, or monthly plans. Pause, skip, or modify your subscription anytime",
      badge: "Your Choice",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Nutrition Focused",
      description: "Balanced meals with proper portions designed for students and working professionals",
      badge: "Balanced Diet",
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-stark-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
       <div className="flex justify-center mb-6">
  <p className="inline-block text-xl text-woodland">
    why choose dabite?
  </p>
</div>

          <h2 className="text-4xl lg:text-5xl font-display font-bold text-woodland mb-6">
            More than just food delivery
          </h2>
          <p className="text-xl text-kelp/80 max-w-3xl mx-auto">
            We're committed to providing you with the best homemade food experience, 
            combining tradition with modern convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="bg-woodland/10 text-woodland">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-woodland group-hover:text-kelp transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-kelp/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-woodland rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <h3 className="text-3xl lg:text-4xl font-bold text-confetti">2000+</h3>
              <p className="text-stark-white">Happy Customers</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-3xl lg:text-4xl font-bold text-confetti">50,000+</h3>
              <p className="text-stark-white">Meals Delivered</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl lg:text-4xl font-bold text-confetti">15</h3>
              <p className="text-stark-white">Cities Served</p>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl lg:text-4xl font-bold text-confetti">4.8★</h3>
              <p className="text-stark-white">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
