<template>
  <div class="app">
    <Navbar class="navbar" />
    <Nuxt class="nuxt" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default {
  components: {
    Footer,
    Navbar,
  },
}
</script>

<style>
.app {
  min-height: 100vh;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #321325;
  background: #f9f8f8;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@media screen and (max-width: 767px) {
}
</style>
