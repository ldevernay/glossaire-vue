import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import { apolloProvider } from "./ApolloClient";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
