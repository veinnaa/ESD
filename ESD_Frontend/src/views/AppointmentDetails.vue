<template>
  <div class="details">
    <AppointmentDetailsView :bookingId="this.$route.params"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentDetailsView from '@/components/AppointmentDetailsView'

export default {
  name: 'AppointmentDetails',
  components: {
    AppointmentDetailsView
  }
}
</script>