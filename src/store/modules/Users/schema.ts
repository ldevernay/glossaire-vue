import gql from 'graphql-tag'

export const allUser = gql`
    query {
        users{
            id
            email
            words{
                name
                definition
                links{
                    id
                    url
                    description
                    word
                }
            }
        }
    }
`;

export const currentUser = gql`
    query {
        me{
            id
            email
            words{
                name
                definition
                links{
                    id
                    url
                    description
                    word
                }
            }
        }
    }
`;