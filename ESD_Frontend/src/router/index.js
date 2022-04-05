import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Appointment from '../views/Appointment.vue'
import AppointmentDetails from '../views/AppointmentDetails.vue'
import PatientDetails from '../views/PatientDetails.vue'
import newlogin from '../views/newlogin.vue'
import Form from '../views/form.vue'
import FormTwo from '../views/formtwo.vue'
import FormThree from '../views/formthree.vue'

// import Form from '../views/PersonalDetailsForm.vue'
import Checkout from '../views/Checkout.vue'
import Cancellation from '../views/Cancellation.vue'

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
    path: '/patient/:patientID',
    name: 'PatientDetails',
    component: PatientDetails
  },
  {
    path: '/checkout/:bookingID',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/cancellation/:bookingID',
    name: 'Cancellation',
    component: Cancellation
  },
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
