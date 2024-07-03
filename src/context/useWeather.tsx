import WeatherContext from '@/context/weatherContext';
import { WeatherContextProps } from '@/types/types';
import { useContext } from 'react';

export const useWeather = (): WeatherContextProps => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
