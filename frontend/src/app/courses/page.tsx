'use client';

import { Container, Title, Text, Stack, Image } from '@mantine/core';
import { useEffect, useState } from 'react';



export default function CoursesPage() {
  return (
    <Container size="md" mt="xl">
      <Stack gap="md">
        <Title order={2}>Курсы</Title>
        <Text size="lg" c="dimmed">
          Добро пожаловать на страницу курсов. Здесь будут размещены все доступные образовательные материалы.
        </Text>
      
      </Stack>
    </Container>
  );
}
