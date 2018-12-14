<template>
  <section>
    <h3>Register</h3>
    <form action="">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <div>
        <label for="passwordRepeat">Repeat Password</label>
        <input id="passwordRepeat" type="password" v-model="passwordRepeat">
      </div>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";
  import {Action, Getter, State} from "vuex-class";

  @Component
  export default class Register extends Vue{
    @Provide() email: string = "";
    @Provide() password: string = "";
    @Provide() passwordRepeat: string = "";
  }
</script>

<style scoped>

</style>