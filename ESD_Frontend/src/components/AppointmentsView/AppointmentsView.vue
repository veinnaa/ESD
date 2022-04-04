<template>
  <div class="appointments-view">
    <h2>Upcoming Appointment</h2>
    <AppointmentCard class="appointment-card" />
    <h2>All Appointments</h2>
    <table class="table" border="1">
      <thead>
        <tr class="table-success">
          <th scope="col" v-for="(header, i) in headerList" :key="i" class="text-center">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through appointment lists -->
        <tr class="text-center">
          <!-- Loop through each appointment -->
          <td>25 March 2022</td>
          <td class="text-start">https://Zoom5830</td>
          <td>Dr. Sharon Ng</td>
          <td>Pending</td>
          <td><i class="bi bi-trash-fill text-danger"></i></td>
          <td><i class="bi bi-credit-card-fill text-primary"></i></td>
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
    AppointmentCard
  },
  data() {
    return {
      headerList: [
        "Date",
        "Appointment Zoom Link",
        "Doctor",
        "Status",
        "Cancel?",
        "Checkout",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="sass" src="./AppointmentsView.sass"></style>
