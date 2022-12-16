import IntersectionObserverAdmin from 'intersection-observer-admin'

window.observer = new IntersectionObserverAdmin()

if (process.browser) {
  // garbage collect between routes
  window.onNuxtReady((app) => {
    window.$nuxt.$on('route::updated', () => {
      window.observer.destroy()
      window.observer = new IntersectionObserverAdmin()
    })
  })
}
