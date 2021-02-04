<template>
  <footer
    class="font-lato flex flex-row justify-between items-center mx-10 my-6"
  >
    <div class="flex flex-row justify-center content-end my-6">
      <a
        v-for="(link, i) in links"
        :key="i"
        :href="link.url"
        :title="link.title"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2"
      >
        <img class="h-6" :src="`/images/${link.icon}.svg`" :alt="link.title" />
      </a>
    </div>
    <div>
      <a href="mailto:hey@andresdc.net">hey@andresdc.net</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          url: 'https://github.com/andres-dc',
          title: 'Github',
          icon: 'github',
        },
        {
          url: 'https://gitlab.com/andres-dc',
          title: 'Gitlab',
          icon: 'gitlab',
        },
        {
          url: 'https://twitter.com/Andres__DC',
          title: 'Twitter',
          icon: 'twitter',
        },
        {
          url: 'https://www.linkedin.com/in/andres-dc/',
          title: 'Linkedin',
          icon: 'linkedin',
        },
      ],
    }
  },
}
</script>
