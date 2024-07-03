import WeatherContext from '@/context/weatherContext';
import { FullWeatherData, TodayWeather } from '@/types/types';
import { ReactNode, useState } from 'react';

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [defaultCity, setDefaultCity] = useState<string>('Your Default City');
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [unitOption, setUnitOption] = useState<'C' | 'F'>('C');
  const [fullWeatherData, setFullWeatherData] = useState<FullWeatherData | null>(null);
  const [todayWeather, setTodayWeather] = useState<TodayWeather | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const addPreviousSearch = (city: string) => {
    setPreviousSearches((prev) => {
      if (!prev.includes(city)) {
        return [city, ...prev];
      }
      return prev;
    });
  };

  const toggleForm = () => setShowForm(!showForm);

  const getWeatherByName = (city: string) => {
    console.warn(`Fetching weather for ${city}`);
  };

  return (
    <WeatherContext.Provider
      value={{
        defaultCity,
        setDefaultCity,
        previousSearches,
        addPreviousSearch,
        unitOption,
        setUnitOption,
        fullWeatherData,
        setFullWeatherData,
        todayWeather,
        setTodayWeather,
        showForm,
        toggleForm,
        getWeatherByName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
