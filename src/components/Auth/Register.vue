<template>
  <section>
    <h3>Register</h3>
    <form @submit.prevent="sendRegister">
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
  export default class Register extends Vue{
    @Provide() email: string = "callan@callan.com";
    @Provide() password: string = "password";
    @Provide() passwordRepeat: string = "password";
    @Action("REGISTER") register;

    sendRegister(){
        console.log("payload: ", this.email, this.password, this.passwordRepeat);
        this.register(
            {
                email: this.email,
                password: this.password,
                passwordRepeat: this.passwordRepeat
            });
    }
  }
</script>

<style scoped>

</style>