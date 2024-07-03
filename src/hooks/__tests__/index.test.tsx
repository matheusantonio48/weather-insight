import useTemperature from '@/hooks/useTemperature';
import { Forecast } from '@/types/types';
import { renderHook } from '@testing-library/react-hooks';

describe('useTemperature', () => {
  const forecast: Forecast = {
    date: '2024-07-01',
    weekday: 'Mon',
    max: 30,
    min: 20,
    cloudiness: 0,
    rain: 0,
    rain_probability: 0,
    wind_speedy: '5 km/h',
    description: 'Sunny',
    condition: 'clear_day',
  };

  it('should return the correct temperatures in Celsius', () => {
    const { result } = renderHook(() => useTemperature(forecast, 'C'));

    expect(result.current.minTemp).toBe(20);
    expect(result.current.maxTemp).toBe(30);
  });

  it('should return the correct temperatures in Fahrenheit', () => {
    const { result } = renderHook(() => useTemperature(forecast, 'F'));

    expect(result.current.minTemp).toBeCloseTo((20 * 9) / 5 + 32);
    expect(result.current.maxTemp).toBeCloseTo((30 * 9) / 5 + 32);
  });
});
