import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display:   ['var(--font-display)',   'Bebas Neue',       'sans-serif'],
        condensed: ['var(--font-condensed)', 'Barlow Condensed', 'sans-serif'],
        body:      ['var(--font-body)',      'Barlow',           'sans-serif'],
      },
      colors: {
        red: {
          600: '#CC0000',
          700: '#AA0000',
        },
      },
      animation: {
        'fade-in':  'fadeIn 0.35s ease both',
        'fade-up':  'fadeUp 0.6s ease both',
        'ticker':   'ticker 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        ticker: {
          from: { transform: 'translateX(0)'    },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
