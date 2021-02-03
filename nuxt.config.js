require('dotenv').config()

export default {
  privateRuntimeConfig: {
    sanity: {
      projectId: process.env.SANITY_ID,
      token: process.env.SANITY_TOKEN,
    },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  styleResources: {
    scss: ['./assets/styles/*.scss'],
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
  ],
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
