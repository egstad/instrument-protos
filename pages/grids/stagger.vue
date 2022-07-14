<template>
  <div class="grid">
    <div
      v-for="box in items"
      ref="box"
      :key="box"
      :class="['box', `box-${box}`]"
      :data-lag="((box - 1) % 4) * 0.05"
    >
      <!--  -->
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
      items: 40,
      text: null,
      timelines: [],
      observerOptions: { rootMargin: `0px 0px`, threshold: 0 },
    }
  },
  mounted() {
    this.$nuxt.$emit('page::mounted')

    setTimeout(() => {
      this.$refs.box.forEach((el) => {
        this.inView(el)
        // window.observer.addEnterCallback(el, this.inView)
        // window.observer.observe(el, this.observerOptions)
      })
    }, 0)
  },
  beforeDestroy() {
    this.timelines.forEach((tl) => tl.kill())

    // this.$refs.box.forEach((el) => {
    //   window.observer.unobserve(el, this.observerOptions)
    // })
  },
  methods: {
    inView(el) {
      const tl = gsap.from(el, {
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: '10% bottom',
          end: 'center 0%',
          toggleActions: 'play pause resume reset',
        },
      })

      this.timelines.push(tl)
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
  margin-bottom: 8vw;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: clamp(4px, 0.25vw, 16px);
}
</style>
