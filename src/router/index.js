import Vue from 'vue'
import Router from 'vue-router'
import ProductsIndex from '@/components/ProductsIndex'
import ProductsShow from '@/components/ProductsShow'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'products#index', component: ProductsIndex },
    { path: '/products/:id', name: 'products#show', component: ProductsShow }
  ],
  mode: 'history'
})
