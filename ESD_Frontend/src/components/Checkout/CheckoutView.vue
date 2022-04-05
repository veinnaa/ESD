<template>
  <div class="checkout-view">

    <!-- {{details}} -->

  <form id="payment-form">
		<div v-if="hasBookings">

		</div>
		<div id="payment-element">
			<!--Stripe.js injects the Payment Element-->
		</div>
		<div class="d-flex justify-content-between">
			<p class="mb-2">Total ($)</p>
			<p class="mb-2">{{ rate }}</p>
		</div>

		<div id = "app" class="d-flex justify-content-between">
			<p class="mb-2">Doctor Name</p>
			<p class="mb-2">{{ doctorName }}</p>
		</div>
<!-- 
		<div class="d-flex justify-content-between">
			<p class="mb-2">Specialization</p>
			<p class="mb-2">{{ specialization }}</p>
		</div> -->

		<button id="submit">
			<div class="spinner hidden" id="spinner"></div>
			<span id="button-text" >Pay now</span>
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
      items:{id: "Physiology"},
      clientSecret:"",
      element:"",
      details: {},
      stripe:"",
      rate: "",
      bookingID: this.$route.params.bookingID,
      // specialization: ""
    }
  },
  mounted() {
    this.initialize();
    this.checkStatus();

    document.querySelector("#payment-form").addEventListener("submit", this.handleSubmit);

    this.getbooking();
  },
  methods: {
    getbooking() {
      const response =
        fetch(bookingURL+'/' + this.bookingID)
          .then(response => response.json())
          .then(data => {
            this.details = data.data;
            this.doctorID = data.data['DoctorID'];
            const resp = 
              fetch(doctorURL + "/" + this.doctorID)
                .then(resp => resp.json())
                .then(data => {
                  this.doctorName = data.data['DoctorName'],
                  this.rate = data.data['Rates']
                  // this.specialization = data.data['Specialisation']

                })
            }
          )
          .catch(error => {
            // Errors when calling the service; such as network error, 
            // service offline, etc
            console.log(this.message + error);

          })
    },
    async initialize() {
      const stripe = Stripe("pk_test_51Kh46VBUerOeATXPukBZ2Jmy5Z5iL54RVwxwA29N9UdSTXaRgMAzrxicIgVvwv82Sx6MylRjXk2ehUI3SpqzN2Bu00yWJTwLvZ");
      let elements;
      var items = this.items;
      const response = await fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const { clientSecret, amount } = await response.json();
      this.clientSecret = clientSecret;
      
      const appearance = {
        theme: 'stripe',
      };
      elements = stripe.elements({ appearance, clientSecret, amount });
      this.element = elements;
      this.stripe = stripe;
      const paymentElement = elements.create("payment");
      paymentElement.mount("#payment-element");
    },
    handleSubmit: function(event){
      
      event.preventDefault();
      this.setLoading(true);

      var elements = this.element;
      var stripe = this.stripe;
      const { error } = stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000/index.html",
        },
      });
      fetch("http://localhost:5002/booking/payment/"+this.bookingID, {
        method: "PUT"
      })
        .then(response=>response.json());

      // if (error.type === "card_error" || error.type === "validation_error") {
      //   this.showMessage(error.message);
      // } else {
      //   this.showMessage("An unexpected error occured.");
      // }
      this.setLoading(false);
    },
    async setLoading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        // document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
      } else {
        // document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
      }
    },

    async checkStatus() {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      if (!clientSecret) {
        return;
      }

      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      switch (paymentIntent.status) {
        case "succeeded":
          this.showMessage("Payment succeeded!");
          break;
        case "processing":
          this.showMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          this.showMessage("Your payment was not successful, please try again.");
          break;
        default:
          this.showMessage("Something went wrong.");
          break;
      }
    },
    showMessage(messageText) {
      const messageContainer = document.querySelector("#payment-message");

      messageContainer.classList.remove("hidden");
      messageContainer.textContent = messageText;

      setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageText.textContent = "";
      }, 4000);
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
