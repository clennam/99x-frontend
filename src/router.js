import Vue from 'vue'
import Router from 'vue-router'
import Catalogue from './views/Catalogue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'catalogue',
      component: Catalogue
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/product',
      name: 'productDetails',
      component: () => import('./views/ProductDetails.vue')
    },
  ]
})
