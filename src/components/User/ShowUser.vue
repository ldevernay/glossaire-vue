<template>
  <section>
    <h1>{{user.email}}</h1>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import {Action, Getter} from "vuex-class"

  @Component
  export default class ShowUser extends Vue {
    @Action("GET_CURRENT_USER") currentUser;
    @Getter('getCurrentUser') user;

    created(){
        this.currentUser()
    }
  }
</script>