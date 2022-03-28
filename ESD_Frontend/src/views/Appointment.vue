<template>
  <div class="explore" >
    <AppointmentsView />
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentsView from '@/components/AppointmentsView'

export default {
  name: 'explore',
  components: {
    AppointmentsView
  }
}
</script>
<style lang="sass" scoped>
.appointment
  min-height: 100vh
</style>
