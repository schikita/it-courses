// src/components/Homepage/TestimonialsSection.tsx
import { 
  Container, 
  Title, 
  Text, 
  Card, 
  Group, 
  SimpleGrid,
  Avatar
} from '@mantine/core';
import { SimpleRating } from '../UI/SimpleRating';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
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