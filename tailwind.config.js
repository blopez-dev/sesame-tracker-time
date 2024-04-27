/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#5ebea3',
      gray: {
        DEFAULT: '#4A4A4A',
        light: '#D5D5D5'
      }
    },
    fontFamily: {
      display: ['Roboto Slab', 'serif']
    },
    extend: {}
  },
  plugins: []
}

