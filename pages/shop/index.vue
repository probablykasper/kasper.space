<template lang='pug'>
.page-container
  SectionsView(:sections='sections' itemAos='fade' :itemAosDuration='0' :itemAosConstant='0')
</template>

<script>
import SectionsView from '~/components/SectionsView.vue'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  components: {
    SectionsView,
  },
  data() {
    return {
      sections: [
        {
          title: 'Cover Art',
          align: 'center',
          description: 'I make cover art from time to time. You can purchase covers from my Shop.',
          type: 'square-images',
          items: (function() {
            const images = require.context('~/static/shop/items/', true, /\.jpg$/)
            const imagesArray = Array.from(images.keys())
            const fileExt = '.jpg'
            const itemsArray = imagesArray.map(value => ({
              url: '/shop/items/' + value.slice(2, -fileExt.length),
              src: require('~/static/shop/items/' + value.slice(2)),
            }))
            return itemsArray
          })(),
        },
      ],
    }
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>
