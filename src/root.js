import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import Root from './Root'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<Root/>',
  components: { Root }
})
