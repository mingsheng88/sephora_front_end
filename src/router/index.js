import Vue from 'vue'
import Router from 'vue-router'
import ProductsIndex from '@/components/ProductsIndex'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'root', component: ProductsIndex }
    // { path: '/products/:id', name: 'show_product', component: ProductsShow }
  ],
  mode: 'history'
})
