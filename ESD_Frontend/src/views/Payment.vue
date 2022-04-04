<template>
  <div class="payment">
    <h2>Payment</h2>
    <CheckoutForm />
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutForm from '@/components/CheckoutForm'

export default {
  name: 'payment',
  components: {
    CheckoutForm
  }
}
</script>
<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.payment
  min-height: 100vh
  margin-top: 30px
  h2
    font-weight: bold
    color: $main
    text-align: center
</style>
