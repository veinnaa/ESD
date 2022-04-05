<template>
  <div class="appointment-card">
    <div v-if="this.detail == 'NIL'">No upcoming appointment</div>
    <div v-else-if="detail == ''">No upcoming appointment</div>
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
          <div class="doc">{{ doctorName }}</div>
          <div class="category">{{ doctorSpec }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentCard",
  data() {
    return {
      details: [],
      date: "",
      month: "",
      year: "",
      day: "",
      time: "",
      zoomLink: "",
      doctorName: "",
      doctorSpec: "",
      doctorID: "",
    };
  },
  mounted() {
    this.getAppointmentDetail()
  },
  methods: {
    async getAppointmentDetail() {
      const response = await fetch("http://192.168.0.199:5002/booking")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          for (let i = 0; i < data.data["booking"].length; i++) {
            if (data.data["booking"][i].AcceptanceStatus == true) {
              this.detail = data.data["booking"][i];
              break;
            } else {
              this.detail = "NIL";
            }
          }

          let d = new Date(this.detail.DateTime)
          this.date = d.getDate()
          this.month = d.toLocaleString('en-us', { month: 'short' }).toUpperCase()
          this.year = d.getFullYear()
          this.day = d.toLocaleString('en-us', { weekday: 'long' })
          this.time = d.toLocaleTimeString()

          this.zoomLink = this.detail.ZoomID
          console.log(this.zoomLink);
          this.getDoctorInfo(this.detail.DoctorID)
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get bookings " + error);
        });
    },
    async getDoctorInfo(doctorID) {
      const response = await fetch("http://192.168.0.199:5001/doctor/" + doctorID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(response);
          this.doctorName = data.data["DoctorName"];
          this.doctorSpec = data.data["Specialisation"]
          // console.log(this.doctorName);
        })
        .catch((error) => {
          console.log("unable to get doctor " + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./AppointmentCard.sass"></style>
