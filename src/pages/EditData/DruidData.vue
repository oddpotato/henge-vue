<template>
<div>
    <router-link to="/edit/add">Add New Druid</router-link>
    <router-link to="/edit/delete">Remove Druid</router-link>
</div>
<div>
    <h1>Edit Druids</h1>
    <select v-model="selectedValue">
         <option disabled value="">Please select one</option>
         <option v-for="(item, index) in listofdruids" :value="item.id" :key="index">{{item.firstname}}</option>
    </select>
    <div>
        <form v-for="item in selectedDruid" :key="item.id" v-on:submit.prevent="updateDruid(item)">
        First Name: <input type="text" label="firstname" v-model="item.firstname"/><br>
        Last Name: <input type="text" label="lastname" v-model="item.lastname"/><br>
        <!-- Gods: <input type="text" label="gods" v-model="item.gods"/><br> -->

        Picture URL: <input type="text" label="picture" v-model="item.picture"/><br>
        Ritual: <input type="text" label="robecolor" v-model="item.ritual"/><br>
        Beard Length: <input type="text" label="robecolor" v-model="item.beardlength"/> (inches)<br>
        Bio: <textarea lable="bio" v-model="item.bio"/><br>


        Gods: <br>
        <div v-for="god in gods" :key="god">
        <input v-model="item.gods" type="checkbox" :id="god" :value="god" :label="god">
        <label :for="god">{{ god }}</label><br>
        </div>
        {{item.gods}}<br>
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
            selectedValue: "",
    }
    },
    computed:{
        ...mapGetters('druids', ['listofdruids', 'robecolors', 'gods']),
        selectedDruid() {
            return this.listofdruids.filter(druid => druid.id === this.selectedValue)
        }
    },
    methods: {
        ...mapActions('druids', ['retrieveDruids', 'updateDruid']),
    },
})
</script>

<style scoped>

h1 {
    font-size: 40px;
}

</style>