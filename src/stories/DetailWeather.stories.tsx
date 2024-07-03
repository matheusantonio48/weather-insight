import DetailWeather from '@/app/components/organisms/DetailWeather';
import { WeatherProvider } from '@/context/weatherProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import { DetailWeatherProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Organisms/DetailWeather',
  component: DetailWeather,
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
      description: 'The full weather data including highlights and forecasts',
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
    setUnitOption: { action: 'setUnitOption' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays detailed weather information including daily forecasts and highlights.',
      },
    },
  },
} as Meta<DetailWeatherProps>;

const Template: StoryFn<DetailWeatherProps> = (args) => <DetailWeather {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullWeatherData: {
    current: {
      temp: 19,
      date: '02/07/2024',
      time: '19:04',
      condition_code: '27',
      description: 'Tempo limpo',
      currently: 'noite',
      city: 'Itapecerica da Serra, SP',
      img_id: '27n',
      humidity: 95,
      cloudiness: 0,
      rain: 0,
      wind_speedy: '1.2 km/h',
      wind_direction: 161,
      wind_cardinal: 'SE',
      sunrise: '06:50 am',
      sunset: '05:32 pm',
      moon_phase: 'waning_crescent',
      condition_slug: 'clear_night',
      city_name: 'Itapecerica da Serra',
      timezone: '-03:00',
    },
    forecast: [
      {
        date: '02/07',
        weekday: 'Ter',
        max: 24,
        min: 11,
        cloudiness: 1,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '2.17 km/h',
        description: 'Tempo limpo',
        condition: 'clear_day',
      },
      {
        date: '03/07',
        weekday: 'Qua',
        max: 26,
        min: 14,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '4.71 km/h',
        description: 'Tempo limpo',
        condition: 'clear_day',
      },
      {
        date: '04/07',
        weekday: 'Qui',
        max: 27,
        min: 15,
        cloudiness: 47,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '3.68 km/h',
        description: 'Parcialmente nublado',
        condition: 'cloud',
      },
      {
        date: '05/07',
        weekday: 'Sex',
        max: 28,
        min: 16,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '2.59 km/h',
        description: 'Tempo limpo',
        condition: 'clear_day',
      },
      {
        date: '06/07',
        weekday: 'Sáb',
        max: 22,
        min: 13,
        cloudiness: 1,
        rain: 0,
        rain_probability: 0,
        wind_speedy: '4.71 km/h',
        description: 'Tempo limpo',
        condition: 'clear_day',
      },
    ],
  },
  unitOption: 'C',
  setUnitOption: (unit) => {
    console.warn('Set unit option:', unit);
  },
};
