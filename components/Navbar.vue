<template>
  <nav>
    <div class="nav-left">
      <nuxt-link to="/">Andrés Del Carpio</nuxt-link>
    </div>

    <div class="nav-right">
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.nav-right {
  a {
    margin: 0 1.5rem;
  }
}
</style>
