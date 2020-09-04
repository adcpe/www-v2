<template>
  <footer>
    <a
      class="link"
      href="https://nuxtjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      title="Built with Nuxt"
    >
      <img class="logo" src="../assets/images/nuxt.svg" alt="Nuxt" />
    </a>
    <a
      class="link"
      href="https://github.com/andres-dc"
      target="_blank"
      rel="noopener noreferrer"
      title="Code available on Github"
    >
      <img class="logo" src="../assets/images/github.svg" alt="Github" />
    </a>
    <a
      class="link"
      href="https://www.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
      title="Hosted on Netlify"
    >
      <img class="logo" src="../assets/images/netlify.svg" alt="Netlify" />
    </a>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin: 2rem auto;
}

.link {
  margin: 0 1rem;
  padding: 1rem;
}

.logo {
  height: 2rem;
}
</style>
