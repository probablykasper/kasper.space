<template lang='pug'>
.page-container
  SectionsView(:sections='sections' itemAos='fade-up' :itemAosAddedDelay='100')
  BackgroundGradient(:gradients='gradients')
</template>

<script>
import SectionsView from '~/components/SectionsView.vue'
import BackgroundGradient from '~/components/BackgroundGradient.vue'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  components: {
    SectionsView,
    BackgroundGradient,
  },
  data: () => ({
    gradients: [
      ['#000000', '#000000'],
      ['#424355', '#020D3E'], // ['#8486a9', '#03197c'],
      ['#692929', '#330033'], // ['#d15252', '#660066'],
      ['#09442E', '#02233E'], // ['#11885c', '#04467c'],
    ],
    sections: [
      {
        title: 'Development',
        align: 'left',
        description: "I make websites, desktop apps, browser extensions, mobile apps and various utilities and libraries.\nI'm experienced with Svelte, Rust, Tauri, HTML, Pug, CSS, Sass, JavaScript, TypeScript, Vue.js, Node.js, Electron, Flutter, MongoDB, SQL and more",
        type: 'text-only',
        items: [
          {
            thumbnailText: 'cpc',
            text: 'Text calculator with units & conversion',
            url: 'https://github.com/probablykasper/cpc',
          },
          {
            thumbnailText: 'Kadium',
            text: 'App for staying ontop of YouTube uploads',
            url: 'https://github.com/probablykasper/kadium',
          },
          {
            thumbnailText: 'Limey',
            text: 'Profile & landing page service',
            url: 'https://limey.io',
          },
          {
            thumbnailText: 'Tauri',
            text: 'Fast desktop app framework',
            url: 'https://tauri.app',
          },
          {
            thumbnailText: 'Date Picker Svelte',
            text: 'Date and time picker for Svelte',
            url: 'https://date-picker-svelte.kasper.space',
          },
          {
            thumbnailText: 'Thumbnail Grabber',
            text: 'Thumbnail downloader extension',
            url: 'https://github.com/probablykasper/thumbnail-grabber',
          },
        ],
      },
      {
        title: 'Video',
        align: 'right',
        description: 'I have made several audio visualizers and lyric videos, as well as over 60 cover art animations for Lowly, a record label with 500 000 YouTube subscribers',
        type: 'images',
        items: [
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=-YeJpzqKNdE',
            src: require('~/assets/thumbnails/video/surrender.jpg'),
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=-w9dE9p2gI8',
            src: require('~/assets/thumbnails/video/punished.jpg'),
          },
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=E549Vayj9vM',
            src: require('~/assets/thumbnails/video/theway.jpg'),
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=kuNi2UAxQBk',
            src: require('~/assets/thumbnails/video/redlight.jpg'),
          },
          {
            text: 'Audio visualizer',
            url: 'https://www.youtube.com/watch?v=WtjThsN15Os',
            src: require('~/assets/thumbnails/video/shrive-particles-1.4.jpg'),
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=IAyxwC8SJ1c',
            src: require('~/assets/thumbnails/video/solong.jpg'),
          },
        ],
      },
      {
        title: 'Lacuna',
        align: 'left',
        description: 'Lacuna is an independent record label I co-run. Our music has over 100 million plays across Spotify, Apple Music and YouTube',
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/1CTDxBkZT2d6K1EH5Og5Zh',
            src: require('~/assets/thumbnails/lacuna/nemesis.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/4pOFfuADJgibXj590jvEMH',
            src: require('~/assets/thumbnails/lacuna/saveme.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/3iGYB7LpA3NMjnUK6poO1h?si=I5P0Yep6Q66Z81QonCja8g',
            src: require('~/assets/thumbnails/lacuna/pill.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/6gfwabuRxYE2o7GKDD1blM',
            src: require('~/assets/thumbnails/lacuna/redlight.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/4auEpBO2ghCyqV7jpjLUOu',
            src: require('~/assets/thumbnails/lacuna/upintheair.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/3NPwNhdEBcBIkArIcPZWJH',
            src: require('~/assets/thumbnails/lacuna/slide.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/535Ndjl54kHrQ0rCDTIDQL',
            src: require('~/assets/thumbnails/lacuna/crazyforyou.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/0qyrp5gh4IkvkqKhTka3A6',
            src: require('~/assets/thumbnails/lacuna/tropicallove.jpg'),
          },
        ],
      },
      {
        title: 'Cover Art',
        align: 'right',
        description: "I've made a couple cover artworks. Some of them look pretty alright",
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/4m4SB61NXgwmfZm37incal?si=HztNWM0aSiyTICviSj4lIg',
            src: require('~/assets/thumbnails/cover-art/serion-x-dabl-catch-you-in-my-arms.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/6O2DrzgrHG5GrXX4pihPlW?si=r9oDt-EVSEukCF2d2HYSfQ',
            src: require('~/assets/thumbnails/cover-art/barren-gates-x-serion-deep-within.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/6mZIHwepGYSSrdeJCSNXZi?si=FrCvhi0cRSuFumQlcCO5tw',
            src: require('~/assets/thumbnails/cover-art/serion-x-lotis-in-the-end.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/5c9O1rlHCNqyJGFVeMN6V2?si=pSHPpEZ2TWa-I5DcEirtyA',
            src: require('~/assets/thumbnails/cover-art/serion-broken.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/3ju2YEKOQikMgetgj53xUJ?si=YXqZDFQgQDaLXNRr8a8QrQ',
            src: require('~/assets/thumbnails/cover-art/voldex-colorblind-feat-cluda.jpg'),
          },
          {
            url: '/art',
            src: require('~/assets/thumbnails/cover-art/backblur-1.jpg'),
          },
          {
            url: '/art',
            src: require('~/assets/thumbnails/cover-art/snow-forest.jpg'),
          },
          {
            url: '/art',
            src: require('~/assets/thumbnails/cover-art/starweb-2.jpg'),
          },
        ],
      },
    ],
  }),
  head: {
    title: 'Work - kasper.space',
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>
