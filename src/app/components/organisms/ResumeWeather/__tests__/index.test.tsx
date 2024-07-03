import { useWeather } from '@/context/useWeather';
import ThemeProvider from '@/theme/ThemeProvider';
import { ResumeWeatherProps } from '@/types/types';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ResumeWeather from '../index';

jest.mock('@/context/useWeather');

describe('ResumeWeather Component', () => {
  const mockToggleForm = jest.fn();
  const mockGetWeatherFunction = jest.fn();
  const mockSetError = jest.fn();

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

  const mockWeatherContextValue = {
    todayWeather: {
      tempC: 25,
      tempF: 77,
      weather: 'Sunny',
      icon: 'sunny',
    },
    toggleForm: mockToggleForm,
    showForm: false,
    fullWeatherData, // Certifique-se de incluir fullWeatherData no contexto
  };

  const renderWithProviders = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    (useWeather as jest.Mock).mockReturnValue(mockWeatherContextValue);
  });

  it('should render the ResumeWeather component correctly', () => {
    const props: ResumeWeatherProps = {
      fullWeatherData,
      unitOption: 'C',
      getWeatherFunction: mockGetWeatherFunction,
      setError: mockSetError,
    };

    renderWithProviders(<ResumeWeather {...props} />);

    expect(screen.getByText('Search for places')).toBeInTheDocument();
    expect(screen.getByAltText('location button')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();

    // Verifique a temperatura dividida em vários elementos
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('°C')).toBeInTheDocument();
  });

  it('should call toggleForm when the "Search for places" button is clicked', () => {
    const props: ResumeWeatherProps = {
      fullWeatherData,
      unitOption: 'C',
      getWeatherFunction: mockGetWeatherFunction,
      setError: mockSetError,
    };

    renderWithProviders(<ResumeWeather {...props} />);

    fireEvent.click(screen.getByText('Search for places'));
    expect(mockToggleForm).toHaveBeenCalled();
  });

  it.skip('should display the form when showForm is true', () => {
    (useWeather as jest.Mock).mockReturnValue({ ...mockWeatherContextValue, showForm: true });

    const props: ResumeWeatherProps = {
      fullWeatherData,
      unitOption: 'C',
      getWeatherFunction: mockGetWeatherFunction,
      setError: mockSetError,
    };

    renderWithProviders(<ResumeWeather {...props} />);

    expect(screen.getByPlaceholderText('City or Country')).toBeInTheDocument();
  });
});
