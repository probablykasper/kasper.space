<template lang='pug'>
.page-container
  SectionsView(:sections='sections' itemAos='fade' :itemAosDuration='0' :itemAosConstant='0')
</template>

<script>
import SectionsView from '~/components/SectionsView.vue'
import { EventBus } from '~/plugins/event-bus.js'

export default {
  head: {
    title: 'Shop - kasper.space',
  },
  components: {
    SectionsView,
  },
  data() {
    return {
      sections: [
        {
          title: 'Cover Art Shop',
          align: 'center',
          description: 'I make cover art from time to time. You can purchase covers from my Shop.',
          type: 'square-images-all',
          items: (function() {
            const images = require.context('~/static/shop/items/', true, /\.jpg$/)
            const imagePaths = Array.from(images.keys())
            const fileExt = '.jpg'
            const ids = imagePaths.map((value) => {
              // remove ./ from start and .jpg from end
              return Number(value.slice(2, -fileExt.length))
            })
            ids.sort((a, b) => {
              return b - a
            })
            const items = ids.map(value => ({
              url: '/shop/items/' + value,
              src: require('~/static/shop/items/' + value + fileExt),
            }))
            return items
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
