<template>
  <div class="AppointmentDetailsView">
    <h2>Appointment Details</h2>

    <table class="table table-borderless">
      <tbody >
        <tr>
          <th>Patient Name</th>
          <td>{{patientName}}</td>
        </tr>
        <tr v-for="(v, k) in detail" :key="k">
          <th scope="row">{{ k }}</th>
          <td v-if="k == 'AcceptanceStatus' && v == false">Pending Confirmation</td>
          <td v-else-if="k == 'AcceptanceStatus' && v == true">Confirmed</td>
          <td v-else-if="k == 'DateTime'">{{ datetime }}</td>
          <td v-else-if="k == 'PatientICNo'">{{ patientName }}</td>
          <td v-else>{{ v }}</td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-primary"
      @click="goToCheckout(detail['BookingID'])"
    >
      Checkout
    </button>
  </div>
</template>

<script>
export default {
  name: "AppointmentDetailsView",
  data() {
    return {
      detail: [],
      datetime: "",
      doctorName: "",
      patientName: "",
      bookingID: this.$route.params.bookingID,
    };
  },
  mounted() {
    // console.log(appointmentID);
    this.getAppointmentDetail();
  },
  methods: {
    goToCheckout(x) {
      this.$router.push("/checkout/" + x);
    },
    async getAppointmentDetail() {
      const response = await fetch(
        "http://localhost:5002/booking/" + this.bookingID
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          this.detail = data.data;
          console.log(this.detail);
          let d = new Date(this.detail.DateTime);
          var date = d.getDate();
          var month = d.toLocaleString("en-us", { month: "short" });
          var year = d.getFullYear();
          var day = d.toLocaleString("en-us", { weekday: "long" });
          var time = d.toLocaleTimeString();

          this.datetime =
            day + ", " + date + " " + month + " " + year + " " + time;

          this.getDoctorName(this.detail.DoctorID);
          this.getPatientName(this.detail.ICNo);
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get bookings " + error);
        });
    },
    async getDoctorName(doctorID) {
      const response = await fetch("http://localhost:5001/doctor/" + doctorID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(response);
          this.doctorName = data.data["DoctorName"];
          // console.log(this.doctorName);
        })
        .catch((error) => {
          console.log("unable to get doctor " + error);
        });
    },
    async getPatientName(patientICNo) {
      const response = await fetch(
        "http://localhost:5004/patient/" + patientICNo
      )
        .then((response) => response.json())
        .then((data) => {
          this.patientName = data.data["PatientName"];
        })
        .catch((error) => {
          console.log("unable to get patient " + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./AppointmentDetailsView.sass"></style>
