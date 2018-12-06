import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex";
import {State} from "./types";

const state: State = {
    todos:[
        {text: "Buy milk", checked: false},
        {text: "Dev Typeorm", checked: true},
        {text: "Buy milk", checked: false}
    ]
}

const getters: GetterTree<State, any> = {
    todos: state => state.todos.filter(todo => !todo.checked),
    dones: state => state.todos.filter(todo => todo.checked)
}

const mutations : MutationTree<State> = {
    addTodo(state: State, text: string){
        state.todos.push({text: text, checked: false})
    }
}

const actions: ActionTree<State, any> = {
    createTodo(store: ActionContext<State, any>, text: string){
        store.commit('addTodo', text);
    }
}

export const todos = {
    state,
    getters,
    actions,
    mutations
}

