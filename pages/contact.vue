<template lang='pug'>
  .page-container.centered-page
    h1 Contact
    p
      | You can reach me at
      |
      a(href='mailto:kasperkh.kh@gmail.com')
        .text kasperkh.kh@gmail.com
</template>

<style lang='sass' scoped>
.page-container
  text-align: center
  white-space: pre-wrap
  a
    display: inline-block
    position: relative
    padding: 4px
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    div
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &::after
      content: ''
      position: absolute
      width: 100%
      height: 2px
      background-color: #d3d4de
      bottom: 2px
      left: 0
      opacity: 0
      transform: translateY(0px) scaleX(0.7)
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
      .text
        transform: translateY(-3px)
      &::after
        transform: translateY(-3px) scaleX(1)
        opacity: 1
</style>
