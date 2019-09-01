<template lang='pug'>
.page-container
  ItemsView(:sections='sections')
</template>

<script>
import ItemsView from '~/components/ItemsView.vue'

export default {
  components: {
    ItemsView,
  },
  data: () => ({
    sections: [
      {
        title: 'Development',
        class: 'development',
        align: 'left',
        description: "I've worked on several personal projects, and I pay a lot of attention to design. I'm experienced with HTML, CSS, JavaScript, jQuery, Vue.js, Node.js, Python, MySQL, MongoDB, Docker and more.",
        type: 'text-only',
        items: [
          {
            thumbnailText: 'vidl',
            text: 'Script for downloading video/audio',
            url: 'https://github.com/SpectralKH/vidl',
          },
          {
            thumbnailText: 'Notifier',
            text: 'Mobile app for scheduling notifications',
            url: 'https://github.com/SpectralKH/notifier',
          },
          {
            thumbnailText: 'Taskler',
            text: 'Simple text editor in your New Tab page',
            url: 'https://github.com/SpectralKH/taskler',
          },
          {
            thumbnailText: 'kasper.space',
            text: 'Personal Website',
            url: 'https://github.com/SpectralKH/v6.kasper.space',
          },
          {
            thumbnailText: 'limp',
            text: 'Programming language, made just for fun',
            url: 'https://github.com/SpectralKH/limp',
          },
          {
            thumbnailText: 'lacuna.to',
            text: 'Lacuna Website',
            url: 'https://github.com/SpectralKH/lacuna.to-website',
          },
        ],
      },
      {
        title: 'Video',
        class: 'video',
        align: 'right',
        description: 'I have made several audio visualizers and lyric videos, as well as over 60 cover art animations for Lowly, a record label with 400 000 YouTube subscribers.',
        type: 'images',
        items: [
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=-YeJpzqKNdE',
            src: 'thumbnails/video/surrender.jpg',
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=kuNi2UAxQBk',
            src: 'thumbnails/video/redlight.jpg',
          },
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=E549Vayj9vM',
            src: 'thumbnails/video/theway.jpg',
          },
          {
            text: 'Audio visualizer',
            url: 'https://www.youtube.com/watch?v=220KhlKu7Ds',
            src: 'thumbnails/video/shrive3.jpg',
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=QtpqqhEVbww',
            src: 'thumbnails/video/riseup.jpg',
          },
          {
            text: 'Cover art ani,mation',
            url: 'https://www.youtube.com/watch?v=HPycLyk_1Tk',
            src: 'thumbnails/video/madeoftime.jpg',
          },
        ],
      },
      {
        title: 'Lacuna',
        class: 'lacuna',
        align: 'left',
        description: 'Lacuna is an independent record label I co-run. Our music has over ten million plays across Spotify, Apple Music and YouTube.',
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/1CTDxBkZT2d6K1EH5Og5Zh?si=qZst7rYpRxGu1DtETq0Nqg',
            src: 'thumbnails/lacuna/nemesis.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4pOFfuADJgibXj590jvEMH?si=b4Ldn9qKQ5uCVqL1ORR_XA',
            src: 'thumbnails/lacuna/saveme.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4auEpBO2ghCyqV7jpjLUOu?si=l9VdR4ysSbyDL0_hPg587A',
            src: 'thumbnails/lacuna/upintheair.jpg',
          },
          {
            url: 'https://open.spotify.com/track/0qyrp5gh4IkvkqKhTka3A6?si=rU4oDoe-SpOF1t5CBM6N6Q',
            src: 'thumbnails/lacuna/tropicallove.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6gfwabuRxYE2o7GKDD1blM?si=KSpmDJE4TqyzdKfiRq0F0Q',
            src: 'thumbnails/lacuna/redlight.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6imlZarWNOvWZ8JNW8P7PH?si=sfx5XypqRYiScK5iNXdI9g',
            src: 'thumbnails/lacuna/promises.jpg',
          },
          {
            url: 'https://open.spotify.com/track/535Ndjl54kHrQ0rCDTIDQL?si=j0OTcqlpTMe0qIy9xiPZsA',
            src: 'thumbnails/lacuna/crazyforyou.jpg',
          },
          {
            url: 'https://open.spotify.com/track/2Z3cBIZVUjwqDRelSUU2JO?si=DR1uWWT5SCqbr0R28m_RBQ',
            src: 'thumbnails/lacuna/home.jpg',
          },
        ],
      },
      {
        title: 'Cover Art',
        class: 'cover-art',
        align: 'right',
        description: 'I make cover art from time to time. You can purchase covers from my Shop.',
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/4m4SB61NXgwmfZm37incal?si=HztNWM0aSiyTICviSj4lIg',
            src: 'thumbnails/cover-art/serion-x-dabl-catch-you-in-my-arms.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6O2DrzgrHG5GrXX4pihPlW?si=r9oDt-EVSEukCF2d2HYSfQ',
            src: 'thumbnails/cover-art/barren-gates-x-serion-deep-within.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6mZIHwepGYSSrdeJCSNXZi?si=FrCvhi0cRSuFumQlcCO5tw',
            src: 'thumbnails/cover-art/serion-x-lotis-in-the-end.jpg',
          },
          {
            url: 'https://open.spotify.com/track/5c9O1rlHCNqyJGFVeMN6V2?si=pSHPpEZ2TWa-I5DcEirtyA',
            src: 'thumbnails/cover-art/serion-broken.jpg',
          },
          {
            url: 'https://open.spotify.com/track/3ju2YEKOQikMgetgj53xUJ?si=YXqZDFQgQDaLXNRr8a8QrQ',
            src: 'thumbnails/cover-art/voldex-colorblind-feat-cluda.jpg',
          },
          {
            url: '',
            src: 'thumbnails/cover-art/backblur-1.jpg',
          },
          {
            url: '',
            src: 'thumbnails/cover-art/snow-forest.jpg',
          },
          {
            url: '',
            src: 'thumbnails/cover-art/starweb-2.jpg',
          },
        ],
      },
    ],
  }),
}
</script>
