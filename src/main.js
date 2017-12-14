// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import indexPage from './pages/index'
let router=new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:indexPage
    }
  ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
