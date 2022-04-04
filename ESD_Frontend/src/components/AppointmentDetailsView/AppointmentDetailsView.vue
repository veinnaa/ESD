<template>
  <div class="AppointmentDetailsView">
    
    <div>
      {{details}}
      <table class="table table-bordered">
        <thead>
          <tr align="center">
            <th colspan="2">Details</th>
          </tr>
        </thead>
        <tbody v-for="v, k in details" :key=k>
          <tr>
            <th scope="row">{{k}}</th>
            <td>{{v}}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-primary" @click="goToCheckout(details['BookingID'])">Checkout</button>
    </div>

  </div>
</template>

<script>
import AppointmentsView from "@/components/AppointmentsView";

var bookingURL = "http://localhost:5002/booking"
export default {
  name: "AppointmentDetailsView",
  // methods: {
  // },
  data() {
    return {
      details: "",
      bookingID: this.$route.params.bookingID

    };
  },
  mounted(){
    // console.log(appointmentID);
    const resp = 
      fetch(bookingURL+ "/" + this.bookingID)
        .then(resp => resp.json())
        .then(data => {
          this.details = data.data;
        })
  },
  methods: {
    goToCheckout(x) {
      this.$router.push('/checkout/' + x);
    }
  },
};
</script>

<style scoped lang="sass" src="./AppointmentDetailsView.sass"></style>
