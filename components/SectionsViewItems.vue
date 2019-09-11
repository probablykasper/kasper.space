<template lang='pug'>
  .items(:class='section.type')
    template(v-for='item, index in section.items')
      .item(
        :is='isNuxtLink(item.url) ? "nuxt-link" : "a"'
        :to='isNuxtLink(item.url) ? item.url : null'
        :href='item.url'
        :target='isNuxtLink(item.url) ? null : "_blank"'
        :rel='isNuxtLink(item.url) ? null : "noopener noreferrer"'
        :class='section.type'
        data-aos='fade-up'
        data-aos-duration='650'
        :data-aos-delay='200+index*100'
        :data-aos-anchor='`#${sectionId} .items`'
      )
        .card-container(:class='section.type')
          .title(v-if='section.type === "text-only"') {{item.thumbnailText}}
          img(v-else v-lazy='item.src')
        p.bottom-text(v-if='item.text') {{item.text}}
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
  methods: {
    isNuxtLink(url) {
      return url.startsWith('/')
    },
  },
}
</script>

<style lang="sass" scoped>

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

$margin: 13px
.items
  display: flex
  flex-wrap: wrap
  margin: 0px -$margin

  .item
    display: inline-block
    margin: $margin

    .bottom-text, .card-container, .title
      transition-property: transform, opacity, background-color, box-shadow
      transition-duration: 0.2s
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
      .bottom-text, .card-container
        transform: translateY(-4px)
      .bottom-text
        opacity: 1
      .card-container.text-only
        .title
          opacity: 1
          background-color: lighten(#181b25, 1%)

    &.text-only, &.images
      width: calc(100%/3 - 2*#{$margin})
      @media screen and (max-width: 900px)
        width: calc(100%/2 - 2*#{$margin})

    &.square-images
      width: calc(100%/4 - 2*#{$margin})
      @media screen and (max-width: 900px)
        width: calc(100%/3 - 2*#{$margin})
        &:nth-child(n+7)
          display: none
      @media screen and (max-width: 380px)
        width: calc(100%/2 - 2*#{$margin})

    .card-container
      background-color: #181b25
      border-radius: 5px
      overflow: hidden

      .title
        opacity: 0.7
        padding: 18% 0px
        text-align: center
        font-size: 28px
        @media screen and (max-width: 500px)
          font-size: 5.5vw

      &.images
        @include aspect-ratio(16, 9)
      &.square-images
        @include aspect-ratio(1, 1)

      img
        width: 100%
        height: 100%
        transition: opacity 0.2s ease
        @keyframes fadeIn
          0%
            opacity: 0
          100%
            opacity: 1
        &[lazy='loading']
          width: 50px
          height: 50px
          margin: auto
        &[lazy='loaded']
          animation-duration: 500ms
          animation-fill-mode: both
          animation-name: fadeIn

    .bottom-text
      opacity: 0.7
      text-align: center
      margin-top: 4px
      line-height: 1rem
      font-size: 14px
      @media screen and (max-width: 600px)
        font-size: 12px

</style>
