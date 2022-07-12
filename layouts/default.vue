<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
// Note that we are setting gsap-trial to be transpiled in nuxt.config.js
import { gsap } from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import { SmootherObservable } from '../SmootherObservable'

export default {
  name: 'DefaultLayout',
  mounted() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // set observable so we can watch for it in child components
    SmootherObservable.smoother = ScrollSmoother.create({
      speed: 2,
    })
  },
}
</script>

<style>
* {
  position: relative;
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}
</style>
