<template>
  <div class="card-wrapper">
    <ul>
      <li
        v-for="(creditcard, index) in creditcards"
        @click="setActive(index)"
        :key="index"
      >
        <creditcard
          class="creditcard"
          :holder="creditcard.holder"
          :number="creditcard.number"
          :expireMonth="creditcard.expireMonth"
          :expireYear="creditcard.expireYear"
          :vendor="creditcard.vendor"
        ></creditcard>
      </li>
    </ul>
  </div>
</template>

<script>
import Creditcard from "../components/Creditcard.vue";
export default {
  data() {
    return {
      creditcards: this.$root.creditcards,
    };
  },
  components: { Creditcard },
  methods: {
    setActive(index) {
      this.$emit("listenForEmit", index);
    },
  },
};
</script>

<style scoped>
.creditcard {
  cursor: pointer;
  margin-bottom: -120px;
}
</style>