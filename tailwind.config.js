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
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '8.5xl': '7rem',
      '9xl': '8rem'
     },
     colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      rose: colors.rose
    },
    extend: {
      backgroundImage: theme => ({
        'imgBackground' : "url('../images/background.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
