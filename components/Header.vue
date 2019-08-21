<template lang='pug'>
  .header
    nuxt-link(to='/')
      //- svg.logo(src='~/assets/logo/2019 Filled.svg')
      LogoFilled.logo
    .navbar
      nuxt-link.work(to='/work')
        p Work
      nuxt-link.shop(to='/shop')
        p Shop
      nuxt-link.contact(to='/contact')
        p Contact
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
  align-items: center
  justify-content: space-between
  align-content: center
  margin: 50px 0px
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
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
      @keyframes gradient-animation
        0%
          background-position: 0% 0%
        100%
          background-position: 100% 100%
      &.work::after
        background: linear-gradient(-45deg, #89216b, #C68A67, #89216b, #C68A67)
        background-size: 300% 300%
      &.shop::after
        background-image: linear-gradient(-45deg, #9F4DF6, #6BBEF8, #9F4DF6, #6BBEF8)
        background-size: 300% 300%
      &.contact::after
        background: linear-gradient(-45deg, #1B77E6, #00FFA3, #1B77E6, #00FFA3)
        background-size: 300% 300%
      &::after
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
      &:hover::after, &.nuxt-link-active::after
        opacity: 1
      &:hover
        opacity: 1
        transform: scale(1.1)
      p
        @media screen and (max-width: 550px)
          font-size: 95%
          padding: 8px 15px
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        opacity: 0.7
        font-size: 105%
        font-weight: 500
        padding: 9px 20px
        -webkit-backface-visibility: hidden
        -webkit-transform: translateZ(0) scale(1.0, 1.0)

</style>
