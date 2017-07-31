// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './router/router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

import App from './App'
import toastrSetup from './setup/toastrSetup'

// bootstrap
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'

// VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

// VueSweetAlert
import VueSweetAlert from 'vue-sweetalert'
Vue.use(VueSweetAlert)

// setup
toastrSetup()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
