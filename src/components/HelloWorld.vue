<template>
 <section>
   <h1>Hellow World !</h1>
 </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
