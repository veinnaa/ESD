import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Explore from '../views/Explore.vue'
import AppointmentDetails from '../views/AppointmentDetails.vue'

const routes = [
  {
    path: '/',
    alias: '/index.html',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile

  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/explore/:bookingId',
    name: 'AppointmentDetails',
    component: AppointmentDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
