'use client';
import { Button, Stack } from '@mantine/core';

const tabs = [
  'Home',
  'Orders',
  'Education',
  'Community',
  'Forums',
  'Support',
  'Account',
  'Helpdesk',
];

export function MobileNavigationMenu({ toggle }: { toggle: () => void }) {
  return (
    <Stack p="md">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant="subtle"
          fullWidth
          size="md"
          onClick={() => {
            toggle();
            console.log(`Перейти к ${tab}`);
          }}
        >
          {tab}
        </Button>
      ))}
    </Stack>
  );
}
