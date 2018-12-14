import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex";
import {State} from "./types";
// Graphql module
// @ts-ignore
import { apolloClient } from "@/ApolloClient.ts"
// @ts-ignore
import {LS_AUTH_TOKEN} from "@/config";


const state: State = {
    user: undefined
};

const getters: GetterTree<State, any> = {
};

const mutations: MutationTree<State> = {

};

const actions: ActionTree<State, any> = {

};

export const auth = {
    state,
    getters,
    mutations,
    actions
};