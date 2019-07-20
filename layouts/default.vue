<template>
  <div>
    <splash />
    <nuxt />
  </div>
</template>

<script>
import Splash from '~/components/Splash.vue'

export default {
  components: {
    Splash
  }
}
</script>

<style>
html {
  font-family: 'Jost*', Rubik, 'Open Sans', Roboto, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #ffffff;
}

html, body {
  box-sizing: border-box;
  margin: 0;
}

</style>
