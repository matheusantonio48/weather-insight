import { useWeather } from '@/context/useWeather';
import { DailyWeatherCardProps } from '@/types/types';
import { render, screen } from '@testing-library/react';
import DailyWeatherCard from '../index';

jest.mock('@/context/useWeather');

const mockUseWeather = useWeather as jest.Mock;

describe('DailyWeatherCard', () => {
  beforeEach(() => {
    mockUseWeather.mockReturnValue({ unitOption: 'C' });
  });

  const forecast: DailyWeatherCardProps['forecast'] = {
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
  };

  it('should render the date correctly', () => {
    render(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    expect(screen.getByText('2024-07-01')).toBeInTheDocument();
  });

  it('should render the correct temperatures', () => {
    render(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    expect(screen.getByText('30°C')).toBeInTheDocument();
    expect(screen.getByText('20°C')).toBeInTheDocument();
  });

  it('should render the weather condition image', () => {
    render(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    const img = screen.getByAltText('Sunny');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'path_to_icons/clear_day.png');
  });

  it('should convert temperatures to Fahrenheit when unitOption is F', () => {
    mockUseWeather.mockReturnValueOnce({ unitOption: 'F' });
    render(<DailyWeatherCard forecast={forecast} unitOption={'C'} />);
    expect(screen.getByText('86°F')).toBeInTheDocument();
    expect(screen.getByText('68°F')).toBeInTheDocument();
  });
});
