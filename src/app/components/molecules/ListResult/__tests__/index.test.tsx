import { fireEvent, render, screen } from '@testing-library/react';
import ListResult, { ListResultProps } from '../index';

describe('ListResult', () => {
  const mockSetVisible = jest.fn();
  const mockGetWeatherFunction = jest.fn();
  const previousSearches = ['New York', 'London', 'Tokyo'];

  const props: ListResultProps = {
    setVisible: mockSetVisible,
    previousSearches,
    getWeatherFunction: mockGetWeatherFunction,
  };

  it('should render previous searches correctly', () => {
    render(<ListResult {...props} />);
    previousSearches.forEach((search) => {
      expect(screen.getByText(search)).toBeInTheDocument();
    });
  });

  it('should call getWeatherFunction and setVisible when a list item is clicked', () => {
    render(<ListResult {...props} />);
    const listItem = screen.getByText('New York');
    fireEvent.click(listItem);
    expect(mockGetWeatherFunction).toHaveBeenCalledWith('New York');
    expect(mockSetVisible).toHaveBeenCalled();
  });

  it('should call getWeatherFunction with correct city when different list item is clicked', () => {
    render(<ListResult {...props} />);
    const listItem = screen.getByText('Tokyo');
    fireEvent.click(listItem);
    expect(mockGetWeatherFunction).toHaveBeenCalledWith('Tokyo');
    expect(mockSetVisible).toHaveBeenCalled();
  });
});
