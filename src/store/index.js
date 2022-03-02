import { createStore } from 'vuex'
import druidsModule from './druids'

export default createStore({
    modules: {
        druids: druidsModule,
    },
    state() {
        return {
            loggedIn: false,
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.loggedIn;
        },
    }
})