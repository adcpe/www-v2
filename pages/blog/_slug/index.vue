<template>
  <div class="post">
    <h1 id="postTitle">{{ post.title }}</h1>
    <p>
      <b>Posted</b> {{ formatDate(post.publishedOn) }}
      <span v-if="post.updatedAt">
        <b>Updated</b> {{ formatDate(post.updatedOn) }}
      </span>
    </p>
    <div class="md" v-html="body" />
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import formatDate from '@/plugins/formatDate'
import renderMD from '@/plugins/markdown'

export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == 'post' && slug.current == '${params.slug}']{ title, body, publishedOn, updatedOn, 'slug': slug.current }[0]`
    const post = await $sanity.fetch(query)

    return { post }
  },
  data() {
    return {
      title: null,
      body: null,
    }
  },
  mounted() {
    this.title = document.querySelector('#postTitle').innerHTML
    this.body = renderMD(this.post.body)
  },
  methods: {
    formatDate: (date) => formatDate(date),
  },
  head() {
    return { title: `${this.title} | Andrés Del Carpio` }
  },
}
</script>

<style lang="scss">
.post {
  margin: 2rem auto;
  width: 768px;

  & > h1 {
    margin: 0;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  & > p {
    text-align: center;
    margin: 0 0 2rem;
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
