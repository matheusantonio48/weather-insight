import ProgressBar, { ProgressBarProps } from '@/app/components/atoms/ProgressBar';
import theme from '@/theme/theme';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    percentage: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      defaultValue: 50,
    },
  },
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
};

export const ZeroPercent = Template.bind({});
ZeroPercent.args = {
  percentage: 0,
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  percentage: 50,
};

export const HundredPercent = Template.bind({});
HundredPercent.args = {
  percentage: 100,
};
