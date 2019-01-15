<template>
  <section>
    <h3>all User</h3>
    <ul>
      <li v-for="user in users" :key="user.id" >{{user.email}}</li>
    </ul>
  </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Action, Getter} from 'vuex-class';

    @Component
    export default class ListUser extends Vue {
        @Action("GET_ALL_USERS") allUsers;
        @Getter("getAllUser") users;

        mounted(){
            this.allUsers();
        }
    }
</script>

<style scoped>

</style>