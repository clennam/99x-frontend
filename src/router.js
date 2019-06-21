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
      path: '/product/:id',
      name: 'productDetails',
      component: () => import('./views/ProductDetails.vue'),
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/cart/add/:id',
      name: 'cartAddItem',
      component: () => import('./views/Cart.vue'),
      props: true
    }
  ]
})
