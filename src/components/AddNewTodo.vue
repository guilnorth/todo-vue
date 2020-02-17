<template>
  <v-col cols="12" md="6">

    <!-- <v-sheet elevation="2" class="pa-12" color="white"> -->
    <v-textarea
      v-model="textInput"
      :auto-grow="true"
      :clearable="true"
      hint
      :persistent-hint="true"
      placeholder="Fazer café..."
      :rounded="true"
      row-height="24"
      rows="1"
      :solo="true"
    ></v-textarea>
    <div class="text-center">
      <v-btn rounded color="blue darken-2" dark v-on:click="addTodoAndClear()">
        <v-icon>mdi-plus</v-icon>Adicionar Tarefa
      </v-btn>
    </div>
    <!-- </v-sheet> -->
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNewTodo",
  data: () => ({
    textInput: ""
  }),
  methods: {
    ...mapActions(["addTodo"]),
    addTodoAndClear: function() {
      if (!this.textInput) return;
      this.addTodo({ text: this.textInput });
      this.textInput = "";
    }
  }
};
</script>
