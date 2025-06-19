// src/components/Footer/Footer.tsx
import { 
  Container, 
  Group, 
  Text, 
  Stack,
  SimpleGrid,
  Anchor,
  Box
} from '@mantine/core';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer 
      style={{ 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Main Footer Content */}
      <Container size="lg" py="xl">
        {/* Logo and Description */}
        <Box mb="xl">
          <Text size="xl" className="logo-footer" mb="md">
            IT Academy
          </Text>
          <Text 
            className="footer-text" 
            size="md"
            style={{ 
              maxWidth: '400px',
              lineHeight: 1.6
            }}
          >
            Ведущая платформа для изучения программирования и IT-технологий 
            в СНГ. Более 50,000 студентов уже изменили свою карьеру с нами.
          </Text>
        </Box>
        
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          <Stack gap="md">
            <Text size="lg" className="footer-title">
              Курсы
            </Text>
            <Stack gap="xs">
              <Anchor 
                component={Link} 
                href="/courses/programming"
                className="footer-link"
              >
                Программирование
              </Anchor>
              <Anchor 
                component={Link} 
                href="/courses/data-science"
                className="footer-link"
              >
                Data Science
              </Anchor>
              <Anchor 
                component={Link} 
                href="/courses/web-development"
                className="footer-link"
              >
                Веб-разработка
              </Anchor>
              <Anchor 
                component={Link} 
                href="/courses/mobile"
                className="footer-link"
              >
                Мобильная разработка
              </Anchor>
            </Stack>
          </Stack>

          <Stack gap="md">
            <Text size="lg" className="footer-title">
              Треки обучения
            </Text>
            <Stack gap="xs">
              <Anchor 
                component={Link} 
                href="/paths/frontend"
                className="footer-link"
              >
                Frontend разработчик
              </Anchor>
              <Anchor 
                component={Link} 
                href="/paths/backend"
                className="footer-link"
              >
                Backend разработчик
              </Anchor>
              <Anchor 
                component={Link} 
                href="/paths/fullstack"
                className="footer-link"
              >
                Full-Stack разработчик
              </Anchor>
              <Anchor 
                component={Link} 
                href="/paths/devops"
                className="footer-link"
              >
                DevOps инженер
              </Anchor>
            </Stack>
          </Stack>

          <Stack gap="md">
            <Text size="lg" className="footer-title">
              Поддержка
            </Text>
            <Stack gap="xs">
              <Anchor 
                component={Link} 
                href="/help"
                className="footer-link"
              >
                Центр помощи
              </Anchor>
              <Anchor 
                component={Link} 
                href="/contact"
                className="footer-link"
              >
                Свяжитесь с нами
              </Anchor>
              <Anchor 
                component={Link} 
                href="/faq"
                className="footer-link"
              >
                Часто задаваемые вопросы
              </Anchor>
              <Anchor 
                component={Link} 
                href="/community"
                className="footer-link"
              >
                Сообщество
              </Anchor>
            </Stack>
          </Stack>

          <Stack gap="md">
            <Text size="lg" className="footer-title">
              Компания
            </Text>
            <Stack gap="xs">
              <Anchor 
                component={Link} 
                href="/about"
                className="footer-link"
              >
                О нас
              </Anchor>
              <Anchor 
                component={Link} 
                href="/careers"
                className="footer-link"
              >
                Карьера
              </Anchor>
              <Anchor 
                component={Link} 
                href="/blog"
                className="footer-link"
              >
                Блог
              </Anchor>
              <Anchor 
                component={Link} 
                href="/press"
                className="footer-link"
              >
                Пресс-центр
              </Anchor>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Bottom Section */}
      <Box 
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(248, 249, 250, 0.5)'
        }}
      >
        <Container size="lg" py="md">
          <Group justify="space-between" wrap="wrap" gap="md">
            <Text className="copyright-text" size="sm">
              © 2025 IT Academy. Все права защищены.
            </Text>
            <Group gap="lg" wrap="wrap">
              <Anchor 
                href="/privacy" 
                className="footer-link"
                style={{ fontSize: '0.875rem' }}
              >
                Политика конфиденциальности
              </Anchor>
              <Anchor 
                href="/terms" 
                className="footer-link"
                style={{ fontSize: '0.875rem' }}
              >
                Условия использования
              </Anchor>
              <Anchor 
                href="/cookies" 
                className="footer-link"
                style={{ fontSize: '0.875rem' }}
              >
                Политика cookies
              </Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
    </footer>
  );
}