import { withUt } from "uploadthing/tw"; // Import the withUt function
import type { Config } from 'tailwindcss'

const config: Config = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',  // Include the content specified in withUt
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Public Sans',
        secondary: 'Marcellus',
        tertiary: 'Marcellus SC'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        primaryColor: {
          DEFAULT: '#FF6100',
          50: '#FFF3EB',
          100: '#FFE2CC',
          200: '#FFC299',
          300: '#FFA166',
          400: '#FF8133',
          500: '#FF6100',
          600: '#DB5200',
          700: '#B34300',
          800: '#8A3400',
          900: '#612500'
        },
        secondaryColor: {
          DEFAULT: '#172243',
          50: '#F2F4F9',
          100: '#E1E6F1',
          200: '#C0CAE0',
          300: '#8E9CBF',
          400: '#5D6E9C',
          500: '#3A4B7A',
          600: '#28375F',
          700: '#1D2F61',
          800: '#172243',
          900: '#0F1730',
          950: '#080D1C'
        },
        tertiaryColor: '#F9FAFB',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(23 34 67 / 0.04), 0 8px 24px -12px rgb(23 34 67 / 0.12)',
        card: '0 1px 2px 0 rgb(23 34 67 / 0.05), 0 12px 32px -16px rgb(23 34 67 / 0.18)',
        lift: '0 8px 16px -8px rgb(23 34 67 / 0.16), 0 24px 48px -20px rgb(23 34 67 / 0.24)',
        glow: '0 8px 24px -8px rgb(255 97 0 / 0.45)',
        header: '0 1px 0 0 rgb(23 34 67 / 0.06), 0 8px 24px -16px rgb(23 34 67 / 0.24)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'ken-burns': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' }
        },
        'pulse-ring': {
          '0%': { opacity: '0.7', transform: 'scale(0.9)' },
          '70%': { opacity: '0', transform: 'scale(1.6)' },
          '100%': { opacity: '0', transform: 'scale(1.6)' }
        },
        'scroll-cue': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.7s ease-out both',
        marquee: 'marquee 40s linear infinite',
        'ken-burns': 'ken-burns 9s ease-out forwards',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
});

export default config;
