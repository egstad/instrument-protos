import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollSmoother from '~/plugins/gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother)

// window.scroll = new ScrollTrigger({
//   target: document.querySelector('#scroll-container'), // element container to scroll
//   scrollEase: 0.1, // scroll speed
//   maxOffset: 500,
// })

console.log(ScrollSmoother)

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
})
