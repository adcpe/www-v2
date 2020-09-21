<template>
  <main>
    <div>
      <h1>
        Hi, my name is
        <span class="my-name">Andrés Del Carpio</span>
      </h1>
      <h2>I'm a full-stack web developer</h2>
    </div>
    <div class="logos">
      <!-- <h1>Skills</h1> -->
      <img
        src="../assets/images/ruby.svg"
        alt="Ruby"
        title="Ruby"
        class="logo-img"
      />
      <img
        src="../assets/images/rails.svg"
        alt="Ruby on Rails"
        title="Ruby on Rails"
        class="logo-img"
      />
      <img
        src="../assets/images/javascript.svg"
        alt="JavaScript"
        title="JavaScript"
        class="logo-img"
      />
      <img
        src="../assets/images/nodejs.svg"
        alt="Node.js"
        title="Node.js"
        class="logo-img"
      />
      <img
        src="../assets/images/vuejs.svg"
        alt="Vue.js"
        title="Vue.js"
        class="logo-img"
      />
      <img
        src="../assets/images/react.svg"
        alt="React"
        title="React"
        class="logo-img"
      />
      <img
        src="../assets/images/postgresql.svg"
        alt="PostgreSQL"
        title="PostgreSQL"
        class="logo-img"
      />
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
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

.logos {
  margin-top: 3rem;
  img {
    height: 2rem;
    margin: 0 1rem;
    user-select: none;
  }
}

@media screen and (max-width: 767px) {
  main {
    width: 100%;
  }
}
</style>
