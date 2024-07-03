import MoonPhaseCard from '@/app/components/molecules/MoonPhasesCard';
import theme from '@/theme/theme';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/Molecules/MoonPhaseCard',
  component: MoonPhaseCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    phase: {
      control: 'text',
      description: 'The phase of the moon',
      defaultValue: 'waning_crescent',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta;

const Template: StoryFn<{ phase: string }> = (args) => <MoonPhaseCard {...args} />;

export const WaningCrescent = Template.bind({});
WaningCrescent.args = {
  phase: 'waning_crescent',
};

export const FullMoon = Template.bind({});
FullMoon.args = {
  phase: 'full',
};

export const FirstQuarter = Template.bind({});
FirstQuarter.args = {
  phase: 'first_quarter',
};

export const NewMoon = Template.bind({});
NewMoon.args = {
  phase: 'new',
};
