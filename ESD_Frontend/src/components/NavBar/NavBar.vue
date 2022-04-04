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
          <router-link to="/appointment" class="link nav-text" title="Explore recipe">Appointments</router-link>
          <router-link to="/checkout" class="link nav-text" title="Explore recipe">Checkout</router-link>

          <router-link
            v-if="!this.loginStatus"
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      loginStatus: false
    };
  },
  methods: {
    guestuserAlert() {
      this.$swal({
        icon: "warning",
        title: "Want to view Saved Recipes?",
        text: "Login/Register to gain access to this page",
        confirmButtonText:
          '<a href="/login" style="color: #FFF; text-decoration: none; font-weight: normal" title="Proceed to login">Login/Register</a>',
        confirmButtonColor: "#5B2601",
      });
    },
  },
};
</script>

<style scoped lang="sass" src="./NavBar.sass"></style>
