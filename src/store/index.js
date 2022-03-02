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
    },
    actions: {
        login(context) {
            console.log('Login');
            context.commit('Login');
        },
        logout(context) {
            console.log('Logout')
            context.commit('Logout');
        }
    },
    mutations: {
        Login(state) {
            state.loggedIn = true
        },
        Logout(state) {
            state.loggedIn = false
        }
    }
})