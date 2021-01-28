<template>
  <div class="wrapper">
    <form class="creditcard-form" @submit.prevent="submitCard">
      <div class="form-wrapper">
        <label class="label" for="number">CARD NUMBER:</label>
        <input
          type="text"
          name="number"
          v-model="formData.number"
          @input="number"
          maxlength="19"
          required
        />
      </div>
      <div class="form-wrapper">
        <label class="label" for="holder">CARDHOLDER NAME:</label>
        <input
          type="text"
          name="holder"
          v-model="formData.holder"
          @input="holder"
          maxlength="24"
          required
        />
      </div>

      <div class="form-wrapper">
        <label class="label" for="expireMonth">Expire month:</label>
        <select
          name="expireMonth"
          v-model="formData.expireMonth"
          @change="expireMonth"
          required
        >
          <option value="" selected disabled hidden></option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div class="form-wrapper">
        <label class="label" for="expireYear">Expire year:</label>
        <select
          name="expireYear"
          v-model="formData.expireYear"
          @change="expireYear"
          required
        >
          <option value="" selected disabled hidden></option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
        </select>
      </div>
      <div class="form-wrapper ccv">
        <label class="label" for="ccv">CCV:</label>
        <input
          type="text"
          name="number"
          v-model="formData.ccv"
          @input="number"
          maxlength="3"
          required
        />
      </div>
      <div class="form-wrapper">
        <label class="label" for="vendor">vendor</label>
        <select
          name="vendor"
          v-model="formData.vendor"
          @change="vendor"
          required
        >
          <option value="blank" selected disabled hidden></option>
          <option value="bitcoin">Bitcoin</option>
          <option value="blockchain">Blockchain</option>
          <option value="evil">Evil</option>
          <option value="ninja">Ninja</option>
        </select>
      </div>
      <button>Lägg till kort!</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        holder: "",
        number: "",
        expireMonth: "",
        expireYear: "",
        ccv: "",
        vendor: "",
      },
    };
  },
  methods: {
    holder() {
      this.$root.creditcardForm.holder = this.formData.holder;
    },
    number() {
      this.formData.number = this.formData.number
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      this.$root.creditcardForm.number = this.formData.number;
    },
    expireMonth() {
      this.$root.creditcardForm.expireMonth = this.formData.expireMonth;
    },
    expireYear() {
      this.$root.creditcardForm.expireYear = this.formData.expireYear;
    },
    ccv() {
      this.$root.creditcardForm.ccv = this.formData.ccv;
    },
    vendor() {
      this.$root.creditcardForm.vendor = this.formData.vendor;
    },
    submitCreditcard() {
      this.$root.submitCreditcards(this.form);
    },
    submitCard() {
      this.$root.creditcards.push({
        holder: this.formData.holder,
        number: this.cardNumSpacing(this.formData.number),
        expireMonth: this.formData.expireMonth,
        expireYear: this.formData.expireYear,
        ccv: this.formData.ccv,
        vendor: this.formData.vendor,
      });
    },
    cardNumSpacing(s) {
      return s.toString().replace(/\d{4}(?=.)/g, "$& ");
    },
  },
};
</script>

<style>
label {
  display: block;
}
.form-wrapper {
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  margin: 2rem 0;
  text-align: left;
}

.creditcard-form {
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 30%);
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #000;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}

select {
  width: 25%;
  padding: 12px;
  border: 1px solid #000;
  background-color: #ffffff;
  border-radius: 8px;
}

.ccv,
form {
  width: 25%;
}
</style>