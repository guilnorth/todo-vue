<template>
  <v-col cols="12" md="6">
    <v-sheet elevation="2" class="pa-12">
      <!-- Sem todos -->
      <v-alert outlined type="info" text>
        Adicione tarefas para aparecerem aqui :)
      </v-alert>

      <v-list subheader two-line flat>
        <v-subheader>Tarefas</v-subheader>

        <v-list-item-group v-model="settings" multiple>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="primary"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Fazer Café</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "ListTodos"
};
</script>
