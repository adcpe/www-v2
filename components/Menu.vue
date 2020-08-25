<template>
  <nav class="menu" role="navigation" aria-label="main navigation">
    <div>
      <nuxt-link to="/">ADC</nuxt-link>
      <h2>Latest blog posts</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ path: `/blog/${post.slug}` }">
            <div>{{ post.title }}</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div></div>
  </nav>
</template>

<script>
import groq from 'groq'
import sanity from '../plugins/sanity'

export default {
  data: () => {
    return { posts: {} }
  },
  async beforeMount() {
    const query = groq`
    *[_type == 'post'] {title, 'slug': slug.current} | order(publishedAt desc)
    `

    this.posts = await sanity.fetch(query, {})
  },
}
</script>

<style>
.menu {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
