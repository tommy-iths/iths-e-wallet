<template>
  <header>
    {{ title }}

    <div id="nav">
      <div id="nav"><router-link to="/">Card</router-link></div>
      <div id="nav"><router-link to="/Addcard">Addcard</router-link></div>
    </div>
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
  height: 150px;
  padding: 10px;
  background-color: #d3d3d3;
}

#nav {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>