<template>
<section id="druid">
    <h3>{{this.firstname}} {{this.lastname}}</h3>
    <div>
    <div name="img-left" style="float:left"><img :src="this.picture" /></div>
    <p style="float:right">Boop</p>
    </div>
</section>
<button><router-link :to="contactLink">Contact {{this.firstname}}</router-link></button>
<router-view></router-view>
</template>


<script>

import {mapGetters} from 'vuex';

export default ({
    props: ['firstname', 'lastname'],
    data(){
        return {
            druidSelected: null,
            picture: null
        }
    },
    created(){
        console.log('Before created ' + this.druidSelected)
        this.druidSelected = this.$store.getters['druids/listofdruids'].filter(druid => druid.firstname === this.firstname);
        console.log('After created ' + this.druidSelected)
        this.picture = this.druidSelected[0].picture
    },
    computed:{
        ...mapGetters('druids', ['listofdruids']),
        // picture(){
        //     return this.druidSelected[0].picture
        // }
        contactLink(){
            return this.$route.path + '/contact'
        },
        // routerLink(){
        //     return router.push({ name: 'contact', params: { firstname: this.firstname, lastname: this.lastname } })
        // }
    },
    methods:{
    }

})
</script>


<style scoped>

#druid {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  width: 35rem;
  border-radius: 25px;
  /* height: 35rem; */
  border: 1px solid #424242;
  background-color: white;
  height: fit-content;
}


#img-left{
float:left;
width:50%
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.95;
}

</style>