<template>
  <div
    class="container-sm min-h-full font-lato flex-1 flex flex-col place-content-center items-center"
  >
    <div class="w-3/4">
      <h1 class="text-3xl m-3">
        I'm
        <span class="font-titillium font-bold text-name"
          >Andrés Del Carpio</span
        >
      </h1>
      <p class="font-lato text-xl m-3">
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
