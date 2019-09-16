<template lang='pug'>
  div#particles-js
</template>

<script>
export default {
  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS() {
      // eslint-disable-next-line no-undef
      particlesJS('particles-js', {
        particles: {
          number: { value: 500, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: false, speed: 0.5, opacity_min: 0, sync: false },
          },
          size: {
            value: 1.5,
            random: true,
            anim: { enable: false, speed: 1, size_min: 0.3, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: 'top-right',
            random: false,
            straight: true,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 3000, rotateY: 3000 },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: { enable: false, mode: 'bubble' },
            onclick: { enable: false, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 500,
              size: 2.5,
              duration: 2,
              opacity: 1,
              speed: 0,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      })
    },
  },
}
</script>

<style lang='sass' scoped>
#particles-js
  pointer-events: none
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 20
  canvas
    vertical-align: bottom
</style>
