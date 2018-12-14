import Vue from "vue";
import VueApollo from 'vue-apollo';
import { setContext } from "apollo-link-context";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { LS_AUTH_TOKEN } from "./config";

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    if(token !== null){
        return {
            headers: {
                ...headers,
                token: token ? token : null
            }
        }
    }

});



export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

Vue.use(VueApollo);
