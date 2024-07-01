import ThemeProvider from '@/theme/ThemeProvider';
import '@/theme/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import StyledComponentsRegistry from './lib/registry';
import Home from './page';

export const metadata: Metadata = {
  title: 'Weather Insight',
  description: '',
  icons: [],
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider>
        <html lang="pt-BR">
          <body>
            <StyledComponentsRegistry>
              <Home />
            </StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </>
  );
}
