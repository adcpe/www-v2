<template>
  <div class="min-h-screen bg-bggray border-4 border-black rounded m-1">
    <div class="min-h-full container-auto mx-auto">
      <Navbar />
      <main>
        <Nuxt />
      </main>
      <Footer />
    </div>
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
