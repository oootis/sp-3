<template>
  <div class="col-sm-6 col-md-4">
      <div class="panel panel-info">
          <div class="panel-heading">
              <h3 class="panel-title">
                  {{stock.name}}
                  <small>(Price: {{stock.price}})</small>
              </h3>
          </div>
          <div class="panel-body">
              <div class="pull-left">
                  <input 
                         type="number"
                         class="form-control"
                         placeholder="数量"
                         :class="{danger: insufficientFunds}"
                         v-model.number="quantity">
                         <!-- By default, the v-model directive binds the value as a String.所以如果想要 bind quantity as a number, 加一个.number-->
              </div>
              <div class="pull-right">
                  <button 
                         class="btn btn-info"
                         @click="buyStock"
                         :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
                         {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return{
            quantity: 0,
        }
    },
    computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }

    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
           this.$store.dispatch('buyStock', order);
           this.quantity = 0;
        }
    }
    

}
</script>

<style>
.danger {
        border: 1px solid red;
    }
</style>