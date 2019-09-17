<template lang='pug'>
  CenterView
    h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | Kasper Henningsen
    .icons
      a(href='https://twitter.com/probablykasper')
        TwitterIcon
      a(href='https://github.com/probablykasper')
        GitHubIcon
      a(href='https://instagram.com/probablykasper')
        InstagramIcon
      a(href='https://www.linkedin.com/in/kasper-henningsen')
        LinkedInIcon
</template>

<script>
import CenterView from '~/components/CenterView.vue'
import { EventBus } from '~/plugins/event-bus.js'

import TwitterIcon from '~/assets/icons/twitter.svg'
import GitHubIcon from '~/assets/icons/github.svg'
import InstagramIcon from '~/assets/icons/instagram.svg'
import LinkedInIcon from '~/assets/icons/linkedin.svg'

export default {
  head: {
    title: 'kasper.space',
  },
  components: {
    CenterView,
    TwitterIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
  },
  mounted() {
    EventBus.$emit('page-background-remove', '#000000')
  },
}
</script>

<style lang='sass' scoped>
  .icons
    margin: 20px 0px
    a
      margin: 0px 8px
      display: inline-block
      svg
        height: 22px
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
        padding: 10px
        border-radius: 2px
        transform: scale(0.9)
        opacity: 0.7
        *
          fill: #ffffff
      &:hover svg
        transform: scale(1)
        opacity: 1
</style>
