const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        darkBlue: '#023E73',
        brightBlue: '#0597F2',
        mutedBlue: '#0378A6',
        seaGreen: '#038CBC',
        brightGreen: '#93A603'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}