<template>
  <section>
    <h1>Create word</h1>
    <form action="">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="definition">Definition</label>
        <input type="text" id="definition" v-model="definition" />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Provide, Vue } from "vue-property-decorator";

  @Component
  export default class CreateWord extends Vue{
    @Provide() private name: string = "Chuck Norris";
    @Provide() private definition: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur delectus distinctio harum hic magni nesciunt sed? Consequatur deserunt, fuga harum laboriosam magni, nisi nobis, perferendis provident reiciendis repudiandae voluptas."
  }
</script>

<style scoped>

</style>