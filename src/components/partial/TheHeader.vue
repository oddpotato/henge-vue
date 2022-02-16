<template>
<header><h3>Hi!</h3>    
<router-link to="/druids">Druids</router-link>
<router-link to="/">Homepage</router-link>
</header>
</template>

<script>

export default {
    
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
}

</style>