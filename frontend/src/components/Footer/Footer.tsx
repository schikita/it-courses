'use client';

import { Container, Text } from '@mantine/core';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #ddd', padding: '1rem 0', marginTop: 'auto' }}>
      <Container>
        <Text >
          © {new Date().getFullYear()} IT Courses. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
