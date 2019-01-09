<template>
  <section>
    <h3>Login</h3>
    <form method="post" @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div>
        <label for="password">password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";
  import {Action} from "vuex-class";

  @Component
  export default class Login extends Vue {
    @Provide() private email: string = "admin@admin.com";
    @Provide() private password: string = "password";
    @Action("LOGIN") LOGIN;

    login(){
        this.LOGIN({email: this.email, password: this.password})
            .then(() => {
                this.$router.push("about")
            });
    }
  }
</script>

<style scoped>

</style>