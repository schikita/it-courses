// src/components/Homepage/PopularCourses.tsx
'use client';

import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Card, 
  Badge, 
  Group, 
  SimpleGrid
} from '@mantine/core';
import Link from 'next/link';
import { SimpleRating } from '@/components/UI/SimpleRating';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  technologies: string[];
}

export function PopularCourses() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Python для начинающих',
      description: 'Изучите основы программирования на Python с нуля',
      level: 'Начинающий',
      duration: '40 часов',
      students: 12500,
      rating: 4.8,
      price: 'Бесплатно',
      technologies: ['Python', 'Основы программирования']
    },
    {
      id: 2,
      title: 'Full-Stack JavaScript',
      description: 'Полный курс веб-разработки на JavaScript',
      level: 'Средний',
      duration: '80 часов',
      students: 8900,
      rating: 4.9,
      price: '2990 ₽',
      technologies: ['JavaScript', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'Машинное обучение',
      description: 'Введение в ML и анализ данных',
      level: 'Продвинутый',
      duration: '60 часов',
      students: 5600,
      rating: 4.7,
      price: '4990 ₽',
      technologies: ['Python', 'ML', 'TensorFlow']
    }
  ];

  return (
    <Container size="lg" py="xl">
      <Title 
        order={2} 
        ta="center" 
        mb="xl"
        className="section-title"
        size="2.5rem"
        c="dark"
      >
        Популярные курсы
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {courses.map((course) => (
          <Card 
            key={course.id} 
            shadow="lg" 
            padding="lg" 
            radius="xl" 
            withBorder={false}
            style={{ 
              height: '100%',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <Card.Section p="lg" pb="xs">
              <Group justify="space-between" mb="xs">
                <Badge 
                  color="blue" 
                  variant="light"
                  className="montserrat-font"
                  style={{ fontWeight: 500 }}
                >
                  {course.level}
                </Badge>
                <Text 
                  fw={700} 
                  c="green"
                  className="montserrat-font"
                  size="lg"
                >
                  {course.price}
                </Text>
              </Group>
              
              <Title 
                order={4} 
                mb="xs"
                className="card-title"
                size="1.3rem"
              >
                {course.title}
              </Title>
              
              <Text 
                size="sm" 
                c="dimmed" 
                mb="md"
                className="body-text"
              >
                {course.description}
              </Text>

              <Group gap="xs" mb="md">
                {course.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="dot" 
                    size="sm"
                    className="montserrat-font"
                    style={{ fontWeight: 400 }}
                  >
                    {tech}
                  </Badge>
                ))}
              </Group>

              <Group justify="space-between" mb="xs">
                <Group gap={4}>
                  <SimpleRating value={course.rating} readOnly size="sm" />
                  <Text 
                    size="sm" 
                    c="dimmed"
                    className="montserrat-font"
                  >
                    ({course.rating})
                  </Text>
                </Group>
                <Text 
                  size="sm" 
                  c="dimmed"
                  className="montserrat-font"
                >
                  {course.students.toLocaleString()} студентов
                </Text>
              </Group>
              
              <Text 
                size="sm" 
                c="dimmed"
                className="montserrat-font"
              >
                Длительность: {course.duration}
              </Text>
            </Card.Section>
            
            <Card.Section p="lg" pt="xs">
              <Button 
                fullWidth 
                variant="light"
                component={Link}
                href={`/courses/${course.id}`}
                className="montserrat-font"
                style={{
                  fontWeight: 600,
                  borderRadius: '8px'
                }}
              >
                Узнать больше
              </Button>
            </Card.Section>
          </Card>
        ))}
      </SimpleGrid>
      
      <Group justify="center" mt="xl">
        <Button 
          variant="outline" 
          size="lg"
          component={Link}
          href="/courses"
          className="montserrat-font"
          style={{
            fontWeight: 600,
            borderRadius: '12px'
          }}
        >
          Смотреть все курсы
        </Button>
      </Group>
    </Container>
  );
}