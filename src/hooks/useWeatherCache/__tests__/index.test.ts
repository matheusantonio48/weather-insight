import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { useWeatherCache } from '@/hooks/useWeatherCache';
import { fetchWeatherByCity } from '@/services/weatherService';
import { act, renderHook, waitFor } from '@testing-library/react';

jest.mock('@/services/weatherService');

describe('useWeatherCache', () => {
  beforeEach(() => {
    (fetchWeatherByCity as jest.Mock).mockResolvedValue({ results: mockWeatherData });
  });

  it('should fetch weather data and update state', async () => {
    const { result } = renderHook(() => useWeatherCache());

    act(() => {
      result.current.getWeatherByNameOrIp('Test City');
    });

    await waitFor(() => {
      expect(result.current.fullWeatherData).toEqual(mockWeatherData);
      expect(result.current.error).toBeNull();
    });
  });

  it('should use cached data if available', async () => {
    const { result } = renderHook(() => useWeatherCache());

    act(() => {
      result.current.getWeatherByNameOrIp('Test City');
    });

    await waitFor(() => {
      expect(result.current.fullWeatherData).toEqual(mockWeatherData);
      expect(result.current.error).toBeNull();
    });

    act(() => {
      result.current.getWeatherByNameOrIp('Test City');
    });

    expect(result.current.fullWeatherData).toEqual(mockWeatherData);
  });

  it('should set an error if fetching weather data fails', async () => {
    (fetchWeatherByCity as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const { result } = renderHook(() => useWeatherCache());

    act(() => {
      result.current.getWeatherByNameOrIp('Unknown City');
    });

    await waitFor(() => {
      expect(result.current.fullWeatherData).toBeNull();
      expect(result.current.error).toBe('Failed to fetch weather data');
    });
  });
});
