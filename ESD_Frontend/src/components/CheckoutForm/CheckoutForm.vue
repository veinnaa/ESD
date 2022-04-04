<template>
  <div class="checkout">
    <!-- Display a payment form -->
    <form id="payment-form">
      <div v-if="hasBookings"></div>
      <div id="payment-element">
        <!-- Stripe.js injects the Payment Element -->
        <StripeElement :element="cardElement" @change="event = $event" />
        <button @click="registerCard">Add</button>
        <div v-if="event && event.error">{{ event.error.message }}</div>
      </div>

      <div class="d-flex justify-content-between">
        <p class="mb-2">Total</p>
        <p class="mb-2">{}</p>
      </div>

      <div id="app" class="d-flex justify-content-between">
        <p class="mb-2">Doctor Name</p>
        <p class="mb-2">{{ doctorName }}</p>
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
import { useStripe, StripeElement } from "vue-use-stripe";

export default {
  name: "Checkout",
  components: {
    StripeElement,
  },
  data() {
    return {
      message: "no booking records",
      doctorID: "",
      doctorName: "",
      booking: [],
      bookingURL: "http://localhost:5002/booking/1",
      event: "",
      stripe: "",
      items: {},
      elements: [],
    };
  },
  computed: {
    hasBookings() {
      return this.booking.length > 0;
    },
  },
  setup() {
    let event = function ref(){}
    const {
      stripe,
      elements: [cardElement],
    } = useStripe({
      key:
        "pk_test_51Kh46VBUerOeATXPukBZ2Jmy5Z5iL54RVwxwA29N9UdSTXaRgMAzrxicIgVvwv82Sx6MylRjXk2ehUI3SpqzN2Bu00yWJTwLvZ" ||
        "",
      elements: [{ type: "card", options: {} }],
    });

    const registerCard = () => {
      if (event.complete) {
        // Refer to the official docs to see all the Stripe instance properties.
        // E.g. https://stripe.com/docs/js/setup_intents/confirm_card_setup
        return stripe.value.confirmCardSetup("<client-secret>", {
          payment_method: {
            card: cardElement.value,
          },
        });
      }
    };

    return {
      event,
      cardElement,
      registerCard,
    };
  },
  mounted() {
    // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://js.stripe.com/v3/')
    // document.head.appendChild(externalScript)

    const response = fetch(this.bookingURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(response);
        console.log(data);
        this.doctorID = data.data["DoctorID"];
        this.booking = data.data["BookingID"];

        this.getDoctorName(this.doctorID);
      })
      .catch((error) => {
        // Errors when calling the service; such as network error,
        // service offline, etc
        console.log(this.message + error);
      });

    // // This is your test publishable API key.
    // this.stripe = Stripe("pk_test_51Kh46VBUerOeATXPukBZ2Jmy5Z5iL54RVwxwA29N9UdSTXaRgMAzrxicIgVvwv82Sx6MylRjXk2ehUI3SpqzN2Bu00yWJTwLvZ");

    // The items the customer wants to buy
    this.items = { id: "Physiology" };
    // let elements;
    this.initialize();
    this.checkStatus();
    document
      .querySelector("#payment-form")
      .addEventListener("submit", this.handleSubmit());
  },
  methods: {
    async initialize() {
      let items = this.items;
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const { clientSecret } = await response.json();
      const appearance = {
        theme: "stripe",
      };
      elements = this.stripe.elements({ appearance, clientSecret });

      const paymentElement = elements.create("payment");
      paymentElement.mount("#payment-element");
    },
    async handleSubmit(e) {
      // e.preventDefault();
      // setLoading(true);
      let items = this.items;
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const { clientSecret } = await response.json();
      const appearance = {
        theme: "stripe",
      };
      elements = this.stripe.elements({ appearance, clientSecret });

      const { error } = await this.stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:4242/index_vue.html",
        },
      });

      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
      } else {
        showMessage("An unexpected error occured.");
      }

      setLoading(false);
    },
    async checkStatus() {
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      if (!clientSecret) {
        return;
      }

      const { paymentIntent } = await this.stripe.retrievePaymentIntent(
        clientSecret
      );

      switch (paymentIntent.status) {
        case "succeeded":
          // showMessage("Payment succeeded!");
          this.$swal({
            icon: "success",
            title: "Payment succeeded!",
          });
          break;
        case "processing":
          showMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          showMessage("Your payment was not successful, please try again.");
          break;
        default:
          showMessage("Something went wrong.");
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
    },

    setLoading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
      } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
      }
    },
    getDoctorName(doctorID) {
      const response = fetch("http://localhost:5001/doctor/" + doctorID)
        .then((response) => response.json())
        .then((data) => {
          console.log(response);
          this.doctorName = data.data["DoctorName"];
          console.log(this.doctorName);
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get doctor" + error);
        });
    },
  },
};
</script>
<style scoped lang="sass" src="./checkout.sass"></style>
