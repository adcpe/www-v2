<template>
  <main>
    <div>
      <h1>Andrés Del Carpio</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
    <div>
      <a v-for="link in links" :key="link.title" :href="link.url">
        {{ link.title.toLowerCase() }}
      </a>
    </div>
  </main>
</template>

<script>
import socials from '../static/socials.json'

export default {
  asyncData() {
    const links = socials.data
    return { links }
  },
}
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  min-height: 80vh;
  width: 768px;
}

@media screen and (max-width: 767px) {
  main {
    width: 100%;
  }
}
</style>
