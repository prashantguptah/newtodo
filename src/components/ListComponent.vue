<template>
  <ul>
    <li
      v-for="(todo, index) in todoList"
      :key="index"
      class="flex items-center justify-between p-4  bg-white border-b border-gray-300 group hover:bg-gray-100"
    >
      <div class="flex items-center space-x-3">
        <input
          type="checkbox"
          class="checkbox-round"
          v-model="todo.completed"
        />

       
        <input
          v-if="editingIndex === index && !todo.completed"
          type="text"
          :ref="'editInput' + index"
          v-model="newText"
          @blur="editNewTodo(index)"
          @keyup.enter="editNewTodo(index)"
          
          class="border p-1 rounded"
        />

        <span
          v-else
          @dblclick="toggleEditing(todo.text, index)"
          class="text-gray-900 cursor-pointer text-lg w-[250px] text-[18px] break-all  flex items-center justify-between "
          :class="{ 'line-through text-gray-400': todo.completed }" 
        >
          {{ todo.text }}
        </span>
      </div>

      <div
        class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button
          @click="toggleEditing(todo.text, index)"
          class="text-gray-600 group-hover:block hidden"
          v-if="!todo.completed"
        >
          <i class="fa-solid fa-pencil"></i>
        </button>

        <button
          @click="removeTodo(index)"
          class="px-4 py-2 rounded-lg duration-300 flex items-center space-x-2"
        >
          <i class="fa-solid fa-trash text-gray-600"></i>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "pinia";
import { useTodoStore } from "../stores/store";

export default {
  data() {
    return {
      newText: "",
      editingIndex: null,
    };
  },
  props: ["todoList"],
  methods: {
    ...mapActions(useTodoStore, ["removeTodo", "updateTodo"]),

    editNewTodo(index) {
      if (this.newText.trim()) {
        this.updateTodo({ index, text: this.newText });
      }
      this.editingIndex = null;
      this.newText = "";
    },

    toggleEditing(text, index) {
      this.newText = text;
      this.editingIndex = index;
      
     
      this.$nextTick(() => {
        const inputField = this.$refs['editInput' + index][0]; 
        if (inputField) {
          inputField.focus();
        }
      });
    },
  },
};
</script>

<style scoped>
.checkbox-round {
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid rgba(128, 128, 128, 0.592);
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.checkbox-round:checked {
  background-color: green;
}

input[type="text"] {
  color: black;
}

input[type="text"]:focus {
  color: black;
}
ul li {
  height: 81px;
}
</style>
