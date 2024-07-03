import ResumeWeather from '@/app/components/organisms/ResumeWeather';
import { WeatherProvider } from '@/context/weatherProvider'; // Importe o WeatherProvider
import ThemeProvider from '@/theme/ThemeProvider';
import { ResumeWeatherProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Organisms/ResumeWeather',
  component: ResumeWeather,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <WeatherProvider>
          <Story />
        </WeatherProvider>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    fullWeatherData: {
      control: 'object',
      description: "The full weather data including today's weather and location name",
      table: {
        type: { summary: 'object' },
      },
    },
    unitOption: {
      control: 'radio',
      options: ['C', 'F'],
      description: 'Temperature unit option (Celsius or Fahrenheit)',
      table: {
        type: { summary: 'C | F' },
      },
    },
    getWeatherFunction: { action: 'getWeatherFunction' },
    setError: { action: 'setError' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Component that displays a summary of the current weather with options to search for other locations.',
      },
    },
  },
} as Meta<ResumeWeatherProps>;

const Template: StoryFn<ResumeWeatherProps> = (args) => <ResumeWeather {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullWeatherData: {
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
        date: '02/07',
        weekday: 'Tue',
        max: 30,
        min: 20,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '2.77 km/h',
        description: 'Sunny',
        condition: 'clear_day',
      },
      {
        date: '03/07',
        weekday: 'Wed',
        max: 28,
        min: 18,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '5.31 km/h',
        description: 'Sunny',
        condition: 'clear_day',
      },
    ],
  },
  unitOption: 'C',
  getWeatherFunction: (city: string) => {
    console.warn(`Fetching weather data for ${city}`);
  },
  setError: (error: boolean) => {
    console.warn(`Error: ${error}`);
  },
};
