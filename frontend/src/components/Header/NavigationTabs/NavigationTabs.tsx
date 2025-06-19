"use client";

import { Tabs } from "@mantine/core";
import { useComputedColorScheme } from "@mantine/core";
import classes from "./NavigationTabs.module.css";
import { useHasMounted } from "@/hooks/useHasMounted";

const tabs = [
  "Главная",
  "Курсы",
  "Образование",
  "Сообщество",
  "Блог",
  "Поддержка",
  "Контакты",
];

export function NavigationTabs() {
  const mounted = useHasMounted();
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  if (!mounted) return null;

  return (
    <Tabs 
      defaultValue="Главная"
      variant="outline"
      visibleFrom="sm"
      className={classes.tabsRoot}
      data-theme={colorScheme}       
    >
      <Tabs.List style={{ marginTop: '1.3rem' }}>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab}
            value={tab}
            className={classes.tab}
            style={{ color: "var(--tab-color)" }} 
          >
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
