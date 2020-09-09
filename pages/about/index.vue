<template>
  <main>
    I'm a Full Stack Web Developer from Lima, Peru.
    <div>
      <a v-for="link in links" :key="link.title" :href="link.url">
        {{ link.title.toLowerCase() }}
      </a>
    </div>
  </main>
</template>

<script>
import socials from '../../static/socials.json'

export default {
  asyncData() {
    const links = socials.data
    return { links }
  },
}
</script>

<style></style>
