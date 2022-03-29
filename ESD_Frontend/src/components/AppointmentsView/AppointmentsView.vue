<template>
  <div class="appointments-view">

    <h1>Appointments</h1>
    <div>{{details}}</div>
  </div>
</template>

<script>
// import axios from "axios";
var bookingURL = "http://localhost:5002/booking"
export default {
  name: "AppointmentsView",
  // components: {
  // },
  data() {
    return {
      details : {
      }
    }
  },
  mounted() {
    const response = 
      fetch(bookingURL)
        .then(response=>response.json())
        .then(data => {
          console.log(response);
          this.details = data.data;
        }
      )
  }
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
