require('dotenv').config()

export default {
  env: {
    SANITY_ID: process.env.SANITY_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  target: 'static',
  head: {
    title: 'Andrés Del Carpio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  styleResources: {
    scss: ['./assets/styles/*.scss'],
  },
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/style-resources'],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
