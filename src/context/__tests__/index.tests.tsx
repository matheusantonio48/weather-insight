import { mockWeatherData } from '@/app/mocks/mockWeatherData';
import { fetchWeatherByCity } from '@/services/weatherService';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useContext } from 'react';
import WeatherContext from '../weatherContext';
import { WeatherProvider } from '../weatherProvider';

jest.mock('@/services/weatherService');

const TestComponent = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    return <div>Error: Context not available</div>;
  }

  return (
    <div>
      <div>City: {context.defaultCity}</div>
      <div>Unit: {context.unitOption}</div>
      <div>Show Form: {context.showForm ? 'true' : 'false'}</div>
      <div>Today Weather: {context.todayWeather?.temp}</div>
      <button onClick={() => context.setDefaultCity('New City')}>Set Default City</button>
      <button onClick={() => context.setUnitOption('F')}>Set Unit to F</button>
      <button onClick={() => context.toggleForm()}>Toggle Form</button>
      <button onClick={() => context.getWeatherByNameOrIp('Paris')}>Get Weather By Name</button>
    </div>
  );
};

describe('WeatherProvider', () => {
  beforeEach(() => {
    (fetchWeatherByCity as jest.Mock).mockResolvedValue({
      results: {
        ...mockWeatherData,
      },
    });
  });

  it('should provide default values', () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );

    expect(screen.getByText('City: Your Default City')).toBeInTheDocument();
    expect(screen.getByText('Unit: C')).toBeInTheDocument();
    expect(screen.getByText('Show Form: false')).toBeInTheDocument();
  });

  it('should update the default city', () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );

    fireEvent.click(screen.getByText('Set Default City'));
    expect(screen.getByText('City: New City')).toBeInTheDocument();
  });

  it('should update the unit option', () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );

    fireEvent.click(screen.getByText('Set Unit to F'));
    expect(screen.getByText('Unit: F')).toBeInTheDocument();
  });

  it('should toggle the form visibility', () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );

    fireEvent.click(screen.getByText('Toggle Form'));
    expect(screen.getByText('Show Form: true')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle Form'));
    expect(screen.getByText('Show Form: false')).toBeInTheDocument();
  });

  it('should fetch and display weather data', async () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    );

    fireEvent.click(screen.getByText('Get Weather By Name'));

    await waitFor(() => {
      expect(screen.getByText(`Today Weather: ${mockWeatherData.temp}`)).toBeInTheDocument();
    });
  });
});
