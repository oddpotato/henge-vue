<template>
<h1>Hello there</h1>

<form @submit.prevent="addDruid(druid); reset()">
    First Name: <input type="text" label="firstname" v-model="druid.firstname"/><br>
    Last Name: <input type="text" label="lastname" v-model="druid.lastname"/><br>
    Gods: <input type="text" label="gods" v-model="druid.gods"/><br>
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
                gods: "",
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