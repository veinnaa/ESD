<template>
  <div class="esd">
    <div class="nav-component">
      <NavBar />
    </div>

    <router-view />
    <div class="footer-component">
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style lang="sass" scoped>
@import '@/assets/sass/global.sass'
.esd
  font-family: $main-ff // Raleway

.nav-component
  padding-bottom: 70px
</style>