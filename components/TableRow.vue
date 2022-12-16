<template>
  <tr class="row">
    <td class="row__key"><slot name="property"></slot></td>
    <!-- <td class="row__colon"></td> -->
    <td :class="['row__val', setClasses($slots.value)]">
      <slot name="value"></slot>
    </td>
  </tr>
</template>

<script>
export default {
  methods: {
    setClasses(val) {
      const key = val[0].text
      const classes = []

      switch (key) {
        case 'true':
          classes.push('true')
          break

        case 'false':
          classes.push('false')
          break

        default:
          break
      }
      return [classes]
    },
  },
}
</script>

<style scoped>
.row {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: var(--mono);
  color: white;
  border-bottom: 1px solid var(--background);
  line-height: 1.6;
  font-size: clamp(0.8rem, 1.5vmax, 2rem);
}

.row em {
  opacity: 0.6;
}

.row__key {
  background: black;
  padding: 0 1em;
  white-space: nowrap;
}
.row__colon {
  background: gray;
  white-space: nowrap;
}
.row__val {
  background: #4320cf;
  padding: 0 1em;
  width: 100%;
}

.row__val.true {
  background-color: #22a50d;
}
.row__val.false {
  background-color: #d62e09;
}
</style>
