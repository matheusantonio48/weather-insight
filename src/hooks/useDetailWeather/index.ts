import { DetailWeatherProps } from '@/types/types';
import { useMemo } from 'react';

export const useDetailWeather = ({ fullWeatherData, unitOption }: DetailWeatherProps) => {
  const { wind_speedy, wind_direction, wind_cardinal, humidity, cloudiness, forecast, rain, city_name, moon_phase } = fullWeatherData;

  const hightlights = useMemo(
    () => [
      {
        title: 'Wind Status',
        windSpeed: `${wind_speedy}`,
        windDir: wind_direction,
        windDirText: wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: rain,
      },
    ],
    [wind_speedy, wind_direction, wind_cardinal, humidity, cloudiness, forecast, rain, city_name, moon_phase]
  );

  return {
    cityName: city_name,
    forecast: forecast?.slice(0, 5),
    hightlights,
    moonPhase: moon_phase,
    unitOption,
  };
};
