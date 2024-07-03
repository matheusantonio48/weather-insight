import theme from '@/theme/theme';
import { getMoonPhasesImages } from '@/utils/getMoonPhases';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import MoonPhaseCard from '../index';

jest.mock('@/utils/getMoonPhases', () => ({
  getMoonPhasesImages: jest.fn(),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('MoonPhaseCard Component', () => {
  const phase = 'waning_crescent';
  const moonPhaseImagePath = '/assets/moonPhases/waning_crescent.png';

  beforeEach(() => {
    (getMoonPhasesImages as jest.Mock).mockReturnValue(moonPhaseImagePath);
  });

  it('renders correctly with given phase', () => {
    renderWithTheme(<MoonPhaseCard phase={phase} />);
    expect(screen.getByText('Moon Phases')).toBeInTheDocument();
    const image = screen.getByAltText('moon phase');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', moonPhaseImagePath);
  });

  it('calls getMoonPhasesImages with the correct phase', () => {
    renderWithTheme(<MoonPhaseCard phase={phase} />);
    expect(getMoonPhasesImages).toHaveBeenCalledWith(phase);
  });
});
