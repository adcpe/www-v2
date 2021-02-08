<template>
  <nav class="flex flex-row justify-between items-center mx-10 my-8">
    <div class="nav-left">
      <nuxt-link
        to="/"
        class="select-none tracking-wider font-titillium font-semibold text-6xl hover:text-links"
      >
        ADC
      </nuxt-link>
    </div>

    <div class="nav-right font-normal text-2xl">
      <nuxt-link to="/blog" class="hover:text-links">Blog</nuxt-link>
    </div>
  </nav>
</template>
