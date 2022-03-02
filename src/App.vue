<template>
<the-header v-if="isNotHomePage && !isErrorPage"/>
<router-view v-if="isNotHomePage && !isErrorPage"></router-view>
<homepage v-if="!isNotHomePage && !isErrorPage"></homepage>
<error-template v-if="isNotHomePage && isErrorPage"></error-template>

</template>

<script>

import Homepage from './pages/Homepage.vue'
import ErrorTemplate from './pages/ErrorTemplate.vue'
// import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Homepage,
    ErrorTemplate
  },
  mounted() {
        this.$store.dispatch('druids/retrieveDruids')
    },
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'homepage'
    },
    isErrorPage(){
      return this.$route.name === 'errorpage'
    },
    // ...mapGetters('isLoggedIn')
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

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

a:active,
a.router-link-active {
  text-decoration-line: underline;
  text-decoration-color: black;
}


</style>
