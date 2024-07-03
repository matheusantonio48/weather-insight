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

    expect(cityName).toBe(mockWeatherData.current.city_name);
    expect(forecast).toHaveLength(5);
    expect(moonPhase).toBe(mockWeatherData.current.moon_phase);
    expect(unitOption).toBe('C');

    expect(hightlights).toEqual([
      {
        title: 'Wind Status',
        windSpeed: `${mockWeatherData.current.wind_speedy}`,
        windDir: mockWeatherData.current.wind_direction,
        windDirText: mockWeatherData.current.wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: mockWeatherData.current.humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: mockWeatherData.current.cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: mockWeatherData.current.rain,
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
      current: {
        ...mockWeatherData.current,
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
        windSpeed: `${mockWeatherData.current.wind_speedy}`,
        windDir: mockWeatherData.current.wind_direction,
        windDirText: mockWeatherData.current.wind_cardinal,
      },
      {
        title: 'Humidity',
        unit: '%',
        value: mockWeatherData.current.humidity,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: mockWeatherData.current.cloudiness,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: mockWeatherData.current.rain,
      },
    ]);

    rerender({ fullWeatherData: newMockWeatherData, unitOption: 'C', setUnitOption });

    expect(result.current.hightlights).toEqual([
      {
        title: 'Wind Status',
        windSpeed: '15 km/h',
        windDir: 200,
        windDirText: 'SW',
      },
      {
        title: 'Humidity',
        unit: '%',
        value: 60,
      },
      {
        title: 'Cloudiness',
        unit: '%',
        value: 70,
      },
      {
        title: 'Rainfall',
        unit: '%',
        value: 0,
      },
    ]);
  });
});
