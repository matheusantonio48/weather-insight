import { getWeatherImage } from '../index';

describe('getWeatherImage', () => {
  it('should return the correct image path for clear_day', () => {
    expect(getWeatherImage('clear_day')).toBe('/assets/clear_day.svg');
  });

  it('should return the correct image path for clear_night', () => {
    expect(getWeatherImage('clear_night')).toBe('/assets/clear_night.svg');
  });

  it('should return the correct image path for cloud', () => {
    expect(getWeatherImage('cloud')).toBe('/assets/cloud.svg');
  });

  it('should return the correct image path for cloudly_day', () => {
    expect(getWeatherImage('cloudly_day')).toBe('/assets/cloudly_day.svg');
  });

  it('should return the correct image path for cloudly_night', () => {
    expect(getWeatherImage('cloudly_night')).toBe('/assets/cloudly_night.svg');
  });

  it('should return the correct image path for fog', () => {
    expect(getWeatherImage('fog')).toBe('/assets/fog.svg');
  });

  it('should return the correct image path for hail', () => {
    expect(getWeatherImage('hail')).toBe('/assets/hail.svg');
  });

  it('should return the correct image path for none_day', () => {
    expect(getWeatherImage('none_day')).toBe('/assets/none_day.svg');
  });

  it('should return the correct image path for none_night', () => {
    expect(getWeatherImage('none_night')).toBe('/assets/none_night.svg');
  });

  it('should return the correct image path for rain', () => {
    expect(getWeatherImage('rain')).toBe('/assets/rain.svg');
  });

  it('should return the correct image path for snow', () => {
    expect(getWeatherImage('snow')).toBe('/assets/snow.svg');
  });

  it('should return the correct image path for storm', () => {
    expect(getWeatherImage('storm')).toBe('/assets/storm.svg');
  });

  it('should return the default image path when conditionSlug is undefined', () => {
    expect(getWeatherImage(undefined)).toBe('/assets/cloudly_day.svg');
  });

  it('should return the default image path when conditionSlug is an unknown value', () => {
    expect(getWeatherImage('unknown_value')).toBe('/assets/cloudly_day.svg');
  });
});
