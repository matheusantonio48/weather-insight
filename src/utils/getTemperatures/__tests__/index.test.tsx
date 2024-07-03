import { getTemperatures } from '../index';

describe('getTemperatures', () => {
  it('should convert temperatures to Fahrenheit when unitOption is F', () => {
    const weather = { temp: 25, min: 10, max: 30 };
    const result = getTemperatures(weather, 'F');

    expect(result).toEqual({
      temp: 77,
      min: 50,
      max: 86,
    });
  });

  it('should return temperatures as is when unitOption is C', () => {
    const weather = { temp: 25, min: 10, max: 30 };
    const result = getTemperatures(weather, 'C');

    expect(result).toEqual({
      temp: 25,
      min: 10,
      max: 30,
    });
  });

  it('should handle missing temp value correctly', () => {
    const weather = { min: 10, max: 30 };
    const result = getTemperatures(weather, 'C');

    expect(result).toEqual({
      temp: null,
      min: 10,
      max: 30,
    });
  });

  it('should handle missing min and max values correctly', () => {
    const weather = { temp: 25 };
    const result = getTemperatures(weather, 'F');

    expect(result).toEqual({
      temp: 77,
      min: null,
      max: null,
    });
  });

  it('should handle all values missing correctly', () => {
    const weather = {};
    const result = getTemperatures(weather, 'C');

    expect(result).toEqual({
      temp: null,
      min: null,
      max: null,
    });
  });
});
