import { basename } from 'path'

export default {
  ssr: false,
  target: 'static',
  // Headers of the page
  head: {
    link: [
      // favicon stuff:
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=nectophore' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=nectophore' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=nectophore' },
      { rel: 'manifest', href: '/site.webmanifest?v=nectophore' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=nectophore' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Norwegian software developer, VFX artist, record label manager and mammal" },
      // favicon stuff:
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' },
    ],
    htmlAttrs: {
      lang: 'en-US',
    },
    bodyAttrs: {
      style: 'background-color:#000000',
    },
  },
  // Customize the progress-bar color
  loading: { color: '#ffffff' },
  loadingIndicator: '@/assets/loading.html',
  // Global CSS
  css: [
    '@/assets/fonts/stylesheet.css',
    'normalize.css/normalize.css',
    'aos/dist/aos.css',
  ],
  // Plugins to load before mounting the App
  plugins: [
    { src: '@/plugins/aos.js', ssr: false },
    { src: '@/plugins/vue-lazyload.js', ssr: false },
  ],
  // Nuxt.js modules
  modules: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  generate: {
    fallback: true,
    routes() {
      const fs = require('fs')
      const routes = []
      const fileExt = '.jpg'
      fs.readdirSync('./static/art/items').forEach((filename) => {
        if (filename.endsWith(fileExt)) {
          routes.push({
            route: `/art/items/` + filename.slice(0, -fileExt.length),
          })
        }
      })
      return routes
    },
  },
  // Build configuration
  build: {
    extractCSS: true,
    // You can extend webpack config here
    extend(config, ctx) {
      if (ctx.isClient) config.devtool = 'source-map'
      // svg
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push(
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      )
    },
  },
}
