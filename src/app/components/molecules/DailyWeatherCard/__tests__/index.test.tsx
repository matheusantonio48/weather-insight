import { useWeather } from '@/context/useWeather';
import theme from '@/theme/theme';
import { getWeatherImage } from '@/utils/getWeatherImage';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import DailyWeatherCard from '../index';

jest.mock('@/context/useWeather', () => ({
  useWeather: jest.fn(),
}));

jest.mock('@/utils/getWeatherImage', () => ({
  getWeatherImage: jest.fn(),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('DailyWeatherCard Component', () => {
  const forecast = {
    date: '02/07',
    weekday: 'Tue',
    max: 30,
    min: 20,
    description: 'Sunny',
    condition: 'clear_day',
    cloudiness: 0,
    rain: 0,
    rain_probability: 0,
    wind_speedy: '10 km/h',
  };

  beforeEach(() => {
    (useWeather as jest.Mock).mockReturnValue({ unitOption: 'C' });
    (getWeatherImage as jest.Mock).mockReturnValue('/path/to/clear_day.png');
  });

  it('renders correctly with forecast data', () => {
    renderWithTheme(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    expect(screen.getByText('Tue. 02/07')).toBeInTheDocument();
    expect(screen.getByAltText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('30°C')).toBeInTheDocument();
    expect(screen.getByText('20°C')).toBeInTheDocument();
  });

  it('renders the correct weather image', () => {
    renderWithTheme(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    const image = screen.getByAltText('Sunny');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/path/to/clear_day.png');
  });

  it('renders temperatures in Fahrenheit when unitOption is F', () => {
    (useWeather as jest.Mock).mockReturnValue({ unitOption: 'F' });
    renderWithTheme(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    expect(screen.getByText('86°F')).toBeInTheDocument();
    expect(screen.getByText('68°F')).toBeInTheDocument();
  });
});
