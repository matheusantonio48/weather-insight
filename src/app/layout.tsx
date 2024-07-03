'use client';

import metadata from '@/app/metadata';
import { WeatherProvider } from '@/context/weatherProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import '@/theme/globals.css';
import { Metadata } from 'next';
import React from 'react';
import StyledComponentsRegistry from './lib/registry';

function getTitle(metadata: Metadata): string {
  if (typeof metadata.title === 'string') {
    return metadata.title;
  }
  if (metadata.title && 'default' in metadata.title) {
    return metadata.title.default;
  }
  return 'Default Title';
}

function getDescription(metadata: Metadata): string {
  return metadata.description ?? 'Default description';
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>{getTitle(metadata)}</title>
        <meta name="description" content={getDescription(metadata)} />
      </head>
      <body>
        <ThemeProvider>
          <WeatherProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
