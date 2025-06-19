// app/layout.tsx
import "@mantine/core/styles.css";
import "./globals.css"; // Импорт наших глобальных стилей
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { AppHeader } from "../components/Header";
import { AppFooter } from "../components/Footer/Footer";
import { theme } from "./theme";

export const metadata = {
  title: "IT Обучение - Лучшие компьютерные курсы в СНГ",
  description:
    "Изучайте программирование, науку о данных и веб-разработку с интерактивными уроками и реальными проектами",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppHeader />
          <main>{children}</main>
          <AppFooter />
        </MantineProvider>
      </body>
    </html>
  );
}