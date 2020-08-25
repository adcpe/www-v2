<template>
  <div class="container">
    <Menu class="menu" />
    <main>
      <h1>hello world</h1>
    </main>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  components: { Menu },
}
</script>

<style lang="scss">
.container {
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-areas: 'menu main';
  grid-template-columns: 33% 1fr;
}

.menu {
  grid-area: 'menu';
}

.main {
  grid-area: 'main';
  margin: 0 auto;
}
</style>
