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
