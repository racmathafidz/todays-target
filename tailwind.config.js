const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      handwriting: ['Allura'],
      title: ['Lato'],
      desc: ['Open Sans']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.6rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.63rem',
      '5xl': '3rem',
      '5.5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '8.5xl': '7rem',
      '9xl': '8rem'
     },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      green: colors.green,
      lime: colors.lime,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      rose: colors.rose
    },
    extend: {
      spacing: {
        '22': '5.5rem',
        '42': '10.5rem',
        '120': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
