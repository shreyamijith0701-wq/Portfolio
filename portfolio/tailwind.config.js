/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f6f4',
          100: '#eeece8',
          200: '#dddad3',
          300: '#c5c0b5',
          400: '#aaa391',
          500: '#958c78',
          600: '#887e6b',
          700: '#71685a',
          800: '#5d564c',
          900: '#4c4740',
          950: '#1a1814',
        },
        accent: {
          DEFAULT: '#c8a96e',
          light: '#e2c99a',
          dark: '#a68a4a',
        },
        surface: {
          light: '#faf9f7',
          dark: '#111010',
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.08em',
        wider: '0.16em',
        widest: '0.3em',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
