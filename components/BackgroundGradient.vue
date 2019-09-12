<template lang='pug'>
  .gradient-background-container
    canvas#gradient-background
    .vignette
</template>

<script>

import Granim from 'granim'

export default {
  props: {
    gradients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      granimInstance: null,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    const states = {}
    this.gradients.forEach((gradient, i) => {
      states[i.toString()] = {
        gradients: [
          gradient,
        ],
      }
    })
    this.granimInstance = new Granim({
      element: '#gradient-background',
      name: 'granim',
      opacity: [1, 1],
      defaultStateName: '0',
      stateTransitionSpeed: 1000,
      states,
    })
  },
  methods: {
    handleScroll(e) {
      const htmlEl = document.documentElement

      const windowHeight = htmlEl.clientHeight
      const pageHeight = htmlEl.scrollHeight
      const pageScrollPosition = htmlEl.scrollTop
      const pageScrollPercent = pageScrollPosition / (pageHeight - windowHeight)

      const gradientIndex = pageScrollPercent * (this.gradients.length - 1)
      const newState = String(Math.round(gradientIndex))
      if (this.granimInstance) this.granimInstance.changeState(newState)
    },
  },
}
</script>

<style lang='sass' scoped>
#gradient-background, .vignette
  position: fixed
  top: 0
  left: 0
  z-index: 10
  width: 100%
  height: 100%
.vignette
  box-shadow: inset 0px 0px 100px 0px rgba(#000000, 0.4)
</style>
