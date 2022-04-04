<template>
  <div class="checkout-view">

    <h1>Payment</h1>
    {{details}}

  <form id="payment-form">
		<div v-if="hasBookings">

		</div>
		<div id="payment-element">
			<!--Stripe.js injects the Payment Element-->
		</div>
		<div class="d-flex justify-content-between">
			<p class="mb-2">Total</p>
			<p class="mb-2">{{ rate }}</p>
		</div>

		<div id = "app" class="d-flex justify-content-between">
			<p class="mb-2">Doctor Name</p>
			<p class="mb-2">{{ doctorName }}</p>
		</div>

		<div class="d-flex justify-content-between">
			<p class="mb-2">Specialization</p>
			<p class="mb-2">{{ specialization }}</p>
		</div>

		<button id="submit">
			<div class="spinner hidden" id="spinner"></div>
			<span id="button-text">Pay now</span>
		</button>

		<div id="payment-message" class="hidden"></div>
	</form>

  </div>
</template>

<script>
// import axios from "axios";
var bookingURL = "http://localhost:5002/booking"
var doctorURL = "http://localhost:5001/doctor"
export default {
  name: "CheckoutView",
  // components: {
  // },
  data() {
    return {
      message: "no booking records",
      doctorID: "",
      doctorName:"",
      details: {},
      rate: "",
      bookingID:this.$route.params.bookingID,
      specialization:""

    }
  },
  mounted() {
    this.getbooking();
  },
  created() {
  }
  ,
  methods: {
    getbooking: function(){
      const response =
        fetch(bookingURL+'/'+this.bookingID)
          .then(response => response.json())
          .then(data => {
            this.details = data.data;
            this.doctorID = data.data['DoctorID'];
            const resp = 
              fetch(doctorURL + "/" + this.doctorID)
                .then(resp => resp.json())
                .then(data => {
                  this.doctorName = data.data['DoctorName'],
                  this.rate = data.data['Rates'],
                  this.specialization = data.data['Specialisation']

                })
            }
          )
          .catch(error => {
            // Errors when calling the service; such as network error, 
            // service offline, etc
            console.log(this.message + error);

          })
    }

    }
  },
  // computed: {
  //   hasBookings: function () {
  //     return this.data.booking.length > 0;
  //   }
  // },

}
</script>

<style scoped lang="sass" src="./Checkout.sass"></style>
