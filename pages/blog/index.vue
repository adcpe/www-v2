<template>
  <div class="blog-posts">
    <h1>Latest Blog Posts</h1>
    <div class="post-links">
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="{ path: `/blog/${post.slug}` }"
      >
        <div class="post-link">
          <h1>{{ post.title }}</h1>
          <span><b>Posted</b> {{ formatDate(post.publishedAt) }}</span>
          <span v-if="post.updatedAt">
            <b>Updated</b> {{ formatDate(post.updatedAt) }}</span
          >
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import groq from 'groq'
import sanity from '../../plugins/sanity'
import formatDate from '../../plugins/formatDate'

const query = groq`
    *[_type == 'post'] {title, 'slug': slug.current, publishedAt, updatedAt} | order(publishedAt desc)
    `

export default {
  async asyncData() {
    const posts = await sanity.fetch(query, {})

    return { posts }
  },
  methods: {
    formatDate: (date) => formatDate(date),
  },
}
</script>

<style lang="scss" scoped>
.blog-posts {
  margin: 3rem auto;
  width: 80%;

  & > h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .post-links {
    margin: 0 auto;
    width: 80%;

    .post-link {
      color: black;
      margin: 0.5rem auto;
      padding: 0.5rem 3rem;

      & > h1 {
        font-size: 1.2rem;
      }

      & > span {
        font-size: 0.9rem;
      }

      &:hover {
        color: #f48498;
      }
    }
  }
}
</style>
