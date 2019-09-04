<template lang='pug'>
.page-container
  ItemsView(:sections='sections')
</template>

<script>
import ItemsView from '~/components/ItemsView.vue'

export default {
  components: {
    ItemsView,
  },
  data() {
    const images = require.context('~/static/shop/items/', true, /\.jpg$/)
    const imagesArray = Array.from(images.keys())
    const fileExt = '.jpg'
    const itemsArray = imagesArray.map(value => ({
      url: '/shop/items/' + value.slice(2, -fileExt.length),
      src: require('~/static/shop/items/' + value.slice(2)),
    }))
    return {
      sections: [
        {
          title: 'Cover Art',
          class: 'cover-art',
          align: 'center',
          description: 'I make cover art from time to time. You can purchase covers from my Shop.',
          type: 'square-images',
          items: itemsArray,
        },
      ],
    }
  },
}
</script>
