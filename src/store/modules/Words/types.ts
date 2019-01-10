export interface State {
    word: Word,
    words: any[]
}

export interface Word {
    id: number,
    name: string,
    definition: string
}