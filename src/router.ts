import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Login from './components/Auth/Login';

import Register from "./components/Auth/Register";
import IndexUser from "./views/IndexUser";
import ListUser from "./components/User/ListUser";
import ShowUser from "./components/User/ShowUser";

import IndexWord from "./views/IndexWord";
import ListWord from "./components/Word/ListWord";
import CreateWord from "./components/Word/CreateWord";
import ShowWord from "./components/Word/ShowWord";

import Apollo from './components/Apollo.vue'
import {LS_AUTH_TOKEN} from "./config";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
        path:"/login",
        name: "login",
        component: Login
    },
    {
        path:"/register",
        name:"register",
        component: Register
    },
    {
        path: "/user",
        name: "user",
        component: IndexUser,
        children:[
            {
                path:"",
                component: ListUser
            },
            {
                path:"profile",
                component: ShowUser
            }
        ],
        meta:{
            requireAuth: true
        }
    },
    {
        path: "/word",
        name: "word",
        component: IndexWord,
        children: [
            {
                path:"",
                component:ListWord
            },
            {
                path:"create",
                component: CreateWord
            },
            {
                path:"show/:id",
                component: ShowWord
            },

        ],
        meta:{
            requireAuth: true
        }
    }
  ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requireAuth)){
        console.log(localStorage.getItem(LS_AUTH_TOKEN) == null);
        if(localStorage.getItem(LS_AUTH_TOKEN) === null ){
            console.log('redirect to login...')
            next({
                path: "/login",
                params: {nextUrl: to.fullPath}
            })
        }else{
            next();
        }
    }else{
        next();
    }
})

export default router;