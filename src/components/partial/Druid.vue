<template>
    <li>
        <h1>{{firstname}} {{lastname}}</h1>
    <p style="white-space: pre-line;">{{bio}}</p>
    </li>
</template>

<script>

import { mapGetters } from 'vuex';

export default{
    props: ['firstname', 'lastname', 'bio'],
    computed: {
        ...mapGetters('druids', ['listofdruids'])
    }
}
</script>

<style scoped>

</style>