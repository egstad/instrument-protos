<template>
  <div class="">
    <div class="t-1 container">
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
    <section ref="sticky" class="sticky">
      <table>
        <tr class="data t-mono t-2">
          <td class="data__key">y <em>[position]</em></td>
          <td class="data__colon">&nbsp;:&nbsp;</td>
          <td class="data__val">{{ y }}</td>
        </tr>
        <tr>
          <td class="data__key">v <em>[velocity]</em></td>
          <td class="data__colon">&nbsp;:&nbsp;</td>
          <td class="data__val">{{ v }}</td>
        </tr>
      </table>
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
  /* min-height: 1500vh; */
  padding: 4vw;
}

.t-1 {
  font-family: sans-serif;
  line-height: 1.3;
  font-size: clamp(1.2em, 4vw, 2em);
  max-width: 50ch;
}

/* pre {
  display: inline-blockblock;
} */

/* code {
  background: hsl(65, 90%, 75%);
  border-radius: 0.2em;
  padding: 0 0.3em;
} */

.sticky {
  padding-bottom: 4vw;
}

.data {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: monospace;
  color: white;
}

.data em {
  opacity: 0.6;
}

.data__key {
  background: black;
  padding: 0 32px;
  white-space: nowrap;

  /* width: clamp(150px, 8vw, 300px); */
}
.data__colon {
  background: gray;
  white-space: nowrap;
}
.data__val {
  background: blue;
  padding: 0 32px;
  width: 100%;
}
</style>
