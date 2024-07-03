import { Forecast } from '@/types/types';

const useTemperature = (forecast: Forecast, unitOption: 'C' | 'F') => {
  const convertToFahrenheit = (temp: number): number => (temp * 9) / 5 + 32;

  const minTemp = unitOption === 'C' ? forecast.min : convertToFahrenheit(forecast.min);
  const maxTemp = unitOption === 'C' ? forecast.max : convertToFahrenheit(forecast.max);

  return { minTemp, maxTemp };
};

export default useTemperature;
