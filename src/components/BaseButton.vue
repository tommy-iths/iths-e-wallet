<template>
  <button class="Button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
button {
  cursor: pointer;
  width: 150px;
  height: 50px;
  border: none;
  margin: 10px;
}

.flat {
  background-color: #000;
  color: #fff;
}

.flat:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}

.clear {
  background-color: #de2e4d;
}
.clear:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #de2e4d;
}
</style>