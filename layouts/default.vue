<template lang='pug'>
  div
    .bg
    Header
    nuxt
    Splash
</template>

<script>
import Splash from '~/components/Splash.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    Splash
  }
}
</script>

<style lang='sass'>
html
  font-family: 'Jost*', Rubik, 'Open Sans', Roboto, Arial, sans-serif
  color: #ffffff
  font-size: 16px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased !important
svg
  vertical-align: bottom

img
  display: block // remove 4px bottom space from images

p
  margin: 0

html :focus
  outline: none

.page-enter-active, .page-leave-active
  transition-property: opacity
  transition-timing-function: ease-in-out
  transition-duration: 100ms
.page-enter, .page-leave-to
  opacity: 0

a
  color: white
  text-decoration: none

.bg
  position: absolute
  height: 100%
  width: 100%
  background: radial-gradient(at 80% 30%, rgba(160, 36, 255, 0.15), rgb(13, 2, 22))
  z-index: -1

</style>
