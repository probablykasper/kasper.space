<template lang='pug'>
  .header
    nuxt-link(to='/')
      img.logo(src='~/assets/logo/2019 Filled.png')
    .navbar
      nuxt-link(to='/work') Work
      nuxt-link(to='/development') Development
</template>

<style lang='sass' scoped>

.header
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding: 50px 65px

.logo
  width: 60px
  height: 60px

</style>
