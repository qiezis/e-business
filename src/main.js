// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import router from './router'
import VRouter from 'vue-router'
import Vuex from 'vuex'

//组件
import Apple from './components/Apple.vue'
import Banana from './components/Banana'
import redApple from './components/redApple'
import  yellowApple from './components/yellowApple.vue'

Vue.use(VRouter)
Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    totalPrice:0
  },
  mutations:{
    plusPrice(state,price){
      state.totalPrice += price
    },
    reducePrice(state,price){
      state.totalPrice -= price
    }
  },
})


// let router=new VRouter({
//     mode:'history',
//     routes:[
//       {
//         path:'/apple',
//         component:Apple,
//         children:[
//           {
//             path:'red',
//             component:redApple,
//           },
//           {
//             path:'yellow',
//             component:yellowApple,
//           }
//         ]
//       },
//       {
//         path:'/banana',
//         component:Banana
//       }
//     ]
// })




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
