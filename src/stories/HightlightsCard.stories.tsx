import HightLigthsCard from '@/app/components/molecules/HightlightsCard';
import theme from '@/theme/theme';
import { HightLigthsCardProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/Molecules/HightLigthsCard',
  component: HightLigthsCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    hightLight: {
      control: 'object',
      defaultValue: {
        title: 'Wind Status',
        unit: 'km/h',
        value: 10,
        windDir: 45,
        windDirText: 'NE',
        windSpeed: '10 km/h',
      },
    },
  },
} as Meta<HightLigthsCardProps>;

const Template: StoryFn<HightLigthsCardProps> = (args) => <HightLigthsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  hightLight: {
    title: 'Wind Status',
    unit: 'km/h',
    windDir: 45,
    windDirText: 'NE',
    windSpeed: '10 km/h',
  },
};

export const Humidity = Template.bind({});
Humidity.args = {
  hightLight: {
    title: 'Humidity',
    unit: '%',
    value: 80,
  },
};

export const Cloudiness = Template.bind({});
Cloudiness.args = {
  hightLight: {
    title: 'Cloudiness',
    unit: '%',
    value: 85,
  },
};
