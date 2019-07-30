<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/assets/logo/2019 Filled.png" class="logo">
    </nuxt-link>
    <div class="navbar">
      <nuxt-link to="/work">
        Work
      </nuxt-link>
      <nuxt-link to="/development">
        Development
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 65px;
}

.logo {
  width: 60px;
  height: 60px;
}

</style>
