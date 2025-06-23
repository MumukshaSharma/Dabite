
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stark-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-woodland mb-4">Get in Touch</h1>
            <p className="text-lg text-kelp max-w-2xl mx-auto">
              Have questions, feedback, or want to partner with us? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-woodland/20 rounded-2xl shadow-md cursor-default">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          className="rounded-xl shadow-sm"
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="rounded-xl shadow-sm"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="rounded-xl shadow-sm"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="What is this regarding?"
                          className="rounded-xl shadow-sm"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your query..."
                        className="min-h-[120px] rounded-xl shadow-sm"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="rounded-xl shadow-sm w-full bg-woodland hover:bg-kelp text-stark-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-woodland/20 rounded-xl shadow-sm cursor-default">
                <CardHeader className="bg-stark-white/40">
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-woodland" />
                    <div>
                      <p className="font-medium text-woodland">Email</p>
                      <p className="text-sm text-kelp">hello@dabite.com</p>
                    </div>
                  </div>

                  <hr className="border-kelp" />
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-woodland" />
                    <div>
                      <p className="font-medium text-woodland">Phone</p>
                      <p className="text-sm text-kelp">+91 98765 43210</p>
                    </div>
                  </div>

                  <hr className="border-kelp" />
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-woodland" />
                    <div>
                      <p className="font-medium text-woodland">Address</p>
                      <p className="text-sm text-kelp">
                        dabite HQ, Block A, Sector 16<br />
                        Noida, UP 201301
                      </p>
                    </div>
                  </div>

                  <hr className="border-kelp" />
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-woodland" />
                    <div>
                      <p className="font-medium text-woodland">Support Hours</p>
                      <p className="text-sm text-kelp">Mon-Sat: 9AM - 8PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Support */}
              <Card className="border-woodland/20 rounded-2xl shadow-sm cursor-default">
                <CardHeader>
                  <CardTitle>Quick Support</CardTitle>
                  <CardDescription>Need immediate assistance?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start rounded-xl shadow-md hover:bg-kelp/10">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl shadow-md hover:bg-kelp/10">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Customer Care
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl shadow-md hover:bg-kelp/10">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="border-woodland/20 rounded-xl shadow-sm cursor-default">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-kelp mb-4">
                    Find quick answers to common questions about our service, delivery, and subscription plans.
                  </p>
                  <Button variant="outline" className="w-full rounded-xl shadow-md hover:bg-kelp/10">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>

              {/* Partnership */}
              <Card className="border-woodland/20 cursor-default rounded-xl shadow-sm">
                <CardHeader>
                  <CardTitle>Partner with Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-kelp mb-4">
                    Are you a home chef or kitchen owner? Join our network and start serving students in your area.
                  </p>
                  <Button className="w-full bg-woodland hover:bg-kelp text-stark-white rounded-xl shadow-md"
                  onClick={() => navigate('/partner')}
                  >
                    Become a Partner
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
