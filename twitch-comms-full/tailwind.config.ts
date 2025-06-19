
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#494D5F',
        accent1: '#A0D2EB',
        accent2: '#E5EAF5',
        accent3: '#D0B0F4',
        accent4: '#8458B3',
      },
    },
  },
  plugins: [],
}
export default config
