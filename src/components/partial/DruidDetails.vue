<template>
    <h3>Hello</h3>
</template>


<script>

import {mapGetters} from 'vuex';

export default ({
    props: ['firstname', 'lastname'],
    computed: {
    ...mapGetters('druids', ['listofdruids']),
    }

})
</script>


<style scoped>


</style>