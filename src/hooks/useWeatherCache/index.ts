import { fetchWeatherByCity } from '@/services/weatherService';
import { FullWeatherData } from '@/types/types';
import { useCallback, useState } from 'react';

const cache: { [key: string]: FullWeatherData } = {};

const fetchWeatherData = async (city?: string) => {
  try {
    const data = await fetchWeatherByCity(city);
    return data.results;
  } catch (error) {
    console.error(`Failed to fetch weather for ${city || 'current location'}`, error);
    throw new Error('Failed to fetch weather data');
  }
};

export const useWeatherCache = () => {
  const [fullWeatherData, setFullWeatherData] = useState<FullWeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeatherByNameOrIp = useCallback(async (city?: string) => {
    try {
      setError(null);
      const cacheKey = city || 'currentLocation';

      if (cache[cacheKey]) {
        setFullWeatherData(cache[cacheKey]);
      } else {
        const data = await fetchWeatherData(city);
        cache[cacheKey] = data;
        setFullWeatherData(data);
      }
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  }, []);

  return { fullWeatherData, getWeatherByNameOrIp, error };
};
