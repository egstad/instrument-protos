<template>
  <div class="container">
    <div class="t-1">
      <p>
        Every page leverages <code>GSAP</code>'s <code>ScrollTrigger</code> and
        <code>ScrollSmoother</code> packages. These packages make it easy to
        create scroll-based animations while ensuring smooth scrolling across
        all devices.
      </p>
      <p>
        Scroll position, velocity, and more is bound to
        <code>window.scroll</code>.
      </p>
    </div>
    <section ref="sticky" class="t-1 sticky">
      <hr />
      <code>y</code> : <code>{{ y }}</code>
      <hr />
      <code>v</code> : <code>{{ v }}</code>
      <hr />
    </section>
  </div>
</template>

<script>
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'

export default {
  name: 'IndexPage',
  data() {
    return {
      y: 0,
      v: 0,
      sticky: null,
    }
  },
  mounted() {
    this.$nuxt.$emit('page::mounted')

    this.sticky = ScrollTrigger.create({
      // trigger: this.$el,
      pin: this.$refs.sticky,
      start: 'bottom bottom',
      end: '+=30000',
    })

    this.onScroll()
    window.addEventListener('scroller', this.onScroll, false)
    window.addEventListener('scroll::stop', this.onScroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroller', this.onScroll, false)
    window.removeEventListener('scroll::stop', this.onScroll, false)
  },
  methods: {
    onScroll(ev) {
      this.y = window.scroll.y
      this.v = window.scroll.v
    },
  },
}
</script>

<style scoped>
.container {
  min-height: 1500vh;
  padding: 4vw;
}

.t-1 {
  font-family: sans-serif;
  line-height: 1.3;
  font-size: clamp(1.2em, 4vw, 2em);
  max-width: 50ch;
}

pre {
  display: inline-blockblock;
}

code {
  background: hsl(65, 90%, 75%);
  border-radius: 0.2em;
  padding: 0 0.3em;
}

.sticky {
  padding-bottom: 4vw;
}
</style>
