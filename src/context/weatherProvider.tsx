import WeatherContext from '@/context/weatherContext';
import { useWeatherCache } from '@/hooks/useWeatherCache';
import { TodayWeather } from '@/types/types';
import { transformToTodayWeather } from '@/utils/transformToTodayWeather';
import { ReactNode, useCallback, useEffect, useState } from 'react';

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [defaultCity, setDefaultCity] = useState<string>('Your Default City');
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [unitOption, setUnitOption] = useState<'C' | 'F'>('C');
  const [todayWeather, setTodayWeather] = useState<TodayWeather | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const { fullWeatherData, getWeatherByNameOrIp } = useWeatherCache();

  const addPreviousSearch = useCallback((city: string) => {
    setPreviousSearches((prev) => {
      if (!prev.includes(city)) {
        return [city, ...prev];
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (fullWeatherData) {
      setTodayWeather(transformToTodayWeather(fullWeatherData));
    }
  }, [fullWeatherData]);

  useEffect(() => {
    if (defaultCity) {
      getWeatherByNameOrIp(defaultCity);
      addPreviousSearch(defaultCity);
    }
    getWeatherByNameOrIp();
  }, [defaultCity, getWeatherByNameOrIp, addPreviousSearch]);

  const toggleForm = useCallback(() => setShowForm((prev) => !prev), []);

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
        todayWeather,
        showForm,
        toggleForm,
        getWeatherByNameOrIp,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
