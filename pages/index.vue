<template>
  <div class="container t-1">
    <section>
      <nav v-for="nav in navs" :key="nav.id">
        <header>{{ nav.title }}</header>
        <ul>
          <li v-for="link in nav.links" :key="`${nav.id}-${link.name}`">
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      navs: [
        {
          title: 'Feature',
          id: 1,
          links: [
            {
              name: 'Device detection',
              url: '/feature/device',
            },
            {
              name: 'Scroll',
              url: '/feature/scroll',
            },
            {
              name: 'Theme detection',
              url: '/feature/theme',
            },
            {
              name: 'Motion preferences',
              url: '/feature/motion',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.$nuxt.$emit('page::mounted')
    window.addEventListener('scroller', this.onScroll, false)
    window.addEventListener('scroll::stop', this.onScroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroller', this.onScroll, false)
    window.removeEventListener('scroll::stop', this.onScroll, false)
  },
  methods: {
    onScroll(ev) {
      console.log(window.scroll.y)
    },
  },
}
</script>

<style>
.container {
  padding-top: 8vw;
}
</style>
