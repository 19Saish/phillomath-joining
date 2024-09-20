/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      gold: '#CCAD00',
      lightgold: '#FFdd1a',
      secondary: '#0C3C54',
      lightblue: '#136086',
      primary: '#105070',
      blue: colors.blue,
      white: colors.white,
      gray: colors.slate,
      sky: colors.sky,
      black: colors.black
    }
  },
  plugins: [],
}

