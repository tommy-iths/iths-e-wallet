<template>
  <div id="app">
    <top></top>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
export default {
  components: { Top },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>