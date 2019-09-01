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
        title: 'Cover Art',
        class: 'cover-art',
        align: 'center',
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
