<template>
  <div class="post">
    <h1>{{ title }}</h1>
    <div class="md" v-html="body" />
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
    return { title: `${this.title} | Andrés Del Carpio` }
  },
}
</script>

<style lang="scss">
.post {
  margin: 2rem auto;
  width: 768px;

  h1 {
    margin: 0 0 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
}

.md {
  text-align: left;

  * {
    margin: 1rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  pre {
    width: 90%;
  }
}
</style>
