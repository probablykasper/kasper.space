<template lang='pug'>
  CenterView
    h1(data-aos='zoom-out' data-aos-duration='750' data-aos-delay='0')
      | Kasper Henningsen
    .icons
      a(href='https://bsky.app/profile/kasper.space' aria-label="BlueSky" data-aos='zoom-out' data-aos-duration='750' data-aos-delay='100')
        BlueSkyIcon
      a(href='https://twitter.com/probablykasper' aria-label="Twitter" data-aos='zoom-out' data-aos-duration='750' data-aos-delay='100')
        TwitterIcon
      a(href='https://github.com/probablykasper' aria-label="GitHub" data-aos='zoom-out' data-aos-duration='750' data-aos-delay='150')
        GitHubIcon
      a(href='https://instagram.com/probablykasper' aria-label="Instagram" data-aos='zoom-out' data-aos-duration='750' data-aos-delay='200')
        InstagramIcon
      a(href='https://www.linkedin.com/in/kasper-henningsen' aria-label="LinkedIn" data-aos='zoom-out' data-aos-duration='750' data-aos-delay='250')
        LinkedInIcon
</template>

<script>
import CenterView from '~/components/CenterView.vue'
import { EventBus } from '~/plugins/event-bus.js'

import BlueSkyIcon from '~/assets/icons/bluesky.svg'
import TwitterIcon from '~/assets/icons/twitter.svg'
import GitHubIcon from '~/assets/icons/github.svg'
import InstagramIcon from '~/assets/icons/instagram.svg'
import LinkedInIcon from '~/assets/icons/linkedin.svg'

export default {
  components: {
    CenterView,
    BlueSkyIcon,
    TwitterIcon,
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
  },
  head: {
    title: 'kasper.space',
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
        width: 22px
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
