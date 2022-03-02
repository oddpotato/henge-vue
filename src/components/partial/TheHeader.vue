<template>
<header>
<router-link to="/druids">Druids</router-link>
<router-link to="/">Homepage</router-link>
<router-link v-if="isLoggedIn" to="/edit">Update Listings</router-link>
<router-link v-if="isLoggedIn" to="/messages">Read Messages</router-link>
<button v-if="isLoggedIn" @click="logout">Logout</button>
<button v-if="!isLoggedIn" @click="login">Login</button>
</header>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
  ...mapActions(['login', 'logout'])
  }
}
</script>


<style scoped>
header {
  height: 2rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

a:hover {
  border: 1px solid #f391e3;
}

</style>