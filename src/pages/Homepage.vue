<template>
<div id="wrapper">
    <h3> Booooop </h3>
    <p><router-link to="/druids">Druids</router-link></p>
</div>
</template>

<script>
export default{
    data() {
    return {
    };
  }
}
</script>

<style scoped>
  #wrapper {
  opacity: 0.88;
  background: url("../assets/stonehenge.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;}
</style>