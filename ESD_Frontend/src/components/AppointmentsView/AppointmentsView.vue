<template>
  <div class="appointments-view">
    <h2>Upcoming Appointment</h2>
    <AppointmentCard class="appointment-card" />
    <div class="header">
      <h2>All Appointments</h2>
      <h2><i class="bi bi-plus-lg" @click="openForm()"></i></h2>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr class="table-success">
          <th
            scope="col"
            v-for="(header, i) in headerList"
            :key="i"
            class="text-center"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through appointment lists -->
        <tr class="text-center" v-for="(appointment, i) in details" :key="i">
          <!-- Loop through each appointment -->
          <td>{{ dateList[i][0] }}</td>
          <td>{{ dateList[i][1] }}</td>
          <td class="text-start"><a :href="appointment.ZoomID">{{ appointment.ZoomID }}</a></td>
          <td>{{ doctorNameList[i] }}</td>
          <td v-if="appointment.AcceptanceStatus == false">
            Pending confirmation
          </td>
          <td v-else>Confirmed</td>
          <td><button class="bi bi-trash-fill text-danger" @click="cancelAppointment(appointment['BookingID'])"></button></td>
          <td v-if="appointment.PaymentStatus == false">
            <i class="bi bi-credit-card-fill text-primary" @click="goToAppointment(appointment['BookingID'])"></i>
          </td>
          <td v-else><i class="bi bi-check-circle-fill text-success"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppointmentCard from "@/components/AppointmentCard";

var bookingURL = "http://localhost:5002/booking"
var doctorURL = "http://localhost:5001/doctor"
export default {
  name: "AppointmentsView",
  components: {
    AppointmentCard,
  },
  data() {
    return {
      details: {},
      dateList: [],
      doctorName: "",
      doctorID: "",
      doctorNameList: [],
      headerList: [
        "Date",
        "Time",
        "Appointment Link",
        "Doctor",
        "Status",
        "Cancel?",
        "Checkout",
      ],
    };
  },
  mounted() {
    this.getAppointmentDetails();
  },
  methods: {
    goToAppointment(x) {
      this.$router.push("/appointment/" + x);
    },
    cancelAppointment(x){
      const response = fetch(bookingURL + "/" + x,{
          method: "DELETE"
        }
      ).then(response=>response.json())
      window.location.reload()

    },
    openForm() {
      this.$router.push("/form");
    },
    async getAppointmentDetails() {
      const response = await fetch(bookingURL)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          this.details = data.data["booking"];
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get bookings" + error);
        });

      for (let i = 0; i < this.details.length; i++) {
        await this.getDoctorName(this.details[i].DoctorID);
        let date = new Date(this.details[i].DateTime)
        this.dateList.push([date.toLocaleDateString(), date.toLocaleTimeString()])
        this.doctorNameList.push(this.doctorName);
      }
    },
    async getDoctorName(doctorID) {
      const response = await fetch(doctorURL + "/" + doctorID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(response);
          this.doctorName = data.data["DoctorName"];
          // console.log(this.doctorName);
        })
        .catch((error) => {
          console.log("unable to get doctor" + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
