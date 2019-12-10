<template>
   <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">股票交易</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>已购</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>股市</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">FUNDS :{{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
  
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }    
    },
    methods: {
        ...mapActions([
            'randomizeStocks'
        ]),
        endDay(){
            this.randomizeStocks();

        }
    }

}
</script>

<style>

</style>