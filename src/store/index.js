import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const keyStorage = "@vue-todo:todos";
export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos = [newTodo, ...state.todos];
    },
    toggleTodo(state, payload) {
      const { indexArray } = payload;
      state.todos[indexArray].done = !state.todos[indexArray].done;
    },
    syncTodos(state, payload) {
      state.todos = payload ? payload : [];
    }
  },
  actions: {
    //Gravar no localStorage
    addTodo(context, payload) {
      const { text } = payload;
      const newTodo = { id: this.state.todos.length + 1, text, done: false };
      const localStorageData = JSON.parse(localStorage.getItem(keyStorage));

      localStorage.setItem(
        keyStorage,
        JSON.stringify(
          localStorageData ? [newTodo, ...localStorageData] : [newTodo]
        )
      );
      context.commit("addTodo", newTodo);
    },
    toggleTodo(context, payload) {
      const { indx } = payload;
      const indexArray = context.state.todos.findIndex(item => item.id === indx);
      if (indexArray != -1) {
        context.commit("toggleTodo", { indexArray });
        //Alterando localStorage
        localStorage.setItem(keyStorage, JSON.stringify(context.state.todos));
      }
    },
    syncTodos(context) {
      const localStorageData = JSON.parse(localStorage.getItem(keyStorage));
      context.commit("syncTodos", localStorageData);
    }
  },
  modules: {}
});
