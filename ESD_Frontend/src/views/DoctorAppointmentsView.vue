<template>
  <div class="appointment" >
    <!-- <h1>Appointments</h1> -->
    <DoctorAppointmentsView />
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import DoctorAppointmentsView from '@/components/DoctorAppointmentsView'

export default {
  name: 'DoctorAppointments',
  components: {
    DoctorAppointmentsView
  }
}
</script>
<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.appointment
  min-height: 100vh
  margin-top: 30px
  h1
    font-size: 3em
    font-weight: bold
    color: $main
    text-align: center
</style>
