import { FullWeatherData, TodayWeather } from '@/types/types';

export const transformToTodayWeather = (fullWeatherData: FullWeatherData): TodayWeather => {
  return {
    temp: fullWeatherData.current.temp,
    weather: fullWeatherData.current.description,
    condition_slug: fullWeatherData.current.condition_slug,
  };
};
