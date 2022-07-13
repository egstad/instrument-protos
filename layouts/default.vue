<template>
  <div class="wrap">
    <nav class="fixed-nav">
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/scroll-smooth">scroll</NuxtLink>
    </nav>

    <div id="scroll-wrap">
      <div id="scroll-content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  watch: {
    $route(newRoute) {
      if (newRoute) this.$nuxt.$emit('route::updated')
    },
  },
}
</script>

<style>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
