export default {
    updateJSON(state, payload) {
        let druidItem = payload
            // const druidListIndex = state.listofdruids.findIndex(
            //     (dd) => dd.id === druidItem.id
            // );
        console.log(druidItem.id)
        if (state.listofdruids.druids.id === druidItem.id) {
            console.log(state.listofdruids.druids)
        }
        for (let i = 0; i < state.listofdruids.druids.length; i++) {
            if (state.listofdruids.druids[i].id === druidItem.id) {
                console.log(state.listofdruids.druids[i])
                state.listofdruids.druids[i] = druidItem
                console.log(state.listofdruids.druids[i])
            }
        }
    }
}