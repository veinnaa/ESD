<template>
  <div class="appointments-view">
    <div class="upcoming-header">
      <h2>Upcoming Appointment</h2>
      <AppointmentCard class="appointment-card" />
    </div>
    <h2>All Appointments</h2>
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

          <td>
            {{ patientNameList[i] }}
          </td>
          <td>
            <img
              src="./clipboard2-data-fill.svg"
              alt="View patient details"
              @click="goToPatient(appointment['PatientID'])"
            />
          </td>

          <td v-if="appointment.AcceptanceStatus == null">
            Pending confirmation
          </td>
          <td v-else>Confirmed</td>
          <td v-if="appointment.AcceptanceStatus == null">
            <i
              class="bi bi-question-circle text-primary"
              @click="confirmAppointment(appointment['BookingID'])"
            ></i>
          </td>
          <td v-else-if="appointment.AcceptanceStatus == false">
            <i class="bi bi-x-circle-fill text-danger"></i>
          </td>
          <td v-else><i class="bi bi-check-circle-fill text-success"></i></td>
          <td v-if="appointment.PaymentStatus == false">Pending</td>
          <td v-else>Paid</td>
          <td>
            <i
              class="bi bi-trash-fill text-danger"
              @click="confirmCancellation(appointment['BookingID'])"
            ></i>
          </td>
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
      patientName: "",
      patientID: "",
      patientNameList: [],
      headerList: [
        "Date",
        "Time",
        "Appointment Link",
        "Patient",
        "Patient Details",
        "Status",
        "Accept?",
        "Payment Status",
        "Cancel?",
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
    goToPatient(x) {
      this.$router.push("/patient/" + x);
    },
    confirmAppointment(bookingID) {
      this.$swal({
        title: "Accept Appointment?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#5cb85c",
        cancelButtonColor: "#d33",
        confirmButtonText: "Accept Appointment",
        cancelButtonText: "Decline Appointment",
      }).then((result) => {
        if (result.isConfirmed) {
          this.acceptAppointment(bookingID);
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.declineAppointment(bookingID);
        }
      });
    },
    async acceptAppointment(bookingID) {
      const response = await fetch(
        "http://192.168.0.199:5002/booking/accepted/" + bookingID,
        {
          method: "PUT",
        }
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.$swal({
            icon: "success",
            title: "Appointment has been accepted!",
            showConfirmButton: false,
          });
          location.reload();
        })
        .catch((error) => {
          console.log("unable to accept booking " + error);
        });
    },
    async declineAppointment(bookingID) {
      const response = await fetch(
        "http://192.168.0.199:5002/booking/declined/" + bookingID,
        {
          method: "PUT",
        }
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.$swal({
            icon: "success",
            title: "Appointment has been declined!",
            text: "Appoinment is cancelled.",
            showConfirmButton: false,
          });
          location.reload();
        })
        .catch((error) => {
          console.log("unable to decline booking " + error);
        });
    },
    confirmCancellation(bookingID) {
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
        "http://192.168.0.199:5002/booking/" + bookingID,
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
            showConfirmButton: false,
          });
          location.reload();
        })
        .catch((error) => {
          console.log("unable to delete booking " + error);
        });
    },
    openForm() {
      this.$router.push("/form");
    },
    async getAppointmentDetails() {
      const response = await fetch("http://192.168.0.199:5002/booking")
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
        await this.getPatientName(this.details[i].PatientID);

        let date = new Date(this.details[i].DateTime);
        this.dateList.push([
          date.toLocaleDateString(),
          date.toLocaleTimeString(),
        ]);
        // console.log(this.dateList);
      }
    },
    getPatientName(patientID) {
      console.log(patientID);
      const response = fetch("http://192.168.0.199:5000/patient/" + patientID)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          this.patientName = data.data["PatientName"];
          this.patientNameList.push(this.patientName);
          // console.log(this.patientName);
        })
        .catch((error) => {
          console.log("unable to get patient " + error);
        });
    },
  },
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
