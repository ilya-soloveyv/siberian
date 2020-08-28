<template>
  <div id="app">
    <header>
      <h1>Siberian Test APP</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>© 2018-2019</footer>
    <Modal ref="modal" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  metaInfo: {
    title: "Siberian",
    meta: [
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }
    ]
  },
  components: {
    Modal
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  font-family: "Roboto", sans-serif;
}
#app {
  flex-grow: 1;
  min-height: 100%;
  display: grid;
  grid-template-columns: auto 1024px auto;
  grid-template-rows: auto 1fr auto;
  @media (max-width: 1100px) {
    grid-template-columns: auto 756px auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto 500px auto;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  header {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 550px) {
      grid-column: 1/2;
    }
  }
  main {
    grid-column: 2/3;
    grid-row: 2/3;
    @media (max-width: 550px) {
      grid-column: 1/2;
    }
  }
  footer {
    grid-column: 2/3;
    grid-row: 3/4;
    border-top: 1px solid #cccccc;
    padding: 1rem 0;
    margin: 2rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 550px) {
      grid-column: 1/2;
    }
  }
}
</style>
