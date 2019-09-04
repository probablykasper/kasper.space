<template lang='pug'>
  .page-container.centered-page
    p Hi
    p {{id}}
    img(:src='item')
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      item: '/shop/items/' + this.$route.params.id + '.jpg',
    }
  },
}
</script>

<style lang="sass" scoped>
img
  width: 500px
  margin: auto
  max-width: 100%
</style>
