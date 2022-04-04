<template>
  <div class="cancel">
    Do you wish to cancel this appointment?
    <AppointmentCard class="appointment-card" />

    <div class="container-fluid yesno">
      <div class="row">
        <div class="yesc col-lg-6 bg-danger text-white">
          <p @click="confirming()">Yes</p>
        </div>
        <div class="noc col-lg-6 bg-success text-white">
          <router-link style="text-decoration: none; color: black" to="/"
            >no</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentCard from "@/components/AppointmentCard";

export default {
  name: "Cancellation",
  components: {
    AppointmentCard,
  },
  data() {
    return {
        bookingID: this.$route.params.bookingID,
    };
  },
  methods: {
    confirming() {
      this.$swal({
        title: "Are you sure?",
        text: "You will have to re-book the appointment once you have cancelled",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to cancel!",
      }).then((result) => {
        if (result.isConfirmed) {
            this.cancel()
            this.$swal("You've cancelled successfully!", "Thank you!", "success");
            this.$router.push("/appointment");
        }
      });
    },
    cancel() {
      const response = fetch(
        "http://localhost:5001/booking/" + this.bookingID,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("unable to delete booking " + error);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'
.cancel
    text-align: center
    margin-top: 70px
    .appointment-card
      margin-left: auto
      margin-right: auto
      margin-bottom: 30px

.yesno
    .row
        width: 450px
        margin-bottom: 50px
        margin-left: auto
        margin-right: auto
        .yesc
            border: 2px solid black
            border-radius: 5px
            margin-right: 10px
            // background-color: rgb(224, 224, 224)
            width: 100px
            margin-left: auto
            margin-right: auto
            height: 35px
            padding-top: 4px

        .noc
            // background-color: rgb(224, 224, 224)
            border: 2px solid black
            border-radius: 5px
            width: 100px
            margin-left: auto
            margin-right: auto
            height: 35px
            padding-top: 4px

        .noc:hover
            background-color: rgb(120, 120, 120)
            font-size: 130%
        .yesc:hover
            background-color: rgb(120, 120, 120)
            font-size: 130%
</style>