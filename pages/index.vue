<template>
  <div class="container-sm font-lato flex flex-col justify-center items-center">
    <div class="h-96 w-3/4 flex flex-col justify-center items-start">
      <h1 class="text-4xl m-3">
        I'm
        <span class="font-titillium font-bold text-name"
          >Andrés Del Carpio</span
        >
      </h1>
      <p class="font-lato text-2xl m-3">
        I'm a full-stack developer. I write about things that interest me and I
        hope that they can be helpful to others.
      </p>
    </div>
    <Logos />
  </div>
</template>

<script>
import Logos from '../components/Logos'

export default {
  components: {
    Logos,
  },
}
</script>
