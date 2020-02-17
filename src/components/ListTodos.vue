<template>
  <v-col cols="12" md="6">
    <v-sheet elevation="2" class="pa-12">
      <!-- Sem todos -->
      <v-alert
        outlined
        type="info"
        text
        v-if="!todos.length"
        color="white"
      >Adicione tarefas para aparecerem aqui :)</v-alert>

      <v-list subheader two-line flat v-else>
        <v-subheader class="white--text">Tarefas</v-subheader>
        <v-list-item-group multiple v-model="settings">
          <v-list-item
            v-for="(item, key) in todos"
            v-bind:key="key"
            @click.capture.stop="toggleTodo({ indx: item.id })"
          >
            <v-list-item-action>
              <v-checkbox color="grey lighten-1" v-model="item.done" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-bind:class="{ 'text--disabled': item.done }"
                v-bind:style="[
                  item.done ? { 'text-decoration': 'line-through' } : {}
                ]"
              >{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListTodos",
  data: () => ({
    settings: []
  }),
  computed: {
    ...mapState(["todos"])
  },
  methods: {
    ...mapActions(["toggleTodo", "syncTodos"]),
    removeAndCheckTodo() {
      this.toggleTodo();
    }
  },
  mounted: function() {
    this.syncTodos();
  }
};
</script>
