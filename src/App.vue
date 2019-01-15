<template>
  <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login" >Login </router-link> |
        <router-link to="/register" >Register </router-link> |
        <router-link to="/user" >Users </router-link> |
        <router-link to="/user/profile" >Me</router-link> |
        <router-link to="/word">Words</router-link> |
        <router-link to="/word/create">Create Word</router-link> |
        <a href="#" @click.prevent="logout">Disconnect</a>
      </div>
      <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";
  import { LS_AUTH_TOKEN } from "./config";
  @Component
  export default class App extends Vue {
    @Provide() user: object = undefined;

    logout(){
        console.log("disconnect")
        localStorage.removeItem(LS_AUTH_TOKEN);
        this.$router.push("login")
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
