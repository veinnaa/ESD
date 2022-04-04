<template>
  <div class="appointments-view">

    <h1>Appointments</h1>
    <div>
      <ol >

        <li v-for="appointment, k in details" :key=k>
          {{appointment}}

          <button @click="goToAppointment(appointment['BookingID'])">Open</button>
        </li>
          
      </ol>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
var bookingURL = "http://localhost:5002/booking";
export default {
  name: "AppointmentsView",

  components:{

  },
  methods:{
    goToAppointment(x){
      this.$router.push('/appointment/'+ x)
    }
  },
  data() {
    return {
      details : {
      },
    }
  },
  mounted() {
    const response = 
      fetch(bookingURL)
        .then(response=>response.json())
        .then(data => {
          this.details = data.data['booking'];
        }
      )
  }
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
