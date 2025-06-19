// src/components/Homepage/StatsSection.tsx
import { 
  Container, 
  Title, 
  Text, 
  Box,
  SimpleGrid,
  ThemeIcon
} from '@mantine/core';
import { 
  IconCode, 
  IconTrendingUp,
  IconUsers,
  IconCertificate
} from '@tabler/icons-react';

interface Stat {
  value: string;
  label: string;
  icon: typeof IconCode;
}

export function StatsSection() {
  const stats: Stat[] = [
    { value: '50K+', label: 'Студентов', icon: IconUsers },
    { value: '200+', label: 'Курсов', icon: IconCode },
    { value: '95%', label: 'Успешность', icon: IconTrendingUp },
    { value: '15K+', label: 'Сертификатов', icon: IconCertificate }
  ];

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
        {stats.map((stat) => (
          <Box key={stat.label} ta="center">
            <ThemeIcon 
              size="xl" 
              radius="md" 
              variant="light" 
              color="blue"
              style={{
                boxShadow: '0 4px 20px rgba(34, 139, 230, 0.15)'
              }}
            >
              <stat.icon size="1.5rem" />
            </ThemeIcon>
            <Title 
              order={2} 
              mt="md" 
              c="blue"
              className="stat-value"
              size="2.5rem"
            >
              {stat.value}
            </Title>
            <Text c="dimmed" className="stat-label" size="lg">
              {stat.label}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}