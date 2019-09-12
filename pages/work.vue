<template lang='pug'>
.page-container
  SectionsView(:sections='sections')
  BackgroundGradient(:gradients='gradients')
</template>

<script>
import SectionsView from '~/components/SectionsView.vue'
import BackgroundGradient from '~/components/BackgroundGradient.vue'

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
        description: "I've worked on several personal projects, and I pay a lot of attention to design. I'm experienced with HTML, CSS, JavaScript, jQuery, Vue.js, Node.js, Python, MySQL, MongoDB, Docker and more.",
        type: 'text-only',
        items: [
          {
            thumbnailText: 'vidl',
            text: 'Script for downloading video/audio',
            url: 'https://github.com/probablykasper/vidl',
          },
          {
            thumbnailText: 'Notifier',
            text: 'Mobile app for scheduling notifications',
            url: 'https://github.com/probablykasper/notifier',
          },
          {
            thumbnailText: 'Taskler',
            text: 'Simple text editor in your New Tab page',
            url: 'https://github.com/probablykasper/taskler',
          },
          {
            thumbnailText: 'kasper.space',
            text: 'Personal Website',
            url: 'https://github.com/probablykasper/v6.kasper.space',
          },
          {
            thumbnailText: 'limp',
            text: 'Programming language, made just for fun',
            url: 'https://github.com/probablykasper/limp',
          },
          {
            thumbnailText: 'lacuna.to',
            text: 'Lacuna Website',
            url: 'https://github.com/probablykasper/lacuna.to-website',
          },
        ],
      },
      {
        title: 'Video',
        align: 'right',
        description: 'I have made several audio visualizers and lyric videos, as well as over 60 cover art animations for Lowly, a record label with 400 000 YouTube subscribers.',
        type: 'images',
        items: [
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=-YeJpzqKNdE',
            src: require('~/assets/thumbnails/video/surrender.jpg'),
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=kuNi2UAxQBk',
            src: require('~/assets/thumbnails/video/redlight.jpg'),
          },
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=E549Vayj9vM',
            src: require('~/assets/thumbnails/video/theway.jpg'),
          },
          {
            text: 'Audio visualizer',
            url: 'https://www.youtube.com/watch?v=220KhlKu7Ds',
            src: require('~/assets/thumbnails/video/shrive3.jpg'),
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=QtpqqhEVbww',
            src: require('~/assets/thumbnails/video/riseup.jpg'),
          },
          {
            text: 'Cover art ani,mation',
            url: 'https://www.youtube.com/watch?v=HPycLyk_1Tk',
            src: require('~/assets/thumbnails/video/madeoftime.jpg'),
          },
        ],
      },
      {
        title: 'Lacuna',
        align: 'left',
        description: 'Lacuna is an independent record label I co-run. Our music has over ten million plays across Spotify, Apple Music and YouTube.',
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/1CTDxBkZT2d6K1EH5Og5Zh?si=qZst7rYpRxGu1DtETq0Nqg',
            src: require('~/assets/thumbnails/lacuna/nemesis.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/4pOFfuADJgibXj590jvEMH?si=b4Ldn9qKQ5uCVqL1ORR_XA',
            src: require('~/assets/thumbnails/lacuna/saveme.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/4auEpBO2ghCyqV7jpjLUOu?si=l9VdR4ysSbyDL0_hPg587A',
            src: require('~/assets/thumbnails/lacuna/upintheair.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/0qyrp5gh4IkvkqKhTka3A6?si=rU4oDoe-SpOF1t5CBM6N6Q',
            src: require('~/assets/thumbnails/lacuna/tropicallove.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/6gfwabuRxYE2o7GKDD1blM?si=KSpmDJE4TqyzdKfiRq0F0Q',
            src: require('~/assets/thumbnails/lacuna/redlight.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/6imlZarWNOvWZ8JNW8P7PH?si=sfx5XypqRYiScK5iNXdI9g',
            src: require('~/assets/thumbnails/lacuna/promises.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/535Ndjl54kHrQ0rCDTIDQL?si=j0OTcqlpTMe0qIy9xiPZsA',
            src: require('~/assets/thumbnails/lacuna/crazyforyou.jpg'),
          },
          {
            url: 'https://open.spotify.com/track/2Z3cBIZVUjwqDRelSUU2JO?si=DR1uWWT5SCqbr0R28m_RBQ',
            src: require('~/assets/thumbnails/lacuna/home.jpg'),
          },
        ],
      },
      {
        title: 'Cover Art',
        align: 'right',
        description: 'I make cover art from time to time. You can purchase covers from my Shop.',
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
            url: '/shop',
            src: require('~/assets/thumbnails/cover-art/backblur-1.jpg'),
          },
          {
            url: '/shop',
            src: require('~/assets/thumbnails/cover-art/snow-forest.jpg'),
          },
          {
            url: '/shop',
            src: require('~/assets/thumbnails/cover-art/starweb-2.jpg'),
          },
        ],
      },
    ],
  }),
}
</script>
