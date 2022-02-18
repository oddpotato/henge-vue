<template>

    <li>
        <h1>{{firstname}} {{lastname}}</h1>
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
  /* max-width: 25rem; */
  width: 20rem;
  height: 20rm;
}

img {
  width: 5rem;
  height: 5rem;
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