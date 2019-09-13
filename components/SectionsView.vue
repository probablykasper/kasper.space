<template lang='pug'>
div
  template(v-for='section, index in sections')
    .section(:class='`align-${section.align}`' :id='`section-${index}`')

      h1.section-title(:data-aos='getAOS("title", section.align)' data-aos-duration='800' data-aos-delay='0' :data-aos-anchor='`#section-${index}`') {{section.title}}
      p.section-description(:data-aos='getAOS("description", section.align)' data-aos-duration='800' data-aos-delay='100' :data-aos-anchor='`#section-${index}`') {{section.description}}

      SectionsViewItems(:section='section' :sectionId='`section-${index}`' :itemAos='itemAos' :itemAosDuration='itemAosDuration' :itemAosConstant='itemAosConstant')
</template>

<script>
import SectionsViewItems from '~/components/SectionsViewItems.vue'

export default {
  components: {
    SectionsViewItems,
  },
  props: {
    sections: {
      type: Array,
      required: true,
    },
    itemAos: {
      type: String,
      required: true,
    },
    itemAosDuration: {
      type: Number,
      required: true,
    },
    itemAosConstant: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getAOS(element, align) {
      if (element === 'title') {
        if (align === 'left') return 'fade-right'
        if (align === 'right') return 'fade-left'
        if (align === 'center') return 'zoom-out'
      } else if (element === 'description') {
        if (align === 'left') return 'zoom-in-right'
        if (align === 'right') return 'zoom-in-left'
        if (align === 'center') return 'zoom-out'
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
</style>
