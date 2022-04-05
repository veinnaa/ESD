<template>
  <div class="home">
    <div class="details container">
      <h2>Upcoming Appointments</h2>
      <AppointmentCard class="appointment-card" />

      <div class="service">
        <h2>Services</h2>
        <p>Book your appointment with us now. Because - We CARE!</p>
        
        <h4 class="fw-bold text-decoration-none">Categories</h4>

        <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
          <div class="col" v-for="(cat, i) in categoryList" :key="i">
            
            <div class="card">
              <img :src="cat.img" class="img card-img-top" :alt="cat.title" />
              <div class="card-body">
                <h5 class="card-title pt-3 fw-bold text-center">{{ cat.title }}</h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentCard from "@/components/AppointmentCard";
export default {
  name: "Home",
  components: {
    AppointmentCard,
  },
  data() {
    return {
      categoryList: [
        {img: 'https://as1.ftcdn.net/v2/jpg/04/37/98/00/1000_F_437980082_9tG6Tcm89fuackgicQIlY7XCZlXMZ4vY.jpg', title: 'Acute & Urgent Care'}, 
        {img: 'data:image/png;base64,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', title: 'Health Screening'}, 
        {img: 'https://pbs.twimg.com/media/FHk6GWtWYAIuUI-.jpg', title: 'Chronic Care'}, 
        {img: 'https://media.istockphoto.com/vectors/mom-and-child-are-examined-by-a-pediatrician-neonatologist-medical-vector-id1248387187?k=20&m=1248387187&s=612x612&w=0&h=e7UmVEAsQnQ3kVNbDyvn8lQKIYCEdFXozl7ixKaNUVg=', title: "Children's Health"}, 
        {img: 'https://www.kindpng.com/picc/m/112-1124814_prostate-cancer-awareness-ribbon-breast-cancer-prostate-cancer.png', title: "Men's Health"}, 
        {img: 'https://iconape.com/wp-content/png_logo_vector/pink-ribbon.png', title: "Women's Health"}
      ]
    };
  },
  methods: {
    scroll_to_inspo() {
      const top = document.getElementById("inspo").offsetTop - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    },
  },
  created() {
    // console.log(window.location)
    if (!window.location.href.includes('#loaded')) {
        window.location = window.location + '#loaded';
        window.location.reload()
    }
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.home
  width: 80%
  margin-top: 30px
  margin-left: auto
  margin-right: auto
  margin-bottom: 80px
  min-height: 100vh

  .service
    margin-top: 50px
    .row
      .col
        .card
          // width: 400px
          height: 400px
          img
            height: 80%
            background-position: center
            background-size: contain


          

h2
  color: $main
  font-weight: bold

h4
  // color: $btn-text
  // font-weight: bold
</style>