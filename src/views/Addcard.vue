<template>
  <div class="wrapper">
    <creditcard
      :holder="holder"
      :number="cardNumSpacing(number)"
      :expireMonth="expireMonth"
      :expireYear="expireYear"
      :vendor="vendor"
    ></creditcard>
    <CreditcardForm />
  </div>
</template>

<script>
import Creditcard from "../components/Creditcard.vue";
import CreditcardForm from "../components/CreditcardForm.vue";
export default {
  components: { CreditcardForm, Creditcard },
  data() {
    return {};
  },
  computed: {
    holder() {
      return this.$root.creditcardForm.holder;
    },
    number() {
      return this.$root.creditcardForm.number;
    },
    expireMonth() {
      return this.$root.creditcardForm.expireMonth;
    },
    expireYear() {
      return this.$root.creditcardForm.expireYear;
    },
    vendor() {
      return this.$root.creditcardForm.vendor;
    },
  },
  methods: {
    cardNumSpacing(s) {
      return s.toString().replace(/\d{4}(?=.)/g, "$& ");
    },
  },
};
</script>

<style>
</style>