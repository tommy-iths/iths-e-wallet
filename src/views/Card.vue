<template>
  <div class="wrapper">
    {{ headline }}
    <ul>
      <li v-for="(creditcard, index) in creditcards" :key="index">
        <creditcard
          v-if="creditcard == highlight"
          :holder="creditcard.holder"
          :number="creditcard.number"
          :expireMonth="creditcard.expireMonth"
          :expireYear="creditcard.expireYear"
          :vendor="creditcard.vendor"
        >
        </creditcard>
      </li>
    </ul>
    <creditcard-stack @listenForEmit="SetActiveCard"> </creditcard-stack>
  </div>
</template>

<script>
import Creditcard from "../components/Creditcard.vue";
import CreditcardStack from "../components/CreditcardStack.vue";
export default {
  components: { Creditcard, CreditcardStack },
  data() {
    return {
      headline: "ACTIVE CARD",
      creditcards: this.$root.creditcards,
      highlight: this.$root.creditcards[0],
    };
  },
  methods: {
    remove(creditcard) {
      this.creditcards = this.creditcards.filter((item) => item !== creditcard);
    },
    SetActiveCard(index) {
      this.highlight = this.$root.creditcards[index];
    },
  },
};
</script>

<style>
</style>