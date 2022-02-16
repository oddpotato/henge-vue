<template>
<the-header v-if="isNotHomePage"/>
<router-view></router-view>
</template>

<script>
// import Homepage from './pages/Homepage.vue'

export default {
  name: 'App',
  components: {
    // Homepage,
  },
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'homepage'
    }
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
