import { basename } from 'path'

export default {
  mode: 'spa',
  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    htmlAttrs: {
      lang: 'en-US',
    },
    bodyAttrs: {
      style: 'background-color:#000000',
    },
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },
  // Global CSS
  css: [
    '@/assets/fonts/jost*/stylesheet.css',
    '@/assets/fonts/nunito-300/stylesheet.css',
    'normalize.css/normalize.css',
  ],
  // Plugins to load before mounting the App
  plugins: [
  ],
  // Nuxt.js dev-modules
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  // Nuxt.js modules
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-145975820-1',
    }],
  ],
  // Build configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {
      // svg
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push(
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          options: {
            svgo: {
              plugins: [
                {
                  prefixIds: { // make sure IDs are unique
                    prefix: (node, { path }) => basename(path, '.svg'),
                    delim: '-',
                  },
                },
                { cleanupIDs: false }, // prevent IDs from being removed
              ],
            },
          },
        }
      )
    },
  },
}
