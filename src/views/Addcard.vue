<template>
  <div class="wrapper">
    <creditcard
      :holder="holder"
      :number="number"
      :expireMonth="expireMonth"
      :expireYear="expireYear"
      :vendor="vendor"
    ></creditcard>
    <CreditcardForm>
      <base-button slot="submit-card" class="flat">ADD CARD!</base-button>
      <base-button slot="reset-card" class="clear">RESET</base-button>
    </CreditcardForm>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import Creditcard from "../components/Creditcard.vue";
import CreditcardForm from "../components/CreditcardForm.vue";
export default {
  components: { CreditcardForm, Creditcard, BaseButton },
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
};
</script>

<style>
</style>