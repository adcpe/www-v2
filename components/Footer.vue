<template>
  <footer
    class="font-lato flex flex-row flex-wrap justify-between items-center mx-10 my-6 md:justify-center"
  >
    <div class="flex-grow text-center">
      <a class="hover:text-links" href="mailto:hey@andresdc.net">
        hey@andresdc.net
      </a>
    </div>
    <div class="flex flex-row flex-grow justify-center content-end my-6">
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
          url: 'https://www.linkedin.com/in/andres-dc/',
          title: 'Linkedin',
          icon: 'linkedin',
        },
        {
          url: 'https://twitter.com/Andres__DC',
          title: 'Twitter',
          icon: 'twitter',
        },
      ],
    }
  },
}
</script>
