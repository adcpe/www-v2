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
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      titillium: ['Titillium Web', 'sans-serif'],
    },
    extend: {
      colors: {
        bggray: '#f8f8f8',
        links: '#f48498',
        name: '#ff8600',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
