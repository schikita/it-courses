'use client';

import { Tabs } from '@mantine/core';
import { useComputedColorScheme } from '@mantine/core';
import classes from './NavigationTabs.module.css';

const tabs = ['Home', 'Orders', 'Education', 'Community', 'Forums', 'Support', 'Account', 'Helpdesk'];

export function NavigationTabs() {
  const colorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Tabs
  defaultValue="Home"
  variant="outline"
  visibleFrom="sm"
  className={classes.tabsRoot}
  data-theme={colorScheme} // ← light / dark
>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab
  key={tab}
  value={tab}
  className={classes.tab}
  style={{ color: 'var(--tab-color)' }} // 💡 критично!
>
  {tab}
</Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
