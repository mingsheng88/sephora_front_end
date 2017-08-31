import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'root', component: Products }
    // { path: '/products/:id', name: 'show_product', component: ShowProduct }
  ],
  mode: 'history'
})
