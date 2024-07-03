import Container from '@/app/components/molecules/Container';
import ThemeProvider from '@/theme/ThemeProvider';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Molecules/Container',
  component: Container,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A flexible container component that adapts its layout based on the screen size.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
    style: {
      control: 'object',
    },
  },
} as Meta;

/**
 * Template for rendering the Container component with ThemeProvider
 * @param {Object} args - Arguments for the Container component
 * @returns {JSX.Element} - The rendered Container component with theme
 */
const Template: StoryFn<typeof Container> = (args) => (
  <Container {...args}>
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Child 1</div>
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Child 2</div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

export const Responsive = Template.bind({});
Responsive.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
Responsive.args = {};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  style: { backgroundColor: 'lightblue', padding: '20px' },
};
CustomStyles.parameters = {
  docs: {
    description: {
      story: 'This story demonstrates the Container component with custom styles applied.',
    },
  },
};

export const WithCustomPadding = Template.bind({});
WithCustomPadding.args = {
  style: { padding: '50px' },
};
WithCustomPadding.parameters = {
  docs: {
    description: {
      story: 'This story demonstrates the Container component with custom padding applied.',
    },
  },
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  style: { backgroundColor: 'lightgreen' },
};
WithBackgroundColor.parameters = {
  docs: {
    description: {
      story: 'This story shows the Container component with a different background color.',
    },
  },
};

export const NestedContainers: StoryFn<typeof Container> = (args) => (
  <Container {...args}>
    <Container style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Nested Child 1</Container>
    <Container style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Nested Child 2</Container>
  </Container>
);
NestedContainers.parameters = {
  docs: {
    description: {
      story: 'This story demonstrates nested Container components.',
    },
  },
};
