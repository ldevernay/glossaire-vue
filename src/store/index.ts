import Vue from "vue"
import Vuex from "vuex"
import {todos} from './modules/todos/todos'
import { auth } from './modules/Auth'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        todos,
        auth
    }
})