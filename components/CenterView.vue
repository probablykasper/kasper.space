<template lang="pug">
  .page-container
    .header-compensation.top
    .middle
      .content
        slot
    .header-compensation
</template>

<style lang='sass' scoped>
.page-container
  position: absolute
  height: 100%
  width: 100%
  top: 0
  left: 0
  display: flex
  flex-direction: column
  overflow: visible
  pointer-events: none
  .header-compensation
    min-height: 50px
    height: 10%
    max-height: calc(60px + 50px*2)
    flex-grow: 1
    &.top
      min-height: calc(60px + 50px*2)
  .middle
    flex-grow: 1
    align-self: center
    display: flex
    flex-direction: column
    justify-content: center
    .content
      text-align: center
      pointer-events: all
</style>
