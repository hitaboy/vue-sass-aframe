import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home360 from './components/Home360'
import Home3602 from './components/Home3602'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home360,
      name: 'Home'
    },
    {
      path: '/lados/',
      component: Home3602,
      name: 'Home2'
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
