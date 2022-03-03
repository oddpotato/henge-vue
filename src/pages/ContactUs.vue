<template>
<form @submit.prevent>
    <input type="text" label="Boop" />
    {{this.firstname}}
    {{this.lastname}}
</form>
</template>


<script>

export default({
    props: ['firstname', 'lastname']
})

</script>

<style scoped>

</style>