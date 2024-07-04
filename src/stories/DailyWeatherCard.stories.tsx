import DailyWeatherCard from '@/app/components/molecules/DailyWeatherCard';
import { WeatherProvider } from '@/context/weatherProvider';
import theme from '@/theme/theme';
import { DailyWeatherCardProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/Molecules/DailyWeatherCard',
  component: DailyWeatherCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <WeatherProvider>
          <Story />
        </WeatherProvider>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    forecast: {
      control: 'object',
      defaultValue: {
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
      },
    },
  },
} as Meta;

const Template: StoryFn<DailyWeatherCardProps> = (args) => <DailyWeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  forecast: {
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
  },
};

export const CloudyDay = Template.bind({});
CloudyDay.args = {
  forecast: {
    date: '03/07',
    weekday: 'Wed',
    max: 25,
    min: 18,
    description: 'Cloudy',
    condition: 'cloud',
    cloudiness: 50,
    rain: 0,
    rain_probability: 10,
    wind_speedy: '5 km/h',
  },
};

export const RainyDay = Template.bind({});
RainyDay.args = {
  forecast: {
    date: '04/07',
    weekday: 'Thu',
    max: 22,
    min: 16,
    description: 'Rainy',
    condition: 'rain',
    cloudiness: 90,
    rain: 10,
    rain_probability: 80,
    wind_speedy: '15 km/h',
  },
};
