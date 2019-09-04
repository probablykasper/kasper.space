<template lang='pug'>
div
  template(v-for='section, index in sections')
    .section(:class='`${section.class} align-${section.align}`')

      h1.section-title(:data-aos='getAOS("title", section.align)' data-aos-duration='800' data-aos-delay='0' :data-aos-anchor='`.${section.class}`') {{section.title}}
      p.section-description(:data-aos='getAOS("description", section.align)' data-aos-duration='800' data-aos-delay='100' :data-aos-anchor='`.${section.class}`') {{section.description}}

      .items(:class='section.type')
        template(v-for='item, index in section.items')

          nuxt-link.item(v-if='item.url.startsWith("/")' :to='item.url' data-aos='fade-up' data-aos-duration='650' :data-aos-delay='200+index*100' :data-aos-anchor='`.${section.class} .items`')
            .thumbnail-container(v-if='section.type === "text-only"')
              .thumbnail {{item.thumbnailText}}
            img.thumbnail(v-else :src='item.src')
            p.item-text(v-if='item.text') {{item.text}}

          a.item(v-else :href='item.url' target='_blank' rel='noopener noreferrer' data-aos='fade-up' data-aos-duration='650' :data-aos-delay='200+index*100' :data-aos-anchor='`.${section.class} .items`')
            .thumbnail-container(v-if='section.type === "text-only"')
              .thumbnail {{item.thumbnailText}}
            img.thumbnail(v-else :src='item.src')
            p.item-text(v-if='item.text') {{item.text}}
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getAOS(element, align) {
      if (element === 'title') {
        // eslint-disable-next-line curly
        if (align === 'left') return 'fade-right'
        if (align === 'right') return 'fade-left'
        if (align === 'center') return 'zoom-out'
      } else if (element === 'description') {
        if (align === 'left') return 'zoom-in-right'
        if (align === 'right') return 'zoom-in-left'
        if (align === 'center') return 'zoom-in'
        if (align === 'center') return 'zoom-in-up'
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.section
  position: relative
  padding-bottom: 100px
  &.align-center
    .section-title, .section-description
      text-align: center
      margin-left: auto
      margin-right: auto
  &.align-right
    .section-title, .section-description
      text-align: right
      margin-left: auto
  .section-description
    @media screen and (max-width: 600px)
      font-size: 14px
    max-width: 540px
    margin-bottom: 20px
  .items
    display: flex
    flex-wrap: wrap
    $margin: 13px
    margin: 0px -$margin
    &.square-images
      .item
        width: calc(100%/4 - 2*#{$margin})
        @media screen and (max-width: 900px)
          width: calc(100%/3 - 2*#{$margin})
          &:nth-child(6), &:nth-child(7)
            display: none
        @media screen and (max-width: 380px)
          width: calc(100%/2 - 2*#{$margin})
        .thumbnail
          min-height: 100%
    &.text-only .item
      .thumbnail-container
        background-color: #181b25
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        .thumbnail
          padding: 18% 0px
          opacity: 0.7
    &.text-only .item:hover
      .thumbnail-container
        background-color: lighten(#181b25, 1%)
        .thumbnail
          opacity: 1
    .item:hover
      > *
        transform: translateY(-4px)
      .item-text
        opacity: 1
    .item
      display: inline-block
      margin: $margin
      width: calc(100%/3 - 2*#{$margin})
      @media screen and (max-width: 900px)
        width: calc(100%/2 - 2*#{$margin})
      .thumbnail
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        display: block
        width: 100%
        box-sizing: border-box
        border-radius: 2px
        display: flex
        align-items: center
        justify-content: center
        font-size: 28px
        @media screen and (max-width: 500px)
          font-size: 5.5vw
      .item-text
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        opacity: 0.7
        text-align: center
        font-size: 14px
        margin-top: 4px
        line-height: 1rem
        @media screen and (max-width: 600px)
          font-size: 12px
</style>
