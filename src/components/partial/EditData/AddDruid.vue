<template>
<h1>Hello there</h1>

<form @submit.prevent="addDruid(druid); reset()">
    First Name: <input type="text" label="firstname" v-model="druid.firstname"/><br>
    Last Name: <input type="text" label="lastname" v-model="druid.lastname"/><br>
    Gods: <br>
    <div v-for="god in gods" :key="god">
        <input v-model="druid.gods" type="checkbox" :id="god" :value="god" :label="god">
        <label :for="god">{{ god }}</label><br>
    </div>
    {{druid.gods}}<br>
    Beard Length: <input type="text" label="beardlength" v-model="druid.beardlength"/><br>
    <div v-for="color in robecolors" :key="color">
    Robe Color: <input type="text" label="robecolor" v-model="druid.robecolor"/><br>
    </div>
    Picture: <input type="text" label="picture" v-model="druid.picture"/><br>
    Ritual: <input type="text" label="robecolor" v-model="druid.ritual"/><br>
    Bio: <textarea lable="bio" v-model="druid.bio"/><br>
    <button type="submit">Add druid</button>
</form>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default{
    data(){
        return{
            druid: {
                firstname: "",
                lastname: "",
                picture: "",
                beardlength: "",
                gods: [],
                robecolor: "",
                ritual: "",
                bio: "",
            }
        }
    },
    computed:{
        ...mapGetters('druids', ['listofdruids', 'gods', 'robecolors'])
    },
    methods:{
        ...mapActions('druids', ['addDruid']),
        reset(){
            this.druid = {
                firstname: "",
                lastname: "",
                picture: "",
                beardlength: "",
                gods: "",
                robecolor: "",
                ritual: "",
                bio: "",
            }
        }
    }
}

</script>



<style scoped>

</style>