<template lang='pug'>
  CenterView
    h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | {{error.statusCode}}
    p(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | Probably wasn't important anyway
</template>

<script>
import CenterView from '~/components/CenterView.vue'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  props: ['error'],
  layout: 'error',
  components: {
    CenterView,
  },
  data() {
    return {
      statusCode: this.error,
      message: (this.error && this.error.message) ? this.error.message : 'Error',
    }
  },
  head() {
    return {
      title: this.error.statusCode + ' - kasper.space',
    }
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>
