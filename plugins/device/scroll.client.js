import { gsap } from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

class Scroller {
  constructor(element) {
    this.x = 0
    this.y = 0
    this.v = 0
    this.el = element
    this.scroller = null

    this.initScrollSmoother()
    window.$nuxt.$on('route::updated', this.kill)
    window.$nuxt.$on('page::mounted', this.initScrollSmoother)
  }

  initScrollSmoother = () => {
    this.scroller = ScrollSmoother.create({
      wrapper: '#scroll-wrap',
      content: '#scroll-content',
      smooth: 0.618,
      smoothTouch: 0.1,
      effects: true,
      onUpdate: (self) => {
        this.y = self.scrollTop()
        this.v = self.getVelocity()
        this.el.dispatchEvent(new Event('scroller'))
      },
    })
  }

  kill = () => {
    this.scroller.kill()
  }
}

window.onNuxtReady((app) => {
  window.scroll = new Scroller(window)
})
