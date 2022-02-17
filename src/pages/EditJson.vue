<template>
<div>
    <h1>I am iterating over json entries and attempting to bind them to specific properties</h1>
    <form v-for="(item, index) in this.druids" :key="index" v-on:submit.prevent="updateDruidTest(item.id, index)">
        Id is {{item.id}} - {{item.firstname}} - <input type="text" label="firstname" v-model="item.firstname"/>
        <input type="text" label="lastname" v-model="item.lastname"/>
        <input type="text" label="gods" v-model="item.gods"/>
        <input type="text" label="picture" v-model="item.picture"/>
        <input type="text" label="robecolor" v-model="item.ritual"/>
        <input type="text" lable="bio" v-model="item.bio">
        <button type="submit">Submit Placeholder</button>
        <button @click="deleteDruid(item.id)">Delete Druid</button>
    </form>
</div>
<div>
    <h1>I am iterating over json entries and I want to delete and reload the page</h1>
    <form v-for="(item, index) in this.druids" :key="index" v-on:submit.prevent="deleteDruid(item.id)">
        <button type="Submit">Delete Druid</button>
    </form>
</div>
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
        <h1>This is the raw Druid Data BB</h1>
<button @click="viewDruids()">View Druids</button>
<p>{{ druids }}</p>
</div>

<div>
    <h1>This is trying to access a specific item</h1>
    <form v-for="(item, index) in this.druids" :key="index" v-on:submit.prevent="viewSpecificDruid(item.id)">
        <button type="submit">Request Item</button>
    </form>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default({
    data(){
        return {
            id: "",
            firstname: "",
            lastname: "",
            picture: "",
            beardlength: "",
            gods: "",
            robecolor: "",
            ritual: "",
            bio: "",
            druids: [],
            isLoading: false
    }
    },
    mounted() {
        this.viewDruids();
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
            this.isLoading = true
            fetch('https://hengejsontest-default-rtdb.firebaseio.com/druids.json').then((response) => {
                if(response.ok){
                    return response.json();
                }
            }).then((data) => {
                this.isLoading = false
                console.log(data);
                const results = []
                for (const id in data){
                    results.push({id: id, firstname: data[id].firstname, lastname: data[id].lastname, picture: data[id].picture, beardlength: data[id].beardlength, gods: data[id].gods, robecolor: data[id].robecolor, ritual: data[id].ritual, bio: data[id].bio}); 
                }
                this.druids = results
                console.log("The result is " + this.druids)
            });
        },
        viewSpecificDruid(id){
            console.log('Hello this triggered');
            this.isLoading = true
            fetch(`https://hengejsontest-default-rtdb.firebaseio.com/druids/${id}.json`).then((response) => {
                if(response.ok){
                    return response.json();
                }
            }).then((data) => {
                this.isLoading = false
                console.log(data);
            });
        },
        updateDruidTest(id, index){
            console.log('update triggered')
            console.log(this.firstname)
            fetch(`https://hengejsontest-default-rtdb.firebaseio.com/druids/${id}.json`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    id: this.id,
                    firstname: this.druids[index].firstname,
                    lastname: this.druids[index].lastname,
                    picture: this.druids[index].picture,
                    beardlength: this.druids[index].beardlength,
                    gods: this.druids[index].gods,
                    robecolor: this.druids[index].robecolor,
                    ritual: this.druids[index].ritual,
                    bio: this.druids[index].bio
            })
    })
    },
        deleteDruid(id){
            console.log('delete triggered')
            fetch(`https://hengejsontest-default-rtdb.firebaseio.com/druids/${id}.json`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
            body: null
    })
    }
    },
})
</script>

<style scoped>


</style>