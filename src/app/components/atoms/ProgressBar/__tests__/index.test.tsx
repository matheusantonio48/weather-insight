import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import ProgressBar from '../index';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    render(<ProgressBar percentage={50} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('should render the correct width based on percentage', () => {
    const { container } = render(<ProgressBar percentage={50} />);
    const progressElement = container.querySelector('[role="progressbar"]');

    expect(progressElement).toHaveStyleRule('width', '100%');
    expect(progressElement).toHaveStyleRule('width', '50%', { modifier: '::after' });
  });

  it('should have transition effect on width change', () => {
    const { container } = render(<ProgressBar percentage={50} />);
    const progressElement = container.querySelector('[role="progressbar"]');

    expect(progressElement).toHaveStyleRule('transition', 'width 1s ease', { modifier: '::after' });
  });

  it('should display the percentage correctly', () => {
    render(<ProgressBar percentage={75} />);

    const progressElement = screen.getByRole('progressbar');
    expect(progressElement).toHaveStyleRule('width', '75%', { modifier: '::after' });
  });
});
