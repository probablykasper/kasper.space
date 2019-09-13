<template lang='pug'>
  CenterView
    .container
      img.row(:src='item' data-aos='fade-right' data-aos-duration='650' data-aos-delay='0')
      img.column(:src='item' data-aos='fade-up' data-aos-duration='650' data-aos-delay='0')
      .right-side
        h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0') Cover Art {{id}}
        p(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
          | Please contact me at
          a(href='mailto:kasperkh.kh@gmail.com')
            .text kasperkh.kh@gmail.com
          | if you're interested in the cover.
</template>

<script>
import CenterView from '~/components/CenterView.vue'

export default {
  components: {
    CenterView,
  },
  data() {
    return {
      id: this.$route.params.id,
      item: '/shop/items/' + this.$route.params.id + '.jpg',
    }
  },
}
</script>

<style lang='sass' scoped>

.container
  display: flex
  @media screen and (max-width: 600px)
    flex-direction: column-reverse
  img
    min-width: 0px
    max-width: 100%
    width: 400px
    margin: auto
    &.column
      display: none
    @media screen and (max-width: 600px)
      &.row
        display: none
      &.column
        display: initial

  .right-side
    text-align: left
    margin-left: 30px
    max-width: 250px
    @media screen and (max-width: 600px)
      text-align: center
      margin-left: 0px
      max-width: 400px
    p
      margin-bottom: 30px
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
