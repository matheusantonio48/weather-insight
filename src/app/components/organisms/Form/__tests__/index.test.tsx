import { useWeather } from '@/context/useWeather';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../index';

jest.mock('@/context/useWeather');

describe('Form Component', () => {
  const mockSetVisible = jest.fn();
  const mockGetWeatherFunction = {
    byName: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    (useWeather as jest.Mock).mockReturnValue({
      previousSearches: [],
      addPreviousSearch: jest.fn(),
    });

    render(<Form isVisible={true} setVisible={mockSetVisible} getWeatherFunction={mockGetWeatherFunction} />);

    expect(screen.getByPlaceholderText('City or Country')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('should display error if input is empty and form is submitted', () => {
    (useWeather as jest.Mock).mockReturnValue({
      previousSearches: [],
      addPreviousSearch: jest.fn(),
    });

    render(<Form isVisible={true} setVisible={mockSetVisible} getWeatherFunction={mockGetWeatherFunction} />);

    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText('Fill out the field, please.')).toBeInTheDocument();
  });

  it('should call getWeatherFunction.byName and addPreviousSearch with valid input', () => {
    const mockAddPreviousSearch = jest.fn();
    (useWeather as jest.Mock).mockReturnValue({
      previousSearches: [],
      addPreviousSearch: mockAddPreviousSearch,
    });

    render(<Form isVisible={true} setVisible={mockSetVisible} getWeatherFunction={mockGetWeatherFunction} />);

    fireEvent.change(screen.getByPlaceholderText('City or Country'), { target: { value: 'New York' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockGetWeatherFunction.byName).toHaveBeenCalledWith('New York');
    expect(mockAddPreviousSearch).toHaveBeenCalledWith('New York');
    expect(mockSetVisible).toHaveBeenCalled();
  });

  it('should display previous searches correctly', () => {
    const mockPreviousSearches = ['New York', 'London'];
    (useWeather as jest.Mock).mockReturnValue({
      previousSearches: mockPreviousSearches,
      addPreviousSearch: jest.fn(),
    });

    render(<Form isVisible={true} setVisible={mockSetVisible} getWeatherFunction={mockGetWeatherFunction} />);

    mockPreviousSearches.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });
});
