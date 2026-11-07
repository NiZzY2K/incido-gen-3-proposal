/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050C1B',
          900: '#071126',
          800: '#0D1B3B',
          700: '#132652',
          600: '#1C356E',
        },
        electric: {
          500: '#0866FF',
          400: '#3B82F6',
          300: '#60A5FA',
        },
        slate: {
          light: '#F5F8FF',
          muted: '#B4C2DE',
          dim: '#7E90B4',
        }
      },
      fontFamily: {
        sans: ['"Satoshi"', '"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'radial-electric': 'radial-gradient(circle at 50% 0%, rgba(8, 102, 255, 0.18) 0%, rgba(7, 17, 38, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(180, 194, 222, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(180, 194, 222, 0.06) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

