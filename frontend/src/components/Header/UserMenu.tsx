'use client';

import {
  Button,
  Menu,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  useMantineTheme,
} from '@mantine/core';
import {
  IconChevronDown,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconPlayerPause,
  IconTrash,
} from '@tabler/icons-react';
import { useState } from 'react';
import cx from 'clsx';
import classes from './HeaderTabs.module.css';
import { LogIn } from 'lucide-react';
import { useComputedColorScheme } from '@mantine/core';
import { useHasMounted } from '@/hooks/useHasMounted'; // 👈

const isAuthenticated = false;

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export function UserMenu() {
  const mounted = useHasMounted(); // ✅ обязательная проверка
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const isDark = colorScheme === 'dark';
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  if (!mounted) return null; // 💥 Ключевая защита от mismatch

  if (!isAuthenticated) {
    return (
      <Button
        variant="outline"
        size="md"
        radius="md"
        color={isDark ? 'gray' : 'blue'}
        rightSection={<LogIn size={18} />}
        onClick={() => console.log('Открыть вход')}
      >
        ВОЙТИ
      </Button>
    );
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group gap={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}>
          Liked posts
        </Menu.Item>
        <Menu.Item leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}>
          Saved posts
        </Menu.Item>
        <Menu.Item leftSection={<IconMessage size={16} color={theme.colors.blue[6]} stroke={1.5} />}>
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
          Account settings
        </Menu.Item>
        <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
          Change account
        </Menu.Item>
        <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
