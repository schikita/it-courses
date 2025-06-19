// app/theme.ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Montserrat, system-ui, sans-serif',
  headings: {
    fontFamily: 'Benzin, Montserrat, system-ui, sans-serif',    
    
  },
  
  colors: {
    brand: [
      '#e3f2fd',
      '#bbdefb',
      '#90caf9',
      '#64b5f6',
      '#42a5f5',
      '#2196f3',
      '#1e88e5',
      '#1976d2',
      '#1565c0',
      '#0d47a1',
    ],
    gradient: [
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
      '#000000',
    ],
  },

  primaryColor: 'brand',
  primaryShade: 6,

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },

  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  radius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
  },

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.05), 0 20px 25px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.05), 0 25px 50px rgba(0, 0, 0, 0.15)',
  },

  components: {
    Button: {
      styles: {
        root: {
          fontFamily: 'Montserrat, system-ui, sans-serif',
          fontWeight: 600,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },

    Card: {
      styles: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },

    Title: {
      styles: {
        root: {
          fontFamily: 'Benzin, Montserrat, system-ui, sans-serif',
        },
      },
    },

    Text: {
      styles: {
        root: {
          fontFamily: 'Montserrat, system-ui, sans-serif',
          lineHeight: 1.6,
        },
      },
    },

    Badge: {
      styles: {
        root: {
          fontFamily: 'Montserrat, system-ui, sans-serif',
          fontWeight: 500,
        },
      },
    },

    ThemeIcon: {
      styles: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },

  other: {
    fontFamilyPrimary: 'Montserrat, system-ui, sans-serif',
    fontFamilyHeadings: 'Benzin, Montserrat, system-ui, sans-serif',
    brandGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
});