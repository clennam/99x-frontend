import Vue from 'vue'
import Router from 'vue-router'
import Catalogue from './views/Catalogue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/catalogue' },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: Catalogue
    },
    {
      path: '/catalogue/:search',
      name: 'catalogueSearch',
      component: Catalogue,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: () => import('./views/ProductDetails.vue')
    },
  ]
})
