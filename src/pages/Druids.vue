<template>
<div>
<h3> Meet Our Druids </h3>
<!-- <div class="wrapper"> -->
    <div>
    <ul>
        <individual-druid v-for="druid in listofdruids" 
        :key= druid.id
        :id = druid.id
        :firstname = druid.firstname
        :lastname = druid.lastname
        :druidpicture = druid.picture
        :bio = druid.bio
        :beardlength = druid.beardlength
        :gods = druid.gods
        :robecolor = druid.robecolor
        :ritual = druid.ritual></individual-druid>
    </ul>
</div>
</div>
</template>

<script>

import { mapGetters } from 'vuex';
import IndividualDruid from '../components/partial/Druid.vue'

export default {
    name: 'Druids',
    components: {
        IndividualDruid
    },
    computed:{
        ...mapGetters('druids', ['listofdruids'])
    },
    methods:{
        getImgUrl: function (imagePath) {
        return require('@/assets/' + imagePath);
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
</style>