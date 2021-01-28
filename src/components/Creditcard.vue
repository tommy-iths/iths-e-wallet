<template>
  <div class="card__wrapper">
    <div class="card" :class="vendor">
      <div class="card__chip">
        <img
          v-if="vendor == 'bitcoin'"
          class="chip"
          src="../assets/img/chip-dark.svg"
          alt="chip"
        />
        <img
          v-else
          class="chip"
          src="../assets/img/chip-light.svg"
          alt="chip"
        />
      </div>
      <div class="card__vendor">
        <img
          :src="require(`../assets/img/vendor-${vendor}.svg`)"
          alt="vendor"
        />
      </div>
      <div class="card__number">{{ number }}</div>
      <div class="card__holder">
        <span class="card__placeholder">CARDHOLDER NAME</span>
        {{ holder.toUpperCase() }}
      </div>
      <div class="card__expire">
        <span class="card__placeholder">VALID THRU</span>
        {{ expireMonth }} / {{ expireYear }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    number: {
      type: String,
      required: true,
    },
    holder: {
      type: String,
      required: true,
    },
    expireMonth: {
      type: String,
      required: true,
    },
    expireYear: {
      type: String,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scope>
.card__wrapper {
  max-width: 380px;
  margin: auto;
  margin-bottom: 40px;
}

li {
  list-style: none;
}

.card {
  position: relative;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: repeat(3, 75px);
  grid-template-areas:
    "card__chip ... card__vendor"
    "card__number card__number card__number"
    "card__holder card__holder card__expire";
  background-color: #d4d4d4;
  padding: 10px;
  border-radius: 14px;
}

.card__placeholder {
  display: block;
}

.card__chip {
  grid-area: card__chip;
}

.card__chip > img {
  position: absolute;
  left: 20px;
  top: 10px;
}

.card__vendor {
  grid-area: card__vendor;
}

.card__vendor > img {
  position: absolute;
  right: 20px;
  top: 30px;
}

.card__number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  grid-area: card__number;
}

.card__holder {
  text-align: left;
  grid-area: card__holder;
}

.card__expire {
  grid-area: card__expire;
}

.default {
  background-color: #d4d4d4;
  color: #000;
}

.ninja {
  background-color: #333333;
  color: #fff;
}

.bitcoin {
  background-color: #ffb23f;
  color: #000;
}

.blockchain {
  background-color: #7f50e4;
  color: #fff;
}

.evil {
  background-color: #de2e4d;
  color: #fff;
}
</style>