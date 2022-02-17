<template>

<div>
    <h1>I am iterating over json entries from getter/vuex</h1>
    <ul v-for="(item, index) in listofdruids.druids" :key="index">
    <li>
    {{ item.id }}- {{item.firstname}} - {{item.lastname}}- {{item.gods}} - {{item.picture}} - {{item.robecolor}} - {{item.ritual}} - {{item.bio}}
    </li>
    </ul>
</div>

<button @click="viewData()">View Data</button>    
</template>

<script>

import { mapGetters } from 'vuex'

export default({
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters('druids', ['listofdruids'])
    },
    methods: {
        viewData(){
            console.log('Hello this triggered');
            // console.log(this.druidData);
            console.log(this.druidData[0].id)
            console.log(this.druidData[0].firstname)
            console.log(Object.values(this.druidData[0]))
        }
    }
})
</script>

<style scoped>


</style>