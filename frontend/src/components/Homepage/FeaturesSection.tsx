// src/components/Homepage/FeaturesSection.tsx
import { 
  Container, 
  Title, 
  Text, 
  Card, 
  Box,
  SimpleGrid,
  ThemeIcon
} from '@mantine/core';
import { 
  IconCode, 
  IconBrandGit,
  IconUsers,
  IconCertificate
} from '@tabler/icons-react';

interface Feature {
  icon: typeof IconCode;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: IconCode,
      title: 'Интерактивное обучение',
      description: 'Пишите код прямо в браузере с мгновенной проверкой'
    },
    {
      icon: IconUsers,
      title: 'Менторская поддержка',
      description: 'Получайте помощь от опытных разработчиков'
    },
    {
      icon: IconCertificate,
      title: 'Сертификаты',
      description: 'Подтвердите свои знания официальными документами'
    },
    {
      icon: IconBrandGit,
      title: 'Реальные проекты',
      description: 'Создавайте портфолио с практическими заданиями'
    }
  ];

  return (
    <Box 
      style={{ 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }} 
      py="xl"
    >
      <Container size="lg">
        <Title 
          order={2} 
          ta="center" 
          mb="xl"
          className="section-title"
          size="2.5rem"
          c="dark"
        >
          Почему выбирают нас
        </Title>
        
        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              padding="lg" 
              radius="xl" 
              ta="center"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <ThemeIcon 
                size="xl" 
                radius="md" 
                variant="light" 
                color="blue"
                mb="md"
                mx="auto"
                style={{
                  boxShadow: '0 4px 20px rgba(34, 139, 230, 0.15)'
                }}
              >
                <feature.icon size="1.5rem" />
              </ThemeIcon>
              <Title 
                order={4} 
                mb="xs"
                className="feature-title"
                size="1.2rem"
              >
                {feature.title}
              </Title>
              <Text 
                size="sm" 
                c="dimmed"
                className="feature-description"
              >
                {feature.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}