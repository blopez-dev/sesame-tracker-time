/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'green': '#5EBEA3',
      'grey-extra-light': '#F4F4F4',
      'grey-light': 'rgba(181, 181, 181, .2)',
      'grey-light-1': '#B5B5B5',
      'grey-dark': '#3F3F3F',
      'salmon': '#FF9984',
      'white': '#FFFFFF',
      'hover-blue': '#D8F2EC'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}
