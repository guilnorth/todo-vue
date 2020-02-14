<template>
  <v-col cols="12" md="6">
    <v-sheet elevation="2" class="pa-12">
      <v-textarea
        v-model="model"
        auto-grow="false"
        clearable="true"
        hint=""
        persistent-hint="true"
        placeholder="Fazer café..."
        rounded="true"
        row-height="24"
        rows="1"
        solo="true"
      ></v-textarea>
      <div class="text-center">
        <v-btn rounded color="primary" dark
          ><v-icon>mdi-plus</v-icon> Adicionar</v-btn
        >
      </div>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "AddNewTodo"
};
</script>
