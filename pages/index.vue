<template>
  <main>
    <div>
      <h1>Andrés Del Carpio</h1>
      <h2>Full Stack Web Developer</h2>
    </div>
    <div>
      <a href="https://github.com/andres-dc">github</a>
      <a href="https://gitlab.com/andres-dc">gitlab</a>
      <a href="https://twitter.com/Andres__DC">twitter</a>
      <a href="https://www.linkedin.com/in/andres-dc/">linkedin</a>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  min-height: 80vh;
  width: 768px;
}

@media screen and (max-width: 767px) {
  main {
    width: 100%;
  }
}
</style>
