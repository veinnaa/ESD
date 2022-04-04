<template>
  <div class="details">
    <AppointmentDetailsView />
    
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentDetailsView from '@/components/AppointmentDetailsView'

export default {
  name: 'AppointmentDetails',
  components: {
    AppointmentDetailsView
  },
  data() {
    return {
      message: "no booking records",
      doctorID: "",
      details: {
      }
    };
  },
  mounted() {
  }
}
</script>