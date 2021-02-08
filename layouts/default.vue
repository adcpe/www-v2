<template>
  <div
    class="min-h-screen flex flex-col container-auto bg-bggray border-4 border-black rounded m-1 font-lato"
  >
    <Navbar />
    <Nuxt />
    <Footer />
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
