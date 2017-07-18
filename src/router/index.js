import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Checkout from '@/components/checkout'
import Checkin from '@/components/checkin'
import Sell from '@/components/Sell'
import Empty from '@/components/Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/checkin',
      name: 'Checkin',
      component: Checkin
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    },
    {
      path: '/empty',
      name: 'Empty',
      component: Empty
    }
  ]
})
