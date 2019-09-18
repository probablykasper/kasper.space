<template lang='pug'>
  a.button-container(
    :is='isNuxtLink(url) ? "nuxt-link" : "a"'
    :to='isNuxtLink(url) ? url : null'
    :href='url'
    :target='isNuxtLink(url) ? null : "_blank"'
    :rel='isNuxtLink(url) ? null : "noopener noreferrer"'
    data-aos='fade'
    data-aos-duration='800'
    data-aos-delay='400'
  )
    .button
      slot
      .text {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
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

<style lang='sass'>
.button-container
  display: inline-block
  user-select: none
  $svg-size: 18px
  $spacing: 8px
  .button
    border-radius: 2px
    text-align: left // align icon
    display: block
    background-color: rgba(#848fae, 0.4)
    padding: 14px 38px
    transition-property: box-shadow, transform, background-color
    transition-duration: 0.2s
    transition-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    // 2dp:
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)
  &:hover .button
    // 5dp:
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)
    transform: translateY(-4px)
    background-color: rgba(#8c93a6, 0.6)
  svg
    position: absolute
    width: $svg-size
    height: $svg-size
    top: 50%
    fill: #ffffff
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    transition-property: opacity, transform
    transition-duration: 0.2s
    transition-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    opacity: 0
    transform: translate(0%, -50%) translateX(#{-$svg-size/2}) translateX(#{ -$spacing }) translate(-150%, 100%) scale(0.5)
  &:hover svg
    opacity: 1
    transform: translate(0%, -50%) translateX(#{-$svg-size/2}) translateX(#{ -$spacing })
  .text
    transition-property: opacity, transform
    transition-duration: 0.2s
    transition-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
    opacity: 0.7
  &:hover .text
    opacity: 1
    transform: translateX(#{ $svg-size/2 })
</style>
