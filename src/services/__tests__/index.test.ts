import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import fetchMock from 'jest-fetch-mock';
import { fetchWeatherByCity } from '../weatherService';

describe('fetchWeatherByCity', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  fetchMock.enableMocks();

  it('should fetch weather data for a valid city', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockWeatherData));

    const data = await fetchWeatherByCity('Test City');
    expect(data).toEqual(mockWeatherData);
    expect(fetch).toHaveBeenCalledWith('/api/weather?city=Test%20City');
  });

  it('should throw an error if the response is not ok', async () => {
    const mockErrorData = {
      message: 'City not found',
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockErrorData), { status: 404 });

    await expect(fetchWeatherByCity('Invalid City')).rejects.toThrow('City not found');
    expect(fetch).toHaveBeenCalledWith('/api/weather?city=Invalid%20City');
  });

  it('should throw a default error message if the response is not ok and no message is provided', async () => {
    fetchMock.mockResponseOnce('{}', { status: 500 });

    await expect(fetchWeatherByCity('Test City')).rejects.toThrow('Failed to fetch weather data');
    expect(fetch).toHaveBeenCalledWith('/api/weather?city=Test%20City');
  });

  it('should throw an error if fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    await expect(fetchWeatherByCity('Test City')).rejects.toThrow('Failed to fetch');
    expect(fetch).toHaveBeenCalledWith('/api/weather?city=Test%20City');
  });
});
