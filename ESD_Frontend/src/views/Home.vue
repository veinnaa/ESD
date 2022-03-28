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

/* Top Half Image Background */
#home-search-bg
  background-image: url("../assets/img/bg-home.jpg")
  background-repeat: no-repeat
  background-size: cover
  background-position: center center
  height: 580px
  margin-bottom: 50px

.animate__animated.animate__backInUp
  --animate-duration: 1.5s

/* Message */
#home-msg
  color: #F1E3BA
  text-align: center
  font-size: 2.5rem
  font-weight: bold
  padding-top: 150px
  text-shadow: 2px 0 2px $main              // #5B2601
  -moz-text-shadow: 2px 0 2px $main         // #5B2601
  -webkit-text-shadow: 2px 0 2px $main      // #5B2601

/* Search Bar Group */
.btn-active
  background-color: $active !important    // #CC5500
  color: $bg                              // #FFFAED
  font-size: 16px
  border-bottom-left-radius: 10px
  border-top-left-radius: 10px
  padding: 0px 0px
  padding-left: 15px
  padding-right: 14px
  height: 50px

.sub-btn
  color: $main                            // #5B2601
  font-size: 16px
  &:hover
    background-color: #ECD8CA !important
    color: $active                        // #CC5500

#home-search-container
  margin: auto
  width: 60%
  text-align: center

.input-group
  height: 50px !important

#search-input
  border: 0
  font-size: 16px
  padding-left: 20px

.input-group-text
  border: 0
  background-color: white

.search-icon
  width: 38px
  height: 38px

/* Scroll down to Section */
#scroll_down
  margin-top: 90px
  display: block
  font-size: 30px
  color: #F1E3BA
  width: 30px
  margin-left: auto
  margin-right: auto
  text-shadow: 2px 0 2px $main              // #5B2601
  -moz-text-shadow: 2px 0 2px $main         // #5B2601
  -webkit-text-shadow: 2px 0 2px $main      // #5B2601

#see
  text-align: center
  color: #F1E3BA
  font-size: 25px
  text-shadow: 2px 0 2px $main              // #5B2601
  -moz-text-shadow: 2px 0 2px $main         // #5B2601
  -webkit-text-shadow: 2px 0 2px $main      // #5B2601

.inspirations
  width: 80%
  padding-top: 30px

@media screen and ( max-width: 990px )
  #home-search-container
    width: 80%

  #home-msg
    font-size: 2rem

  #search-input
    padding-left: 15px

@media screen and ( max-width: 600px )
  #home-search-container
    width: 90%

  #home-msg
    font-size: 1.5rem

  .btn-active
    font-size: 14px
    padding-left: 10px
    padding-right: 9px
    height: 45px

  .sub-btn
    font-size: 14px

  #search-input
    font-size: 14px
    padding-left: 10px

  .input-group-text
    height: 45px

  .search-icon
    width: 32px
    height: 32px

  .input-group
    height: 45px !important
  
</style>
