<template>
  <!-- Standard Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="nav-container container-fluid">
      <router-link to="/" class="navbar-brand" title="Home">
        <img src="../../assets/icons/esd_logo.svg" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        title="NavBar toggler -mobile"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="link nav-text" title="Home"> Home </router-link>
          <router-link v-if="this.doctorStatus" to="/doctorAppts" class="link nav-text" title="Explore recipe">Appointments</router-link>
          <router-link v-else-if="this.patientStatus" to="/appointment" class="link nav-text" title="Explore recipe">Appointments</router-link>

          <router-link
            v-if="this.loginStatus"
            to="/login"
            class="link nav-login-text login"
            title="Login/Register"
          >
            Login/Register
            <img class="login-icon" src="../../assets/icons/login.svg" /><img
              class="login-hover-icon"
              src="../../assets/icons/login-hover.svg"
            />
          </router-link>
          <router-link class="link nav-login-text login" to="/login" v-else-if="this.doctorStatus == true" @click="removeSession()" >Click here to Log out, Doctor {{this.doctorID}}</router-link>
          <router-link class="link nav-login-text login" to="/login" v-else @click="removeSession()" >Click here to Log out, Patient {{this.patientICNo}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted(){

    if (sessionStorage.getItem("DoctorID") != null){
      this.doctorStatus = true;
      this.loginStatus = false;
      this.doctorID = sessionStorage.getItem("DoctorID");
    } else if (sessionStorage.getItem("PatientICNo") != null){
      this.patientStatus = true;
      this.loginStatus = false;
      this.patientICNo = sessionStorage.getItem("PatientICNo");
    }

  },
  data() {
    return {
      loginStatus: true,
      doctorStatus: false,
      patientStatus: false,
      doctorID: "",
      patientICNo: ""
    };
  },
  methods: {
    removeSession(){
      sessionStorage.clear();
      this.doctorStatus = false;
      this.patientStatus = false;
      this.loginStatus = true;
    },
  },
};
</script>

<style scoped lang="sass" src="./NavBar.sass"></style>
