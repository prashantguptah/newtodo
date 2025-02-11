import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    updateTodo({ index, text }) {
      if (this.todos[index]) {
        this.todos[index].text = text;
      }
    },
    // toggleComplete({ index, completed }) {
    //   this.todos[index].completed = completed; // Toggle the completion status
    // }
  },
  getters: {
    todoList: (state) => state.todos 
  },
  persist: true,
});
