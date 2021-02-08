<template>
  <div class="min-h-full font-lato flex-1">
    <h1 class="text-4xl font-bold text-center my-10">Blog Posts</h1>
    <div class="w-1/2 m-auto flex flex-col justify-center content-center">
      <nuxt-link
        v-for="(post, i) in posts"
        :key="i"
        :to="{ path: `/blog/${post.slug}` }"
        class="hover:text-links my-2"
      >
        <div>
          <h1 class="text-2xl font-semibold">{{ post.title }}</h1>
          <span><b>Posted</b> {{ formatDate(post.publishedOn) }}</span>
          <span v-if="post.updatedOn">
            <b>Updated</b> {{ formatDate(post.updatedOn) }}</span
          >
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import formatDate from '../../plugins/formatDate'

export default {
  async asyncData({ $sanity }) {
    const query = groq`*[_type == 'post' && isPublished == true] {title, 'slug': slug.current, publishedOn, updatedOn} | order(publishedOn desc)`
    const posts = await $sanity.fetch(query)

    return { posts }
  },
  methods: {
    formatDate: (date) => formatDate(date),
  },
  head() {
    return { title: 'Blog | Andrés Del Carpio | Full Stack Developer' }
  },
}
</script>
