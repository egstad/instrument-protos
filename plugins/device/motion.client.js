// Detect Motion https://www.npmjs.com/package/@egstad/detect-motion
import detectMotion from '@egstad/detect-motion'

const preferredTheme = {
  init() {
    window.addEventListener('reducedMotionUpdated', this.setPreference)
    detectMotion.watch()
  },
  setPreference(ev) {
    window.$nuxt.$store.commit(
      'device/setPrefersReducedMotion',
      !ev.detail.reduce
    )
  },
}

window.onNuxtReady((app) => {
  preferredTheme.init()
})
