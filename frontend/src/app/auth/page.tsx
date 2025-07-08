'use client';

import { Container, Title, Text, Stack } from '@mantine/core';
import { AuthenticationForm } from '@/components/Loginpage/Authentication';

export default function AuthPage() {
  return (
    <Container size="xs" mt="xl" pb="xl">
      <Stack gap="lg" align="center">
        <Title order={2}>Вход / Регистрация</Title>
        <Text c="dimmed" ta="center">
          Добро пожаловать! Пожалуйста, войдите в свою учётную запись или зарегистрируйтесь.
        </Text>
        <AuthenticationForm />
      </Stack>
    </Container>
  );
}
