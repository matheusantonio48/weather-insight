import HightLigthsCard from '@/app/components/molecules/HightlightsCard';
import ThemeProvider from '@/theme/ThemeProvider';
import { HightLigthsCardProps } from '@/types/types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Molecules/HightLigthsCard',
  component: HightLigthsCard,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    hightLight: {
      control: 'object',
      description: 'The data for the highlight card',
      table: {
        type: { summary: 'object' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A card component that displays various weather highlights, including wind direction and progress bar.',
      },
    },
  },
} as Meta;

const Template: StoryFn<HightLigthsCardProps> = (args) => <HightLigthsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  hightLight: {
    title: 'Wind Speed',
    data: 10,
    unit: 'km/h',
    showWind: true,
    windDir: 180,
    windDirText: 'S',
    showBar: false,
  },
};

export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  hightLight: {
    title: 'Humidity',
    data: 65,
    unit: '%',
    showWind: false,
    showBar: true,
  },
};
