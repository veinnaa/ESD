import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Appointment from '../views/Appointment.vue'
import AppointmentDetails from '../views/AppointmentDetails.vue'
<<<<<<< HEAD
import newlogin from '../views/newlogin.vue'
import Form from '../views/form.vue'
import FormTwo from '../views/formtwo.vue'
import FormThree from '../views/formthree.vue'

// import Form from '../views/PersonalDetailsForm.vue'
=======
import Checkout from '../views/Checkout.vue'
>>>>>>> 830faa586056f2758648c7cc1d3f38a0ee260f97

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
    path: '/appointment',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/appointment/:bookingID',
    name: 'AppointmentDetails',
    component: AppointmentDetails
  },
  {
    path: '/checkout/:bookingID',
    name: 'Checkout',
    component: Checkout
  }
  ,
  {
    path: '/newlogin',
    name: 'newlogin',
    component: newlogin
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/formtwo',
    name: 'formtwo',
    component: FormTwo
  },
  {
    path: '/formthree',
    name: 'formthree',
    component: FormThree
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
