
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, User, Utensils, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    address: '',
    mealPreference: '',
    dietType: '',
    allergies: [] as string[],
    deliveryTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form logic here
    console.log("Onboarding complete!");
    navigate('/home'); // Redirect to home page
  };


  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Jaipur', 'Udaipur'];
  const areas = ['Central', 'North', 'South', 'East', 'West'];
  const allergies = ['Nuts', 'Dairy', 'Gluten', 'Eggs', 'Soy', 'Shellfish'];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      navigate('/');
    }
  };

  const handleAllergyChange = (allergy: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        allergies: [...prev.allergies, allergy]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        allergies: prev.allergies.filter(a => a !== allergy)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-stark-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Progress Bar */}
        <div className="flex justify-center space-x-2 rounded-xl">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-12 rounded-full transition-colors ${
                i <= step ? 'bg-woodland' : 'bg-woodland/20'
              }`}
            />
          ))}
        </div>

        

        <Card className="border-woodland/20 shadow-lg rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display text-woodland">
              {step === 1 && 'Where are you located?'}
              {step === 2 && 'Your exact address'}
              {step === 3 && 'Food preferences'}
              {step === 4 && 'Delivery preferences'}
            </CardTitle>
          </CardHeader>
          <form
  onSubmit={step === 4 ? handleSubmit : (e) => {
    e.preventDefault();
    handleNext();
  }}
>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-5 text-center">
                  <Label className="text-kelp flex items-center justify-center gap-0 ml-2 text-lg mt-0">
                    <MapPin className="h-4 w-4" />
                    select your city
                  </Label>
                  <RadioGroup
                    value={formData.city}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
                    className="grid grid-cols-2 gap-3"
                  >
                    {cities.map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <RadioGroupItem value={city} id={city} />
                        <Label htmlFor={city} className="cursor-pointer">{city}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                {/* <div className="space-y-2">
                  <Label className="text-kelp">Area/Locality</Label>
                  <RadioGroup
                    value={formData.area}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, area: value }))}
                    className="grid grid-cols-3 gap-4"
                  >
                    {areas.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <RadioGroupItem value={area} id={area} />
                        <Label htmlFor={area} className="cursor-pointer">{area}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div> */}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-kelp">Complete Address</Label>
                  <Input
                    id="address"
                    placeholder="Flat/House No., Building, Street, Landmark"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="border-woodland/30 focus:border-woodland"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-kelp flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Meal preference
                  </Label>
                  <RadioGroup
                    value={formData.mealPreference}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, mealPreference: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="veg" id="veg" />
                      <Label htmlFor="veg">Pure Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non-veg" id="non-veg" />
                      <Label htmlFor="non-veg">Non-Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-kelp">Diet type</Label>
                  <RadioGroup
                    value={formData.dietType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, dietType: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regular" id="regular" />
                      <Label htmlFor="regular">Regular</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="jain" id="jain" />
                      <Label htmlFor="jain">Jain</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="keto" id="keto" />
                      <Label htmlFor="keto">Keto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="protein-rich" id="protein-rich" />
                      <Label htmlFor="protein-rich">Protein Rich</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-kelp">Allergies (if any)</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {allergies.map((allergy) => (
                      <div key={allergy} className="flex items-center space-x-2">
                        <Checkbox
                          id={allergy}
                          checked={formData.allergies.includes(allergy)}
                          onCheckedChange={(checked) => handleAllergyChange(allergy, checked as boolean)}
                        />
                        <Label htmlFor={allergy} className="cursor-pointer">{allergy}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <Label className="text-kelp flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Preferred delivery time
                </Label>
                <RadioGroup
                  value={formData.deliveryTime}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryTime: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="12-1" id="12-1" />
                    <Label htmlFor="12-1">12:00 PM - 1:00 PM</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-2" id="1-2" />
                    <Label htmlFor="1-2">1:00 PM - 2:00 PM</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="7-8" id="7-8" />
                    <Label htmlFor="7-8">7:00 PM - 8:00 PM</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="8-9" id="8-9" />
                    <Label htmlFor="8-9">8:00 PM - 9:00 PM</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <Button
              onClick={step === 4 ? handleSubmit : handleNext}
              className="w-full bg-woodland hover:bg-kelp text-stark-white"
            >
              {step === 4 ? 'Complete Setup' : 'Continue'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
