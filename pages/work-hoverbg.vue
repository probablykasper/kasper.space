<template lang='pug'>
.page-container
  template(v-for='section in sections')
    .section(:class='section.class')
      .bg
      h1.section-title
        | {{section.title}}
      p.section-description
        | {{section.description}}
      .items(:class='section.type')
        template(v-for='item in section.items')
          a.item(:href='item.url' target='_blank' rel='noopener noreferrer')
            .thumbnail-container(v-if='section.type === "text-only"')
              .thumbnail {{item.thumbnailText}}
            img.thumbnail(v-else :src='item.src')
            p.item-text {{item.text}}
</template>

<script>
export default {
  data: () => ({
    sections: [
      {
        title: 'Development',
        class: 'development',
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
        class: 'video',
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
        class: 'lacuna',
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
        class: 'cover-art',
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
            url: '',
            src: require('~/assets/thumbnails/cover-art/backblur-1.jpg'),
          },
          {
            url: '',
            src: require('~/assets/thumbnails/cover-art/snow-forest.jpg'),
          },
          {
            url: '',
            src: require('~/assets/thumbnails/cover-art/starweb-2.jpg'),
          },
        ],
      },
    ],
  }),
}
</script>

<style lang='sass' scoped>
.section
  position: relative
  padding-bottom: 100px
  &:nth-child(2n)
    .section-title, .section-description
      text-align: right
    .section-description
      margin-left: auto
  .bg
    position: absolute
    // width: 110%
    width: 210%
    max-width: calc(100vw - 5px)
    transform: translateX(-50%)
    height: 100%
    filter: blur(150px)
    left: 50%
    background: #000000
    z-index: -2
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
    opacity: 0
  @media screen and (max-width: 768px)
    .bg
      opacity: 0.5
  &:hover .bg
    opacity: 0.5
  &.development .bg
    // background: #000000
    background: linear-gradient(to bottom right, #8486a9, #03197d)
    // background: linear-gradient(to bottom right, #9294b5, #03197d)
  &.video .bg
    background: linear-gradient(to bottom right, #b57da7, #22066f)
    // background: linear-gradient(to bottom right, #a37db5, #14066f)
  &.lacuna .bg
    background: linear-gradient(to bottom right, #d15252, #660066)
  &.cover-art .bg
    background: linear-gradient(to bottom right, #11885c, #04467c)
  .section-description
    @media screen and (max-width: 600px)
      font-size: 14px
    max-width: 540px
    margin-bottom: 20px
  .items
    display: flex
    flex-wrap: wrap
    $margin: 13px
    margin: 0px -$margin
    &.squares
      .item
        // width: calc(100%/4 - 20px)
        width: calc(100%/4 - 2*#{$margin})
        @media screen and (max-width: 900px)
          width: calc(100%/3 - 2*#{$margin})
          &:nth-child(6), &:nth-child(7)
            display: none
        @media screen and (max-width: 380px)
          width: calc(100%/2 - 2*#{$margin})
        .thumbnail
          min-height: 100%
    .item
      display: inline-block
      margin: $margin
      width: calc(100%/3 - 2*#{$margin})
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
      &:hover
        transform: translateY(-4px)
      @media screen and (max-width: 900px)
        width: calc(100%/2 - 2*#{$margin})
      .thumbnail
        display: block
        width: 100%
        box-sizing: border-box
        &:not(img)
          padding: 18% 0px
        background-color: #181b25
        border-radius: 2px

        display: flex
        align-items: center
        justify-content: center
        font-size: 28px
        @media screen and (max-width: 500px)
          font-size: 5.5vw
      .item-text
        opacity: 0.8
        text-align: center
        font-size: 14px
        margin-top: 4px
        line-height: 1rem
        @media screen and (max-width: 600px)
          font-size: 12px
</style>
