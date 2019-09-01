<template lang='pug'>
.page-container
  template(v-for='section, index in sections')
    .section(:class='section.class')
      h1.section-title(:data-aos='index % 2 ? "fade-left" : "fade-right"' data-aos-duration='800' data-aos-delay='100' :data-aos-anchor='"."+section.class') {{section.title}}
      p.section-description(:data-aos='index % 2 ? "zoom-in-left" : "zoom-in-right"' data-aos-duration='800' data-aos-delay='50' :data-aos-anchor='"."+section.class') {{section.description}}
      .items(:class='section.type')
        template(v-for='item, index in section.items')
          a.item(:href='item.url' target='_blank' rel='noopener noreferrer' data-aos='fade-up' data-aos-duration='650' :data-aos-delay='250+index*100' :data-aos-anchor='`.${section.class} .items`')
            .thumbnail-container(v-if='section.type === "text-only"')
              .thumbnail {{item.thumbnailText}}
            img.thumbnail(v-else :src='item.src')
            p.item-text(v-if='item.text') {{item.text}}
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
        description: 'I have made several audio visualizers and lyric videos, as well as over 60 cover art animations for Lowly, a record label with 400 000 YouTube subscribers.',
        type: 'images',
        items: [
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=-YeJpzqKNdE',
            src: 'thumbnails/video-surrender.jpg',
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=kuNi2UAxQBk',
            src: 'thumbnails/video-redlight.jpg',
          },
          {
            text: 'Cover art animation',
            url: 'https://www.youtube.com/watch?v=E549Vayj9vM',
            src: 'thumbnails/video-theway.jpg',
          },
          {
            text: 'Audio visualizer',
            url: 'https://www.youtube.com/watch?v=220KhlKu7Ds',
            src: 'thumbnails/video-shrive3.jpg',
          },
          {
            text: 'Lyric video',
            url: 'https://www.youtube.com/watch?v=QtpqqhEVbww',
            src: 'thumbnails/video-riseup.jpg',
          },
          {
            text: 'Cover art ani,mation',
            url: 'https://www.youtube.com/watch?v=HPycLyk_1Tk',
            src: 'thumbnails/video-madeoftime.jpg',
          },
        ],
      },
      {
        title: 'Lacuna',
        class: 'lacuna',
        description: 'An independent record label I co-run. Our music has over ten million plays across Spotify, Apple Music and YouTube.',
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/1CTDxBkZT2d6K1EH5Og5Zh?si=qZst7rYpRxGu1DtETq0Nqg',
            src: 'thumbnails/cover-nemesis.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4pOFfuADJgibXj590jvEMH?si=b4Ldn9qKQ5uCVqL1ORR_XA',
            src: 'thumbnails/cover-saveme.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4auEpBO2ghCyqV7jpjLUOu?si=l9VdR4ysSbyDL0_hPg587A',
            src: 'thumbnails/cover-upintheair.jpg',
          },
          {
            url: 'https://open.spotify.com/track/0qyrp5gh4IkvkqKhTka3A6?si=rU4oDoe-SpOF1t5CBM6N6Q',
            src: 'thumbnails/cover-tropicallove.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6gfwabuRxYE2o7GKDD1blM?si=KSpmDJE4TqyzdKfiRq0F0Q',
            src: 'thumbnails/cover-redlight.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6imlZarWNOvWZ8JNW8P7PH?si=sfx5XypqRYiScK5iNXdI9g',
            src: 'thumbnails/cover-promises.jpg',
          },
          {
            url: 'https://open.spotify.com/track/535Ndjl54kHrQ0rCDTIDQL?si=j0OTcqlpTMe0qIy9xiPZsA',
            src: 'thumbnails/cover-crazyforyou.jpg',
          },
          {
            url: 'https://open.spotify.com/track/2Z3cBIZVUjwqDRelSUU2JO?si=DR1uWWT5SCqbr0R28m_RBQ',
            src: 'thumbnails/cover-home.jpg',
          },
        ],
      },
      {
        title: 'Cover Art',
        class: 'cover-art',
        description: "I've made some cover art, and it's available for purchase.",
        type: 'square-images',
        items: [
          {
            url: 'https://open.spotify.com/track/1CTDxBkZT2d6K1EH5Og5Zh?si=qZst7rYpRxGu1DtETq0Nqg',
            src: 'thumbnails/cover-nemesis.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4pOFfuADJgibXj590jvEMH?si=b4Ldn9qKQ5uCVqL1ORR_XA',
            src: 'thumbnails/cover-saveme.jpg',
          },
          {
            url: 'https://open.spotify.com/track/4auEpBO2ghCyqV7jpjLUOu?si=l9VdR4ysSbyDL0_hPg587A',
            src: 'thumbnails/cover-upintheair.jpg',
          },
          {
            url: 'https://open.spotify.com/track/0qyrp5gh4IkvkqKhTka3A6?si=rU4oDoe-SpOF1t5CBM6N6Q',
            src: 'thumbnails/cover-tropicallove.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6gfwabuRxYE2o7GKDD1blM?si=KSpmDJE4TqyzdKfiRq0F0Q',
            src: 'thumbnails/cover-redlight.jpg',
          },
          {
            url: 'https://open.spotify.com/track/6imlZarWNOvWZ8JNW8P7PH?si=sfx5XypqRYiScK5iNXdI9g',
            src: 'thumbnails/cover-promises.jpg',
          },
          {
            url: 'https://open.spotify.com/track/535Ndjl54kHrQ0rCDTIDQL?si=j0OTcqlpTMe0qIy9xiPZsA',
            src: 'thumbnails/cover-crazyforyou.jpg',
          },
          {
            url: 'https://open.spotify.com/track/2Z3cBIZVUjwqDRelSUU2JO?si=DR1uWWT5SCqbr0R28m_RBQ',
            src: 'thumbnails/cover-home.jpg',
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.section
  position: relative
  padding-bottom: 100px
  &:nth-child(2n)
    .section-title, .section-description
      text-align: right
    .section-description
      margin-left: auto
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
    &.square-images
      .item
        width: calc(100%/4 - 2*#{$margin})
        @media screen and (max-width: 900px)
          width: calc(100%/3 - 2*#{$margin})
          &:nth-child(6), &:nth-child(7)
            display: none
        @media screen and (max-width: 380px)
          width: calc(100%/2 - 2*#{$margin})
        .thumbnail
          min-height: 100%
    &.text-only .item
      .thumbnail-container
        background-color: #181b25
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        .thumbnail
          padding: 18% 0px
          opacity: 0.7
    &.text-only .item:hover
      .thumbnail-container
        background-color: lighten(#181b25, 1%)
        .thumbnail
          opacity: 1
    .item:hover
      > *
        transform: translateY(-4px)
      .item-text
        opacity: 1
    .item
      display: inline-block
      margin: $margin
      width: calc(100%/3 - 2*#{$margin})
      @media screen and (max-width: 900px)
        width: calc(100%/2 - 2*#{$margin})
      .thumbnail
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        display: block
        width: 100%
        box-sizing: border-box
        border-radius: 2px
        display: flex
        align-items: center
        justify-content: center
        font-size: 28px
        @media screen and (max-width: 500px)
          font-size: 5.5vw
      .item-text
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        opacity: 0.7
        text-align: center
        font-size: 14px
        margin-top: 4px
        line-height: 1rem
        @media screen and (max-width: 600px)
          font-size: 12px
</style>
