<template>
  <main>
    <div>
      <h1>Latest</h1>
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="{ path: `/blog/${post.slug}` }"
      >
        <div class="post-link">
          <h1>{{ post.title }}</h1>
          <span>{{ post.publishedAt }}</span>
          <span>{{ post.updatedAt }}</span>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import groq from 'groq'
import sanity from '../../plugins/sanity'

const query = groq`
    *[_type == 'post'] {title, 'slug': slug.current, publishedAt, updatedAt} | order(publishedAt desc)
    `

export default {
  async asyncData() {
    const posts = await sanity.fetch(query, {})

    return { posts }
  },
}
</script>

<style>
.post-link {
  color: black;
  margin: 1rem auto;
  padding: 1rem 3rem;
  border: 1px black solid;
}
</style>
