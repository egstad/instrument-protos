export const state = () => ({
  isTouch: null,
  isCursor: null,
  isMobile: null,
  colorDepth: null,
  pixelDepth: null,
  dpi: null,
  showAnimations: null,
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
    state.colorDepth = val.colorDepth
    state.pixelDepth = val.pixelDepth
    state.dpi = val.dpi
  },
  setPreferredTheme(state, boolean) {
    state.preferredTheme = boolean
  },
  setPrefersReducedMotion(state, boolean) {
    state.showAnimations = boolean
  },
  setDimensions(state, val) {
    state.winWidth = val.winWidth
    state.winHeight = val.winHeight
    state.docWidth = val.docWidth
    state.docHeight = val.docHeight
  },
}
