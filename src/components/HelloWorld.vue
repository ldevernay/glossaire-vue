<template>
  <div class="hello">
    <h1>Todo</h1>
    <input type="text" @keydown.enter="setTodo" v-model="newTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key=index>{{todo.text}}</li>
    </ul>
    <h1>Done : </h1>
    <ul>
      <li v-for="(done, index) in dones" :key=index>{{done.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
    import {Component, Model, Prop, Provide, Vue} from 'vue-property-decorator';
  import {Action, Getter, State} from "vuex-class"
  import { Todos } from "../store/modules/todos/types";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    @Provide() newTodo: string = "jello";
    @Getter todos: Todos[];
    @Getter dones: Todos[];
    @Action('createTodo') createTodo: any;

    setTodo(){
        this.createTodo(this.newTodo);
        this.newTodo = "";
    }
}
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
