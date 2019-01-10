<template>
  <section>
    <h1>Show</h1>
    <h3>{{ word.name }}</h3>
    <p>{{ word.definition }}</p>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import {Action, Getter} from "vuex-class"
  @Component
  export default class ShowWord extends Vue {
    @Getter('getWord') word;
  }
</script>

<style scoped>

</style>