import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { DetailWeatherProps } from '@/types/types';
import { renderHook } from '@testing-library/react';
import { useDetailWeather } from '../index';

describe('useDetailWeather', () => {
  const setUnitOption = jest.fn();

  it('should return the correct weather details', () => {
    const props: DetailWeatherProps = {
      fullWeatherData: mockWeatherData,
      unitOption: 'C',
      setUnitOption,
    };

    const { result } = renderHook(() => useDetailWeather(props));

    const { cityName, forecast, hightlights, moonPhase, unitOption } = result.current;

    expect(cityName).toBe(mockWeatherData.city_name);
    expect(forecast).toHaveLength(5);
    expect(moonPhase).toBe(mockWeatherData.moon_phase);
    expect(unitOption).toBe('C');

    expect(hightlights).toEqual([
      {
        title: 'Wind Status',
        windSpeed: `${mockWeatherData.wind_speedy}`,
        windDir: mockWeatherData.wind_direction,
        windDirText: mockWeatherData.wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: mockWeatherData.humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: mockWeatherData.cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: mockWeatherData.rain,
      },
    ]);
  });

  it('should update hightlights when fullWeatherData changes', () => {
    const initialProps: DetailWeatherProps = {
      fullWeatherData: mockWeatherData,
      unitOption: 'C',
      setUnitOption,
    };

    const newMockWeatherData = {
      ...mockWeatherData,
      results: {
        ...mockWeatherData,
        wind_speedy: '15 km/h',
        wind_direction: 200,
        wind_cardinal: 'SW',
        humidity: 60,
        cloudiness: 70,
      },
    };

    const { result, rerender } = renderHook(
      ({ fullWeatherData, unitOption }: DetailWeatherProps) => useDetailWeather({ fullWeatherData, unitOption, setUnitOption }),
      {
        initialProps,
      }
    );

    expect(result.current.hightlights).toEqual([
      {
        title: 'Wind Status',
        windSpeed: `${mockWeatherData.wind_speedy}`,
        windDir: mockWeatherData.wind_direction,
        windDirText: mockWeatherData.wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: mockWeatherData.humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: mockWeatherData.cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: mockWeatherData.rain,
      },
    ]);

    rerender({ fullWeatherData: newMockWeatherData, unitOption: 'C', setUnitOption });

    expect(result.current.hightlights).toEqual([
      {
        title: 'Wind Status',
        windSpeed: '10 km/h',
        windDir: 100,
        windDirText: 'N',
      },
      {
        title: 'Humidity',
        unit: '%',
        value: 50,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: 100,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: 0,
      },
    ]);
  });
});
