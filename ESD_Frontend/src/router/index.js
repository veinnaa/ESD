import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Appointment from '../views/Appointment.vue'
import AppointmentDetails from '../views/AppointmentDetails.vue'
import newlogin from '../views/newlogin.vue'
import Form from '../views/form.vue'
import FormTwo from '../views/formtwo.vue'
import FormThree from '../views/formthree.vue'

// import Form from '../views/PersonalDetailsForm.vue'

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
    path: '/Appointment',
    name: 'Appointment',
    component: Appointment
  },
  {
    path: '/explore/:bookingId',
    name: 'AppointmentDetails',
    component: AppointmentDetails
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
