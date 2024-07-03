import DailyWeatherCard from '@/app/components/molecules/DailyWeatherCard';
import ThemeProvider from '@/theme/ThemeProvider';
import { DailyWeatherCardProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Molecules/DailyWeatherCard',
  component: DailyWeatherCard,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    forecast: {
      control: 'object',
      description: 'The forecast data for the day',
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
  },
  parameters: {
    docs: {
      description: {
        component:
          'A flexible and reusable component that displays daily weather information based on the provided forecast data and temperature unit option.',
      },
    },
  },
} as Meta<DailyWeatherCardProps>;

const Template: StoryFn<DailyWeatherCardProps> = (args) => <DailyWeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  forecast: {
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
  unitOption: 'C',
};

export const RainyDay = Template.bind({});
RainyDay.args = {
  forecast: {
    date: '2024-07-02',
    weekday: 'Tue',
    max: 22,
    min: 15,
    cloudiness: 80,
    rain: 10,
    rain_probability: 60,
    wind_speedy: '10 km/h',
    description: 'Rainy',
    condition: 'rain',
  },
  unitOption: 'C',
};
RainyDay.parameters = {
  docs: {
    description: {
      story: 'Displays the DailyWeatherCard for a rainy day with temperatures in Celsius.',
    },
  },
};

export const SnowyDay = Template.bind({});
SnowyDay.args = {
  forecast: {
    date: '2024-12-25',
    weekday: 'Wed',
    max: 0,
    min: -5,
    cloudiness: 100,
    rain: 0,
    rain_probability: 0,
    wind_speedy: '15 km/h',
    description: 'Snowy',
    condition: 'snow',
  },
  unitOption: 'C',
};
SnowyDay.parameters = {
  docs: {
    description: {
      story: 'Displays the DailyWeatherCard for a snowy day with temperatures in Celsius.',
    },
  },
};

export const CustomForecast = Template.bind({});
CustomForecast.args = {
  forecast: {
    date: '2024-07-03',
    weekday: 'Thu',
    max: 25,
    min: 18,
    cloudiness: 50,
    rain: 0,
    rain_probability: 20,
    wind_speedy: '7 km/h',
    description: 'Cloudy',
    condition: 'cloud',
  },
  unitOption: 'F',
};
CustomForecast.parameters = {
  docs: {
    description: {
      story: 'Displays the DailyWeatherCard with custom forecast data and temperatures in Fahrenheit.',
    },
  },
};
