// Store
export interface State {
    todos: Todos[]
}

// models

export interface Todos {
    text: string
    checked: boolean
}