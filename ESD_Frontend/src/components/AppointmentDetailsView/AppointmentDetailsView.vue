<template>
  <div class="AppointmentDetailsView">
    <appointment-info :id="id"/>
    {{id}}
  </div>
</template>

<script>
import AppointmentsView from "@/components/AppointmentsView";

export default {
  name: "AppointmentDetailsView",
  components: { AppointmentsView },
  data() {
    return {
      id: "appointment['BookingID']"
    };
  },
  // computed: {
  // },
  // created() {
  // },
  // methods: {
  // },
};
</script>

<style scoped lang="sass" src="./AppointmentDetailsView.sass"></style>
