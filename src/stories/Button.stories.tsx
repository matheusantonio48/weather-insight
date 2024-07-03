import Button from '@/app/components/atoms/Button';
import theme from '@/theme/theme';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/Atoms/Container',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component that supports various styles and behaviors through props.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the button.',
      defaultValue: 'Default Button',
    },
    isSelected: {
      control: 'boolean',
      description: 'Indicates if the button is in an active state.',
      defaultValue: false,
    },
    rounded: {
      control: 'boolean',
      description: 'Applies rounded corners to the button.',
      defaultValue: false,
    },
    bold: {
      control: 'boolean',
      description: 'Makes the button text bold.',
      defaultValue: false,
    },
    marginRight: {
      control: 'boolean',
      description: 'Adds right margin to the button.',
      defaultValue: false,
    },
    searchButton: {
      control: 'boolean',
      description: 'Applies styles specific to search buttons.',
      defaultValue: false,
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'accent', 'dark'],
      },
      description: 'Sets the color theme of the button.',
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Sets the size of the button.',
      defaultValue: 'medium',
    },
  },
} as Meta;

interface ButtonStoryProps {
  children: string;
  isSelected?: boolean;
  rounded?: boolean;
  bold?: boolean;
  marginRight?: boolean;
  searchButton?: boolean;
  color?: 'primary' | 'secondary' | 'accent' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

const Template: StoryFn<ButtonStoryProps> = (args: ButtonStoryProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const SearchButton = Template.bind({});
SearchButton.args = {
  children: 'Search Button',
  searchButton: true,
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  children: 'Rounded Button',
  rounded: true,
};

export const TextBoldButton = Template.bind({});
TextBoldButton.args = {
  children: 'Text Bold Button',
  bold: true,
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  children: 'Active Button',
  isSelected: true,
};

export const MarginRightButton = Template.bind({});
MarginRightButton.args = {
  children: 'Margin Right Button',
  marginRight: true,
};

export const PrimaryColorButton = Template.bind({});
PrimaryColorButton.args = {
  children: 'Primary Color Button',
  color: 'primary',
};

export const SecondaryColorButton = Template.bind({});
SecondaryColorButton.args = {
  children: 'Secondary Color Button',
  color: 'secondary',
};

export const AccentColorButton = Template.bind({});
AccentColorButton.args = {
  children: 'Accent Color Button',
  color: 'accent',
};

export const DarkColorButton = Template.bind({});
DarkColorButton.args = {
  children: 'Dark Color Button',
  color: 'dark',
};

export const SmallSizeButton = Template.bind({});
SmallSizeButton.args = {
  children: 'Small Button',
  size: 'small',
};

export const MediumSizeButton = Template.bind({});
MediumSizeButton.args = {
  children: 'Medium Button',
  size: 'medium',
};

export const LargeSizeButton = Template.bind({});
LargeSizeButton.args = {
  children: 'Large Button',
  size: 'large',
};
