<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
export default {
  name: "Home",
  // components: {
  // },
  data() {
    return {
    };
  },
  methods: {
    scroll_to_inspo() {
      const top = document.getElementById("inspo").offsetTop - 100
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
  }
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.home
  margin-bottom: 80px
  min-height: 100vh
  
</style>
