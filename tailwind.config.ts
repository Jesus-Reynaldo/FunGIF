import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F97316',
          hover: '#EA6C0A',
        },
      },
    },
  },
  plugins: [],
}

export default config
