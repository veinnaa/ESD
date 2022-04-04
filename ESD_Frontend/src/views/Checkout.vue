<template>
  <div class="checkout">
    <h2>Payment Checkout</h2>

    <CheckoutView />
  </div>
</template>



<script>
// @ is an alias to /src
import CheckoutView from '@/components/Checkout'

export default{
  name: "Checkout",
  components: {
    CheckoutView
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

.checkout
  min-height: 100vh
  margin-top: 30px
  h2
    font-weight: bold
    color: $main
    text-align: center
</style>