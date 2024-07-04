type WeatherInput = {
  temp?: number;
  min?: number;
  max?: number;
};

type TemperatureResult = {
  temp: number | null;
  min: number | null;
  max: number | null;
};

export const getTemperatures = (weather: WeatherInput, unitOption: 'C' | 'F'): TemperatureResult => {
  const convertToFahrenheit = (temp: number): number => (temp * 9) / 5 + 32;

  const temp = weather.temp !== undefined ? (unitOption === 'C' ? weather.temp : convertToFahrenheit(weather.temp)) : null;
  const min = weather.min !== undefined ? (unitOption === 'C' ? weather.min : convertToFahrenheit(weather.min)) : null;
  const max = weather.max !== undefined ? (unitOption === 'C' ? weather.max : convertToFahrenheit(weather.max)) : null;

  return { temp, min, max };
};
