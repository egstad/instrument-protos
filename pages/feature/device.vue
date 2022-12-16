<template>
  <div>
    <section ref="sticky" class="t-1 sticky">
      <hr />
      <code>isCursor</code> : <code>{{ isCursor }}</code>
      <hr />
      <code>isTouch</code> : <code>{{ isTouch }}</code>
      <hr />
      <code>isMobile</code> : <code>{{ isMobile }}</code>
      <hr />
      <code>dpi</code> : <code>{{ dpi }}</code>
      <hr />
      <code>hideAnimations</code> : <code>{{ hideAnimations }}</code>
      <hr />
      <code>winWidth</code> : <code>{{ winWidth }}</code>
      <hr />
      <code>winHeight</code> : <code>{{ winHeight }}</code>
      <hr />
      <code>docWidth</code> : <code>{{ docWidth }}</code>
      <hr />
      <code>docHeight</code> : <code>{{ docHeight }}</code>
      <hr />
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageDevice',
  computed: {
    isCursor() {
      return this.$store.state.device.isCursor
    },
    isTouch() {
      return this.$store.state.device.isTouch
    },
    isMobile() {
      return this.$store.state.device.isMobile
    },
    dpi() {
      return this.$store.state.device.dpi
    },
    hideAnimations() {
      return this.$store.state.device.hideAnimations
    },
    winWidth() {
      return this.$store.state.device.winWidth
    },
    winHeight() {
      return this.$store.state.device.winHeight
    },
    docWidth() {
      return this.$store.state.device.docWidth
    },
    docHeight() {
      return this.$store.state.device.docHeight
    },
  },
}
</script>

<style lang="scss" scoped></style>
