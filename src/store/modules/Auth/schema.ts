import gql from 'graphql-tag';

export const login = gql`    
    mutation ($email: String!, $password: String!){
        login(email: $email, password: $password)
    }
`;

export const register = gql`
  mutation ($email: String!, $password: String!){
      userCreate(email: $email, password: $password){
          email
      }
  } 
`;

export const me = gql`
    query {
        me{
            email
        }
    }
`;