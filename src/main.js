// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router2'
// import transtion from './transtion.vue'
import Vuex from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  // router,
  Vuex,
  template: '<Vuex/>',
  components: { Vuex }
})
 