<template>
  <div class="container">
    <div v-for="box in items" ref="box" :key="box" class="box">{{ text }}</div>
  </div>
</template>

<script>
import { gsap } from 'gsap-trial'
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { SmootherObservable } from '../SmootherObservable'

export default {
  name: 'IndexPage',
  data() {
    return {
      items: 12,
      text: null,
      animaiontsCreated: false,
      SmootherObservable,
    }
  },
  watch: {
    'SmootherObservable.smoother': {
      immediate: true,
      handler(smoother) {
        if (smoother && !this.animationsCreated) {
          this.createAnimations()
        }
      },
    },
  },
  methods: {
    createAnimations() {
      this.$refs.box.forEach((el) => {
        gsap.from(el, {
          rotate: Math.random() * 90,
          opacity: 0,
          scrollTrigger: {
            onEnter: () => {
              el.innerText = 'onEnter'
            },
            onLeave: () => {
              el.innerText = 'onLeave'
            },
            onEnterBack: () => {
              el.innerText = 'onEnterBack'
            },
            onLeaveBack: () => {
              el.innerText = 'onLeaveBack'
            },
            toggleActions: 'play pause none reset',
            markers: true,
            start: 'top 90%',
            end: 'bottom 10%',
            trigger: el,
            scrub: true,
          },
        })
      })
    },
  },
}
</script>

<style>
.container {
  /* height: 200vh; */
}

.box {
  width: 250px;
  height: 250px;
  /* top: 50%;
  left: 50%; */
  text-align: center;
  line-height: 250px;
  color: black;
  /* transform: translate3d(-50%, -50%, 0); */
  background-color: #a7e8bd;
  margin-top: 250px;
}
</style>
