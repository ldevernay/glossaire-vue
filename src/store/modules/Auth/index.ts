import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex";
import {State} from "./types";
// Graphql module
import {login, me, register} from "./schema";
// @ts-ignore
import { apolloClient } from "@/ApolloClient.ts"
// @ts-ignore
import {LS_AUTH_TOKEN} from "@/config";


const state: State = {
    user: undefined
};

const getters: GetterTree<State, any> = {
    getUser: (state) => state.user
};

const mutations: MutationTree<State> = {
    mutateLogin(state, payload){
        apolloClient.mutate({
            mutation: login,
            variables:{
                email:payload.email,
                password: payload.password
            }
        })
            .then(res => {
                localStorage.setItem(LS_AUTH_TOKEN, res.data.login);
            })
            .catch(err => err ? console.log(err) : "")
    }
};

const actions: ActionTree<State, any> = {
    LOGIN({commit}, payload){
        commit("mutateLogin", payload);
    },
    REGISTER({commit}, payload){
        if(payload.password === payload.passwordRepeat){
            apolloClient.mutate({
                mutation: register,
                variables:{
                    email: payload.email,
                    password: payload.password
                }
            })
                .then(res => console.log(res))
                .catch(err => err ? console.log(err) : "")
        }
    }
};

export const auth = {
    state,
    getters,
    mutations,
    actions
};