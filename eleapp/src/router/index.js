import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import Home from "../pages/home/Home.vue"
import Discover from "../pages/discover/Discover.vue"
import Order from "../pages/order/Order.vue"
import Mine from "../pages/mine/Mine.vue"

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path:"**",
      redirect:"./home"
    }
  ]
})
