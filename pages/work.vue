<template lang='pug'>
.page-container
  .section.development(data-color='#000000')
    h1.section-title Development
    p.section-description
      | I've worked on several personal projects, and I pay a lot of attention to design. I'm experienced with HTML, CSS, JavaScript, jQuery, Vue.js, Node.js, Python, MySQL, MongoDB, Docker and more.
    .items
      a.item(href='https://github.com/SpectralKH/vidl' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail vidl
        p.item-text Script for downloading video/audio
      a.item(href='https://github.com/SpectralKH/notifier' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail Notifier
        p.item-text Mobile app for scheduling notifications
      a.item(href='https://github.com/SpectralKH/taskler' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail Taskler
        p.item-text Simple text editor in your New Tab page
      a.item(href='https://github.com/SpectralKH/kasper.space' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail kasper.space
        p.item-text Personal Website
      a.item(href='https://github.com/SpectralKH/limp' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail limp
        p.item-text Programming language, made just for fun
      a.item(href='https://github.com/SpectralKH/lacuna.to-website' target='_blank' rel='noopener noreferrer')
        div
          .thumbnail lacuna.to
        p.item-text Lacuna Website
  .section.video(data-color='#1e1835')
    h1.section-title Video
    p.section-description
      | I have made several audio visualizers and lyric videos, as well as over 60 cover art animations for Lowly, a record label with 400 000 YouTube subscribers.
    .items
      a.item(href='https://www.youtube.com/watch?v=-YeJpzqKNdE' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-surrender.jpg')
        p.item-text Cover art animation
      a.item(href='https://www.youtube.com/watch?v=kuNi2UAxQBk' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-redlight.jpg')
        p.item-text Lyric video
      a.item(href='https://www.youtube.com/watch?v=E549Vayj9vM' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-theway.jpg')
        p.item-text Cover art animation
      a.item(href='https://www.youtube.com/watch?v=220KhlKu7Ds' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-shrive3.jpg')
        p.item-text Audio visualizer
      a.item(href='https://www.youtube.com/watch?v=QtpqqhEVbww' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-riseup.jpg')
        p.item-text Lyric video
      a.item(href='https://www.youtube.com/watch?v=HPycLyk_1Tk' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/video-madeoftime.jpg')
        p.item-text Cover art animation
  .section.lacuna(data-color='#172836')
    h1.section-title Lacuna
    p.section-description
      | An independent record label I co-run. Our music has over ten million plays across Spotify, Apple Music and YouTube.
    .items.squares.no-text
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-nemesis.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-saveme.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-upintheair.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-tropicallove.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-redlight.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-promises.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-crazyforyou.jpg')
      a.item(href='' target='_blank' rel='noopener noreferrer')
        img.thumbnail(src='thumbnails/cover-home.jpg')
  .section.cover-art(data-color='#3e1e43')
    h1.section-title Cover Art
    p.section-description
      | I've made some cover arts, which are available for purchase.
</template>

<script>
import { EventBus } from '~/plugins/event-bus.js'

export default {
  data() {
    return {
      sectionPositions: Array,
    }
  },
  mounted() {
    this.initObserver()
  },
  methods: {
    initObserver() {
      const observerCallback = (entries) => {
        for (const entry of entries) {
          console.log(entry)
          if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
            EventBus.$emit('bg-color-update', entry.target.nextSibling.dataset.color)
          } else if (entry.boundingClientRect.top < 0 && entry.isIntersecting) {
            EventBus.$emit('bg-color-update', entry.target.dataset.color)
          }
        }
      }
      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '-150px',
        threshold: 0,
      })
      const sections = this.$el.children
      // observer.observe(sections[1])
      for (const section of sections) {
        observer.observe(section)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.section
  margin-bottom: 100px
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
