'use client';

import { useState } from 'react';
import { Stack, Button, Group, Title, Box } from '@mantine/core';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import classes from './NavigationTabs/NavigationTabs.module.css';

interface Props {
  toggle: () => void;
  opened: boolean;
}

const tabs = [
  { label: 'Каталог', submenu: 'catalog' },
  { label: 'Ресурсы' },
  { label: 'Сообщество', submenu: 'community' },
  { label: 'Цены' },
  { label: 'Live Learning' },
  { label: 'Для бизнеса' },
];

export function MobileNavigationMenu({ toggle, opened }: Props) {
  const [submenu, setSubmenu] = useState<string | null>(null);

  const handleBack = () => setSubmenu(null);

  return (
    <div
      className={`${classes.mobileMenu} ${
        opened ? classes.menuVisible : classes.menuHidden
      }`}
    >
      <Stack gap="md" className={classes.mobileBody}>
        {submenu === null ? (
          tabs.map((tab) => (
            <Button
              key={tab.label}
              variant="subtle"
              fullWidth
              size="lg"
              onClick={() => {
                if (tab.submenu) {
                  setSubmenu(tab.submenu);
                } else {
                  toggle();
                }
              }}
              styles={{
                root: {
                  padding: '1rem',
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  borderRadius: 0,
                  margin: 0,
                },
              }}
            >
              {tab.label}
            </Button>
          ))
        ) : (
          <>
            <Button variant="subtle" onClick={handleBack}>
              ← Назад
            </Button>
            <Title order={3}>
              {submenu === 'catalog' ? 'Каталог' : 'Сообщество'}
            </Title>
            <Button variant="subtle" fullWidth style={{ justifyContent: 'flex-start' }}>
              Пример подменю
            </Button>
            <Button variant="subtle" fullWidth style={{ justifyContent: 'flex-start' }}>
              Ещё пункт
            </Button>
          </>
        )}
      </Stack>

      <Stack gap="xs" className={classes.mobileFooter}>
        <Button variant="filled" color="yellow">
          Войти
        </Button>
        <UserMenu />
      </Stack>
    </div>
  );
}
