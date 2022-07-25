import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataLists from '../components/DataLists'
import UsersList from '../components/UsersList'
import Details from '../components/Details'
import ErrorPage from '../components/ErrorPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/dataLists',
    name:'DataLists',
    component: DataLists
  },
  {
    path:'/usersList',
    name:'UsersList',
    component: UsersList
  },
  {
    path:'/userdetails/:id',
    name:'Details',
    component: Details,
    props:true
  },
  {
    path:'/:catchAll(.*)',
    name:'ErrorPage',
    component: ErrorPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
