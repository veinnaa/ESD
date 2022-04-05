<template>
  <div class="PatientDetailsView">
    <h2>Patient Details</h2>

    <table class="table table-borderless">
      <tbody v-for="(v, k) in detail" :key="k">
        <tr>
          <th scope="row">{{ k }}</th>
          <td>{{ v }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PatientDetailsView",
  data() {
    return {
      detail: [],
      datetime: "",
      // doctorName: "",
      patientName: "",
      patientID: this.$route.params.patientID,
    };
  },
  mounted() {
    console.log(this.patientID);
    this.getPatientInfo();
  },
  methods: {
    // goToCheckout(x) {
    //   this.$router.push("/checkout/" + x);
    // },
    // async getAppointmentDetail() {
    //   const response = await fetch(
    //     "http://localhost:5002/booking/" + this.bookingID
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(data);
    //       this.detail = data.data;
    //       let d = new Date(this.detail.DateTime);
    //       var date = d.getDate();
    //       var month = d.toLocaleString("en-us", { month: "short" });
    //       var year = d.getFullYear();
    //       var day = d.toLocaleString("en-us", { weekday: "long" });
    //       var time = d.toLocaleTimeString();

    //       this.datetime =
    //         day + ", " + date + " " + month + " " + year + " " + time;

    //       this.getDoctorName(this.detail.DoctorID);
    //       this.getPatientName(this.detail.PatientID);
    //     })
    //     .catch((error) => {
    //       // Errors when calling the service; such as network error,
    //       // service offline, etc
    //       console.log("unable to get bookings " + error);
    //     });
    // },
    // async getDoctorName(doctorID) {
    //   const response = await fetch("http://localhost:5001/doctor/" + doctorID)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(response);
    //       this.doctorName = data.data["DoctorName"];
    //       // console.log(this.doctorName);
    //     })
    //     .catch((error) => {
    //       console.log("unable to get doctor " + error);
    //     });
    // },
    getPatientInfo() {
      const response = fetch(
        "http://192.168.0.199:5000/patient/" + this.patientID
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.detail = data.data;

          let patientID = data.data["PatientID"]
          let patientName = data.data["PatientName"]
          let patientIC = data.data["ICNo"]
          let patientPhone = data.data["PatientPhoneNo"]
          let patientAddr = data.data["PatientAddress"]

          this.detail = {"Patient ID": patientID, "Patient Name": patientName, "NRIC No.": patientIC, "Phone No.": patientPhone, "Address": patientAddr}

          console.log(this.detail);
        })
        .catch((error) => {
          console.log("unable to get patient " + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./PatientDetailsView.sass"></style>
