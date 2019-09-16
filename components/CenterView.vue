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
  min-height: 100%
  padding: 0px 6%
  width: 100%
  box-sizing: border-box
  top: 0
  left: 0
  display: flex
  flex-direction: column
  overflow: visible
  overflow-x: hidden
  overflow-y: visible
  pointer-events: none
  .header-compensation
    min-height: 50px
    height: 10%
    max-height: calc(60px + 50px*2)
    flex-grow: 1
    &.top
      min-height: calc(60px + 50px*2)
      @media screen and (max-width: 450px)
        min-height: calc(133px + 50px*2)
  .middle
    max-width: 100%
    flex-grow: 1
    align-self: center
    display: flex
    flex-direction: column
    justify-content: center
    pointer-events: all
    .content
      text-align: center
</style>
