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
    {{ user.email }}
  </section>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";
  import {Action, Getter, State} from "vuex-class";
  import {User} from "@/store/modules/Auth/types";

  @Component
  export default class Login extends Vue {
    @Provide() private email: string = "admin@admin.com";
    @Provide() private password: string = "password";
  }
</script>

<style scoped>

</style>