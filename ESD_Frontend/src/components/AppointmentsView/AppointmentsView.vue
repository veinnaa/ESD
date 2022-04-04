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
          <td class="text-start">
            <a :href="appointment.ZoomID">{{ appointment.ZoomID }}</a>
          </td>
          <td>{{ doctorNameList[i] }}</td>
          <td v-if="appointment.AcceptanceStatus == null">
            Pending confirmation
          </td>
          <td v-else>Confirmed</td>
          <td>
            <i
              class="bi bi-trash-fill text-danger"
              @click="confirming(appointment['BookingID'])"
            ></i>
          </td>
          <td v-if="appointment.PaymentStatus == false">
            <i
              class="bi bi-credit-card-fill text-primary"
              @click="goToAppointment(appointment['BookingID'])"
            ></i>
          </td>
          <td v-else><i class="bi bi-check-circle-fill text-success"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppointmentCard from "@/components/AppointmentCard";

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
  beforeMount() {
    this.getAppointmentDetails();
  },
  methods: {
    goToAppointment(x) {
      this.$router.push("/appointment/" + x);
    },
    confirming(bookingID) {
      this.$swal({
        title: "Are you sure?",
        text: "You will have to re-book the appointment once you have cancelled",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, I want to cancel!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          this.cancelAppointment(bookingID);
        }
      });
    },
    async cancelAppointment(bookingID) {
      const response = await fetch(
        "http://localhost:5002/booking/" + bookingID,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.$swal({
            icon: "success",
            title: "You've cancelled successfully!",
            showConfirmButton: false
          });
          location.reload()
        })
        .catch((error) => {
          console.log("unable to delete booking " + error);
        });
    },
    openForm() {
      this.$router.push("/form");
    },
    async getAppointmentDetails() {
      const response = await fetch("http://localhost:5002/booking")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          this.details = data.data["booking"];
          console.log(this.details);
        })
        .catch((error) => {
          // Errors when calling the service; such as network error,
          // service offline, etc
          console.log("unable to get bookings " + error);
        });

      for (let i = 0; i < this.details.length; i++) {
        await this.getDoctorName(this.details[i].DoctorID);

        let date = new Date(this.details[i].DateTime);
        this.dateList.push([
          date.toLocaleDateString(),
          date.toLocaleTimeString(),
        ]);
        this.doctorNameList.push(this.doctorName);
        console.log(this.dateList);
      }
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
  },
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
