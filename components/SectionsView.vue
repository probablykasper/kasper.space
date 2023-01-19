<template lang='pug'>
div
  template(v-for='section, index in sections')
    .section(:class='`align-${section.align}`' :id='`section-${index}`')

      h1.section-title(:data-aos='getAOS("title", section.align)' data-aos-duration='800' data-aos-delay='0' :data-aos-anchor='`#section-${index}`') {{section.title}}
      p.section-description(:data-aos='getAOS("description", section.align)' data-aos-duration='800' data-aos-delay='100' :data-aos-anchor='`#section-${index}`') {{section.description}}
      Button.button(v-if='section.title === "Development"' text='GitHub' url='https://github.com/probablykasper')
        GitHubIcon
      Button.button(v-if='section.title === "Video"' text='See More' url='https://www.youtube.com/playlist?list=PL84-DNDSU8p5WP6jA7hvOCV9dIKBNjdCS')
        YouTubeIcon
      Button.button(v-if='section.title === "Lacuna"' text='Website' url='https://lacuna.to')
        LacunaIcon
      Button.button(v-if='section.title === "Cover Art"' text='See More' url='/art')
        ArtIcon

      SectionsViewItems(:section='section' :sectionId='`section-${index}`' :itemAos='itemAos' :itemAosAddedDelay='itemAosAddedDelay')
</template>

<script>
import SectionsViewItems from '~/components/SectionsViewItems.vue'
import Button from '~/components/Button.vue'
import GitHubIcon from '~/assets/icons/github.svg'
import YouTubeIcon from '~/assets/icons/youtube.svg'
import LacunaIcon from '~/assets/icons/lacuna.svg'
import ArtIcon from '~/assets/icons/art.svg'

export default {
  components: {
    SectionsViewItems,
    Button,
    GitHubIcon,
    YouTubeIcon,
    LacunaIcon,
    ArtIcon,
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
    itemAosAddedDelay: {
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

<style lang='sass' scoped>
.section
  position: relative
  padding-bottom: 100px
  &.align-center
    text-align: center
    .section-title, .section-description
      margin-left: auto
      margin-right: auto
  &.align-right
    text-align: right
    .section-title, .section-description
      margin-left: auto
  .section-description
    @media screen and (max-width: 600px)
      font-size: 14px
    max-width: 540px
    margin-bottom: 20px
  .button
    margin-bottom: 20px
</style>
