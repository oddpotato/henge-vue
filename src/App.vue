<template>
<the-header v-if="isNotHomePage"/>
<router-view v-if="isNotHomePage"></router-view>
<homepage v-if="!isNotHomePage"></homepage>
</template>

<script>
import Homepage from './pages/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage,
  },
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'homepage'
    }
  }
}
</script>

<style>

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
  font-family: 'PT Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
