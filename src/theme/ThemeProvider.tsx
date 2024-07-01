'use client';

import React from 'react';
import { ThemeProvider as StyledThemeProvider, useTheme as useThemeStyled } from 'styled-components';
import theme, { Theme } from './theme';

export function useTheme(): Theme {
  return useThemeStyled() as unknown as Theme;
}

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
