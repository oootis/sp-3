<template>
  <div>
    <appStock v-for="(stock, index) in stocks" :key="index" :stock="stock"></appStock>
                              <!-- stocks是下面getter的一个属性，直接来自state-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock'

export default {
  computed : {
    ...mapGetters({
                stocks: 'stockPortfolio'
            })

  },
  components: {
    appStock: Stock
  }

}
</script>

<style>

</style>