import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tienda from '../views/Tienda.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Success from '@/views/Success.vue'
import Failure from '@/views/Failure.vue'
import Pending from '@/views/Pending.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: Tienda
  },
  {
    path: '/product-details',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/failure',
    name: 'failure',
    component: Failure
  },
  {
    path: '/pending',
    name: 'pending',
    component: Pending
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
