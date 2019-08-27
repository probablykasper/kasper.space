<template lang='pug'>
  .page-container.centered-page
    h1 Contact
    p
      | You can reach me at
      |
      a(href='mailto:kasperkh.kh@gmail.com')
        .text kasperkh.kh@gmail.com
</template>

<style lang="sass" scoped>
.page-container
  white-space: pre-wrap
  a
    display: inline-block
    position: relative
    padding: 3px
    .text
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &::after
      content: ''
      position: absolute
      width: 100%
      height: 2px
      background-color: #d3d4de
      bottom: 0px
      left: 0
      opacity: 0
      transform: scaleX(0.7)
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
      $moveVertically: -2px
      .text
        transform: translateY($moveVertically)
      &::after
        transform: translateY($moveVertically) scaleX(1)
        opacity: 1
</style>
