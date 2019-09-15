<template lang='pug'>
  div
</template>

<script>
import { EventBus } from '~/plugins/event-bus.js'

export default {
  mounted() {
    EventBus.$on('page-background-update', (backgroundImage) => {
      this.switchBackgroundGradient(backgroundImage)
    })
    EventBus.$on('page-background-remove', (backgroundImage) => {
      this.removeBackgroundGradient(backgroundImage)
    })
  },
  methods: {
    removeBackgroundGradient() {
      const visibleGradients = this.$el.querySelectorAll('.background-gradient.visible')
      for (const gradient of visibleGradients) {
        if (gradient) gradient.classList.remove('visible')
      }
    },
    switchBackgroundGradient(backgroundImage) {
      // remove current gradient background
      const currentGradient = this.$el.querySelector('.background-gradient.visible')
      setTimeout(() => {
        if (currentGradient && currentGradient.parentNode) {
          currentGradient.parentNode.removeChild(currentGradient)
        }
      }, 1000)
      // add new gradient background
      const newGradient = document.createElement('div')
      newGradient.classList.add('background-gradient')
      newGradient.style.backgroundImage = backgroundImage
      this.$el.appendChild(newGradient)
      setTimeout(function() {
        requestAnimationFrame(function() {
          newGradient.classList.add('visible')
        })
      }, 20)
    },
  },
}
</script>

<style lang='sass'>

.background-gradient
  position: fixed
  top: 0
  left: 0
  z-index: 10
  width: 100%
  height: 100%
  opacity: 0
  transition: opacity 0.6s ease-out
  &.visible
    opacity: 1
</style>
