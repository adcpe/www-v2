<template>
  <footer>
    <a
      class="link"
      href="https://nuxtjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      title="Built with Nuxt"
    >
      <img class="logo-img" src="/images/nuxt.svg" alt="Nuxt" />
    </a>
    <a
      class="link"
      href="https://github.com/andres-dc"
      target="_blank"
      rel="noopener noreferrer"
      title="Code available on Github"
    >
      <img class="logo-img" src="/images/github.svg" alt="Github" />
    </a>
    <a
      class="link"
      href="https://www.netlify.com/"
      target="_blank"
      rel="noopener noreferrer"
      title="Hosted on Netlify"
    >
      <img class="logo-img" src="/images/netlify.svg" alt="Netlify" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer,
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  padding: 2rem 0;
}

.link {
  margin: 0 1rem;
  padding: 1rem;
}

.logo-img {
  height: 2rem;
}
</style>
