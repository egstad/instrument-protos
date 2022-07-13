<template>
  <div class="container">
    <p v-for="box in items" ref="box" :key="box">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque
      odio expedita quaerat fugit quod ducimus ad corporis facere cumque,
      veritatis quo laboriosam natus laborum, repellendus dolorum quia vitae?
      Tempora?
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      items: 4,
      text: null,
      animaiontsCreated: false,
    }
  },
  mounted() {
    this.$nuxt.$emit('page::mounted')
    window.addEventListener('scroller', this.onScroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroller', this.onScroll, false)
  },
  methods: {
    onScroll(ev) {
      console.log(window.scroll.y)
    },
  },
}
</script>

<style>
p {
  font-size: 10vw;
  margin-top: 10vw;
}
</style>
