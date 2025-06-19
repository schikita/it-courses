// src/components/Header.tsx
'use client';

import { 
  Group, 
  Button, 
  Container,
  Burger,
  Drawer,
  Stack,
  Box,
  Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

export function AppHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = [
    { href: '/courses', label: 'Курсы' },
    { href: '/paths', label: 'Треки' },
    { href: '/pricing', label: 'Цены' },
    { href: '/about', label: 'О нас' },
  ];

  return (
    <>
      <style jsx>{`
        .logo-text {
          font-family: 'Benzin', system-ui, sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-link {
          font-family: 'Montserrat', system-ui, sans-serif;
          font-weight: 500;
          color: #495057;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #667eea;
          background-color: rgba(102, 126, 234, 0.1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 80%;
        }
        
        .header-button {
          font-family: 'Montserrat', system-ui, sans-serif;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        
        .header-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      <Box
        component="header"
        style={{
          height: '80px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)'
        }}
        px="md"
      >
        <Container size="lg" h="100%">
          <Group justify="space-between" h="100%">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text size="xl" className="logo-text">
                Codecraft
              </Text>
            </Link>

            <Group gap="lg" visibleFrom="md">
              {links.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ))}
            </Group>

            <Group visibleFrom="md" gap="sm">
              <Button 
                variant="subtle" 
                component={Link} 
                href="/login"
                className="header-button"
                style={{
                  color: '#667eea',
                  fontWeight: 500
                }}
              >
                Войти
              </Button>
              <Button 
                component={Link} 
                href="/signup"
                className="header-button"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '0.75rem'
                }}
              >
                Регистрация
              </Button>
            </Group>

            <Burger 
              opened={opened} 
              onClick={toggle} 
              hiddenFrom="md" 
              size="sm"
              color="#667eea"
            />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Text className="logo-text" size="lg">
            IT Academy
          </Text>
        }
        padding="md"
        size="xs"
        hiddenFrom="md"
        styles={{
          title: {
            fontFamily: 'Benzin, system-ui, sans-serif',
            fontWeight: 800
          }
        }}
      >
        <Stack gap="md">
          {links.map((link) => (
            <Button 
              key={link.href}
              variant="subtle" 
              component={Link} 
              href={link.href}
              onClick={close}
              justify="flex-start"
              className="header-button"
              style={{
                fontFamily: 'Montserrat, system-ui, sans-serif',
                fontWeight: 500,
                color: '#495057'
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button 
            variant="outline" 
            component={Link} 
            href="/login" 
            onClick={close}
            className="header-button"
            style={{
              borderColor: '#667eea',
              color: '#667eea',
              borderRadius: '0.75rem'
            }}
          >
            Войти
          </Button>
          <Button 
            component={Link} 
            href="/signup" 
            onClick={close}
            className="header-button"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '0.75rem'
            }}
          >
            Регистрация
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}