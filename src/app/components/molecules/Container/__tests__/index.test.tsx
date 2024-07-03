import theme from '@/theme/theme';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from '../index';

describe('Container', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it('should render correctly with default styles', () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('min-height', '100vh');
  });
});
