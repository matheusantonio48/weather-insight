import ProgressBar, { ProgressBarProps } from '@/app/components/atoms/ProgressBar';
import ThemeProvider from '@/theme/ThemeProvider';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    percentage: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Percentage value to display in the progress bar',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A progress bar component that visually represents a percentage value.',
      },
    },
  },
} as Meta<ProgressBarProps>;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
};
