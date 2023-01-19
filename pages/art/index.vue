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
          title: 'Art',
          align: 'center',
          description: 'If you find any of these interesting, feel free to contact me',
          type: 'square-images-all',
          items: (function() {
            const images = require.context('~/static/art/items/', true, /\.jpg$/)
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
              url: '/art/items/' + value,
              src: '/art/items/' + value + fileExt,
            }))
            return items
          })(),
        },
      ],
    }
  },
  head: {
    title: 'Art - kasper.space',
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>
