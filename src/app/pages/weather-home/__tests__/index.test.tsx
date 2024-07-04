import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { useWeather } from '@/context/useWeather';
import theme from '@/theme/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { WeatherHome } from '../index';

jest.mock('@/context/useWeather');

describe('WeatherHome Component', () => {
  const mockUseWeather = useWeather as jest.MockedFunction<typeof useWeather>;

  beforeEach(() => {
    mockUseWeather.mockReturnValue({
      fullWeatherData: mockWeatherData,
      unitOption: 'C',
      getWeatherByNameOrIp: jest.fn(),
      setUnitOption: jest.fn(),
      defaultCity: 'Campinas',
      setDefaultCity: jest.fn(),
      previousSearches: [],
      addPreviousSearch: jest.fn(),
      todayWeather: {
        ...mockWeatherData,
        weather: mockWeatherData.description,
      },
      toggleForm: jest.fn(),
      showForm: false,
    });
  });

  const renderWithProviders = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it('should render ResumeWeather and DetailWeather components when fullWeatherData is available', () => {
    renderWithProviders(<WeatherHome />);

    expect(screen.getByText("Campinas, Today's Highlights")).toBeInTheDocument();
    expect(screen.getByText('Wind Status')).toBeInTheDocument();
  });

  it('should not render ResumeWeather and DetailWeather components when fullWeatherData is not available', () => {
    mockUseWeather.mockReturnValue({
      fullWeatherData: null,
      unitOption: 'C',
      getWeatherByNameOrIp: jest.fn(),
      setUnitOption: jest.fn(),
      defaultCity: 'Campinas',
      setDefaultCity: jest.fn(),
      previousSearches: [],
      addPreviousSearch: jest.fn(),
      todayWeather: null,
      toggleForm: jest.fn(),
      showForm: false,
    });

    renderWithProviders(<WeatherHome />);

    expect(screen.queryByText("Campinas, Today's Highlights")).not.toBeInTheDocument();
    expect(screen.queryByText('Wind Status')).not.toBeInTheDocument();
  });
});
