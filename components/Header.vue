<template lang='pug'>
  .header
    nuxt-link(to='/')
      //- svg.logo(src='~/assets/logo/2019 Filled.svg')
      LogoFilled.logo
    .navbar
      nuxt-link.work(to='/work')
        .outline
        .title Work
      nuxt-link.art(to='/art')
        .outline
        .title Art
      nuxt-link.contact(to='/contact')
        .outline
        .title Contact
</template>

<script>
import LogoFilled from '~/assets/logo/2019 Filled.svg'

export default {
  components: {
    LogoFilled,
  },
}
</script>

<style lang='sass' scoped>
.header
  display: flex
  flex-direction: row
  flex-shrink: 0
  align-items: center
  justify-content: space-between
  align-content: center
  margin: 50px 0px
  z-index: 30
  @media screen and (max-width: 450px)
    flex-direction: column
    align-items: left

  .logo
    width: 60px
    height: 60px
    @media screen and (max-width: 450px)
      margin-bottom: 30px
      width: 70px
      height: 70px
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
      transform: scale(1.1)

  .navbar
    display: flex
    justify-content: space-evenly
    a
      @media screen and (max-width: 550px)
        margin-right: 15px
      margin-right: 20px
      &:last-child
        margin-right: 0px
      display: inline-block
      position: relative
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
      @keyframes gradient-animation
        0%
          background-position: 0% 0%
        100%
          background-position: 100% 100%
      &.work .outline
        background: linear-gradient(-45deg, #89216b, #C68A67, #89216b, #C68A67)
        background-size: 300% 300%
      &.art .outline
        background-image: linear-gradient(-45deg, #9F4DF6, #6BBEF8, #9F4DF6, #6BBEF8)
        background-size: 300% 300%
      &.contact .outline
        background: linear-gradient(-45deg, #1B77E6, #00FFA3, #1B77E6, #00FFA3)
        background-size: 300% 300%
      .outline
        content: ''
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        animation: gradient-animation 3s linear infinite
        $x: 2px;
        clip-path: polygon(0% 100%, $x 100%, $x $x, calc(100% - #{$x}) $x, calc(100% - #{$x}) calc(100% - #{$x}), $x calc(100% - #{$x}), $x 100%, 100% 100%, 100% 0%, 0% 0%)
        border-radius: 2px
        transition-property: all
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        opacity: 0
        transform: rotate(.00001deg)
      &.nuxt-link-active .outline
        opacity: 1
        outline: 1px solid transparent;
      &:hover
        transform: scale(1.1)
        .title
          opacity: 1
      .title
        @media screen and (max-width: 550px)
          font-size: 95%
          padding: 8px 15px
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        opacity: 0.7
        font-size: 105%
        font-weight: 500
        padding: 14px 24px
        -webkit-backface-visibility: hidden
        -webkit-transform: translateZ(0) scale(1.0, 1.0)

</style>
