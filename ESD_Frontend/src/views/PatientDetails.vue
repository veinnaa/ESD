<template>
  <div class="details">
    <PatientDetailsView />
    
  </div>
</template>

<script>
// @ is an alias to /src
import PatientDetailsView from '@/components/PatientDetailsView'

export default {
  name: 'PatientDetails',
  components: {
    PatientDetailsView
  },
}
</script>
<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.details
  min-height: 100vh
</style>