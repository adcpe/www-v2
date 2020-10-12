<template>
  <div class="main">
    <div>
      <h1>
        Hi, my name is
        <span class="my-name">Andrés Del Carpio</span>
      </h1>
      <h2>I'm a full-stack web developer</h2>
      <p>
        I'm looking for my first developer job. I write about things that
        interest me and I hope that they can be helpful to others.
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

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  min-height: 80vh;
  width: 768px;

  h1,
  h2 {
    margin: 1rem auto;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  .my-name {
    color: #ff8600;
  }
}

@media screen and (max-width: 767px) {
  main {
    width: 100%;
  }
}
</style>
