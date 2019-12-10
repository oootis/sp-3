<template>
  <div class="col-sm-6 col-md-4">
      <div class="panel panel-success">
          <div class="panel-heading">
              <h3 class="panel-title">
                  {{stock.name}}
                  <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
              </h3>
          </div>
          <div class="panel-body">
              <div class="pull-left">
                  <input 
                         type="number"
                         class="form-control"
                         placeholder="数量"
                         :class="{danger: insufficientQuantity}"
                         v-model.number="quantity">
                         <!-- By default, the v-model directive binds the value as a String.所以如果想要 bind quantity as a number, 加一个.number-->
              </div>
              <div class="pull-right">
                  <button 
                         class="btn btn-info"
                         @click="sellStock"
                         :disabled=" insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                         {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    data() {
        return{
            quantity: 0,
        }
    },
    computed: {
        insufficientQuantity() {
              return this.quantity > this.stock.quantity;
          }

    },
    methods: {
        ...mapActions({
            sell: 'sellStock'// 将 `this.sellStock()` 映射为 `this.$store.dispatch('increment')`
        }),
        sellStock() {
              const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sell(order);
            this.quantity = 0;

        }
    }

}
</script>

<style>

</style>