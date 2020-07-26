<template>
  <div class="prose">
    <h1>{{ title }}</h1>
    <main v-html="body" />
  </div>
</template>

<script>
import groq from 'groq'
import renderMD from '../../../plugins/markdown'
import sanity from '../../../plugins/sanity'

const query = groq`
  *[_type == 'post' && slug.current == $slug]
    {
      title, body, publishedAt, updatedAt, 'slug': slug.current
    }[0]
`

export default {
  async asyncData({ params }) {
    const post = await sanity.fetch(query, params)
    return {
      title: post.title,
      body: post.body,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      slug: post.slug,
    }
  },
  data() {
    return {
      body: null,
      title: null,
      publishedAt: null,
      updatedAt: null,
      slug: null,
    }
  },
  created() {
    this.body = renderMD(this.body)
  },
  beforeMount() {},
  head() {
    return { title: `${this.title} | Andrés DC` }
  },
}
</script>

<style lang="scss">
.prose {
  width: 75%;
  margin: 0 auto;
}
</style>
