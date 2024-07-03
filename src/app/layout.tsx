import ThemeProvider from '@/theme/ThemeProvider';
import '@/theme/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: 'Weather Insight',
  description: '',
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR">
        <ThemeProvider>
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </ThemeProvider>
      </html>
    </>
  );
}
