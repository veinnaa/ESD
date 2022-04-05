<template>
  <div class="appointment-card">
    <div class="box container">
      <div class="row">
        <div class="sb1">
          <div class="month">{{ month }}</div>
          <div class="year">{{ year }}</div>
          <div class="date">{{ date }}</div>
          <div class="day">{{ day }}</div>
        </div>
      </div>
      <div class="row">
        <div class="sb2">
          <div class="time">{{ time }}</div>
          <div class="d">Zoom Link: <a :href="zoomLink">{{ zoomLink }}</a></div>
          <div class="patient"> Patient: {{ patientName }} </div>
          <div >Doctor: {{ doctorName }}</div>
          <div class="category">{{ doctorSpec }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "AppointmentCard",
  // components: {
  // },
  data() {
    return {
      details: {},
      date: "",
      month: "",
      year: "",
      day: "",
      time: "",
      zoomLink: "",
      doctorName: "",
      doctorSpec: "",
      doctorID: "",
      patientName: "",
      // doctorNameList: [],
    };
  },
  mounted() {
    this.getAppointmentDetail()
  },
  methods: {
    async getAppointmentDetail() {
      const response = await fetch("http://localhost:5002/booking")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          this.detail = data.data["booking"][0];
          let d = new Date(this.detail.DateTime)
          this.date = d.getDate()
          this.month = d.toLocaleString('en-us', { month: 'short' }).toUpperCase()
          this.year = d.getFullYear()
          this.day = d.toLocaleString('en-us', { weekday: 'long' })
          this.time = d.toLocaleTimeString()

          this.zoomLink = this.detail.ZoomID
          this.getDoctorInfo(this.detail.DoctorID)
          this.getPatientInfo(this.detail.PatientID)
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get bookings" + error);
        });
    },
    async getDoctorInfo(doctorID) {
      const response = await fetch("http://localhost:5001/doctor/" + doctorID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(response);
          this.doctorName = data.data["DoctorName"];
          this.doctorSpec = data.data["Specialisation"]
          // console.log(this.doctorName);
        })
        .catch((error) => {
          console.log("unable to get doctor" + error);
        });
    },
    async getPatientInfo(patientID) {
      const response = await fetch("http://localhost:5000/patient/" + patientID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(response);
          this.patientName = data.data["PatientName"];
          // console.log(this.doctorName);
        })
        .catch((error) => {
          console.log("unable to get patient" + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./AppointmentCard.sass"></style>
