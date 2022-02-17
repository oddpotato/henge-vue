import { createStore } from 'vuex'
import druidsModule from './druids'

export default createStore({
    modules: {
        druids: druidsModule,
    },
})