import theme from '@/theme/theme';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ProgressBar from '../index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('ProgressBar Component', () => {
  it('renders correctly with default props', () => {
    renderWithTheme(<ProgressBar percentage={50} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  it('renders percentage labels correctly', () => {
    renderWithTheme(<ProgressBar percentage={50} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('animates progress correctly', async () => {
    const { container } = renderWithTheme(<ProgressBar percentage={50} />);
    const animatedProgress = container.querySelector('div[role="progressbar"] div');

    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(animatedProgress).toHaveStyle('width: 50%');
  });
});
