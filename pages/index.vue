<template>
  <div class="container">
    <main>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ path: `/blog/${post.slug}` }">
            <div class="content">
              {{ post.title }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import groq from 'groq'
import sanity from '../plugins/sanity'

export default {
  async asyncData() {
    const query = groq`
    *[_type == 'post'] {title, 'slug': slug.current} | order(publishedAt desc)
    `

    const posts = await sanity.fetch(query, {})
    return { posts }
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
