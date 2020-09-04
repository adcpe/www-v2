<template>
  <main>
    <div>
      <h2>Latest</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ path: `/blog/${post.slug}` }">
            <div>{{ post.title }}</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import groq from 'groq'
import sanity from '../../plugins/sanity'

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

<style></style>
