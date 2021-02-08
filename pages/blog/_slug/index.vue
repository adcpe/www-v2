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
    return { title: `${this.title} | Andrés Del Carpio | Full Stack Developer` }
  },
}
</script>

<style lang="scss">
.post {
  @apply lg:w-1/2 my-2 lg:mx-auto mx-4 text-base;

  & > h1,
  & > p {
    @apply text-center my-2 mx-auto;
  }

  & > h1 {
    @apply font-bold text-5xl;
  }

  & > p {
    @apply text-sm;
  }

  a {
    @apply text-blue-500;

    &:hover {
      @apply text-links;
    }
  }

  .md {
    @apply text-left;

    * {
      @apply my-4 mx-auto;
    }

    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-4xl;
    }

    h3 {
      @apply text-3xl;
    }

    h4 {
      @apply text-2xl;
    }

    h5 {
      @apply text-xl;
    }

    h6 {
      @apply text-lg;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply font-bold;
    }

    pre {
      @apply w-11/12;
    }
  }
}
</style>
