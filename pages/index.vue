<template>
  <div class="container">
    <div>
      <logo />
      <nuxt-link to="/work">
        WORK
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
