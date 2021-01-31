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
      <div class="form-row">
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
            class="form-year"
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
        <div class="form-wrapper">
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
      <div class="form-buttons">
        <slot name="submit-card"></slot>
      </div>
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

    submitCard() {
      try {
        this.$root.creditcards.push(this.formData);
      } catch (err) {
        console.log(err);
      } finally {
        this.$root.creditcardForm = this.$root.creditcardDummyData;
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.form-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
}

.form-row > .form-wrapper > select {
  width: 136px;
}

.form-row > .form-wrapper > input {
  width: 136px;
}

.creditcard-form {
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 30px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgb(0 0 0 / 30%);
}

input {
  padding: 12px;
  border: 1px solid #000;
  border-radius: 8px;
}

select {
  padding: 12px;
  border: 1px solid #000;
  border-radius: 8px;
}

.form-buttons {
  display: flex;
  flex: start;
  justify-content: center;
}
</style>