<template>

    <li>
        <h1>{{firstname}} {{lastname}}</h1>
        <router-link :to="linkToDruid"><img :src="druidpicture"/></router-link>
    <p style="white-space: pre-line;">{{bio}}</p>
    </li>
    <router-view></router-view>
</template>

<script>

import { mapGetters } from 'vuex';

export default{
    props: ['id', 'firstname', 'lastname', 'bio', 'druidpicture'],
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters('druids', ['listofdruids']),
        linkToDruid(){
            return this.$route.path + '/' + this.firstname + this.lastname
        }
    },
    methods: {
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
  border: 1px solid #424242;
  background-color: white;
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.95;
}

h1 {
    color: #807e7c;
}

p {
    color: #807e7c;
}

img:hover {
  border: 2.5px solid #807e7c;
  object-fit: cover;
  opacity: 1;
}

</style>