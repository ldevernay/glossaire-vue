import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex";
import {State} from "./types";
// Graphql module
import {getWord, getWords, createWord} from "./schema";
// @ts-ignore
import { apolloClient } from "@/ApolloClient.ts"
import {LS_AUTH_TOKEN} from "@/config";


const state: State = {
    words: [],
    word: undefined
};

const getters: GetterTree<State, any> = {
    getWords: state => state.words,
    getWord: state => state.word
};

const mutations: MutationTree<State> = {
    GET_DATA_WORDS(state){
        console.log("here")
        apolloClient.query({
            query: getWords
        })
            .then(res => {
                console.log(res.data.words);
                state.words = res.data.words
                console.log('here', state.words)
            })
            .catch(err => err ? console.error(err.message) : "")
    },
    GET_DATA_WORD(state, payload){
        apolloClient.query({
            query: getWord,
            variables: {
                id: payload.id
            }
        })
            .then(res => state.word = res.data.word)
            .catch(err => err ? console.error(err.message) : "")
    },
    STORE_DATA_WORD(state, payload){
        apolloClient.mutate({
            mutation: createWord,
            variables: {
                name: payload.name,
                definition: payload.definition
            }
        })
            .then(res => console.log(res.data))
            .catch(err => err ? console.error(err) : "")
    }
};

const actions: ActionTree<State, any> = {
    GET_ALL_WORDS({commit}){
        commit('GET_DATA_WORDS');
    },
    GET_WORD({commit}, payload){
        commit('GET_DATA_WORD', payload);
    },
    CREATE_NEW_WORD({commit}, payload){
        commit('STORE_DATA_WORD', payload);
    }
};

export const words = {
    state,
    getters,
    mutations,
    actions
};