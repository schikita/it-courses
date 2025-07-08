'use client';

import {
  Anchor,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Skeleton,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import GoogleButton from '@/components/Loginpage/Buttons/GoogleButton';
import TelegramButton from '@/components/Loginpage/Buttons/TelegramButton';
import { ReusableHeaderButton } from '@/components/Button/button_1'; // ✅ импорт кастомной кнопки

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Неверный формат email'),
      password: (val) =>
        val.length <= 6 ? 'Пароль должен содержать минимум 6 символов' : null,
    },
  });

  return (
    <Paper radius="md" p="lg" withBorder {...props} style={{ width: 420 }}>
      {loading ? (
        <Stack>
          <Skeleton height={24} width="80%" />
          <Group grow mb="md" mt="md">
            <Skeleton height={40} radius="xl" />
            <Skeleton height={40} radius="xl" />
          </Group>
          <Skeleton height={16} width="60%" />
          <Divider my="lg" />
          <Skeleton height={38} radius="md" />
          <Skeleton height={38} radius="md" />
          <Group justify="space-between" mt="xl">
            <Skeleton height={16} width={150} />
            <Skeleton height={36} width={100} radius="xl" />
          </Group>
        </Stack>
      ) : (
        <>
          <Text size="lg" fw={500}>
            Добро пожаловать в Mantine,{' '}
            {type === 'login' ? 'войдите через' : 'зарегистрируйтесь с помощью'}
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TelegramButton radius="xl">Telegram</TelegramButton>
          </Group>

          <Divider label="Или продолжите с email" labelPosition="center" my="lg" />

          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              {type === 'register' && (
                <TextInput
                  label="Имя"
                  placeholder="Ваше имя"
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue('name', event.currentTarget.value)
                  }
                  radius="md"
                />
              )}

              <TextInput
                required
                label="Email"
                placeholder="example@example.com"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.currentTarget.value)
                }
                error={form.errors.email && 'Неверный формат email'}
                radius="md"
              />

              <PasswordInput
                required
                label="Пароль"
                placeholder="Ваш пароль"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue('password', event.currentTarget.value)
                }
                error={form.errors.password && 'Пароль должен содержать минимум 6 символов'}
                radius="md"
              />
            </Stack>

            <Group justify="space-between" mt="xl">
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === 'register'
                  ? 'Уже есть аккаунт? Войти'
                  : 'Нет аккаунта? Зарегистрироваться'}
              </Anchor>

              {/* ✅ Кастомная кнопка */}
              <ReusableHeaderButton
                href="#"
                onClick={() => form.onSubmit(() => {})()}
              >
                {type === 'register' ? 'Зарегистрироваться' : 'Войти'}
              </ReusableHeaderButton>
            </Group>
          </form>
        </>
      )}
    </Paper>
  );
}
