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
			<p class="mb-2">{{ }}</p>
		</div>

		<div id = "app" class="d-flex justify-content-between">
			<p class="mb-2">Doctor Name</p>
			<p class="mb-2">{{ doctorID }}</p>
		</div>

		<div class="d-flex justify-content-between">
			<p class="mb-2">Specialization</p>
			<p class="mb-2">Physiology</p>
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
var bookingURL = "http://localhost:5002/booking/1"
export default {
  name: "CheckoutView",
  // components: {
  // },
  methods: {
  },
  // computed: {
  //   hasBookings: function () {
  //     return this.data.booking.length > 0;
  //   }
  // },
  data() {
    return {
      message: "no booking records",
      doctorID: "",
      details: {}
    };
  },
  mounted(){
    const response =
      fetch(bookingURL)
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
};
</script>

<style scoped lang="sass" src="./Checkout.sass"></style>
