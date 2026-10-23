/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Kanit', 'sans-serif'] },
      colors: {
        ink: '#140B06',
        cream: '#FFF4E6',
        mango: '#F7A23B',
        tangerine: '#F27B1F',
      },
    },
  },
  plugins: [],
};
