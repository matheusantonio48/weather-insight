import DetailWeather from '@/app/components/organisms/DetailWeather';
import { mockWeatherData } from '@/app/mocks/mockWeatherData';
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
      description: 'The full weather data including current weather and forecast',
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
        component: 'Component that displays detailed weather information including current weather, forecast, and highlights.',
      },
    },
  },
} as Meta;

const Template: StoryFn<DetailWeatherProps> = (args) => <DetailWeather {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullWeatherData: mockWeatherData,
  unitOption: 'C',
};
