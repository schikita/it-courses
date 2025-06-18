import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { HeaderTabs } from '@/components/Header/Header';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'IT Courses Platform',
  description: 'Learn IT online with structured courses',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light" withCssVariables>
          <HeaderTabs />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
