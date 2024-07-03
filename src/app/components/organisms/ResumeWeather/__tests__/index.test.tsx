import { mockWeatherData } from '@/app/mocks/mockWeatherData';
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

  const fullWeatherData = mockWeatherData;

  const mockWeatherContextValue = {
    todayWeather: {
      temp: 25,
      weather: 'Sunny',
      condition_slug: 'sunny',
    },
    toggleForm: mockToggleForm,
    showForm: false,
    fullWeatherData,
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
    };

    renderWithProviders(<ResumeWeather {...props} />);

    expect(screen.getByText('Search for places')).toBeInTheDocument();
    expect(screen.getByTestId('MyLocationIcon')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('Campinas')).toBeInTheDocument();

  
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('°C')).toBeInTheDocument();
  });

  it('should call toggleForm when the "Search for places" button is clicked', () => {
    const props: ResumeWeatherProps = {
      fullWeatherData,
      unitOption: 'C',
      getWeatherFunction: mockGetWeatherFunction,
    };

    renderWithProviders(<ResumeWeather {...props} />);

    fireEvent.click(screen.getByText('Search for places'));
    expect(mockToggleForm).toHaveBeenCalled();
  });
});
