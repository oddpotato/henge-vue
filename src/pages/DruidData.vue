<template>
<div>
    <router-link to="/edit/add">Add New Druid</router-link>
    <router-link to="/edit/delete">Remove Druid</router-link>
</div>
<div>
    <h1>Edit Druids</h1>
    <select v-model="selectedValue">
         <option disabled value="">Please select one</option>
         <option v-for="(item, index) in listofdruids" :value="item.firstname" :key="index">{{item.firstname}}</option>
    </select>
    <div>
        <form v-for="item in selectedDruid" :key="item.id" v-on:submit.prevent="updateDruid(item)">
        Id is {{item.id}} - {{item.firstname}} - <input type="text" label="firstname" v-model="item.firstname"/><br>
        <input type="text" label="lastname" v-model="item.lastname"/><br>
        <input type="text" label="gods" v-model="item.gods"/><br>
        <input type="text" label="picture" v-model="item.picture"/><br>
        <input type="text" label="robecolor" v-model="item.ritual"/><br>
        <input type="text" lable="bio" v-model="item.bio"><br>
        <button type="submit">Update Druid</button>
    </form>
    </div>
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default({
    data(){
        return {
            selectedValue: ""
    }
    },
    computed:{
        ...mapGetters('druids', ['listofdruids']),
        selectedDruid() {
            return this.listofdruids.filter(druid => druid.firstname === this.selectedValue)
        }
    },
    methods: {
        ...mapActions('druids', ['retrieveDruids', 'updateDruid']),
    },
})
</script>

<style scoped>


</style>