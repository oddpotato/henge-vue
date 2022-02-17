<template>

<div>
    <h1>I am iterating over json entries from getter/vuex</h1>
    <ul v-for="(item, index) in listofdruids.druids" :key="index">
    <li>
    {{ item.id }}- {{item.firstname}} - {{item.lastname}}- {{item.gods}} - {{item.picture}} - {{item.robecolor}} - {{item.ritual}} - {{item.bio}}
    </li>
    </ul>
</div>
<!-- <div>
    <h1>I am iterating over json entries and attempting to bind them to specific properties</h1>
    <form v-for="(item, index) in listofdruids.druids" :key="index" v-on:submit.prevent="updateJSON(item)">
        <input type="text" label="firstname" v-model="item.firstname"/>
        <input type="text" label="lastname" v-model="item.lastname"/>
        <input type="text" label="gods" v-model="item.gods"/>
        <input type="text" label="picture" v-model="item.picture"/>
        <input type="text" label="robecolor" v-model="item.ritual"/>
        <input type="text" lable="bio" v-model="item.bio">
        <button type="submit">Submit Placeholder</button>
    </form>
</div> -->
<div>
    <h1>I am attempting to send a druid to firebase</h1>
    <form @submit.prevent="submitDruidTest">
        Id: <input type="text" label="id" v-model="id"/><br>
        First Name: <input type="text" label="firstname" v-model="firstname"/><br>
        Last Name: <input type="text" label="lastname" v-model="lastname"/><br>
        Gods: <input type="text" label="gods" v-model="gods"/><br>
        Beard Length: <input type="text" label="beardlength" v-model="beardlength"/><br>
        Robe Color: <input type="text" label="robecolor" v-model="robecolor"/><br>
        Picture: <input type="text" label="picture" v-model="picture"/><br>
        Ritual: <input type="text" label="robecolor" v-model="ritual"/><br>
        Bio: <input type="text" lable="bio" v-model="bio"><br>
    <button type="submit">Add druid</button>
    </form>
</div>

<div>
<button @click="viewDruids()">View Druids</button>    
{{ druids }}
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default({
    data(){
        return{
            id: "",
            firstname: "",
            lastname: "",
            picture: "",
            beardlength: "",
            gods: "",
            robecolor: "",
            ritual: "",
            bio: "",
            druids: []
    }
    },
    computed:{
        ...mapGetters('druids', ['listofdruids'])
    },
    methods: {
        testButton(item){
            console.log(item);
        },
        ...mapActions('druids', ['updateJSON']),
        submitDruidTest(){
            console.log('submit triggered')
            console.log(this.firstname)
            fetch('https://hengejsontest-default-rtdb.firebaseio.com/druids.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:
                    JSON.stringify({
                        id: this.id,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        picture: this.picture,
                        beardlength: this.beardlength,
                        gods: this.gods,
                        robecolor: this.robecolor,
                        ritual: this.ritual,
                        bio: this.bio
                    })
            })
            this.id = '',
            this.firstname = '',
            this.lastname = '',
            this.picture = '',
            this.beardlength = '',
            this.gods = '',
            this.robecolor = '',
            this.ritual = ''
            this.bio = ''
        },
        viewDruids(){
            console.log('Hello this triggered');
            fetch('https://hengejsontest-default-rtdb.firebaseio.com/druids.json').then((response) => {
                if(response.ok){
                    return response.json();
                }
            }).then((data) => {
                console.log(data);
                const results = []
                for (const id in data){
                    results.push({id: id, name: data[id].firstname});
                }
                this.druids = results
                console.log("The result is " + this.druids)
            });
        },
    },
})
</script>

<style scoped>


</style>