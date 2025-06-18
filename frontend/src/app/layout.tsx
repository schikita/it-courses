import '@mantine/core/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { HeaderTabs } from '@/components/Header/HeaderTabs';
import { ReactNode } from 'react';
import { theme } from '@/mantineTheme';

export const metadata: Metadata = {
  title: 'Codecraft - платформа для изучения IT',
  description: 'Изучай IT вместе с CODECRAFT',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <HeaderTabs />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}