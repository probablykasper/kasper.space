<template>
  <div class="loading-container" :class="{ loaded: hasLoaded}">
    <div class="middle">
      <Logo class="splash-logo" />
      <p>kasper.space</p>
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/logo.svg'

export default {
  components: {
    Logo
  },
  data() {
    return {
      hasLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.hasLoaded = true
    }, 1000)
  }
}
</script>

<style>
.loading-container {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
  user-select: none;
}

.splash-logo {
  width: 120px;
  height: 120px;
}

p {
  font-size: 24px;
  text-align: center;
  margin: 0px;
  margin-top: 10px;
  letter-spacing: 1px;
  transform: scale(1.09, 1);
  font-family: 'Nunito';
}

.middle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform-origin: center;
  animation-duration: 0.5s;
  animation-name: show;
  /* animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1); */
  animation-timing-function: cubic-bezier(0,.6,.6,1);
  animation-fill-mode: forwards;
  transform: scale(0.9);
  opacity: 0;
}

.loaded .middle {
  animation-duration: 0.5s;
  animation-name: hide;
  animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  animation-fill-mode: forwards;
}

@keyframes show {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.11);
    opacity: 0;
  }
}
</style>
