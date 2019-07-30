<template>
  <div>
    <div class="bg" />
    <Header />
    <nuxt />
    <Splash />
  </div>
</template>

<script>
import Splash from '~/components/Splash.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    Splash
  }
}
</script>

<style>
html {
  font-family: 'Jost*', Rubik, 'Open Sans', Roboto, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

img {
  display: block; /* remove 4px bottom space from images */
}

p {
  margin: 0;
}

:focus {
  outline: none;
}

a {
  color: white;
  text-decoration: none;
}

.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(at 80% 30%, rgba(160, 36, 255, 0.15), rgb(13, 2, 22));
  z-index: -1;
}

</style>
