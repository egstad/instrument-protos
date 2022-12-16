<template>
  <div>
    <section ref="sticky" class="sticky">
      <table>
        <tbody>
          <TableRow v-for="(item, index) in items" :key="item.name + index">
            <template #property>{{ item.name }}</template>
            <template #value>{{ item.value }}</template>
          </TableRow>
        </tbody>
      </table>
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
    colorDepth() {
      return this.$store.state.device.colorDepth
    },
    pixelDepth() {
      return this.$store.state.device.pixelDepth
    },
    dpi() {
      return this.$store.state.device.dpi
    },
    showAnimations() {
      return this.$store.state.device.showAnimations
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

    items() {
      return [
        {
          name: 'isCursor',
          value: this.isCursor,
        },
        {
          name: 'isTouch',
          value: this.isTouch,
        },
        {
          name: 'isMobile',
          value: this.isMobile,
        },
        {
          name: 'colorDepth',
          value: this.colorDepth,
        },
        {
          name: 'pixelDepth',
          value: this.pixelDepth,
        },
        {
          name: 'dpi',
          value: this.dpi,
        },
        {
          name: 'showAnimations',
          value: this.showAnimations,
        },
        {
          name: 'winWidth',
          value: this.winWidth,
        },
        {
          name: 'winHeight',
          value: this.winHeight,
        },
        {
          name: 'docWidth',
          value: this.docWidth,
        },
        {
          name: 'docHeight',
          value: this.docHeight,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped></style>
