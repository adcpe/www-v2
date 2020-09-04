require('dotenv').config()

export default {
  env: {
    SANITY_ID: process.env.SANITY_ID,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  mode: 'universal',
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
  css: ['@/assets/css/main.scss'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/bulma', 'nuxt-webfontloader'],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  webfontloader: {
    google: {
      families: ['Roboto', 'Roboto Slab', 'IBM Plex Mono'],
    },
  },
}
