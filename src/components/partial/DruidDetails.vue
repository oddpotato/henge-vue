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
        // let delaymessageone = setTimeout(console.log('Before created ' + this.druidSelected), 1500)
        setTimeout(() => {console.log('Before created ' + this.druidSelected)}, 200);
        // this.druidSelected = this.$store.getters['druids/listofdruids'].filter(druid => druid.firstname === this.firstname);
        this.druidSelected = setTimeout(this.$store.getters['druids/listofdruids'].filter(druid => druid.firstname === this.firstname), 300);
        setTimeout(() => {this.druidSelected = this.$store.getters['druids/listofdruids'].filter(druid => druid.firstname === this.firstname)}, 400);
        setTimeout(() => {console.log('After created ' + this.druidSelected)}, 420) 
        setTimeout(() => {this.picture = this.druidSelected[0].picture}, 480)
    },
    computed:{
        ...mapGetters('druids', ['listofdruids']),
        contactLink(){
            return this.$route.path + '/contact'
        },
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