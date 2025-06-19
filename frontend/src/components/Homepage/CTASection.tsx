// src/components/Homepage/CTASection.tsx
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Box
} from '@mantine/core';
import Link from 'next/link';

export function CTASection() {
  return (
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
  );
}