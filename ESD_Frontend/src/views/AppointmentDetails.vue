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
    const response =
      fetch("http://localhost:5002/booking/1")
        .then(response => response.json())
        .then(data => {
          console.log(response);
          this.details = data.data;
          }
        )
        .catch(error => {
          // Errors when calling the service; such as network error, 
          // service offline, etc
          console.log(this.message + error);
        });
  }
}
</script>