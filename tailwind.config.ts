import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const shadcnUIColors = {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))'
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))'
  }
};

const config = {
  darkMode: ['class'],
  content: ['./src/{app,components}/**/*.tsx'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        primary: 'var(--font-jetbrainsMono)'
      },
      colors: {
        ...shadcnUIColors,
        primary: '#1c1c22',
        accent: {
          // DEFAULT: '#7851A9',
          // hover: '#6D469C'

          DEFAULT: '#00ff99',
          hover: '#00e187'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addUtilities }: any) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      });
    })
  ]
} satisfies Config;

export default config;
