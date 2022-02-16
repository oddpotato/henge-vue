<template>
<the-header><router-view></router-view></the-header>
<homepage></homepage>
</template>

<script>
import Homepage from './pages/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage,
  }
}
</script>

<style>
#app {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
