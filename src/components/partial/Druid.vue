<template>

    <li>
        <h1>{{firstname}} {{lastname}}</h1>
        <!-- <img src="@/assets/Bruh.png">
        <img src="@/assets/DILF.png"> -->
        <img :src="druidpicture"/>
    <p style="white-space: pre-line;">{{bio}}</p>
    </li>
</template>

<script>

import { mapGetters } from 'vuex';

export default{
    props: ['id', 'firstname', 'lastname', 'bio', 'druidpicture'],
    data(){
        return{
            picture2: 'DILF.png',
            imgUrl: ""
        }
    },
    computed: {
        ...mapGetters('druids', ['listofdruids']),
    },
    methods: {
        getImgUrl: function (imagePath) {
            return require('@/assets/' + imagePath);
    }
    }
}
</script>

<style scoped>

</style>