import windowDimensions from '~/plugins/device/dimensions.client'

const windowResize = {
  init() {
    this.resizeHandler = this.throttleResize.bind(this)
    this.timeout = false
    this.delay = 200

    window.addEventListener('resize', this.resizeHandler)
  },
  throttleResize() {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      windowDimensions.set()
      window.$nuxt.$emit('window::resize')
    }, this.delay)
  },
}

window.onNuxtReady((app) => {
  windowResize.init()
})
