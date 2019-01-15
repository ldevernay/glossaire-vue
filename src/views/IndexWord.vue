<template>
  <section>
    <h1>Hello</h1>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class IndexWord extends Vue {

  }
</script>