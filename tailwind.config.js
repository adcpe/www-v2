/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        '-apple-system',
        '"Segoe UI"',
        '"Helvetica Neue"',
        '"Noto Sans"',
        'sans-serif',
      ],
      serif: ['Roboto Slab', 'Georgia', 'Cambria', 'serif'],
      mono: [
        'IBM Plex Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        'monospace',
      ],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
    typography: {
      default: {
        code: false,
        'code::before': false,
        'code::after': false,
        pre: false,
        'pre code': false,
        'pre code::before': false,
        'pre code::after': false,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
