import theme from '@/theme/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from '../index';

describe('Button component', () => {
  const renderButton = (props = {}) => {
    return render(
      <ThemeProvider theme={theme}>
        <Button {...props}>Test Button</Button>
      </ThemeProvider>
    );
  };

  it('renders correctly with default props', () => {
    renderButton();
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.interactive};
      color: ${theme.colors.primary};
      font-size: ${theme.typography.variants.body2.fontSize};
    `);
  });

  it('applies isActive styles correctly', () => {
    renderButton({ isActive: true });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.dark};
    `);
  });

  it('applies rounded styles correctly', () => {
    renderButton({ rounded: true });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle('border-radius: 50%;');
  });

  it('applies bold styles correctly', () => {
    renderButton({ bold: true });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle(`font-weight: ${theme.typography.variants.heading3.fontWeight};`);
  });

  it('applies marginRight styles correctly', () => {
    renderButton({ marginRight: true });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle('margin-right: 10px;');
  });

  it('applies searchButton styles correctly', () => {
    renderButton({ searchButton: true });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle('letter-spacing: 0.5px;');
    expect(button).toHaveStyle(`font-family: ${theme.typography.fontFamily.primary.replace(/\s+/g, '')};`);
  });

  it('applies color styles correctly', () => {
    renderButton({ color: 'secondary' });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle(`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    `);
  });

  it('applies size styles correctly', () => {
    renderButton({ size: 'small' });
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveStyle(`
      padding: 0.4rem 0.6rem;
      font-size: ${theme.typography.variants.body1.fontSize};
    `);
  });
});
