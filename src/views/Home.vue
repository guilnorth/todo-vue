<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <Header />
          </v-row>
          <v-row align="center" justify="center">
            <AddNewTodo />
          </v-row>
          <v-row align="center" justify="center">
            <ListTodos />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AddNewTodo from "../components/AddNewTodo.vue";
import ListTodos from "../components/ListTodos.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
    AddNewTodo,
    ListTodos
  }
};
</script>
