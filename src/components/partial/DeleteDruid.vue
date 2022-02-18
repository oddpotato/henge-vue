<template>
    <div>
    <h1>Delete Druids</h1>
    <form v-for="(item, index) in listofdruids" :key="index" v-on:submit.prevent="deleteDruid(item.id); retrieveDruids()">
        Name: {{item.firstname}} {{item.lastname}} - <button type="Submit">Delete Druid</button>
    </form>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default{
    computed:{
        ...mapGetters('druids', ['isdeleting', 'listofdruids'])
    },
    methods:{
        ...mapActions('druids', ['deleteDruid', 'retrieveDruids'])
    }
}

</script>

<style scoped>

</style>