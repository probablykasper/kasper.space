<template lang='pug'>
  div#layout-container
    ParticlesJS
    Header
    nuxt#page-container
    Splash
</template>

<script>
import Splash from '~/components/Splash.vue'
import Header from '~/components/Header.vue'
import ParticlesJS from '~/components/ParticlesJS.vue'

export default {
  components: {
    Header,
    Splash,
    ParticlesJS,
  },
}
</script>

<style lang="sass">
html
  font-family: Lato, Rubik, 'Open Sans', Roboto, Arial, sans-serif
  color: #ffffff
  font-size: 16px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased !important
  max-width: 1300px
  margin-left: auto
  margin-right: auto
#layout-container
  margin: 0px 6%

.page-container > *:not(.gradient-background-container)
  position: relative
  z-index: 30

// hide scrollbars when elements are transformed outside the viewport (aos.js)
html
  overflow-x: hidden
  overflow-y: scroll
body
  overflow: hidden

#layout-container
  display: flex
  flex-direction: column

svg, img // remove 4px bottom space
  vertical-align: bottom

p
  margin: 0
  line-height: 1.5rem
  color: #d3d4de
h1
  font-size: 40px
  font-weight: 500
  margin: 0px
  margin-bottom: 20px
  font-family: 'Jost*', Lato, sans-serif, Arial

.page-enter-active, .page-leave-active
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
// .page-enter
//   opacity: 0
//   transform: translateY(30px)
.page-leave-to
  opacity: 0
  // transform: translateY(-30px)

a
  color: white
  text-decoration: none

</style>
