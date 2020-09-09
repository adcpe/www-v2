<template>
  <nav>
    <div class="nav-left">
      <nuxt-link to="/">Andrés Del Carpio</nuxt-link>
    </div>

    <div class="nav-right">
      <!-- <nuxt-link to="/about">About</nuxt-link> -->
      <nuxt-link to="/blog">Blog</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  background: transparent;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  position: sticky;
  top: 0;
  background: #f9f8f8;
}

.nav-right {
  a {
    margin: 0 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  nav {
    bottom: 0;
  }
}
</style>
