<template>
<div id="wrapper">
    <p> Booooop </p>
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

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

  #wrapper {
  opacity: 0.88;
  background: url("../assets/stonehenge2.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  }
</style>