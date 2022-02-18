<template>

    <li>
        <h1>{{firstname}} {{lastname}}</h1>
        <router-link to=/druids/:id><img :src="druidpicture"/></router-link>
    <p style="white-space: pre-line;">{{bio}}</p>
    </li>
</template>

<script>

import { mapGetters } from 'vuex';

export default{
    props: ['id', 'firstname', 'lastname', 'bio', 'druidpicture'],
    data(){
        return{
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
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  width: 35rem;
  border-radius: 25px;
  /* height: 35rem; */
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
}

h1 {
    color: #807e7c;
}

p {
    color: #807e7c
}
</style>