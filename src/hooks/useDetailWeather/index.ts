import { DetailWeatherProps } from '@/types/types';
import { useMemo } from 'react';

export const useDetailWeather = ({ fullWeatherData, unitOption }: DetailWeatherProps) => {
  const { current, forecast } = fullWeatherData;

  const hightlights = useMemo(
    () => [
      {
        title: 'Wind Status',
        windSpeed: `${current.wind_speedy}`,
        windDir: current.wind_direction,
        windDirText: current.wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: current.humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: current.cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: current.rain,
      },
    ],
    [current]
  );

  return {
    cityName: current.city_name,
    forecast: forecast.slice(0, 5),
    hightlights,
    moonPhase: current.moon_phase,
    unitOption,
  };
};
