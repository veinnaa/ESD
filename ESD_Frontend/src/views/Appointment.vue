<template>
  <div class="appointment" >
    <!-- <h1>Appointments</h1> -->
    <AppointmentsView />
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentsView from '@/components/AppointmentsView'

export default {
  name: 'appointment',
  components: {
    AppointmentsView
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
