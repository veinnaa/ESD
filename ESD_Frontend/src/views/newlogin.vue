<template>
  <div v-show="newlogin" class="newlogin">
    <Newlogin @toggleNewRegister="toggleCard" />
  </div>
  <div v-show="newreg" class="newreg">
    <NewRegister @toggleNewLogin="toggleCard" />
  </div>
</template>

<script>
// @ is an alias to /src
// import AppointmentDetailsView from '@/components/AppointmentDetailsView'
import Newlogin from '../components/newlogin.vue'
import NewRegister from '../components/newreg.vue'

export default {
  name: 'newlogin',
  components: {
    // AppointmentDetailsView,
    Newlogin,
    NewRegister
  },
  data(){
    return {
      newlogin: true,
      newreg: false
    };
  },
  methods:{
    toggleCard(string){
      if (string == 'newlogin') {
        this.newlogin = true
        this.newreg = false
      }
      if (string == 'newreg') {
        this.newreg = true
        this.newlogin = false
      }
    }
  }
}
</script>

