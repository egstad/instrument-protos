const deviceInfo = {
  init() {
    this.set()
    this.updateOnResize = this.set.bind(this)

    window.addEventListener('resize', this.updateOnResize)
  },
  get() {
    return {
      isTouch: 'ontouchstart' in window || matchMedia('(hover: none)').matches,
      isCursor: 'onmousedown' in document.documentElement,
      dpi: window.devicePixelRatio,
      isMobile:
        /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(
          window.navigator.userAgent
        ),
    }
  },
  set() {
    window.$nuxt.$store.commit('device/setDevice', this.get())
  },
}

window.onNuxtReady((app) => {
  deviceInfo.init()
})
