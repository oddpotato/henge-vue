export default {
    retrieveDruids(context) {
        console.log('Let us get the druids');
        context.commit('retrieveDruids');
    },
    deleteDruid(context, payload) {
        console.log('one druid gets nuked');
        context.commit('deleteDruid', payload)
    },
    addDruid(context, payload) {
        console.log(payload)
        context.commit('addDruid', payload)
    },
    updateDruid(context, payload) {
        console.log(payload)
        context.commit('updateDruid', payload)
    }
}