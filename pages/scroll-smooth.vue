<template>
  <div class="grid">
    <div
      v-for="box in items"
      ref="box"
      :key="box"
      :class="['box', `box-${box}`]"
      :data-lag="((box - 1) % 4) * 0.05"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap-trial'

export default {
  name: 'IndexPage',
  data() {
    return {
      items: 120,
      text: null,
      timelines: [],
    }
  },
  mounted() {
    this.$nuxt.$emit('page::mounted')
    // this.triggerAnimationOnScroll()
  },
  beforeDestroy() {
    this.timelines.forEach((tl) => tl.kill())
  },
  methods: {
    triggerAnimationOnScroll() {
      const els = this.$refs.box

      els.forEach((el) => {
        const tl = gsap.from(el, {
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: 'center 100%',
            end: 'center 0%',
            markers: true,
            scrub: true,
          },
        })

        this.timelines.push(tl)
      })
    },
  },
}
</script>

<style>
.box {
  width: 100%;
  padding-top: 100%;
  text-align: center;
  line-height: 250px;
  color: black;
  background-color: pink;
  margin-top: 8vw;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: clamp(4px, 0.25vw, 16px);
}
</style>
