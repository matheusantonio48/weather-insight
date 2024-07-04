import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { TodayWeather } from '@/types/types';
import { transformToTodayWeather } from '../index';

describe('transformToTodayWeather', () => {
  it('should transform FullWeatherData to TodayWeather correctly', () => {
    const fullWeatherData = mockWeatherData;

    const expectedTodayWeather: TodayWeather = {
      temp: 23,
      weather: 'Tempo limpo',
      condition_slug: 'clear_night',
    };

    const result = transformToTodayWeather(fullWeatherData);

    expect(result).toEqual(expectedTodayWeather);
  });
});
