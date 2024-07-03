import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { WeatherProvider } from '@/context/weatherProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import { DetailWeatherProps } from '@/types/types';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import DetailWeather from '../index';

describe('DetailWeather', () => {
  const mockSetUnitOption = jest.fn();
  const fullWeatherData = mockWeatherData;

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
    expect(screen.getByText("Campinas, Today's Highlights")).toBeInTheDocument();
  });

  it('should render the forecast cards correctly', () => {
    renderWithProviders(<DetailWeather {...props} />);
    expect(screen.getByText('Ter. 02/07')).toBeInTheDocument();
    expect(screen.getByText('Qua. 03/07')).toBeInTheDocument();
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
    expect(screen.getByText('Wind Status')).toBeInTheDocument();
    expect(screen.getByText('Cloudiness')).toBeInTheDocument();
  });
});
