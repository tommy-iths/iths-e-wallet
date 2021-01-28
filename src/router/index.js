import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from '../views/Card.vue'
import Addcard from '../views/Addcard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Card',
    component: Card
  },
  {
    path: '/Addcard',
    name: 'Addcard',
    component: Addcard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
