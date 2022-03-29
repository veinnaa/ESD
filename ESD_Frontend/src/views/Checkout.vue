<template>
  <div class="checkout">

  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutView from '@/components/Checkout'
export default{
 name: "Checkout",
  computed: {
    hasBookings: function () {
      return this.data.booking.length > 0;
    }
  },
  data() {
    return {
      message: "no booking records",
      doctorID: "",
    };
  },
  mounted(){
    const response =
      fetch(bookingURL)
        .then(response => response.json())
        .then(data => {
          console.log(response);
          this.doctorID = data.data['DoctorID'];
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