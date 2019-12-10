<template>
  <div class="jumbotron">
    <h1>WELCOME!</h1>
    <p>HERE IS YOUR FUNDS: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
}
}
</script>

<style>

</style>