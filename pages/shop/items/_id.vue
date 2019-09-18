<template lang='pug'>
  .page-container
    CenterView
      .top
        .previous(:class='{disabled: !previousId}')
          nuxt-link(
            :is='previousId ? "nuxt-link" : "a"'
            :to='previousId ? "/shop/items/" + previousId : null'
          )
            ChevronIcon(data-aos='fade' data-aos-duration='200' data-aos-delay='0')
        .text-container
          h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0') {{title}}
          p(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
            | Please contact me at #[a(href='mailto:kasperkh.kh@gmail.com') #[.text kasperkh.kh@gmail.com]] if you're interested in the cover.
        .next(:class='{disabled: !nextId}')
          nuxt-link(
            :is='nextId ? "nuxt-link" : "a"'
            :to='nextId ? "/shop/items/" + nextId : null'
          )
            ChevronIcon(data-aos='fade' data-aos-duration='200' data-aos-delay='0')
      .image-container(data-aos='fade-up' data-aos-duration='650' data-aos-delay='0')
        img(v-lazy='imageSrc')
    .background-gradient(:style='`background-image: ${backgroundGradient}`')
</template>

<script>
import * as Vibrant from 'node-vibrant'
import CenterView from '~/components/CenterView.vue'
import ChevronIcon from '~/assets/icons/chevron.svg'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  head() {
    return {
      title: this.title + ' - kasper.space',
    }
  },
  components: {
    CenterView,
    ChevronIcon,
  },
  data() {
    const images = require.context('~/static/shop/items/', true, /\.jpg$/)
    const imagePaths = Array.from(images.keys())
    const fileExt = '.jpg'
    const ids = imagePaths.map((value) => {
      // remove ./ from start and .jpg from end
      return Number(value.slice(2, -fileExt.length))
    })
    ids.sort((a, b) => {
      return a - b
    })
    let previousId, nextId
    for (let i = 0; i < ids.length; i++) {
      if (String(ids[i]) === this.$route.params.id) {
        if (i > 0) previousId = ids[i - 1]
        if (i < ids.length) nextId = ids[i + 1]
        break
      }
    }
    return {
      backgroundGradient: 'linear-gradient(to bottom right, #000000, #000000)',
      id: this.$route.params.id,
      title: 'Cover Art ' + this.$route.params.id,
      imageSrc: '/shop/items/' + this.$route.params.id + '.jpg',
      previousId,
      nextId,
    }
  },
  created() {
    this.getBackgroundGradient()
  },
  methods: {
    getBackgroundGradient() {
      Vibrant.from(this.imageSrc).getPalette().then((palette) => {
        const swatch = palette.DarkVibrant
        const rgb1 = `${swatch.r * 0.65}, ${swatch.g * 0.65}, ${swatch.b * 0.65}`
        const rgb2 = `${swatch.r * 0.2}, ${swatch.g * 0.2}, ${swatch.b * 0.2}`
        const background = `linear-gradient(to bottom right, rgb(${rgb1}), rgba(${rgb2}))`
        EventBus.$emit('page-background-update', background)
      })
    },
  },
}
</script>

<style lang='sass' scoped>

$svg-container-size: 50px
$svg-width: 28px

.top
  display: flex
  justify-content: center
  max-width: calc(500px + 2*#{$svg-container-size})
  margin-bottom: 30px
  .previous, .next
    padding-right: $svg-container-size - $svg-width
    align-self: center
    flex-shrink: 0.5
    user-select: none
    &.disabled
      opacity: 0.4
      cursor: default
    &:not(.disabled) a:hover
      svg
        transform: translateX(-3px) scaleY(1.15)
    a
      svg
        width: 28px
        padding: 5px 0px
        fill: #ffffff
        display: block
        transition: opacity 0.4s ease, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
  .next
    transform: rotate(180deg)
  .text-container
    width: 500px
    overflow: hidden
    h1
      margin-bottom: 10px
      @media screen and (max-width: 430px)
        font-size: 8.5vw
    p
      padding: 0px calc(10% - 15px)
      @media screen and (max-width: 430px)
        font-size: calc(1vw + 10px)
        line-height: 1.2rem
    a
      display: inline-block
      position: relative
      padding: 3px
      color: #ebebef
      font-weight: bold
      .text
        display: inline-block
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
      &::after
        content: ''
        position: absolute
        width: 100%
        height: 2px
        background-color: #d3d4de
        bottom: 0px
        left: 0
        opacity: 0
        transform: scaleX(0.7)
        transition-property: opacity, transform
        transition-duration: 0.2s
        transition-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
      &:hover
        $moveVertically: -2px
        .text
          transform: translateY($moveVertically)
        &::after
          transform: translateY($moveVertically) scaleX(1)
          opacity: 1
@mixin aspect-ratio($width, $height)
  position: relative
  display: block
  &::before
    display: block
    content: ""
    width: 100%
    padding-top: ($height / $width) * 100%
  > img, > div
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
.image-container
  max-width: 500px
  background-color: #181b25
  @include aspect-ratio(1, 1)
  margin: auto
  min-width: 0px
  // 2dp:
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)
  img
    margin: auto
    max-width: 100%
    &[lazy='loaded']
      animation-duration: 500ms
      animation-fill-mode: both
      animation-name: fadeIn
</style>
