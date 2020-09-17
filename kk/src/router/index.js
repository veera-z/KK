import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Aktuality from '../views/Aktuality.vue'
import Projekty from '../views/Projekty.vue'
import Kontakty from '../views/Kontakty.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/aktuality',
    name: 'Aktuality',
    component: Aktuality
  }
  ,
  {
    path: '/projekty',
    name: 'Projekty',
    component: Projekty
  }
  ,
  {
    path: '/kontakty',
    name: 'Kontakty',
    component: Kontakty
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
