import gql from "graphql-tag";

export const getWords = gql`
    query {
        words{
            id
            name
            definition
            links{
                id
                url
                description
            }
        }
    }
`;

export const createWord = gql`
    mutation ($name: String!, $definition: String!){
        wordCreate(name: $name, definition: $definition){
            id,
            name,
            definition
        }
    }
`;

export const getWord = gql`
    query ($id: Int!){
        word(id: $id){
            id
            name
            definition
            links{
                id
                url
                description
            }
        }
    }
`