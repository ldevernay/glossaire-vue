import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex";
import {State} from "./types";
// Graphql module
import {allUser, currentUser} from "./schema";
// @ts-ignore
import { apolloClient } from "@/ApolloClient.ts"
import {LS_AUTH_TOKEN} from "../../../config";


const state: State = {
    currentUser: null,
    users: []
};

const getters: GetterTree<State, any> = {
    getAllUser: state => state.users,
    getCurrentUser: state => state.currentUser
};

const mutations: MutationTree<State> = {
    GET_DATA_USERS(state, payload){
        apolloClient.query({
            query: allUser,
        })
            .then(res => res.data.users.forEach(user  => state.users.push(user)))
            .catch(err => err ? console.log(err) : "");
    },
    GET_DATA_CURRENT_USER(state, payload){
        apolloClient.query({
            query: currentUser
        })
            .then(res => state.currentUser = res.data.me)
            .catch(err => err ? localStorage.removeItem(LS_AUTH_TOKEN) : "")
    },
};

const actions: ActionTree<State, any> = {
    GET_ALL_USERS({commit}){
        commit('GET_DATA_USERS')
    },
    GET_CURRENT_USER({commit}){
      commit('GET_DATA_CURRENT_USER')
    }
};

export const users = {
    state,
    getters,
    mutations,
    actions
};