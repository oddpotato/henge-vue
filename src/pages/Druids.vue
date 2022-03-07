<template>
    <section>
    <div>
        <h3>FILTER DRUIDS</h3>
        <button @click="notFiltered">Reset</button>
        <button @click="isFiltered">Filter</button>
        <button @click="getBeardLength">Beard Length</button>
        {{ druidBeardLength }}
    </div>
</section>
<section>
<div>
<h3> Meet Our Druids </h3>
    <div>
    <ul v-if="!this.filtered">
        <individual-druid v-for="druid in listofdruids" 
        :key= druid.id
        :id = druid.id
        :firstname = druid.firstname
        :lastname = druid.lastname
        :druidpicture = druid.picture
        :bio = druid.bio></individual-druid>
    </ul>
</div>
</div>
</section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import IndividualDruid from '../components/partial/Druid.vue'

export default {
    name: 'Druids',
    data(){
        return {
            filtered: false
        }
    },
    components: {
        IndividualDruid
    },
    computed:{
        ...mapGetters('druids', ['listofdruids', 'druidBeardLength'])
    },
    methods:{
        ...mapActions('druids', ['getBeardLength']),
        isFiltered(){
            this.filtered = true
        },
        notFiltered(){
            this.filtered = false
        }
    }
}
</script>

<style scoped>

ul {
  list-style: none;
  display: grid;
  margin: 0;
  padding: 5px;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(100px, auto);
  break-inside: avoid-column;
}

  /* #wrapper {
  opacity: 0.92;
  background: url("../assets/GeneralForest.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  } */

</style>