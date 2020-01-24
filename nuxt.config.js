import { basename } from 'path'

export default {
  mode: 'spa',
  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    link: [
      // favicon stuff:
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=siphonophore' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=siphonophore' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=siphonophore' },
      { rel: 'manifest', href: '/site.webmanifest?v=siphonophore' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=siphonophore', color: '#181b25' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=siphonophore' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
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
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-145975820-1',
    }],
  ],
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
      fs.readdirSync('./static/shop/items').forEach((filename) => {
        if (filename.endsWith(fileExt)) {
          routes.push({
            route: `/shop/items/` + filename.slice(0, -fileExt.length),
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
