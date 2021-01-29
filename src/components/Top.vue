<template>
  <header>
    {{ title }}
    <div id="nav"><router-link to="/">Card</router-link></div>
    <div id="nav"><router-link to="/Addcard">Addcard</router-link></div>
    <router-view />
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "E-Wallet",
    };
  },
};
</script>
<style>
header {
  height: 100px;
  padding: 10px;
  background-color: pink;
}
</style>