<template>
  <div>
      <appStock v-for="(stock, index) in stocks" :key="index" :stock="stock"></appStock>
  </div>
</template>

<script>
import Stock from './Stock'
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
           return this.$store.getters.stocks;
        }
    }

}
</script>

<style>

</style>