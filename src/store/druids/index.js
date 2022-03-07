// import json from '@/data/druids.json'

import druidsActions from './actions.js'
import druidsGetters from './getters.js'
import druidsMutations from './mutations.js'

const druidsModule = {
    namespaced: true,
    state() {
        return {
            listofdruids: [],
            isdeleting: false,
            druidBeardLength: [],
            robecolor: ['black', 'white', 'orange', 'blue', 'green', 'rainbow'],
            gods: ["Gaia", "Sobek", "Thor", "Loki", "The Self", "Lliira"]
        }
    },
    mutations: druidsMutations,
    actions: druidsActions,
    getters: druidsGetters
}

export default druidsModule;