<template lang='pug'>
  canvas#gradient-background(:style="style")
</template>

<script>
function getMiddleground(middlegroundPercent, numOne, numTwo) {
  const difference = numTwo - numOne
  const middleground = numOne + difference * middlegroundPercent
  return Math.round(middleground)
}

export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      scrolled: null,
      // granimInstance: null,
      style: {
        backgroundImage: 'linear-gradient(to bottom right, #000000, #000000)',
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    console.log('scroll add')
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    console.log('scroll remove')
  },
  methods: {
    handleScroll(e) {
      this.scrolled = window.scrollY > 0
      const htmlEl = document.documentElement

      const windowHeight = htmlEl.clientHeight
      const pageHeight = htmlEl.scrollHeight
      const pageScrollPosition = htmlEl.scrollTop
      const pageScrollPercent = pageScrollPosition / (pageHeight - windowHeight)

      const gradientIndex = pageScrollPercent * (this.colors.length - 1)
      const gradient1 = this.colors[Math.floor(gradientIndex)]
      const gradient2 = this.colors[Math.ceil(gradientIndex)]
      const middleground = gradientIndex % 1

      const r1 = getMiddleground(middleground, gradient1[0][0], gradient2[0][0])
      const g1 = getMiddleground(middleground, gradient1[0][1], gradient2[0][1])
      const b1 = getMiddleground(middleground, gradient1[0][2], gradient2[0][2])
      const rgb1 = `rgb(${r1}, ${g1}, ${b1})`

      const r2 = getMiddleground(middleground, gradient1[1][0], gradient2[1][0])
      const g2 = getMiddleground(middleground, gradient1[1][1], gradient2[1][1])
      const b2 = getMiddleground(middleground, gradient1[1][2], gradient2[1][2])
      const rgb2 = `rgb(${r2}, ${g2}, ${b2})`

      this.style.backgroundImage = `linear-gradient(to bottom right, ${rgb1}, ${rgb2})`
    },
  },
}
</script>

<style lang='sass'>
#gradient-background
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -2
  opacity: 0.5
  box-shadow: inset 0px 0px 100px 0px rgba(0, 0, 0, 0.5)
</style>
