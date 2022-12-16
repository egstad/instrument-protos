export const state = () => ({
  isTouch: null,
  isCursor: null,
  isMobile: null,
  dpi: null,
  hideAnimations: null,
  winWidth: null,
  winHeight: null,
  docWidth: null,
  docHeight: null,
})

export const mutations = {
  setDevice(state, val) {
    state.isTouch = val.isTouch
    state.isCursor = val.isCursor
    state.isMobile = val.isMobile
    state.dpi = val.dpi
  },
  setPreferredTheme(state, boolean) {
    state.preferredTheme = boolean
  },
  setPrefersReducedMotion(state, boolean) {
    state.hideAnimations = boolean
  },
  setDimensions(state, val) {
    state.winWidth = val.winWidth
    state.winHeight = val.winHeight
    state.docWidth = val.docWidth
    state.docHeight = val.docHeight
  },
}
