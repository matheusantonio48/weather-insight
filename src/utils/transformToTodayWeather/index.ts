import { FullWeatherData, TodayWeather } from '@/types/types';

export const transformToTodayWeather = (fullWeatherData: FullWeatherData): TodayWeather => {
  return {
    temp: fullWeatherData.temp,
    weather: fullWeatherData.description,
    condition_slug: fullWeatherData.condition_slug,
  };
};
