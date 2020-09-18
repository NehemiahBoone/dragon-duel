import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Fight from "../pages/Fight.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fight',
    name: 'Fight',
    component: Fight
  },
]

const router = new VueRouter({
  routes
})

export default router
