<template>
<div>
<h3> Meet Our Druids </h3>
{{listofdruids}}
<div>
    <ul>
        <individual-druid v-for="druid in listofdruids" 
        :key="druid.id"
        :firstname = druid.firstname
        :lastname = druid.lastname
        :picture = druid.picture
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
    components: {
        IndividualDruid
    },
    computed:{
        ...mapGetters('druids', ['listofdruids'])
    },
}
</script>

<style scoped>

</style>