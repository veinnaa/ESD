import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Appointment from '../views/Appointment.vue'
import AppointmentDetails from '../views/AppointmentDetails.vue'
import PatientDetails from '../views/PatientDetails.vue'
import DoctorAppointmentsView from '../views/DoctorAppointmentsView.vue'
import Form from '../views/form.vue'

// import Form from '../views/PersonalDetailsForm.vue'
import Checkout from '../views/Checkout.vue'

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
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/doctorAppts',
    name: 'DoctorAppointmentsView',
    component: DoctorAppointmentsView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
