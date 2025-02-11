<template>

<div class="flex flex-wrap justify-between items-center w-full px-[37px]  text-black h-[73px]">
    <h1 class="text-2xl md:text-4xl font-bold">Today</h1>
    <button @click="addNewData">
  <i class="fas fa-plus text-blue-500 border-2 border-blue-500 rounded-full p-1 h-[25px] w-[25px] flex items-center justify-center"></i>
</button>

</div>

<p v-if="todoList.length === 0" class="text-center text-gray-500 mt-4">Add tasks to your to-do list</p>

<div v-if="isEditing" class="fixed inset-0 flex items-center justify-center mt-[-80px]  bg-gray-500/[50%] p-4">
    <div class="bg-white w-full max-w-[350px] p-6 rounded-lg shadow-lg">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-black-900">Add Todo</h3>

        <textarea 
            rows="5" 
            v-model="newTodo" 
            placeholder="Enter a task" 
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        ></textarea>

        <div class="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 mt-4">
            <button 
                @click="cancelEdit" 
                class="w-full sm:w-auto px-5 py-2 font-bold text-blue-500 text-sm rounded-lg hover:bg-gray-200 transition"
            >
                Cancel
            </button>

            <button 
                @click="addNewTodo" 
                class="w-full sm:w-auto px-5 py-2 font-bold text-blue-500 text-sm rounded-lg hover:bg-gray-200 transition"
            >
                Save
            </button>
        </div>
    </div>
</div>



   
  
      <ListComponent :todoList="todoList"/>

</template>

<script>
import { useTodoStore } from '../stores/store';
import { mapActions } from 'pinia';
import ListComponent from './ListComponent.vue';

export default {
    components:{
        ListComponent
    },
    data() {
        return {
            newTodo: "",
            isEditing: false,
            
        };
    },
    computed: {
        todo() {
            return useTodoStore().todos
        },
        todoList() {
            return useTodoStore().todoList
        }
    },
    methods: {
        ...mapActions(useTodoStore, ['addTodo', 'removeTodo']),
        addNewTodo() {
            if (this.newTodo.trim()) {
                this.addTodo({ text: this.newTodo })
                this.newTodo = ""
            }
            this.isEditing = false
        },
        addNewData() {
            this.isEditing = true;
        },
        cancelEdit() {
            this.isEditing = false;
        },


    }


}
</script>


<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
