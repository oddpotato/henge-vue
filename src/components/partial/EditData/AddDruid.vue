<template>
<h1>Hello there</h1>

<form @submit.prevent="addDruid(druid); reset()">
    First Name: <input type="text" label="firstname" v-model="druid.firstname"/><br>
    Last Name: <input type="text" label="lastname" v-model="druid.lastname"/><br>
    Gods: <br>
    <input type="checkbox" id="Gaia" value="Gaia" v-model="druid.gods">
    <label for="Gaia">Gaia</label><br>
    <input type="checkbox" id="Sobek" value="Sobek" v-model="druid.gods">
    <label for="Sobek">Sobek</label><br>
    <input type="checkbox" id="Thor" value="Thor" v-model="druid.gods">
    <label for="Thor">Thor</label><br>
    <input type="checkbox" id="Loki" value="Loki" v-model="druid.gods">
    <label for="Sobek">Sobek</label><br>
    <input type="checkbox" id="The self" value="The self" v-model="druid.gods">
    <label for="The self">The self</label><br>
    <input type="checkbox" id="Lliira" value="Lliira" v-model="druid.gods">
    <label for="Lliira">Lliira</label><br>
    {{druid.gods}}<br>
    Beard Length: <input type="text" label="beardlength" v-model="druid.beardlength"/><br>
    Robe Color: <input type="text" label="robecolor" v-model="druid.robecolor"/><br>
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
        ...mapGetters('druids', ['listofdruids'])
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