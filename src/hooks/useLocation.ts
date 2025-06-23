import { useState } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  suburb?: string;
  road?: string;
  neighbourhood?: string;
}


interface UseLocationReturn {
  location: LocationData | null;
  isLoading: boolean;
  error: string | null;
  requestLocation: () => void;
  hasPermission: boolean | null;
}

export const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const reverseGeocode = async (lat: number, lng: number): Promise<LocationData> => {
    const apiKey = 'ce5c1ef6b62d4a4e80ef147ffcd8d338';
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
    );
    const data = await response.json();
    console.log('OpenCage response:', JSON.stringify(data.results[0].components, null, 2));

    if (!data.results || data.results.length === 0) {
      throw new Error('No results from geocoding');
    }

    const result = data.results[0];
    const components = result.components;

    // Build a more detailed address string
    const detailedAddress = [
      components.road,
      components.neighbourhood,
      components.suburb,
      components.city || components.town || components.village,
      components.state,
      components.postcode,
      components.country
    ]
      .filter(Boolean)
      .join(', ');

   return {
  latitude: lat,
  longitude: lng,
  address: detailedAddress || result.formatted,
  city: components.city || components.town || components.village || '',
  state: components.state || '',
  suburb: components.suburb || '',
  road: components.road || '',
  neighbourhood: components.neighbourhood || '',
};
  };


  const requestLocation = () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      setHasPermission(false);
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setHasPermission(true);
          const { latitude, longitude } = position.coords;
          const locationData = await reverseGeocode(latitude, longitude);
          setLocation(locationData);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setHasPermission(false);
        setIsLoading(false);
      }
    );
  };

  return {
    location,
    isLoading,
    error,
    requestLocation,
    hasPermission,
  };
};
