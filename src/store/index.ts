import Vue from "vue"
import Vuex from "vuex"
import { auth } from './modules/Auth'
import { users } from './modules/Users'
import { words } from './modules/Words'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        users,
        words
    }
});