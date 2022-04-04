<template>
  <div class="details">
    <AppointmentDetailsView />
    
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentDetailsView from '@/components/AppointmentDetailsView'

export default {
  name: 'AppointmentDetails',
  components: {
    AppointmentDetailsView
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.details
  min-height: 100vh
</style>