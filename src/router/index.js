import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Introduce from '../views/Introduce'
import News from '../views/News'
import Educate from '../views/Educate'
import Research from '../views/Research'
import Notice from '../views/Notice'
import Nursing from '../views/Nursing'
import Party from '../views/Party'
import Detail from '../views/Detail'
import List from '../views/List'
import Doctor from '../views/Doctor'
import Swiper from '../views/Swiper'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce
  },
  {
    path: '/educate',
    name: 'Educate',
    component: Educate
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/nursing',
    name: 'Nursing',
    component: Nursing
  },
  {
    path: '/party',
    name: 'Party',
    component: Party
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/doctor',
    name: 'Doctor',
    component: Doctor
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
