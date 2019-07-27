<template>
  <div class="loading-container" :class="{ loaded: hasLoaded, hidden: hidden}">
    <div class="middle">
      <LogoFilled class="logo" />
      <p>kasper.space</p>
    </div>
  </div>
</template>

<script>
import LogoFilled from '~/assets/Logo 2019 Lines.svg'

export default {
  components: {
    LogoFilled
  },
  data() {
    return {
      hasLoaded: false,
      hidden: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.hasLoaded = true
      setTimeout(() => {
        this.hidden = true
      }, 500)
    }, 1000)
  }
}
</script>

<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
  user-select: none;
  overflow: hidden;
}

.loading-container.loaded {
  animation: hide-opacity 0.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

.loading-container.hidden {
  display: none;
}

svg.logo {
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
  animation: show-logo 0.5s cubic-bezier(0,.6,.6,1) forwards;
  transform: scale(0.9);
  opacity: 0;
}

.loaded .middle {
  animation: hide-logo 0.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
  opacity: 1;
}

@keyframes show-logo {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes hide-logo {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.11);
  }
}

@keyframes hide-opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
