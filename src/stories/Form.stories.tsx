import Form, { FormProps } from '@/app/components/organisms/Form';
import { WeatherProvider } from '@/context/weatherProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Organisms/Form',
  component: Form,
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
    isVisible: {
      control: 'boolean',
      description: 'Visibility of the form container',
      table: {
        type: { summary: 'boolean' },
      },
    },
    setVisible: { action: 'setVisible' },
    getWeatherFunction: {
      control: 'object',
      description: 'Function to get weather data',
      table: {
        type: { summary: 'object' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Form component to search for weather data by city or country.',
      },
    },
  },
} as Meta;

const Template: StoryFn<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  getWeatherFunction: {
    byName: (city: string) => {
      console.warn(`Fetching weather data for ${city}`);
    },
  },
};
