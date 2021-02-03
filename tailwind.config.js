const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bggray: '#f8f8f8',
        links: '#f48498',
        name: '#ff8600',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        titillium: ['Titillium Web', 'sans-serif'],
        ...defaultTheme.fontFamily,
      },
      stroke: ['hover', 'focus'],
      fill: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
