<template>
  <section>
    <Login/>
    <Register/>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Register from "../components/Auth/Register";
  import Login from "../components/Auth/Login";

  @Component({
      components: {Login, Register}
  })
  export default class Authentication extends Vue {

  }
</script>

<style scoped>

</style>