
import { useState, useCallback } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DeliveryLocationProps {
  onLocationChange: (location: string) => void;
}

const DeliveryLocation = ({ onLocationChange }: DeliveryLocationProps) => {
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getLocation = useCallback(() => {
    setIsLoading(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=YOUR_API_KEY`
          );
          const data = await response.json();
          const address = data.results[0]?.formatted || 
            `${position.coords.latitude}, ${position.coords.longitude}`;
          
          setLocation(address);
          onLocationChange(address);
        } catch (err) {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
          onLocationChange(`${position.coords.latitude}, ${position.coords.longitude}`);
        }
        setIsLoading(false);
      },
      (err) => {
        setError('Unable to retrieve your location. Please enter it manually.');
        setIsLoading(false);
      }
    );
  }, [onLocationChange]);

  const handleManualLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <Input
            type="text"
            value={location}
            onChange={handleManualLocationChange}
            placeholder="Enter delivery address"
            className="w-full bg-[#262626] text-white rounded-md px-4 py-2 border border-gray-700 focus:border-brand-blue focus:outline-none"
          />
        </div>
        <Button
          onClick={getLocation}
          disabled={isLoading}
          className="flex items-center gap-2 bg-brand-blue hover:bg-opacity-90"
        >
          {isLoading ? (
            <Navigation className="animate-spin" />
          ) : (
            <MapPin className="h-4 w-4" />
          )}
          Share GPS Location
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {!error && !location && (
        <p className="text-gray-400 text-sm">
          Please enable your location services for accurate delivery
        </p>
      )}
    </div>
  );
};

export default DeliveryLocation;
