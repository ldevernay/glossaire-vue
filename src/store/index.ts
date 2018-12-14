import Vue from "vue"
import Vuex from "vuex"
import { auth } from './modules/Auth'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        auth
    }
})