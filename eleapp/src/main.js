// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//声明全局组件
import Page from './common/Page.vue'
Vue.component('page', Page);

import swiperCom from './common/swiperCom.vue'
Vue.component('swiper', swiperCom);

import swiperSlide from './common/swiperSlide.vue'
Vue.component('slide', swiperSlide);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
