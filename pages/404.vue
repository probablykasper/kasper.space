<template lang='pug'>
  CenterView
    h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | 404
    p(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | Hopefully it's not my fault
</template>

<script>
import CenterView from '~/components/CenterView.vue'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  components: {
    CenterView,
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>

<style lang='sass' scoped>
.page-container
  white-space: pre-wrap
  a
    display: inline-block
    position: relative
    padding: 3px
    .text
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
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
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
      $moveVertically: -2px
      .text
        transform: translateY($moveVertically)
      &::after
        transform: translateY($moveVertically) scaleX(1)
        opacity: 1
</style>
