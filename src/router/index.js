import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Clients from '../views/Clients.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/admen',
  routes
})

export default router
