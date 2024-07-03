import { WeatherProvider } from '@/context/weatherProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import { DetailWeatherProps } from '@/types/types';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import DetailWeather from '../index';

describe('DetailWeather', () => {
  const mockSetUnitOption = jest.fn();
  const fullWeatherData = {
    current: {
      temp: 25,
      date: '02/07/2024',
      time: '11:06',
      condition_code: '29',
      description: 'Sunny',
      currently: 'day',
      city: 'New York',
      img_id: '29',
      humidity: 73,
      cloudiness: 20,
      rain: 0,
      wind_speedy: '4.12 km/h',
      wind_direction: 100,
      wind_cardinal: 'E',
      sunrise: '06:49 am',
      sunset: '05:31 pm',
      moon_phase: 'waning_crescent',
      condition_slug: 'clear_day',
      city_name: 'New York',
      timezone: '-04:00',
    },
    forecast: [
      {
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
      },
      {
        date: '2024-07-02',
        weekday: 'Tue',
        max: 28,
        min: 18,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '10 km/h',
        description: 'Rainy',
        condition: 'rain',
      },
    ],
  };

  const props: DetailWeatherProps = {
    fullWeatherData,
    unitOption: 'C',
    setUnitOption: mockSetUnitOption,
  };

  const renderWithProviders = (component: React.ReactElement) => {
    return render(
      <ThemeProvider>
        <WeatherProvider>{component}</WeatherProvider>
      </ThemeProvider>
    );
  };

  it('should render the city name correctly', () => {
    renderWithProviders(<DetailWeather {...props} />);
    expect(screen.getByText("New York, Today's Highlights")).toBeInTheDocument();
  });

  it('should render the forecast cards correctly', () => {
    renderWithProviders(<DetailWeather {...props} />);
    expect(screen.getByText('2024-07-01')).toBeInTheDocument();
    expect(screen.getByText('2024-07-02')).toBeInTheDocument();
  });

  it('should call setUnitOption with "C" when the Celsius button is clicked', () => {
    renderWithProviders(<DetailWeather {...props} />);
    const celsiusButton = screen.getByText('°C');
    fireEvent.click(celsiusButton);
    expect(mockSetUnitOption).toHaveBeenCalledWith('C');
  });

  it('should call setUnitOption with "F" when the Fahrenheit button is clicked', () => {
    renderWithProviders(<DetailWeather {...props} />);
    const fahrenheitButton = screen.getByText('°F');
    fireEvent.click(fahrenheitButton);
    expect(mockSetUnitOption).toHaveBeenCalledWith('F');
  });

  it('should render the highlights cards correctly', () => {
    renderWithProviders(<DetailWeather {...props} />);
    expect(screen.getByText('Humidity')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed')).toBeInTheDocument();
  });
});
