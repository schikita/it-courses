'use client';

import { Text, Image, Group, useComputedColorScheme } from '@mantine/core';
import Link from 'next/link';

export function Logo() {
  const colorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const isDark = colorScheme === 'dark';

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Group align="center" gap="sm" wrap="nowrap">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <Text
          fw={900}
          size="xl"
          suppressHydrationWarning
          style={{
            fontFamily: 'Mont, sans-serif',
            color: isDark ? '#e0e0e0' : '#1a1a1a',
          }}
        >
          CODECRAFT
        </Text>
      </Group>
    </Link>
  );
}
