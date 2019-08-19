<template lang='pug'>
  div
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
    Splash,
  },
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
  max-width: 1300px
  margin-left: auto
  margin-right: auto
body
  margin: 0px 6%

svg, img // remove 4px bottom space
  vertical-align: bottom

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

</style>
