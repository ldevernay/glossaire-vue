<template>
  <section>
    <h1>List</h1>
    <ul>
      <li v-for="word in words">
        <a href="" @click.prevent="showWord(word.id)">{{ word.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";
    import {Action, Getter} from "vuex-class"
    @Component
    export default class ListWord extends Vue {
      @Action("GET_ALL_WORDS") getAllWords;
      @Action('GET_WORD') getWord;
      @Getter("getWords") words;

      created(){
          this.getAllWords();
      }

      showWord(id){
          console.log(id)
          this.getWord({id: id})
          this.$router.push(`/word/show/${id}`);
      }
    }
</script>