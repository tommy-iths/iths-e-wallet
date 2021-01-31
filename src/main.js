import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      creditcards: [
        {
          holder: "Tommy Erisson",
          number: "1234 4565 1234 8798",
          expireMonth: "10",
          expireYear: "23",
          ccv: "",
          vendor: "bitcoin",
        },
        {
          holder: "Adam Erisson",
          number: "9999 9999 9999 9999",
          expireMonth: "09",
          expireYear: "23",
          ccv: "",
          vendor: "evil"
        },
        {
          holder: "Rickard Harry",
          number: "1234 8851 2133 1223",
          expireMonth: "01",
          expireYear: "25",
          ccv: "",
          vendor: "ninja",
        },
      ],
      creditcardForm: {
        holder: "FIRSTNAME LASTNAME",
        number: "XXXX XXXX XXXX XXXX",
        expireMonth: "MM",
        expireYear: "YY",
        ccv: "",
        vendor: "blank",
      },
      creditcardDummyData: {
        holder: "FIRSTNAME LASTNAME",
        number: "XXXX XXXX XXXX XXXX",
        expireMonth: "MM",
        expireYear: "YY",
        ccv: "",
        vendor: "blank",
      },
    }
  },
  render: h => h(App)
}).$mount('#app')
