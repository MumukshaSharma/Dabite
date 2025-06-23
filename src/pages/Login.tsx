import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from '@/components/LoginNavbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
    navigate('/home');
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Integrate Google OAuth here in future
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-woodland via-kelp to-woodland">
      <LoginNavbar />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Side - Hero */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 cursor-default">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-stark-white leading-tight">
                Order homemade food.
                <br />
                <span className="text-confetti">Discover best tiffins.</span>
                <br />
                <span className="text-stark-white">dabite it!</span>
              </h1>
              <p className="text-stark-white/80 text-lg sm:text-xl lg:text-2xl font-medium">
                Fresh, homestyle meals delivered to your doorstep
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8">
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">🍽️</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">TIFFIN DELIVERY</h3>
                <p className="text-confetti text-xs lg:text-sm">FROM HOME KITCHENS</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 40% OFF</p>
              </div>
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">📦</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">SUBSCRIPTION</h3>
                <p className="text-confetti text-xs lg:text-sm">MONTHLY PLANS</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 60% OFF</p>
              </div>
              <div className="bg-stark-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl mb-2">🏠</div>
                <h3 className="text-stark-white font-semibold text-sm lg:text-base">HOME STYLE</h3>
                <p className="text-confetti text-xs lg:text-sm">FRESH & HEALTHY</p>
                <p className="text-stark-white/80 text-xs lg:text-sm mt-1">UPTO 50% OFF</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Box */}
<div className="flex justify-center lg:justify-center pr-12">
            <div className="w-full max-w-md">
              <Card className="border-woodland/20 bg-orange-50/95 backdrop-blur-sm shadow-2xl rounded-xl">
                <CardHeader className="space-y-4 pb-2">
                  <div className="text-center space-y-2">
                    <CardTitle className="text-3xl font-bold text-woodland">Welcome Back!</CardTitle>
                    <CardDescription className="text-kelp/80">Log in to continue ordering</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-kelp text-sm">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10 shadow-md rounded-xl border-woodland/30 focus:border-woodland h-11"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-kelp text-sm">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-kelp/60" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 shadow-md rounded-xl border-woodland/30 focus:border-woodland h-11"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full shadow-md rounded-xl bg-woodland hover:bg-kelp text-stark-white font-bold h-11 text-base"
                    >
                      LOG IN
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                      <hr className="flex-grow border-t border-gray-300" />
                      <span className="mx-4 text-sm text-kelp/70">or</span>
                      <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Google Login Button */}
                    <Button
                      type="button"
                      onClick={handleGoogleLogin}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 h-12 border-gray-300 text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-md transition-all rounded-xl"
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                      Continue with Google
                    </Button>
                  </form>
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

export default Login;
