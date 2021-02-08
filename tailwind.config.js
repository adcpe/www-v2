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
    fontSize: {
      sm: '.875rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '2.5rem',
      '4xl': '2.75rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
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
