'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Logo } from './Logo/Logo';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { NavigationTabs } from './NavigationTabs/NavigationTabs';
import { MobileNavigationMenu } from './MobileNavigationMenu';
import classes from './HeaderTabs.module.css';

export function HeaderTabs() {
  const [mounted, setMounted] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width > 770 && opened) {
      close();
    }
  }, [width, opened, close]);

  if (!mounted) return null;

  const isMobile = width <= 770;

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} fluid>
        <Box p={15}>
          <Group justify="space-between" align="center">
            <Logo />
            <Group align="center">
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                className={classes.burger}
              />
              <ThemeToggle />
              <div className={classes.userMenu}>
                <UserMenu />
              </div>
            </Group>
          </Group>

          {!isMobile && (
            <Box mt="md" style={{ display: 'flex', justifyContent: 'center' }}>
              <NavigationTabs />
            </Box>
          )}
        </Box>
      </Container>

      {isMobile && (
        <MobileNavigationMenu toggle={toggle} opened={opened} />
      )}
    </div>
  );
}
