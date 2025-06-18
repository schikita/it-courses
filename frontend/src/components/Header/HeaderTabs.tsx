'use client';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderTabs.module.css';
import { Logo } from './Logo/Logo';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { NavigationTabs } from './NavigationTabs/NavigationTabs';
import { MobileNavigationMenu } from './MobileNavigationMenu';

export function HeaderTabs() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <Logo />
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            <ThemeToggle />
            <UserMenu />            
          </Group>

        </Group>
      </Container>

      <Container size="md">
       {opened ? (
  <MobileNavigationMenu toggle={toggle} />
) : (
  <NavigationTabs />
)}
      </Container>
    </div>
  );
}
