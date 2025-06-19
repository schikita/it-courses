// src/components/Homepage/HeroSection.tsx
'use client';

import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Grid, 
  Badge, 
  Group, 
  Stack,
  Box
} from '@mantine/core';
import { 
  IconBrandPython, 
  IconBrandJavascript, 
  IconBrandReact,
  IconDatabase
} from '@tabler/icons-react';
import Link from 'next/link';

export function HeroSection() {
  const technologies = [
    { icon: IconBrandPython, label: 'Python', color: 'blue' },
    { icon: IconBrandJavascript, label: 'JavaScript', color: 'yellow' },
    { icon: IconBrandReact, label: 'React', color: 'cyan' },
    { icon: IconDatabase, label: 'SQL', color: 'green' }
  ];

  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Декоративные элементы */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />
      
      <Container size="lg" style={{ position: 'relative' }}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title 
                order={1} 
                size="4rem"
                className="hero-title"
                style={{
                  lineHeight: 1.1,
                  background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Лучшие компьютерные курсы от Codecraft
              </Title>
              <Text 
                size="xl" 
                className="elegant-text"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.3rem',
                  maxWidth: '90%'
                }}
              >
                Изучайте программирование, науку о данных и веб-разработку 
                с интерактивными уроками и реальными проектами
              </Text>
              <Group>
                <Button 
                  size="xl" 
                  variant="white" 
                  color="dark"
                  component={Link}
                  href="/signup"
                  className="montserrat-font"
                  style={{
                    fontWeight: 600,
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem'
                  }}
                >
                  Начать бесплатно
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  color="white"
                  component={Link}
                  href="/courses"
                  className="montserrat-font"
                  style={{
                    fontWeight: 500,
                    borderRadius: '12px',
                    borderWidth: '2px',
                    fontSize: '1.1rem'
                  }}
                >
                  Смотреть курсы
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box 
              style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '32px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <Text 
                fw={600} 
                mb="lg"
                className="montserrat-font"
                style={{ fontSize: '1.1rem' }}
              >
                Популярные технологии:
              </Text>
              <Group gap="xs">
                {technologies.map(({ icon: Icon, label, color }) => (
                  <Badge 
                    key={label}
                    leftSection={<Icon size="1rem" />}
                    variant="light"
                    color={color}
                    size="lg"
                    className="montserrat-font"
                    style={{
                      fontWeight: 500,
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    {label}
                  </Badge>
                ))}
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}