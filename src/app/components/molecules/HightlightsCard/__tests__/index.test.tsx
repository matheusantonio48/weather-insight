import { useAnimatedValue } from '@/hooks/useAnimatedValue';
import theme from '@/theme/theme';
import { render, screen, waitFor } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HightLigthsCard from '../index';

jest.mock('@/hooks/useAnimatedValue', () => ({
  useAnimatedValue: jest.fn(),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('HightLigthsCard Component', () => {
  const hightLight = {
    title: 'Wind Status',
    unit: 'km/h',
    value: 10,
    windDir: 45,
    windDirText: 'NE',
    windSpeed: '10 km/h',
  };

  beforeEach(() => {
    (useAnimatedValue as jest.Mock).mockReturnValue(10);
  });

  it('renders correctly with given data', () => {
    renderWithTheme(<HightLigthsCard hightLight={hightLight} />);
    expect(screen.getByText('Wind Status')).toBeInTheDocument();
    expect(screen.getByText('10km/h')).toBeInTheDocument();
    expect(screen.getByAltText('wind')).toBeInTheDocument();
    expect(screen.getByText('NE')).toBeInTheDocument();
  });

  it('renders the wind speed correctly', () => {
    renderWithTheme(<HightLigthsCard hightLight={hightLight} />);
    expect(screen.getByText('10 km/h')).toBeInTheDocument();
  });

  it('renders progress bar with correct percentage', async () => {
    renderWithTheme(<HightLigthsCard hightLight={{ ...hightLight, windSpeed: undefined }} />);
    const progressBar = screen.getByRole('progressbar').firstChild;

    await waitFor(
      () => {
        expect(progressBar).toHaveStyle(`width: 10%`);
      },
      { timeout: 1200 }
    );
  });

  it('renders without wind direction text', () => {
    renderWithTheme(<HightLigthsCard hightLight={{ ...hightLight, windDirText: undefined }} />);
    expect(screen.queryByText('NE')).not.toBeInTheDocument();
  });

  it('animates the value correctly', () => {
    (useAnimatedValue as jest.Mock).mockReturnValue(50);
    renderWithTheme(<HightLigthsCard hightLight={hightLight} />);
    expect(screen.getByText('50km/h')).toBeInTheDocument();
  });
});
