// app/page.tsx
'use client';

import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Grid, 
  Card, 
  Badge, 
  Group, 
  Stack,
  Box,
  SimpleGrid,
  ThemeIcon,
  Avatar,
  Flex
} from '@mantine/core';
import { 
  IconCode, 
  IconBrandPython, 
  IconBrandJavascript, 
  IconBrandReact,
  IconDatabase,
  IconBrandGit,
  IconTrendingUp,
  IconUsers,
  IconCertificate,
  IconStar
} from '@tabler/icons-react';
import Link from 'next/link';

// Простой компонент Rating
function SimpleRating({ value, readOnly = false, size = 'sm' }: { value: number; readOnly?: boolean; size?: string }) {
  return (
    <Flex gap={2}>
      {[1, 2, 3, 4, 5].map((star) => (
        <IconStar
          key={star}
          size={size === 'sm' ? 14 : 16}
          style={{
            fill: star <= value ? '#ffd43b' : 'transparent',
            color: star <= value ? '#ffd43b' : '#ced4da'
          }}
        />
      ))}
    </Flex>
  );
}

// Компонент Hero секции
function HeroSection() {
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
                Лучшие компьютерные курсы в СНГ
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
                {[
                  { icon: IconBrandPython, label: 'Python', color: 'blue' },
                  { icon: IconBrandJavascript, label: 'JavaScript', color: 'yellow' },
                  { icon: IconBrandReact, label: 'React', color: 'cyan' },
                  { icon: IconDatabase, label: 'SQL', color: 'green' }
                ].map(({ icon: Icon, label, color }) => (
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

// Компонент статистики
function StatsSection() {
  const stats = [
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

// Компонент популярных курсов
function PopularCourses() {
  const courses = [
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

// Компонент преимуществ
function FeaturesSection() {
  const features = [
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

// Компонент отзывов
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Frontend Developer',
      company: 'Яндекс',
      avatar: '/avatars/anna.jpg',
      text: 'Благодаря курсам получила работу мечты в Яндексе. Материал структурирован отлично!'
    },
    {
      name: 'Максим Иванов',
      role: 'Data Scientist',
      company: 'Сбер',
      avatar: '/avatars/maxim.jpg',
      text: 'Курс по машинному обучению дал мне все необходимые знания для карьерного роста.'
    },
    {
      name: 'Елена Смирнова',
      role: 'Full-Stack Developer',
      company: 'Тинькофф',
      avatar: '/avatars/elena.jpg',
      text: 'Интерактивные задания и менторская поддержка - это то, что выделяет платформу.'
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
        Отзывы студентов
      </Title>
      
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.name} 
            padding="xl" 
            radius="xl" 
            withBorder={false}
            style={{
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <Group mb="md">
              <Avatar 
                src={testimonial.avatar} 
                alt={testimonial.name}
                size="lg"
                style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              />
              <div>
                <Text className="testimonial-name" size="lg">
                  {testimonial.name}
                </Text>
                <Text 
                  size="sm" 
                  c="dimmed"
                  className="testimonial-role"
                >
                  {testimonial.role} в {testimonial.company}
                </Text>
              </div>
            </Group>
            
            <Text 
              size="md" 
              className="testimonial-text"
              mb="md"
            >
              "{testimonial.text}"
            </Text>
            
            <Group>
              <SimpleRating value={5} readOnly size="sm" />
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

// Основной компонент страницы
export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <FeaturesSection />
      <TestimonialsSection />
      
      {/* CTA секция */}
      <Box 
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
        py="xl"
      >
        {/* Декоративные элементы */}
        <Box
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            filter: 'blur(20px)'
          }}
        />
        
        <Container size="lg" ta="center" style={{ position: 'relative' }}>
          <Title 
            order={2} 
            mb="md"
            className="benzin-font"
            size="2.5rem"
            style={{ letterSpacing: '-0.02em' }}
          >
            Готовы начать свой путь в IT?
          </Title>
          <Text 
            size="xl" 
            mb="xl"
            className="montserrat-font"
            style={{
              fontWeight: 300,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}
          >
            Присоединяйтесь к тысячам студентов, которые уже изменили свою карьеру
          </Text>
          <Group justify="center">
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
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                fontSize: '1.1rem'
              }}
            >
              Начать обучение
            </Button>
          </Group>
        </Container>
      </Box>
    </main>
  );
}