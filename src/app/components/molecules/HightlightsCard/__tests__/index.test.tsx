import { HightLigthsCardProps } from '@/types/types';
import { render, screen } from '@testing-library/react';
import HightLigthsCard from '../index';

describe('HightLigthsCard', () => {
  const baseProps: HightLigthsCardProps = {
    hightLight: {
      data: 50,
      showBar: true,
      title: 'Humidity',
      showWind: false,
      unit: '%',
    },
  };

  it('should render the title correctly', () => {
    render(<HightLigthsCard {...baseProps} />);
    expect(screen.getByText('Humidity')).toBeInTheDocument();
  });

  it('should render the unit correctly', () => {
    render(<HightLigthsCard {...baseProps} />);
    expect(screen.getByText('%')).toBeInTheDocument();
  });

  it('should render the progress bar when showBar is true', () => {
    render(<HightLigthsCard {...baseProps} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should not render the progress bar when showBar is false', () => {
    render(<HightLigthsCard {...{ ...baseProps, hightLight: { ...baseProps.hightLight, showBar: false } }} />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  it('should render the wind direction when showWind is true', () => {
    const windProps: HightLigthsCardProps = {
      hightLight: {
        data: 5,
        showBar: false,
        title: 'Wind Speed',
        showWind: true,
        unit: 'km/h',
        windDir: 100,
        windDirText: 'E',
      },
    };

    render(<HightLigthsCard {...windProps} />);
    expect(screen.getByText('E')).toBeInTheDocument();
    expect(screen.getByAltText('wind')).toBeInTheDocument();
  });

  it('should not render the wind direction when showWind is false', () => {
    render(<HightLigthsCard {...baseProps} />);
    expect(screen.queryByText('E')).not.toBeInTheDocument();
    expect(screen.queryByAltText('wind')).not.toBeInTheDocument();
  });
});
